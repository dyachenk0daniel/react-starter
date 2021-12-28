import axios, {AxiosError} from 'axios';
import { IApiConfig, TRequestMethod } from './types';
import Storage from 'utils/storage';

enum Methods {
  Get = 'get',
  Post = 'post',
  Put = 'put',
  Delete = 'delete',
}

/**
 * Абстрактный класс только для наследования
 *
 * @abstract
 * @class
 * @example
 * ```ts
 * class PostsApi extends BaseApi
 * ```
 */
export abstract class BaseApi {
  private tokenStorageKey = 'token';
  private baseURL = 'http://localhost';
  private logoutFn: (() => void) | null = null;
  private errorHandlingFn: ((error: AxiosError) => void) | null = null;

  protected constructor(apiConfig?: IApiConfig) {
    if (apiConfig) {
      Object.assign(this, apiConfig);
    }
  }

  protected get: TRequestMethod = config => {
    return this.send({ method: Methods.Get, ...config });
  };

  protected put: TRequestMethod = config => {
    return this.send({ method: Methods.Put, ...config });
  };

  protected delete: TRequestMethod = config => {
    return this.send({ method: Methods.Delete, ...config });
  };

  protected post: TRequestMethod = config => {
    return this.send({ method: Methods.Post, ...config });
  };

  private send: TRequestMethod = async ({
    isAuth,
    transformData,
    ...axiosConfig
  }) => {
    const storage = new Storage<string>(this.tokenStorageKey);
    const token = storage.get();

    if (isAuth) {
      axiosConfig.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    try {
      const { data } = await axios({ baseURL: this.baseURL, ...axiosConfig });

      if (transformData) {
        return transformData(data);
      }

      return data;
    } catch (error) {
      if (this.logoutFn && error.response.status === 403 && !isAuth) {
        this.logoutFn();
      } else if (this.errorHandlingFn) {
        this.errorHandlingFn(error);
      }

      throw error.message;
    }
  };
}
