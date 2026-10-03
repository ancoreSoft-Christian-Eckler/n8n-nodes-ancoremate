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
const CLIENT = 'n8n/1.16.0';

const OPERATIONS: Record<string, OperationSpec> = {
	"changeAppOwner": {
		"method": "PUT",
		"path": "/v1/apps/{appId}/owner",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "ownerId",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"copyApp": {
		"method": "POST",
		"path": "/v1/apps/{appId}/copy",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
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
	"createApp": {
		"method": "POST",
		"path": "/v1/apps",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": true,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
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
	"createScript": {
		"method": "POST",
		"path": "/v1/scripts",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": true,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
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
	"deleteApp": {
		"method": "DELETE",
		"path": "/v1/apps/{appId}",
		"read": false,
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
	"deleteAppMediaFile": {
		"method": "DELETE",
		"path": "/v1/apps/{appId}/media/file",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [
			{
				"name": "path",
				"option": false
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteScript": {
		"method": "DELETE",
		"path": "/v1/scripts/{scriptId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"scriptId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"evaluateAppPerformance": {
		"method": "POST",
		"path": "/v1/apps/{appId}/evaluations",
		"read": false,
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
	"exportApp": {
		"method": "POST",
		"path": "/v1/apps/{appId}/export",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [
			{
				"name": "withoutData",
				"option": false
			},
			{
				"name": "fileName",
				"option": false
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": true,
		"filesOutput": false,
		"async": false
	},
	"getApp": {
		"method": "GET",
		"path": "/v1/apps/{appId}",
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
	"getAppDataLineage": {
		"method": "GET",
		"path": "/v1/apps/{appId}/data-lineage",
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
	"getAppDataMetadata": {
		"method": "GET",
		"path": "/v1/apps/{appId}/data-model",
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
	"getAppEvaluation": {
		"method": "GET",
		"path": "/v1/app-evaluations/{evaluationId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"evaluationId"
		],
		"query": [
			{
				"name": "all",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getAppMediaFile": {
		"method": "GET",
		"path": "/v1/apps/{appId}/media/file",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [
			{
				"name": "path",
				"option": false
			},
			{
				"name": "thumbnail",
				"option": false
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": true,
		"filesOutput": false,
		"async": false
	},
	"getApps": {
		"method": "GET",
		"path": "/v1/apps",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "search",
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
	"getLoadScript": {
		"method": "GET",
		"path": "/v1/apps/{appId}/script",
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
	"getLoadScriptVersion": {
		"method": "GET",
		"path": "/v1/apps/{appId}/script-versions/{versionId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId",
			"versionId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getScript": {
		"method": "GET",
		"path": "/v1/scripts/{scriptId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"scriptId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"importApp": {
		"method": "POST",
		"path": "/v1/apps/import",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [
			{
				"name": "name",
				"option": false
			},
			{
				"name": "spaceId",
				"option": false
			}
		],
		"body": [],
		"fileInput": true,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listAppEvaluations": {
		"method": "GET",
		"path": "/v1/apps/{appId}/evaluations",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [
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
	"listAppMediaFiles": {
		"method": "GET",
		"path": "/v1/apps/{appId}/media",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [
			{
				"name": "folder",
				"option": false
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listLoadScriptVersions": {
		"method": "GET",
		"path": "/v1/apps/{appId}/script-versions",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
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
	"listScripts": {
		"method": "GET",
		"path": "/v1/scripts",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "name",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "spaceId",
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
	"moveAppToSpace": {
		"method": "PUT",
		"path": "/v1/apps/{appId}/space",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
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
	"publishApp": {
		"method": "POST",
		"path": "/v1/apps/{appId}/publish",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "data",
				"required": false,
				"json": false
			},
			{
				"name": "moveApp",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "attributes",
				"required": false,
				"json": true
			},
			{
				"name": "originAppId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"republishApp": {
		"method": "PUT",
		"path": "/v1/apps/{appId}/publish",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "data",
				"required": false,
				"json": false
			},
			{
				"name": "targetId",
				"required": false,
				"json": false
			},
			{
				"name": "attributes",
				"required": false,
				"json": true
			},
			{
				"name": "checkOriginAppId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"setLoadScript": {
		"method": "PUT",
		"path": "/v1/apps/{appId}/script",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "script",
				"required": true,
				"json": false
			},
			{
				"name": "versionMessage",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateApp": {
		"method": "PUT",
		"path": "/v1/apps/{appId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
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
	"updateScript": {
		"method": "PUT",
		"path": "/v1/scripts/{scriptId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"scriptId"
		],
		"query": [],
		"body": [
			{
				"name": "script",
				"required": true,
				"json": false
			},
			{
				"name": "versionMessage",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"uploadAppMediaFile": {
		"method": "PUT",
		"path": "/v1/apps/{appId}/media/file",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [
			{
				"name": "path",
				"option": false
			}
		],
		"body": [],
		"fileInput": true,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"validateLoadScript": {
		"method": "POST",
		"path": "/v1/apps/validate-script",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "script",
				"required": true,
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

export class AncoreMateApps implements INodeType {
	description: INodeTypeDescription = {
		"displayName": "ancoreMate Apps",
		"name": "ancoreMateApps",
		"icon": "file:ancoremate.svg",
		"group": [
			"transform"
		],
		"version": 1,
		"subtitle": "={{$parameter[\"operation\"] + \": \" + $parameter[\"resource\"]}}",
		"description": "Manage Qlik Sense® apps in Qlik Cloud®: create, copy, publish, move, export and import apps (QVF), maintain media files, load scripts, data preparation scripts and performance evaluations. Triggers when an app is created, published, exported or its data model changes.",
		"defaults": {
			"name": "ancoreMate Apps"
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
						"name": "App",
						"value": "app"
					},
					{
						"name": "App evaluation",
						"value": "app evaluation"
					},
					{
						"name": "App media",
						"value": "app media"
					},
					{
						"name": "Load script",
						"value": "load script"
					},
					{
						"name": "Script",
						"value": "script"
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
				"default": "app"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						]
					}
				},
				"options": [
					{
						"name": "Change Owner",
						"value": "changeAppOwner",
						"action": "Change app owner",
						"description": "Transfers an app to another user."
					},
					{
						"name": "Copy",
						"value": "copyApp",
						"action": "Copy app",
						"description": "Creates a copy of an app, optionally with a new name or in another space."
					},
					{
						"name": "Create",
						"value": "createApp",
						"action": "Create app",
						"description": "Creates an empty app."
					},
					{
						"name": "Delete",
						"value": "deleteApp",
						"action": "Delete app",
						"description": "Deletes an app."
					},
					{
						"name": "Export",
						"value": "exportApp",
						"action": "Export app",
						"description": "Exports an app as QVF file, optionally without data. Files up to 30 MB can be sent and files up to 50 MB returned."
					},
					{
						"name": "Get",
						"value": "getApp",
						"action": "Get app",
						"description": "Returns the attributes of an app such as name, owner, space and last reload time."
					},
					{
						"name": "Get Data Lineage",
						"value": "getAppDataLineage",
						"action": "Get app data lineage",
						"description": "Returns the data sources the app loads from."
					},
					{
						"name": "Get Data Model",
						"value": "getAppDataMetadata",
						"action": "Get app data model",
						"description": "Returns the tables and fields of the app data model with their sizes."
					},
					{
						"name": "Import",
						"value": "importApp",
						"action": "Import app",
						"description": "Imports a QVF file as a new app into a space or the personal space. Files up to 30 MB can be sent and files up to 50 MB returned."
					},
					{
						"name": "Get Many",
						"value": "getApps",
						"action": "List apps",
						"description": "Lists the Qlik Sense apps of the tenant that the connected Qlik Cloud user has access to, sorted by name."
					},
					{
						"name": "Move to Space",
						"value": "moveAppToSpace",
						"action": "Move app to space",
						"description": "Moves an app to another shared space."
					},
					{
						"name": "Publish",
						"value": "publishApp",
						"action": "Publish app",
						"description": "Publishes an app to a managed space for the first time."
					},
					{
						"name": "Republish",
						"value": "republishApp",
						"action": "Republish app",
						"description": "Replaces a published app in a managed space with the current version of the source app."
					},
					{
						"name": "Update",
						"value": "updateApp",
						"action": "Update app",
						"description": "Changes the name or description of an app."
					}
				],
				"default": "changeAppOwner"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app evaluation"
						]
					}
				},
				"options": [
					{
						"name": "Evaluate App Performance",
						"value": "evaluateAppPerformance",
						"action": "Evaluate app performance",
						"description": "Starts a performance evaluation of an app. Get the result with Get app evaluation."
					},
					{
						"name": "Get",
						"value": "getAppEvaluation",
						"action": "Get app evaluation",
						"description": "Returns the result of a performance evaluation."
					},
					{
						"name": "Get Many",
						"value": "listAppEvaluations",
						"action": "List app evaluations",
						"description": "Lists the performance evaluations of an app."
					}
				],
				"default": "evaluateAppPerformance"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						]
					}
				},
				"options": [
					{
						"name": "Delete File",
						"value": "deleteAppMediaFile",
						"action": "Delete app media file",
						"description": "Deletes a file from the media library of an app."
					},
					{
						"name": "Get File",
						"value": "getAppMediaFile",
						"action": "Get app media file",
						"description": "Downloads a file from the media library of an app, or the thumbnail of the app. Files up to 30 MB can be sent and files up to 50 MB returned."
					},
					{
						"name": "Get Many Files",
						"value": "listAppMediaFiles",
						"action": "List app media files",
						"description": "Lists the images and other files in the media library of an app."
					},
					{
						"name": "Upload File",
						"value": "uploadAppMediaFile",
						"action": "Upload app media file",
						"description": "Uploads an image or other file into the media library of an app; an existing file is replaced. Files up to 30 MB can be sent and files up to 50 MB returned."
					}
				],
				"default": "deleteAppMediaFile"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						]
					}
				},
				"options": [
					{
						"name": "Get",
						"value": "getLoadScript",
						"action": "Get load script",
						"description": "Returns the current load script of an app."
					},
					{
						"name": "Get Version",
						"value": "getLoadScriptVersion",
						"action": "Get load script version",
						"description": "Returns a saved version of the load script of an app."
					},
					{
						"name": "Get Many Versions",
						"value": "listLoadScriptVersions",
						"action": "List load script versions",
						"description": "Lists the saved versions of the load script of an app."
					},
					{
						"name": "Set",
						"value": "setLoadScript",
						"action": "Set load script",
						"description": "Replaces the load script of an app and keeps the previous script as a version."
					},
					{
						"name": "Validate",
						"value": "validateLoadScript",
						"action": "Validate load script",
						"description": "Checks a load script for basic errors such as unknown statements, without saving or running it; errors in the details of a statement are found only when the app is reloaded."
					}
				],
				"default": "getLoadScript"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createScript",
						"action": "Create script",
						"description": "Creates an empty script in a space or the personal space."
					},
					{
						"name": "Delete",
						"value": "deleteScript",
						"action": "Delete script",
						"description": "Deletes a script."
					},
					{
						"name": "Get",
						"value": "getScript",
						"action": "Get script",
						"description": "Returns the current content of a script."
					},
					{
						"name": "Get Many",
						"value": "listScripts",
						"action": "List scripts",
						"description": "Lists the scripts, optionally filtered by name or space."
					},
					{
						"name": "Update",
						"value": "updateScript",
						"action": "Update script",
						"description": "Replaces the content of a script and keeps the previous content as a version."
					}
				],
				"default": "createScript"
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
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"changeAppOwner"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Owner ID",
				"name": "ownerId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The ID of the new owner.",
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"changeAppOwner"
						]
					}
				}
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"copyApp"
						]
					}
				},
				"description": "Identifier of the app."
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
							"app"
						],
						"operation": [
							"copyApp"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name of the copy. Leave empty to keep the name."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description of the copy."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space for the copy. Leave empty for the same space."
					}
				]
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The name of the app.",
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"createApp"
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
							"app"
						],
						"operation": [
							"createApp"
						]
					}
				},
				"options": [
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description of the app."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space to create the app in. Leave empty for the personal space."
					}
				]
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The name of the script.",
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						],
						"operation": [
							"createScript"
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
							"script"
						],
						"operation": [
							"createScript"
						]
					}
				},
				"options": [
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description of the app."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space to create the app in. Leave empty for the personal space."
					}
				]
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"deleteApp"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"deleteAppMediaFile"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Path",
				"name": "path",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"deleteAppMediaFile"
						]
					}
				},
				"description": "The path of the media file, for example logo.png or images/logo.png."
			},
			{
				"displayName": "Script ID",
				"name": "scriptId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListScriptsResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						],
						"operation": [
							"deleteScript"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app evaluation"
						],
						"operation": [
							"evaluateAppPerformance"
						]
					}
				},
				"description": "Guid of the app."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"exportApp"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Without data",
				"name": "withoutData",
				"type": "boolean",
				"default": false,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"exportApp"
						]
					}
				},
				"description": "Whether to export only the structure and the load script, without data."
			},
			{
				"displayName": "File name",
				"name": "fileName",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"exportApp"
						]
					}
				},
				"description": "The name of the file. Default is the name of the app and the time (UTC), for example Sales_2026-10-02_1015.qvf."
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
							"app"
						],
						"operation": [
							"exportApp"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"getApp"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"getAppDataLineage"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"getAppDataMetadata"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Evaluation ID",
				"name": "evaluationId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app evaluation"
						],
						"operation": [
							"getAppEvaluation"
						]
					}
				},
				"description": "Id of the desired evaluation."
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
							"app evaluation"
						],
						"operation": [
							"getAppEvaluation"
						]
					}
				},
				"options": [
					{
						"displayName": "All",
						"name": "all",
						"type": "boolean",
						"default": false,
						"description": "Whether to return the full data of the evaluation."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"getAppMediaFile"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Path",
				"name": "path",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"getAppMediaFile"
						]
					}
				},
				"description": "The path of the media file, for example logo.png. Not needed for the thumbnail."
			},
			{
				"displayName": "Thumbnail",
				"name": "thumbnail",
				"type": "boolean",
				"default": false,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"getAppMediaFile"
						]
					}
				},
				"description": "Whether to return the thumbnail of the app instead of a media file."
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
							"app media"
						],
						"operation": [
							"getAppMediaFile"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
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
							"app"
						],
						"operation": [
							"getApps"
						]
					}
				},
				"options": [
					{
						"displayName": "Search",
						"name": "search",
						"type": "string",
						"default": "",
						"description": "Returns only apps whose name contains this text."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 1000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of apps to return, between 1 and 1000."
					}
				]
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"getLoadScript"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"getLoadScriptVersion"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Version ID",
				"name": "versionId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"getLoadScriptVersion"
						]
					}
				},
				"description": "Identifier of the script version, or 'current' for retrieving the current version."
			},
			{
				"displayName": "Script ID",
				"name": "scriptId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListScriptsResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						],
						"operation": [
							"getScript"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"importApp"
						]
					}
				},
				"description": "The name of the new app. Default is the name stored in the file."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"importApp"
						]
					}
				},
				"description": "The space of the new app. Leave empty for the personal space."
			},
			{
				"displayName": "Input Binary Field",
				"name": "binaryPropertyName",
				"type": "string",
				"default": "data",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"importApp"
						]
					}
				},
				"hint": "The name of the input binary field containing the file to send",
				"description": "The QVF file."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app evaluation"
						],
						"operation": [
							"listAppEvaluations"
						]
					}
				},
				"description": "The app guid."
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
							"app evaluation"
						],
						"operation": [
							"listAppEvaluations"
						]
					}
				},
				"options": [
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "string",
						"default": "",
						"description": "Property to sort list on."
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
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"listAppMediaFiles"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Folder",
				"name": "folder",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"listAppMediaFiles"
						]
					}
				},
				"description": "A folder within the media library. Leave empty for all files."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"listLoadScriptVersions"
						]
					}
				},
				"description": "Identifier of the app."
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
							"load script"
						],
						"operation": [
							"listLoadScriptVersions"
						]
					}
				},
				"options": [
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
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						],
						"operation": [
							"listScripts"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The case-insensitive string used to search for a resource by name."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "+createdAt",
								"value": "+createdAt"
							},
							{
								"name": "-createdAt",
								"value": "-createdAt"
							},
							{
								"name": "+name",
								"value": "+name"
							},
							{
								"name": "-name",
								"value": "-name"
							},
							{
								"name": "+updatedAt",
								"value": "+updatedAt"
							},
							{
								"name": "-updatedAt",
								"value": "-updatedAt"
							},
							{
								"name": "+recentlyUsed",
								"value": "+recentlyUsed"
							},
							{
								"name": "-recentlyUsed",
								"value": "-recentlyUsed"
							}
						],
						"default": "",
						"description": "The property of a resource to sort on (default sort is +createdAt)."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space's unique identifier (supports \\'personal\\' as spaceId)."
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
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"moveAppToSpace"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The ID of the target space.",
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"moveAppToSpace"
						]
					}
				}
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"publishApp"
						]
					}
				},
				"description": "Identifier of the app."
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
							"app"
						],
						"operation": [
							"publishApp"
						]
					}
				},
				"options": [
					{
						"displayName": "Data",
						"name": "data",
						"type": "string",
						"default": "",
						"description": "The data."
					},
					{
						"displayName": "Move App",
						"name": "moveApp",
						"type": "boolean",
						"default": false,
						"description": "Whether to move the original app instead of copying it."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The managed space ID where the app will be published."
					},
					{
						"displayName": "Attributes",
						"name": "attributes",
						"type": "json",
						"default": "{}",
						"description": "The attributes."
					},
					{
						"displayName": "Origin App ID",
						"name": "originAppId",
						"type": "string",
						"default": "",
						"description": "If app is moved, originAppId needs to be provided."
					}
				]
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"republishApp"
						]
					}
				},
				"description": "Identifier of the app."
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
							"app"
						],
						"operation": [
							"republishApp"
						]
					}
				},
				"options": [
					{
						"displayName": "Data",
						"name": "data",
						"type": "string",
						"default": "",
						"description": "The data."
					},
					{
						"displayName": "Target ID",
						"name": "targetId",
						"type": "string",
						"default": "",
						"description": "The target ID to be republished."
					},
					{
						"displayName": "Attributes",
						"name": "attributes",
						"type": "json",
						"default": "{}",
						"description": "The attributes."
					},
					{
						"displayName": "Check Origin App ID",
						"name": "checkOriginAppId",
						"type": "boolean",
						"default": false,
						"description": "Whether to check that the source app is the app that was originally published."
					}
				]
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"setLoadScript"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Script",
				"name": "script",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The complete load script.",
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"setLoadScript"
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
							"load script"
						],
						"operation": [
							"setLoadScript"
						]
					}
				},
				"options": [
					{
						"displayName": "Version message",
						"name": "versionMessage",
						"type": "string",
						"default": "",
						"description": "A description of this script version."
					}
				]
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"updateApp"
						]
					}
				},
				"description": "Identifier of the app."
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
							"app"
						],
						"operation": [
							"updateApp"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The new name of the app."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The new description of the app."
					}
				]
			},
			{
				"displayName": "Script ID",
				"name": "scriptId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListScriptsResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						],
						"operation": [
							"updateScript"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Script",
				"name": "script",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The complete script.",
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						],
						"operation": [
							"updateScript"
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
							"script"
						],
						"operation": [
							"updateScript"
						]
					}
				},
				"options": [
					{
						"displayName": "Version message",
						"name": "versionMessage",
						"type": "string",
						"default": "",
						"description": "A description of this version."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"uploadAppMediaFile"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Path",
				"name": "path",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"uploadAppMediaFile"
						]
					}
				},
				"description": "The path of the media file, for example logo.png or images/logo.png."
			},
			{
				"displayName": "Input Binary Field",
				"name": "binaryPropertyName",
				"type": "string",
				"default": "data",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"uploadAppMediaFile"
						]
					}
				},
				"hint": "The name of the input binary field containing the file to send",
				"description": "The file to upload."
			},
			{
				"displayName": "Script",
				"name": "script",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The load script to check.",
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"validateLoadScript"
						]
					}
				}
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
			async loadGetAppsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListScriptsResourceId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/scripts', {"limit":1000}, {}, 'value', 'resourceId', 'name');
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return runOperations.call(this, OPERATIONS, BASE_URL, CLIENT);
	}
}
