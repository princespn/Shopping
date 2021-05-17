import { Injectable } from '@angular/core';
import {  EMPTY } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { environment } from '@environments/environment';
import { stringify } from 'qs';
import { serialize } from 'object-to-formdata';
import {DifferenceBetweenTwoObjects} from '@gomcodoctor/_helper/differenceBetweenObjects';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  baseApiUrl = `${environment.apiPath.baseApiUrl}api/`;
  baseApiHost = environment.apiPath.apiHost;

  protected resource = '';
  protected canCache = false;
  cache = {};

  constructor(private http: HttpClient) {}

  postBulk(data, resource = null, params = null){
    return this.post(data, resource + '/bulk', params);
  }

  post(data, resource = null, params = null, options = {}, multipart = false) {
    if (params) {
      return this.http.post(
          this.getItemUrl(resource ? resource : this.resource, params),
          this.convertToMultipartParam(data, multipart), options
      );
    }
    return this.http.post(
        this.getCollectionUrl(resource ? resource : this.resource, data),
        this.convertToMultipartParam(data, multipart), options
    );
  }

  postRequest(data, resource = null, params = null) {
    return this.post(data, resource, params);
  }

  getList(data, resource = null): any {
    // const {order, dir, ...finalData} = data;
    // if (order && dir) { finalData.order = {[order]: dir}; }

    // console.log(data);

    const finalFilterString = stringify(data, {
      arrayFormat: 'brackets',
      encoder: (str, defaultEncoder, charset, type): any => {
        if (type === 'key') {
          return str.replace('__', '.');
        }
        if (type === 'value' && (str === '' || str === undefined || str === null)){
          return undefined;
        }
        return str;
      },
    });

    const options = {
      params: new HttpParams({ fromString: finalFilterString }),
    };

    if (this.cache[this.resource]) {
      return this.cache[this.resource];
    }

    if (this.canCache) {
      return this.cacheListData(
        this.getCollectionUrl(resource ? resource : this.resource, data),
        options
      );
    } else {
      return this.http
        .get(
          this.getCollectionUrl(resource ? resource : this.resource, data),
          options
        )
        .pipe(
          map((response: any) => {
            return this.mapGetListData(response);
          })
        );
    }
  }

  cacheListData(data, options) {
    return (this.cache[this.resource] = this.http.get(data, options).pipe(
      map((response: any) => {
        return this.mapGetListData(response);
      }),
      shareReplay(1),
      catchError((err) => {
        delete this.cache[this.resource];
        return EMPTY;
      })
    ));
  }

  mapGetListData(response) {
    response.data = response['hydra:member'];
    response.count = response['hydra:totalItems'];
    // delete response['hydra:member'];
    // delete response['hydra:totalItems'];
    return response;
  }

  getOne(param, resource = null) {
    return this.http.get(
      this.getItemUrl(resource ? resource : this.resource, param)
    );
  }

  getItemUrl(resource, params): string {
    if (params && params.id && params.id['@id']) {
      params.id = params.id['@id'];
    }
    return params.url
      ? params.url
      : params.id && typeof params.id === 'string' && params.id.indexOf('/') > -1
      ? this.baseApiHost + (params.id ? params.id : '')
      : this.baseApiUrl + resource + (params.id ? '/' + params.id : '');
  }

  getCollectionUrl(resource, params = null): string {
    return params && params.url ? params.url : this.baseApiUrl + resource;
  }

  updateItem(data, params, resource = null) {
    return this.update(data, params, resource);
  }

  update(data, resource = null, params, options = {}, multipart = false) {
    let paramsToPatch: any = {};

    if (params.previousData){
      paramsToPatch = DifferenceBetweenTwoObjects(data, params.previousData);
    }
    else { paramsToPatch = data; }

    if (multipart) {
      paramsToPatch._method = 'PUT';
      return this.http.post(
          params
              ? this.getItemUrl(resource ? resource : this.resource, params)
              : this.getCollectionUrl(resource ? resource : this.resource, data),
          this.convertToMultipartParam(paramsToPatch, multipart));
    }
    else {
      return this.http.put(
        params
            ? this.getItemUrl(resource ? resource : this.resource, params)
            : this.getCollectionUrl(resource ? resource : this.resource, data),
        this.convertToMultipartParam(paramsToPatch, multipart)
      );
    }
  }

  delete(params, resource = null) {
    return this.http.delete(
      this.getItemUrl(resource ? resource : this.resource, params)
    );
  }

  deleteBulk(data, resource = null){
    return this.http.request('delete',
        this.getCollectionUrl(resource ? resource + '/bulk'  : this.resource, data),
        {body: data});
  }

  convertToMultipartParam(data, multipart: boolean) {
    return multipart ? serialize(data) : data;
  }
}
