const envConfig = process.env;

const serviceConfig = {
  uri: envConfig.NEXT_PUBLIC_BFF_URI || '',
  authServiceConfig: {
    uri: envConfig.NEXT_PUBLIC_SERVICE_AUTH_URI,
    bffUrl: envConfig.NEXT_PUBLIC_SERVICE_AUTH_BFF_URI || '',
  },
  dropdownServiceConfig: {
    uri: envConfig.NEXT_PUBLIC_SERVICE_DROPDOWN_URI || 'http://localhost:8080',
  },
  applicationsServiceConfig: {
    uri:
      envConfig.NEXT_PUBLIC_SERVICE_APPLICATIONS_URI || 'http://localhost:8080',
  },
  socialServiceConfig: {
    uri: envConfig.NEXT_PUBLIC_SOCIAL_URI || 'http://localhost:8080',
  },
  contactsServiceConfig: {
    uri: envConfig.NEXT_PUBLIC_SERVICE_CONTACTS_URL || 'http://localhost:8080',
  },
};

export const oidcConfig = {
  authority: process.env.NEXT_PUBLIC_OID_AUTH_URL,
  clientId: process.env.NEXT_PUBLIC_OID_IDENTITY_CLIENT_ID,
  redirectUri: process.env.NEXT_PUBLIC_OID_REDIRECT_URL,
  responseType: 'id_token token',
  automaticSilentRenew: false,
  loadUserInfo: false,
  silentRedirectUri: process.env.NEXT_PUBLIC_OID_SILENT_REDIRECT_URL,
  scope: 'openid auth.api', // TODO: change auth.api to whatever api scope name is there
  postLogoutRedirectUri: process.env.NEXT_PUBLIC_LOGOFF_REDIRECT_URL,
  grantType: 'password',
  webAuthResponseType: 'id_token token',
};

export default serviceConfig;
