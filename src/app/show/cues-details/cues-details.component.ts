import { Component, OnInit, Input } from '@angular/core';
import { Show, Shows, Cue } from '../../domain/index';
import { ShowService } from '../../show.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'my-cues',
    templateUrl: './cues-details.component.html'
})

export class CuesDetailsComponent {
    @Input() show: Show;
    private id: number;
    private newCue = new Cue();
    constructor(
        private route: ActivatedRoute,
        private showService: ShowService
      ) {}


    ngOnInit(): void {
        this.route.params.subscribe(x => this.onRouteParams(x));
        this.newCue.name = "";
    }

    private onRouteParams(params: any) {
        this.id = +params.id;
        if (this.id.toString() == 'undefined' || !this.id) {
             this.id = 1;
        }
        if (params.id) {
          this.showService.getShow(this.id)
            .subscribe(x => this.onShowLoaded(x));
        } 
    }

    private onShowLoaded(showLoaded: Show) {
        this.show = showLoaded;
        console.log(this.show);
    }

    addCue(): void {
        this.newCue.called = false;
        console.log("new crew add");
        this.show.cue.push(this.newCue);
        this.showService.update(this.id, this.show)
            .subscribe(x => this.onShowSaved(x));
    }

    private onShowSaved(show: Show) {
       this.newCue = new Cue(); 
    }

    delete(cu: Cue) {
        this.show.cue = this.show.cue.filter(x => x !== cu);
        const index = this.show.cue.indexOf(cu);
        this.show.cue.splice(index, 0);
        this.showService.update(this.id, this.show)
            .subscribe(x => this.onAccountSaved(x));
    }

    private onAccountSaved(show: Show) {
        console.log("saved");
      }
}