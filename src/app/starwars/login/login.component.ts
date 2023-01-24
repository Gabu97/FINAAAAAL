import { Router } from '@angular/router';
import { StarWarsService } from './../services/starwars.service';
import { UsersService } from './../services/users.service';


import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

 set email(value:string){
  this.usersService.email = value;
}
set password(value:string){
  this.usersService.password = value;
}
  constructor(private usersService: UsersService, private router:Router) {}
 
  submitLogin() {
   
      this.usersService.checkLogin(

      );
      this.router.navigate(['starships'])
  }
 
  ngOnInit(): void {}
}