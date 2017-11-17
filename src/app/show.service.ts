import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Show, Cue, Crew } from './domain';
import { SHOWS } from './mock-shows';





@Injectable()
export class ShowService {
  protected endpoint = 'api/shows';
  
  constructor(
      protected httpClient: HttpClient
  ) {}

  getShows(): Observable<Show[]> {
    return this.httpClient.get<Show[]>(this.endpoint)
      .catch(x => this.handleException(x));
  }

  getShow(id: number): Observable<Show> {
    return this.httpClient.get<Show>(`${this.endpoint}/${id}`)
    .catch(x => this.handleException(x));
    
  }

  addShow(show: Show): Observable<Show> {
    console.log("Adding to API");
    return this.httpClient.post<Show>(this.endpoint, show)
      .catch(x => this.handleException(x));
  }

  public update(id: number, show: Show): Observable<Show> {
    return this.httpClient
        .put(`${this.endpoint}/${id}`, show)
        .catch(x => this.handleException(x));
}

  deleteCrew(show: Show, crew: Crew): Observable<Show> {
    return this.httpClient
      .delete<void>(`${this.endpoint}/${show.id}/${crew.name}`)
      .catch(x => this.handleException(x));
}

  protected handleException(exception: any) {
    var message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
    alert(message);
    return Observable.throw(message);
  }
  

}