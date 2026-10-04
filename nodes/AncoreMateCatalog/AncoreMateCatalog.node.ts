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
	"changeGlossaryTermStatus": {
		"method": "PUT",
		"path": "/v1/glossaries/{glossaryId}/terms/{termId}/status",
		"read": false,
		"list": false,
		"pathParameters": [
			"glossaryId",
			"termId"
		],
		"query": [
			{
				"name": "status",
				"option": false
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createDataAsset": {
		"method": "POST",
		"path": "/v1/data-assets",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "id",
				"required": false,
				"json": false
			},
			{
				"name": "name",
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
				"name": "appId",
				"required": false,
				"json": false
			},
			{
				"name": "appType",
				"required": true,
				"json": false
			},
			{
				"name": "ownerId",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "version",
				"required": false,
				"json": false
			},
			{
				"name": "properties",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "dataFreshness",
				"required": false,
				"json": false
			},
			{
				"name": "dataStoreInfo",
				"required": false,
				"json": true
			},
			{
				"name": "technicalName",
				"required": true,
				"json": false
			},
			{
				"name": "technicalDescription",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createDataStore": {
		"method": "POST",
		"path": "/v1/data-stores",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "id",
				"required": false,
				"json": false
			},
			{
				"name": "uri",
				"required": false,
				"json": false
			},
			{
				"name": "name",
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
				"name": "type",
				"required": true,
				"json": false
			},
			{
				"name": "ownerId",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "version",
				"required": false,
				"json": false
			},
			{
				"name": "properties",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "technicalName",
				"required": true,
				"json": false
			},
			{
				"name": "technicalDescription",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createDataset": {
		"method": "POST",
		"path": "/v1/datasets",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "id",
				"required": false,
				"json": false
			},
			{
				"name": "qri",
				"required": true,
				"json": false
			},
			{
				"name": "name",
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
				"name": "type",
				"required": false,
				"json": false
			},
			{
				"name": "schema",
				"required": false,
				"json": true
			},
			{
				"name": "ownerId",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "version",
				"required": false,
				"json": false
			},
			{
				"name": "secureQri",
				"required": true,
				"json": false
			},
			{
				"name": "properties",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "operational",
				"required": false,
				"json": true
			},
			{
				"name": "dataAssetInfo",
				"required": true,
				"json": true
			},
			{
				"name": "technicalName",
				"required": true,
				"json": false
			},
			{
				"name": "appTypeOverride",
				"required": false,
				"json": false
			},
			{
				"name": "additionalSchemas",
				"required": false,
				"json": true
			},
			{
				"name": "technicalDescription",
				"required": false,
				"json": false
			},
			{
				"name": "createdByConnectionId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createGlossary": {
		"method": "POST",
		"path": "/v1/glossaries",
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
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "overview",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "termTemplate",
				"required": false,
				"json": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createGlossaryCategory": {
		"method": "POST",
		"path": "/v1/glossaries/{glossaryId}/categories",
		"read": false,
		"list": false,
		"pathParameters": [
			"glossaryId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "parentId",
				"required": false,
				"json": false
			},
			{
				"name": "stewards",
				"required": false,
				"json": false,
				"list": true
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
	"createGlossaryTerm": {
		"method": "POST",
		"path": "/v1/glossaries/{glossaryId}/terms",
		"read": false,
		"list": false,
		"pathParameters": [
			"glossaryId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": true,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "linksTo",
				"required": false,
				"json": true
			},
			{
				"name": "stewards",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "relatesTo",
				"required": false,
				"json": true
			},
			{
				"name": "categories",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "abbreviation",
				"required": false,
				"json": false
			},
			{
				"name": "relatedInformation",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteDataAsset": {
		"method": "DELETE",
		"path": "/v1/data-assets/{dataAssetId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"dataAssetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteDataset": {
		"method": "DELETE",
		"path": "/v1/datasets/{datasetId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"datasetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteGlossary": {
		"method": "DELETE",
		"path": "/v1/glossaries/{glossaryId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"glossaryId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteGlossaryCategory": {
		"method": "DELETE",
		"path": "/v1/glossaries/{glossaryId}/categories/{categoryId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"categoryId",
			"glossaryId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteGlossaryTerm": {
		"method": "DELETE",
		"path": "/v1/glossaries/{glossaryId}/terms/{termId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"glossaryId",
			"termId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"exportGlossary": {
		"method": "GET",
		"path": "/v1/glossaries/{glossaryId}/export",
		"read": true,
		"list": false,
		"pathParameters": [
			"glossaryId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getDataAsset": {
		"method": "GET",
		"path": "/v1/data-assets/{dataAssetId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"dataAssetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getDataStore": {
		"method": "GET",
		"path": "/v1/data-stores/{dataStoreId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"dataStoreId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getDataset": {
		"method": "GET",
		"path": "/v1/datasets/{datasetId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"datasetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getGlossary": {
		"method": "GET",
		"path": "/v1/glossaries/{glossaryId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"glossaryId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getGlossaryCategory": {
		"method": "GET",
		"path": "/v1/glossaries/{glossaryId}/categories/{categoryId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"categoryId",
			"glossaryId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getGlossaryTerm": {
		"method": "GET",
		"path": "/v1/glossaries/{glossaryId}/terms/{termId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"glossaryId",
			"termId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"importGlossary": {
		"method": "POST",
		"path": "/v1/glossaries/import",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [
			{
				"name": "importerAsFallbackSteward",
				"option": true
			},
			{
				"name": "lookupUserOnEmail",
				"option": true
			},
			{
				"name": "spaceId",
				"option": true
			}
		],
		"body": [
			{
				"name": "name",
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
				"name": "terms",
				"required": false,
				"json": true
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "overview",
				"required": false,
				"json": false
			},
			{
				"name": "categories",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "termTemplate",
				"required": false,
				"json": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listDataAssets": {
		"method": "GET",
		"path": "/v1/data-stores/{dataStoreId}/data-assets",
		"read": true,
		"list": true,
		"pathParameters": [
			"dataStoreId"
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
	"listDataStores": {
		"method": "GET",
		"path": "/v1/data-stores",
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
	"listDatasets": {
		"method": "GET",
		"path": "/v1/data-stores/{dataStoreId}/data-assets/{dataAssetId}/datasets",
		"read": true,
		"list": true,
		"pathParameters": [
			"dataAssetId",
			"dataStoreId"
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
	"listGlossaries": {
		"method": "GET",
		"path": "/v1/glossaries",
		"read": true,
		"list": true,
		"pathParameters": [],
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
	"listGlossaryCategories": {
		"method": "GET",
		"path": "/v1/glossaries/{glossaryId}/categories",
		"read": true,
		"list": true,
		"pathParameters": [
			"glossaryId"
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
	"listGlossaryTerms": {
		"method": "GET",
		"path": "/v1/glossaries/{glossaryId}/terms",
		"read": true,
		"list": true,
		"pathParameters": [
			"glossaryId"
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
	"updateDataAsset": {
		"method": "PUT",
		"path": "/v1/data-assets/{dataAssetId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"dataAssetId"
		],
		"query": [],
		"body": [
			{
				"name": "id",
				"required": false,
				"json": false
			},
			{
				"name": "name",
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
				"name": "appId",
				"required": false,
				"json": false
			},
			{
				"name": "appType",
				"required": true,
				"json": false
			},
			{
				"name": "ownerId",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "version",
				"required": false,
				"json": false
			},
			{
				"name": "properties",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "dataFreshness",
				"required": false,
				"json": false
			},
			{
				"name": "dataStoreInfo",
				"required": false,
				"json": true
			},
			{
				"name": "technicalName",
				"required": true,
				"json": false
			},
			{
				"name": "technicalDescription",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateDataStore": {
		"method": "PUT",
		"path": "/v1/data-stores/{dataStoreId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"dataStoreId"
		],
		"query": [],
		"body": [
			{
				"name": "id",
				"required": false,
				"json": false
			},
			{
				"name": "uri",
				"required": false,
				"json": false
			},
			{
				"name": "name",
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
				"name": "type",
				"required": true,
				"json": false
			},
			{
				"name": "ownerId",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "version",
				"required": false,
				"json": false
			},
			{
				"name": "properties",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "technicalName",
				"required": true,
				"json": false
			},
			{
				"name": "technicalDescription",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateDataset": {
		"method": "PUT",
		"path": "/v1/datasets/{datasetId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"datasetId"
		],
		"query": [],
		"body": [
			{
				"name": "id",
				"required": false,
				"json": false
			},
			{
				"name": "qri",
				"required": true,
				"json": false
			},
			{
				"name": "name",
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
				"name": "type",
				"required": false,
				"json": false
			},
			{
				"name": "schema",
				"required": false,
				"json": true
			},
			{
				"name": "ownerId",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "version",
				"required": false,
				"json": false
			},
			{
				"name": "secureQri",
				"required": true,
				"json": false
			},
			{
				"name": "properties",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "operational",
				"required": false,
				"json": true
			},
			{
				"name": "dataAssetInfo",
				"required": true,
				"json": true
			},
			{
				"name": "technicalName",
				"required": true,
				"json": false
			},
			{
				"name": "appTypeOverride",
				"required": false,
				"json": false
			},
			{
				"name": "additionalSchemas",
				"required": false,
				"json": true
			},
			{
				"name": "technicalDescription",
				"required": false,
				"json": false
			},
			{
				"name": "createdByConnectionId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateGlossary": {
		"method": "PUT",
		"path": "/v1/glossaries/{glossaryId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"glossaryId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": true,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "overview",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "termTemplate",
				"required": false,
				"json": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateGlossaryCategory": {
		"method": "PUT",
		"path": "/v1/glossaries/{glossaryId}/categories/{categoryId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"categoryId",
			"glossaryId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "parentId",
				"required": false,
				"json": false
			},
			{
				"name": "stewards",
				"required": false,
				"json": false,
				"list": true
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
	"updateGlossaryTerm": {
		"method": "PUT",
		"path": "/v1/glossaries/{glossaryId}/terms/{termId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"glossaryId",
			"termId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": true,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "linksTo",
				"required": false,
				"json": true
			},
			{
				"name": "stewards",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "relatesTo",
				"required": false,
				"json": true
			},
			{
				"name": "categories",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "abbreviation",
				"required": false,
				"json": false
			},
			{
				"name": "relatedInformation",
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

export class AncoreMateCatalog implements INodeType {
	description: INodeTypeDescription = {
		"displayName": "ancoreMate Catalog",
		"name": "ancoreMateCatalog",
		"icon": "file:ancoremate.svg",
		"group": [
			"transform"
		],
		"version": 1,
		"subtitle": "={{$parameter[\"operation\"] + \": \" + $parameter[\"resource\"]}}",
		"description": "Maintain the data catalog of Qlik Cloud®: data stores, data assets and datasets, and business glossaries with categories and terms, including import and export.",
		"defaults": {
			"name": "ancoreMate Catalog"
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
						"name": "Data asset",
						"value": "data asset"
					},
					{
						"name": "Data store",
						"value": "data store"
					},
					{
						"name": "Dataset",
						"value": "dataset"
					},
					{
						"name": "Glossary",
						"value": "glossary"
					},
					{
						"name": "Glossary category",
						"value": "glossary category"
					},
					{
						"name": "Glossary term",
						"value": "glossary term"
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
				"default": "data asset"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createDataAsset",
						"action": "Create data asset",
						"description": "Creates a data asset in a data store."
					},
					{
						"name": "Delete",
						"value": "deleteDataAsset",
						"action": "Delete data asset",
						"description": "Deletes a data asset."
					},
					{
						"name": "Get",
						"value": "getDataAsset",
						"action": "Get data asset",
						"description": "Returns a data asset."
					},
					{
						"name": "Get Many",
						"value": "listDataAssets",
						"action": "List data assets",
						"description": "Lists the data assets of a data store."
					},
					{
						"name": "Update",
						"value": "updateDataAsset",
						"action": "Update data asset",
						"description": "Replaces the attributes of a data asset."
					}
				],
				"default": "createDataAsset"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createDataStore",
						"action": "Create data store",
						"description": "Creates a data store in the catalog."
					},
					{
						"name": "Get",
						"value": "getDataStore",
						"action": "Get data store",
						"description": "Returns a data store."
					},
					{
						"name": "Get Many",
						"value": "listDataStores",
						"action": "List data stores",
						"description": "Lists the data stores of the catalog."
					},
					{
						"name": "Update",
						"value": "updateDataStore",
						"action": "Update data store",
						"description": "Replaces the attributes of a data store."
					}
				],
				"default": "createDataStore"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createDataset",
						"action": "Create dataset",
						"description": "Creates a dataset in a data asset."
					},
					{
						"name": "Delete",
						"value": "deleteDataset",
						"action": "Delete dataset",
						"description": "Deletes a dataset."
					},
					{
						"name": "Get",
						"value": "getDataset",
						"action": "Get dataset",
						"description": "Returns a dataset with its schema."
					},
					{
						"name": "Get Many",
						"value": "listDatasets",
						"action": "List datasets",
						"description": "Lists the datasets of a data asset."
					},
					{
						"name": "Update",
						"value": "updateDataset",
						"action": "Update dataset",
						"description": "Replaces the attributes of a dataset."
					}
				],
				"default": "createDataset"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createGlossary",
						"action": "Create glossary",
						"description": "Creates a business glossary."
					},
					{
						"name": "Delete",
						"value": "deleteGlossary",
						"action": "Delete glossary",
						"description": "Deletes a glossary with its categories and terms."
					},
					{
						"name": "Export",
						"value": "exportGlossary",
						"action": "Export glossary",
						"description": "Exports a glossary with its categories and terms as JSON."
					},
					{
						"name": "Get",
						"value": "getGlossary",
						"action": "Get glossary",
						"description": "Returns a business glossary."
					},
					{
						"name": "Import",
						"value": "importGlossary",
						"action": "Import glossary",
						"description": "Creates a glossary from an exported glossary."
					},
					{
						"name": "Get Many",
						"value": "listGlossaries",
						"action": "List glossaries",
						"description": "Lists the business glossaries."
					},
					{
						"name": "Update",
						"value": "updateGlossary",
						"action": "Update glossary",
						"description": "Replaces the name, description and settings of a glossary."
					}
				],
				"default": "createGlossary"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createGlossaryCategory",
						"action": "Create glossary category",
						"description": "Creates a category in a glossary."
					},
					{
						"name": "Delete",
						"value": "deleteGlossaryCategory",
						"action": "Delete glossary category",
						"description": "Deletes a category of a glossary."
					},
					{
						"name": "Get",
						"value": "getGlossaryCategory",
						"action": "Get glossary category",
						"description": "Returns a category of a glossary."
					},
					{
						"name": "Get Many",
						"value": "listGlossaryCategories",
						"action": "List glossary categories",
						"description": "Lists the categories of a glossary."
					},
					{
						"name": "Update",
						"value": "updateGlossaryCategory",
						"action": "Update glossary category",
						"description": "Replaces the name and description of a glossary category."
					}
				],
				"default": "createGlossaryCategory"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						]
					}
				},
				"options": [
					{
						"name": "Change Status",
						"value": "changeGlossaryTermStatus",
						"action": "Change glossary term status",
						"description": "Sets the status of a glossary term, for example verified."
					},
					{
						"name": "Create",
						"value": "createGlossaryTerm",
						"action": "Create glossary term",
						"description": "Creates a term in a glossary."
					},
					{
						"name": "Delete",
						"value": "deleteGlossaryTerm",
						"action": "Delete glossary term",
						"description": "Deletes a term of a glossary."
					},
					{
						"name": "Get",
						"value": "getGlossaryTerm",
						"action": "Get glossary term",
						"description": "Returns a term of a glossary."
					},
					{
						"name": "Get Many",
						"value": "listGlossaryTerms",
						"action": "List glossary terms",
						"description": "Lists the terms of a glossary."
					},
					{
						"name": "Update",
						"value": "updateGlossaryTerm",
						"action": "Update glossary term",
						"description": "Replaces the definition and attributes of a glossary term."
					}
				],
				"default": "changeGlossaryTermStatus"
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
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"changeGlossaryTermStatus"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Term ID",
				"name": "termId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"changeGlossaryTermStatus"
						]
					}
				},
				"description": "The term id."
			},
			{
				"displayName": "Status",
				"name": "status",
				"type": "options",
				"options": [
					{
						"name": "draft",
						"value": "draft"
					},
					{
						"name": "verified",
						"value": "verified"
					},
					{
						"name": "deprecated",
						"value": "deprecated"
					}
				],
				"default": "draft",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"changeGlossaryTermStatus"
						]
					}
				},
				"description": "The status to update to."
			},
			{
				"displayName": "App Type",
				"name": "appType",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The app type.",
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"createDataAsset"
						]
					}
				}
			},
			{
				"displayName": "Technical Name",
				"name": "technicalName",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The technical name.",
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"createDataAsset"
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
							"data asset"
						],
						"operation": [
							"createDataAsset"
						]
					}
				},
				"options": [
					{
						"displayName": "ID",
						"name": "id",
						"type": "string",
						"default": "",
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
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
					},
					{
						"displayName": "App ID",
						"name": "appId",
						"type": "string",
						"default": "",
						"description": "The app id."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "The value is automatically set by the application."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Version",
						"name": "version",
						"type": "number",
						"default": 0,
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Properties",
						"name": "properties",
						"type": "json",
						"default": "{}",
						"description": "A Map of name-value pairs."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Data Freshness",
						"name": "dataFreshness",
						"type": "string",
						"default": "",
						"description": "The date-time when the source data was last changed."
					},
					{
						"displayName": "Data Store Info",
						"name": "dataStoreInfo",
						"type": "json",
						"default": "{}",
						"description": "The data store info."
					},
					{
						"displayName": "Technical Description",
						"name": "technicalDescription",
						"type": "string",
						"default": "",
						"description": "The technical description."
					}
				]
			},
			{
				"displayName": "Type",
				"name": "type",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The type.",
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"createDataStore"
						]
					}
				}
			},
			{
				"displayName": "Technical Name",
				"name": "technicalName",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The technical name.",
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"createDataStore"
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
							"data store"
						],
						"operation": [
							"createDataStore"
						]
					}
				},
				"options": [
					{
						"displayName": "ID",
						"name": "id",
						"type": "string",
						"default": "",
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "URI",
						"name": "uri",
						"type": "string",
						"default": "",
						"description": "The uri."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
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
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "The value is automatically set by the application."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Version",
						"name": "version",
						"type": "number",
						"default": 0,
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Properties",
						"name": "properties",
						"type": "json",
						"default": "{}",
						"description": "A Map of name-value pairs."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Technical Description",
						"name": "technicalDescription",
						"type": "string",
						"default": "",
						"description": "The technical description."
					}
				]
			},
			{
				"displayName": "QRI",
				"name": "qri",
				"type": "string",
				"default": "",
				"required": true,
				"description": "NOTE: this will be deprecated after migration to secureQri.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"createDataset"
						]
					}
				}
			},
			{
				"displayName": "Secure QRI",
				"name": "secureQri",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The secure qri.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"createDataset"
						]
					}
				}
			},
			{
				"displayName": "Data Asset Info",
				"name": "dataAssetInfo",
				"type": "json",
				"default": "{}",
				"required": true,
				"description": "The data asset info.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"createDataset"
						]
					}
				}
			},
			{
				"displayName": "Technical Name",
				"name": "technicalName",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The technical name.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"createDataset"
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
							"dataset"
						],
						"operation": [
							"createDataset"
						]
					}
				},
				"options": [
					{
						"displayName": "ID",
						"name": "id",
						"type": "string",
						"default": "",
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
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
					},
					{
						"displayName": "Type",
						"name": "type",
						"type": "string",
						"default": "",
						"description": "The type."
					},
					{
						"displayName": "Schema",
						"name": "schema",
						"type": "json",
						"default": "{}",
						"description": "Optional field to specify additional schemas for files where multiple tables or sheets are available."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "The value is automatically set by the application."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Version",
						"name": "version",
						"type": "number",
						"default": 0,
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Properties",
						"name": "properties",
						"type": "json",
						"default": "{}",
						"description": "A Map of name-value pairs."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Operational",
						"name": "operational",
						"type": "json",
						"default": "{}",
						"description": "The operational."
					},
					{
						"displayName": "App Type Override",
						"name": "appTypeOverride",
						"type": "string",
						"default": "",
						"description": "Optional override of DataAsset appType."
					},
					{
						"displayName": "Additional Schemas",
						"name": "additionalSchemas",
						"type": "json",
						"default": "[]",
						"description": "Optional field to specify additional schemas for files where multiple tables or sheets are available."
					},
					{
						"displayName": "Technical Description",
						"name": "technicalDescription",
						"type": "string",
						"default": "",
						"description": "The technical description."
					},
					{
						"displayName": "Created By Connection ID",
						"name": "createdByConnectionId",
						"type": "string",
						"default": "",
						"description": "The connectionId that created the Dataset."
					}
				]
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Name of the glossary.",
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"createGlossary"
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
							"glossary"
						],
						"operation": [
							"createGlossary"
						]
					}
				},
				"options": [
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "List of tags for glossary. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "Unique unique identifier of the space to contain the glossary."
					},
					{
						"displayName": "Overview",
						"name": "overview",
						"type": "string",
						"default": "",
						"description": "Overview of the glossary content."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "Description of the glossary."
					},
					{
						"displayName": "Term Template",
						"name": "termTemplate",
						"type": "json",
						"default": "{}",
						"description": "The term template."
					}
				]
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"createGlossaryCategory"
						]
					}
				},
				"description": "The glossary id."
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
							"glossary category"
						],
						"operation": [
							"createGlossaryCategory"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name of the category."
					},
					{
						"displayName": "Parent ID",
						"name": "parentId",
						"type": "string",
						"default": "",
						"description": "The parent id."
					},
					{
						"displayName": "Stewards",
						"name": "stewards",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Steward"
						},
						"default": [],
						"description": "This list contains the UIDs of the stewards of the category. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					}
				]
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"createGlossaryTerm"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The name.",
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"createGlossaryTerm"
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
							"glossary term"
						],
						"operation": [
							"createGlossaryTerm"
						]
					}
				},
				"options": [
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
					},
					{
						"displayName": "Links To",
						"name": "linksTo",
						"type": "json",
						"default": "[]",
						"description": "The links to."
					},
					{
						"displayName": "Stewards",
						"name": "stewards",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Steward"
						},
						"default": [],
						"description": "This list contain the UIDs for the term's stewards. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Relates To",
						"name": "relatesTo",
						"type": "json",
						"default": "[]",
						"description": "The relates to."
					},
					{
						"displayName": "Categories",
						"name": "categories",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Category"
						},
						"default": [],
						"description": "Category Ids that the term belongs to. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Abbreviation",
						"name": "abbreviation",
						"type": "string",
						"default": "",
						"description": "The abbreviation."
					},
					{
						"displayName": "Related Information",
						"name": "relatedInformation",
						"type": "string",
						"default": "",
						"description": "Related information for the term."
					}
				]
			},
			{
				"displayName": "Data asset ID",
				"name": "dataAssetId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"deleteDataAsset"
						]
					}
				},
				"description": "The ID of the data asset."
			},
			{
				"displayName": "Dataset ID",
				"name": "datasetId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"deleteDataset"
						]
					}
				},
				"description": "The ID of the dataset."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"deleteGlossary"
						]
					}
				},
				"description": "The id of the glossary to delete."
			},
			{
				"displayName": "Category ID",
				"name": "categoryId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"deleteGlossaryCategory"
						]
					}
				},
				"description": "The id for the category to delete."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"deleteGlossaryCategory"
						]
					}
				},
				"description": "The id of the glossary."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"deleteGlossaryTerm"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Term ID",
				"name": "termId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"deleteGlossaryTerm"
						]
					}
				},
				"description": "The term id."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"exportGlossary"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Data Asset ID",
				"name": "dataAssetId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"getDataAsset"
						]
					}
				},
				"description": "The data asset id."
			},
			{
				"displayName": "Data Store ID",
				"name": "dataStoreId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataStoresId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"getDataStore"
						]
					}
				},
				"description": "The data store id."
			},
			{
				"displayName": "Dataset ID",
				"name": "datasetId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"getDataset"
						]
					}
				},
				"description": "The dataset id."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"getGlossary"
						]
					}
				},
				"description": "The id of the glossary to retrieve."
			},
			{
				"displayName": "Category ID",
				"name": "categoryId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"getGlossaryCategory"
						]
					}
				},
				"description": "The category id."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"getGlossaryCategory"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"getGlossaryTerm"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Term ID",
				"name": "termId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"getGlossaryTerm"
						]
					}
				},
				"description": "The term id."
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
							"glossary"
						],
						"operation": [
							"importGlossary"
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
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "The tags. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Terms",
						"name": "terms",
						"type": "json",
						"default": "[]",
						"description": "The terms."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Overview",
						"name": "overview",
						"type": "string",
						"default": "",
						"description": "Overview of the glossary."
					},
					{
						"displayName": "Categories",
						"name": "categories",
						"type": "json",
						"default": "[]",
						"description": "The categories."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Term Template",
						"name": "termTemplate",
						"type": "json",
						"default": "{}",
						"description": "The term template."
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
							"glossary"
						],
						"operation": [
							"importGlossary"
						]
					}
				},
				"options": [
					{
						"displayName": "Importer As Fallback Steward",
						"name": "importerAsFallbackSteward",
						"type": "boolean",
						"default": false,
						"description": "Whether to add the importing user as steward to categories and terms that have no steward or whose steward is not found."
					},
					{
						"displayName": "Lookup User On Email",
						"name": "lookupUserOnEmail",
						"type": "boolean",
						"default": false,
						"description": "Whether to look up the stewards by the e-mail addresses in the steward fields."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The spaceId (leave blank or omit for personal)."
					}
				]
			},
			{
				"displayName": "Data Store ID",
				"name": "dataStoreId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataStoresId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"listDataAssets"
						]
					}
				},
				"description": "Comma-separated data store IDs or * to include all data stores."
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
							"data asset"
						],
						"operation": [
							"listDataAssets"
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
							"data asset"
						],
						"operation": [
							"listDataAssets"
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
							"data store"
						],
						"operation": [
							"listDataStores"
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
							"data store"
						],
						"operation": [
							"listDataStores"
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
				"displayName": "Data Asset ID",
				"name": "dataAssetId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"listDatasets"
						]
					}
				},
				"description": "Comma-separated data asset IDs or * to include all data assets."
			},
			{
				"displayName": "Data Store ID",
				"name": "dataStoreId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataStoresId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"listDatasets"
						]
					}
				},
				"description": "Comma-separated data store IDs or * to include all data stores."
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
							"dataset"
						],
						"operation": [
							"listDatasets"
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
							"dataset"
						],
						"operation": [
							"listDatasets"
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
							"glossary"
						],
						"operation": [
							"listGlossaries"
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
							"glossary"
						],
						"operation": [
							"listGlossaries"
						]
					}
				},
				"options": [
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
								"name": "description",
								"value": "description"
							},
							{
								"name": "+description",
								"value": "+description"
							},
							{
								"name": "-description",
								"value": "-description"
							}
						],
						"default": "",
						"description": "Optional resource field name to sort on, eg."
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
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"listGlossaryCategories"
						]
					}
				},
				"description": "The glossary id."
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
							"glossary category"
						],
						"operation": [
							"listGlossaryCategories"
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
							"glossary category"
						],
						"operation": [
							"listGlossaryCategories"
						]
					}
				},
				"options": [
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
								"name": "description",
								"value": "description"
							},
							{
								"name": "+description",
								"value": "+description"
							},
							{
								"name": "-description",
								"value": "-description"
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
								"name": "update",
								"value": "update"
							},
							{
								"name": "+update",
								"value": "+update"
							},
							{
								"name": "-update",
								"value": "-update"
							}
						],
						"default": "",
						"description": "Optional resource field name to sort on, eg."
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
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"listGlossaryTerms"
						]
					}
				},
				"description": "The glossary id."
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
							"glossary term"
						],
						"operation": [
							"listGlossaryTerms"
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
							"glossary term"
						],
						"operation": [
							"listGlossaryTerms"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "Optional SCIM filter to be used to filter terms Usable fields are - id - name - relatedInformation - description - abbreviation - tags - stewards - status - categories."
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
								"name": "abbreviation",
								"value": "abbreviation"
							},
							{
								"name": "+abbreviation",
								"value": "+abbreviation"
							},
							{
								"name": "-abbreviation",
								"value": "-abbreviation"
							},
							{
								"name": "description",
								"value": "description"
							},
							{
								"name": "+description",
								"value": "+description"
							},
							{
								"name": "-description",
								"value": "-description"
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
								"name": "updated",
								"value": "updated"
							},
							{
								"name": "+updated",
								"value": "+updated"
							},
							{
								"name": "-updated",
								"value": "-updated"
							}
						],
						"default": "",
						"description": "Optional resource field name to sort on, eg."
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
				"displayName": "Data Asset ID",
				"name": "dataAssetId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"updateDataAsset"
						]
					}
				},
				"description": "The data asset id."
			},
			{
				"displayName": "App Type",
				"name": "appType",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The app type.",
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"updateDataAsset"
						]
					}
				}
			},
			{
				"displayName": "Technical Name",
				"name": "technicalName",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The technical name.",
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"updateDataAsset"
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
							"data asset"
						],
						"operation": [
							"updateDataAsset"
						]
					}
				},
				"options": [
					{
						"displayName": "ID",
						"name": "id",
						"type": "string",
						"default": "",
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
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
					},
					{
						"displayName": "App ID",
						"name": "appId",
						"type": "string",
						"default": "",
						"description": "The app id."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "The value is automatically set by the application."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Version",
						"name": "version",
						"type": "number",
						"default": 0,
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Properties",
						"name": "properties",
						"type": "json",
						"default": "{}",
						"description": "A Map of name-value pairs."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Data Freshness",
						"name": "dataFreshness",
						"type": "string",
						"default": "",
						"description": "The date-time when the source data was last changed."
					},
					{
						"displayName": "Data Store Info",
						"name": "dataStoreInfo",
						"type": "json",
						"default": "{}",
						"description": "The data store info."
					},
					{
						"displayName": "Technical Description",
						"name": "technicalDescription",
						"type": "string",
						"default": "",
						"description": "The technical description."
					}
				]
			},
			{
				"displayName": "Data Store ID",
				"name": "dataStoreId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataStoresId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"updateDataStore"
						]
					}
				},
				"description": "The data store id."
			},
			{
				"displayName": "Type",
				"name": "type",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The type.",
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"updateDataStore"
						]
					}
				}
			},
			{
				"displayName": "Technical Name",
				"name": "technicalName",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The technical name.",
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"updateDataStore"
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
							"data store"
						],
						"operation": [
							"updateDataStore"
						]
					}
				},
				"options": [
					{
						"displayName": "ID",
						"name": "id",
						"type": "string",
						"default": "",
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "URI",
						"name": "uri",
						"type": "string",
						"default": "",
						"description": "The uri."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
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
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "The value is automatically set by the application."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Version",
						"name": "version",
						"type": "number",
						"default": 0,
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Properties",
						"name": "properties",
						"type": "json",
						"default": "{}",
						"description": "A Map of name-value pairs."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Technical Description",
						"name": "technicalDescription",
						"type": "string",
						"default": "",
						"description": "The technical description."
					}
				]
			},
			{
				"displayName": "Dataset ID",
				"name": "datasetId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"updateDataset"
						]
					}
				},
				"description": "The dataset id."
			},
			{
				"displayName": "QRI",
				"name": "qri",
				"type": "string",
				"default": "",
				"required": true,
				"description": "NOTE: this will be deprecated after migration to secureQri.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"updateDataset"
						]
					}
				}
			},
			{
				"displayName": "Secure QRI",
				"name": "secureQri",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The secure qri.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"updateDataset"
						]
					}
				}
			},
			{
				"displayName": "Data Asset Info",
				"name": "dataAssetInfo",
				"type": "json",
				"default": "{}",
				"required": true,
				"description": "The data asset info.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"updateDataset"
						]
					}
				}
			},
			{
				"displayName": "Technical Name",
				"name": "technicalName",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The technical name.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"updateDataset"
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
							"dataset"
						],
						"operation": [
							"updateDataset"
						]
					}
				},
				"options": [
					{
						"displayName": "ID",
						"name": "id",
						"type": "string",
						"default": "",
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
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
					},
					{
						"displayName": "Type",
						"name": "type",
						"type": "string",
						"default": "",
						"description": "The type."
					},
					{
						"displayName": "Schema",
						"name": "schema",
						"type": "json",
						"default": "{}",
						"description": "Optional field to specify additional schemas for files where multiple tables or sheets are available."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "The value is automatically set by the application."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Version",
						"name": "version",
						"type": "number",
						"default": 0,
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Properties",
						"name": "properties",
						"type": "json",
						"default": "{}",
						"description": "A Map of name-value pairs."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Operational",
						"name": "operational",
						"type": "json",
						"default": "{}",
						"description": "The operational."
					},
					{
						"displayName": "App Type Override",
						"name": "appTypeOverride",
						"type": "string",
						"default": "",
						"description": "Optional override of DataAsset appType."
					},
					{
						"displayName": "Additional Schemas",
						"name": "additionalSchemas",
						"type": "json",
						"default": "[]",
						"description": "Optional field to specify additional schemas for files where multiple tables or sheets are available."
					},
					{
						"displayName": "Technical Description",
						"name": "technicalDescription",
						"type": "string",
						"default": "",
						"description": "The technical description."
					},
					{
						"displayName": "Created By Connection ID",
						"name": "createdByConnectionId",
						"type": "string",
						"default": "",
						"description": "The connectionId that created the Dataset."
					}
				]
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"updateGlossary"
						]
					}
				},
				"description": "The id of the glossary to update."
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Name of the glossary.",
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"updateGlossary"
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
							"glossary"
						],
						"operation": [
							"updateGlossary"
						]
					}
				},
				"options": [
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "List of tags for glossary. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "Unique unique identifier of the space to contain the glossary."
					},
					{
						"displayName": "Overview",
						"name": "overview",
						"type": "string",
						"default": "",
						"description": "Overview of the glossary content."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "Description of the glossary."
					},
					{
						"displayName": "Term Template",
						"name": "termTemplate",
						"type": "json",
						"default": "{}",
						"description": "The term template."
					}
				]
			},
			{
				"displayName": "Category ID",
				"name": "categoryId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"updateGlossaryCategory"
						]
					}
				},
				"description": "The category id."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"updateGlossaryCategory"
						]
					}
				},
				"description": "The glossary id."
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
							"glossary category"
						],
						"operation": [
							"updateGlossaryCategory"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name of the category."
					},
					{
						"displayName": "Parent ID",
						"name": "parentId",
						"type": "string",
						"default": "",
						"description": "The parent id."
					},
					{
						"displayName": "Stewards",
						"name": "stewards",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Steward"
						},
						"default": [],
						"description": "This list contains the UIDs of the stewards of the category. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					}
				]
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"updateGlossaryTerm"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Term ID",
				"name": "termId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"updateGlossaryTerm"
						]
					}
				},
				"description": "The term id."
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The name.",
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"updateGlossaryTerm"
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
							"glossary term"
						],
						"operation": [
							"updateGlossaryTerm"
						]
					}
				},
				"options": [
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
					},
					{
						"displayName": "Links To",
						"name": "linksTo",
						"type": "json",
						"default": "[]",
						"description": "The links to."
					},
					{
						"displayName": "Stewards",
						"name": "stewards",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Steward"
						},
						"default": [],
						"description": "This list contain the UIDs for the term's stewards. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Relates To",
						"name": "relatesTo",
						"type": "json",
						"default": "[]",
						"description": "The relates to."
					},
					{
						"displayName": "Categories",
						"name": "categories",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Category"
						},
						"default": [],
						"description": "Category Ids that the term belongs to. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Abbreviation",
						"name": "abbreviation",
						"type": "string",
						"default": "",
						"description": "The abbreviation."
					},
					{
						"displayName": "Related Information",
						"name": "relatedInformation",
						"type": "string",
						"default": "",
						"description": "Related information for the term."
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
			async loadListDataStoresId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/data-stores', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListGlossariesId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/glossaries', {"limit":1000}, {}, 'value', 'id', 'name');
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return runOperations.call(this, OPERATIONS, BASE_URL, CLIENT);
	}
}
