import { Component, OnInit, Input } from '@angular/core';
import { Show, Shows, Cue } from '../../domain/index';
import { ShowService } from '../../show.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'; 
import { HttpBackendService } from 'angular-in-memory-web-api';

@Component({
    selector: 'my-cues',
    templateUrl: './cues-details.component.html'
})

export class CuesDetailsComponent {
    private show = new Show();
    showLights: boolean;  
    showSounds: boolean;  
    private id: number;
    private cue: Cue[] = [];
    private newCue = new Cue();
    newUrl: string;

    constructor(
        private route: ActivatedRoute,
        private showService: ShowService,
        private http: HttpClient
      ) {}


    ngOnInit(): void {
        this.route.params.subscribe(x => this.onRouteParams(x));
        this.newCue.name = "";
    }

    private onRouteParams(params: any) {
        this.id = +params.id;
        this.cue = [];
        if (this.id.toString() == 'undefined' || !this.id) {
             this.id = 1;
        }
        if (params.id) {
        //   this.showService.getShow(this.id)
        //     .subscribe(x => this.onShowLoaded(x));

        this.newUrl = 'http://18.221.82.70/shows/' + this.id;
        
                this.http.get<Show>(this.newUrl).subscribe(data => {
                    console.log(data.showName);
                    this.show.name = data.showName;
        
        
                });
        
                    this.http.get<Cue>('http://18.221.82.70/cues').subscribe(data => {
                        //this.results = JSON.stringify(data['results']);
                        //console.log(JSON.stringify(data));
                        for(var i in data) {
                            
                            if (data[i].show_id == this.id) {
                                console.log(data[i]);
                                this.newCue.called= false;
                                this.newCue.name = data[i].cueName;
                                this.newCue.type = data[i].cueType;
                                this.newCue.actionCall = data[i].cueActionCall;
                                this.newCue.id = data[i].cue_id;
                                this.cue.push(this.newCue);
                                this.newCue = new Cue();
        
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

    addCue(): void {
        this.newCue.called = false;
        console.log("new crew add");
        this.cue.push(this.newCue);
        // this.showService.update(this.id, this.show)
        //     .subscribe(x => this.onShowSaved(x));

        var body = {
            cueName: this.newCue.name,
            cueType: this.newCue.type,
            show_id: this.id,
            cueActionCall: this.newCue.actionCall  
        };
        this.http.post('http://18.221.82.70/newCue', body).subscribe(data => {});
        
        this.newCue = new Cue();
    }

    private onShowSaved(show: Show) {
       this.newCue = new Cue(); 
    }

    delete(cu: Cue) {
        this.cue = this.cue.filter(x => x !== cu);
        const index = this.cue.indexOf(cu);
        this.cue.splice(index, 0);
        // this.showService.update(this.id, this.show)
        //     .subscribe(x => this.onAccountSaved(x));
        this.newUrl = 'http://18.221.82.70/deleteCue/' + cu.id; 
        this.http.delete<void>(this.newUrl).subscribe(
        );
    }

    private onAccountSaved(show: Show) {
        console.log("saved");
    }

    edit(cu: Cue) {
        this.newCue = cu;
    }

    closed() {
        this.newCue = new Cue();
    }

    saved() {
        // this.showService.update(this.id, this.show)
        //     .subscribe(x => this.onAccountSaved(x));

        var body = {
            cueName: this.newCue.name,
            cueType: this.newCue.type,
            cueActionCall: this.newCue.actionCall
            //Called: this.newCue.called
        };
        console.log(this.newCue.id);
        this.newUrl = 'http://18.221.82.70/updateCue/' + this.newCue.id;
        this.http.put<Cue>(this.newUrl, body).subscribe(data => {});
        this.newCue = new Cue();
    }
}