// Generated from catalog/ by tools/AncoreMate.CatalogGenerator. Do not edit.
import type {
	IExecuteFunctions,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { loadOptions, runOperations, type OperationSpec } from '../shared/runtime';

const BASE_URL = 'https://ancorecloud.com/ancoremate';
const CLIENT = 'n8n/1.23.3';

const OPERATIONS: Record<string, OperationSpec> = {
	"copyAutomation": {
		"method": "POST",
		"path": "/v1/automations/{automationId}/copy",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createAutomation": {
		"method": "POST",
		"path": "/v1/automations",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "schedules",
				"required": false,
				"json": true
			},
			{
				"name": "workspace",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "maxConcurrentRuns",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createAutomationConnection": {
		"method": "POST",
		"path": "/v1/automation-connections",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "params",
				"required": false,
				"json": true
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "connectorId",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteAutomation": {
		"method": "DELETE",
		"path": "/v1/automations/{automationId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteAutomationConnection": {
		"method": "DELETE",
		"path": "/v1/automation-connections/{automationConnectionId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationConnectionId"
		],
		"query": [
			{
				"name": "forced",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"disableAutomation": {
		"method": "POST",
		"path": "/v1/automations/{automationId}/disable",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"enableAutomation": {
		"method": "POST",
		"path": "/v1/automations/{automationId}/enable",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"exportAutomationRun": {
		"method": "POST",
		"path": "/v1/automations/{automationId}/runs/{runId}/export",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId",
			"runId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getAutomation": {
		"method": "GET",
		"path": "/v1/automations/{automationId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getAutomationConnection": {
		"method": "GET",
		"path": "/v1/automation-connections/{automationConnectionId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"automationConnectionId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getAutomationRun": {
		"method": "GET",
		"path": "/v1/automations/{automationId}/runs/{runId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"automationId",
			"runId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listAutomationConnections": {
		"method": "GET",
		"path": "/v1/automation-connections",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "listAll",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listAutomationRuns": {
		"method": "GET",
		"path": "/v1/automations/{automationId}/runs",
		"read": true,
		"list": true,
		"pathParameters": [
			"automationId"
		],
		"query": [
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listAutomations": {
		"method": "GET",
		"path": "/v1/automations",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "listAll",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"moveAutomationConnectionToSpace": {
		"method": "PUT",
		"path": "/v1/automation-connections/{automationConnectionId}/space",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationConnectionId"
		],
		"query": [],
		"body": [
			{
				"name": "spaceId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"moveAutomationToSpace": {
		"method": "PUT",
		"path": "/v1/automations/{automationId}/space",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [
			{
				"name": "spaceId",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"retryAutomationRun": {
		"method": "POST",
		"path": "/v1/automations/{automationId}/runs/{runId}/retry",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId",
			"runId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"runAutomation": {
		"method": "POST",
		"path": "/v1/automations/{automationId}/runs",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [
			{
				"name": "context",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"stopAutomationRun": {
		"method": "POST",
		"path": "/v1/automations/{automationId}/runs/{runId}/stop",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId",
			"runId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateAutomation": {
		"method": "PUT",
		"path": "/v1/automations/{automationId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "schedules",
				"required": false,
				"json": true
			},
			{
				"name": "workspace",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "maxConcurrentRuns",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateAutomationConnection": {
		"method": "PUT",
		"path": "/v1/automation-connections/{automationConnectionId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationConnectionId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "params",
				"required": false,
				"json": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getQlikConnection": {
		"method": "GET",
		"path": "/v1/connection",
		"read": true,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"sendQlikCloudRequest": {
		"method": "POST",
		"path": "/v1/qlik-request",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "method",
				"required": true,
				"json": false
			},
			{
				"name": "path",
				"required": true,
				"json": false
			},
			{
				"name": "query",
				"required": false,
				"json": false
			},
			{
				"name": "body",
				"required": false,
				"json": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	}
};

export class AncoreMateAutomations implements INodeType {
	description: INodeTypeDescription = {
		"displayName": "ancoreMate Automations",
		"name": "ancoreMateAutomations",
		"icon": "file:ancoremate.svg",
		"group": [
			"transform"
		],
		"version": 1,
		"subtitle": "={{$parameter[\"operation\"] + \": \" + $parameter[\"resource\"]}}",
		"description": "Run and manage the automations of Qlik Cloud®: run, stop and retry automations, follow their runs, copy, enable or move automations and maintain their connections. Triggers when an automation changes or a run starts, ends or fails.",
		"defaults": {
			"name": "ancoreMate Automations"
		},
		"usableAsTool": true,
		"inputs": [NodeConnectionTypes.Main],
		"outputs": [NodeConnectionTypes.Main],
		"credentials": [
			{
				"name": "ancoreMateOAuth2Api",
				"required": true
			}
		],
		"properties": [
			{
				"displayName": "Resource",
				"name": "resource",
				"type": "options",
				"noDataExpression": true,
				"options": [
					{
						"name": "Automation",
						"value": "automation"
					},
					{
						"name": "Automation connection",
						"value": "automation connection"
					},
					{
						"name": "Automation run",
						"value": "automation run"
					},
					{
						"name": "Connection",
						"value": "connection"
					},
					{
						"name": "Request",
						"value": "request"
					}
				],
				"default": "automation"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						]
					}
				},
				"options": [
					{
						"name": "Copy",
						"value": "copyAutomation",
						"action": "Copy automation",
						"description": "Creates a copy of an automation."
					},
					{
						"name": "Create",
						"value": "createAutomation",
						"action": "Create automation",
						"description": "Creates an automation in Qlik Automate."
					},
					{
						"name": "Delete",
						"value": "deleteAutomation",
						"action": "Delete automation",
						"description": "Deletes an automation."
					},
					{
						"name": "Disable",
						"value": "disableAutomation",
						"action": "Disable automation",
						"description": "Disables an automation so that it no longer runs."
					},
					{
						"name": "Enable",
						"value": "enableAutomation",
						"action": "Enable automation",
						"description": "Enables an automation so that it runs on its triggers again."
					},
					{
						"name": "Get",
						"value": "getAutomation",
						"action": "Get automation",
						"description": "Returns an automation of Qlik Automate."
					},
					{
						"name": "Get Many",
						"value": "listAutomations",
						"action": "List automations",
						"description": "Lists the automations of Qlik Automate the connected user can see."
					},
					{
						"name": "Move to Space",
						"value": "moveAutomationToSpace",
						"action": "Move automation to space",
						"description": "Moves an automation to another space."
					},
					{
						"name": "Update",
						"value": "updateAutomation",
						"action": "Update automation",
						"description": "Replaces the definition of an automation."
					}
				],
				"default": "copyAutomation"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createAutomationConnection",
						"action": "Create automation connection",
						"description": "Creates a connection for automations."
					},
					{
						"name": "Delete",
						"value": "deleteAutomationConnection",
						"action": "Delete automation connection",
						"description": "Deletes an automation connection."
					},
					{
						"name": "Get",
						"value": "getAutomationConnection",
						"action": "Get automation connection",
						"description": "Returns an automation connection."
					},
					{
						"name": "Get Many",
						"value": "listAutomationConnections",
						"action": "List automation connections",
						"description": "Lists the connections that automations use to reach other services."
					},
					{
						"name": "Move to Space",
						"value": "moveAutomationConnectionToSpace",
						"action": "Move automation connection to space",
						"description": "Moves an automation connection to another space."
					},
					{
						"name": "Update",
						"value": "updateAutomationConnection",
						"action": "Update automation connection",
						"description": "Changes the name or parameters of an automation connection."
					}
				],
				"default": "createAutomationConnection"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						]
					}
				},
				"options": [
					{
						"name": "Export",
						"value": "exportAutomationRun",
						"action": "Export automation run",
						"description": "Returns a link to the detailed log of a run."
					},
					{
						"name": "Get",
						"value": "getAutomationRun",
						"action": "Get automation run",
						"description": "Returns a run of an automation with its status."
					},
					{
						"name": "Get Many",
						"value": "listAutomationRuns",
						"action": "List automation runs",
						"description": "Lists the runs of an automation, newest first."
					},
					{
						"name": "Retry",
						"value": "retryAutomationRun",
						"action": "Retry automation run",
						"description": "Runs a failed run of an automation again."
					},
					{
						"name": "Run Automation",
						"value": "runAutomation",
						"action": "Run automation",
						"description": "Starts a run of an automation."
					},
					{
						"name": "Stop",
						"value": "stopAutomationRun",
						"action": "Stop automation run",
						"description": "Stops a running run of an automation."
					}
				],
				"default": "exportAutomationRun"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"connection"
						]
					}
				},
				"options": [
					{
						"name": "Get Qlik Connection",
						"value": "getQlikConnection",
						"action": "Get Qlik connection",
						"description": "Returns whether ancoreMate is connected to a Qlik Cloud tenant, and to which tenant and Qlik user."
					}
				],
				"default": "getQlikConnection"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"request"
						]
					}
				},
				"options": [
					{
						"name": "Send Qlik Cloud Request",
						"value": "sendQlikCloudRequest",
						"action": "Send Qlik Cloud request",
						"description": "Calls any REST API of your Qlik Cloud tenant below /api/v1/ with the connected user's rights, for operations that have no action of their own."
					}
				],
				"default": "sendQlikCloudRequest"
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"copyAutomation"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Name of the new automation.",
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"copyAutomation"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"createAutomation"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Schedules",
						"name": "schedules",
						"type": "json",
						"default": "[]",
						"description": "The schedules."
					},
					{
						"displayName": "Workspace",
						"name": "workspace",
						"type": "json",
						"default": "{}",
						"description": "The workspace generated by the Qlik Automate editor."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Max Concurrent Runs",
						"name": "maxConcurrentRuns",
						"type": "number",
						"default": 0,
						"description": "Maximum number of concurrent runs allowed for this automation."
					}
				]
			},
			{
				"displayName": "Connector ID",
				"name": "connectorId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The unique identifier of the connector from which the automation connection is created.",
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"createAutomationConnection"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"createAutomationConnection"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name of the created automation connection."
					},
					{
						"displayName": "Params",
						"name": "params",
						"type": "json",
						"default": "[]",
						"description": "The params."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The unique identifier of the space in which the automation connection is created."
					}
				]
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"deleteAutomation"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Automation Connection ID",
				"name": "automationConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationConnectionsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"deleteAutomationConnection"
						]
					}
				},
				"description": "The unique identifier for the automation connection."
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"deleteAutomationConnection"
						]
					}
				},
				"options": [
					{
						"displayName": "Forced",
						"name": "forced",
						"type": "boolean",
						"default": false,
						"description": "Whether to delete the automation connection even if automations use it."
					}
				]
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"disableAutomation"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"enableAutomation"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"exportAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Run ID",
				"name": "runId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"exportAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the run."
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"getAutomation"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Automation Connection ID",
				"name": "automationConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationConnectionsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"getAutomationConnection"
						]
					}
				},
				"description": "The unique identifier for the automation connection."
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"getAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Run ID",
				"name": "runId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"getAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the run."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"listAutomationConnections"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"listAutomationConnections"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "Filters the result based on the specified criteria: name, connectorId, ownerId, or spaceId."
					},
					{
						"displayName": "List All",
						"name": "listAll",
						"type": "boolean",
						"default": false,
						"description": "Whether to list all connections."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "id",
								"value": "id"
							},
							{
								"name": "name",
								"value": "name"
							},
							{
								"name": "createdAt",
								"value": "createdAt"
							},
							{
								"name": "updatedAt",
								"value": "updatedAt"
							},
							{
								"name": "+id",
								"value": "+id"
							},
							{
								"name": "+name",
								"value": "+name"
							},
							{
								"name": "+createdAt",
								"value": "+createdAt"
							},
							{
								"name": "+updatedAt",
								"value": "+updatedAt"
							},
							{
								"name": "-id",
								"value": "-id"
							},
							{
								"name": "-name",
								"value": "-name"
							},
							{
								"name": "-createdAt",
								"value": "-createdAt"
							},
							{
								"name": "-updatedAt",
								"value": "-updatedAt"
							}
						],
						"default": "id",
						"description": "The field to sort by, with +- prefix indicating sort order."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"listAutomationRuns"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"listAutomationRuns"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"listAutomationRuns"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "Allowed filters: status, context, startTime, title, spaceId, ownerId, executedById, billable."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "id",
								"value": "id"
							},
							{
								"name": "status",
								"value": "status"
							},
							{
								"name": "startTime",
								"value": "startTime"
							},
							{
								"name": "-id",
								"value": "-id"
							},
							{
								"name": "-status",
								"value": "-status"
							},
							{
								"name": "-startTime",
								"value": "-startTime"
							},
							{
								"name": "+id",
								"value": "+id"
							},
							{
								"name": "+status",
								"value": "+status"
							},
							{
								"name": "+startTime",
								"value": "+startTime"
							}
						],
						"default": "id",
						"description": "The field to sort by, with +- prefix indicating sort order."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"listAutomations"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"listAutomations"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "Allowed filters: name, runMode, lastRunStatus, ownerId, spaceId."
					},
					{
						"displayName": "List All",
						"name": "listAll",
						"type": "boolean",
						"default": false,
						"description": "Whether to list all automations."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "id",
								"value": "id"
							},
							{
								"name": "name",
								"value": "name"
							},
							{
								"name": "runMode",
								"value": "runMode"
							},
							{
								"name": "state",
								"value": "state"
							},
							{
								"name": "createdAt",
								"value": "createdAt"
							},
							{
								"name": "updatedAt",
								"value": "updatedAt"
							},
							{
								"name": "lastRunAt",
								"value": "lastRunAt"
							},
							{
								"name": "lastRunStatus",
								"value": "lastRunStatus"
							},
							{
								"name": "+id",
								"value": "+id"
							},
							{
								"name": "+name",
								"value": "+name"
							},
							{
								"name": "+runMode",
								"value": "+runMode"
							},
							{
								"name": "+state",
								"value": "+state"
							},
							{
								"name": "+createdAt",
								"value": "+createdAt"
							},
							{
								"name": "+updatedAt",
								"value": "+updatedAt"
							},
							{
								"name": "+lastRunAt",
								"value": "+lastRunAt"
							},
							{
								"name": "+lastRunStatus",
								"value": "+lastRunStatus"
							},
							{
								"name": "-id",
								"value": "-id"
							},
							{
								"name": "-name",
								"value": "-name"
							},
							{
								"name": "-runMode",
								"value": "-runMode"
							},
							{
								"name": "-state",
								"value": "-state"
							},
							{
								"name": "-createdAt",
								"value": "-createdAt"
							},
							{
								"name": "-updatedAt",
								"value": "-updatedAt"
							},
							{
								"name": "-lastRunAt",
								"value": "-lastRunAt"
							},
							{
								"name": "-lastRunStatus",
								"value": "-lastRunStatus"
							},
							{
								"name": "maxConcurrentRuns",
								"value": "maxConcurrentRuns"
							},
							{
								"name": "+maxConcurrentRuns",
								"value": "+maxConcurrentRuns"
							},
							{
								"name": "-maxConcurrentRuns",
								"value": "-maxConcurrentRuns"
							}
						],
						"default": "id",
						"description": "The field to sort by, with +- prefix indicating sort order."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Automation Connection ID",
				"name": "automationConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationConnectionsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"moveAutomationConnectionToSpace"
						]
					}
				},
				"description": "The unique identifier for the automation connection."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"moveAutomationConnectionToSpace"
						]
					}
				},
				"options": [
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The unique identifier of the new space."
					}
				]
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"moveAutomationToSpace"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The unique identifier of the new space.",
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"moveAutomationToSpace"
						]
					}
				}
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"retryAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Run ID",
				"name": "runId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"retryAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the run."
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"runAutomation"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Context",
				"name": "context",
				"type": "options",
				"options": [
					{
						"name": "api",
						"value": "api"
					}
				],
				"default": "api",
				"required": true,
				"description": "The source that triggers the automation will set the context.",
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"runAutomation"
						]
					}
				}
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"stopAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Run ID",
				"name": "runId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"stopAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the run."
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"updateAutomation"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"updateAutomation"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
					},
					{
						"displayName": "Schedules",
						"name": "schedules",
						"type": "json",
						"default": "[]",
						"description": "The schedules."
					},
					{
						"displayName": "Workspace",
						"name": "workspace",
						"type": "json",
						"default": "{}",
						"description": "The workspace generated by the Qlik Automate editor."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Max Concurrent Runs",
						"name": "maxConcurrentRuns",
						"type": "number",
						"default": 0,
						"description": "Maximum number of concurrent runs allowed for this automation."
					}
				]
			},
			{
				"displayName": "Automation Connection ID",
				"name": "automationConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationConnectionsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"updateAutomationConnection"
						]
					}
				},
				"description": "The unique identifier for the automation connection."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"updateAutomationConnection"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The new name of the automation connection to be renamed to."
					},
					{
						"displayName": "Params",
						"name": "params",
						"type": "json",
						"default": "[]",
						"description": "The params."
					}
				]
			},
			{
				"displayName": "Method",
				"name": "method",
				"type": "options",
				"options": [
					{
						"name": "GET",
						"value": "GET"
					},
					{
						"name": "POST",
						"value": "POST"
					},
					{
						"name": "PUT",
						"value": "PUT"
					},
					{
						"name": "PATCH",
						"value": "PATCH"
					},
					{
						"name": "DELETE",
						"value": "DELETE"
					}
				],
				"default": "GET",
				"required": true,
				"description": "The HTTP method.",
				"displayOptions": {
					"show": {
						"resource": [
							"request"
						],
						"operation": [
							"sendQlikCloudRequest"
						]
					}
				}
			},
			{
				"displayName": "Path",
				"name": "path",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The path below /api/v1/, for example spaces or apps/1234/reloads/logs.",
				"displayOptions": {
					"show": {
						"resource": [
							"request"
						],
						"operation": [
							"sendQlikCloudRequest"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"request"
						],
						"operation": [
							"sendQlikCloudRequest"
						]
					}
				},
				"options": [
					{
						"displayName": "Query",
						"name": "query",
						"type": "string",
						"default": "",
						"description": "Query parameters as in a URL, for example limit=10&name=Sales."
					},
					{
						"displayName": "Body",
						"name": "body",
						"type": "json",
						"default": "{}",
						"description": "The JSON body for POST, PUT, PATCH and DELETE, for example the IDs of the items to delete."
					}
				]
			}
		]
	};

	methods = {
		loadOptions: {
			async loadListAutomationConnectionsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/automation-connections', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListAutomationsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/automations', {"limit":1000}, {}, 'value', 'id', 'name');
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return runOperations.call(this, OPERATIONS, BASE_URL, CLIENT);
	}
}
