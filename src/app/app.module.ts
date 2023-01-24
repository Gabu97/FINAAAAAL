import { UsersService } from './starwars/services/users.service';
import { StarwarsModule } from './starwars/starwars.module';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './starwars/home/home.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IdPipe } from './starwars/id.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
   // HomeComponent,
   // StarshipsComponent,
   // CardComponent,
   // IdPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    StarwarsModule,
   // NgbModule

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
