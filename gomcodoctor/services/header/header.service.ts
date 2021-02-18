import { Injectable } from '@angular/core';
// import { IHeaderModel } from '@gomcodoctor/models/header.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderService extends BaseService {
  headerConfigData = {
    headerTitle: ``,
    isMenu: true
  };

  private _header = new BehaviorSubject<any>(this.headerConfigData);
  private _params = new BehaviorSubject<any>({});

  get header() {
    return this._header.asObservable();
  }

  updateHeader(data) {
    console.log("HAHA",data)
    this._header.next(Object.assign({}, data));
  }

  get params() {
    return this._params.asObservable();
  }

  updateParams(data) {
    this._params.next(Object.assign({}, data));
  }
}
