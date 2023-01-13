import { Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  
  page:string = '' 
  
  pageChange(newPage: string){
    this.page = newPage
  }  
}
