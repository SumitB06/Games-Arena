import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderViewComponent } from './header-view/header-view.component';
import { ContainerViewComponent } from './container-view/container-view.component';
import { GameDetailsViewComponent } from './game-details-view/game-details-view.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { YearRangeFilterComponent } from './year-range-filter/year-range-filter.component';
import { PlatformFilterComponent } from './platform-filter/platform-filter.component';
import { GenreFilterComponent } from './genre-filter/genre-filter.component';
import { RatingFilterComponent } from './rating-filter/rating-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderViewComponent,
    ContainerViewComponent,
    GameDetailsViewComponent,
    StarRatingsComponent,
    NavMenuComponent,
    YearRangeFilterComponent,
    PlatformFilterComponent,
    GenreFilterComponent,
    RatingFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
