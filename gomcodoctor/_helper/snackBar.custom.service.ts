import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackBarCustomService {
  constructor(private _snackBar: MatSnackBar, private _router: Router) {}

  openSnackBar(
      message: string,
      action = null,
      redirect = null,
      duration  = 2
  ) {
    const snackBarRef = this._snackBar.open(message, action, {
      duration: duration * 1000,
    });

    snackBarRef.afterDismissed().subscribe(() => {
      if(redirect) this._router.navigateByUrl(redirect);
    });

    snackBarRef.onAction().subscribe(() => {
      if(redirect) this._router.navigateByUrl(redirect);
    });
  }
}
