const HTTP_METHOD_POST = 'POST';
const HTTP_METHOD_GET = 'GET';
const HTTP_METHOD_PUT = 'PUT';
const HTTP_METHOD_DELETE = 'DELETE';
const HTTP_METHOD_PATCH = 'PATCH';

export interface HttpServiceRequestOptions {
  headers?: Record<string, string>;
  isFormData?: boolean;
}

class HttpService {
  get authHeaders() {
    const token = localStorage.getItem('accessToken');
    return token ? { Authorization: `Bearer ${token}` } : undefined;
  }

  async get(url: string, options?: HttpServiceRequestOptions) {
    let headers: Record<string, string> = {};

    if (options) {
      headers = options.headers || {};
    }

    // @todo: Handle query params through new URL and new URLSearchParams

    return fetch(url, {
      method: HTTP_METHOD_GET,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
  }

  async post(url: string, postData: any, options?: HttpServiceRequestOptions) {
    let headers: Record<string, string> = {};

    if (options) {
      headers = options.headers || {};
    }

    return fetch(url, {
      method: HTTP_METHOD_POST,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: options?.isFormData ? postData : JSON.stringify(postData),
    });
  }

  async put(url: string, putData: any, options?: HttpServiceRequestOptions) {
    let headers: Record<string, string> = {};

    if (options) {
      headers = options.headers || {};
    }

    return fetch(url, {
      method: HTTP_METHOD_PUT,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(putData),
    });
  }

  async patch(url: string, putData: any, options?: HttpServiceRequestOptions) {
    let headers: Record<string, string> = {};

    if (options) {
      headers = options.headers || {};
    }
    return fetch(url, {
      method: HTTP_METHOD_PATCH,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(putData),
    });
  }

  async delete(url: string, options?: HttpServiceRequestOptions) {
    let headers: Record<string, string> = {};

    if (options) {
      headers = options.headers || {};
    }

    return fetch(url, {
      method: HTTP_METHOD_DELETE,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
  }
}

export default HttpService;
