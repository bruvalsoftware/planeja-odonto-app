import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../pages/auth/services';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    public authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.getToken()) {
      const authReq = req.clone({
        headers: req.headers.set(
          'Authorization',
          `Bearer ${this.authService.getToken()}`
        )
      });
      console.log('Making an authorized request');
      req = authReq;
    }

    /*
     * OLD:
     * return next.handle(req)
     *   .do(event => this.handleResponse(req, event),
     *      error => this.handleError(req, error));
     */

    return next.handle(req).pipe(
      tap(
        event => this.handleResponse(req, event),
        error => this.handleError(req, error)
      )
    );
  }


  handleResponse(req: HttpRequest<any>, event) {
    console.log('Handling response for ', req.url, event);
    if (event instanceof HttpResponse) {
      console.log('Request for ', req.url,
        ' Response Status ', event.status,
        ' With body ', event.body);
    }
  }

  handleError(req: HttpRequest<any>, event) {
    console.error('Request for ', req.url,
      ' Response Status ', event.status,
      ' With error ', event.error);
  }
}

