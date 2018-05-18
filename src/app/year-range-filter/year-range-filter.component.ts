import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-year-range-filter',
  templateUrl: './year-range-filter.component.html',
  styleUrls: ['./year-range-filter.component.css']
})
export class YearRangeFilterComponent implements OnInit {

  @Input() releaseYearsRange: number[];
  @Input() yearInputs: number[];
  @Output() yearFilters: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  applyFilter(reset: boolean = false) {
    if (reset) {
      this.yearInputs[0] = this.releaseYearsRange[0];
      this.yearInputs[1] = this.releaseYearsRange[1]
    }
    this.yearFilters.emit();
  }
}
