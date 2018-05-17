import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isBoolean } from 'util';

@Component({
  selector: 'app-platform-filter',
  templateUrl: './platform-filter.component.html',
  styleUrls: ['./platform-filter.component.css']
})
export class PlatformFilterComponent implements OnInit {

  @Input() allPlatformsList: any;
  @Output() platformFilters: EventEmitter<any> = new EventEmitter();

  platformList: any[] = [];
  constructor() { }

  ngOnInit() {
    Object.keys(this.allPlatformsList).forEach(key => this.platformList.push({
      name: key,
      selected: this.allPlatformsList[key]
    }));
  }

  applyFilter(reset?: boolean) {
    if (isBoolean(reset)) this.platformList.forEach(item => item.selected = true);
    this.platformList.forEach(item => this.allPlatformsList[item.name] = item.selected);
    this.platformFilters.emit();
  }

}