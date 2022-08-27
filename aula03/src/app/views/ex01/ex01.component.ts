import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component implements OnInit {

  nome = 'Milena'
  sobrenome = 'Galvao'

  constructor() { }

  ngOnInit(): void {
  }



}
