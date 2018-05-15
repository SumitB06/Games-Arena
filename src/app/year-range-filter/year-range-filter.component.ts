import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-year-range-filter',
  templateUrl: './year-range-filter.component.html',
  styleUrls: ['./year-range-filter.component.css']
})
export class YearRangeFilterComponent implements OnInit {

  @Input() filterKey: string = '';
  @Input() releaseYearsRange: number[];
  constructor() { }

  ngOnInit() {
  }

}