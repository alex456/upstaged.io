import { CastMember } from '../../domain/models/cast-member';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {

  public castList: CastMember[] = [];

  constructor() { 
    this.castList.push({
      name: "Jimjam Flimflam",
      phoneNumber: "333-333-3333",
      email: "jjflam@hotmail.com",
      role: "Cast"
    });
    this.castList.push({
      name: "Michael Scott",
      phoneNumber: "123-456-7890",
      email: "mscott@dunder.com",
      role: "Crew"
    });
  }

  ngOnInit() {
  }

}
