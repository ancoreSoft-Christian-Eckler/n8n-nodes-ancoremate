// Generated from catalog/ by tools/AncoreMate.CatalogGenerator. Do not edit.
import type {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
	IWebhookFunctions,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError, NodeOperationError, sleep } from 'n8n-workflow';

export interface OperationSpec {
	method: IHttpRequestMethods;
	path: string;
	read: boolean;
	list: boolean;
	pathParameters: string[];
	query: Array<{ name: string; option: boolean }>;
	body: Array<{ name: string; required: boolean; json: boolean; list?: boolean; entries?: boolean }>;
	fileInput: boolean;
	fileOutput: boolean;
	filesOutput: boolean;
	async: boolean;
}

interface FullResponse {
	statusCode: number;
	headers: Record<string, string | string[] | undefined>;
	body: unknown;
}

const CREDENTIAL = 'ancoreMateOAuth2Api';

/** Longest time a node waits for a long-running action, for example a reload, to finish. */
const MAX_WAIT_MS = 6 * 60 * 60 * 1000;

async function request(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
	client: string,
	method: IHttpRequestMethods,
	url: string,
	qs: IDataObject,
	body?: IDataObject | Buffer,
	fileResponse = false,
	read = method === 'GET',
): Promise<FullResponse> {
	const file = Buffer.isBuffer(body);
	const headers: IDataObject = { Accept: fileResponse ? '*/*' : 'application/json', 'X-AncoreMate-Client': client };
	if (file) {
		headers['Content-Type'] = 'application/octet-stream';
	}
	const options: IHttpRequestOptions = {
		method,
		url,
		qs,
		headers,
		json: !file && !fileResponse,
		returnFullResponse: true,
	};
	if (fileResponse) {
		options.encoding = 'arraybuffer';
	}
	if (body !== undefined) {
		options.body = body;
	}
	const send = async () => (await this.helpers.httpRequestWithAuthentication.call(this, CREDENTIAL, options)) as FullResponse;
	// A kept-alive connection that ancoreMate or its front end closed in the meantime fails once with ECONNRESET
	// or "socket hang up". Reading requests (GET, the status checks of long-running actions, and reading actions
	// sent as POST such as Evaluate expression) are sent once more, keeping the error of n8n otherwise; changing
	// requests are not, since they may have arrived.
	return read
		? await send().catch(async (error: unknown) => (isClosedConnection(error) ? await send() : Promise.reject(error)))
		: await send();
}

/** Whether an error (or one of its causes) says that the connection was closed before an answer came. */
function isClosedConnection(error: unknown): boolean {
	let current: unknown = error;
	for (let depth = 0; current !== undefined && current !== null && depth < 5; depth++) {
		const value = current as { code?: unknown; message?: unknown; cause?: unknown };
		if (/ECONNRESET|EPIPE|socket hang up|closed unexpectedly/i.test(`${String(value.code ?? '')} ${String(value.message ?? '')}`)) {
			return true;
		}
		current = value.cause;
	}
	return false;
}

function header(response: FullResponse, name: string): string | undefined {
	const value = response.headers[name.toLowerCase()];
	return Array.isArray(value) ? value[0] : value;
}

/**
 * Sends an operation. A long-running action answers 202 with a status address below ancoreMate; the node polls it
 * until the result is there.
 */
async function send(
	this: IExecuteFunctions,
	baseUrl: string,
	client: string,
	spec: OperationSpec,
	path: string,
	qs: IDataObject,
	body?: IDataObject | Buffer,
): Promise<FullResponse> {
	let response = await request.call(this, client, spec.method, baseUrl + path, qs, body, spec.fileOutput, spec.method === 'GET' || spec.read);
	const started = Date.now();
	while (spec.async && response.statusCode === 202) {
		const location = header(response, 'location');
		if (location === undefined || !location.startsWith(baseUrl + '/')) {
			throw new Error('ancoreMate did not return a valid status address.');
		}
		if (Date.now() - started > MAX_WAIT_MS) {
			throw new Error('The action did not finish within 6 hours.');
		}
		const seconds = Math.min(60, Math.max(2, Number(header(response, 'retry-after')) || 10));
		await sleep(seconds * 1000);
		response = await request.call(this, client, 'GET', location, {}, undefined, spec.fileOutput);
	}
	return response;
}

function fileNameOf(disposition: string | undefined): string | undefined {
	if (disposition === undefined) {
		return undefined;
	}
	const encoded = /filename\*=UTF-8''([^;]+)/i.exec(disposition);
	if (encoded) {
		return decodeURIComponent(encoded[1]);
	}
	const plain = /filename="?([^";]+)"?/i.exec(disposition);
	return plain ? plain[1] : undefined;
}

