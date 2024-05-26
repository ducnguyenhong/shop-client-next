import axios, { AxiosRequestConfig } from 'axios';
import { LS_JWT_TOKEN } from './const';

interface RequestConfig {
  url: string;
  baseUrl?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  params?: any;
  headers?: Record<string, unknown>;
}

const API = {
  request: (config: RequestConfig) => {
    const { baseUrl = process.env.NEXT_PUBLIC_API, method = 'GET', url, params, headers } = config;
    const token = localStorage.getItem(LS_JWT_TOKEN);
    const requestConfig: AxiosRequestConfig = {
      url: `${baseUrl}${url}`,
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : undefined,
        ...headers
      },
      data: ['POST', 'PATCH', 'PUT'].includes(method) ? params : undefined,
      params: method === 'GET' ? params : undefined,
      timeout: 20000,
      timeoutErrorMessage: 'Hệ thống không phản hồi. Vui lòng thử lại sau!'
    };

    return axios(requestConfig)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        const { status } = e?.response || {};
        if (status === 401) {
          localStorage.removeItem(LS_JWT_TOKEN);
          window.location.reload();
          return;
        }
        return Promise.reject({ message: e?.response?.data?.description });
      });
  }
};

export default API;
