import { Pipe, PipeTransform } from '@angular/core';
import { get } from 'lodash';

@Pipe({
  name: 'nestedValue'
})
export class NestedValuePipe implements PipeTransform {

  transform(value: any, path: string, defaultValue = null): any {
    return get(value, path, defaultValue);
  }

}
