class Gallery {
  constructor(container, pictures) {
    this.container = container;
    this.arrayOfPicture = pictures;
    this.picturesLength = this.arrayOfPicture.length;
    this.index = 1;
    this.counter = null;
    this.pictures = null;
    this.wrap = null;
  }

  init() {
    this.createButtons();
    this.createSlides();
  }

  get preloadPictureSrc() {
    return this.arrayOfPicture.map((pic, i) => {
      // caching the pictures in advance
      const img = new Image();
      img.src = pic;
      //

      return img.src;
    })
  }

  createButtons() {
    this.container.innerHTML += `<a class="button prev" href="javascript:void(0);">prev</a>`;
    this.container.innerHTML += `<a class="button next" href="javascript:void(0);">next</a>`;
  }

  createSlides() {
    this.container.innerHTML += `<div class='gallery-wrap scroll' />`;
    this.container.innerHTML += `<div class='counter' />`;

    this.preloadPictureSrc.forEach((src, i) => {
      const className = (() => {
        if(i === 0) return 'pic first';
        if(i === this.picturesLength -1 ) return 'pic last';
        return 'pic';
      })();

      this.container.querySelector('.gallery-wrap').innerHTML += `<img class='${className}' src='${src}' />`;
    });

    this.wrap = this.container.querySelector('.gallery-wrap');
    this.pictures = this.wrap.querySelectorAll('img');
    this.counter = this.container.querySelector('.counter');
  }
}

export default Gallery;
