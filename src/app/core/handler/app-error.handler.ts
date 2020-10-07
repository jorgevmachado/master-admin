import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {NotificationService} from '../services/notification.service';
import {MESSAGE} from '../../app.constants';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(private injector: Injector) {
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any): void {
    const ns = this.injector.get(NotificationService);
    if (errorResponse instanceof HttpErrorResponse) {
      switch (errorResponse.status) {
        case 400:
          errorResponse.error && errorResponse.error.message ? ns.notify(errorResponse.error.message) : ns.notify(MESSAGE.ERROR.MSG001);
          break;
        case 401:
          ns.notify(MESSAGE.ERROR.MSG002);
          break;
        case 403:
          ns.notify(MESSAGE.ERROR.MSG002);
          break;
        case 404:
          ns.notify(MESSAGE.ERROR.MSG003);
          break;
        case 406:
          errorResponse.error && errorResponse.error.message ? ns.notify(errorResponse.error.message) : ns.notify(MESSAGE.ERROR.MSG001);
          break;
        case 409:
          errorResponse.error && errorResponse.error.message ? ns.notify(errorResponse.error.message) : ns.notify(MESSAGE.ERROR.MSG004);
          break;
        case 422:
          ns.notify(MESSAGE.ERROR.MSG001);
          break;
        case 500:
          ns.notify(MESSAGE.ERROR.MSG005);
          break;
        default :
          ns.notify(MESSAGE.ERROR.MSG001);
          break;
      }
      super.handleError(errorResponse);
    }
  }
}
