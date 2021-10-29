import { BaseApi } from '@/api';
import { IPostResponse, IPostsApi } from 'api/posts/types';

class PostsApi extends BaseApi implements IPostsApi {
  getPosts(id: number) {
    return this.get<string, IPostResponse>({
      url: `/posts/${id}`,
      transformData: response => response.title.toUpperCase(),
    });
  }
}

export const postsApi = new PostsApi();
