import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DomainModule } from '../domain/domain.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from '../app-routing/app-routing.module';

import { HomePageComponent } from './home-page/home-page.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { NavBarComponent } from './navBar/navBar.component';
import { CrewDetailsComponent } from './crew-details/crew-details.component';
import { CreateAccountComponent} from './create-account/create-account.component';
import { CuesDetailsComponent } from './cues-details/cues-details.component';
import { DocsComponent } from './docs/docs.component';
import {ScriptsComponent } from './scripts/scripts.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, DomainModule, AppRoutingModule ],
    declarations: [ ShowDetailsComponent, NavBarComponent, CrewDetailsComponent, CreateAccountComponent, CuesDetailsComponent,
       HomePageComponent, DocsComponent, ScriptsComponent ],
    exports: [ ShowDetailsComponent, NavBarComponent, CrewDetailsComponent,
       CreateAccountComponent, CuesDetailsComponent, HomePageComponent, DocsComponent, ScriptsComponent ]
  })
  export class ShowModule { }
