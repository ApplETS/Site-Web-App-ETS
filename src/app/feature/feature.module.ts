import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared.module';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [BlogComponent],
  exports: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeatureModule { }
