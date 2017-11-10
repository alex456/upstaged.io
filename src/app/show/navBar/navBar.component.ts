import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../domain/index';

@Component({
    selector: 'my-navBar',
    templateUrl: './navBar.component.html',
    styleUrls: [ './navBar.component.css' ] 
})

export class NavBarComponent {

    @Input() public shows : Show[] = [];

    constructor() { }

    private newShow = new Show();
    private id: number;

    private addShow() {
        this.newShow.id = this.shows.length + 1;
        this.shows.push(this.newShow);
        this.newShow = new Show();
    }
        
    private getid(listID: number) {
        this.id = listID;
        console.log(this.id)
    }
}