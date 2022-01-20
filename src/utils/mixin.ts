/* eslint @typescript-eslint/no-explicit-any: "off" */

type TCtor = new (...args: any[]) => {};

function mixin<O extends unknown[]>(objects: O) {
  return function <C extends TCtor>(Ctor: C) {
    return class extends Ctor {
      constructor(...args: any[]) {
        super(...args);
        Object.assign(this, ...objects);
      }
    };
  };
}

export default mixin;