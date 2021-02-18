import { Injectable } from '@angular/core';
import { values } from 'lodash';

export interface INamedRoute {
  name: string;
  path: string;
}

export interface IRouter {
  config: object[];
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class NamedRoutesService {

  public get routes(): INamedRoute[] {
    return this._routes;
  }
  private _routes: INamedRoute[] = [];
  // private source: any[];

  private static getChildrenRoutes(route): any {
    if (route.children) { return route.children; }
    if (route.data && route.data.children) { return values(route.data.children); }
    return null;
  }

  /**
   */
  public setRoutes(routes: any[]): void {
    // this.source = [...routes];
    this.buildRoutes(routes);
  }

  /**
   */
  public getRoute(name: string, params: object = {}): string {
    const route = this._routes.find((item) => name === item.name);

    if (!route) {
      throw new Error(`Can't find route with name: "${name}"`);
    }

    let routePath = '/' + route.path;
    Object.keys(params).forEach((key) => {
      let value = params[key];
      if (typeof value === 'string' && value.indexOf('/') > -1){
        value = value.substring(value.lastIndexOf('/') + 1);
      }
      routePath = routePath.replace(new RegExp(`:${key}`, 'g'), value);
    });

    return routePath;
  }

  /**
   * Converts named routes to simple routes
   *
   *
   */

  private buildRoutes(routes: any[], parentName = [], parentPath = []): void {
    routes.map((route) => {
      const pathNames = parentName.concat();
      const pathLocations = parentPath.concat([route.path]);
      // stores a combination of name and route's full path
      if (route.path.trim() !== '' || (route.data && route.data.name)) {
        // if (undefined === props.path || '' === props.path.trim()) {
        //   throw new Error(`You should provide a path for the route named "${name}"`);
        // }
        pathNames.push(this.getNameFromRoute(route));
        this._routes.push({ name: pathNames.join('_'), path: pathLocations.join('/') });
        const fullName = this.getFullName(route);
        if (fullName) { this._routes.push({ name: fullName, path: pathLocations.join('/') }); }
      }

      const children = NamedRoutesService.getChildrenRoutes(route);

      return {
        ...route,
        children: children ? this.buildRoutes(children, pathNames, pathLocations) : null,
      };
    });
  }

  getNameFromRoute(route){
    if (route.data && route.data.name) { return route.data.name; }
    if (route.name) { return route.name; }
    return route.path.split('/')[0];
  }

  getFullName(route){
    if (route.data && route.data.fullName) { return route.data.fullName; }
    return null;
  }

  /**
   * Recursively get the full path for a specific route
   *
   * @param {string} target
   * @param {Array<any>} routes
   * @returns {string}
   */
  // private getFullPath(target: string, routes: any[]): string {
  //   for (const route of routes) {
  //     if (target === route.name) {
  //       return route.path;
  //     } else {
  //       const children = NamedRoutesService.getChildrenRoutes(route);
  //       if (children) {
  //         const subPath = this.getFullPath(target, children);
  //         if (undefined !== subPath) {
  //           return `${route.path}/${subPath}`;
  //         }
  //       }
  //     }
  //   }
  //
  //   return undefined;
  // }
}
