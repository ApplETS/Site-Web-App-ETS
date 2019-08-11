import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../shared-module/components/blog-post/blogpost';
import { BlogPostService } from './service/blog-post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: BlogPost[];

  constructor(private postsService: BlogPostService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.posts = BlogPostService.getPosts();
  }

}
