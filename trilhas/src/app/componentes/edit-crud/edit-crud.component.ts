import { Component, OnInit } from '@angular/core';
import { EditService } from '../../services/edit.service';
import { HomeService } from '../../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-crud',
  templateUrl: './edit-crud.component.html',
  styleUrls: ['./edit-crud.component.css']
})
export class EditCrudComponent implements OnInit {
  //usuario: any = [];
  // Passeio
  homepasseio: any = [];
  alert: boolean = false;
  alertD: boolean = false;
  logo: any = {};
  constructor(private homeServ: HomeService, private editServ: EditService, private route: ActivatedRoute,
    private router: ActivatedRoute, private routs: Router) { 
    // Passeio
    this.homepasseio = homeServ.getPasseio();
    this.logo = homeServ.getLogo();   
  }

  onSubmit(formulario){
    if (formulario.form.status == 'INVALID') {
      //alert('Formulário inválido');   
      this.alertD = true;  
      return false;
    } else{
      this.editServ.putUsuario(this.router.snapshot.params.id, formulario.form.value)
      .subscribe((resposta) => {
        console.warn("resposta",resposta);    
        this.alert = true;                
        // TODO: redirecionar pelo router
        this.routs.navigate(['/crud'])        
      })
    }   
  }

  onVoltar() {
    this.routs.navigate(['/'])
  }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
  }  
  closeAlert(){
    this.alert = false;
  }
  closeAlertD(){
    this.alertD = false;
  }
}
