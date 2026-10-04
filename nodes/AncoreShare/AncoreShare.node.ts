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
const CLIENT = 'n8n/1.22.0';

const OPERATIONS: Record<string, OperationSpec> = {
	"downloadAncoreShareFile": {
		"method": "POST",
		"path": "/v1/ancoreshare/files/download",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "url",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": true,
		"filesOutput": false,
		"async": false
	},
	"downloadAncoreShareFiles": {
		"method": "POST",
		"path": "/v1/ancoreshare/files/download-all",
		"read": false,
		"list": true,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "urls",
				"required": true,
				"json": false,
				"list": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": true,
		"async": false
	},
	"getAncoreShareReportUsage": {
		"method": "GET",
		"path": "/v1/ancoreshare/usage",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "accountId",
				"option": false
			},
			{
				"name": "appId",
				"option": false
			},
			{
				"name": "reportId",
				"option": false
			},
			{
				"name": "userId",
				"option": false
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listAncoreShareAutomatedRuns": {
		"method": "GET",
		"path": "/v1/ancoreshare/runs",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "accountId",
				"option": false
			},
			{
				"name": "appId",
				"option": false
			},
			{
				"name": "reportId",
				"option": false
			},
			{
				"name": "taskId",
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
	"listAncoreShareReports": {
		"method": "GET",
		"path": "/v1/ancoreshare/apps/{appId}/reports",
		"read": true,
		"list": true,
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
	"runAncoreShareReport": {
		"method": "POST",
		"path": "/v1/ancoreshare/apps/{appId}/reports/{reportId}/run",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"reportId"
		],
		"query": [],
		"body": [
			{
				"name": "accountId",
				"required": true,
				"json": false
			},
			{
				"name": "executionToken",
				"required": true,
				"json": false
			},
			{
				"name": "exportType",
				"required": false,
				"json": false
			},
			{
				"name": "bookmark",
				"required": false,
				"json": false
			},
			{
				"name": "select",
				"required": false,
				"json": false
			},
			{
				"name": "notification",
				"required": false,
				"json": false
			},
			{
				"name": "notificationEmail",
				"required": false,
				"json": false
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

export class AncoreShare implements INodeType {
	description: INodeTypeDescription = {
		"displayName": "ancoreMate ancoreShare Reports",
		"name": "ancoreShare",
		"icon": "file:ancoremate.svg",
		"group": [
			"transform"
		],
		"version": 1,
		"subtitle": "={{$parameter[\"operation\"] + \": \" + $parameter[\"resource\"]}}",
		"description": "Run ancoreShare reports, download the report files and read the report usage. Triggers when an ancoreShare report button has finished a report.",
		"defaults": {
			"name": "ancoreMate ancoreShare Reports"
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
						"name": "Report",
						"value": "report"
					},
					{
						"name": "Report file",
						"value": "report file"
					},
					{
						"name": "Usage",
						"value": "usage"
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
				"default": "report"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						]
					}
				},
				"options": [
					{
						"name": "Get Many ancoreShare Reports",
						"value": "listAncoreShareReports",
						"action": "List ancoreShare reports",
						"description": "Lists the ancoreShare report buttons of an app with title, export type and tags."
					},
					{
						"name": "Run ancoreShare Report",
						"value": "runAncoreShareReport",
						"action": "Run ancoreShare report",
						"description": "Starts an ancoreShare report; ancoreShare queues it and sends the files to the targets of the report button, for example the ancoreMate event."
					}
				],
				"default": "listAncoreShareReports"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report file"
						]
					}
				},
				"options": [
					{
						"name": "Download Report File",
						"value": "downloadAncoreShareFile",
						"action": "Download report file",
						"description": "Downloads one file of a finished report from its link; links are valid for 12 hours."
					},
					{
						"name": "Download Report Files",
						"value": "downloadAncoreShareFiles",
						"action": "Download report files",
						"description": "Downloads all files of a finished report at once, for example to attach them to one mail."
					}
				],
				"default": "downloadAncoreShareFile"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						]
					}
				},
				"options": [
					{
						"name": "Get Report Usage",
						"value": "getAncoreShareReportUsage",
						"action": "Get report usage",
						"description": "Returns the number of report runs per month, of all runs by button and by External Execution, for the account or one app, report or Qlik user."
					},
					{
						"name": "Get Many Automated Report Runs",
						"value": "listAncoreShareAutomatedRuns",
						"action": "List automated report runs",
						"description": "Lists the report runs started through ancoreShare External Execution (not by the button) with result and error, to find failed automated runs."
					}
				],
				"default": "getAncoreShareReportUsage"
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
				"displayName": "Link",
				"name": "url",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The link of the report file, for example from the trigger.",
				"displayOptions": {
					"show": {
						"resource": [
							"report file"
						],
						"operation": [
							"downloadAncoreShareFile"
						]
					}
				}
			},
			{
				"displayName": "Put Output File in Field",
				"name": "dataPropertyName",
				"type": "string",
				"default": "data",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report file"
						],
						"operation": [
							"downloadAncoreShareFile"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
			},
			{
				"displayName": "Links",
				"name": "urls",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Link"
				},
				"default": [],
				"required": true,
				"description": "The links of the report files, at most 50. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"report file"
						],
						"operation": [
							"downloadAncoreShareFiles"
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
							"report file"
						],
						"operation": [
							"downloadAncoreShareFiles"
						]
					}
				}
			},
			{
				"displayName": "Put Output File in Field",
				"name": "dataPropertyName",
				"type": "string",
				"default": "data",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report file"
						],
						"operation": [
							"downloadAncoreShareFiles"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
			},
			{
				"displayName": "Account ID",
				"name": "accountId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"getAncoreShareReportUsage"
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
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"getAncoreShareReportUsage"
						]
					}
				},
				"description": "Only runs of this app."
			},
			{
				"displayName": "Report",
				"name": "reportId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAncoreShareReportsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"getAncoreShareReportUsage"
						]
					}
				},
				"description": "Only runs of this report button."
			},
			{
				"displayName": "Qlik user ID",
				"name": "userId",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"getAncoreShareReportUsage"
						]
					}
				},
				"description": "Only runs of this Qlik user."
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
							"usage"
						],
						"operation": [
							"getAncoreShareReportUsage"
						]
					}
				}
			},
			{
				"displayName": "Account ID",
				"name": "accountId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"listAncoreShareAutomatedRuns"
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
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"listAncoreShareAutomatedRuns"
						]
					}
				},
				"description": "Only runs of this app."
			},
			{
				"displayName": "Report",
				"name": "reportId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAncoreShareReportsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"listAncoreShareAutomatedRuns"
						]
					}
				},
				"description": "Only runs of this report button."
			},
			{
				"displayName": "Task ID",
				"name": "taskId",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"listAncoreShareAutomatedRuns"
						]
					}
				},
				"description": "Only the run with this task ID, for example from Run ancoreShare report."
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
							"usage"
						],
						"operation": [
							"listAncoreShareAutomatedRuns"
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
							"usage"
						],
						"operation": [
							"listAncoreShareAutomatedRuns"
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
						"description": "The maximum number of runs, between 1 and 1000. Default 100."
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
							"report"
						],
						"operation": [
							"listAncoreShareReports"
						]
					}
				},
				"description": "The app with the report button."
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
							"report"
						],
						"operation": [
							"listAncoreShareReports"
						]
					}
				}
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
							"report"
						],
						"operation": [
							"runAncoreShareReport"
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
						"resource": [
							"report"
						],
						"operation": [
							"runAncoreShareReport"
						]
					}
				},
				"description": "The ancoreShare report button."
			},
			{
				"displayName": "Account ID",
				"name": "accountId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The ancoreShare account ID (customer number).",
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"runAncoreShareReport"
						]
					}
				}
			},
			{
				"displayName": "Execution token",
				"name": "executionToken",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The ancoreShare execution token of the user the report runs for; each user has an own token.",
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"runAncoreShareReport"
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
							"report"
						],
						"operation": [
							"runAncoreShareReport"
						]
					}
				},
				"options": [
					{
						"displayName": "Export type",
						"name": "exportType",
						"type": "string",
						"default": "",
						"description": "The export type, default as configured in the button."
					},
					{
						"displayName": "Bookmark",
						"name": "bookmark",
						"type": "string",
						"default": "",
						"description": "A bookmark to apply before the report runs."
					},
					{
						"displayName": "Selections",
						"name": "select",
						"type": "string",
						"default": "",
						"description": "Selections to apply before the report runs, in the format of ancoreShare."
					},
					{
						"displayName": "Notification",
						"name": "notification",
						"type": "string",
						"default": "",
						"description": "When ancoreShare sends a mail about the run, for example success."
					},
					{
						"displayName": "Notification mail",
						"name": "notificationEmail",
						"type": "string",
						"default": "",
						"description": "The mail address for the notification."
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
			async loadListAncoreShareReportsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/ancoreshare/apps/{appId}/reports', {}, {"appId":"appId"}, 'value', 'id', 'title');
			},
			async loadListAppChoicesResourceId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/app-choices', {"limit":1000}, {}, 'value', 'resourceId', 'name');
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return runOperations.call(this, OPERATIONS, BASE_URL, CLIENT);
	}
}
