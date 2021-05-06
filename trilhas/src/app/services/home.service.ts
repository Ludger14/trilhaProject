import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  conteudo: any = [{
    "titulo": "Já trilhou hoje?",
    "texto": "Aos trilheiros de plantão, conheçam a cidade maravilhosa de um outro ângulo!!! Veja alguns de nossos principais roteiros."    
  }]

  constructor() { }

  getConteudo(){
    return this.conteudo;
  }
}
