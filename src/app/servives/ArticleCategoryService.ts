import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {ArticleCategory} from '../models'

@Injectable({ providedIn: 'root' })
export class ArticleCategoryService { 
  

  private ApiUrl = '/api/rest/v1/categorys';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'} )
  };

  constructor(
    private http: HttpClient) {

  }

  /** GET heroes from the server */
  getCategorys (): Observable<ArticleCategory[]> {
    return this.http.get<ArticleCategory[]>(this.ApiUrl)
      .pipe(
        tap(_ => this.log('fetched categorys')),
        catchError(this.handleError<ArticleCategory[]>('getArticleCategory', []))
      );
  }

    /** GET hero by id. Return `undefined` when id not found */
    getCategoryNo404<Data>(id: number): Observable<ArticleCategory> {
      const url = `${this.ApiUrl}/?id=${id}`;
      return this.http.get<ArticleCategory[]>(url)
        .pipe(
          map(heroes => heroes[0]), // returns a {0|1} element array
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
          }),
          catchError(this.handleError<ArticleCategory>(`getCategory id=${id}`))
        );
    }
  
    /** GET hero by id. Will 404 if id not found */
    getCategory(id: string): Observable<ArticleCategory> {
      const url = `${this.ApiUrl}/${id}`;
      return this.http.get<ArticleCategory>(url).pipe(
        tap(_ => this.log('get Category')),
        catchError(this.handleError<ArticleCategory>(`getCategory id=${id}`))
      );
    }

     /** GET hero by id. Will 404 if id not found */
     getCategoryByOwer(ower: string): Observable<ArticleCategory[]> {
      const url = `${this.ApiUrl}/fromower?ower=${ower}`;
      return this.http.get<ArticleCategory[]>(url).pipe(
        tap(_ => this.log('fetched categorys by ower')),
        catchError(this.handleError<ArticleCategory[]>(`getCategory ower=${ower}`))
      );
    }
  
    /* GET heroes whose name contains search term */
    searchCategory(term: string): Observable<ArticleCategory[]> {
      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      return this.http.get<ArticleCategory[]>(`${this.ApiUrl}/?name=${term}`).pipe(
        tap(_ => this.log('search Category')),
        catchError(this.handleError<ArticleCategory[]>('searchCategory', []))
      );
    }
  
    //////// Save methods //////////
  
    /** POST: add a new hero to the server */
    addCategory (data: ArticleCategory): Observable<ArticleCategory> {
      return this.http.post<ArticleCategory>(this.ApiUrl, data, this.httpOptions).pipe(
        tap((newHero: ArticleCategory) => console.log(`added Category w/ id=${newHero.id}`)),
        catchError(this.handleError<ArticleCategory>('addCategoryo'))
      );
    }
  
    /** DELETE: delete the hero from the server */
    deleteCategory (data: ArticleCategory | number): Observable<ArticleCategory> {
      const id = typeof data === 'number' ? data : data.id;
      const url = `${this.ApiUrl}/${id}`;
  
      return this.http.delete<ArticleCategory>(url, this.httpOptions).pipe(
        tap(_ => this.log(`deleted Category id=${id}`)),
        catchError(this.handleError<ArticleCategory>('delete Category'))
      );
    }
  
    /** PUT: update the hero on the server */
    updateCategory (hero: ArticleCategory): Observable<any> {
      return this.http.put(this.ApiUrl, hero, this.httpOptions).pipe(
        catchError(this.handleError<any>('update Category'))
      );
    }

    private log(message: string) {  
      console.log(`Category Service: ${message}`);
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