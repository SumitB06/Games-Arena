import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.css']
})
export class StarRatingsComponent implements OnInit {

  @Input() starValue: any;
  hasHalf: boolean = false;
  fullStars: number = 0;
  emptyStars: number = 10; 
  starArray: string[] = [];

  constructor() { }

  ngOnInit() {
    this.fullStars = Math.floor(this.starValue);
    this.hasHalf = this.starValue - Math.floor(this.starValue) > 0;
    this.emptyStars = this.emptyStars - this.fullStars - (this.hasHalf ? 1 : 0);

    while(this.fullStars) {
      this.starArray.push('fas fa-star');
      this.fullStars--;
    }

    if (this.starValue - Math.floor(this.starValue) > 0) {
      this.starArray.push('fas fa-star-half');
    }

    while(this.emptyStars) {
      this.starArray.push('far fa-star');
      this.emptyStars--;
    }

  }

}