import HttpService from './HttpService';
import queryString from 'query-string';

export default class DirectoryService extends HttpService {
  // Testing
  fetchAllEmployeesForUserDirectory = async (userId: string) => {
    const allEmployeesResponse = await this.get(
      `https://contacts-development.lyonl.com/1/contacts?${queryString.stringify(
        {
          take: 20,
        }
      )}`,
      {
        headers: this.authHeaders,
      }
    );

    return {
      data: await allEmployeesResponse.json(),
      statusCode: allEmployeesResponse.status,
      error: allEmployeesResponse.status !== 200,
      statusText: allEmployeesResponse.statusText,
    };
  };
}
