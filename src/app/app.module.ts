import { DomainModule } from './domain';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ViewsModule } from './views';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        DomainModule,
        ViewsModule
     ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}