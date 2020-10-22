export type MyWindow = Window &
  typeof globalThis & {
    config: {
      baseUrl: string;
    };
  };
