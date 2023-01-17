import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-ifelse',
  templateUrl: './exemplo-ifelse.component.html',
  styleUrls: ['./exemplo-ifelse.component.css']
})
export class ExemploIfelseComponent {

  ativarHelper: boolean = false
  senhaOk : boolean = false

  envioForm(evento : any){
    this.ativarHelper = true
    evento.preventDefault()
    let senha: string = evento.target.senha.value
    console.log(senha.length);
    
    if (senha.length > 7){
      this.senhaOk = true
    }else {
      this.senhaOk = false
    }
  }
}
