import { Component, OnInit } from '@angular/core';
import { PasseioService } from '../../services/passeio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogconfirmService } from '../../services/dialogconfirm.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-listar-passeio',
  templateUrl: './listar-passeio.component.html',
  styleUrls: ['./listar-passeio.component.css']
})
export class ListarPasseioComponent implements OnInit {

  passeio: any = [];
  alert: boolean = false;
  alertD: boolean = false;
  logo: any = [];
  constructor(private homeServ: HomeService,
    private route: ActivatedRoute, private dialogConfirmServ: DialogconfirmService,
    private router: Router, private passeioServ: PasseioService) {
      passeioServ.getPasseio().subscribe(passeio => {
        this.passeio = passeio['allWalks'];
        console.log(this.passeio);
      });
      this.logo = homeServ.getLogo();
    }

  ngOnInit(): void {
  }

  onDelete(item){
    this.passeio.splice(item-1,1)
    this.dialogConfirmServ.confirm("Deseja excluir esse passeio?").then((podeDeletar:boolean) => {
      if (podeDeletar) {
        this.passeioServ.onDelete(item).subscribe((result) => {
          console.warn("result",result)
          this.alert = true;
          this.passeioServ.getPasseio().subscribe(passeio => {
            this.passeio = passeio['allWalks'];
            console.log(this.passeio);
          });
        })
      } else{
        return false;
      }
    })
    
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
