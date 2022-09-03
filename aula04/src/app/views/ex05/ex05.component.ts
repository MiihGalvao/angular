import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.css']
})
export class Ex05Component implements OnInit {

  imagem = 'assets/img4.jpg';


  constructor() { }


  ngOnInit(): void {
  }

    trocarImagem() {
      if(this.imagem == 'assets/img4.jpg'){
      this.imagem = 'assets/img5.jpg';
    }

    else{
      this.imagem = 'assets/img4.jpg';
    }

}

}
