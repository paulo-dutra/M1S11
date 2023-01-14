import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.css']
})
export class DemoModalComponent {
showModal: boolean = true

modalChange(){
  this.showModal = !this.showModal
}
}
