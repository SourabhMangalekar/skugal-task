import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Shared1Component } from './shared-components/shared1/shared1.component';
import { Shared2Component } from './shared-components/shared2/shared2.component';
import { NumberToWordsPipe } from './pipes/number-to-words.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Shared1Component,
    Shared2Component,
    NumberToWordsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
