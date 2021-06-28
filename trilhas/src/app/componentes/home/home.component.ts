import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { PasseioService } from '../../services/passeio.service';
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
  passeio: any = [];

  // Contato
  contato: any = [];
  equipe: any = [];
  constructor(private homeServ: HomeService, private router: Router, private passeioServ: PasseioService) {
    // Menu
    this.logo = homeServ.getLogo();
    this.homemenu = homeServ.getMenu();

    // Home
    this.conteudo = homeServ.getConteudo();

    // Passeio
    passeioServ.getPasseio().subscribe(passeio => {
      this.passeio = passeio['allWalks'];
      console.log(this.passeio);
    });

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
          
  }  

  ngOnInit(): void {
  }
  closeAlert(){
    this.alert = false;
    // TODO: redirecionar pelo router
    this.router.navigate(['/crud'])
  }
  closeAlertD(){
    this.alertD = false;
  }
  
}
