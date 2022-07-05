import config from './config';
import HttpService from './HttpService';

const { dropdownServiceConfig } = config;
const { uri } = dropdownServiceConfig;

export default class DropdownService extends HttpService {
  private fullApiUrl = `${uri}/suggestions`;

  findAll = async (params = {}) => {
    // @todo: Add query params through the params object
    const groupsResponse = await this.get(`${this.fullApiUrl}?take=50`, {
      headers: this.authHeaders,
    });

    return {
      data: await groupsResponse.json(),
      statusCode: groupsResponse.status,
      error: groupsResponse.status !== 200,
      statusText: groupsResponse.statusText,
    };
  };
}
