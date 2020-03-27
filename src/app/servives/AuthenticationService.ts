import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map,tap} from 'rxjs/operators';

import { User } from '../models';
import {TokenStorageService}  from './TokenStorageService'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private readonly APIUrl: string ='/api/rest/v1/authenticate';
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private sessionService: TokenStorageService) {
       
        this.currentUserSubject = new BehaviorSubject<User>(this.sessionService.getCurrentUser());
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public  UpdateCurrentUser(user:User){
        this.currentUserSubject.next(user);
    }

    login(username, password) {
        return this.http.post<any>(this.APIUrl, { 'name':username, 'password':password },
        { observe: 'response',
        headers: new HttpHeaders().set('Content-Type', 'application/json')})
        .pipe(map(response => {
                //store user details and jwt token in local storage to keep user logged in between page refreshes
                // const  headers = response.headers;
                // let location = headers.get('Location');
                // let token = location.split('/').pop();
   
                let body = response.body;
                let user = new User();
                user.username = body.name;
                user.token = body.token;
                user.sessionid = body.sessionid;
                this.sessionService.saveSessionId(user.sessionid);
                this.sessionService.saveToken(user.token);
                this.sessionService.saveUser(user);
                this.UpdateCurrentUser(user);
                return user;
            })
        )
    }

    logout() {
        // remove user from local storage and set current user to null
        this.sessionService.signOut();
        this.currentUserSubject.next(null);
    }
}