function isEmpty(value: unknown): boolean {
	return value === undefined || value === null || value === '';
}

/**
 * The values of a list field: one input field per value, or an expression or JSON text that returns a list.
 */
function toList(value: unknown): unknown[] {
	const values = Array.isArray(value) ? value : [value];
	return values
		.flatMap((entry) => {
			if (Array.isArray(entry)) {
				return entry as unknown[];
			}
			if (typeof entry === 'string' && entry.trim().startsWith('[')) {
				try {
					const parsed: unknown = JSON.parse(entry);
					if (Array.isArray(parsed)) {
						return parsed as unknown[];
					}
				} catch {
					// A value that only looks like a list.
				}
			}
			return [entry];
		})
		.filter((entry) => !isEmpty(entry));
}

/**
 * The entries of a list with input fields (for example selections), without empty fields.
 */
function entriesOf(collection: unknown): IDataObject[] {
	const entries = ((collection as IDataObject | undefined)?.entries as IDataObject[] | undefined) ?? [];
	return entries
		.map((entry) => {
			const cleaned: IDataObject = {};
			for (const [key, value] of Object.entries(entry)) {
				const cleanedValue = Array.isArray(value) ? toList(value) : value;
				if (!isEmpty(cleanedValue) && !(Array.isArray(cleanedValue) && cleanedValue.length === 0)) {
					cleaned[key] = cleanedValue as IDataObject;
				}
			}
			return cleaned;
		})
		.filter((entry) => Object.keys(entry).length > 0);
}

/**
 * The message of an ancoreMate error response ({"error": {"code", "message"}}), which says what to correct; n8n
 * itself only shows a general text such as "Bad request - please check your parameters".
 */
function ancoreMateMessage(error: unknown): string | undefined {
	const source = error as IDataObject;
	const context = source?.context as IDataObject | undefined;
	const response = source?.response as IDataObject | undefined;
	const cause = source?.cause as IDataObject | undefined;
	const causeResponse = cause?.response as IDataObject | undefined;
	// httpRequestWithAuthentication throws a NodeApiError with the response body in context.data.
	for (const candidate of [context?.data, response?.data, response?.body, causeResponse?.data, causeResponse?.body]) {
		// File actions request binary data, so their error body arrives as bytes.
		const text = typeof candidate === 'string'
			? candidate
			: Buffer.isBuffer(candidate) || candidate instanceof ArrayBuffer || ArrayBuffer.isView(candidate)
				? Buffer.from(candidate as ArrayBuffer).toString('utf8')
				: undefined;
		let parsed: unknown = candidate;
		if (text !== undefined) {
			try {
				parsed = JSON.parse(text);
			} catch {
				continue;
			}
		}
		const message = ((parsed as IDataObject | undefined)?.error as IDataObject | undefined)?.message;
		if (typeof message === 'string' && message.length > 0) {
			return message;
		}
	}
	// The NodeApiError also keeps the message of the body as description.
	return typeof source?.description === 'string' && source.description.length > 0 ? source.description : undefined;
}

