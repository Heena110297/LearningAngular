import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': "Token "+localStorage.jwtToken
   
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  addComment(payload , slug):Observable<Comment>{
    return this.http.post<any>(`http://conduit.productionready.io/api/articles/${slug}/comments`,{ comment: { body: payload }},httpOptions).pipe(map(data => data.comment));
  }
}