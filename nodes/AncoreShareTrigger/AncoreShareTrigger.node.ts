// Generated from catalog/ by tools/AncoreMate.CatalogGenerator. Do not edit.
import type {
	IHookFunctions,
	ILoadOptionsFunctions,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	IWebhookFunctions,
	IWebhookResponseData,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { createSubscription, deleteSubscription, eventItems, loadOptions, type TriggerSpec } from '../shared/runtime';

const BASE_URL = 'https://ancorecloud.com/ancoremate';
const CLIENT = 'n8n/1.19.0';

const EVENTS: Record<string, TriggerSpec> = {
	"whenAncoreShareReportFinished": {
		"path": "/v1/triggers/ancoreshare-report-finished",
		"query": [
			"key",
			"accountId",
			"appId",
			"reportId"
		]
	}
};

export class AncoreShareTrigger implements INodeType {
	description: INodeTypeDescription = {
		"displayName": "ancoreMate ancoreShare Reports Trigger",
		"name": "ancoreShareTrigger",
		"icon": "file:ancoremate.svg",
		"group": [
			"trigger"
		],
		"version": 1,
		"subtitle": "={{$parameter[\"event\"]}}",
		"description": "Starts the workflow when an event happens in Qlik Cloud®. Run ancoreShare reports, download the report files and read the report usage. Triggers when an ancoreShare report button has finished a report.",
		"defaults": {
			"name": "ancoreMate ancoreShare Reports Trigger"
		},
		"inputs": [],
		"outputs": [NodeConnectionTypes.Main],
		"credentials": [
			{
				"name": "ancoreMateOAuth2Api",
				"required": true
			}
		],
		"webhooks": [
			{
				"name": "default",
				"httpMethod": "POST",
				"responseMode": "onReceived",
				"path": "webhook"
			}
		],
		"properties": [
			{
				"displayName": "Event",
				"name": "event",
				"type": "options",
				"noDataExpression": true,
				"required": true,
				"options": [
					{
						"name": "When an ancoreShare report is finished",
						"value": "whenAncoreShareReportFinished",
						"description": "Starts when a report button with ancoreMate event enabled has finished a report, run by a user or through the interface."
					}
				],
				"default": "whenAncoreShareReportFinished"
			},
			{
				"displayName": "ancoreMate key",
				"name": "key",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"event": [
							"whenAncoreShareReportFinished"
						]
					}
				},
				"description": "The ancoreMate key shown in the ancoreMate settings of the report button."
			},
			{
				"displayName": "Account ID",
				"name": "accountId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"event": [
							"whenAncoreShareReportFinished"
						]
					}
				},
				"description": "The ancoreShare account ID (customer number)."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"event": [
							"whenAncoreShareReportFinished"
						]
					}
				},
				"description": "The app with the report button."
			},
			{
				"displayName": "Report",
				"name": "reportId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAncoreShareReportsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"event": [
							"whenAncoreShareReportFinished"
						]
					}
				},
				"description": "The report button."
			}
		]
	};

	methods = {
		loadOptions: {
			async loadListAncoreShareReportsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/ancoreshare/apps/{appId}/reports', {}, {"appId":"appId"}, 'value', 'id', 'title');
			},
			async loadListAppChoicesResourceId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/app-choices', {"limit":1000}, {}, 'value', 'resourceId', 'name');
			},
		},
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				return typeof this.getWorkflowStaticData('node').subscriptionUrl === 'string';
			},
			async create(this: IHookFunctions): Promise<boolean> {
				return createSubscription.call(this, EVENTS, BASE_URL, CLIENT);
			},
			async delete(this: IHookFunctions): Promise<boolean> {
				return deleteSubscription.call(this, BASE_URL, CLIENT);
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		return { workflowData: [this.helpers.returnJsonArray(eventItems(this.getBodyData()))] };
	}
}
