import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component implements OnInit {

  musica ='New Rules';
  album = 'Dua Lipa';
  interprete = 'Dua Lipa';
  
  constructor() { }

  ngOnInit(): void {
  }

}
