import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CaptalizePhilipsPipe } from './ex1/pipes/captalize-philips.pipe';
import { NavbarComponent } from './ex2/navbar/navbar.component';
import { CardComponent } from './ex3/card/card.component';
import { DemoModalComponent } from './ex4/demo-modal/demo-modal.component';
import { ModalContentComponent } from './ex5/modal-content/modal-content.component';
import { CardNgcontentComponent } from './ex6/card-ngcontent/card-ngcontent.component';
import { ExemploIfelseComponent } from './ex7/exemplo-ifelse/exemplo-ifelse.component';
import { ListaTarefasComponent } from './ex8/lista-tarefas/lista-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptalizePhilipsPipe,
    NavbarComponent,
    CardComponent,
    DemoModalComponent,
    ModalContentComponent,
    CardNgcontentComponent,
    ExemploIfelseComponent,
    ListaTarefasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
