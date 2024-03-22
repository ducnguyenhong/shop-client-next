interface ApiRequest {
  url: string;
  baseUrl?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  params?: any;
}

const API = {
  request: (config: ApiRequest) => {
    const { baseUrl, method = 'GET', url, params } = config;

    const requestUrl = `${baseUrl}${url}`;

    return fetch(requestUrl);
  }
};

export default API;
