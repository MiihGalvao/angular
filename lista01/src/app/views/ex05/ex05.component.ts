import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.css']
})
export class Ex05Component implements OnInit {

  nome = '';
  constructor() { }

  ngOnInit(): void {
  }

  lerNome() {
    this.nome = prompt('Digite seu nome') as string;
  }

}
