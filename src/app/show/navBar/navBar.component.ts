import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Show } from '../../domain/index';
import {ShowService} from '../../show.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'my-navBar',
    templateUrl: './navBar.component.html',
    styleUrls: [ './navBar.component.css' ] 
})

export class NavBarComponent implements OnInit {

    shows : Show[];

   ngOnInit() {
       this.showService.getShows()
        .subscribe(shows => this.shows = shows);
   }

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private showService: ShowService
    ) { }

    private newShow = new Show();
    private id: number;

    private addShow(): void {
        this.newShow.id = this.shows.length + 1;
        console.log(this.newShow.name);
        this.showService.addShow(this.newShow)
            .subscribe(x => {this.shows.push(this.newShow);});
        this.shows.push(this.newShow);
        this.newShow = new Show();
        console.log(this.shows);
    }
        
    private getid(listID: number) {
        this.id = listID;
        console.log(this.id);
    }
}