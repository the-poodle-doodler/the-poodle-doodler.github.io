import {Component, HostListener, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from "./logo/logo.component";
import {StickerComponent} from "./sticker/sticker.component";
import {NgForOf} from "@angular/common";
import {GalleryItem} from "./common/galleryItem.model";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, LogoComponent, RouterOutlet, StickerComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  images: GalleryItem[] =[
    new GalleryItem('first-poodle', 'The first poodle doodle', 'Created for the #penstoretalents2024 competition', 1.31, 10, 17, 6),
    new GalleryItem('first-poodle', 'The first poodle doodle', 'Created for the #penstoretalents2024 competition', 1.31, 10, 17, 6),
    new GalleryItem('first-poodle', 'The first poodle doodle', 'Created for the #penstoretalents2024 competition', 1.31, 10, 17, 6),
    new GalleryItem('first-poodle', 'The first poodle doodle', 'Created for the #penstoretalents2024 competition', 1.31, 10, 17, 6),
    new GalleryItem('first-poodle', 'The first poodle doodle', 'Created for the #<a href="https://penstore.fi/fi/talents" target="_blank">penstoretalents2024</a> competition', 1.31, 10, 17, 6)
  ];
  public screenWidth: any;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.screenWidth = window.innerWidth;
  }

  columnRange(): number[] {
    let numberOfColumns = this.screenWidth / 350;
    console.log(numberOfColumns);
    return [...Array(Math.floor(numberOfColumns)).keys()];
  }
}
