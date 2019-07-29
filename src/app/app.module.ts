import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './shared-module/shared.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, SharedModule],
  declarations: [AppComponent, HeaderComponent, HomeComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
