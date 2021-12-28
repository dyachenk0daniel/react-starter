import { AxiosError, AxiosRequestConfig } from 'axios';

interface IRequestConfig<TResult, TResponse> {
  isAuth?: boolean;
  transformData?: (response: TResponse) => TResult;
}

/**
 * Тип для RESTApi методов
 *
 * @param TResult - Тип итогового результата выполнения метода
 * @param TResponse - Тип возвращаемого результата запроса
 * @example
 * ```
 * protected get: TRequestMethod = config => {
    return this.send({ method: 'get', ...config });
  };
 ```
 */
export type TRequestMethod = <TResult = unknown, TResponse = unknown>(
  config: AxiosRequestConfig & IRequestConfig<TResult, TResponse>
) => Promise<TResult>;

export interface IApiConfig {
  baseURL?: string;
  tokenStorageKey?: string;
  logoutFn?: () => void;
  errorHandlingFn?: (error: AxiosError) => void;
}
