
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private dataSource  = new BehaviorSubject<any>({});

  currentMessage = this.dataSource.asObservable();
  constructor() { }

  updatedMessage(data: any){
    this.dataSource.next(data);
  }

}