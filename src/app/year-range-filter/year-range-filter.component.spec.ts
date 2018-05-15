import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearRangeFilterComponent } from './year-range-filter.component';

describe('YearRangeFilterComponent', () => {
  let component: YearRangeFilterComponent;
  let fixture: ComponentFixture<YearRangeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearRangeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearRangeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
