import { AxiosRequestConfig } from 'axios';

interface IRequestConfig<TResult, TResponse> {
  ignoreAuthError?: boolean;
  transformData?: (response: TResponse) => TResult;
}

/**
 * Тип для RESTApi методов
 *
 * @param TResult - Тип итоговый результат выполнения метода
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
