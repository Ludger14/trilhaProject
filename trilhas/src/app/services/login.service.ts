import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../componentes/model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(user: User){
    if (user.nome === 'admin' && user.senha === 'admin') {
      this.userAutenticado = true;
      this.router.navigate(['/crud']);
    } else {
      this.userAutenticado = false;
    }
  }

  userEstaAutenticado(){
    return this.userAutenticado;
  }
}
