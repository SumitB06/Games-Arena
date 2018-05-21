import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() currentPage: number;
  @Input() totalPages: number;
  @Output() changePage: EventEmitter<number> = new EventEmitter();

  pageSelections: any[] = [];

  constructor() { 
  }

  ngOnInit() {
  }

  ngOnChanges() {
    let range;
    this.pageSelections = [];
  
    if (this.totalPages - 1 <= 10) {
      let max = this.totalPages;
      while (max > 0) this.pageSelections.unshift(max--);
    } else {
      if (this.currentPage < 7) {
        let page = 1;
        while (this.pageSelections.length !== 10) this.pageSelections.push(page++);
        this.pageSelections.push('...');
      } else if (this.totalPages - this.currentPage < 6) {
        let max = this.totalPages;
        while (this.pageSelections.length !== 10) this.pageSelections.unshift(max--);
        this.pageSelections.unshift('...');
      } else {
        let range = -4;
        while (this.pageSelections.length !== 9) this.pageSelections.push(this.currentPage + range++);
        this.pageSelections.unshift('...');
        this.pageSelections.push('...');
      }
    }
  
    // this.pageSelections.unshift('start');
    // this.pageSelections.push('end');
  }

  changePageNumber(page) {
    if (page !== '...') this.changePage.emit(page);
  }

}
