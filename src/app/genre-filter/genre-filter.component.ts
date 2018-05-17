import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isBoolean } from 'util';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.css']
})
export class GenreFilterComponent implements OnInit {

  @Input() allGenresList: any;
  @Output() genreFilters: EventEmitter<any> = new EventEmitter();

  genreList: any[] = [];
  constructor() { }

  ngOnInit() {
    Object.keys(this.allGenresList).forEach(key => this.genreList.push({
      name: key,
      selected: this.allGenresList[key]
    }));
  }

  applyFilter(reset?: boolean) {
    if (isBoolean(reset)) this.genreList.forEach(item => item.selected = true);
    this.genreList.forEach(item => this.allGenresList[item.name] = item.selected);
    this.genreFilters.emit();
  }
}