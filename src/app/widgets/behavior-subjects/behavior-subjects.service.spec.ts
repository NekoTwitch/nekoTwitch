import { TestBed } from '@angular/core/testing';

import { BehaviorSubjectsService } from './behavior-subjects.service';

describe('BehaviorSubjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BehaviorSubjectsService = TestBed.get(BehaviorSubjectsService);
    expect(service).toBeTruthy();
  });
});
