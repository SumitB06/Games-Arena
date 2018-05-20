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

    if (this.totalPages - this.currentPage > 7) {
      range = -4;
      while (this.pageSelections.length < 10) {
        const pageNumber = this.currentPage + range++;
        if (pageNumber > 0) this.pageSelections.push(pageNumber);
      }
      this.pageSelections.push('...', this.totalPages);
    } else {
      range = 0;
      while (range != 12) {
        if (this.totalPages - range > 0) this.pageSelections.unshift(this.totalPages - range++);
        else break;
      }
    }

    // this.pageSelections.unshift('start');
    // this.pageSelections.push('end');
  }

  changePageNumber(page) {
    if (page !== '...') this.changePage.emit(page);
  }

}
