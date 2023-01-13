import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaptalizePhilipsPipe } from './ex1/pipes/captalize-philips.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CaptalizePhilipsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
