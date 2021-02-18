import {parseHydraDocumentation} from '@api-platform/api-doc-parser';
import {Injectable} from '@angular/core';
import {environment} from '@environments/environment';
import {AuthService} from '@gomcodoctor/services/auth/auth.service';
import { from, of } from 'rxjs';
import {map} from 'rxjs/operators';
import {isEmpty} from 'lodash';

const getFieldsAsObject = array => array.reduce((a, b) => (a[b.name] = b, a), {});

interface ResourceMapping {
    operations: any;
    fields: any;
    readableFields: any;
    writableFields: any;
}

@Injectable({ providedIn: 'root' })
export class SchemaService {

    public apiSchemaOriginal: any;
    public apiSchema: any = {};
    baseApiUrl = `${environment.apiPath.baseApiUrl}api/`;

    constructor(private authService: AuthService) {
    }

    public apiDocumentationParser(){
        if (!isEmpty(this.apiSchema)) { return of(this.apiSchema); }
        const token = this.authService.token;
        if (!token)  { return of({}); }

        return from(parseHydraDocumentation(this.baseApiUrl, { headers: new Headers({Authorization : `Bearer ${token}`}) }))
            .pipe(map(({ api }: any) => {
                this.setApiSchema(api);
                return this.apiSchema;
            }));
    }

    public setApiSchema(apiSchema: any){
        this.apiSchemaOriginal = apiSchema;
        this.addAdditionPropertiesToSchema();
    }

    addAdditionPropertiesToSchema(){
        if (this.apiSchemaOriginal){
            this.apiSchemaOriginal.resources.forEach((resourceSchema, index, array) => {
                const resourceMapping: Partial<ResourceMapping> = {};
                resourceMapping.operations = getFieldsAsObject(resourceSchema.operations);
                resourceMapping.fields = getFieldsAsObject(resourceSchema.fields);
                resourceMapping.readableFields = getFieldsAsObject(resourceSchema.readableFields);
                resourceMapping.writableFields = getFieldsAsObject(resourceSchema.writableFields);
                this.apiSchema[resourceSchema.name] = {...resourceMapping};

                // apiSchema[resourceSchema.name].resourceMapping = resourceMapping;
                // this.apiSchema[resourceSchema.name].resourceSchema = resourceSchema;
            });
            console.log(this.apiSchema);
        }
    }

    isWritable(fieldName, resource){
        const schema = this.apiSchema[resource];
        return schema && schema.writableFields && schema.writableFields[fieldName];
    }

    isActionExecutable(actionName, resource){
        return this.apiDocumentationParser().pipe(map(value => {
            const schema = value[resource];
            return schema && schema.operations && schema.operations[actionName];
        }));
    }
}
