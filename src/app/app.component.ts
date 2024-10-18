import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from "./logo/logo.component";
import {StickerComponent} from "./sticker/sticker.component";
import {NgForOf} from "@angular/common";
import {GalleryItem} from "./common/galleryItem.model";
import {NgxPaginationModule} from "ngx-pagination";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, LogoComponent, RouterOutlet, StickerComponent, NgForOf, NgxPaginationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{
  images: GalleryItem[] =[
    new GalleryItem('first-poodle', 'The first poodle doodle', 'Created for the #penstoretalents2024 competition', 1.31, 10, 17, 6),
    new GalleryItem('first-poodle', 'The first poodle doodle', 'Created for the #penstoretalents2024 competition', 1.31, 10, 17, 6),
    new GalleryItem('first-poodle', 'The first poodle doodle', 'Created for the #penstoretalents2024 competition', 1.31, 10, 17, 6),
    new GalleryItem('first-poodle', 'The first poodle doodle', 'Created for the #penstoretalents2024 competition', 1.31, 10, 17, 6),
    new GalleryItem('first-poodle', 'The first poodle doodle', 'Created for the #<a href="https://penstore.fi/fi/talents" target="_blank">penstoretalents2024</a> competition', 1.31, 10, 17, 6)
  ];
  currentPage = 0;
}
