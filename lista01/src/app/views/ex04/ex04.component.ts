import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.css']
})
export class Ex04Component implements OnInit {

  imagem = 'assets/viralata.png';
  constructor() { }

  ngOnInit(): void {
  }

  trocarCao(imagem: string){
    this.imagem = imagem;

  }

}
