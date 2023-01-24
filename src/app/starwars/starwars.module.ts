import { IdPipe } from './id.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StarshipsComponent } from './starships/starships.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FilmsComponent } from './films/films.component';
import { PilotsComponent } from './pilots/pilots.component';

@NgModule({
  declarations: [
    StarshipsComponent,
    CardComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginComponent,
    RegisterComponent,
    IdPipe,
    FilmsComponent,
    PilotsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  exports: [
    StarshipsComponent,
    CardComponent,
    HomeComponent,
    InfiniteScrollModule,
    LoginComponent,
    RegisterComponent
  ],
})
export class StarwarsModule {}
