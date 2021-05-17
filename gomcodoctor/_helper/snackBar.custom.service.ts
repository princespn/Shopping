import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
// @ts-ignore
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class SnackBarCustomService {
  constructor(private _snackBar: MatSnackBar, private _router: Router, private  translateService: TranslateService) {}

  openSnackBar(
      message: string,
      action = null,
      redirect = null,
      duration  = 2
  ) {
    this.translateService.get(message, {value: 'world'}).subscribe((res: string) => {
      console.log(res);
      const snackBarRef = this._snackBar.open(res, action, {
        duration: duration * 1000,
      });

      snackBarRef.afterDismissed().subscribe(() => {
        if (redirect) { this._router.navigateByUrl(redirect); }
      });

      snackBarRef.onAction().subscribe(() => {
        if (redirect) { this._router.navigateByUrl(redirect); }
      });
    });
  }
}
