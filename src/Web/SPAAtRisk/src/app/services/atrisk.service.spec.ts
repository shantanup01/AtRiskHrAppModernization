import { TestBed } from '@angular/core/testing';

import { AtriskService } from './atrisk.service';

describe('AtriskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtriskService = TestBed.get(AtriskService);
    expect(service).toBeTruthy();
  });
});
