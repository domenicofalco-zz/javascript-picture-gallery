// import Gallery Class instance
import Gallery from './gallery';

// import gallery-type1 configuration
import { container, pictures } from './config-example/config-1';

// Class instantiation
document.addEventListener("DOMContentLoaded", () => {
  const gallery = new Gallery(container, pictures);
  gallery.init();

  /*
    It'd be obviously more then one slider with the same instance. Eg:

    const gallery2 = new Gallery(container2, pictures2);
    gallery2.init();
  */
});
