import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MemoryService } from './in-memory.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


import { ShowModule } from './show/show.module';
import { ShowService } from './show.service';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ShowModule, AppRoutingModule, 
    HttpClientModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ShowService ]
})
export class AppModule { }
