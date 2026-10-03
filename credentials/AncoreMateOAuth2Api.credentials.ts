// Generated from catalog/ by tools/AncoreMate.CatalogGenerator. Do not edit.
import type { ICredentialTestRequest, ICredentialType, Icon, INodeProperties } from 'n8n-workflow';

/**
 * Signs in with the ancoreCloud account and connects Qlik Cloud in the same window. ancoreMate is a public
 * client: no client ID or secret has to be entered.
 */
export class AncoreMateOAuth2Api implements ICredentialType {
	name = 'ancoreMateOAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'ancoreMate OAuth2 API';

	icon: Icon = 'file:ancoremate.svg';

	documentationUrl = 'https://docs.ancoresoft.com/';

	properties: INodeProperties[] = [
		{
			"displayName": "Grant Type",
			"name": "grantType",
			"type": "hidden",
			"default": "pkce"
		},
		{
			"displayName": "Authorization URL",
			"name": "authUrl",
			"type": "hidden",
			"default": "https://ancorecloud.com/ancoremate/oauth/authorize"
		},
		{
			"displayName": "Access Token URL",
			"name": "accessTokenUrl",
			"type": "hidden",
			"default": "https://ancorecloud.com/ancoremate/oauth/token"
		},
		{
			"displayName": "Client ID",
			"name": "clientId",
			"type": "hidden",
			"default": "ancoremate-n8n"
		},
		{
			"displayName": "Client Secret",
			"name": "clientSecret",
			"type": "hidden",
			"default": "",
			"typeOptions": {
				"password": true
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "hidden",
			"default": "api://cad3a96e-727c-4bea-9854-85a0b8d24a8b/access_as_user offline_access openid"
		},
		{
			"displayName": "Auth URI Query Parameters",
			"name": "authQueryParameters",
			"type": "hidden",
			"default": ""
		},
		{
			"displayName": "Authentication",
			"name": "authentication",
			"type": "hidden",
			"default": "body"
		}
	];

	test: ICredentialTestRequest = {
		"request": {
			"baseURL": "https://ancorecloud.com/ancoremate",
			"url": "/v1/connection",
			"headers": {
				"X-AncoreMate-Client": "n8n/1.17.1"
			}
		}
	};
}
