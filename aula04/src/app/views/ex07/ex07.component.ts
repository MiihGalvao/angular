import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex07',
  templateUrl: './ex07.component.html',
  styleUrls: ['./ex07.component.css']
})
export class Ex07Component implements OnInit {

  classeDiv1 = 'divAparece';
  classeDiv2 = 'divSome';
  classeDiv3 = 'divSome';

  constructor() { }

  ngOnInit(): void {
  }

  trocarAba(classeAba1: string, classeAba2: string, classeAba3: string){
    this.classeDiv1= classeAba1;
    this.classeDiv2= classeAba2;
    this.classeDiv3= classeAba3;
  }


}
