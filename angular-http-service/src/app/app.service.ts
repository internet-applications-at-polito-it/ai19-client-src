import { Injectable } from '@angular/core';
import { Observable, from, of, pipe } from 'rxjs';
import { map, retry, catchError, tap, first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface Data {
  id: number;
  name: string;
}

const DATA: Data[] = [
  { id: 1, name: 'Luke' },
  { id: 2, name: 'Obiwan' }
];

const REST_URL = 'http://localhost:3000/';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};


@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Data[]> {
    console.log('AppService.getAll:');
    return this.http.get<Data[]>( REST_URL + 'people/').pipe(
      map( arr => arr.slice(arr.length - 10).map( x => ({ name: x.name, id: x.id }) as Data  )),
      retry(3),
      catchError( error => of(null) )
    );
  }

  addItem(item): Observable<Data> {

    console.log('AppService.addItem: ' + JSON.stringify(item));

    return this.http.post<Data>(
      REST_URL + 'people/', item , httpOptions
    ).pipe(
      first(),
      catchError( err => { console.error(err); return of(null); } )
    );
    // .subscribe( x => { console.log('Post: ' + JSON.stringify(x)); } );
  }

}
