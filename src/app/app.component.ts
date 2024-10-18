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
export class AppComponent {
  images: GalleryItem[] =[
    new GalleryItem('airedale-d-0', 'Airedale terrier', '0.5mm pointliner and brush pens on 300g/m<sup>2</sup> aquarelle paper.', 0.71, -20, 1, 3),
    new GalleryItem('poodle-g-0', 'Portrait of poodle', 'My first close-up. 0.5mm pointliner on 300g/m<sup>2</sup> aquarelle paper.', 1.42, 2, -4, -2),
    new GalleryItem('first-poodle', 'My first poodle doodle', 'Created for the #<a href="https://penstore.fi/fi/talents" target="_blank">penstoretalents2024</a> competition', 1.31, 10, 7, 6)
  ];
  currentPage = 0;

}
