import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  homemenu: any = [{
    "name": "Home"
  },
  {
    "name": "Passeio"
  },
  {
    "name": "Contato"   
  }];

  logo: any = [{
    "logo": "Trilhas"
  }]

  constructor() { }

  getMenu(){
    return this.homemenu;
  }

  getLogo(){
    return this.logo;
  }
}
