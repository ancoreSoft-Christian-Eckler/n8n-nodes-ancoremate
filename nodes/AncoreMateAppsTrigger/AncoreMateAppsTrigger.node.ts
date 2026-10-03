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
	"whenAppCreated": {
		"path": "/v1/triggers/app-created",
		"query": [
			"spaceId"
		]
	},
	"whenAppDataUpdated": {
		"path": "/v1/triggers/app-data-updated",
		"query": [
			"appId",
			"spaceId"
		]
	},
	"whenAppExported": {
		"path": "/v1/triggers/app-exported",
		"query": [
			"appId",
			"spaceId"
		]
	},
	"whenAppPublished": {
		"path": "/v1/triggers/app-published",
		"query": [
			"appId",
			"spaceId"
		]
	}
};

export class AncoreMateAppsTrigger implements INodeType {
	description: INodeTypeDescription = {
		"displayName": "ancoreMate Apps Trigger",
		"name": "ancoreMateAppsTrigger",
		"icon": "file:ancoremate.svg",
		"group": [
			"trigger"
		],
		"version": 1,
		"subtitle": "={{$parameter[\"event\"]}}",
		"description": "Starts the workflow when an event happens in Qlik Cloud®. Manage Qlik Sense® apps in Qlik Cloud®: create, copy, publish, move, export and import apps (QVF), maintain media files, load scripts, data preparation scripts and performance evaluations. Triggers when an app is created, published, exported or its data model changes.",
		"defaults": {
			"name": "ancoreMate Apps Trigger"
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
						"name": "When an app is created",
						"value": "whenAppCreated",
						"description": "Starts when an app is created."
					},
					{
						"name": "When an app is exported",
						"value": "whenAppExported",
						"description": "Starts when an app is exported."
					},
					{
						"name": "When an app is published",
						"value": "whenAppPublished",
						"description": "Starts when an app is published to a managed space."
					},
					{
						"name": "When the data model of an app changes",
						"value": "whenAppDataUpdated",
						"description": "Starts when the data model of an app is updated, for example by a reload with changed tables."
					}
				],
				"default": "whenAppCreated"
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppCreated"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppExported"
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
							"whenAppExported"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppPublished"
						]
					}
				},
				"description": "Only when this app is published (the app in the source space). Leave empty for all apps."
			},
			{
				"displayName": "Managed space ID",
				"name": "spaceId",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppPublished"
						]
					}
				},
				"description": "Only publications to this managed space. Leave empty for all spaces."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppDataUpdated"
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
							"whenAppDataUpdated"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			}
		]
	};

	methods = {
		loadOptions: {
			async loadGetAppsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps', {"limit":1000}, {}, 'value', 'id', 'name');
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
