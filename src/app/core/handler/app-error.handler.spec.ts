import { TestBed } from '@angular/core/testing';

import { AppErrorHandler } from './app-error.handler';

describe('AppErrorService', () => {
  let service: AppErrorHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppErrorHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
