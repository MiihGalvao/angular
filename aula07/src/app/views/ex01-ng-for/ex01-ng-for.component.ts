import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex01-ng-for',
  templateUrl: './ex01-ng-for.component.html',
  styleUrls: ['./ex01-ng-for.component.css']
})
export class Ex01NgForComponent implements OnInit {

  cachorros = ['assets/viralata.png','assets/chihuahua.png','assets/doberman.png'];

  constructor() { }

  ngOnInit(): void {
  }

}
