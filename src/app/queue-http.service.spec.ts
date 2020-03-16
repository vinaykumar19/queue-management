import { TestBed } from '@angular/core/testing';

import { QueueHttpService } from './queue-http.service';

describe('QueueHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueueHttpService = TestBed.get(QueueHttpService);
    expect(service).toBeTruthy();
  });
});
