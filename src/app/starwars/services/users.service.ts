import { Injectable } from '@angular/core';
import { User } from 'src/app/starwars/interfaces/interfaces';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  counterID: number = 0;
  loggedIn: boolean = false;
  loggedUser: any = 'Any';
  name: string = '';
  email: string = '';
  password: string = '';
  userArray: User[] = [
    {
      id: 1,
      name: ' Gabi',
      email: 'gabitelega1997@gmail.com',
      password: '1234',
    },
  ];

  saveToLocalStorage(registeredUser: User[]) {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUser));
  }

  loginControlToLS(logged: boolean) {
    localStorage.setItem('logged', JSON.stringify(logged));
  }

  nameToLS(loggedName: string) {
    localStorage.setItem('loggedName', loggedName);
  }

  getFromLocalStorage(key: string) {
    this.userArray = JSON.parse(localStorage.getItem(key)!);
  }

  getLoginControlFromLS(key: string) {
    this.loggedIn = JSON.parse(localStorage.getItem(key)!);
  }

  getUserNameLogFromLS(key: string) {
    if (localStorage.getItem(key) == undefined) this.loggedUser = 'Any';
    else this.loggedUser = localStorage.getItem(key);
  }

  checkLoginControl() {
    this.getLoginControlFromLS('logged');
  }

  newUser() {
    this.counterID++;
    this.userArray.push({
      id: this.counterID + 1,
      name: this.name,
      email: this.email,
      password: this.password,
    });
    this.saveToLocalStorage(this.userArray);
    console.log(this.userArray);
  }

  checkLogin() {
    const user = this.userArray.find((user) => user.email === this.email);
    user?.password === this.password
      ? ((this.loggedIn = true),
        alert(`Welcome ${user?.name}`),
        this.loginControlToLS(this.loggedIn))
      : console.log("don't work login");
    console.log(user);
    console.log(this.loggedIn);

    this.loggedUser = user?.name;
    this.nameToLS(this.loggedUser);
  }

  logout() {
    this.loggedIn = false;
    this.loginControlToLS(this.loggedIn);
    //this.loggedUser = 'Any';
    this.nameToLS(this.loggedUser);
    console.log('logged out');
  }
}
