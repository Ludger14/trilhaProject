import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {  

  usuario: any = {};

  constructor(private crudServ: CrudService, 
    private route: ActivatedRoute,
    private router: Router) {
    crudServ.getUsuario().subscribe(usuario => {
      this.usuario = usuario['allUsers'];
      console.log(this.usuario);
    });
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
    })
  }
  
}
