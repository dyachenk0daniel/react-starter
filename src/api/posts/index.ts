import { BaseApi } from '@/api';
import { IPostResponse, IPostsApi } from 'api/posts/types';
import debounce from "utils/debounce";

class PostsApi extends BaseApi implements IPostsApi {
  @debounce(1000)
  getPosts(id: number) {
    return this.get<string, IPostResponse>({
      url: `/posts/${id}`,
      transformData: response => response.title.toUpperCase(),
    });
  }
}

export const postsApi = new PostsApi();
