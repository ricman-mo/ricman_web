
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleReadingChangeService {

  private dataSource  = new BehaviorSubject<any>({});

  currentArticle = this.dataSource.asObservable();
  constructor() { }

  updatedMessage(data: any){
    this.dataSource.next(data);
  }

}