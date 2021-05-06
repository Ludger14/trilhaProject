import { Component, OnInit } from '@angular/core';
import { PasseioService } from '../../services/passeio.service';

@Component({
  selector: 'app-passeio',
  templateUrl: './passeio.component.html',
  styleUrls: ['./passeio.component.css']
})
export class PasseioComponent implements OnInit {

  homepasseio: any = []
  constructor(passeioServ: PasseioService) {
     this.homepasseio = passeioServ.getPasseio();
   }

  ngOnInit(): void {
  }

}
