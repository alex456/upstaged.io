import { Component, Input, OnInit } from '@angular/core';
import { Cue } from '../../domain/';

@Component({
  selector: 'cues',
  templateUrl: './cues.component.html',
  styleUrls: ['./cues.component.css']
})
export class CuesComponent implements OnInit {
  @Input()
  public cues: Cue[] = [];

  constructor() {
    this.cues.push({
      name: "Lights on",
      type: "Lights",
      actionCall: "When Jeff walks on stage",
      called: true
    });
    this.cues.push({
      name: "Punch sound effect",
      type: "Sound",
      actionCall: "When Jeff gets punched",
      called: false
    })
  }

  ngOnInit() {
  }

}
