import { UsersService } from './../services/users.service';
import { Result, Starship } from '../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../services/starwars.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent implements OnInit {
  title = 'angular-http-client';

  starships: Result[] = [];
  page: number = 1;
  get loggedIn() {
    return this.usersService.loggedIn;
  }


  onScroll(): void {
    if (this.page === 4) {
      return;
    }
    this.StarWarsService.getAllStarships(++this.page).subscribe(
      (response: Starship) => {
        this.starships.push(...response.results);
      }
    );
  }
  getStarship(id: string) {
    this.router.navigate(['/starships', id]);
  }
  constructor(
    private StarWarsService: StarWarsService,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}
  ngOnInit(): void {
    this.usersService.checkLoginControl();
    this.usersService.getUserNameLogFromLS('loggedName');
    if (!this.usersService.loggedIn) {
      alert('You must be logged in to access this area!');
      this.router.navigate(['login']);
      return;
    } else {
      this.getStarships();
    }
  }
  getStarships() {
    this.StarWarsService.getAllStarships(this.page).subscribe((starships) => {
      console.log(starships);
      this.starships = starships.results;
    });
  }
}
