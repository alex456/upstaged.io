import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Script } from '../../domain/index';
import {ShowService} from '../../show.service';

import { DomSanitizer } from '@angular/platform-browser';





@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html'
})
export class ScriptsComponent implements OnInit {
    scripts: Script[] = [];
    private newScript = new Script();
    private id: number;
    private active: Script;


    constructor(
        private activatedRoute: ActivatedRoute,
        private showService: ShowService,
        private sanitizer: DomSanitizer
    ) {
    }

  ngOnInit() {
    this.newScript.id = 1;
    this.newScript.name = "Romeo and Juliet";
    this.newScript.url = "Romeo&Juliet.pdf";
    this.scripts.push(this.newScript);
    this.newScript = new Script();
    this.active = this.scripts[0];
    this.newScript.id = 2;
    this.newScript.name = "Hamlet";
    this.newScript.url = "Hamlet.pdf";
    this.scripts.push(this.newScript);
    this.newScript = new Script();
    //this.getScripts()
  }

  cleanURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  update(script: Script) {
      console.log("Changed to " , script.name);
      this.active = this.scripts[script.id - 1];
  }

  add(fileInput: Event) {
    var file = (<HTMLInputElement>fileInput.target).value;

    file = file.replace(/^.*?([^\\\/]*)$/, '$1');
    console.log(file);
    this.newScript.url = file;
    this.newScript.id = this.scripts.length + 1;
    this.newScript.name = this.newScript.url.slice(0, -4);
    this.scripts.push(this.newScript);
    this.newScript = new Script();
  }

  getFile(filePath) {
    return filePath.substr(filePath.lastIndexOf('\\') + 1).split('.')[0];
  }

  getScripts() {
    
  }
}