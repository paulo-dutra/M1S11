import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  arrayFotos: any = [
    {
      url: "https://pt.wikipedia.org/wiki/Ficheiro:Persialainen.jpg",
      description: "O gato Persa é, para muitos, sinônimo de gato de luxo, com seu porte tranquilo e pelagem longa. Por isso, é considerado o “rei das exposições”, por ser uma raça de gato peludo e majestosa com focinho plano."
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Siamese_cat.jpg/200px-Siamese_cat.jpg",
      description: "A aparência de um gato Siamês é o que mais chama atenção: olhos bem azuis e pelos claros com extremidades mais escuras (rosto, orelhas, patas e rabo). Com postura elegante, esta raça era comum em companhias para reis na Tailândia."
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Maine_Coon_female.jpg/200px-Maine_Coon_female.jpg",
      description: "Também conhecido como o Gato Gigante, os gatos da raça Maine Coon são enormes, chegando a pesar até 13kg e ter um porte semelhante ao de um poodle médio."
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ankara_Kedisi_Sarman.jpg/200px-Ankara_Kedisi_Sarman.jpg",
      description: "Fofo, elegante e independente, o gato Angorá pertence a uma raça de gatos domésticos que veio da Turquia. De pelos longos que necessitam de escovação frequente e olhos claros e marcantes, o gato Angorá adora brincar e é ótimo para fazer companhia a crianças."
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/GreekSphynxCat1.png/200px-GreekSphynxCat1.png",
      description: "Exótica e diferente, a raça Sphynx é a mais rara dos felinos. Também conhecido como Pelado Canadense, o gato desta raça possui o visual totalmente sem pelos!"
    }
  ]
}
