import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  //jogos: Jogo[] = []
  jogos = new Array <Jogo>();
  jogoSelecionado?: Jogo

  constructor() {
    const JogoGta = new Jogo();
    JogoGta.nome = 'GTA San Andreas';
    JogoGta.produtora = 'RockStar';
    JogoGta.plataforma = 'Playstation 2';
    JogoGta.genero = '';

    this.jogos.push(JogoGta);
  }

  ngOnInit(): void {
  }

  selecionarJogo(jogo: Jogo) {
    this.jogoSelecionado = jogo;
  }

  fechar() {
    this.jogoSelecionado = undefined;
  }

  novoJogo() {
    this.jogoSelecionado = new Jogo();
    this.jogo.push(this.jogoSelecionado);
  }

  removerJogo(index: number){
    this.jogos.splice(index, 1);
    this.fechar();
  }

}