export async function runOperations(
	this: IExecuteFunctions,
	operations: Record<string, OperationSpec>,
	baseUrl: string,
	client: string,
): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const results: INodeExecutionData[] = [];
	// A reading request with the same values for several items is sent once; every item gets the result.
	const sent = new Map<string, FullResponse>();

	for (let i = 0; i < items.length; i++) {
		try {
			const operation = this.getNodeParameter('operation', i) as string;
			const spec = operations[operation];
			let path = spec.path;
			for (const name of spec.pathParameters) {
				path = path.replace(`{${name}}`, encodeURIComponent(String(this.getNodeParameter(name, i))));
			}

			const qs: IDataObject = {};
			const options = this.getNodeParameter('options', i, {}) as IDataObject;
			for (const parameter of spec.query) {
				const value = parameter.option ? options[parameter.name] : this.getNodeParameter(parameter.name, i, '');
				if (!isEmpty(value)) {
					qs[parameter.name] = value as string;
				}
			}

			let body: IDataObject | Buffer | undefined;
			if (spec.fileInput) {
				const property = this.getNodeParameter('binaryPropertyName', i) as string;
				this.helpers.assertBinaryData(i, property);
				body = await this.helpers.getBinaryDataBuffer(i, property);
			} else if (spec.body.length > 0) {
				const fields: IDataObject = {};
				const additional = this.getNodeParameter('additionalFields', i, {}) as IDataObject;
				const parseJson = (name: string, text: string): unknown => {
					try {
						return JSON.parse(text);
					} catch (parseError) {
						throw new NodeOperationError(
							this.getNode(),
							`The value of '${name}' is not valid JSON: ${(parseError as Error).message}`,
							{ itemIndex: i },
						);
					}
				};
				for (const field of spec.body) {
					let value = field.required ? this.getNodeParameter(field.name, i) : additional[field.name];
					if (field.list) {
						const values = toList(value);
						if (values.length > 0) {
							fields[field.name] = values as IDataObject[];
						}
						continue;
					}
					if (field.entries) {
						const input = field.required ? this.getNodeParameter(`${field.name}Ui`, i, {}) : additional[`${field.name}Ui`];
						const fromInput = entriesOf(input);
						if (!isEmpty(value) && value !== '[]') {
							const parsed = typeof value === 'string' ? parseJson(field.name, value) : value;
							fromInput.push(...((Array.isArray(parsed) ? parsed : [parsed]) as IDataObject[]));
						}
						if (fromInput.length > 0) {
							fields[field.name] = fromInput;
						}
						continue;
					}
					if (isEmpty(value)) {
						continue;
					}
					if (field.json && typeof value === 'string') {
						value = parseJson(field.name, value) as IDataObject;
					}
					fields[field.name] = value as IDataObject;
				}
				body = fields;
			}

			const key = spec.read ? JSON.stringify([operation, path, qs, body]) : undefined;
			let response = key === undefined ? undefined : sent.get(key);
			if (response === undefined) {
				response = await send.call(this, baseUrl, client, spec, path, qs, body);
				if (key !== undefined) {
					sent.set(key, response);
				}
			}
			const outputField = spec.fileOutput || spec.filesOutput ? (this.getNodeParameter('dataPropertyName', i, 'data') as string) || 'data' : 'data';
			if (spec.fileOutput) {
				const data = Buffer.from(response.body as ArrayBuffer);
				const fileName = fileNameOf(header(response, 'content-disposition')) ?? 'file';
				const mimeType = (header(response, 'content-type') ?? 'application/octet-stream').split(';')[0];
				results.push({
					json: { fileName, mimeType, fileSize: data.length },
					binary: { [outputField]: await this.helpers.prepareBinaryData(data, fileName, mimeType) },
					pairedItem: { item: i },
				});
				continue;
			}

			const result = response.body !== null && typeof response.body === 'object' ? (response.body as IDataObject) : undefined;
			if (spec.filesOutput) {
				// Several files: one item per file with the file as binary data.
				for (const file of ((result?.value as IDataObject[] | undefined) ?? [])) {
					const data = Buffer.from(String(file.content ?? ''), 'base64');
					const fileName = String(file.name ?? 'file');
					const mimeType = String(file.contentType ?? 'application/octet-stream');
					results.push({
						json: { fileName, mimeType, fileSize: data.length },
						binary: { [outputField]: await this.helpers.prepareBinaryData(data, fileName, mimeType) },
						pairedItem: { item: i },
					});
				}
				continue;
			}
			if (spec.list) {
				const entries = (result?.value as IDataObject[] | undefined) ?? [];
				const total = typeof result?.totalRows === 'number' ? result.totalRows : undefined;
				if (result?.truncated === true || (total !== undefined && total > entries.length)) {
					// The list was cut by the limit; say so, since one item per entry does not show it.
					this.addExecutionHints?.({
						message: total !== undefined
							? `Only ${entries.length} of ${total} rows were returned. Raise the limit, or use Export chart data for large tables.`
							: `Only the first ${entries.length} entries were returned; there are more. Raise the limit or filter the list.`,
						type: 'warning',
						location: 'outputPane',
					});
				}
				if (this.getNodeParameter('outputMode', i, 'items') === 'whole') {
					results.push({ json: result ?? {}, pairedItem: { item: i } });
				} else {
					for (const entry of entries) {
						results.push({ json: entry, pairedItem: { item: i } });
					}
				}
			} else {
				results.push({ json: result ?? (spec.method === 'DELETE' ? { deleted: true } : { success: true }), pairedItem: { item: i } });
			}
		} catch (error) {
			const message = error instanceof NodeOperationError ? error.message : (ancoreMateMessage(error) ?? (error as Error).message);
			if (this.continueOnFail()) {
				results.push({ json: { error: message }, pairedItem: { item: i } });
				continue;
			}
			if (error instanceof NodeOperationError) {
				throw new NodeOperationError(this.getNode(), error, { itemIndex: i });
			}
			if (error instanceof NodeApiError) {
				// n8n already wrapped the response ("Bad request - please check your parameters") and returns that error
				// unchanged when it is wrapped again; a new error carries the ancoreMate message, which says what to correct.
				const httpCode = error.httpCode ?? undefined;
				throw new NodeApiError(this.getNode(), { message, httpCode, description: error.description } as JsonObject, { itemIndex: i, message, httpCode });
			}
			throw new NodeApiError(this.getNode(), error as JsonObject, { itemIndex: i, message, description: message });
		}
	}

	return [results];
}

