/**
 * Упрощает взаимодействие с local storage
 *
 * @class
 * @param key - Ключ local storage
 * @example
 * ```ts
 * const storage = new Storage<TMyData>('my-storage-key');
 * storage.set('some-string');
 * const data = storage.get();
 * ```
 */
class Storage<Data> {
  private readonly key: string;

  constructor(key: string) {
    this.key = key;
  }

  public set(data: Data): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  public get(): Data {
    return JSON.parse(localStorage.getItem(this.key) as string);
  }
}

export default Storage