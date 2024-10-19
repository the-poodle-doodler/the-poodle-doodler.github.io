import {Component, Input} from '@angular/core';
import {GalleryItem} from "../common/galleryItem.model";
import {NgClass, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'pd-sticker',
  standalone: true,
  imports: [NgClass, NgIf, NgStyle],
  templateUrl: './sticker.component.html',
  styleUrl: './sticker.component.css'
})
export class StickerComponent {
  @Input() img?: GalleryItem;
}
