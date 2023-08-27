import { TestBed } from '@angular/core/testing';

import { ApiDataRetrievalService } from './api-data-retrieval.service';

describe('ApiDataRetrievalService', () => {
  let service: ApiDataRetrievalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDataRetrievalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
