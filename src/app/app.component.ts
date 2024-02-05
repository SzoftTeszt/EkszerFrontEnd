import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elso';
  szam:number

  constructor(){
    this.szam=5
  }
  novel(){
    this.szam++;
  }
  csokkent(){
    this.szam--;
  }
}
