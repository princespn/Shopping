import { Injectable } from '@angular/core';
import { BaseService } from '@gomcodoctor/services/base.service';


@Injectable({
  providedIn: 'root',
})
export class AccountService extends BaseService {

  protected resource = 'users';
  private loginResource = 'login_check';
  private signupResource = 'register';
  private emailConfirmResource = 'emailconfirm';
  private forgotPasswordResource = 'forgotpassword';
  private resetPasswordResource = 'resetpassword';

  // static authFactory(): AuthLoader {
  //   return new AuthStaticLoader({
  //     backend: {
  //       endpoint: `${environment.apiPath.baseApiUrl}api/login_check`,
  //       params: []
  //     },
  //     storage: localStorage,
  //     storageKey: 'currentUser',
  //     loginRoute: ['login'],
  //     defaultUrl: ''
  //   });
  // }

  login(data) {
    return this.postRequest(data, this.loginResource);
  }

  signup(data) {
    return this.postRequest(data, this.signupResource);
  }

  confirmUserEmail(data) {
    return this.postRequest(data, this.emailConfirmResource);
  }

  forgotPassword(data) {
    return this.postRequest(data, this.forgotPasswordResource);
  }

  resetPassword(data) {
    return this.postRequest(data, this.resetPasswordResource);
  }
}
