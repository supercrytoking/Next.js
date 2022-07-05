import config from './config';
import HttpService from './HttpService';
import { Credentials, TPasswordReset } from '../types/auth';

const { authServiceConfig } = config;
const { uri, bffUrl } = authServiceConfig;

export default class AuthService extends HttpService {
  public fullApiUrl = bffUrl
    ? `${bffUrl}/api`
    : `${typeof window !== 'undefined' ? window.location.origin : ''}/api`;
  login = async (credentials: Credentials) => {
    try {
      const authResponse = await this.post(
        `${this.fullApiUrl}/login`,
        credentials
      );

      return {
        data: await authResponse.json(),
        statusCode: authResponse.status,
        error: authResponse.status !== 200,
        statusText: authResponse.statusText,
      };
    } catch (err) {
      return {
        data: {},
        statusCode: '',
        error: true,
        statusText: 'Request failed: Network error',
      };
    }
  };

  logout = async () => {
    const logoutResponse = await this.get(`${this.fullApiUrl}/logout`);

    return {
      data: {},
      statusCode: logoutResponse.status,
      error: logoutResponse.status !== 200,
      statusText: logoutResponse.statusText,
    };
  };

  me = async () => {
    const meResponse = await this.get(`${uri}/me`, {
      headers: this.authHeaders,
    });

    return {
      data: await meResponse.json(),
      statusCode: meResponse.status,
      error: meResponse.status !== 200,
      statusText: meResponse.statusText,
    };
  };

  sendVerification = async (payload: TPasswordReset) => {
    const resetResponse = await this.post(
      `${uri}/account/sendVerification`,
      payload
    );

    return {
      data: resetResponse.status === 200 ? null : await resetResponse.json(),
      statusCode: resetResponse.status,
      error: resetResponse.status !== 200,
      statusText: resetResponse.statusText,
    };
  };

  verifyCode = async (payload: TPasswordReset) => {
    const verifyResponse = await this.post(
      `${uri}/account/verifyCode`,
      payload
    );

    return {
      data: verifyResponse.status === 200 ? null : await verifyResponse.json(),
      statusCode: verifyResponse.status,
      error: verifyResponse.status !== 200,
      statusText: verifyResponse.statusText,
    };
  };

  changePassword = async (payload: TPasswordReset) => {
    const verifyResponse = await this.post(
      `${uri}/account/changePassword`,
      payload
    );

    return {
      data: verifyResponse.status === 200 ? null : await verifyResponse.json(),
      statusCode: verifyResponse.status,
      error: verifyResponse.status !== 200,
      statusText: verifyResponse.statusText,
    };
  };
}
