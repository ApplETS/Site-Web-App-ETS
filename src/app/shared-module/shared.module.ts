import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoToButtonComponent } from './components/go-to-button/go-to-button.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    BlogPostComponent,
    GoToButtonComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlogPostComponent,
    GoToButtonComponent,
    CardComponent
  ]
})
export class SharedModule {
}
