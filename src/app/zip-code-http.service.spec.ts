import { TestBed, inject } from '@angular/core/testing';

import { ZipCodeHttpService } from './zip-code-http.service';

describe('ZipCodeHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZipCodeHttpService]
    });
  });

  it('should be created', inject([ZipCodeHttpService], (service: ZipCodeHttpService) => {
    expect(service).toBeTruthy();
  }));
});
