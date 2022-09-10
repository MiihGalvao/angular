import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex07',
  templateUrl: './ex07.component.html',
  styleUrls: ['./ex07.component.css']
})
export class Ex07Component implements OnInit {

  classeCSS= 'vermelho';
  constructor() { }

  ngOnInit(): void {
  }

  trocarClasse(classeCSS: string) {
    this.classeCSS = classeCSS;
  }

}
