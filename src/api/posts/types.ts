export interface IPostResponse {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface IPostsApi {
  getPosts: (id: number) => Promise<string>;
}
