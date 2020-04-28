import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ApiUrl = '/api/rest/v1/users';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'} )
  };
  constructor(private http: HttpClient) { }

  register(userName, password, displayName): Observable<HttpEvent<any>> {
    let data =new User();
    data.username = userName;
    data.password = password;
    data.displayName = displayName;
    const req = new HttpRequest('POST', this.ApiUrl, data, this.httpOptions);
    return this.http.request(req);
  }

  getUser(name): Observable<any> {
    return this.http.get(`${this.ApiUrl}/fromname?name=${name}`);
  }

  updateUser(id, display, gender, description, headerName): Observable<any> {
    let data = {
      userheadername: headerName,
      displayname: display,
      gender: gender,
      description: description
    }
    const req = new HttpRequest('PATCH', `${this.ApiUrl}/${id}`, data, this.httpOptions);
    return this.http.request(req);
  }
  
}