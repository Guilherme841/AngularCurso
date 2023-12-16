import { TestBed } from '@angular/core/testing';

import { GetServeService } from './get-serve.service';

describe('GetServeService', () => {
  let service: GetServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
