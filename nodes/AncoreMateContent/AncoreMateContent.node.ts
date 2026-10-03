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
const CLIENT = 'n8n/1.20.0';

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
	"copyDataConnection": {
		"method": "POST",
		"path": "/v1/data-connections/copy",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "id",
				"required": true,
				"json": false
			},
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
				"name": "qPassword",
				"required": false,
				"json": false
			},
			{
				"name": "qUsername",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"copyDataFile": {
		"method": "POST",
		"path": "/v1/data-files/{dataFileId}/copy",
		"read": false,
		"list": false,
		"pathParameters": [
			"dataFileId"
		],
		"query": [
			{
				"name": "name",
				"option": false
			},
			{
				"name": "dataFileConnectionId",
				"option": false
			},
			{
				"name": "folderId",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createDataConnection": {
		"method": "POST",
		"path": "/v1/data-connections",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "qID",
				"required": false,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "owner",
				"required": false,
				"json": false
			},
			{
				"name": "qName",
				"required": false,
				"json": false
			},
			{
				"name": "qType",
				"required": false,
				"json": false
			},
			{
				"name": "space",
				"required": false,
				"json": false
			},
			{
				"name": "qLogOn",
				"required": false,
				"json": false
			},
			{
				"name": "qPassword",
				"required": false,
				"json": false
			},
			{
				"name": "qUsername",
				"required": false,
				"json": false
			},
			{
				"name": "datasourceID",
				"required": false,
				"json": false
			},
			{
				"name": "qriInRequest",
				"required": false,
				"json": false
			},
			{
				"name": "qArchitecture",
				"required": false,
				"json": false
			},
			{
				"name": "qCredentialsID",
				"required": false,
				"json": false
			},
			{
				"name": "qEngineObjectID",
				"required": false,
				"json": false
			},
			{
				"name": "qCredentialsName",
				"required": false,
				"json": false
			},
			{
				"name": "qConnectStatement",
				"required": false,
				"json": false
			},
			{
				"name": "qConnectionSecret",
				"required": false,
				"json": false
			},
			{
				"name": "qSeparateCredentials",
				"required": false,
				"json": false
			},
			{
				"name": "authUrlOnly",
				"required": false,
				"json": false
			},
			{
				"name": "connectionProperties",
				"required": false,
				"json": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createDataFolder": {
		"method": "POST",
		"path": "/v1/data-files/folders",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [
			{
				"name": "name",
				"option": false
			},
			{
				"name": "dataFileConnectionId",
				"option": false
			},
			{
				"name": "folderId",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteDataConnection": {
		"method": "DELETE",
		"path": "/v1/data-connections/{dataConnectionId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"dataConnectionId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteDataFile": {
		"method": "DELETE",
		"path": "/v1/data-files/{dataFileId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"dataFileId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteDataFiles": {
		"method": "POST",
		"path": "/v1/data-files/delete",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "ids",
				"required": true,
				"json": false,
				"list": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getChangeStore": {
		"method": "GET",
		"path": "/v1/change-stores/{storeId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"storeId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getDataConnection": {
		"method": "GET",
		"path": "/v1/data-connections/{dataConnectionId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"dataConnectionId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getDataFile": {
		"method": "GET",
		"path": "/v1/data-files/{dataFileId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"dataFileId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getItem": {
		"method": "GET",
		"path": "/v1/items/{itemId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"itemId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listChangeStoreColumns": {
		"method": "GET",
		"path": "/v1/change-stores/{storeId}/columns",
		"read": true,
		"list": true,
		"pathParameters": [
			"storeId"
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
	"listChangeStoreTable": {
		"method": "GET",
		"path": "/v1/change-stores/{storeId}/table",
		"read": true,
		"list": true,
		"pathParameters": [
			"storeId"
		],
		"query": [
			{
				"name": "filter",
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
	"listChangeStores": {
		"method": "GET",
		"path": "/v1/change-stores",
		"read": true,
		"list": true,
		"pathParameters": [],
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
				"name": "spaceId",
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
	"listCurrentChanges": {
		"method": "GET",
		"path": "/v1/change-stores/{storeId}/changes",
		"read": true,
		"list": true,
		"pathParameters": [
			"storeId"
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
	"listDataConnections": {
		"method": "GET",
		"path": "/v1/data-connections",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "dataName",
				"option": true
			},
			{
				"name": "personal",
				"option": true
			},
			{
				"name": "owner",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "filter",
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
	"listDataFileConnections": {
		"method": "GET",
		"path": "/v1/data-file-connections",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "appId",
				"option": true
			},
			{
				"name": "name",
				"option": true
			},
			{
				"name": "personal",
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
	"listDataFiles": {
		"method": "GET",
		"path": "/v1/data-files",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "appId",
				"option": true
			},
			{
				"name": "baseNameWildcard",
				"option": true
			},
			{
				"name": "dataFileConnectionId",
				"option": true
			},
			{
				"name": "folderPath",
				"option": true
			},
			{
				"name": "includeFolders",
				"option": true
			},
			{
				"name": "name",
				"option": true
			},
			{
				"name": "ownerId",
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
	"listItems": {
		"method": "GET",
		"path": "/v1/items",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "collectionId",
				"option": true
			},
			{
				"name": "name",
				"option": true
			},
			{
				"name": "ownerId",
				"option": true
			},
			{
				"name": "query",
				"option": true
			},
			{
				"name": "resourceType",
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
				"name": "spaceType",
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
	"updateDataConnection": {
		"method": "PUT",
		"path": "/v1/data-connections/{dataConnectionId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"dataConnectionId"
		],
		"query": [],
		"body": [
			{
				"name": "qID",
				"required": true,
				"json": false
			},
			{
				"name": "qName",
				"required": true,
				"json": false
			},
			{
				"name": "qType",
				"required": true,
				"json": false
			},
			{
				"name": "space",
				"required": false,
				"json": false
			},
			{
				"name": "qLogOn",
				"required": false,
				"json": false
			},
			{
				"name": "qPassword",
				"required": false,
				"json": false
			},
			{
				"name": "qUsername",
				"required": false,
				"json": false
			},
			{
				"name": "datasourceID",
				"required": false,
				"json": false
			},
			{
				"name": "qArchitecture",
				"required": false,
				"json": false
			},
			{
				"name": "qCredentialsID",
				"required": false,
				"json": false
			},
			{
				"name": "qEngineObjectID",
				"required": true,
				"json": false
			},
			{
				"name": "qCredentialsName",
				"required": false,
				"json": false
			},
			{
				"name": "qConnectStatement",
				"required": true,
				"json": false
			},
			{
				"name": "qConnectionSecret",
				"required": false,
				"json": false
			},
			{
				"name": "qSeparateCredentials",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"uploadDataFile": {
		"method": "POST",
		"path": "/v1/data-files/upload",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [
			{
				"name": "name",
				"option": false
			},
			{
				"name": "dataFileConnectionId",
				"option": false
			},
			{
				"name": "folderId",
				"option": true
			},
			{
				"name": "ifExists",
				"option": false
			},
			{
				"name": "dataFileId",
				"option": true
			}
		],
		"body": [],
		"fileInput": true,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	}
};

export class AncoreMateContent implements INodeType {
	description: INodeTypeDescription = {
		"displayName": "ancoreMate Content",
		"name": "ancoreMateContent",
		"icon": "file:ancoremate.svg",
		"group": [
			"transform"
		],
		"version": 1,
		"subtitle": "={{$parameter[\"operation\"] + \": \" + $parameter[\"resource\"]}}",
		"description": "Work with files and data in Qlik Cloud®: find items, upload, copy, move and delete data files and folders, manage data connections and read the changes of write tables (change stores).",
		"defaults": {
			"name": "ancoreMate Content"
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
						"name": "Change store",
						"value": "change store"
					},
					{
						"name": "Data connection",
						"value": "data connection"
					},
					{
						"name": "Data file",
						"value": "data file"
					},
					{
						"name": "Item",
						"value": "item"
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
				"default": "change store"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						]
					}
				},
				"options": [
					{
						"name": "Get",
						"value": "getChangeStore",
						"action": "Get change store",
						"description": "Returns a change store."
					},
					{
						"name": "Get Many Columns",
						"value": "listChangeStoreColumns",
						"action": "List change store columns",
						"description": "Lists the editable columns of a change store."
					},
					{
						"name": "Get Many Table",
						"value": "listChangeStoreTable",
						"action": "List change store table",
						"description": "Lists the edits of a change store as table rows."
					},
					{
						"name": "Get Many",
						"value": "listChangeStores",
						"action": "List change stores",
						"description": "Lists the change stores that keep the edits of write tables."
					},
					{
						"name": "Get Many Current Changes",
						"value": "listCurrentChanges",
						"action": "List current changes",
						"description": "Lists the current edits in a change store."
					}
				],
				"default": "getChangeStore"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						]
					}
				},
				"options": [
					{
						"name": "Copy",
						"value": "copyDataConnection",
						"action": "Copy data connection",
						"description": "Creates a copy of a data connection, optionally in another space."
					},
					{
						"name": "Create",
						"value": "createDataConnection",
						"action": "Create data connection",
						"description": "Creates a data connection in a space."
					},
					{
						"name": "Delete",
						"value": "deleteDataConnection",
						"action": "Delete data connection",
						"description": "Deletes a data connection."
					},
					{
						"name": "Get",
						"value": "getDataConnection",
						"action": "Get data connection",
						"description": "Returns a data connection."
					},
					{
						"name": "Get Many",
						"value": "listDataConnections",
						"action": "List data connections",
						"description": "Lists the data connections the connected user can use."
					},
					{
						"name": "Update",
						"value": "updateDataConnection",
						"action": "Update data connection",
						"description": "Replaces the settings of a data connection."
					}
				],
				"default": "copyDataConnection"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						]
					}
				},
				"options": [
					{
						"name": "Copy",
						"value": "copyDataFile",
						"action": "Copy data file",
						"description": "Copies a data file under a new name, optionally into another space."
					},
					{
						"name": "Create Data Folder",
						"value": "createDataFolder",
						"action": "Create data folder",
						"description": "Creates a folder for data files in a space or the personal space."
					},
					{
						"name": "Delete Data File",
						"value": "deleteDataFile",
						"action": "Delete data file",
						"description": "Deletes a data file."
					},
					{
						"name": "Delete Data Files",
						"value": "deleteDataFiles",
						"action": "Delete data files",
						"description": "Deletes several data files at once."
					},
					{
						"name": "Get",
						"value": "getDataFile",
						"action": "Get data file",
						"description": "Returns the details of a data file."
					},
					{
						"name": "Get Many Connections",
						"value": "listDataFileConnections",
						"action": "List data file connections",
						"description": "Lists the data file connections, one per space with data files."
					},
					{
						"name": "Get Many",
						"value": "listDataFiles",
						"action": "List data files",
						"description": "Lists the data files in a space or in the personal space."
					},
					{
						"name": "Upload",
						"value": "uploadDataFile",
						"action": "Upload data file",
						"description": "Uploads a data file, for example CSV or Excel, into a space or the personal space. A file with the same name is replaced unless If the file exists is set to Fail. Files up to 30 MB can be sent and files up to 50 MB returned."
					}
				],
				"default": "copyDataFile"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"item"
						]
					}
				},
				"options": [
					{
						"name": "Get",
						"value": "getItem",
						"action": "Get item",
						"description": "Returns an item of the tenant."
					},
					{
						"name": "Get Many",
						"value": "listItems",
						"action": "List items",
						"description": "Lists the items of the tenant such as apps, data files, notes and automations. Filter by type, name or space."
					}
				],
				"default": "getItem"
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
				"displayName": "ID",
				"name": "id",
				"type": "string",
				"default": "",
				"required": true,
				"description": "ID of the source connection being duplicated.",
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"copyDataConnection"
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
							"data connection"
						],
						"operation": [
							"copyDataConnection"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "Optional name for the duplicated connection, must be unique in the target scope."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "Optional target space ID for the duplicated connection."
					},
					{
						"displayName": "Q Password",
						"name": "qPassword",
						"type": "string",
						"default": "",
						"description": "Optional credential password, specify to override credential embedded (or associated) with the source connection."
					},
					{
						"displayName": "Q Username",
						"name": "qUsername",
						"type": "string",
						"default": "",
						"description": "Optional credential username, specify to override credential embedded (or associated) with the source connection."
					}
				]
			},
			{
				"displayName": "Data file",
				"name": "dataFileId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataFilesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"copyDataFile"
						]
					}
				},
				"description": "The data file."
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"copyDataFile"
						]
					}
				},
				"description": "The name of the copy, for example sales-2025.csv."
			},
			{
				"displayName": "Space",
				"name": "dataFileConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataFileConnectionsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"copyDataFile"
						]
					}
				},
				"description": "The data file connection of the space. Leave empty for the personal space."
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
							"data file"
						],
						"operation": [
							"copyDataFile"
						]
					}
				},
				"options": [
					{
						"displayName": "Folder ID",
						"name": "folderId",
						"type": "string",
						"default": "",
						"description": "The ID of the folder, for example from Create data folder."
					}
				]
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
							"data connection"
						],
						"operation": [
							"createDataConnection"
						]
					}
				},
				"options": [
					{
						"displayName": "Q ID",
						"name": "qID",
						"type": "string",
						"default": "",
						"description": "Unique identifier (UUID) for the data connection."
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
						"description": "List of tags attached to the connection (allow max 31 tags). One value per field; an expression may also return a list."
					},
					{
						"displayName": "Owner",
						"name": "owner",
						"type": "string",
						"default": "",
						"description": "App ID."
					},
					{
						"displayName": "Q Name",
						"name": "qName",
						"type": "string",
						"default": "",
						"description": "Descriptive name of the data connection."
					},
					{
						"displayName": "Q Type",
						"name": "qType",
						"type": "string",
						"default": "",
						"description": "Type of connection - indicates connection provider type."
					},
					{
						"displayName": "Space",
						"name": "space",
						"type": "string",
						"default": "",
						"description": "ID of the space in which the connection shall be created."
					},
					{
						"displayName": "Q Log On",
						"name": "qLogOn",
						"type": "number",
						"default": 0,
						"description": "The type of user of the data connection: 0 for the service user, 1 for the current user."
					},
					{
						"displayName": "Q Password",
						"name": "qPassword",
						"type": "string",
						"default": "",
						"description": "Any logon password associated with the data connection (connector encoded)."
					},
					{
						"displayName": "Q Username",
						"name": "qUsername",
						"type": "string",
						"default": "",
						"description": "Any logon username associated with the data connection."
					},
					{
						"displayName": "Datasource ID",
						"name": "datasourceID",
						"type": "string",
						"default": "",
						"description": "ID of the datasource of the connection."
					},
					{
						"displayName": "QRI In Request",
						"name": "qriInRequest",
						"type": "string",
						"default": "",
						"description": "QRI string of the connection."
					},
					{
						"displayName": "Q Architecture",
						"name": "qArchitecture",
						"type": "number",
						"default": 0,
						"description": "The q architecture."
					},
					{
						"displayName": "Q Credentials ID",
						"name": "qCredentialsID",
						"type": "string",
						"default": "",
						"description": "ID of the credential associated with the connection."
					},
					{
						"displayName": "Q Engine Object ID",
						"name": "qEngineObjectID",
						"type": "string",
						"default": "",
						"description": "Unique identifier (UUID) for the data connection as specified by the Sense engine."
					},
					{
						"displayName": "Q Credentials Name",
						"name": "qCredentialsName",
						"type": "string",
						"default": "",
						"description": "Name of the credential associated with the connection."
					},
					{
						"displayName": "Q Connect Statement",
						"name": "qConnectStatement",
						"type": "string",
						"default": "",
						"description": "Connection string for the data connection."
					},
					{
						"displayName": "Q Connection Secret",
						"name": "qConnectionSecret",
						"type": "string",
						"default": "",
						"description": "String that contains connection specific secret (or password) that requires encryption before persist to database."
					},
					{
						"displayName": "Q Separate Credentials",
						"name": "qSeparateCredentials",
						"type": "boolean",
						"default": false,
						"description": "Whether to create a connection without stored credentials."
					},
					{
						"displayName": "Auth URL Only",
						"name": "authUrlOnly",
						"type": "boolean",
						"default": false,
						"description": "Whether to return only the authentication URL."
					},
					{
						"displayName": "Connection Properties",
						"name": "connectionProperties",
						"type": "json",
						"default": "{}",
						"description": "Connection properties required to create dataconnection for the given datasource, which is defined by the response of 'GET /v1/data-sources/:{datasourceId}/api-specs'."
					}
				]
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"createDataFolder"
						]
					}
				},
				"description": "The name of the folder."
			},
			{
				"displayName": "Space",
				"name": "dataFileConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataFileConnectionsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"createDataFolder"
						]
					}
				},
				"description": "The data file connection of the space. Leave empty for the personal space."
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
							"data file"
						],
						"operation": [
							"createDataFolder"
						]
					}
				},
				"options": [
					{
						"displayName": "Folder ID",
						"name": "folderId",
						"type": "string",
						"default": "",
						"description": "The ID of the folder, for example from Create data folder."
					}
				]
			},
			{
				"displayName": "Data Connection ID",
				"name": "dataConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataConnectionsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"deleteDataConnection"
						]
					}
				},
				"description": "Connection ID."
			},
			{
				"displayName": "Data File ID",
				"name": "dataFileId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataFilesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"deleteDataFile"
						]
					}
				},
				"description": "The ID of the data file or folder to delete."
			},
			{
				"displayName": "Data file IDs",
				"name": "ids",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Data file ID"
				},
				"default": [],
				"required": true,
				"description": "The IDs of the data files to delete. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"deleteDataFiles"
						]
					}
				}
			},
			{
				"displayName": "Store ID",
				"name": "storeId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListChangeStoresStoreId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"getChangeStore"
						]
					}
				},
				"description": "The id of the change store."
			},
			{
				"displayName": "Data Connection ID",
				"name": "dataConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataConnectionsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"getDataConnection"
						]
					}
				},
				"description": "Connection ID."
			},
			{
				"displayName": "Data File ID",
				"name": "dataFileId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataFilesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"getDataFile"
						]
					}
				},
				"description": "The ID of the data file."
			},
			{
				"displayName": "Item ID",
				"name": "itemId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListItemsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"item"
						],
						"operation": [
							"getItem"
						]
					}
				},
				"description": "The item's unique identifier."
			},
			{
				"displayName": "Store ID",
				"name": "storeId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListChangeStoresStoreId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listChangeStoreColumns"
						]
					}
				},
				"description": "The id of the change store."
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
							"change store"
						],
						"operation": [
							"listChangeStoreColumns"
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
							"change store"
						],
						"operation": [
							"listChangeStoreColumns"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "A SCIM filter expression used to filter the result."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "string",
						"default": "",
						"description": "Sort results by a field, with optional + (asc) or - (desc) prefix."
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
				"displayName": "Store ID",
				"name": "storeId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListChangeStoresStoreId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listChangeStoreTable"
						]
					}
				},
				"description": "The id of the change store."
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
							"change store"
						],
						"operation": [
							"listChangeStoreTable"
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
							"change store"
						],
						"operation": [
							"listChangeStoreTable"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "A SCIM filter expression used to filter the result."
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
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listChangeStores"
						]
					}
				},
				"description": "The space ID to filter change stores by."
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
							"change store"
						],
						"operation": [
							"listChangeStores"
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
							"change store"
						],
						"operation": [
							"listChangeStores"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "A SCIM filter expression used to filter the result."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "string",
						"default": "",
						"description": "Sort results by a field, with optional + (asc) or - (desc) prefix."
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
				"displayName": "Store ID",
				"name": "storeId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListChangeStoresStoreId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listCurrentChanges"
						]
					}
				},
				"description": "The id of the change store."
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
							"change store"
						],
						"operation": [
							"listCurrentChanges"
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
							"change store"
						],
						"operation": [
							"listCurrentChanges"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "A SCIM filter expression used to filter the result."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "string",
						"default": "",
						"description": "Sort results by a field, with optional + (asc) or - (desc) prefix."
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
							"data connection"
						],
						"operation": [
							"listDataConnections"
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
							"data connection"
						],
						"operation": [
							"listDataConnections"
						]
					}
				},
				"options": [
					{
						"displayName": "Data Name",
						"name": "dataName",
						"type": "string",
						"default": "",
						"description": "Provides an alternate name to be used for data[] element in GET response."
					},
					{
						"displayName": "Personal",
						"name": "personal",
						"type": "boolean",
						"default": false,
						"description": "Whether to list only personal connections. Ignored when a space is set."
					},
					{
						"displayName": "Owner",
						"name": "owner",
						"type": "string",
						"default": "",
						"description": "Filtering on datafile connections by owner (i.e."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "string",
						"default": "",
						"description": "Name of field sort on for pagination, with prefix with + or - indicating ascending or descending order."
					},
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "Filtering resources by properties (filterable properties only) using SCIM filter string."
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
							"data file"
						],
						"operation": [
							"listDataFileConnections"
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
							"data file"
						],
						"operation": [
							"listDataFileConnections"
						]
					}
				},
				"options": [
					{
						"displayName": "App ID",
						"name": "appId",
						"type": "string",
						"default": "",
						"description": "If present, get connections with connection strings that are scoped to the given app ID."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "If present, only return connections with the given name."
					},
					{
						"displayName": "Personal",
						"name": "personal",
						"type": "boolean",
						"default": false,
						"description": "Whether to return only the connections that access data in a personal space."
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
								"name": "spaceId",
								"value": "spaceId"
							},
							{
								"name": "+spaceId",
								"value": "+spaceId"
							},
							{
								"name": "-spaceId",
								"value": "-spaceId"
							}
						],
						"default": "",
						"description": "The name of the field used to sort the result."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "If present, only return the connection that accesses data files in the specified space."
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
							"data file"
						],
						"operation": [
							"listDataFiles"
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
							"data file"
						],
						"operation": [
							"listDataFiles"
						]
					}
				},
				"options": [
					{
						"displayName": "App ID",
						"name": "appId",
						"type": "string",
						"default": "",
						"description": "Only return files scoped to the specified app."
					},
					{
						"displayName": "Base Name Wildcard",
						"name": "baseNameWildcard",
						"type": "string",
						"default": "",
						"description": "Returns only files whose name matches this pattern; * stands for any text and ? for one character, for example sales* or *.csv."
					},
					{
						"displayName": "Data File Connection ID",
						"name": "dataFileConnectionId",
						"type": "string",
						"default": "",
						"description": "Return files and folders that reside in the space referenced by the specified DataFiles connection."
					},
					{
						"displayName": "Folder Path",
						"name": "folderPath",
						"type": "string",
						"default": "",
						"description": "If present, return only items which reside under the specified folder path."
					},
					{
						"displayName": "Include Folders",
						"name": "includeFolders",
						"type": "boolean",
						"default": false,
						"description": "Whether to include folders in the list."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "Returns only the data file with exactly this name, for example sales.csv. To find files by a part of the name, use Base name wildcard."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "If present, fetch the data files for the specified owner."
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
								"name": "name",
								"value": "name"
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
								"name": "size",
								"value": "size"
							},
							{
								"name": "+size",
								"value": "+size"
							},
							{
								"name": "-size",
								"value": "-size"
							},
							{
								"name": "modifiedDate",
								"value": "modifiedDate"
							},
							{
								"name": "+modifiedDate",
								"value": "+modifiedDate"
							},
							{
								"name": "-modifiedDate",
								"value": "-modifiedDate"
							},
							{
								"name": "folder",
								"value": "folder"
							},
							{
								"name": "+folder",
								"value": "+folder"
							},
							{
								"name": "-folder",
								"value": "-folder"
							},
							{
								"name": "baseName",
								"value": "baseName"
							},
							{
								"name": "+baseName",
								"value": "+baseName"
							},
							{
								"name": "-baseName",
								"value": "-baseName"
							}
						],
						"default": "",
						"description": "The name of the field used to sort the result."
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
							"item"
						],
						"operation": [
							"listItems"
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
							"item"
						],
						"operation": [
							"listItems"
						]
					}
				},
				"options": [
					{
						"displayName": "Collection ID",
						"name": "collectionId",
						"type": "string",
						"default": "",
						"description": "The collection's unique identifier."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The case-insensitive string used to search for a resource by name."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "Owner identifier."
					},
					{
						"displayName": "Query",
						"name": "query",
						"type": "string",
						"default": "",
						"description": "The case-insensitive string used to search for a resource by name or description."
					},
					{
						"displayName": "Resource Type",
						"name": "resourceType",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "app",
								"value": "app"
							},
							{
								"name": "qlikview",
								"value": "qlikview"
							},
							{
								"name": "qvapp",
								"value": "qvapp"
							},
							{
								"name": "genericlink",
								"value": "genericlink"
							},
							{
								"name": "sharingservicetask",
								"value": "sharingservicetask"
							},
							{
								"name": "note",
								"value": "note"
							},
							{
								"name": "dataasset",
								"value": "dataasset"
							},
							{
								"name": "dataset",
								"value": "dataset"
							},
							{
								"name": "automation",
								"value": "automation"
							},
							{
								"name": "automl-experiment",
								"value": "automl-experiment"
							},
							{
								"name": "automl-deployment",
								"value": "automl-deployment"
							},
							{
								"name": "assistant",
								"value": "assistant"
							},
							{
								"name": "dataproduct",
								"value": "dataproduct"
							},
							{
								"name": "dataqualityrule",
								"value": "dataqualityrule"
							},
							{
								"name": "glossary",
								"value": "glossary"
							},
							{
								"name": "knowledgebase",
								"value": "knowledgebase"
							},
							{
								"name": "script",
								"value": "script"
							},
							{
								"name": "semantictype",
								"value": "semantictype"
							},
							{
								"name": "page",
								"value": "page"
							}
						],
						"default": "",
						"description": "The case-sensitive string used to filter items by resourceType(s)."
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
						"displayName": "Space Type",
						"name": "spaceType",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "shared",
								"value": "shared"
							},
							{
								"name": "managed",
								"value": "managed"
							},
							{
								"name": "personal",
								"value": "personal"
							},
							{
								"name": "data",
								"value": "data"
							}
						],
						"default": "",
						"description": "The case-sensitive string used to filter items on space type(s)."
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
				"displayName": "Data Connection ID",
				"name": "dataConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataConnectionsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"updateDataConnection"
						]
					}
				},
				"description": "Connection ID."
			},
			{
				"displayName": "Q ID",
				"name": "qID",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Unique identifier for the data connection.",
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"updateDataConnection"
						]
					}
				}
			},
			{
				"displayName": "Q Name",
				"name": "qName",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Descriptive name of the data connection.",
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"updateDataConnection"
						]
					}
				}
			},
			{
				"displayName": "Q Type",
				"name": "qType",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Type of connection - indicates connection provider type.",
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"updateDataConnection"
						]
					}
				}
			},
			{
				"displayName": "Q Engine Object ID",
				"name": "qEngineObjectID",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Unique identifier for the data connection as specified by the Sense engine.",
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"updateDataConnection"
						]
					}
				}
			},
			{
				"displayName": "Q Connect Statement",
				"name": "qConnectStatement",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Connection string for the data connection.",
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"updateDataConnection"
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
							"data connection"
						],
						"operation": [
							"updateDataConnection"
						]
					}
				},
				"options": [
					{
						"displayName": "Space",
						"name": "space",
						"type": "string",
						"default": "",
						"description": "ID of the space to which the connection belongs."
					},
					{
						"displayName": "Q Log On",
						"name": "qLogOn",
						"type": "number",
						"default": 0,
						"description": "The type of user of the data connection: 0 for the service user, 1 for the current user."
					},
					{
						"displayName": "Q Password",
						"name": "qPassword",
						"type": "string",
						"default": "",
						"description": "Any logon password associated with the data connection."
					},
					{
						"displayName": "Q Username",
						"name": "qUsername",
						"type": "string",
						"default": "",
						"description": "Any logon username associated with the data connection."
					},
					{
						"displayName": "Datasource ID",
						"name": "datasourceID",
						"type": "string",
						"default": "",
						"description": "ID of the datasource associated with this connection."
					},
					{
						"displayName": "Q Architecture",
						"name": "qArchitecture",
						"type": "number",
						"default": 0,
						"description": "The q architecture."
					},
					{
						"displayName": "Q Credentials ID",
						"name": "qCredentialsID",
						"type": "string",
						"default": "",
						"description": "ID of the credential associated with the connection."
					},
					{
						"displayName": "Q Credentials Name",
						"name": "qCredentialsName",
						"type": "string",
						"default": "",
						"description": "Name of the credential associated with the connection."
					},
					{
						"displayName": "Q Connection Secret",
						"name": "qConnectionSecret",
						"type": "string",
						"default": "",
						"description": "String that contains connection level secret (or password)."
					},
					{
						"displayName": "Q Separate Credentials",
						"name": "qSeparateCredentials",
						"type": "boolean",
						"default": false,
						"description": "Whether the connection has no stored credentials."
					}
				]
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"uploadDataFile"
						]
					}
				},
				"description": "The file name, for example sales.csv."
			},
			{
				"displayName": "Space",
				"name": "dataFileConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataFileConnectionsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"uploadDataFile"
						]
					}
				},
				"description": "The data file connection of the space. Leave empty for the personal space."
			},
			{
				"displayName": "If the file exists",
				"name": "ifExists",
				"type": "options",
				"options": [
					{
						"name": "replace",
						"value": "replace"
					},
					{
						"name": "fail",
						"value": "fail"
					}
				],
				"default": "replace",
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"uploadDataFile"
						]
					}
				},
				"description": "What happens when a data file with this name already exists in the space or folder: replace (the default) replaces its content, fail stops with an error."
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
							"data file"
						],
						"operation": [
							"uploadDataFile"
						]
					}
				},
				"hint": "The name of the input binary field containing the file to send",
				"description": "The content of the data file."
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
							"data file"
						],
						"operation": [
							"uploadDataFile"
						]
					}
				},
				"options": [
					{
						"displayName": "Folder ID",
						"name": "folderId",
						"type": "string",
						"default": "",
						"description": "The ID of the folder, for example from Create data folder."
					},
					{
						"displayName": "Data file to replace",
						"name": "dataFileId",
						"type": "options",
						"typeOptions": {
							"loadOptionsMethod": "loadListDataFilesId"
						},
						"default": "",
						"description": "The data file to replace, also under another name. Leave empty to upload by name."
					}
				]
			}
		]
	};

	methods = {
		loadOptions: {
			async loadListChangeStoresStoreId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/change-stores', {"limit":1000}, {}, 'value', 'storeId', 'storeName');
			},
			async loadListDataConnectionsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/data-connections', {"limit":1000}, {}, 'value', 'id', 'qName');
			},
			async loadListDataFileConnectionsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/data-file-connections', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListDataFilesId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/data-files', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListItemsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/items', {"limit":1000}, {}, 'value', 'id', 'name');
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return runOperations.call(this, OPERATIONS, BASE_URL, CLIENT);
	}
}
