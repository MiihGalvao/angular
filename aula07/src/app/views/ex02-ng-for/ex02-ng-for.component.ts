import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex02-ng-for',
  templateUrl: './ex02-ng-for.component.html',
  styleUrls: ['./ex02-ng-for.component.css']
})
export class Ex02NgForComponent implements OnInit {

  paises=['Brasil','Argentina','Alemanha','Itália'];

  constructor() { }

  ngOnInit(): void {
  }

  mostrarPais(pais:string){
    alert(pais)
  }
}
