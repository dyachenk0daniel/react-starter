import { postsApi } from 'api/posts/index';

// Чему должен быть равен пост
const postTitle = 'SUNT AUT FACERE REPELLAT PROVIDENT OCCAECATI EXCEPTURI OPTIO REPREHENDERIT'

// Проверяемый пост
let title: string | null = null;

describe('context for the post-service', () => {
  // Получение поста
  beforeAll(async () => {
    /*return getPosts(1).then((result: Post) => {
      post = result;
    });*/
    title = await postsApi.getPosts(1);
  });

  // Очистка поста
  afterAll(() => {
    title = null;
  });

  test('post title check', () => {
    expect(title).toBe(postTitle);
  });
});
