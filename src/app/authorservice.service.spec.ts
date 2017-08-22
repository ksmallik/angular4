import { TestBed, inject } from '@angular/core/testing';

import { AuthorserviceService } from './authorservice.service';

describe('AuthorserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorserviceService]
    });
  });

  it('should be created', inject([AuthorserviceService], (service: AuthorserviceService) => {
    expect(service).toBeTruthy();
  }));
});
