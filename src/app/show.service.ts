import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Show } from './domain';
import { SHOWS } from './mock-shows';


@Injectable()
export class ShowService {

  constructor() { }

  getShows(): Observable<Show[]> {
    return of(SHOWS);
  }

  getShow(id: number): Observable<Show> {
    return of(SHOWS.find(show => show.id === id));
  }
}