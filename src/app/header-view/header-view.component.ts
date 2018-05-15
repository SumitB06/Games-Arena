import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-view',
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.css']
})
export class HeaderViewComponent implements OnInit {

  @Output() toggleEditorsChoiceFilter: EventEmitter<boolean> = new EventEmitter();
  @Output() searchedTitle: EventEmitter<string> = new EventEmitter();

  showOnlyEditorsChoices: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleEditorChoiceDisplay() {
    this.showOnlyEditorsChoices = !this.showOnlyEditorsChoices;
    this.toggleEditorsChoiceFilter.emit(this.showOnlyEditorsChoices);
  }

  filterByTitle(searched) {
    this.searchedTitle.emit(searched);
  }
}