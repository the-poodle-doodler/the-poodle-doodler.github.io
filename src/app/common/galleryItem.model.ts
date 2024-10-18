export class GalleryItem {
  top: string;
  left: string;
  rotation: string;

  constructor(
    public id: string,
    public title: string,
    public description: string,
    public aspectRatio: number,
    public t: number,
    public l: number,
    public r: number,
    public extension: string = 'jpg'
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.aspectRatio = aspectRatio;
    this.top = `${t}px`;
    this.left = `${l}px`;
    this.rotation = `${r}deg`;
    this.extension = extension;
  }
}
