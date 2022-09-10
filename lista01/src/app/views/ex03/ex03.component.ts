import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.css']
})
export class Ex03Component implements OnInit {

  ClasseCss = 'vermelho';

  constructor() { }

  ngOnInit(): void {
  }

  trocarClasse() {

    if (this.ClasseCss == 'vermelho'){
    this.ClasseCss = 'azul';
  }
  else {
    this.ClasseCss = 'vermelho';
  }
  }

}
