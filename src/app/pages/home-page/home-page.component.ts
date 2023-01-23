import { Component, OnInit } from '@angular/core';
import { GameInterface } from 'src/app/core/models/game.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  games: GameInterface[] = [{
    image: "assets/images/halo-infinite.jpeg",
    title: "Halo infinite",
    price: "46.98€",
    discount: "20%"
  },{
    image: "assets/images/halo-infinite.jpeg",
    title: "Halo infinite",
    price: "46.98€",
    discount: ""
  },{
    image: "assets/images/halo-infinite.jpeg",
    title: "Halo infinite",
    price: "46.98€",
    discount: ""
  },{
    image: "assets/images/halo-infinite.jpeg",
    title: "Halo infinite",
    price: "46.98€",
    discount: ""
  },{
    image: "assets/images/halo-infinite.jpeg",
    title: "Halo infinite",
    price: "46.98€",
    discount: ""
  },{
    image: "assets/images/halo-infinite.jpeg",
    title: "Halo infinite",
    price: "46.98€",
    discount: ""
  },{
    image: "assets/images/halo-infinite.jpeg",
    title: "Halo infinite",
    price: "46.98€",
    discount: ""
  },{
    image: "assets/images/halo-infinite.jpeg",
    title: "Halo infinite",
    price: "46.98€",
    discount: ""
  },{
    image: "assets/images/halo-infinite.jpeg",
    title: "Halo infinite",
    price: "46.98€",
    discount: ""
  },{
    image: "assets/images/halo-infinite.jpeg",
    title: "Halo infinite",
    price: "46.98€",
    discount: ""
  },{
    image: "assets/images/halo-infinite.jpeg",
    title: "Halo infinite",
    price: "46.98€",
    discount: ""
  },{
    image: "assets/images/halo-infinite.jpeg",
    title: "Halo infinite",
    price: "46.98€",
    discount: ""
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
