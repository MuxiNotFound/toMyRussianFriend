// request.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// custom the request and response intercept hooks
interface InterceptorHooks {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (response: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: any) => any;
}

// extend the default AxiosRequestConfig interface, attach the intercept attribute
interface CustomRequestConfig extends AxiosRequestConfig {
  interceptorHooks?: InterceptorHooks;
}

// response data type
interface ResData<T> {
  data: T;
  returnCode: string;
  success: boolean;
}

class RequestInstance {
  // axios request config
  config: CustomRequestConfig;
  // axios instance
  instance: AxiosInstance;
  // interceptor declare
  setupInterceptor(): void {
    // request intercept for every instance
    this.instance.interceptors.request.use(
      this.config.interceptorHooks?.requestInterceptor,
      this.config.interceptorHooks?.requestInterceptorCatch
    );
    // response intercept for every instance
    this.instance.interceptors.response.use(
      this.config.interceptorHooks?.responseInterceptor,
      this.config.interceptorHooks?.responseInterceptorCatch
    );

    // common request intercept
    this.instance.interceptors.request.use((config) => {
      return config;
    });

    // common response intercept
    this.instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      }
    );
  }

  constructor(options: CustomRequestConfig) {
    this.config = options;
    this.instance = axios.create(options);
    this.setupInterceptor();
  }

  request<T = any>(config: CustomRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, ResData<T>>(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T = any>(config: CustomRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' });
  }

  post<T = any>(config: CustomRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' });
  }

  delete<T = any>(config: CustomRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' });
  }

  patch<T = any>(config: CustomRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' });
  }
}

export default RequestInstance;
