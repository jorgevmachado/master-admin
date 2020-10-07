export interface Paginator<T> {
  items: Array<T>;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
}
