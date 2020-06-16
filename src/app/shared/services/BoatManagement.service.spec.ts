/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BoatManagementService } from './BoatManagement.service';

describe('Service: BoatManagement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoatManagementService]
    });
  });

  it('should ...', inject([BoatManagementService], (service: BoatManagementService) => {
    expect(service).toBeTruthy();
  }));
});
