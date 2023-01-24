import { LoginComponent } from './starwars/login/login.component';
import { HomeComponent } from './starwars/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './starwars/starships/starships.component';
import { CardComponent } from './starwars/card/card.component';
import { RegisterComponent } from './starwars/register/register.component';
const routes: Routes = [
  
  { path: 'starships', component: StarshipsComponent },
  { path: 'starships/:id', component: CardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: HomeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
