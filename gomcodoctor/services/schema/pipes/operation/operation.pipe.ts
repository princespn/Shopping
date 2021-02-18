import { Pipe, PipeTransform } from '@angular/core';
import {SchemaService} from '@gomcodoctor/services/schema/schema.service';

@Pipe({
  name: 'operation'
})
export class OperationPipe implements PipeTransform {

  constructor(private schemaService: SchemaService) {
  }

  transform(value: string, param: string) {
    return this.schemaService.isActionExecutable(value, param);
  }

}
