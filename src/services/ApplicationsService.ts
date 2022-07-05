import config from './config';
import HttpService from './HttpService';

const { uri } = config;

export default class GroupsService extends HttpService {
  private fullApiUrl = `${uri}/api`;

  findAllApplications = async (params = {}) => {
    // @todo: Add query params through the params object
    const applicationsResponse = await this.get(
      `${this.fullApiUrl}/applications?take=50`,
      {
        headers: this.authHeaders,
      }
    );

    return {
      data: await applicationsResponse.json(),
      statusCode: applicationsResponse.status,
      error: applicationsResponse.status !== 200,
      statusText: applicationsResponse.statusText,
    };
  };

  public getApplicationName = async (applicationId: string) => {
    const applicationsResponse = await this.get(
      `${this.fullApiUrl}/applications/${applicationId}/name`,
      {
        headers: this.authHeaders,
      }
    );

    return {
      data: await applicationsResponse.json(),
      statusCode: applicationsResponse.status,
      error: applicationsResponse.status !== 200,
      statusText: applicationsResponse.statusText,
    };
  };
}
