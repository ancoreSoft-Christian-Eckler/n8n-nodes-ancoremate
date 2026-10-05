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
const CLIENT = 'n8n/1.23.1';

const OPERATIONS: Record<string, OperationSpec> = {
	"addSpaceMember": {
		"method": "POST",
		"path": "/v1/spaces/{spaceId}/members",
		"read": false,
		"list": false,
		"pathParameters": [
			"spaceId"
		],
		"query": [],
		"body": [
			{
				"name": "type",
				"required": true,
				"json": false
			},
			{
				"name": "roles",
				"required": true,
				"json": false,
				"list": true
			},
			{
				"name": "assigneeId",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"addSpaceMemberRoles": {
		"method": "POST",
		"path": "/v1/spaces/{spaceId}/members-by-id/roles/add",
		"read": false,
		"list": false,
		"pathParameters": [
			"spaceId"
		],
		"query": [],
		"body": [
			{
				"name": "type",
				"required": false,
				"json": false
			},
			{
				"name": "assigneeId",
				"required": true,
				"json": false
			},
			{
				"name": "roles",
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
	"createOrUpdateSpace": {
		"method": "POST",
		"path": "/v1/spaces",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [
			{
				"name": "spaceId",
				"option": false
			}
		],
		"body": [
			{
				"name": "name",
				"required": true,
				"json": false
			},
			{
				"name": "type",
				"required": true,
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
	"createSpaceShare": {
		"method": "POST",
		"path": "/v1/spaces/{spaceId}/shares",
		"read": false,
		"list": false,
		"pathParameters": [
			"spaceId"
		],
		"query": [],
		"body": [
			{
				"name": "type",
				"required": true,
				"json": false
			},
			{
				"name": "roles",
				"required": true,
				"json": false,
				"list": true
			},
			{
				"name": "assigneeId",
				"required": true,
				"json": false
			},
			{
				"name": "resourceId",
				"required": true,
				"json": false
			},
			{
				"name": "resourceType",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteSpace": {
		"method": "DELETE",
		"path": "/v1/spaces/{spaceId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"spaceId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteSpaceShare": {
		"method": "DELETE",
		"path": "/v1/spaces/{spaceId}/shares/{shareId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"shareId",
			"spaceId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getCurrentUser": {
		"method": "GET",
		"path": "/v1/current-user",
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
	"getGroup": {
		"method": "GET",
		"path": "/v1/groups/{groupId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"groupId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getSpace": {
		"method": "GET",
		"path": "/v1/spaces/{spaceId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"spaceId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getSpaceMember": {
		"method": "GET",
		"path": "/v1/spaces/{spaceId}/members/{assignmentId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"assignmentId",
			"spaceId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getSpaceShare": {
		"method": "GET",
		"path": "/v1/spaces/{spaceId}/shares/{shareId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"shareId",
			"spaceId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getTenant": {
		"method": "GET",
		"path": "/v1/tenant",
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
	"getUser": {
		"method": "GET",
		"path": "/v1/users/{userId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"userId"
		],
		"query": [
			{
				"name": "fields",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listGroups": {
		"method": "GET",
		"path": "/v1/groups",
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
				"name": "systemGroups",
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
	"listSpaceMembers": {
		"method": "GET",
		"path": "/v1/spaces/{spaceId}/members",
		"read": true,
		"list": true,
		"pathParameters": [
			"spaceId"
		],
		"query": [
			{
				"name": "assigneeId",
				"option": true
			},
			{
				"name": "type",
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
	"listSpaceShares": {
		"method": "GET",
		"path": "/v1/spaces/{spaceId}/shares",
		"read": true,
		"list": true,
		"pathParameters": [
			"spaceId"
		],
		"query": [
			{
				"name": "groupId",
				"option": true
			},
			{
				"name": "name",
				"option": true
			},
			{
				"name": "resourceId",
				"option": true
			},
			{
				"name": "resourceType",
				"option": true
			},
			{
				"name": "type",
				"option": true
			},
			{
				"name": "userId",
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
	"listSpaceTypes": {
		"method": "GET",
		"path": "/v1/space-types",
		"read": true,
		"list": true,
		"pathParameters": [],
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
	"listSpaces": {
		"method": "GET",
		"path": "/v1/spaces",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "action",
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
				"name": "type",
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
	"listUsers": {
		"method": "GET",
		"path": "/v1/users",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "fields",
				"option": true
			},
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
	"removeSpaceMember": {
		"method": "DELETE",
		"path": "/v1/spaces/{spaceId}/members/{assignmentId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"assignmentId",
			"spaceId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"removeSpaceMemberRoles": {
		"method": "POST",
		"path": "/v1/spaces/{spaceId}/members-by-id/roles/remove",
		"read": false,
		"list": false,
		"pathParameters": [
			"spaceId"
		],
		"query": [],
		"body": [
			{
				"name": "type",
				"required": false,
				"json": false
			},
			{
				"name": "assigneeId",
				"required": true,
				"json": false
			},
			{
				"name": "roles",
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
	"setSpaceMember": {
		"method": "PUT",
		"path": "/v1/spaces/{spaceId}/members-by-id",
		"read": false,
		"list": false,
		"pathParameters": [
			"spaceId"
		],
		"query": [],
		"body": [
			{
				"name": "type",
				"required": false,
				"json": false
			},
			{
				"name": "assigneeId",
				"required": true,
				"json": false
			},
			{
				"name": "roles",
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
	"updateSpaceMember": {
		"method": "PUT",
		"path": "/v1/spaces/{spaceId}/members/{assignmentId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"assignmentId",
			"spaceId"
		],
		"query": [],
		"body": [
			{
				"name": "roles",
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
	"updateSpaceShare": {
		"method": "PATCH",
		"path": "/v1/spaces/{spaceId}/shares/{shareId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"shareId",
			"spaceId"
		],
		"query": [],
		"body": [
			{
				"name": "roles",
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

export class AncoreMateSpacesAndAccess implements INodeType {
	description: INodeTypeDescription = {
		"displayName": "ancoreMate Spaces and Access",
		"name": "ancoreMateSpacesAndAccess",
		"icon": "file:ancoremate.svg",
		"group": [
			"transform"
		],
		"version": 1,
		"subtitle": "={{$parameter[\"operation\"] + \": \" + $parameter[\"resource\"]}}",
		"description": "Control access to Qlik Cloud®: read the tenant, create spaces, add members and change their space roles, share space content, and read users and groups.",
		"defaults": {
			"name": "ancoreMate Spaces and Access"
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
						"name": "Group",
						"value": "group"
					},
					{
						"name": "Space",
						"value": "space"
					},
					{
						"name": "Space member",
						"value": "space member"
					},
					{
						"name": "Space share",
						"value": "space share"
					},
					{
						"name": "Tenant",
						"value": "tenant"
					},
					{
						"name": "User",
						"value": "user"
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
				"default": "group"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"group"
						]
					}
				},
				"options": [
					{
						"name": "Get",
						"value": "getGroup",
						"action": "Get group",
						"description": "Returns a group of the tenant."
					},
					{
						"name": "Get Many",
						"value": "listGroups",
						"action": "List groups",
						"description": "Lists the groups of the tenant. Use the filter to search, for example name eq \"Finance\"."
					}
				],
				"default": "getGroup"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						]
					}
				},
				"options": [
					{
						"name": "Create or Update Space",
						"value": "createOrUpdateSpace",
						"action": "Create or update space",
						"description": "Creates a space, or updates the name and description of an existing space when a space ID is given."
					},
					{
						"name": "Delete",
						"value": "deleteSpace",
						"action": "Delete space",
						"description": "Deletes a space. The space must be empty."
					},
					{
						"name": "Get",
						"value": "getSpace",
						"action": "Get space",
						"description": "Returns a space with its settings."
					},
					{
						"name": "Get Many Types",
						"value": "listSpaceTypes",
						"action": "List space types",
						"description": "Lists the types of spaces available in the tenant."
					},
					{
						"name": "Get Many",
						"value": "listSpaces",
						"action": "List spaces",
						"description": "Lists the spaces the connected Qlik Cloud user can see."
					}
				],
				"default": "createOrUpdateSpace"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						]
					}
				},
				"options": [
					{
						"name": "Add",
						"value": "addSpaceMember",
						"action": "Add space member",
						"description": "Assigns a user or group to a space with the given roles."
					},
					{
						"name": "Add Roles",
						"value": "addSpaceMemberRoles",
						"action": "Add space member roles",
						"description": "Adds roles to a user or group in a space and keeps the existing roles; adds the member when needed."
					},
					{
						"name": "Get",
						"value": "getSpaceMember",
						"action": "Get space member",
						"description": "Returns one assignment of a user or group to a space."
					},
					{
						"name": "Get Many",
						"value": "listSpaceMembers",
						"action": "List space members",
						"description": "Lists the users and groups assigned to a space with their roles."
					},
					{
						"name": "Remove",
						"value": "removeSpaceMember",
						"action": "Remove space member",
						"description": "Removes a user or group from a space."
					},
					{
						"name": "Remove Roles",
						"value": "removeSpaceMemberRoles",
						"action": "Remove space member roles",
						"description": "Removes roles from a user or group in a space; without remaining roles the member is removed from the space."
					},
					{
						"name": "Set",
						"value": "setSpaceMember",
						"action": "Set space member",
						"description": "Gives a user or group exactly the given roles in a space and adds the member when needed."
					},
					{
						"name": "Update",
						"value": "updateSpaceMember",
						"action": "Update space member",
						"description": "Replaces the roles of a user or group in a space."
					}
				],
				"default": "addSpaceMember"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createSpaceShare",
						"action": "Create space share",
						"description": "Shares an item of a space with a user or group."
					},
					{
						"name": "Delete",
						"value": "deleteSpaceShare",
						"action": "Delete space share",
						"description": "Removes a share from a space."
					},
					{
						"name": "Get",
						"value": "getSpaceShare",
						"action": "Get space share",
						"description": "Returns one share of a space."
					},
					{
						"name": "Get Many",
						"value": "listSpaceShares",
						"action": "List space shares",
						"description": "Lists the items shared directly from a space."
					},
					{
						"name": "Update",
						"value": "updateSpaceShare",
						"action": "Update space share",
						"description": "Changes the roles of a share."
					}
				],
				"default": "createSpaceShare"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"tenant"
						]
					}
				},
				"options": [
					{
						"name": "Get",
						"value": "getTenant",
						"action": "Get tenant",
						"description": "Returns the name, hostnames and status of the tenant."
					}
				],
				"default": "getTenant"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"user"
						]
					}
				},
				"options": [
					{
						"name": "Get Current User",
						"value": "getCurrentUser",
						"action": "Get current user",
						"description": "Returns the Qlik Cloud user ancoreMate is connected with."
					},
					{
						"name": "Get",
						"value": "getUser",
						"action": "Get user",
						"description": "Returns a user of the tenant."
					},
					{
						"name": "Get Many",
						"value": "listUsers",
						"action": "List users",
						"description": "Lists the users of the tenant. Use the filter to search, for example name co \"anna\"."
					}
				],
				"default": "getCurrentUser"
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
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"addSpaceMember"
						]
					}
				},
				"description": "The ID of the space of the assignment."
			},
			{
				"displayName": "Type",
				"name": "type",
				"type": "options",
				"options": [
					{
						"name": "user",
						"value": "user"
					},
					{
						"name": "group",
						"value": "group"
					},
					{
						"name": "bot",
						"value": "bot"
					}
				],
				"default": "user",
				"required": true,
				"description": "The type of assignment such as user or group.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"addSpaceMember"
						]
					}
				}
			},
			{
				"displayName": "Roles",
				"name": "roles",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Role"
				},
				"default": [],
				"required": true,
				"description": "The roles assigned to the assigneeId. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"addSpaceMember"
						]
					}
				}
			},
			{
				"displayName": "Assignee ID",
				"name": "assigneeId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The userId or groupId based on the type.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"addSpaceMember"
						]
					}
				}
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"addSpaceMemberRoles"
						]
					}
				},
				"description": "The space."
			},
			{
				"displayName": "User or group ID",
				"name": "assigneeId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The ID of the user or group.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"addSpaceMemberRoles"
						]
					}
				}
			},
			{
				"displayName": "Roles",
				"name": "roles",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Role"
				},
				"default": [],
				"required": true,
				"description": "The roles to add, for example consumer or producer. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"addSpaceMemberRoles"
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
							"space member"
						],
						"operation": [
							"addSpaceMemberRoles"
						]
					}
				},
				"options": [
					{
						"displayName": "Type",
						"name": "type",
						"type": "options",
						"options": [
							{
								"name": "user",
								"value": "user"
							},
							{
								"name": "group",
								"value": "group"
							}
						],
						"default": "user",
						"description": "Whether the member is a user (default) or a group."
					}
				]
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The name of the space.",
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						],
						"operation": [
							"createOrUpdateSpace"
						]
					}
				}
			},
			{
				"displayName": "Type",
				"name": "type",
				"type": "options",
				"options": [
					{
						"name": "shared",
						"value": "shared"
					},
					{
						"name": "managed",
						"value": "managed"
					},
					{
						"name": "data",
						"value": "data"
					}
				],
				"default": "shared",
				"required": true,
				"description": "The type of space such as shared, managed, and so on.",
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						],
						"operation": [
							"createOrUpdateSpace"
						]
					}
				}
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						],
						"operation": [
							"createOrUpdateSpace"
						]
					}
				},
				"description": "The space to update. Leave empty to create a new space."
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
							"space"
						],
						"operation": [
							"createOrUpdateSpace"
						]
					}
				},
				"options": [
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description of the space."
					}
				]
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"createSpaceShare"
						]
					}
				},
				"description": "The ID of the space of the share."
			},
			{
				"displayName": "Type",
				"name": "type",
				"type": "options",
				"options": [
					{
						"name": "user",
						"value": "user"
					},
					{
						"name": "group",
						"value": "group"
					},
					{
						"name": "link",
						"value": "link"
					}
				],
				"default": "user",
				"required": true,
				"description": "The type.",
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"createSpaceShare"
						]
					}
				}
			},
			{
				"displayName": "Roles",
				"name": "roles",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Role"
				},
				"default": [],
				"required": true,
				"description": "The roles assigned to the assigneeId. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"createSpaceShare"
						]
					}
				}
			},
			{
				"displayName": "Assignee ID",
				"name": "assigneeId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The userId or groupId based on the type.",
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"createSpaceShare"
						]
					}
				}
			},
			{
				"displayName": "Resource ID",
				"name": "resourceId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The resource id for the shared item.",
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"createSpaceShare"
						]
					}
				}
			},
			{
				"displayName": "Resource Type",
				"name": "resourceType",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The resource type for the shared item.",
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"createSpaceShare"
						]
					}
				}
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						],
						"operation": [
							"deleteSpace"
						]
					}
				},
				"description": "The ID of the space to delete."
			},
			{
				"displayName": "Share ID",
				"name": "shareId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"deleteSpaceShare"
						]
					}
				},
				"description": "The ID of the share to delete."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"deleteSpaceShare"
						]
					}
				},
				"description": "The ID of the space to which the share belongs."
			},
			{
				"displayName": "Group ID",
				"name": "groupId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGroupsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"group"
						],
						"operation": [
							"getGroup"
						]
					}
				},
				"description": "The group's unique identifier."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						],
						"operation": [
							"getSpace"
						]
					}
				},
				"description": "The ID of the space to retrieve."
			},
			{
				"displayName": "Assignment ID",
				"name": "assignmentId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"getSpaceMember"
						]
					}
				},
				"description": "The ID of the assignment to retrieve."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"getSpaceMember"
						]
					}
				},
				"description": "The ID of the space of the assignment."
			},
			{
				"displayName": "Share ID",
				"name": "shareId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"getSpaceShare"
						]
					}
				},
				"description": "The ID of the share to retrieve."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"getSpaceShare"
						]
					}
				},
				"description": "The ID of the space to which the share belongs."
			},
			{
				"displayName": "User ID",
				"name": "userId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListUsersId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"user"
						],
						"operation": [
							"getUser"
						]
					}
				},
				"description": "The user's unique identifier."
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
							"user"
						],
						"operation": [
							"getUser"
						]
					}
				},
				"options": [
					{
						"displayName": "Fields",
						"name": "fields",
						"type": "string",
						"default": "",
						"description": "A comma-delimited string of the requested fields per entity."
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
							"group"
						],
						"operation": [
							"listGroups"
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
							"group"
						],
						"operation": [
							"listGroups"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "The advanced filtering to use for the query."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "string",
						"default": "",
						"description": "Optional resource field name to sort on, eg."
					},
					{
						"displayName": "System Groups",
						"name": "systemGroups",
						"type": "boolean",
						"default": false,
						"description": "Whether to return system groups such as Everyone instead of regular groups."
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
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"listSpaceMembers"
						]
					}
				},
				"description": "The ID of the space of the assignment."
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
							"space member"
						],
						"operation": [
							"listSpaceMembers"
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
							"space member"
						],
						"operation": [
							"listSpaceMembers"
						]
					}
				},
				"options": [
					{
						"displayName": "Assignee ID",
						"name": "assigneeId",
						"type": "string",
						"default": "",
						"description": "Filters assignment for a specific assigneeid."
					},
					{
						"displayName": "Type",
						"name": "type",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "user",
								"value": "user"
							},
							{
								"name": "group",
								"value": "group"
							},
							{
								"name": "bot",
								"value": "bot"
							}
						],
						"default": "",
						"description": "The type of assignment."
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
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"listSpaceShares"
						]
					}
				},
				"description": "The ID of the space containing the shares."
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
							"space share"
						],
						"operation": [
							"listSpaceShares"
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
							"space share"
						],
						"operation": [
							"listSpaceShares"
						]
					}
				},
				"options": [
					{
						"displayName": "Group ID",
						"name": "groupId",
						"type": "string",
						"default": "",
						"description": "The ID of the group to which the resource is shared."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name of the shared resource."
					},
					{
						"displayName": "Resource ID",
						"name": "resourceId",
						"type": "string",
						"default": "",
						"description": "The ID of the shared resource."
					},
					{
						"displayName": "Resource Type",
						"name": "resourceType",
						"type": "string",
						"default": "",
						"description": "The type of the shared resource."
					},
					{
						"displayName": "Type",
						"name": "type",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "user",
								"value": "user"
							},
							{
								"name": "group",
								"value": "group"
							},
							{
								"name": "link",
								"value": "link"
							}
						],
						"default": "",
						"description": "The type of share."
					},
					{
						"displayName": "User ID",
						"name": "userId",
						"type": "string",
						"default": "",
						"description": "The ID of the user to which the resource is shared."
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
							"space"
						],
						"operation": [
							"listSpaceTypes"
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
							"space"
						],
						"operation": [
							"listSpaceTypes"
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
							"space"
						],
						"operation": [
							"listSpaces"
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
							"space"
						],
						"operation": [
							"listSpaces"
						]
					}
				},
				"options": [
					{
						"displayName": "Action",
						"name": "action",
						"type": "string",
						"default": "",
						"description": "Action on space."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "Space name to search and filter for."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "Space ownerId to filter by."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "string",
						"default": "",
						"description": "Field to sort by."
					},
					{
						"displayName": "Type",
						"name": "type",
						"type": "string",
						"default": "",
						"description": "Type(s) of space to filter."
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
							"user"
						],
						"operation": [
							"listUsers"
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
							"user"
						],
						"operation": [
							"listUsers"
						]
					}
				},
				"options": [
					{
						"displayName": "Fields",
						"name": "fields",
						"type": "string",
						"default": "",
						"description": "A comma-delimited string of the requested fields per entity."
					},
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "The advanced filtering to use for the query."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
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
								"name": "_id",
								"value": "_id"
							},
							{
								"name": "+_id",
								"value": "+_id"
							},
							{
								"name": "-_id",
								"value": "-_id"
							},
							{
								"name": "id",
								"value": "id"
							},
							{
								"name": "+id",
								"value": "+id"
							},
							{
								"name": "-id",
								"value": "-id"
							},
							{
								"name": "tenantId",
								"value": "tenantId"
							},
							{
								"name": "+tenantId",
								"value": "+tenantId"
							},
							{
								"name": "-tenantId",
								"value": "-tenantId"
							},
							{
								"name": "clientId",
								"value": "clientId"
							},
							{
								"name": "+clientId",
								"value": "+clientId"
							},
							{
								"name": "-clientId",
								"value": "-clientId"
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
								"name": "subject",
								"value": "subject"
							},
							{
								"name": "+subject",
								"value": "+subject"
							},
							{
								"name": "-subject",
								"value": "-subject"
							},
							{
								"name": "email",
								"value": "email"
							},
							{
								"name": "+email",
								"value": "+email"
							},
							{
								"name": "-email",
								"value": "-email"
							},
							{
								"name": "inviteExpiry",
								"value": "inviteExpiry"
							},
							{
								"name": "+inviteExpiry",
								"value": "+inviteExpiry"
							},
							{
								"name": "-inviteExpiry",
								"value": "-inviteExpiry"
							},
							{
								"name": "createdAt",
								"value": "createdAt"
							},
							{
								"name": "+createdAt",
								"value": "+createdAt"
							},
							{
								"name": "-createdAt",
								"value": "-createdAt"
							}
						],
						"default": "+name",
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
				"displayName": "Assignment ID",
				"name": "assignmentId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"removeSpaceMember"
						]
					}
				},
				"description": "The ID of the assignment to delete."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"removeSpaceMember"
						]
					}
				},
				"description": "The ID of the space of the assignment."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"removeSpaceMemberRoles"
						]
					}
				},
				"description": "The space."
			},
			{
				"displayName": "User or group ID",
				"name": "assigneeId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The ID of the user or group.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"removeSpaceMemberRoles"
						]
					}
				}
			},
			{
				"displayName": "Roles",
				"name": "roles",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Role"
				},
				"default": [],
				"required": true,
				"description": "The roles to remove, for example producer. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"removeSpaceMemberRoles"
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
							"space member"
						],
						"operation": [
							"removeSpaceMemberRoles"
						]
					}
				},
				"options": [
					{
						"displayName": "Type",
						"name": "type",
						"type": "options",
						"options": [
							{
								"name": "user",
								"value": "user"
							},
							{
								"name": "group",
								"value": "group"
							}
						],
						"default": "user",
						"description": "Whether the member is a user (default) or a group."
					}
				]
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"setSpaceMember"
						]
					}
				},
				"description": "The space."
			},
			{
				"displayName": "User or group ID",
				"name": "assigneeId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The ID of the user or group.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"setSpaceMember"
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
							"space member"
						],
						"operation": [
							"setSpaceMember"
						]
					}
				},
				"options": [
					{
						"displayName": "Type",
						"name": "type",
						"type": "options",
						"options": [
							{
								"name": "user",
								"value": "user"
							},
							{
								"name": "group",
								"value": "group"
							}
						],
						"default": "user",
						"description": "Whether the member is a user (default) or a group."
					},
					{
						"displayName": "Roles",
						"name": "roles",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Role"
						},
						"default": [],
						"description": "The roles, for example consumer, contributor, producer or facilitator. Without roles the member is removed. One value per field; an expression may also return a list."
					}
				]
			},
			{
				"displayName": "Assignment ID",
				"name": "assignmentId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"updateSpaceMember"
						]
					}
				},
				"description": "The ID of the assignment to update."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"updateSpaceMember"
						]
					}
				},
				"description": "The ID of the space of the assignment."
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
							"space member"
						],
						"operation": [
							"updateSpaceMember"
						]
					}
				},
				"options": [
					{
						"displayName": "Roles",
						"name": "roles",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Role"
						},
						"default": [],
						"description": "The roles assigned to the assigneeId. One value per field; an expression may also return a list."
					}
				]
			},
			{
				"displayName": "Share ID",
				"name": "shareId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"updateSpaceShare"
						]
					}
				},
				"description": "The ID of the share to update."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"updateSpaceShare"
						]
					}
				},
				"description": "The ID of the space to which the share belongs."
			},
			{
				"displayName": "Roles",
				"name": "roles",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Role"
				},
				"default": [],
				"required": true,
				"description": "The roles the share grants, for example consumer. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"updateSpaceShare"
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
			async loadListGroupsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/groups', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListSpacesId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/spaces', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListUsersId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/users', {"limit":1000}, {}, 'value', 'id', 'name');
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return runOperations.call(this, OPERATIONS, BASE_URL, CLIENT);
	}
}
