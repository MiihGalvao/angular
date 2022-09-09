import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.css']
})
export class Ex02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  somar(valor1: number, valor2: number) {
    return valor1 + valor2;
  }

}
