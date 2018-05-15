import { Component, OnInit } from '@angular/core';
import { GamesListApiService } from './games-list-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GamesListApiService]
})
export class AppComponent {
  dataReceived: boolean = false;
  allGamesList: any = [];
  maxPages: number = 1;
  gamesList: any = [];
  titleSearched: string = '';
  page: number = 1;
  shownPerPage: number = 8;
  showOnlyEditorsChoices: boolean = false;
  filteredResults: number = 0;
  genreList: any = {};
  releaseYearsRange: number[] = [9999, 0];
  filterKey: string = '';

  constructor(private gamesApiService: GamesListApiService) {}

  ngOnInit() {
    this.gamesApiService.retrieveGamesList().subscribe(res => {
      this.allGamesList = res.json();
      this.maxPages = Math.ceil(this.allGamesList.length / this.shownPerPage);
      this.updateGamesList();
      this.dataReceived = true;
    });
  }

  filterByTitle() {
    this.page = 1;
    this.updateGamesList();
  }

  updateGamesList() {
    const list = this.getFilteredList();

    this.maxPages = Math.ceil(list.length / this.shownPerPage);
    if (this.page > this.maxPages) this.page = 1;

    this.gamesList = list.slice((this.page * this.shownPerPage) - this.shownPerPage, this.page * this.shownPerPage);
    
    this.setListFilters(list);
  }

  setListFilters(list) {
    /* Set filter props based on current filtered list */
    this.filteredResults = list.length;

    list.forEach(game => {
      const genres = game.genre.split(', ');
      genres.forEach(element => {
        if (element.trim() !== '') this.genreList[element] = true;
      });
      
      if (game.release_year < this.releaseYearsRange[0]) this.releaseYearsRange[0] = game.release_year;
      if (game.release_year > this.releaseYearsRange[1]) this.releaseYearsRange[1] = game.release_year;
    });

  }

  getFilteredList() {
    /* Filter list based on searched title and editor's choice key */
    let list = this.titleSearched.trim() === '' ? this.allGamesList : this.allGamesList.filter(game => game.title.toString().indexOf(this.titleSearched) > 0);
    list = this.showOnlyEditorsChoices ? list.filter(game => game.editors_choice.toUpperCase() === 'Y') : list;
    return list;
  }

  toggleEditorsChoiceFilter(toggle) {
    this.page = 1;
    this.showOnlyEditorsChoices = toggle;
    this.updateGamesList();
  }

  searchedTitle(title) {
    this.page = 1;
    this.titleSearched = title;
    this.updateGamesList();
  }

  displayFilter(filterKey) {
    this.filterKey = filterKey;
  }
}