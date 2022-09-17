import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component implements OnInit {

  textoValor1=0;
  textoValor2=0;

  constructor() { }

  ngOnInit(): void {
  }

  /*Outra forma de se fazer
  somarValores(){
    return Number (this.textoValor1) * (this.textoValor2)
  }*/
}
