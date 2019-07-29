import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoToButtonComponent } from './components/go-to-button/go-to-button.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';

@NgModule({
  declarations: [
    BlogPostComponent,
    GoToButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlogPostComponent,
    GoToButtonComponent
  ]
})
export class SharedModule {
}
