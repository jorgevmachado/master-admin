export interface Baserest<T> {
  getAll(page?: any, size?: any, filter?: any, sort?: any): any;
  getList(): any;
  getById(T): any;
  save(T): any;
  update(T): any;
  delete(T): any;
}
