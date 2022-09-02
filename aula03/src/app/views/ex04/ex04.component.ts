import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.css']
})
export class Ex04Component implements OnInit {

  img1 = 'assets/img1.jpg';
  img2 = 'assets/img2.jpg';
  img3 = 'assets/img3.jpg';

  classeImg1 = "img1";
  classeImg2 = "img2";
  classeImg3 = "img3";

  constructor() { }

  ngOnInit(): void {
  }

}
