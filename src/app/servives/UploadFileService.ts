import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private ApiUrl = '/api/rest/v1/';  // URL to web api

  constructor(private http: HttpClient) { }

  upload(file: File, filedata): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('extradata', filedata);
    const req = new HttpRequest('POST', `${this.ApiUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFile(name): Observable<any> {
    return this.http.get(`${this.ApiUrl}/files/${name}`);
  }
  
  getImageFile(name): Observable<any> {
    return this.http.get(`${this.ApiUrl}/files/image/${name}`);
  }
}