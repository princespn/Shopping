import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class PageService extends BaseService {
  protected resource = 'pages';
  protected canCache = true;
}
