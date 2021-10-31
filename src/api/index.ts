import axios from 'axios';
import { TRequestMethod } from './types';
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
  private readonly baseURL: string | undefined;

  constructor() {
    this.baseURL = process.env.BASE_URL;
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
    ignoreAuthError,
    transformData,
    ...axiosConfig
  }) => {
    const storage = new Storage<string>(
      process.env.TOKEN_STORAGE_KEY ?? 'token'
    );
    const token = storage.get();

    if (axiosConfig.url !== '/login') {
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
      if (error.response.status === 403 && !ignoreAuthError) {
        // logout
      } else {
        // error handling
      }

      throw error.message;
    }
  };
}
