import { Injectable } from '@angular/core';
import {AuthGuard} from '@gomcodoctor/services/auth/auth.guard';

@Injectable()
export class GuestAuthGuard extends AuthGuard {

  protected async handleAuth(url: string): Promise<boolean> {
    if (!this.auth.isAuthenticated) {
      return Promise.resolve(true);
    }

    return this.router.navigate(['/']).then(() => false);
  }
}
