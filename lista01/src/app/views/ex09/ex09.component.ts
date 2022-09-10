import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex09',
  templateUrl: './ex09.component.html',
  styleUrls: ['./ex09.component.css']
})
export class Ex09Component implements OnInit {

  classeCss = '';

  constructor() { }

  ngOnInit(): void {
  }

  trocarClasse() {
    this.classeCss = 'botaoCor';
  }

}
