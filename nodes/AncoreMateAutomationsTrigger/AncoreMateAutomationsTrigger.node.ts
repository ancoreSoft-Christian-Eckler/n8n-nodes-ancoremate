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
import { createSubscription, deleteSubscription, eventData, loadOptions, type TriggerSpec } from '../shared/runtime';

const BASE_URL = 'https://ancorecloud.com/ancoremate';
const CLIENT = 'n8n/1.23.5';

const EVENTS: Record<string, TriggerSpec> = {
	"whenAutomationCreated": {
		"path": "/v1/triggers/automation-created",
		"query": [
			"spaceId"
		]
	},
	"whenAutomationDeleted": {
		"path": "/v1/triggers/automation-deleted",
		"query": [
			"automationId",
			"spaceId"
		]
	},
	"whenAutomationRunEnded": {
		"path": "/v1/triggers/automation-run-ended",
		"query": [
			"automationId",
			"spaceId"
		]
	},
	"whenAutomationRunFailed": {
		"path": "/v1/triggers/automation-run-failed",
		"query": [
			"automationId",
			"spaceId"
		]
	},
	"whenAutomationRunStarted": {
		"path": "/v1/triggers/automation-run-started",
		"query": [
			"automationId",
			"spaceId"
		]
	},
	"whenAutomationUpdated": {
		"path": "/v1/triggers/automation-updated",
		"query": [
			"automationId",
			"spaceId"
		]
	}
};

export class AncoreMateAutomationsTrigger implements INodeType {
	description: INodeTypeDescription = {
		"displayName": "ancoreMate Automations Trigger",
		"name": "ancoreMateAutomationsTrigger",
		"icon": "file:ancoremate.svg",
		"group": [
			"trigger"
		],
		"version": 1,
		"subtitle": "={{$parameter[\"event\"]}}",
		"description": "Starts the workflow when an event happens in Qlik Cloud®. Run and manage the automations of Qlik Cloud®: run, stop and retry automations, follow their runs, copy, enable or move automations and maintain their connections. Triggers when an automation changes or a run starts, ends or fails.",
		"defaults": {
			"name": "ancoreMate Automations Trigger"
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
						"name": "When an automation is created",
						"value": "whenAutomationCreated",
						"description": "Starts when an automation is created."
					},
					{
						"name": "When an automation is deleted",
						"value": "whenAutomationDeleted",
						"description": "Starts when an automation is deleted."
					},
					{
						"name": "When an automation is updated",
						"value": "whenAutomationUpdated",
						"description": "Starts when an automation is changed."
					},
					{
						"name": "When an automation run ends",
						"value": "whenAutomationRunEnded",
						"description": "Starts when a run of an automation ends."
					},
					{
						"name": "When an automation run fails",
						"value": "whenAutomationRunFailed",
						"description": "Starts when a run of an automation fails."
					},
					{
						"name": "When an automation run starts",
						"value": "whenAutomationRunStarted",
						"description": "Starts when a run of an automation starts."
					}
				],
				"default": "whenAutomationCreated"
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationCreated"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "Automation",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationDeleted"
						]
					}
				},
				"description": "Only events of this automation. Leave empty for all automations."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationDeleted"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "Automation",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationUpdated"
						]
					}
				},
				"description": "Only events of this automation. Leave empty for all automations."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationUpdated"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "Automation",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationRunEnded"
						]
					}
				},
				"description": "Only events of this automation. Leave empty for all automations."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationRunEnded"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "Automation",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationRunFailed"
						]
					}
				},
				"description": "Only events of this automation. Leave empty for all automations."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationRunFailed"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "Automation",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationRunStarted"
						]
					}
				},
				"description": "Only events of this automation. Leave empty for all automations."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationRunStarted"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			}
		]
	};

	methods = {
		loadOptions: {
			async loadListAutomationsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/automations', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListSpaceChoicesId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/space-choices', {"limit":1000}, {}, 'value', 'id', 'name');
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
		return { workflowData: [await eventData.call(this, this.getBodyData())] };
	}
}
