import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../interfaces/interfaces';
import { StarWarsService } from '../services/starwars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  title = 'angular-http-client';
  get loginControl() {
    return this.usersService.loggedIn;
  }
  //starship: Result | null = null;
  constructor(
    private StarWarsService: StarWarsService,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}

  @Input() starship!: Result;
  urlImagen: string = 'https://starwars-visualguide.com/assets/img/starships/';

  ngOnInit(): void {
    this.usersService.checkLoginControl();
    this.usersService.getUserNameLogFromLS('userNameLog');
    if (!this.usersService.loggedIn) {
      alert('You must be logged in to access this area!');
      this.router.navigate(['login']);
      return;
    } else {
      this.route.params
        .pipe(
          switchMap(({ id }) => this.StarWarsService.getStarship(id)),
          tap(console.log)
        )
        .subscribe((starship) => {
          this.starship = starship;
        });
    }
  }
}
