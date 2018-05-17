import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-year-range-filter',
  templateUrl: './year-range-filter.component.html',
  styleUrls: ['./year-range-filter.component.css']
})
export class YearRangeFilterComponent implements OnInit {

  @Input() releaseYearsRange: number[];
  @Output() yearFilters: EventEmitter<number[]> = new EventEmitter();

  yearInputs: number[] = [];

  constructor() { }

  ngOnInit() {
    this.yearInputs = this.releaseYearsRange;
  }

  applyFilter(reset: boolean = false) {
    if (reset) this.yearInputs = this.releaseYearsRange;
    this.yearFilters.emit([this.yearInputs[0], this.yearInputs[1]]);
  }
}
