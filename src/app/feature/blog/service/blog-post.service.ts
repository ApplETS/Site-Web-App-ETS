import { Injectable } from '@angular/core';
import { BlogPost } from '../../../shared-module/components/blog-post/blogpost';

import { POSTS } from './blogPost-mock';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  static getPosts(): BlogPost[] {
    return POSTS;
  }
}
