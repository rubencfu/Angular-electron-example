import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  clicks: number = 0;
  saved: boolean = true;
  constructor() { }

  ngOnInit(): void {
    
  }

  addClicks = (): void => {
    this.clicks++;
    this.saved = false;
  }

  save = (): void => {
    
  }

}
