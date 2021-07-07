import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private loginServ: LoginService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    this.loginServ.fazerLogin(this.user);
  }

}
