import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex06-ng-for',
  templateUrl: './ex06-ng-for.component.html',
  styleUrls: ['./ex06-ng-for.component.css']
})
export class Ex06NgForComponent implements OnInit {

  titulos = ['@juju', '@padrefestajunina','@ladygaga'];
  conteudos = ['Assisti Dahmer...','Pula fogueira','#RockInRio']

  constructor() { }

  ngOnInit(): void {
  }

}
