import { Injectable } from '@angular/core';
import { Observable, from, of, pipe, BehaviorSubject, throwError } from 'rxjs';
import { map, retry, catchError, tap, first } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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
    'Content-Type': 'application/json',
  })
};


@Injectable()
export class AppObsService {
  private subject$: BehaviorSubject<Data[]> = new BehaviorSubject<Data[]>([]);
  public data$: Observable<Data[]> = this.subject$.asObservable();


  constructor(private http: HttpClient) {
    this.getAll().subscribe(
      courses => this.subject$.next(courses)
    );
  }

  getAll(): Observable<Data[]> {
    console.log('AppObsService.getAll:');
    return this.http.get<Data[]>(REST_URL + 'people/').pipe(
      map(arr => arr.slice(arr.length - 10).map(x => ({ name: x.name, id: x.id }) as Data)),
      retry(3),
      catchError(error => of(null))
    );
  }

  getData(): Observable<Data[]> {
    console.log('AppObsService.getData:');
    return this.data$;
  }

  addItem(item: Data | any): Observable<Data> {

    const obs = this.http.post<Data>(
      REST_URL + 'people/', item, httpOptions
    ).pipe(
      first(), catchError(this.handleError)
    );
    obs.subscribe(
      obj => {
        // test item for any error, then ...
        const data = this.subject$.getValue();
        // IMPORTANT: behave as immutable data (change reference)
        // otherwise event wil not occur because "same object"
        const newData = data.slice(0);
        newData.push(obj);
        this.subject$.next(newData);
      },
      (err: Error) => {
        console.log('AppObsService.addItem error: ' + JSON.stringify(err)); 
      }
    );
    return obs;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


}
