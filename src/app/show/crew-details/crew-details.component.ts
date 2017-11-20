import { Component, OnInit, Input } from '@angular/core';
import { Show, Shows } from '../../domain/index';
import { ShowService} from '../../show.service';
import { Crew } from '../../domain/index';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
    selector: 'my-crew',
    templateUrl: './crew-details.component.html'
})

export class CrewDetailsComponent implements OnInit {
    
    @Input() show: Show;
    private id: number;
    private newCrew = new Crew();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private showService: ShowService
      ) {}


    ngOnInit(): void {
        this.route.params.subscribe(x => this.onRouteParams(x));
        this.newCrew.name = "";
    }

    private onRouteParams(params: any) {
        this.id = +params.id;
        if (this.id.toString() == 'undefined' || !this.id) {
            this.id = 1;
       }
        if (params.id) {
          this.showService.getShow(this.id)
            .subscribe(x => this.onShowLoaded(x));
        } else {
          this.onShowLoaded(new Show());
        }
      }

    private onShowLoaded(showLoaded: Show) {
        this.show = showLoaded;
        console.log(this.show);
    }

    addCrew(): void {
        console.log("new crew add");
        this.show.crew.push(this.newCrew);
        this.showService.update(this.id, this.show)
            .subscribe(x => this.onShowSaved(x));
    }

    private onShowSaved(show: Show) {
       this.newCrew = new Crew(); 
    }

    delete(crewMem: Crew) {
        this.show.crew = this.show.crew.filter(x => x !== crewMem);
        const index = this.show.crew.indexOf(crewMem);
        this.show.crew.splice(index, 0);
        this.showService.update(this.id, this.show)
        .subscribe(x => this.onAccountSaved(x));
    }

    private onAccountSaved(show: Show) {
        console.log("saved");
      }
}