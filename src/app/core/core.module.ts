import {ErrorHandler, LOCALE_ID, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './material/material.module';
import {AuthGuard} from './guards/auth.guard';
import {JwtInterceptor} from './interceptors/jwt.interceptor';
import {AppErrorHandler} from './handler/app-error.handler';
import {NotificationService} from './services/notification.service';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: ErrorHandler, useClass: AppErrorHandler},
    {provide: LOCALE_ID, useValue: 'pt'}
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: [NotificationService, AuthGuard]
    };
  }
}
