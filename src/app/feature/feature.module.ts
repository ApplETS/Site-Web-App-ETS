import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared.module';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [BlogComponent, HomeComponent],
  exports: [
    BlogComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeatureModule { }
