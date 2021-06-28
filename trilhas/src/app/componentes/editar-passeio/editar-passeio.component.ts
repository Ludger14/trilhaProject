import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PasseioService } from '../../services/passeio.service';
import { HomeService } from '../../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-passeio',
  templateUrl: './editar-passeio.component.html',
  styleUrls: ['./editar-passeio.component.css']
})
export class EditarPasseioComponent implements OnInit {
  passeio: any = [];
  alert: boolean = false; 
  alertD: boolean = false;  
  logo: any = [];

  editPasseio = new FormGroup({
    title: new FormControl(''),    
    encontro: new FormControl(''),
    tempo: new FormControl(''),
    dia: new FormControl(''),
    guia: new FormControl(''),
    imagem: new FormControl('')
  })
  constructor(private homeServ: HomeService, private passeioServ: PasseioService,
    private router: ActivatedRoute, private routs: Router) {
      this.logo = homeServ.getLogo(); 
     }

  ngOnInit(): void {
    //console.warn(this.router.snapshot.params.id)
    this.passeioServ.getCurrentPasseio(this.router.snapshot.params.id)
    .subscribe((result) => {
      console.log(result);
      this.editPasseio = new FormGroup({
        title: new FormControl(result['title']),        
        encontro: new FormControl(result['encontro']),
        tempo: new FormControl(result['tempo']),
        dia: new FormControl(result['dia']),
        guia: new FormControl(result['guia']),
        imagem: new FormControl(result['imagem'])
      })
    })  
  }

  atualizar(atualizarForm){  
    if (atualizarForm.form.status == 'INVALID') {
      //alert('Formulário inválido');   
      this.alertD = true;  
      return false;
    } else{
      console.log(this.editPasseio.value);
      this.passeioServ.putPasseio(this.router.snapshot.params.id, this.editPasseio.value).subscribe((result)=>{
        result = JSON.parse(JSON.stringify(result));
        console.log(result)
        this.alert=true;
      })
    }  
   
  }
  closeAlert(){
    this.alert = false;
    this.routs.navigate(['/crud/listar-passeio'])
  }
  closeAlertD(){
    this.alertD = false;   
  }

}
