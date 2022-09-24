import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex03-ngif',
  templateUrl: './ex03-ngif.component.html',
  styleUrls: ['./ex03-ngif.component.css']
})
export class Ex03NgifComponent implements OnInit {

  valor1 = '';
  valor2 = '';
  resultado = 0;

  constructor() { }

  ngOnInit(): void {
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
