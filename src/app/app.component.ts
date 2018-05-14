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
  shownPerPage: number = 10;

  constructor(private gamesApiService: GamesListApiService) {}

  ngOnInit() {
    this.gamesApiService.retrieveGamesList().subscribe(res => {
      this.allGamesList = res.json();
      this.maxPages = Math.ceil(this.allGamesList.length / this.shownPerPage);
      this.gamesList = this.allGamesList.slice((this.page * this.shownPerPage) - this.shownPerPage, this.page * this.shownPerPage);
      this.dataReceived = true;
    });
  }

  filterByTitle() {
    this.page = 1;
    this.updateGamesList();
  }

  updateGamesList() {
    const list = this.titleSearched.trim() === '' ? this.allGamesList : this.allGamesList.filter(game => game.title.toString().indexOf(this.titleSearched) > 0);
    this.maxPages = Math.ceil(list.length / this.shownPerPage);
    if (this.page > this.maxPages) this.page = 1;
    this.gamesList = list.slice((this.page * this.shownPerPage) - this.shownPerPage, this.page * this.shownPerPage);
  }
}