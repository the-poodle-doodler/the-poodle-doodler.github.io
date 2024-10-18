import {Component, Input} from '@angular/core';
import {GalleryItem} from "../common/galleryItem.model";
import {NgIf, NgOptimizedImage, NgStyle} from "@angular/common";

@Component({
  selector: 'pd-sticker',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, NgStyle],
  templateUrl: './sticker.component.html',
  styleUrl: './sticker.component.css'
})
export class StickerComponent {
  @Input() img?: GalleryItem;

}
