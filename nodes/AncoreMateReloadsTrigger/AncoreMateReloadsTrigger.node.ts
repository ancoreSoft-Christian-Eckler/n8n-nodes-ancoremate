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
const CLIENT = 'n8n/1.17.3';

const EVENTS: Record<string, TriggerSpec> = {
	"whenAppReloadFinished": {
		"path": "/v1/triggers/app-reload-finished",
		"query": [
			"appId",
			"spaceId",
			"status"
		]
	}
};

export class AncoreMateReloadsTrigger implements INodeType {
	description: INodeTypeDescription = {
		"displayName": "ancoreMate Reloads Trigger",
		"name": "ancoreMateReloadsTrigger",
		"icon": "file:ancoremate.svg",
		"group": [
			"trigger"
		],
		"version": 1,
		"subtitle": "={{$parameter[\"event\"]}}",
		"description": "Starts the workflow when an event happens in Qlik Cloud®. Reload Qlik Sense® apps in Qlik Cloud® and wait for the result, follow and cancel reloads, read reload logs and manage reload schedules. Triggers when an app reload finishes, also of reload tasks, filtered by app and result.",
		"defaults": {
			"name": "ancoreMate Reloads Trigger"
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
						"name": "When an app reload finishes",
						"value": "whenAppReloadFinished",
						"description": "Starts when a reload of an app finishes, successfully or with an error."
					}
				],
				"default": "whenAppReloadFinished"
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppReloadFinished"
						]
					}
				},
				"description": "Only events of this app. Leave empty for all apps."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppReloadFinished"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "Result",
				"name": "status",
				"type": "options",
				"options": [
					{
						"name": "Any",
						"value": ""
					},
					{
						"name": "ok",
						"value": "ok"
					},
					{
						"name": "error",
						"value": "error"
					}
				],
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppReloadFinished"
						]
					}
				},
				"description": "Only successful (ok) or failed (error) reloads. Leave empty for both."
			}
		]
	};

	methods = {
		loadOptions: {
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
