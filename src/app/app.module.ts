import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaptalizePhilipsPipe } from './ex1/pipes/captalize-philips.pipe';
import { NavbarComponent } from './ex2/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptalizePhilipsPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
