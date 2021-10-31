/**
 * Декоратор для предотвращения повторного вызова в течении переданного промежутка времени.
 * Автоматически привязывает this.
 * Возвращает промис.
 *
 * @example
 * ```ts
 * @debounce(500)
 requestMethod() { ... };
  или
 const debouncedFn = debounce(500, fn);
 ```
 * @param duration - Промежуток времени
 * @param cb - Вызываемая функция, по истечении времени
 */

export default function debounce(duration = 500, cb?: Function): Function {
  function innerDebounce(cb: Function, duration: number): Function {
    let timeoutId: NodeJS.Timeout;

    return function (...args: unknown[]) {
      clearTimeout(timeoutId);

      return new Promise(resolve => {
        timeoutId = setTimeout(() => {
          resolve(cb.apply(this, args));
        }, duration);
      });
    };
  }

  if (cb) {
    return innerDebounce(cb, duration)
  }

  return (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    descriptor.value = innerDebounce(descriptor.value, duration);
  };
}
