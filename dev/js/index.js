// import gallery-type1 configuration
import { galleryContainer, pictures } from './config/galleryType1';

// import Gallery Class instance
import Gallery from './gallery';

// Class instantiation
document.addEventListener("DOMContentLoaded", () => {
  const gallery = new Gallery(galleryContainer, pictures);
  gallery.init();
});
