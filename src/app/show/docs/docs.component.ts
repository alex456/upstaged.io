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
          name: 'Actor Contract',
          id: 1,
          link: 'http://media.breakdownexpress.com/attachment/2011/9/1046333230108.pdf'
        },
        {
          name: 'Actor Payment Guidelines',
          id: 2,
          link: 'https://www.dol.gov/whd/regs/compliance/whdfs71.pdf'
        },
    ]
    });
  }

  ngOnInit() {
  }

}