import { Component, OnInit, Input } from '@angular/core';
import { Show, Shows } from '../../domain';
import { ShowService } from '../../show.service';

@Component({
    selector: 'my-show-details',
    templateUrl: './show-details.component.html'
})

export class ShowDetailsComponent implements OnInit {
    shows: Show[];

    constructor(
        private showService: ShowService
    ) {}

    getShows(): void {
        // this.shows = this.showService.getShows();
        this.showService.getShows()
            .subscribe(shows => this.shows = shows);
    }

    ngOnInit() {
        this.getShows();
    }


}



