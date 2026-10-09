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
const CLIENT = 'n8n/1.23.7';

const OPERATIONS: Record<string, OperationSpec> = {
	"createBookmark": {
		"method": "POST",
		"path": "/v1/apps/{appId}/bookmarks",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "title",
				"required": true,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "publish",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createOrUpdateDimension": {
		"method": "POST",
		"path": "/v1/apps/{appId}/dimensions",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "dimensionId",
				"required": false,
				"json": false
			},
			{
				"name": "title",
				"required": true,
				"json": false
			},
			{
				"name": "field",
				"required": true,
				"json": false
			},
			{
				"name": "label",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createOrUpdateMeasure": {
		"method": "POST",
		"path": "/v1/apps/{appId}/measures",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "measureId",
				"required": false,
				"json": false
			},
			{
				"name": "title",
				"required": true,
				"json": false
			},
			{
				"name": "expression",
				"required": true,
				"json": false
			},
			{
				"name": "label",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createOrUpdateVariable": {
		"method": "PUT",
		"path": "/v1/apps/{appId}/variables/{variableName}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"variableName"
		],
		"query": [],
		"body": [
			{
				"name": "definition",
				"required": true,
				"json": false
			},
			{
				"name": "comment",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createTemplateReport": {
		"method": "POST",
		"path": "/v1/report-templates/{templateId}/report",
		"read": false,
		"list": false,
		"pathParameters": [
			"templateId"
		],
		"query": [],
		"body": [
			{
				"name": "format",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			},
			{
				"name": "fileName",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": true,
		"filesOutput": false,
		"async": true
	},
	"deleteBookmark": {
		"method": "DELETE",
		"path": "/v1/apps/{appId}/bookmarks/{bookmarkId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"bookmarkId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteDimension": {
		"method": "DELETE",
		"path": "/v1/apps/{appId}/dimensions/{dimensionId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"dimensionId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteMeasure": {
		"method": "DELETE",
		"path": "/v1/apps/{appId}/measures/{measureId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"measureId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteSheet": {
		"method": "DELETE",
		"path": "/v1/apps/{appId}/sheets/{sheetId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"sheetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteVariable": {
		"method": "DELETE",
		"path": "/v1/apps/{appId}/variables/{variableName}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"variableName"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"duplicateSheet": {
		"method": "POST",
		"path": "/v1/apps/{appId}/sheets/{sheetId}/copy",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"sheetId"
		],
		"query": [],
		"body": [
			{
				"name": "title",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"evaluateExpression": {
		"method": "POST",
		"path": "/v1/apps/{appId}/evaluate",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "expression",
				"required": true,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"exportChart": {
		"method": "POST",
		"path": "/v1/apps/{appId}/objects/{objectId}/image",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"objectId"
		],
		"query": [],
		"body": [
			{
				"name": "format",
				"required": false,
				"json": false
			},
			{
				"name": "width",
				"required": false,
				"json": false
			},
			{
				"name": "height",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			},
			{
				"name": "fileName",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": true,
		"filesOutput": false,
		"async": true
	},
	"exportChartData": {
		"method": "POST",
		"path": "/v1/apps/{appId}/objects/{objectId}/export",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"objectId"
		],
		"query": [],
		"body": [
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			},
			{
				"name": "fileName",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": true,
		"filesOutput": false,
		"async": true
	},
	"exportSheet": {
		"method": "POST",
		"path": "/v1/apps/{appId}/sheets/{sheetId}/export",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"sheetId"
		],
		"query": [],
		"body": [
			{
				"name": "format",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			},
			{
				"name": "fileName",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": true,
		"filesOutput": false,
		"async": true
	},
	"getAppFields": {
		"method": "GET",
		"path": "/v1/apps/{appId}/fields",
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
	"getDimension": {
		"method": "GET",
		"path": "/v1/apps/{appId}/dimensions/{dimensionId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId",
			"dimensionId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getMeasure": {
		"method": "GET",
		"path": "/v1/apps/{appId}/measures/{measureId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId",
			"measureId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getMeasureValue": {
		"method": "POST",
		"path": "/v1/apps/{appId}/measures/{measureId}/value",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId",
			"measureId"
		],
		"query": [],
		"body": [
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getObjectProperties": {
		"method": "GET",
		"path": "/v1/apps/{appId}/objects/{objectId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId",
			"objectId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getTableData": {
		"method": "POST",
		"path": "/v1/apps/{appId}/objects/{objectId}/data",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId",
			"objectId"
		],
		"query": [],
		"body": [
			{
				"name": "limit",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getTableDataForFields": {
		"method": "POST",
		"path": "/v1/apps/{appId}/table",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "dimensions",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "measures",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "limit",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getVariable": {
		"method": "GET",
		"path": "/v1/apps/{appId}/variables/{variableName}",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId",
			"variableName"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listBookmarks": {
		"method": "GET",
		"path": "/v1/apps/{appId}/bookmarks",
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
	"listDimensionValues": {
		"method": "POST",
		"path": "/v1/apps/{appId}/dimensions/{dimensionId}/values",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId",
			"dimensionId"
		],
		"query": [],
		"body": [
			{
				"name": "search",
				"required": false,
				"json": false
			},
			{
				"name": "onlyPossible",
				"required": false,
				"json": false
			},
			{
				"name": "limit",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listDimensions": {
		"method": "GET",
		"path": "/v1/apps/{appId}/dimensions",
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
	"listFieldValues": {
		"method": "POST",
		"path": "/v1/apps/{appId}/field-values",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "field",
				"required": true,
				"json": false
			},
			{
				"name": "search",
				"required": false,
				"json": false
			},
			{
				"name": "onlyPossible",
				"required": false,
				"json": false
			},
			{
				"name": "limit",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listMasterVisualizations": {
		"method": "GET",
		"path": "/v1/apps/{appId}/master-visualizations",
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
	"listMeasures": {
		"method": "GET",
		"path": "/v1/apps/{appId}/measures",
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
	"listReportTemplates": {
		"method": "GET",
		"path": "/v1/report-templates",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "name",
				"option": true
			},
			{
				"name": "sourceAppId",
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
	"listSheetObjects": {
		"method": "GET",
		"path": "/v1/apps/{appId}/sheets/{sheetId}/objects",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId",
			"sheetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listSheets": {
		"method": "GET",
		"path": "/v1/apps/{appId}/sheets",
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
	"listStories": {
		"method": "GET",
		"path": "/v1/apps/{appId}/stories",
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
	"listVariables": {
		"method": "GET",
		"path": "/v1/apps/{appId}/variables",
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
	"publishBookmark": {
		"method": "POST",
		"path": "/v1/apps/{appId}/bookmarks/{bookmarkId}/publish",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"bookmarkId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"publishSheet": {
		"method": "POST",
		"path": "/v1/apps/{appId}/sheets/{sheetId}/publish",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"sheetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"setAlwaysOneSelectedValue": {
		"method": "PUT",
		"path": "/v1/apps/{appId}/field-settings",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "field",
				"required": true,
				"json": false
			},
			{
				"name": "enabled",
				"required": true,
				"json": false
			},
			{
				"name": "value",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"unpublishBookmark": {
		"method": "POST",
		"path": "/v1/apps/{appId}/bookmarks/{bookmarkId}/unpublish",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"bookmarkId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"unpublishSheet": {
		"method": "POST",
		"path": "/v1/apps/{appId}/sheets/{sheetId}/unpublish",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"sheetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateBookmark": {
		"method": "PATCH",
		"path": "/v1/apps/{appId}/bookmarks/{bookmarkId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"bookmarkId"
		],
		"query": [],
		"body": [
			{
				"name": "title",
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

export class AncoreMateAppData implements INodeType {
	description: INodeTypeDescription = {
		"displayName": "ancoreMate App Data",
		"name": "ancoreMateAppData",
		"icon": "file:ancoremate.svg",
		"group": [
			"transform"
		],
		"version": 1,
		"subtitle": "={{$parameter[\"operation\"] + \": \" + $parameter[\"resource\"]}}",
		"description": "Work with the content of Qlik Sense® apps in Qlik Cloud®: read field values, expressions and table data with selections or bookmarks, maintain sheets, bookmarks, master items and variables, and export sheets, charts and data as PDF, PowerPoint, image or Excel.",
		"defaults": {
			"name": "ancoreMate App Data"
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
						"name": "Bookmark",
						"value": "bookmark"
					},
					{
						"name": "Data",
						"value": "data"
					},
					{
						"name": "Field",
						"value": "field"
					},
					{
						"name": "Master dimension",
						"value": "master dimension"
					},
					{
						"name": "Master measure",
						"value": "master measure"
					},
					{
						"name": "Object",
						"value": "object"
					},
					{
						"name": "Report",
						"value": "report"
					},
					{
						"name": "Sheet",
						"value": "sheet"
					},
					{
						"name": "Variable",
						"value": "variable"
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
				"default": "bookmark"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createBookmark",
						"action": "Create bookmark",
						"description": "Saves selections as a bookmark, optionally published."
					},
					{
						"name": "Delete",
						"value": "deleteBookmark",
						"action": "Delete bookmark",
						"description": "Deletes a bookmark."
					},
					{
						"name": "Get Many",
						"value": "listBookmarks",
						"action": "List bookmarks",
						"description": "Lists the bookmarks of an app."
					},
					{
						"name": "Publish",
						"value": "publishBookmark",
						"action": "Publish bookmark",
						"description": "Publishes a bookmark for the other users of the app."
					},
					{
						"name": "Unpublish",
						"value": "unpublishBookmark",
						"action": "Unpublish bookmark",
						"description": "Makes a published bookmark private again."
					},
					{
						"name": "Update",
						"value": "updateBookmark",
						"action": "Update bookmark",
						"description": "Changes the title or description of a bookmark."
					}
				],
				"default": "createBookmark"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						]
					}
				},
				"options": [
					{
						"name": "Evaluate Expression",
						"value": "evaluateExpression",
						"action": "Evaluate expression",
						"description": "Calculates an expression such as Sum(Sales) with the given selections."
					},
					{
						"name": "Get Measure Value",
						"value": "getMeasureValue",
						"action": "Get measure value",
						"description": "Calculates a master measure with the given selections."
					},
					{
						"name": "Get Table Data",
						"value": "getTableData",
						"action": "Get table data",
						"description": "Returns the rows of a table or chart of the app with the given selections."
					},
					{
						"name": "Get Table Data for Fields",
						"value": "getTableDataForFields",
						"action": "Get table data for fields",
						"description": "Builds a table from dimensions and measures and returns its rows with the given selections."
					}
				],
				"default": "evaluateExpression"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"field"
						]
					}
				},
				"options": [
					{
						"name": "Get Many Values",
						"value": "listFieldValues",
						"action": "List field values",
						"description": "Lists the values of a field, optionally only those possible with the given selections."
					},
					{
						"name": "Get Many",
						"value": "getAppFields",
						"action": "List fields",
						"description": "Lists the fields of the data model of a Qlik Sense app with their number of distinct values and tags."
					},
					{
						"name": "Set Always One Selected Value",
						"value": "setAlwaysOneSelectedValue",
						"action": "Set always one selected value",
						"description": "Switches the setting that a field always has exactly one selected value."
					}
				],
				"default": "listFieldValues"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						]
					}
				},
				"options": [
					{
						"name": "Create or Update Master Dimension",
						"value": "createOrUpdateDimension",
						"action": "Create or update master dimension",
						"description": "Creates a master dimension for a field, or updates the dimension when a dimension ID is given."
					},
					{
						"name": "Delete",
						"value": "deleteDimension",
						"action": "Delete master dimension",
						"description": "Deletes a master dimension."
					},
					{
						"name": "Get",
						"value": "getDimension",
						"action": "Get master dimension",
						"description": "Returns the properties of a master dimension."
					},
					{
						"name": "Get Many Values",
						"value": "listDimensionValues",
						"action": "List master dimension values",
						"description": "Lists the values of a master dimension, optionally with selections."
					},
					{
						"name": "Get Many",
						"value": "listDimensions",
						"action": "List master dimensions",
						"description": "Lists the master dimensions of an app."
					}
				],
				"default": "createOrUpdateDimension"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						]
					}
				},
				"options": [
					{
						"name": "Create or Update Master Measure",
						"value": "createOrUpdateMeasure",
						"action": "Create or update master measure",
						"description": "Creates a master measure, or updates the measure when a measure ID is given."
					},
					{
						"name": "Delete",
						"value": "deleteMeasure",
						"action": "Delete master measure",
						"description": "Deletes a master measure."
					},
					{
						"name": "Get",
						"value": "getMeasure",
						"action": "Get master measure",
						"description": "Returns the properties of a master measure."
					},
					{
						"name": "Get Many",
						"value": "listMeasures",
						"action": "List master measures",
						"description": "Lists the master measures of an app with their expressions."
					}
				],
				"default": "createOrUpdateMeasure"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"object"
						]
					}
				},
				"options": [
					{
						"name": "Get Properties",
						"value": "getObjectProperties",
						"action": "Get object properties",
						"description": "Returns all properties of an object such as a chart, as the Qlik associative engine stores them."
					},
					{
						"name": "Get Many Master Visualizations",
						"value": "listMasterVisualizations",
						"action": "List master visualizations",
						"description": "Lists the master visualizations of an app."
					},
					{
						"name": "Get Many Stories",
						"value": "listStories",
						"action": "List stories",
						"description": "Lists the stories of an app."
					}
				],
				"default": "getObjectProperties"
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
						"name": "Create from Template",
						"value": "createTemplateReport",
						"action": "Create report from template",
						"description": "Creates a report from a report template, for example Excel or PixelPerfect, in the format of the template or as PDF."
					},
					{
						"name": "Export Chart",
						"value": "exportChart",
						"action": "Export chart",
						"description": "Exports a chart as PNG image or PDF file, with optional selections."
					},
					{
						"name": "Export Chart Data",
						"value": "exportChartData",
						"action": "Export chart data",
						"description": "Exports the data of a table or chart as Excel file, with optional selections."
					},
					{
						"name": "Export Sheet",
						"value": "exportSheet",
						"action": "Export sheet",
						"description": "Exports a sheet as PDF or PowerPoint file, with optional selections."
					},
					{
						"name": "Get Many Templates",
						"value": "listReportTemplates",
						"action": "List report templates",
						"description": "Lists the report templates, for example Excel or PixelPerfect, optionally of one app."
					}
				],
				"default": "createTemplateReport"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						]
					}
				},
				"options": [
					{
						"name": "Delete",
						"value": "deleteSheet",
						"action": "Delete sheet",
						"description": "Deletes a sheet with its objects."
					},
					{
						"name": "Duplicate",
						"value": "duplicateSheet",
						"action": "Duplicate sheet",
						"description": "Copies a sheet with all its objects within the app."
					},
					{
						"name": "Get Many Objects",
						"value": "listSheetObjects",
						"action": "List sheet objects",
						"description": "Lists the charts and tables on a sheet."
					},
					{
						"name": "Get Many",
						"value": "listSheets",
						"action": "List sheets",
						"description": "Lists the sheets of an app with their publishing state."
					},
					{
						"name": "Publish",
						"value": "publishSheet",
						"action": "Publish sheet",
						"description": "Publishes a sheet so that other users of the app can see it."
					},
					{
						"name": "Unpublish",
						"value": "unpublishSheet",
						"action": "Unpublish sheet",
						"description": "Makes a published sheet private again."
					}
				],
				"default": "deleteSheet"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						]
					}
				},
				"options": [
					{
						"name": "Create or Update Variable",
						"value": "createOrUpdateVariable",
						"action": "Create or update variable",
						"description": "Creates a variable or changes its definition."
					},
					{
						"name": "Delete",
						"value": "deleteVariable",
						"action": "Delete variable",
						"description": "Deletes a variable."
					},
					{
						"name": "Get",
						"value": "getVariable",
						"action": "Get variable",
						"description": "Returns a variable with its definition and current value."
					},
					{
						"name": "Get Many",
						"value": "listVariables",
						"action": "List variables",
						"description": "Lists the variables of an app with their definitions."
					}
				],
				"default": "createOrUpdateVariable"
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
							"bookmark"
						],
						"operation": [
							"createBookmark"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Title",
				"name": "title",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The title of the bookmark.",
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"createBookmark"
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
							"bookmark"
						],
						"operation": [
							"createBookmark"
						]
					}
				},
				"options": [
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description of the bookmark."
					},
					{
						"displayName": "Publish",
						"name": "publish",
						"type": "boolean",
						"default": false,
						"description": "Whether to publish the bookmark."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied before reading, for example Region with the values Europe and Asia."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied before the selections."
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
							"master dimension"
						],
						"operation": [
							"createOrUpdateDimension"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Title",
				"name": "title",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The title of the master dimension.",
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"createOrUpdateDimension"
						]
					}
				}
			},
			{
				"displayName": "Field",
				"name": "field",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The field or an expression starting with =.",
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"createOrUpdateDimension"
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
							"master dimension"
						],
						"operation": [
							"createOrUpdateDimension"
						]
					}
				},
				"options": [
					{
						"displayName": "Dimension ID",
						"name": "dimensionId",
						"type": "string",
						"default": "",
						"description": "The master dimension to update. Leave empty to create a new one."
					},
					{
						"displayName": "Label",
						"name": "label",
						"type": "string",
						"default": "",
						"description": "The label shown in charts."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "The tags. One value per field; an expression may also return a list."
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
							"master measure"
						],
						"operation": [
							"createOrUpdateMeasure"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Title",
				"name": "title",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The title of the master measure.",
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						],
						"operation": [
							"createOrUpdateMeasure"
						]
					}
				}
			},
			{
				"displayName": "Expression",
				"name": "expression",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The expression, for example Sum(Sales).",
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						],
						"operation": [
							"createOrUpdateMeasure"
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
							"master measure"
						],
						"operation": [
							"createOrUpdateMeasure"
						]
					}
				},
				"options": [
					{
						"displayName": "Measure ID",
						"name": "measureId",
						"type": "string",
						"default": "",
						"description": "The master measure to update. Leave empty to create a new one."
					},
					{
						"displayName": "Label",
						"name": "label",
						"type": "string",
						"default": "",
						"description": "The label shown in charts."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "The tags. One value per field; an expression may also return a list."
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
							"variable"
						],
						"operation": [
							"createOrUpdateVariable"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Variable name",
				"name": "variableName",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						],
						"operation": [
							"createOrUpdateVariable"
						]
					}
				},
				"description": "The name of the variable."
			},
			{
				"displayName": "Definition",
				"name": "definition",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The definition, for example 2025 or =Max(Year).",
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						],
						"operation": [
							"createOrUpdateVariable"
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
							"variable"
						],
						"operation": [
							"createOrUpdateVariable"
						]
					}
				},
				"options": [
					{
						"displayName": "Comment",
						"name": "comment",
						"type": "string",
						"default": "",
						"description": "The comment."
					}
				]
			},
			{
				"displayName": "Report template",
				"name": "templateId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListReportTemplatesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"createTemplateReport"
						]
					}
				},
				"description": "The report template."
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
							"report"
						],
						"operation": [
							"createTemplateReport"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
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
							"createTemplateReport"
						]
					}
				},
				"options": [
					{
						"displayName": "Format",
						"name": "format",
						"type": "options",
						"options": [
							{
								"name": "native",
								"value": "native"
							},
							{
								"name": "pdf",
								"value": "pdf"
							}
						],
						"default": "native",
						"description": "Native (default) for the format of the template, or pdf."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied to the report, for example Region with the value Europe."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied to the report, instead of selections."
					},
					{
						"displayName": "File name",
						"name": "fileName",
						"type": "string",
						"default": "",
						"description": "The name of the file, for example Sales.pdf. Default is the title and the time (UTC), for example Customers_2026-10-02_1015.pdf."
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
							"bookmark"
						],
						"operation": [
							"deleteBookmark"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Bookmark",
				"name": "bookmarkId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListBookmarksId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"deleteBookmark"
						]
					}
				},
				"description": "The bookmark."
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
							"master dimension"
						],
						"operation": [
							"deleteDimension"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Master dimension",
				"name": "dimensionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDimensionsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"deleteDimension"
						]
					}
				},
				"description": "The master dimension."
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
							"master measure"
						],
						"operation": [
							"deleteMeasure"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Master measure",
				"name": "measureId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListMeasuresId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						],
						"operation": [
							"deleteMeasure"
						]
					}
				},
				"description": "The master measure."
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
							"sheet"
						],
						"operation": [
							"deleteSheet"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Sheet",
				"name": "sheetId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSheetsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"deleteSheet"
						]
					}
				},
				"description": "The sheet."
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
							"variable"
						],
						"operation": [
							"deleteVariable"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Variable",
				"name": "variableName",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListVariablesName",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						],
						"operation": [
							"deleteVariable"
						]
					}
				},
				"description": "The name of the variable."
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
							"sheet"
						],
						"operation": [
							"duplicateSheet"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Sheet",
				"name": "sheetId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSheetsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"duplicateSheet"
						]
					}
				},
				"description": "The sheet."
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
							"sheet"
						],
						"operation": [
							"duplicateSheet"
						]
					}
				},
				"options": [
					{
						"displayName": "Title",
						"name": "title",
						"type": "string",
						"default": "",
						"description": "The title of the copy. Default is the title with (copy)."
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
							"data"
						],
						"operation": [
							"evaluateExpression"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Expression",
				"name": "expression",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The expression, for example Sum(Sales).",
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"evaluateExpression"
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
							"data"
						],
						"operation": [
							"evaluateExpression"
						]
					}
				},
				"options": [
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied before reading, for example Region with the values Europe and Asia."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied before the selections."
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
							"exportChart"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Object",
				"name": "objectId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataObjectsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"exportChart"
						]
					}
				},
				"description": "The table or chart object."
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
							"report"
						],
						"operation": [
							"exportChart"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
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
							"exportChart"
						]
					}
				},
				"options": [
					{
						"displayName": "Format",
						"name": "format",
						"type": "options",
						"options": [
							{
								"name": "png",
								"value": "png"
							},
							{
								"name": "pdf",
								"value": "pdf"
							}
						],
						"default": "png",
						"description": "The file format, png (default) or pdf."
					},
					{
						"displayName": "Width",
						"name": "width",
						"type": "number",
						"default": 0,
						"description": "The width in pixels, between 20 and 4000. Default 1280."
					},
					{
						"displayName": "Height",
						"name": "height",
						"type": "number",
						"default": 0,
						"description": "The height in pixels, between 20 and 4000. Default 720."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied to the report, for example Region with the value Europe."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied to the report, instead of selections."
					},
					{
						"displayName": "File name",
						"name": "fileName",
						"type": "string",
						"default": "",
						"description": "The name of the file, for example Sales.pdf. Default is the title and the time (UTC), for example Customers_2026-10-02_1015.pdf."
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
							"exportChartData"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Object",
				"name": "objectId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataObjectsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"exportChartData"
						]
					}
				},
				"description": "The table or chart object."
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
							"report"
						],
						"operation": [
							"exportChartData"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
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
							"exportChartData"
						]
					}
				},
				"options": [
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied to the report, for example Region with the value Europe."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied to the report, instead of selections."
					},
					{
						"displayName": "File name",
						"name": "fileName",
						"type": "string",
						"default": "",
						"description": "The name of the file, for example Sales.pdf. Default is the title and the time (UTC), for example Customers_2026-10-02_1015.pdf."
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
							"exportSheet"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Sheet",
				"name": "sheetId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSheetsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"exportSheet"
						]
					}
				},
				"description": "The sheet."
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
							"report"
						],
						"operation": [
							"exportSheet"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
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
							"exportSheet"
						]
					}
				},
				"options": [
					{
						"displayName": "Format",
						"name": "format",
						"type": "options",
						"options": [
							{
								"name": "pdf",
								"value": "pdf"
							},
							{
								"name": "pptx",
								"value": "pptx"
							}
						],
						"default": "pdf",
						"description": "The file format, pdf (default) or pptx."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied to the report, for example Region with the value Europe."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied to the report, instead of selections."
					},
					{
						"displayName": "File name",
						"name": "fileName",
						"type": "string",
						"default": "",
						"description": "The name of the file, for example Sales.pdf. Default is the title and the time (UTC), for example Customers_2026-10-02_1015.pdf."
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
							"field"
						],
						"operation": [
							"getAppFields"
						]
					}
				},
				"description": "The app whose fields are listed."
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
							"field"
						],
						"operation": [
							"getAppFields"
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
							"master dimension"
						],
						"operation": [
							"getDimension"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Master dimension",
				"name": "dimensionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDimensionsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"getDimension"
						]
					}
				},
				"description": "The master dimension."
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
							"master measure"
						],
						"operation": [
							"getMeasure"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Master measure",
				"name": "measureId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListMeasuresId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						],
						"operation": [
							"getMeasure"
						]
					}
				},
				"description": "The master measure."
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
							"data"
						],
						"operation": [
							"getMeasureValue"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Master measure",
				"name": "measureId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListMeasuresId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"getMeasureValue"
						]
					}
				},
				"description": "The master measure."
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
							"data"
						],
						"operation": [
							"getMeasureValue"
						]
					}
				},
				"options": [
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied before reading, for example Region with the values Europe and Asia."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied before the selections."
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
							"object"
						],
						"operation": [
							"getObjectProperties"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Object ID",
				"name": "objectId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"object"
						],
						"operation": [
							"getObjectProperties"
						]
					}
				},
				"description": "The ID of the object, for example from List sheet objects."
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
							"data"
						],
						"operation": [
							"getTableData"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Object",
				"name": "objectId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataObjectsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"getTableData"
						]
					}
				},
				"description": "The table or chart object."
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
							"data"
						],
						"operation": [
							"getTableData"
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
							"data"
						],
						"operation": [
							"getTableData"
						]
					}
				},
				"options": [
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"default": 0,
						"description": "The maximum number of rows or values to return, between 1 and 100000. Default 1000."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied before reading, for example Region with the values Europe and Asia."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied before the selections."
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
							"data"
						],
						"operation": [
							"getTableDataForFields"
						]
					}
				},
				"description": "The app."
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
							"data"
						],
						"operation": [
							"getTableDataForFields"
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
							"data"
						],
						"operation": [
							"getTableDataForFields"
						]
					}
				},
				"options": [
					{
						"displayName": "Dimensions",
						"name": "dimensions",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Dimension"
						},
						"default": [],
						"description": "Fields or expressions starting with = for the rows, for example Region. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Measures",
						"name": "measures",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Measure"
						},
						"default": [],
						"description": "Expressions for the values, for example Sum(Sales). One value per field; an expression may also return a list."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"default": 0,
						"description": "The maximum number of rows or values to return, between 1 and 100000. Default 1000."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied before reading, for example Region with the values Europe and Asia."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied before the selections."
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
							"variable"
						],
						"operation": [
							"getVariable"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Variable",
				"name": "variableName",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListVariablesName",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						],
						"operation": [
							"getVariable"
						]
					}
				},
				"description": "The name of the variable."
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
							"bookmark"
						],
						"operation": [
							"listBookmarks"
						]
					}
				},
				"description": "The app."
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
							"bookmark"
						],
						"operation": [
							"listBookmarks"
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
							"master dimension"
						],
						"operation": [
							"listDimensionValues"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Master dimension",
				"name": "dimensionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDimensionsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"listDimensionValues"
						]
					}
				},
				"description": "The master dimension."
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
							"master dimension"
						],
						"operation": [
							"listDimensionValues"
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
							"master dimension"
						],
						"operation": [
							"listDimensionValues"
						]
					}
				},
				"options": [
					{
						"displayName": "Search",
						"name": "search",
						"type": "string",
						"default": "",
						"description": "Returns only values matching the search."
					},
					{
						"displayName": "Only possible values",
						"name": "onlyPossible",
						"type": "boolean",
						"default": false,
						"description": "Whether to return only the values that are possible with the current selections."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"default": 0,
						"description": "The maximum number of rows or values to return, between 1 and 100000. Default 1000."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied before reading, for example Region with the values Europe and Asia."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied before the selections."
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
							"master dimension"
						],
						"operation": [
							"listDimensions"
						]
					}
				},
				"description": "The app."
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
							"master dimension"
						],
						"operation": [
							"listDimensions"
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
							"field"
						],
						"operation": [
							"listFieldValues"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Field",
				"name": "field",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The name of the field.",
				"displayOptions": {
					"show": {
						"resource": [
							"field"
						],
						"operation": [
							"listFieldValues"
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
							"field"
						],
						"operation": [
							"listFieldValues"
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
							"field"
						],
						"operation": [
							"listFieldValues"
						]
					}
				},
				"options": [
					{
						"displayName": "Search",
						"name": "search",
						"type": "string",
						"default": "",
						"description": "Returns only values matching the search, for example Eu*."
					},
					{
						"displayName": "Only possible values",
						"name": "onlyPossible",
						"type": "boolean",
						"default": false,
						"description": "Whether to return only the values that are possible with the current selections."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"default": 0,
						"description": "The maximum number of rows or values to return, between 1 and 100000. Default 1000."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied before reading, for example Region with the values Europe and Asia."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied before the selections."
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
							"object"
						],
						"operation": [
							"listMasterVisualizations"
						]
					}
				},
				"description": "The app."
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
							"object"
						],
						"operation": [
							"listMasterVisualizations"
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
							"master measure"
						],
						"operation": [
							"listMeasures"
						]
					}
				},
				"description": "The app."
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
							"master measure"
						],
						"operation": [
							"listMeasures"
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
							"report"
						],
						"operation": [
							"listReportTemplates"
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
							"report"
						],
						"operation": [
							"listReportTemplates"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "Template name to search and filter for."
					},
					{
						"displayName": "Source App ID",
						"name": "sourceAppId",
						"type": "string",
						"default": "",
						"description": "Return the templates that are using the specified app as data source."
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
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"listSheetObjects"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Sheet",
				"name": "sheetId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSheetsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"listSheetObjects"
						]
					}
				},
				"description": "The sheet."
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
							"sheet"
						],
						"operation": [
							"listSheetObjects"
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
							"sheet"
						],
						"operation": [
							"listSheets"
						]
					}
				},
				"description": "The app."
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
							"sheet"
						],
						"operation": [
							"listSheets"
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
							"object"
						],
						"operation": [
							"listStories"
						]
					}
				},
				"description": "The app."
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
							"object"
						],
						"operation": [
							"listStories"
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
							"variable"
						],
						"operation": [
							"listVariables"
						]
					}
				},
				"description": "The app."
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
							"variable"
						],
						"operation": [
							"listVariables"
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
							"bookmark"
						],
						"operation": [
							"publishBookmark"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Bookmark",
				"name": "bookmarkId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListBookmarksId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"publishBookmark"
						]
					}
				},
				"description": "The bookmark."
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
							"sheet"
						],
						"operation": [
							"publishSheet"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Sheet",
				"name": "sheetId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSheetsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"publishSheet"
						]
					}
				},
				"description": "The sheet."
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
							"field"
						],
						"operation": [
							"setAlwaysOneSelectedValue"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Field",
				"name": "field",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The name of the field.",
				"displayOptions": {
					"show": {
						"resource": [
							"field"
						],
						"operation": [
							"setAlwaysOneSelectedValue"
						]
					}
				}
			},
			{
				"displayName": "Enabled",
				"name": "enabled",
				"type": "boolean",
				"default": false,
				"required": true,
				"description": "Whether exactly one value is always selected.",
				"displayOptions": {
					"show": {
						"resource": [
							"field"
						],
						"operation": [
							"setAlwaysOneSelectedValue"
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
							"field"
						],
						"operation": [
							"setAlwaysOneSelectedValue"
						]
					}
				},
				"options": [
					{
						"displayName": "Value",
						"name": "value",
						"type": "string",
						"default": "",
						"description": "The value to select when the setting is switched on. Default is the first value."
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
							"bookmark"
						],
						"operation": [
							"unpublishBookmark"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Bookmark",
				"name": "bookmarkId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListBookmarksId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"unpublishBookmark"
						]
					}
				},
				"description": "The bookmark."
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
							"sheet"
						],
						"operation": [
							"unpublishSheet"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Sheet",
				"name": "sheetId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSheetsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"unpublishSheet"
						]
					}
				},
				"description": "The sheet."
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
							"bookmark"
						],
						"operation": [
							"updateBookmark"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Bookmark",
				"name": "bookmarkId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListBookmarksId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"updateBookmark"
						]
					}
				},
				"description": "The bookmark."
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
							"bookmark"
						],
						"operation": [
							"updateBookmark"
						]
					}
				},
				"options": [
					{
						"displayName": "Title",
						"name": "title",
						"type": "string",
						"default": "",
						"description": "The new title."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The new description."
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
			async loadListAppChoicesResourceId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/app-choices', {"limit":1000}, {}, 'value', 'resourceId', 'name');
			},
			async loadListBookmarksId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/bookmarks', {}, {"appId":"appId"}, 'value', 'id', 'title');
			},
			async loadListDataObjectsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/data-objects', {}, {"appId":"appId"}, 'value', 'id', 'title');
			},
			async loadListDimensionsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/dimensions', {}, {"appId":"appId"}, 'value', 'id', 'title');
			},
			async loadListMeasuresId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/measures', {}, {"appId":"appId"}, 'value', 'id', 'title');
			},
			async loadListReportTemplatesId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/report-templates', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListSheetsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/sheets', {}, {"appId":"appId"}, 'value', 'id', 'title');
			},
			async loadListVariablesName(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/variables', {}, {"appId":"appId"}, 'value', 'name', 'name');
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return runOperations.call(this, OPERATIONS, BASE_URL, CLIENT);
	}
}
