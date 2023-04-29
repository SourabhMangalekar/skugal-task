import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Shared1Component } from './shared-components/shared1/shared1.component';
import { Shared2Component } from './shared-components/shared2/shared2.component';

@NgModule({
  declarations: [
    AppComponent,
    Shared1Component,
    Shared2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
