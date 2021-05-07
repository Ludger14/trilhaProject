import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Menu
  homemenu: any = [];
  logo: any = [];

  // Home
  conteudo: any = [];

  // Passeio
  homepasseio: any = []

  // Contato
  contato: any = [];

  constructor(homeServ: HomeService) {
    // Menu
    this.logo = homeServ.getLogo();
    this.homemenu = homeServ.getMenu();

    // Home
    this.conteudo = homeServ.getConteudo();

    // Passeio
    this.homepasseio = homeServ.getPasseio();

    // Contato
    this.contato = homeServ.getContato();
   }

   onSubmit(formulario){
    console.log(formulario.form.value);
  }

  ngOnInit(): void {
  }

}
