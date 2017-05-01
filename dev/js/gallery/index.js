class Gallery {
  constructor(container, pictures) {
    this.container = container;
    this.arrayOfPicture = pictures;
    this.picturesLength = this.arrayOfPicture.length;
    this.isTouchDevice = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
    this.index = 1;
    this.counter = null;
    this.pictures = null;
    this.wrap = null;
  }

  init() {
    this.createButtons();
    this.createSlides();
    this.addEventListeners();
    this.adjustWrapPosition();
  }

  addEventListeners() {
    this.addResizeEvent();
    this.addClickEvent();
    this.isTouchDevice && this.addTouchGesture();
  }

  get pictureWidth() {
    return this.container.clientWidth;
  }

  get wrapPictureWith() {
    return this.pictureWidth * this.picturesLength;
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

  adjustWrapPosition() {
    this.wrap.style.width = this.wrapPictureWith + 'px';
    this.wrap.style.left = this.pictureWidth * (this.index - 1) * -1 + 'px'

    this.pictures.forEach((img) => {
      img.style.width = this.pictureWidth + 'px'
    });
  }

  addResizeEvent() {
    let resizeTimer;

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.adjustWrapPosition();
      }, 200);
    });
  }

  addClickEvent() {
    const buttonPrev = this.container.querySelector('.prev');
    const buttonNext = this.container.querySelector('.next');
    buttonPrev.onclick = null //got prev;
    buttonNext.onclick = null //got next;
  }

  addTouchGesture() {
    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    this.container.addEventListener('touchstart', (event) => {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
    }, false);

    this.container.addEventListener('touchend', (event) => {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      handleGesure();
    }, false);

    const handleGesure = () => {
      if (touchendX < touchstartX) {
        //got next
      }
      if (touchendX > touchstartX) {
        //got prev
      }
    };
  }

}

export default Gallery;
