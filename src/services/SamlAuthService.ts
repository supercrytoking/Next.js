import config from './config';
import HttpService from './HttpService';
import { SamlLoginDto } from '../types/auth';

const { authServiceConfig } = config;
const { bffUrl } = authServiceConfig;
export default class GroupsService extends HttpService {
  private fullApiUrl = `${bffUrl}/api/saml`;

  login = async (data: SamlLoginDto) => {
    const response = await this.post(this.fullApiUrl, data, {
      headers: { ...this.authHeaders },
    });

    return {
      data: await response.json(),
      statusCode: response.status,
      error: response.status !== 200,
      statusText: response.statusText,
    };
  };
}
