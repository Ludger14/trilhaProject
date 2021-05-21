import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // Menu
  homemenu: any = [{
    "name": "Home"
  },
  {
    "name": "Passeio"
  },
  {
    "name": "Contato"   
  }];

  logo: any = [{
    "logo": "Trilhas",
    "cargo": "Administrador"
  }]
  // Home
  conteudo: any = [{
    "titulo": "Já trilhou hoje?",
    "texto": "Aos trilheiros de plantão, conheçam a cidade maravilhosa de um outro ângulo!!! Veja alguns de nossos principais roteiros."    
  }]
  alert: boolean = false;
  alertD: boolean = false;
  // Passeio
  homepasseio: any = [{
    "title": "Pedra Bonita",
    "img": "../assets/img/pedrabonita.jpg",
    "encontro": "Floresta da Tijuca",
    "tempo": "25-35 minutos",
    "tuia": "Felipe",
    "dia": "Sábado - 10h"
 },
 {
    "title": "Costão de Itaquatiara",
    "img": "../assets/img/costao.jpg",
    "encontro": "Praia de Itaquatiara",
    "tempo": "30 minutos",
    "guia": "Felipe",
    "dia": "Domingo - 09h"
 },
 {
    "title": "Pedra do Telégrafo",
    "img": "../assets/img/telegrafo.jpg",
    "encontro": "Barra de Guaratiba",
    "tempo": "35-45 minutos",
    "guia": "Ernesto",
    "dia": "Domingo - 08h"
 },
 {
    "title": "Pico da Tijuca Mirim",
    "img": "../assets/img/pigotijuca.png",
    "encontro": "Praça Afonso Vizeu",
    "tempo": "45-50 minutos",
    "guia": "Ernesto",
    "dia": "Domingo - 10h"
 },
 {
    "title": "Praia do Perigoso",
    "img": "../assets/img/praiaperigoso.jpeg",
    "encontro": "Barra de Guaratiba",
    "tempo": "30-40 minutos",
    "guia": "Felipe",
    "dia": "Domingo - 10h"
 },
 {
    "title": "Morro da Urca",
    "img": "../assets/img/morrourca.jpg",
    "encontro": "Barra de Guaratiba",
    "tempo": "25-30 minutos",
    "guia": "Ernesto",
    "dia": "Sábado - 10h"
  }];

  // Contato
  contato: any = [{
    "titulo": "Curte uma aventura?",
    "texto": "Leve a família e chame os amigos para participar nessa viagem perto da natureza e sentir aquela energia das árvores. A Trilhas disponibiliza um guia, mapa e muitos outros acessórios para um passeio seguro e confortável."
  }]

  equipe: any = [{
    "nome": "Ludger Jean Louis",
    "foto": "../assets/img/Ludger.jpg",
    "profissao": "Desenvolvedor FullStack",
    "descricao": "Possui mais de 5 anos na criação e manutenção de projetos de websites no mercado. Atualmente é desenvolvedor Fullstack."
  },
  {
    "nome": "Grevisse Mulamba",
    "foto": "../assets/img/grevisse.jpg",
    "profissao": "Desenvolvedor FullStack",
    "descricao": "Graduado em Ciências de computação pela Universidade de Kinshasa. Atualmente é desenvolvedor Fullstack pelo Toti."
  }]

  constructor(private http: HttpClient) { }

  // Menu
  getMenu(){
    return this.homemenu;
  }

  getLogo(){
    return this.logo;
  }

  // Home
  getConteudo(){
    return this.conteudo;
  }  
  

  postUsuario(dados){
    return this.http.post('http://localhost:8080/usuario', dados);
  }

  // Passeio
  getPasseio(){
    return this.homepasseio;
  }

  // Contato
  getContato(){
    return this.contato;
  }
  // Contato
  getEquipe(){
    return this.equipe;
  }
}
