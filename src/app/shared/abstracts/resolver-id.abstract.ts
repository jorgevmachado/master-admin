import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ServiceAbstract} from './service.abstract';
import {Observable} from 'rxjs';

@Injectable()
export abstract class ResolverIdAbstract<T> implements Resolve<T> {
  protected constructor(protected service: ServiceAbstract<T>){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> | Promise<T> | T {
    return new Promise<T>(resolve => {
      this.service.getById(route.params.id).subscribe(resource => resolve(resource));
    });
  }
}
