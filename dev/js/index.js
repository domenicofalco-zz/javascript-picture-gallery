// import Gallery Class instance
import Gallery from './gallery';

// import gallery-type1 configuration
import * as config from './config-example/config-1';
import * as config2 from './config-example/config-2';

// Class instantiation
document.addEventListener('DOMContentLoaded', () => {
  const gallery = new Gallery(config.container, config.pictures);
  gallery.init();

  const gallery2 = new Gallery(config2.container, config2.pictures);
  gallery2.init();
});
