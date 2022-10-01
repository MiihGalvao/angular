import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex07-ng-for',
  templateUrl: './ex07-ng-for.component.html',
  styleUrls: ['./ex07-ng-for.component.css']
})
export class Ex07NgForComponent implements OnInit {

  nomes = [''];
  nome = '';

  constructor() { }

  ngOnInit(): void {
  }

    incluir(){
      this.nomes.push(this.nome);
    }

}
