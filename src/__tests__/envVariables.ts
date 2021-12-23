test('check environmental variables', () => {
  expect(process.env.BASE_URL).toBe('https://jsonplaceholder.typicode.com');
  expect(process.env.THEME_STORAGE_KEY).toBe('theme');
  expect(process.env.TOKEN_STORAGE_KEY).toBe('token');
});
