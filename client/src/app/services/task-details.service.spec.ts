import { TestBed, inject } from '@angular/core/testing';

import { TaskDetailsService } from './task-details.service';

describe('TaskDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskDetailsService]
    });
  });

  it('should be created', inject([TaskDetailsService], (service: TaskDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
