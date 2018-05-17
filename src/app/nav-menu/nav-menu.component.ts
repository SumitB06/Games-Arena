import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  @Input() filterKey: string = '';
  @Output() displayFilter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showFilters(filterKey) {
    this.filterKey = this.filterKey === filterKey ? '' : filterKey;
    this.displayFilter.emit(this.filterKey);
  }
}