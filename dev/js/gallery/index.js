class Gallery {
  constructor(container, pictures) {
    this.container = container;
    this.arrayOfPicture = pictures;
  }

  init() {
    console.log(this.container);
    console.log(this.arrayOfPicture);
  }
}

export default Gallery;
