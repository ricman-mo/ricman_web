import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../servives';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, 
        private router: Router,) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url} = request;
        return next.handle(request).pipe(
            catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                //location.reload(true);
                this.router.navigate(['/login'], { queryParams: { returnUrl: url} });
            }
            
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}