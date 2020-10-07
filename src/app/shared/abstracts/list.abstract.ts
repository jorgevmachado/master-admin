import {Directive, ElementRef, Injector, OnInit, ViewChild} from '@angular/core';
import {BaseResourceModel} from '../model/base-resource.model';
import {NotificationService} from '../../core/services/notification.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {ServiceAbstract} from './service.abstract';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {Paginator} from '../model/paginator.model';
import {PATH} from '../../app.constants';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class ListAbstract <T extends BaseResourceModel> implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  abstract displayedColumns: Array<string>;

  protected datePipe: DatePipe;
  protected notificationService: NotificationService;
  protected route: ActivatedRoute;
  protected router: Router;

  dataSource = new MatTableDataSource<T>();
  endpoint: string;
  filter: any = [];
  filterTitle = 'Filtros';
  isfiltring = false;
  isLoading = false;
  order: any = {};
  pageIndex = 0;
  pageSize = 15;
  resultsLength = 0;
  selection = new SelectionModel<T>(true, []);
  title: string;

  protected constructor(protected service: ServiceAbstract<T>, protected injector: Injector) {
    this.notificationService = injector.get(NotificationService);
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.datePipe = this.injector.get(DatePipe);
  }

  ngOnInit(): void {
    this.paginator.page.subscribe(this.updateResourceSource.bind(this));
    this.updateResourceSource();
    this.onReceiveData();
  }

  onEdit(data?: T): void {
    this.router.navigate([`${this.endpoint}/${PATH.ACAO.EDIT.replace(':id', data.id.toString())}`]);
  }

  onDetail(data?: T): void {
    this.isLoading = true;
    this.router.navigate([`${this.endpoint}/${PATH.ACAO.DETAIL.replace(':id', data.id.toString())}`]);
  }

  goBack(): void {
    this.router.navigate([`${this.endpoint}`]);
  }

  onDelete(data?: T): void {}

  selectAll(): void {
    this.dataSource.data.forEach((resource: T) => {
      this.selection.select(resource);
    });
  }

  deselectAll(): void {
    this.selection.clear();
  }

  applyFilter(): void {
    this.updateResourceSource();
  }

  resetFilter(): void {
    for (const key of Object.getOwnPropertyNames(this.filter)) {
      if (this.filter[key]) {
        this.filter[key] = '';
      }
    }
    this.updateResourceSource();
  }

  setResource(resource: any): void {}

  onComplete(response: any, resourceUpdate?: boolean): void {}

  onSuccess(resource: any, resourceUpdate: boolean): void {
    this.setResource(resource);
    this.onComplete(resource, resourceUpdate);
    this.isLoading = false;
  }

  onError(error: any, resourceUpdate: boolean): void {
    this.onComplete(error, resourceUpdate);
    this.isLoading = false;
    throw error;
  }

  updateResourceSource(resource?: any): void {
    let resourceUpdate = false;
    for (const key of Object.getOwnPropertyNames(this.filter)) {
      if (this.filter[key]) {
        this.isfiltring = true;
      }
    }
    const filter = this.isfiltring ? this.filter : null;
    const order = this.order;
    const page = resource ? resource.page : 0;
    if (resource) {
      resourceUpdate = true;
    }
    this.isLoading = true;
    this.service
      .getAll(page, this.pageSize, filter, order)
      .subscribe((result: Paginator<T>) => this.onSuccess(result, resourceUpdate), error => this.onError(error, resourceUpdate));
  }

  onReceiveData(): void {
    this.endpoint = this.route.snapshot.parent.routeConfig.data.endpoint;
    this.title = this.route.snapshot.routeConfig.data.title;
  }

  sortResource(sort: Sort): void {
    this.paginator.pageIndex = 0;
    this.order.field = sort.active;
    this.order.direction = sort.direction;
    const filter = this.filter;
    const order = this.order;
    this.isLoading = true;
    this.selection.clear();
    this.service
      .getAll(0, this.pageSize, filter, order)
      .subscribe((result: Paginator<T>) => this.onSuccess(result, false), error => this.onError(error, false));
  }
}
