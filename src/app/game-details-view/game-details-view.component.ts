import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-details-view',
  templateUrl: './game-details-view.component.html',
  styleUrls: ['./game-details-view.component.css']
})
export class GameDetailsViewComponent implements OnInit {

  @Input() gameDetails: any;
  constructor() { }

  ngOnInit() {
  }

}