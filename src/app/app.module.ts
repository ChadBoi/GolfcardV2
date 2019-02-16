import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { CardPageComponent } from './card-page/card-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SetupPageComponent,
    CardPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
