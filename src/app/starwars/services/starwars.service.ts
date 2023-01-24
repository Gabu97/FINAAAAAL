import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Starship,Result } from 'src/app/starwars/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
constructor(
  private http: HttpClient
){

}
getAllStarships(page:number):Observable<Starship>{
  const path = `https://swapi.dev/api/starships/?page=${page}`;
  return this.http.get<Starship>(path);
  }

getStarship(id:string):Observable<Starship>{
  const path = `https://swapi.dev/api/starships/${id}`;
  return this.http.get<Starship>(path);

}



}
