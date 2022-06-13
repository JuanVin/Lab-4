import { TestBed } from '@angular/core/testing';

import { ServinstrumentoService } from './servinstrumento.service';

describe('ServinstrumentoService', () => {
  let service: ServinstrumentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServinstrumentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
