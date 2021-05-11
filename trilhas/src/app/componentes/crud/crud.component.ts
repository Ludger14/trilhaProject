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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.crudServ.getUsuario();
    }
  }

  onVoltar() {
    this.router.navigate([''])
  }
  
}
