import {Component, HostListener, Input, OnInit} from '@angular/core';
import {GalleryItem} from "../common/galleryItem.model";
import {NgIf, NgOptimizedImage, NgStyle} from "@angular/common";

@Component({
  selector: 'pd-sticker',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, NgStyle],
  templateUrl: './sticker.component.html',
  styleUrl: './sticker.component.css'
})
export class StickerComponent implements OnInit {
  @Input() img?: GalleryItem;
  targetSize: number = 300;

  windowWidth = window.innerWidth;

  // Constructor
  ngOnInit() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(_event?: any) {
    this.windowWidth = window.innerWidth;
  }

  private getMaxWidth(): number {
    return this.windowWidth - 80;
  }

  getWidth(): number {
    if (!this.img) {
      return 0;
    }
    let isPortrait: boolean = this.img.aspectRatio >= 1;
    if (isPortrait) {
      return this.targetSize;
    } else if (this.getMaxWidth() < this.targetSize / this.img.aspectRatio) {
      return this.getMaxWidth();
    } else {
      return this.targetSize / this.img.aspectRatio;
    }
  }

  getHeight(): number {
    if (!this.img) {
      return 0;
    }
    let isPortrait: boolean = this.img.aspectRatio > 1;
    if (isPortrait) {
      return this.targetSize * this.img.aspectRatio;
    } else if (this.getMaxWidth() < this.targetSize / this.img.aspectRatio) {
      return this.getMaxWidth() * this.img.aspectRatio;
    } else {
      return this.targetSize;
    }
  }

  protected readonly Math = Math;
}
