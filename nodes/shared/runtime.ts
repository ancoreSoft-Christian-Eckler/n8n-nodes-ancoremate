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
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError, sleep } from 'n8n-workflow';

export interface OperationSpec {
	method: IHttpRequestMethods;
	path: string;
	read: boolean;
	list: boolean;
	pathParameters: string[];
	query: Array<{ name: string; option: boolean }>;
	body: Array<{ name: string; required: boolean; json: boolean }>;
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
	return (await this.helpers.httpRequestWithAuthentication.call(this, CREDENTIAL, options)) as FullResponse;
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
	let response = await request.call(this, client, spec.method, baseUrl + path, qs, body, spec.fileOutput);
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

export async function runOperations(
	this: IExecuteFunctions,
	operations: Record<string, OperationSpec>,
	baseUrl: string,
	client: string,
): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const results: INodeExecutionData[] = [];
	const sent = new Set<string>();

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
				for (const field of spec.body) {
					let value = field.required ? this.getNodeParameter(field.name, i) : additional[field.name];
					if (isEmpty(value)) {
						continue;
					}
					if (field.json && typeof value === 'string') {
						value = JSON.parse(value);
					}
					fields[field.name] = value as IDataObject;
				}
				body = fields;
			}

			// A reading request with the same values for several items is sent once.
			if (spec.read) {
				const key = JSON.stringify([operation, path, qs, body]);
				if (sent.has(key)) {
					continue;
				}
				sent.add(key);
			}

			const response = await send.call(this, baseUrl, client, spec, path, qs, body);
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
				for (const entry of ((result?.value as IDataObject[] | undefined) ?? [])) {
					results.push({ json: entry, pairedItem: { item: i } });
				}
			} else {
				results.push({ json: result ?? { success: true }, pairedItem: { item: i } });
			}
		} catch (error) {
			if (this.continueOnFail()) {
				results.push({ json: { error: (error as Error).message }, pairedItem: { item: i } });
				continue;
			}
			throw new NodeApiError(this.getNode(), error as JsonObject, { itemIndex: i });
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
		delete event.files;
		return (files as IDataObject[]).map((file) => ({ ...event, file }));
	}
	return [body];
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
	const response = (await request.call(this, client, 'GET', baseUrl + path, query)).body as IDataObject | undefined;
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
