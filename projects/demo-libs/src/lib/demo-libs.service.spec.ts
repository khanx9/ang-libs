import { TestBed } from '@angular/core/testing';

import { DemoLibsService } from './demo-libs.service';

describe('DemoLibsService', () => {
  let service: DemoLibsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoLibsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
