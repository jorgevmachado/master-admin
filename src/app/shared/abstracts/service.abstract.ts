import {BaseResourceModel} from '../model/base-resource.model';
import {Baserest} from '../model/base-rest.model';
import {HttpClient} from '@angular/common/http';
import {Injector} from '@angular/core';
import {Observable} from 'rxjs';
import {Paginator} from '../model/paginator.model';
import {API_BASE} from '../../app.constants';

export abstract class ServiceAbstract<T extends BaseResourceModel> implements Baserest<T> {
  protected http: HttpClient;

  protected constructor(
    protected injector: Injector,
    protected endPoint: string
  ) {
    this.http = injector.get(HttpClient);
  }
  getAll(page?: any, size?: any,  filter?: any, sort?: any): Observable<Paginator<T>> {
    const params = {
      page: page ? page : 0,
      size: size ? size : 15
    };
    return this.http.get<Paginator<T>>(`${API_BASE}/${this.endPoint}`, {params});
  }

  getList(): Observable<T> {
    return this.http.get<T>(`${API_BASE}/${this.endPoint}`);
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(`${API_BASE}/${this.endPoint}/` + id);
  }

  save(resource: T): Observable<T> {
    return this.http.post<T>(`${API_BASE}/${this.endPoint}`, resource);
  }

  update(resource: T): Observable<T> {
    return this.http.put<T>(`${API_BASE}/${this.endPoint}/${resource.id}`, resource);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<T>(`${API_BASE}/${this.endPoint}/` + id);
  }

}
