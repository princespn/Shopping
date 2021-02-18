import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class CountriesService extends BaseService {
  protected canCache = true;
  protected resource = 'countries';
}
