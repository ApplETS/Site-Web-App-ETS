import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { BlogPost } from './blogpost';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input() post: BlogPost;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {}
}
