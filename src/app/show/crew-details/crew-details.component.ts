import { Component, OnInit, Input } from '@angular/core';
import { Show, Shows } from '../../domain/index';
import { ShowService} from '../../show.service';
import { Crew } from '../../domain/index';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'; 
import { HttpBackendService } from 'angular-in-memory-web-api';


@Component({
    selector: 'my-crew',
    templateUrl: './crew-details.component.html'
})

export class CrewDetailsComponent implements OnInit {

    public show = new Show();
    public id: number;
    public crew: Crew[] = [];
    public newCrew = new Crew();
    newUrl: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private showService: ShowService,
        private http: HttpClient
      ) {}


    ngOnInit(): void {
        this.route.params.subscribe(x => this.onRouteParams(x));
        this.newCrew.name = '';
    }

    private onRouteParams(params: any) {
        this.crew = [];
        this.id = +params.id;
        if (this.id.toString() === 'undefined' || !this.id) {
            this.id = 1;
       }
        if (params.id) {
        //   this.showService.getShow(this.id)
        //     .subscribe(x => this.onShowLoaded(x));
        this.newUrl = 'http://18.221.82.70/shows/' + this.id;

        this.http.get<Show>(this.newUrl).subscribe(data => {
            // console.log(data.showName);
            this.show.name = data.showName;


        });

            this.http.get<Crew>('http://18.221.82.70/crew').subscribe(data => {
                // this.results = JSON.stringify(data['results']);
                // console.log(JSON.stringify(data));
                for(let i in data) {
                    
                    if (data[i].show_id == this.id) {
                        console.log(data[i]);
                        this.newCrew.email = data[i].email;
                        this.newCrew.name = data[i].crewName;
                        this.newCrew.phoneNumber = data[i].phone_num;
                        this.newCrew.role = data[i].crewRole;
                        this.newCrew.id = data[i].user_id;
                        this.crew.push(this.newCrew);
                        this.newCrew = new Crew();

                    }
                }
            }
            );    
        } 
      }

    // private onShowLoaded(showLoaded: Show) {
    //     this.show = showLoaded;
    //     console.log(this.show);
    // }

    addCrew(): void {
        // if (this.show.crew.length) {
            console.log("new crew add");
            this.crew.push(this.newCrew);
            // this.showService.update(this.id, this.show)
            //     .subscribe(x => this.onShowSaved(x));
        // } else {
        //     this.show.crew = [];
        //     this.show.crew.push(this.newCrew);
        //     this.showService.update(this.id, this.show)
        //         .subscribe(x => this.onShowSaved(x));
        // }

        let body = {
            crewName: this.newCrew.name,
            crewRole: this.newCrew.role,
            show_id: this.id,
            email: this.newCrew.email,
            phone_num: this.newCrew.phoneNumber
        };
        this.http.post('http://18.221.82.70/newCrew', body).subscribe(data => {});
        this.newCrew = new Crew();
    }

    private onShowSaved(show: Show) {
       this.newCrew = new Crew();
    }

    delete(crewMem: Crew) {
        this.crew = this.crew.filter(x => x !== crewMem);
        const index = this.crew.indexOf(crewMem);
        this.crew.splice(index, 0);
        // this.showService.update(this.id, this.show)
        // .subscribe(x => this.onAccountSaved(x));
        this.newUrl = 'http://18.221.82.70/deleteCrew/' + crewMem.id; 
        this.http.delete<void>(this.newUrl).subscribe(
        );
    }

    private onAccountSaved() {
        console.log("saved");
    }

    edit(cr: Crew) {
        this.newCrew = cr;
    }

    closed() {
        this.newCrew = new Crew();
    }

    saved() {
        // this.showService.update(this.id, this.show)
        //     .subscribe(x => this.onAccountSaved();
        var body = {
            crewName: this.newCrew.name,
            crewRole: this.newCrew.role,
            email: this.newCrew.email,
            phone_num: this.newCrew.phoneNumber
        };
        this.newUrl = 'http://18.221.82.70/updateCrew/' + this.newCrew.id;
        this.http.put<Crew>(this.newUrl, body).subscribe(data => {});

        this.newCrew = new Crew();
    }
}