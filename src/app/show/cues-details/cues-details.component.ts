import { Component, OnInit, Input } from '@angular/core';
import { Show, Shows } from '../../domain/index';
import { ShowService } from '../../show.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'my-cues',
    templateUrl: './cues-details.component.html'
})

export class CuesDetailsComponent {
    @Input() show: Show;
    private id: number;
    constructor(
        private route: ActivatedRoute,
        private showService: ShowService
      ) {}


    ngOnInit(): void {
        this.getShow();
    }

    getShow(): void {
        this.id = +this.route.snapshot.paramMap.get('id');
        if (this.id.toString() == 'undefined' || !this.id) {
            this.id = 1;
        }
        console.log(this.id);
        this.showService.getShow(this.id)
          .subscribe(show => this.show = show);
    }
}