import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex06',
  templateUrl: './ex06.component.html',
  styleUrls: ['./ex06.component.css']
})
export class Ex06Component implements OnInit {

  textoDiv = '';

  constructor() { }

  ngOnInit(): void {
  }

  trocarTexto() {
    this.textoDiv = 'Isso é uma div';
  }

}
