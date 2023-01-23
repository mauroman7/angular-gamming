import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GameInterface } from 'src/app/core/models/game.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() list: GameInterface[] = [{
    image: "images/halo-infinite.jpeg",
    title: "Halo infinite",
    price: "46.98€",
    discount: "20%"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
