import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Show } from '../../domain/index';
import {ShowService} from '../../show.service';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'; 


@Component({
    selector: 'my-navBar',
    templateUrl: './navBar.component.html',
    styleUrls: [ './navBar.component.css' ] 
})

export class NavBarComponent implements OnInit {

    shows : Show[] = [];
    results: '';
    private newShow = new Show();


   ngOnInit(): void {
    //    this.showService.getShows()
    //     .subscribe(shows => this.shows = shows);

        this.http.get<Show>('http://18.221.82.70/shows').subscribe(data => {
            //this.results = JSON.stringify(data['results']);
            console.log(JSON.stringify(data));
            for(var i in data) {
                console.log(data[i]);
                this.newShow.name = data[i].showName;
                this.newShow.id = data[i].show_id;
                this.newShow.description = data[i].Description;
                console.log(this.newShow);
                this.shows.push(this.newShow);
                this.newShow = new Show();
            }

        },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              // A client-side or network error occurred. Handle it accordingly.
              console.log('An error occurred:', err.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            }
        });
   }

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private http: HttpClient,
        private showService: ShowService
    ) {}

    private id: number;

    private addShow(): void {
        //this.newShow.id = this.shows.length + 1;
        console.log(this.newShow.name);
        //this.newShow.crew = [];
        //this.newShow.cue = [];
        var body = {
            showName: this.newShow.name,
            Description: this.newShow.description
        };
        // this.showService.addShow(this.newShow)
        //     .subscribe(x => {this.shows.push(this.newShow);});
        this.http.post('http://18.221.82.70/newShow', body)
            .subscribe(x => {this.shows.push(this.newShow);});
        this.shows.push(this.newShow);
        this.newShow = new Show();
        console.log(this.shows);
    }
        
    private getid(sh: Show) {
        this.id = sh.id;
        console.log(this.id);
    }
}