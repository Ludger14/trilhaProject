import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  usuario: any = {};
  constructor(private crudServ: CrudService) {
    crudServ.getUsuario().subscribe(usuario => {
      this.usuario = usuario;
      console.log(this.usuario);
    });
  }

  ngOnInit(): void {
  }

}
