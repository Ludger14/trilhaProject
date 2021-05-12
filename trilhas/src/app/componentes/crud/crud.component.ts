import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { HomeService } from '../../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {  

  usuario: any = {};
  logo: any = {};
  alert: boolean = false;
  alertD: boolean = false;

  constructor(private crudServ: CrudService, private homeServ: HomeService,
    private route: ActivatedRoute,
    private router: Router) {
    crudServ.getUsuario().subscribe(usuario => {
      this.usuario = usuario['allUsers'];
      console.log(this.usuario);
    });
    this.logo = homeServ.getLogo();    
  }

  ngOnInit(): void {
    
  }

  onVoltar() {
    this.router.navigate([''])
  }

  onDelete(item){
    this.usuario.splice(item-1,1)
    this.crudServ.onDelete(item).subscribe((result) => {
      console.warn("result",result)
      this.crudServ.getUsuario().subscribe(usuario => {
        this.usuario = usuario['allUsers'];
        console.log(this.usuario);
      });
    })
  }

  closeAlert(){
    this.alert = false;
  }
  closeAlertD(){
    this.alertD = false;
  }
  
}
