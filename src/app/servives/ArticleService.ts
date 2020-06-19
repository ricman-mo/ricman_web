import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Article} from '../models'

@Injectable({ providedIn: 'root' })
export class ArticleService { 

  private ApiUrl = '/api/rest/v1/articles';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'} )
  };

  constructor(
    private http: HttpClient) {

  }

  /** GET heroes from the server */
  getArticles (): Observable<Article[]> {
    return this.http.get<Article[]>(this.ApiUrl);
  }

    /** GET hero by id. Return `undefined` when id not found */
    getArticleNo404<Data>(id: number): Observable<Article> {
      const url = `${this.ApiUrl}/?id=${id}`;
      return this.http.get<Article[]>(url)
        .pipe(
          map(articles => articles[0]), // returns a {0|1} element array
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
          }),
          catchError(this.handleError<Article>(`getArticle id=${id}`))
        );
    }
  
    /** GET hero by id. Will 404 if id not found */
    getArticle(id: string): Observable<Article> {
      const url = `${this.ApiUrl}/${id}`;
      return this.http.get<Article>(url);
    }

     /** GET hero by id. Will 404 if id not found */
     getArticleByOwer(ower: string): Observable<Article[]> {
      const url = `${this.ApiUrl}/fromower?ower=${ower}`;
      return this.http.get<Article[]>(url).pipe(
        tap(_ => this.log('fetched Articles by ower')),
        catchError(this.handleError<Article[]>(`getArticle ower=${ower}`))
      );
    }
  
     /** GET hero by id. Will 404 if id not found */
    getArticleByCategory(categoryID: string): Observable<Article[]> {
      const url = `${this.ApiUrl}/fromcategory?id=${categoryID}`;
      return this.http.get<Article[]>(url).pipe(
        tap(_ => this.log('fetched Articles by categoryID')),
        catchError(this.handleError<Article[]>(`getArticle categoryID=${categoryID}`))
      );
    }
    /* GET heroes whose name contains search term */
    searchArticle(term: string): Observable<Article[]> {
      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      return this.http.get<Article[]>(`${this.ApiUrl}/?name=${term}`).pipe(
        tap(_ => this.log('search Article')),
        catchError(this.handleError<Article[]>('searchArticle', []))
      );
    }
  
    //////// Save methods //////////
  
    /** POST: add a new hero to the server */
    addArticle (data: Article): Observable<Article> {
      return this.http.post<Article>(this.ApiUrl, data, this.httpOptions).pipe(
        tap((newatricle: Article) => console.log(`added Article w/ id=${newatricle.id}`)),
        catchError(this.handleError<Article>('addArticleo'))
      );
    }

    updateArticle(data, articleId): Observable<any> {
      return this.http.patch(`${this.ApiUrl}/${articleId}`,data,this.httpOptions);
    }
  
    /** DELETE: delete the hero from the server */
    deleteArticle (data: Article | number): Observable<Article> {
      const id = typeof data === 'number' ? data : data.id;
      const url = `${this.ApiUrl}/${id}`;
  
      return this.http.delete<Article>(url, this.httpOptions).pipe(
        tap(_ => this.log(`deleted Article id=${id}`)),
        catchError(this.handleError<Article>('delete Article'))
      );
    }
    private log(message: string) {  
      console.log(`Article Service: ${message}`);
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