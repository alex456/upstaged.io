import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/comon/http';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ShowModule } from './show/show.module';
import { ShowService } from './show.service';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ShowModule, AppRoutingModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ShowService ]
})
export class AppModule { }
