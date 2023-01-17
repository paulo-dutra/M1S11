import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {

  novaTarefa : string = ''
  tarefas: string[] = []

  cadastrarTarefa(){
    this.tarefas.push(this.novaTarefa)
    this.novaTarefa = ''
  }
}
