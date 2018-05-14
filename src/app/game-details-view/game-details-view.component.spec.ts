import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailsViewComponent } from './game-details-view.component';

describe('GameDetailsViewComponent', () => {
  let component: GameDetailsViewComponent;
  let fixture: ComponentFixture<GameDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
