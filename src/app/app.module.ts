import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaptalizePhilipsPipe } from './ex1/pipes/captalize-philips.pipe';
import { NavbarComponent } from './ex2/navbar/navbar.component';
import { CardComponent } from './ex3/card/card.component';
import { DemoModalComponent } from './ex4/demo-modal/demo-modal.component';
import { ModalContentComponent } from './ex5/modal-content/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptalizePhilipsPipe,
    NavbarComponent,
    CardComponent,
    DemoModalComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
