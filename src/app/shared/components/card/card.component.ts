import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GameInterface } from 'src/app/core/models/game.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item : GameInterface = {
    image: "images/halo-infinite.jpeg",
    title: "Halo infinite",
    price: "46.98€",
    discount: "20%"
  };
   
  constructor() { }

  ngOnInit(): void {
  }

}
