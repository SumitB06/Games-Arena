import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  @Output() displayFilter: EventEmitter<string> = new EventEmitter();
  filterKey: string = '';

  constructor() { }

  ngOnInit() {
  }

  showFilters(filterKey) {
    this.filterKey = this.filterKey === filterKey ? '' : filterKey;
    this.displayFilter.emit(this.filterKey);
  }
}