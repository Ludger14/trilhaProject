import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EditService } from '../../services/edit.service';
import { HomeService } from '../../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-crud',
  templateUrl: './edit-crud.component.html',
  styleUrls: ['./edit-crud.component.css']
})
export class EditCrudComponent implements OnInit {   
  usuario: any = [];
  // Passeio
  homepasseio: any = [];
  alert: boolean = false; 
  alertD: boolean = false;  
  logo: any = [];

  editUser = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    telefone: new FormControl(''),
    passeio: new FormControl('')
  })
  constructor(private homeServ: HomeService, private editServ: EditService,
    private router: ActivatedRoute, private routs: Router) { 
    // Passeio
    this.homepasseio = homeServ.getPasseio();
    this.logo = homeServ.getLogo();   
  }
  
  // TODO: redirecionar pelo router
  onVoltar() {
    this.routs.navigate(['/crud'])
  }

  ngOnInit(): void {        
    //console.warn(this.router.snapshot.params.id)
    this.editServ.getCurrentUser(this.router.snapshot.params.id)
    .subscribe((result) => {
      console.log(result);
      this.editUser = new FormGroup({
        nome: new FormControl(result['nome']),
        email: new FormControl(result['email']),
        telefone: new FormControl(result['telefone']),
        passeio: new FormControl(result['passeio'])
      })
    })    
  }  
  atualizar(atualizarForm){  
    if (atualizarForm.form.status == 'INVALID') {
      //alert('Formulário inválido');   
      this.alertD = true;  
      return false;
    } else{
      console.log(this.editUser.value);
      this.editServ.putUsuario(this.router.snapshot.params.id, this.editUser.value).subscribe((result)=>{
        result = JSON.parse(JSON.stringify(result));
        console.log(result)
        this.alert=true;
      })
    }  
   
  }
  closeAlert(){
    this.alert = false;
    this.routs.navigate(['/crud'])
  }
  closeAlertD(){
    this.alertD = false;   
  }
  
}
