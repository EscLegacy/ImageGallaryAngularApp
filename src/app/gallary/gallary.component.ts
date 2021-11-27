import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  disabled: boolean = false;

  disable() {
    this.disabled = true;

  }

  images = [
    {
      "id": 1,
      "path": "./assets/alena-aenami-15step.jpg"
    },
    {
      "id": 2,
      "path": "./assets/alena-aenami-away-1k.jpg"
    },
    {
      "id": 3,
      "path": "./assets/alena-aenami-lights1k1.jpg"
    },
    {
      "id": 4,
      "path": "./assets/alena-aenami-lost-1k.jpg"
    },
    {
      "id": 5,
      "path": "./assets/alena-aenami-sunset2k.jpg"
    },
    {
      "id": 6,
      "path": "./assets/andreas-rocha-twinspires02.jpg"
    },
    {
      "id": 7,
      "path": "./assets/andreas-rocha-twinspires02.jpg"
    },
    {
      "id": 8,
      "path": "./assets/benjamin-child-6msS8vT5pzw-unsplash.jpg"
    },
    {
      "id": 9,
      "path": "./assets/ferdinand-ladera-torrent-of-gelion-2k.jpg"
    },
    {
      "id": 10,
      "path": "./assets/rohit-tandon-9wg5jCEPBsw-unsplash.jpg"
    },
    {
      "id": 11,
      "path": "./assets/stefano-scuccimarra-practice8-2.jpg"
    },
    {
      "id": 12,
      "path": "./assets/wittydonut-ruination-jpg.jpg"
    },
    {
      "id": 12,
      "path": "./assets/yaroslav-golubev-landofhope.jpg"
    }
  ];

}
