import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex10',
  templateUrl: './ex10.component.html',
  styleUrls: ['./ex10.component.css']
})
export class Ex10Component implements OnInit {

  valor1 = '';
  valor2 = '';
  resultado = 0;

  constructor() { }

  ngOnInit(): void {
  }

  atribuirValor1(valor: string) {
    this.valor1 += valor;
  }

  atribuirValor2(valor: string) {
    this.valor2 += valor;
  }

  somar() {
    this.resultado = Number(this.valor1) + Number(this.valor2);
  }
  subtrair() {
    this.resultado = Number(this.valor1) - Number(this.valor2);
  }

  mult() {
    this.resultado = Number(this.valor1) * Number(this.valor2);
  }

  div() {
    this.resultado = Number(this.valor1) / Number(this.valor2);
  }
}
