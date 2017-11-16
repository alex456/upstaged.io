import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UnionDocumentation } from '../../domain/models/union-documentation';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  public unions: UnionDocumentation[] = [];

  constructor(
    private route: ActivatedRoute
  ) {
    this.unions.push({
      unionName: 'Screen Actors Guild',
      id: 1,
      docs: []
    });
    this.unions.push({
      unionName: 'Another Union',
      id: 2,
      docs: [
        {
          name: 'Contract',
          id: 1,
          link: '#'
        },
        {
          name: 'Pay',
          id: 2,
          link: '#'
        },
    ]
    });
  }

  ngOnInit() {
  }

}
