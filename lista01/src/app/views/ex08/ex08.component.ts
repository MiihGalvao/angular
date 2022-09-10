import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex08',
  templateUrl: './ex08.component.html',
  styleUrls: ['./ex08.component.css']
})
export class Ex08Component implements OnInit {

  classeCss =  'mouseOff';
  constructor() { }

  ngOnInit(): void {
  }

  trocarClasse(nome: string) {
    this.classeCss = nome;
  }
}
