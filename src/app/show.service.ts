import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Show, Cue, Crew } from './domain';
//import { SHOWS } from './mock-shows';
import 'rxjs/add/operator/catch';




@Injectable()
export class ShowService {
  protected url = '18.221.82.70';
  // protected endpoint = `${this.url}/shows`;

  constructor(
      protected httpClient: HttpClient
  ) {}

  getShows(): Observable<Show[]> {
    return this.httpClient.get<Show[]>(`${this.url}/shows`)
      .catch(x => this.handleException(x));
  }

  getShow(id: number): Observable<Show> {
    return this.httpClient.get<Show>(`${this.url}/shows/${id}`)
    .catch(x => this.handleException(x));

  }

  addShow(show: Show): Observable<Show> {
    console.log('Adding to API');
    return this.httpClient.post<Show>(`${this.url}/shows`, show)
      .catch(x => this.handleException(x));
  }

  public update(id: number, show: Show): Observable<Show> {
    return this.httpClient
        .put(`${this.url}/shows/${id}`, show)
        .catch(x => this.handleException(x));
  }

  public delete(id: number): Observable<void> {
    return this.httpClient
        .delete<void>(`${this.url}/shows/${id}`)
        .catch(x => this.handleException(x));
  }

  deleteCrew(show: Show, crew: Crew): Observable<Show> {
    return this.httpClient
      .delete<void>(`${this.url}/${show.id}/${crew.name}`)
      .catch(x => this.handleException(x));
}

  protected handleException(exception: any) {
    let message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
    alert(message);
    return Observable.throw(message);
  }


}
