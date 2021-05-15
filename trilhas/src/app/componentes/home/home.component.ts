import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';
import { state, transition, trigger, animate, style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(3000)),
    ]),    
  ]
})
export class HomeComponent implements OnInit {   
  // Menu
  homemenu: any = [];
  logo: any = []; 

  // Home
  conteudo: any = [];
  alert: boolean = false;
  alertD: boolean = false;
  // Passeio
  homepasseio: any = []

  // Contato
  contato: any = [];
  equipe: any = [];
  constructor(private homeServ: HomeService, private router: Router) {
    // Menu
    this.logo = homeServ.getLogo();
    this.homemenu = homeServ.getMenu();

    // Home
    this.conteudo = homeServ.getConteudo();

    // Passeio
    this.homepasseio = homeServ.getPasseio();

    // Contato
    this.contato = homeServ.getContato();
    this.equipe = homeServ.getEquipe();
   }
   
   onSubmit(formulario){
    if (formulario.form.status == 'INVALID') {
      //alert('Formulário inválido');   
      this.alertD = true;  
      return false;
    } else{
      this.homeServ.postUsuario(formulario.form.value)
      .subscribe(resposta => {
        console.log(resposta);    
        this.alert = true;                    
        formulario.form.reset({});            
      })      
    }
    // TODO: redirecionar pelo router
    this.router.navigate(['/crud'])      
  }  

  ngOnInit(): void {
  }
  closeAlert(){
    this.alert = false;
  }
  closeAlertD(){
    this.alertD = false;
  }
  
}
