import { Pipe, PipeTransform } from '@angular/core';
import { NamedRoutesService } from '@gomcodoctor/services/route/named-routes.service';

@Pipe({
  name: 'namedRoutePipe'
})
export class NamedRoutePipePipe implements PipeTransform {

  constructor(private _namedRoutesService: NamedRoutesService) {

  }

  transform(routeName: string, params: any = {}): unknown {
    return this._namedRoutesService.getRoute(routeName, params || {});
  }

}
