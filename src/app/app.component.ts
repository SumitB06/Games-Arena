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
  page: number = 1;
  shownPerPage: number = 8;
  showOnlyEditorsChoices: boolean = false;
  allGenresList: any = {};
  allPlatformsList: any = {};
  releaseYearsRange: number[] = [];
  
  filteredList: any[] = [];
  filteredResults: number = 0;
  titleSearched: string = '';
  filteredYears: number[] = [];
  filterKey: string = '';
  filteredRating: number = 0;


  constructor(private gamesApiService: GamesListApiService) {}

  ngOnInit() {
    this.gamesApiService.retrieveGamesList().subscribe(res => {
      this.allGamesList = res.json();
      this.updateGamesList();
      
      this.releaseYearsRange = this.filteredYears;
      this.allGamesList.forEach(game => {
        /* get unique genres list */
        game.genre.split(', ').forEach(element => {
          if (element.trim() === '') element = 'any';
          this.allGenresList[element] = true;
        });
        /* get unique platforms list*/
        this.allPlatformsList[game.platform] = true;
      });
    });
  }

  updateGamesList() {
    this.dataReceived = false;
    this.filteredList = this.getFilteredList();
    this.setCurrentDisplayedList();
    
    this.setListFilters();
    this.dataReceived = true;
  }

  setCurrentDisplayedList() {
    this.maxPages = Math.ceil(this.filteredList.length / this.shownPerPage);
    if (this.page > this.maxPages) this.page = 1;
    this.gamesList = this.filteredList.slice((this.page * this.shownPerPage) - this.shownPerPage, this.page * this.shownPerPage);
  }

  setListFilters() {
    /* Set filter props based on current filtered list */
    this.filteredResults = this.filteredList.length;

    if (!this.filteredYears.length) this.filteredYears = [9999, 0];
    // if (Object.keys(this.allGenresList).length) Object.keys(this.allGenresList).forEach(key => this.allGenresList[key] = false);
    // if (Object.keys(this.allPlatformsList).length) Object.keys(this.allPlatformsList).forEach(key => this.allPlatformsList[key] = false);

    if (this.filteredList.length) {
      this.filteredList.forEach(game => {
        /* game.genre.split(', ').forEach(element => {
          if (element.trim() === '') element = 'any';
          this.allGenresList[element] = true;
        });
        this.allPlatformsList[game.platform] = true; */
        if (game.release_year < this.filteredYears[0]) this.filteredYears[0] = game.release_year;
        if (game.release_year > this.filteredYears[1]) this.filteredYears[1] = game.release_year;
      });
    }

  }

  /* Filter list based on ... */
  getFilteredList() {
    /* ... searched title */ 
    let list = this.titleSearched.trim() === '' ? this.allGamesList : this.allGamesList.filter(game => game.title.toString().indexOf(this.titleSearched) > 0);
    /* ... editor's choice key */
    list = this.showOnlyEditorsChoices ? list.filter(game => game.editors_choice.toUpperCase() === 'Y') : list;
    /* ... filtered years */
    list = this.filteredYears.length ? list.filter(game => game.release_year >= this.filteredYears[0] && game.release_year <= this.filteredYears[1]) : list;
    /* ... filtered genres */
    list = Object.keys(this.allGenresList).length ? list.filter(game => {
      let hasGenre = false;
      game.genre.split(', ').forEach(genre => {
        if (genre.trim() === '') genre ='any';
        hasGenre = hasGenre || this.allGenresList[genre];
      });
      return hasGenre;
    }) : list;
    /* ... filtered platforms */
    list = Object.keys(this.allPlatformsList).length ? list.filter(game => this.allPlatformsList[game.platform]) : list;
    /* ... filtered ratings */
    list = list.filter(game => game.score >= this.filteredRating);

    return list;
  }

  resetPageAndUpdateList() {
    this.page = 1;
    this.updateGamesList();
  }

  toggleEditorsChoiceFilter(toggle) {
    this.showOnlyEditorsChoices = toggle;
    this.resetPageAndUpdateList();
  }

  searchedTitle(title) {
    this.titleSearched = title;
    this.resetPageAndUpdateList();
  }

  displayFilter(filterKey) {
    this.filterKey = filterKey;
  }

  yearFilters(filteredYears) {
    this.filteredYears = filteredYears;
    this.resetPageAndUpdateList();
  }

  ratingFilters(minRating) {
    this.filteredRating = minRating;
    this.resetPageAndUpdateList();
  }
}