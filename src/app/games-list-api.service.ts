import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GamesListApiService {

  _url: string = 'http://starlord.hackerearth.com/gamesext';
  constructor(private _http: Http) { }

  retrieveGamesList() {
    return this._http.get(this._url);
  }
}