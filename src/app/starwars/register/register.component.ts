import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  set name(value: string) {
    this.usersService.name = value;
  }
  set password(value: string) {
    this.usersService.password = value;
  }
  set email(value: string) {
    this.usersService.email = value;
  }

  constructor(private usersService: UsersService, private router: Router) {}
  submitRegister() {
    this.usersService.newUser();
    console.log(this.name);
    this.router.navigate(['login']);
  }

  ngOnInit(): void {}
}
