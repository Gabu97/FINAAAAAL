import { Component, OnInit, NgZone} from '@angular/core';
import { UsersService } from './starwars/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'starWarsApp';
  constructor(
    
    private usersService: UsersService
  ) {}
 
  get loggedUser(){
    return this.usersService.loggedUser;
  }

  get loggedIn(){
    return this.usersService.loggedIn;
  }

  ngOnInit(): void {
    
  }

  logout(){
    this.usersService.logout();
  }
}
