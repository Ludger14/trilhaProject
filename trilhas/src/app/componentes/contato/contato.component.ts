import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  logo: any = [];
  conteudo: any = [];
  constructor(menuServ: MenuService, contatoServ: ContatoService) {
    this.logo = menuServ.getLogo();
    this.conteudo = contatoServ.getConteudo();
   }

  ngOnInit(): void {
  }

}
