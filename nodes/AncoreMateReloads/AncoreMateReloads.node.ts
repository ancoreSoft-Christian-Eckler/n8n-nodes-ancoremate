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
const CLIENT = 'n8n/1.21.0';

const OPERATIONS: Record<string, OperationSpec> = {
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
	},
	"cancelReload": {
		"method": "POST",
		"path": "/v1/reloads/{reloadId}/cancel",
		"read": false,
		"list": false,
		"pathParameters": [
			"reloadId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createReloadTask": {
		"method": "POST",
		"path": "/v1/reload-tasks",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "appId",
				"required": true,
				"json": false
			},
			{
				"name": "recurrence",
				"required": true,
				"json": false
			},
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "timezone",
				"required": false,
				"json": false
			},
			{
				"name": "startDateTime",
				"required": false,
				"json": false
			},
			{
				"name": "partial",
				"required": false,
				"json": false
			},
			{
				"name": "enabled",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteReloadTask": {
		"method": "DELETE",
		"path": "/v1/reload-tasks/{taskId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"taskId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getReload": {
		"method": "GET",
		"path": "/v1/reloads/{reloadId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"reloadId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getReloadLog": {
		"method": "GET",
		"path": "/v1/apps/{appId}/reload-logs/{reloadId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId",
			"reloadId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getReloadTask": {
		"method": "GET",
		"path": "/v1/reload-tasks/{taskId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"taskId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listReloadLogs": {
		"method": "GET",
		"path": "/v1/apps/{appId}/reload-logs",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listReloadTaskRuns": {
		"method": "GET",
		"path": "/v1/reload-tasks/{taskId}/runs",
		"read": true,
		"list": true,
		"pathParameters": [
			"taskId"
		],
		"query": [
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
	"listReloadTasks": {
		"method": "GET",
		"path": "/v1/reload-tasks",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "appId",
				"option": false
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
	"listReloads": {
		"method": "GET",
		"path": "/v1/reloads",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "appId",
				"option": false
			},
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "partial",
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
	"reloadApp": {
		"method": "POST",
		"path": "/v1/reloads",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "appId",
				"required": true,
				"json": false
			},
			{
				"name": "weight",
				"required": false,
				"json": false
			},
			{
				"name": "partial",
				"required": false,
				"json": false
			},
			{
				"name": "variables",
				"required": false,
				"json": true
			},
			{
				"name": "resourceId",
				"required": false,
				"json": false
			},
			{
				"name": "resourceType",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"reloadAppAndWait": {
		"method": "POST",
		"path": "/v1/apps/{appId}/reload-and-wait",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "partial",
				"required": false,
				"json": false
			},
			{
				"name": "variables",
				"required": false,
				"json": true
			},
			{
				"name": "failOnError",
				"required": false,
				"json": false
			},
			{
				"name": "ifReloading",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": true
	},
	"startReloadTask": {
		"method": "POST",
		"path": "/v1/reload-tasks/{taskId}/start",
		"read": false,
		"list": false,
		"pathParameters": [
			"taskId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateReloadTask": {
		"method": "PUT",
		"path": "/v1/reload-tasks/{taskId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"taskId"
		],
		"query": [],
		"body": [
			{
				"name": "recurrence",
				"required": false,
				"json": false
			},
			{
				"name": "timezone",
				"required": false,
				"json": false
			},
			{
				"name": "startDateTime",
				"required": false,
				"json": false
			},
			{
				"name": "partial",
				"required": false,
				"json": false
			},
			{
				"name": "enabled",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"waitForReloads": {
		"method": "POST",
		"path": "/v1/reloads/wait-for",
		"read": false,
		"list": true,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "reloadIds",
				"required": true,
				"json": false,
				"list": true
			},
			{
				"name": "failOnError",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": true
	}
};

export class AncoreMateReloads implements INodeType {
	description: INodeTypeDescription = {
		"displayName": "ancoreMate Reloads",
		"name": "ancoreMateReloads",
		"icon": "file:ancoremate.svg",
		"group": [
			"transform"
		],
		"version": 1,
		"subtitle": "={{$parameter[\"operation\"] + \": \" + $parameter[\"resource\"]}}",
		"description": "Reload Qlik Sense® apps in Qlik Cloud® and wait for the result, follow and cancel reloads, read reload logs and manage reload schedules. Triggers when an app reload finishes, also of reload tasks, filtered by app and result.",
		"defaults": {
			"name": "ancoreMate Reloads"
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
						"name": "Reload",
						"value": "reload"
					},
					{
						"name": "Reload log",
						"value": "reload log"
					},
					{
						"name": "Reload task",
						"value": "reload task"
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
				"default": "reload"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						]
					}
				},
				"options": [
					{
						"name": "Cancel",
						"value": "cancelReload",
						"action": "Cancel reload",
						"description": "Cancels a reload that is queued or running."
					},
					{
						"name": "Get",
						"value": "getReload",
						"action": "Get reload",
						"description": "Returns a reload with its status, duration and log excerpt."
					},
					{
						"name": "Get Many",
						"value": "listReloads",
						"action": "List reloads",
						"description": "Lists the reloads of an app, newest first."
					},
					{
						"name": "Reload App",
						"value": "reloadApp",
						"action": "Reload app",
						"description": "Starts a reload of an app and returns the reload with its ID and status. If a full reload of the app is already waiting in the queue, that reload is returned, since it will load the latest data anyway. While another reload of the app is running, Qlik Cloud starts no new one; use Reload app and wait to wait for it."
					},
					{
						"name": "Reload App and Wait",
						"value": "reloadAppAndWait",
						"action": "Reload app and wait",
						"description": "Reloads an app and waits until the reload is finished; the result tells whether it succeeded. If the app is already reloading, If the app is already reloading decides what happens."
					},
					{
						"name": "Wait for Reloads",
						"value": "waitForReloads",
						"action": "Wait for reloads",
						"description": "Waits until the given reloads, for example started in parallel, are finished."
					}
				],
				"default": "cancelReload"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload log"
						]
					}
				},
				"options": [
					{
						"name": "Get",
						"value": "getReloadLog",
						"action": "Get reload log",
						"description": "Returns the complete log of a reload as text."
					},
					{
						"name": "Get Many",
						"value": "listReloadLogs",
						"action": "List reload logs",
						"description": "Lists the stored reload logs of an app."
					}
				],
				"default": "getReloadLog"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createReloadTask",
						"action": "Create reload task",
						"description": "Creates a reload schedule for an app."
					},
					{
						"name": "Delete",
						"value": "deleteReloadTask",
						"action": "Delete reload task",
						"description": "Deletes a reload schedule."
					},
					{
						"name": "Get",
						"value": "getReloadTask",
						"action": "Get reload task",
						"description": "Returns a reload schedule with its next run."
					},
					{
						"name": "Get Many Runs",
						"value": "listReloadTaskRuns",
						"action": "List reload task runs",
						"description": "Lists the runs of a reload task, newest first, with status and short log."
					},
					{
						"name": "Get Many",
						"value": "listReloadTasks",
						"action": "List reload tasks",
						"description": "Lists the reload schedules, optionally of one app, with their next run."
					},
					{
						"name": "Start",
						"value": "startReloadTask",
						"action": "Start reload task",
						"description": "Runs an enabled reload task now, outside its schedule."
					},
					{
						"name": "Update",
						"value": "updateReloadTask",
						"action": "Update reload task",
						"description": "Changes the schedule of a reload task; values left empty stay as they are."
					}
				],
				"default": "createReloadTask"
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
			},
			{
				"displayName": "Reload ID",
				"name": "reloadId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"cancelReload"
						]
					}
				},
				"description": "The unique identifier of the reload."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The app to reload.",
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"createReloadTask"
						]
					}
				}
			},
			{
				"displayName": "Recurrence",
				"name": "recurrence",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The schedule as RRULE, for example FREQ=DAILY;BYHOUR=6;BYMINUTE=0 or FREQ=WEEKLY;BYDAY=MO,TH;BYHOUR=7;BYMINUTE=30.",
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"createReloadTask"
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
							"reload task"
						],
						"operation": [
							"createReloadTask"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "A name for the reload task; letters and digits are kept, a short suffix makes it unique."
					},
					{
						"displayName": "Time zone",
						"name": "timezone",
						"type": "string",
						"default": "",
						"description": "The time zone of the schedule, for example Europe/Berlin. Default UTC."
					},
					{
						"displayName": "Start",
						"name": "startDateTime",
						"type": "string",
						"default": "",
						"description": "The date and time from which the schedule applies, for example 2026-10-05T06:00:00. Default now."
					},
					{
						"displayName": "Partial",
						"name": "partial",
						"type": "boolean",
						"default": false,
						"description": "Whether to run a partial reload."
					},
					{
						"displayName": "Enabled",
						"name": "enabled",
						"type": "boolean",
						"default": false,
						"description": "Whether the schedule is active. Default yes."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description of the reload task."
					}
				]
			},
			{
				"displayName": "Reload task",
				"name": "taskId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListReloadTasksId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"deleteReloadTask"
						]
					}
				},
				"description": "The reload task."
			},
			{
				"displayName": "Reload ID",
				"name": "reloadId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"getReload"
						]
					}
				},
				"description": "The unique identifier of the reload."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload log"
						],
						"operation": [
							"getReloadLog"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Reload ID",
				"name": "reloadId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload log"
						],
						"operation": [
							"getReloadLog"
						]
					}
				},
				"description": "Identifier of the reload."
			},
			{
				"displayName": "Reload task",
				"name": "taskId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListReloadTasksId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"getReloadTask"
						]
					}
				},
				"description": "The reload task."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload log"
						],
						"operation": [
							"listReloadLogs"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Reload task",
				"name": "taskId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListReloadTasksId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"listReloadTaskRuns"
						]
					}
				},
				"description": "The reload task."
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
							"reload task"
						],
						"operation": [
							"listReloadTaskRuns"
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
							"reload task"
						],
						"operation": [
							"listReloadTaskRuns"
						]
					}
				},
				"options": [
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"numberPrecision": 0
						},
						"default": 0,
						"description": "The maximum number of runs, between 1 and 100. Default 20."
					}
				]
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
						"resource": [
							"reload task"
						],
						"operation": [
							"listReloadTasks"
						]
					}
				},
				"description": "Only the reload tasks of this app."
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
							"reload task"
						],
						"operation": [
							"listReloadTasks"
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
							"reload task"
						],
						"operation": [
							"listReloadTasks"
						]
					}
				},
				"options": [
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"numberPrecision": 0
						},
						"default": 0,
						"description": "The maximum number of reload tasks, between 1 and 5000. Default 100."
					}
				]
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"listReloads"
						]
					}
				},
				"description": "The UUID formatted string used to search for an app's reload history entries."
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
							"reload"
						],
						"operation": [
							"listReloads"
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
							"reload"
						],
						"operation": [
							"listReloads"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "SCIM filter expression used to search for reloads."
					},
					{
						"displayName": "Partial",
						"name": "partial",
						"type": "boolean",
						"default": false,
						"description": "Whether to list partial reloads (on) or full reloads (off)."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "creationTime",
								"value": "creationTime"
							},
							{
								"name": "+creationTime",
								"value": "+creationTime"
							},
							{
								"name": "-creationTime",
								"value": "-creationTime"
							},
							{
								"name": "status",
								"value": "status"
							},
							{
								"name": "+status",
								"value": "+status"
							},
							{
								"name": "-status",
								"value": "-status"
							},
							{
								"name": "startTime",
								"value": "startTime"
							},
							{
								"name": "+startTime",
								"value": "+startTime"
							},
							{
								"name": "-startTime",
								"value": "-startTime"
							},
							{
								"name": "endTime",
								"value": "endTime"
							},
							{
								"name": "+endTime",
								"value": "+endTime"
							},
							{
								"name": "-endTime",
								"value": "-endTime"
							}
						],
						"default": "-creationTime",
						"description": "The field to sort by, with +/- prefix indicating sort order."
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
				"displayName": "App ID",
				"name": "appId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The ID of the app to be reloaded.",
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"reloadApp"
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
							"reload"
						],
						"operation": [
							"reloadApp"
						]
					}
				},
				"options": [
					{
						"displayName": "Weight",
						"name": "weight",
						"type": "number",
						"default": 0,
						"description": "The weight of the reload for the same tenant."
					},
					{
						"displayName": "Partial",
						"name": "partial",
						"type": "boolean",
						"default": false,
						"description": "Whether the reload is a partial reload."
					},
					{
						"displayName": "Variables",
						"name": "variables",
						"type": "json",
						"default": "{}",
						"description": "The variables to be used in the load script."
					},
					{
						"displayName": "Resource ID",
						"name": "resourceId",
						"type": "string",
						"default": "",
						"description": "The String field identifying the specific resource ID within that service."
					},
					{
						"displayName": "Resource Type",
						"name": "resourceType",
						"type": "options",
						"options": [
							{
								"name": "api",
								"value": "api"
							},
							{
								"name": "reload-tasks",
								"value": "reload-tasks"
							},
							{
								"name": "tasks",
								"value": "tasks"
							},
							{
								"name": "automate",
								"value": "automate"
							}
						],
						"default": "api",
						"description": "The String field identifying the service type that triggered the reload, e.g."
					}
				]
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
						"resource": [
							"reload"
						],
						"operation": [
							"reloadAppAndWait"
						]
					}
				},
				"description": "The app to reload."
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
							"reload"
						],
						"operation": [
							"reloadAppAndWait"
						]
					}
				},
				"options": [
					{
						"displayName": "Partial",
						"name": "partial",
						"type": "boolean",
						"default": false,
						"description": "Whether to run a partial reload."
					},
					{
						"displayName": "Variables",
						"name": "variables",
						"type": "json",
						"default": "{}",
						"description": "Values for variables of the load script, for example {\"vYear\": \"2025\"}."
					},
					{
						"displayName": "Fail when the reload fails",
						"name": "failOnError",
						"type": "boolean",
						"default": false,
						"description": "Whether the action fails when a reload fails, with the error of the load script. Turn off to continue with the result (succeeded = false) instead. Default: on."
					},
					{
						"displayName": "If the app is already reloading",
						"name": "ifReloading",
						"type": "options",
						"options": [
							{
								"name": "Wait, then start a new reload",
								"value": "reload"
							},
							{
								"name": "Wait and use that reload",
								"value": "use"
							},
							{
								"name": "Fail",
								"value": "fail"
							}
						],
						"default": "reload",
						"description": "What happens when another reload of the app is running or waiting: wait for it and then start a new reload (the default, the result has the latest data), wait for it and return its result, or fail."
					}
				]
			},
			{
				"displayName": "Reload task",
				"name": "taskId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListReloadTasksId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"startReloadTask"
						]
					}
				},
				"description": "The reload task."
			},
			{
				"displayName": "Reload task",
				"name": "taskId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListReloadTasksId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"updateReloadTask"
						]
					}
				},
				"description": "The reload task."
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
							"reload task"
						],
						"operation": [
							"updateReloadTask"
						]
					}
				},
				"options": [
					{
						"displayName": "Recurrence",
						"name": "recurrence",
						"type": "string",
						"default": "",
						"description": "The schedule as RRULE, for example FREQ=DAILY;BYHOUR=6;BYMINUTE=0 or FREQ=WEEKLY;BYDAY=MO,TH;BYHOUR=7;BYMINUTE=30."
					},
					{
						"displayName": "Time zone",
						"name": "timezone",
						"type": "string",
						"default": "",
						"description": "The time zone of the schedule, for example Europe/Berlin. Default UTC."
					},
					{
						"displayName": "Start",
						"name": "startDateTime",
						"type": "string",
						"default": "",
						"description": "The date and time from which the schedule applies, for example 2026-10-05T06:00:00. Default now."
					},
					{
						"displayName": "Partial",
						"name": "partial",
						"type": "boolean",
						"default": false,
						"description": "Whether to run a partial reload."
					},
					{
						"displayName": "Enabled",
						"name": "enabled",
						"type": "boolean",
						"default": false,
						"description": "Whether the schedule is active. Default yes."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description of the reload task."
					}
				]
			},
			{
				"displayName": "Reload IDs",
				"name": "reloadIds",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Reload ID"
				},
				"default": [],
				"required": true,
				"description": "The IDs of the reloads, at most 50. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"waitForReloads"
						]
					}
				}
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
							"reload"
						],
						"operation": [
							"waitForReloads"
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
							"reload"
						],
						"operation": [
							"waitForReloads"
						]
					}
				},
				"options": [
					{
						"displayName": "Fail when the reload fails",
						"name": "failOnError",
						"type": "boolean",
						"default": false,
						"description": "Whether the action fails when one of the reloads fails, with the error of the load script. Turn off to continue with the result (succeeded = false) instead. Default: on."
					}
				]
			}
		]
	};

	methods = {
		loadOptions: {
			async loadListAppChoicesResourceId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/app-choices', {"limit":1000}, {}, 'value', 'resourceId', 'name');
			},
			async loadListReloadTasksId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/reload-tasks', {"limit":1000}, {}, 'value', 'id', 'name');
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return runOperations.call(this, OPERATIONS, BASE_URL, CLIENT);
	}
}
