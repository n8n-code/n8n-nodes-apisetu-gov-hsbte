import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovHsbteApi implements ICredentialType {
        name = 'N8nDevApisetuGovHsbteApi';

        displayName = 'Apisetu Gov Hsbte API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovHsbte/apisetu-gov-hsbte.svg', dark: 'file:../nodes/ApisetuGovHsbte/apisetu-gov-hsbte.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/hsbte/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/hsbte/v3',
                        description: 'The base URL of your Apisetu Gov Hsbte API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
