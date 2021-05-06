import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasseioService {

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

  constructor() { }

  getPasseio(){
    return this.homepasseio;
  }
}
