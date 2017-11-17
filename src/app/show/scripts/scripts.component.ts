import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Script } from '../../domain/index';
import {ShowService} from '../../show.service';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html'
})
export class ScriptsComponent implements OnInit {
    scripts: Script[];
    private newScript = new Script();
    private id: number;

    constructor(
        private activatedRoute: ActivatedRoute,
        private showService: ShowService
    ) {
    }

  ngOnInit() {
    this.newScript.id = 1;
    this.newScript.name = "Romeo and Juliet";
    this.newScript.url = "Romeo&Juliet.pdf";
    //this.scripts.push(this.newScript);
    this.newScript = new Script();
    //this.getScripts()
  }

  getScripts() {
    
  }
}