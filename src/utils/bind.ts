const bind = (
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const originalFunction = descriptor.value;

  descriptor.value = function (...args: unknown[]) {
    originalFunction.apply(this, args);
  };
};

export default bind;
