import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component'
import { CreateAccountComponent } from './create-account/create-account.component';
import { CuesComponent } from './cues/cues.component';
import { CastComponent } from './cast/cast.component';
import { DomainModule } from '../domain';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DomainModule
    ], 
    declarations: [
        LoginComponent,
        CreateAccountComponent,
        CuesComponent,
        CastComponent
],
    exports: [
        LoginComponent,
        CreateAccountComponent,
        CuesComponent,
        CastComponent
    ]
})
export class ViewsModule {

}