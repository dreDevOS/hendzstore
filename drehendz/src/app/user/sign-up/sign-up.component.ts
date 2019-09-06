import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  template: `
  <h2>Welcome {{name}}  </h2>
   <button (click)="greeting='welcome to the hendz'">Click me</button>
  {{greeting}}

  `,
  styles: []
})
export class SignUpComponent implements OnInit {
 
 
  public name = "dre";
  public greeting ="";


  constructor() { }

  ngOnInit()
   {
  }
  onClick()
  {
    console.log('welcome to the hendz');
  }

}
