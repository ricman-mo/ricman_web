import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpRequest} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {ArticleDiscuss} from '../models'

@Injectable({ providedIn: 'root' })
export class ArticleDiscussService { 
  

  private ApiUrl = '/api/rest/v1/articlecomments';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'} )
  };

  constructor(
    private http: HttpClient) {

  }

  /** GET heroes from the server */
  getDisscuss (): Observable<ArticleDiscuss[]> {
    return this.http.get<ArticleDiscuss[]>(this.ApiUrl)
      .pipe(
        tap(_ => this.log('fetched ArticleDiscuss')),
        catchError(this.handleError<ArticleDiscuss[]>('getArticleDiscuss', []))
      );
  }

    /** GET hero by id. Will 404 if id not found */
    getById(id: string): Observable<ArticleDiscuss> {
      const url = `${this.ApiUrl}/${id}`;
      return this.http.get<ArticleDiscuss>(url).pipe(
        tap(_ => this.log('get ArticleDiscuss')),
        catchError(this.handleError<ArticleDiscuss>(`ArticleDiscuss id=${id}`))
      );
    }

    getByArticleId(id: string): Observable<ArticleDiscuss> {
      const url = `${this.ApiUrl}/byarticle?articleId=${id}`;
      return this.http.get<ArticleDiscuss>(url).pipe(
        tap(_ => this.log('get ArticleDiscuss')),
        catchError(this.handleError<ArticleDiscuss>(`ArticleDiscuss ArticleId=${id}`))
      );
    }
  
    //////// Save methods //////////
  
    /** POST: add a new hero to the server */
    addDisscuss (data: ArticleDiscuss): Observable<ArticleDiscuss> {
      return this.http.post<ArticleDiscuss>(this.ApiUrl, data, this.httpOptions).pipe(
        tap((newHero: ArticleDiscuss) => console.log(`added comment w/ id=${newHero.id}`)),
        catchError(this.handleError<ArticleDiscuss>('add ArticleDiscuss'))
      );
    }
  
    /** DELETE: delete the hero from the server */
    deleteDisscuss (data: ArticleDiscuss | number): Observable<ArticleDiscuss> {
      const id = typeof data === 'number' ? data : data.id;
      const url = `${this.ApiUrl}/${id}`;
  
      return this.http.delete<ArticleDiscuss>(url, this.httpOptions).pipe(
        tap(_ => this.log(`deleted ArticleDiscuss id=${id}`)),
        catchError(this.handleError<ArticleDiscuss>('delete Category'))
      );
    }

    UpdateDisscuss (data: any, commentId:String): Observable<any> {
      const req = new HttpRequest('PATCH', `${this.ApiUrl}/${commentId}`, data, this.httpOptions);
      return this.http.request(req);
    }

    private log(message: string) {  
      console.log(`ArticleDiscuss Service: ${message}`);
    }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(operation +':' + error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}