import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-filter',
  templateUrl: './rating-filter.component.html',
  styleUrls: ['./rating-filter.component.css']
})
export class RatingFilterComponent implements OnInit {

  @Input() filteredRating: number;
  @Output() minRatings: EventEmitter<number> = new EventEmitter();

  minRating: number = 0;
  starArray: string[] = [];
  constructor() { }

  ngOnInit() {
    if (this.filteredRating) this.minRating = this.filteredRating;
    this.setStars();
  }

  setStars(minRating: number = this.minRating) {
    let i = 1;
    this.starArray = [];
    while(i <= 10) {
      if (i <= minRating) {
        this.starArray.push('fas fa-star pl-2');
      } else {
        this.starArray.push('far fa-star pl-2');
      }
      i++;
    }
  }

  onStarClicked(index) {
    this.minRating = index;
    this.setStars();
  }

  applyFilter(reset: boolean = false) {
    if (reset) this.minRating = 0;
    this.minRatings.emit(this.minRating);
  }

}