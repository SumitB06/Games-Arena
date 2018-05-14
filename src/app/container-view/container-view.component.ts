import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container-view',
  templateUrl: './container-view.component.html',
  styleUrls: ['./container-view.component.css']
})
export class ContainerViewComponent implements OnInit {

  @Input() gamesList: any;
  @Input() loadingComplete: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}