/**
 * The items of a trigger: an event with several files (ancoreShare report) gives one item per file, with the
 * event values next to the file, so that the following nodes handle each file.
 */
export function eventItems(body: IDataObject): IDataObject[] {
	const files = body.files;
	if (Array.isArray(files) && files.length > 0) {
		const event: IDataObject = { ...body };
		const attachments = Array.isArray(event.attachments) ? (event.attachments as IDataObject[]) : [];
		delete event.files;
		delete event.attachments;
		return (files as IDataObject[]).map((file, index) =>
			attachments[index] === undefined ? { ...event, file } : { ...event, file, attachment: attachments[index] },
		);
	}
	return [body];
}

/**
 * The output of a trigger. With "Include the report files" each item carries its file as binary data in the field
 * data, ready for nodes such as Gmail or Send Email.
 */
export async function eventData(this: IWebhookFunctions, body: IDataObject): Promise<INodeExecutionData[]> {
	const result: INodeExecutionData[] = [];
	for (const item of eventItems(body)) {
		const attachment = item.attachment as IDataObject | undefined;
		delete item.attachment;
		if (attachment === undefined || typeof attachment.ContentBytes !== 'string') {
			result.push({ json: item });
			continue;
		}
		const data = Buffer.from(attachment.ContentBytes, 'base64');
		result.push({ json: item, binary: { data: await this.helpers.prepareBinaryData(data, attachment.Name as string) } });
	}
	return result;
}

export interface TriggerSpec {
	path: string;
	query: string[];
}

/**
 * Turns a trigger on: ancoreMate creates the webhook in Qlik Cloud and answers with the address of the
 * subscription, which the node keeps to turn the trigger off again.
 */
export async function createSubscription(
	this: IHookFunctions,
	events: Record<string, TriggerSpec>,
	baseUrl: string,
	client: string,
): Promise<boolean> {
	const spec = events[this.getNodeParameter('event') as string];
	const qs: IDataObject = {};
	for (const name of spec.query) {
		const value = this.getNodeParameter(name, '');
		if (!isEmpty(value)) {
			qs[name] = value as string;
		}
	}
	const response = await request.call(this, client, 'POST', baseUrl + spec.path, qs, { callbackUrl: this.getNodeWebhookUrl('default') });
	const location = header(response, 'location');
	if (location === undefined || !location.startsWith(baseUrl + '/')) {
		throw new Error('ancoreMate did not return the address of the trigger.');
	}
	this.getWorkflowStaticData('node').subscriptionUrl = location;
	return true;
}

export async function deleteSubscription(this: IHookFunctions, baseUrl: string, client: string): Promise<boolean> {
	const data = this.getWorkflowStaticData('node');
	if (typeof data.subscriptionUrl === 'string' && data.subscriptionUrl.startsWith(baseUrl + '/')) {
		try {
			await request.call(this, client, 'DELETE', data.subscriptionUrl, {});
		} catch {
			return false;
		}
	}
	delete data.subscriptionUrl;
	return true;
}

export async function loadOptions(
	this: ILoadOptionsFunctions,
	baseUrl: string,
	client: string,
	path: string,
	qs: IDataObject,
	references: Record<string, string>,
	collection: string,
	valuePath: string,
	titlePath: string,
): Promise<INodePropertyOptions[]> {
	// Values of other fields (for example the chosen app) go into the path or the query.
	const query: IDataObject = { ...qs };
	for (const [name, parameter] of Object.entries(references)) {
		const value = this.getCurrentNodeParameter(parameter);
		if (isEmpty(value)) {
			return [];
		}
		if (path.includes(`{${name}}`)) {
			path = path.replace(`{${name}}`, encodeURIComponent(String(value)));
		} else {
			query[name] = value as string;
		}
	}
	let response: IDataObject | undefined;
	try {
		response = (await request.call(this, client, 'GET', baseUrl + path, query)).body as IDataObject | undefined;
	} catch (error) {
		// n8n shows only "Error fetching options" for a failed list, so the message that says what to do (for
		// example sign in again) becomes the only entry of the list; it has no value and cannot be used.
		const message = ancoreMateMessage(error);
		if (message !== undefined) {
			return [{ name: message, value: '' }];
		}
		throw new NodeOperationError(this.getNode(), (error as Error).message);
	}
	const entries = ((response?.[collection] as IDataObject[] | undefined) ?? []);
	return entries
		.map((entry) => ({
			name: titlePath === valuePath || String(entry[titlePath]).includes(String(entry[valuePath]))
				? String(entry[titlePath])
				: `${String(entry[titlePath])} (${String(entry[valuePath])})`,
			value: String(entry[valuePath]),
		}))
		.sort((left, right) => left.name.localeCompare(right.name));
}
