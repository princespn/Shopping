import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '@gomcodoctor/services/auth/auth.service';

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {
  constructor(private _snackBar: MatSnackBar, private authService: AuthService) {}

  intercept(
      req: HttpRequest<any>,
      next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const method = req.method.toLowerCase();
    const notGET = method !== 'get';

    return next.handle(req).pipe(
        tap(
            event => {
              if (event instanceof HttpResponse) {
                if (notGET && event.ok) {
                  // this._snackBar.open('thanks');
                }
              }
            },
            error => {
              if (error instanceof HttpErrorResponse) {
                  if (error.status === 401 || error.status === 403){
                      this._snackBar.open('Session expired', null, {politeness: 'polite',
                          duration: 3000});
                      this.authService.invalidate();
                  }
                  if (notGET && !error.ok) {
                    let errorMsg = 'Error in Request';
                    if (error.error) {
                        errorMsg = error.error.message
                            ? error.error.message
                            : error.error['hydra:description'];
                    }
                    this._snackBar.open(errorMsg, null, {duration: 3000});
                }
              }
            }
        )
    );
  }
}
