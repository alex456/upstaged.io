import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ShowDetailsComponent } from '../show/show-details/show-details.component';
import { CrewDetailsComponent } from '../show/crew-details/crew-details.component';
import { CreateAccountComponent} from '../show/create-account/create-account.component';
import { CuesDetailsComponent } from '../show/cues-details/cues-details.component';
import { HomePageComponent} from '../show/home-page/home-page.component';
import { DocsComponent } from '../show/docs/docs.component';
import { ScriptsComponent} from '../show/scripts/scripts.component';

 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component:  HomePageComponent},
  { path: 'crew/:id', component:  CrewDetailsComponent},
  { path: 'new-account', component: CreateAccountComponent},
  { path: 'cues/:id', component: CuesDetailsComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'scripts', component: ScriptsComponent}

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}