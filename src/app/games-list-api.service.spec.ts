import { TestBed, inject } from '@angular/core/testing';

import { GamesListApiService } from './games-list-api.service';

describe('GamesListApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamesListApiService]
    });
  });

  it('should be created', inject([GamesListApiService], (service: GamesListApiService) => {
    expect(service).toBeTruthy();
  }));
});
