import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CatFact } from '../cat-fact';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getCatFact(): Observable<CatFact> {
    const url = 'https://catfact.ninja/fact?max_length=1000';
    return this.http.get<CatFact>(url)
      .pipe(
        tap(_ => console.log('fetched fact')),
      );
  }
}
