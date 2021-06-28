import { Component, OnInit } from '@angular/core';
import { PasseioService } from '../../services/passeio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../services/home.service';


@Component({
  selector: 'app-passeio',
  templateUrl: './passeio.component.html',
  styleUrls: ['./passeio.component.css']
})
export class PasseioComponent implements OnInit {  

  alert: boolean = false;
  alertD: boolean = false;
  logo: any = [];
  selectedFile: File = null; 
  constructor(private passeioServ: PasseioService, private router: Router, private homeServ: HomeService,
    private route: ActivatedRoute) {     
    this.logo = homeServ.getLogo();
  }
  handleFileInput(files){
    this.selectedFile = <File>files[0];
    console.log(this.selectedFile);
  }

  onSubmit(formulario){
    if (formulario.form.status == 'INVALID') {
      //alert('Formulário inválido');   
      this.alertD = true;  
      return false;
    } else{
      var fd = new FormData();
      fd.append('title', formulario.form.value.title);
      fd.append('imagem', this.selectedFile, this.selectedFile.name);
      fd.append('encontro', formulario.form.value.encontro);
      fd.append('tempo', formulario.form.value.tempo);
      fd.append('dia', formulario.form.value.dia);
      fd.append('guia', formulario.form.value.guia);      
      console.log(formulario.form);
      //this.passeioServ.postPasseio(formulario.form.value)
      this.passeioServ.postPasseio(fd)
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
    this.router.navigate(['/crud/listar-passeio'])
  }
  closeAlertD(){
    this.alertD = false;
  }
}
