import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  conteudo: any = [{
    "titulo": "Curte uma aventura?",
    "texto": "Leve a família e chame os amigos para participar nessa viagem perto da natureza e sentir aquela energia das árvores. A Trilhas disponibiliza um guia, mapa e muitos outros acessórios para um passeio seguro e confortável."
  }]

  constructor() { }

  getConteudo(){
    return this.conteudo;
  }
}
