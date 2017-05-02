/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gallery__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_example_config_1__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_example_config_2__ = __webpack_require__(10);
// import Gallery Class instance


// import gallery-type1 configuration



// Class instantiation
document.addEventListener('DOMContentLoaded', function () {
  var gallery = new __WEBPACK_IMPORTED_MODULE_0__gallery__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__config_example_config_1__["a" /* container */], __WEBPACK_IMPORTED_MODULE_1__config_example_config_1__["b" /* pictures */]);
  gallery.init();

  var gallery2 = new __WEBPACK_IMPORTED_MODULE_0__gallery__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__config_example_config_2__["a" /* container */], __WEBPACK_IMPORTED_MODULE_2__config_example_config_2__["b" /* pictures */]);
  gallery2.init();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/index.js!./gallery.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/index.js!./gallery.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// JS Engine
__webpack_require__(0);

// Styles
__webpack_require__(1);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pictures; });
var container = document.getElementById('gallery-container');

var pictures = ['http://lorempixel.com/800/400/?1', 'http://lorempixel.com/800/400/?2', 'http://lorempixel.com/800/400/?3', 'http://lorempixel.com/800/400/?4', 'http://lorempixel.com/800/400/?5', 'http://lorempixel.com/800/400/?6', 'http://lorempixel.com/800/400/?7', 'http://lorempixel.com/800/400/?8', 'http://lorempixel.com/800/400/?9', 'http://lorempixel.com/800/400/?10'];



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gallery = function () {
  function Gallery(container, pictures) {
    _classCallCheck(this, Gallery);

    this.container = container;
    this.arrayOfPicture = pictures;
    this.picturesLength = this.arrayOfPicture.length;
    this.isTouchDevice = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
    this.index = 1;
    this.counter = null;
    this.pictures = null;
    this.wrap = null;
  }

  _createClass(Gallery, [{
    key: 'init',
    value: function init() {
      this.createButtons();
      this.createSlides();
      this.addEventListeners();
      this.adjustWrapPosition();
    }
  }, {
    key: 'addEventListeners',
    value: function addEventListeners() {
      this.addResizeEvent();
      this.addClickEvent();
      this.isTouchDevice && this.addTouchGesture();
    }
  }, {
    key: 'createButtons',
    value: function createButtons() {
      this.container.innerHTML += '<a class="button prev" href="javascript:void(0);">prev</a>';
      this.container.innerHTML += '<a class="button next" href="javascript:void(0);">next</a>';
    }
  }, {
    key: 'createSlides',
    value: function createSlides() {
      var _this = this;

      this.container.innerHTML += '<div class=\'gallery-wrap scroll\' />';
      this.container.innerHTML += '<div class=\'counter\' />';

      this.preloadPictureSrc.forEach(function (src, i) {
        var className = function () {
          if (i === 0) return 'pic first';
          if (i === _this.picturesLength - 1) return 'pic last';
          return 'pic';
        }();

        _this.container.querySelector('.gallery-wrap').innerHTML += '<img class=\'' + className + '\' src=\'' + src + '\' />';
      });

      this.wrap = this.container.querySelector('.gallery-wrap');
      this.pictures = this.wrap.querySelectorAll('img');
      this.counter = this.container.querySelector('.counter');

      this.setActivePicture();
      this.setCounter();
    }
  }, {
    key: 'adjustWrapPosition',
    value: function adjustWrapPosition() {
      var _this2 = this;

      this.wrap.style.width = this.wrapPictureWith + 'px';

      this.pictures.forEach(function (img) {
        img.style.width = _this2.pictureWidth + 'px';
      });

      this.wrap.style.left = this.pictureWidth * (this.index - 1) * -1 + 'px';
    }
  }, {
    key: 'setFirstSlide',
    value: function setFirstSlide() {
      this.wrap.style.left = 0 + 'px';
    }
  }, {
    key: 'setLastSlide',
    value: function setLastSlide() {
      var lastPic = this.wrap.querySelector('.last');
      this.wrap.style.left = lastPic.offsetLeft * -1 + 'px';
    }
  }, {
    key: 'goToPrevPicture',
    value: function goToPrevPicture() {
      this.index--;
      this.wrap.style.left = this.currentOffsetLeft + this.pictureWidth + 'px';

      //if isFirstPic
      if (this.index === 0) {
        this.setLastSlide();
        this.index = this.picturesLength;
      }

      // active state
      this.setActivePicture();
      this.setCounter();
    }
  }, {
    key: 'goToNextPicture',
    value: function goToNextPicture() {
      this.index++;

      this.wrap.style.left = this.currentOffsetLeft - this.pictureWidth + 'px';

      //if isLastPic
      if (this.index > this.picturesLength) {
        this.setFirstSlide();
        this.index = 1;
      }

      this.setActivePicture();
      this.setCounter();
    }
  }, {
    key: 'setActivePicture',
    value: function setActivePicture() {
      var activePic = this.wrap.getElementsByClassName('active')[0];

      if (activePic) {
        activePic.classList.remove('active');
      }

      this.pictures[this.index - 1].classList.add('active');
    }
  }, {
    key: 'setCounter',
    value: function setCounter() {
      this.counter.innerHTML = this.index + ' / ' + this.picturesLength;
    }
  }, {
    key: 'addResizeEvent',
    value: function addResizeEvent() {
      var _this3 = this;

      var resizeTimer = void 0;

      window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          _this3.adjustWrapPosition();
        }, 50);
      });
    }
  }, {
    key: 'addClickEvent',
    value: function addClickEvent() {
      var buttonPrev = this.container.querySelector('.prev');
      var buttonNext = this.container.querySelector('.next');
      buttonPrev.onclick = this.goToPrevPicture.bind(this);
      buttonNext.onclick = this.goToNextPicture.bind(this);
    }
  }, {
    key: 'addTouchGesture',
    value: function addTouchGesture() {
      var _this4 = this;

      var touchstartX = 0;
      var touchstartY = 0;
      var touchendX = 0;
      var touchendY = 0;

      this.container.addEventListener('touchstart', function (event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
      }, false);

      this.container.addEventListener('touchend', function (event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesure();
      }, false);

      var handleGesure = function handleGesure() {
        if (touchendX < touchstartX) {
          _this4.goToNextPicture();
        }
        if (touchendX > touchstartX) {
          _this4.goToPrevPicture();
        }
      };
    }
  }, {
    key: 'pictureWidth',
    get: function get() {
      return this.container.clientWidth;
    }
  }, {
    key: 'wrapPictureWith',
    get: function get() {
      return this.pictureWidth * this.picturesLength;
    }
  }, {
    key: 'preloadPictureSrc',
    get: function get() {
      return this.arrayOfPicture.map(function (pic, i) {
        // caching the pictures in advance
        var img = new Image();
        img.src = pic;
        //

        return img.src;
      });
    }
  }, {
    key: 'currentOffsetLeft',
    get: function get() {
      return parseInt(this.wrap.style.left.replace('px', ''));
    }
  }]);

  return Gallery;
}();

/* harmony default export */ __webpack_exports__["a"] = (Gallery);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/***/\n* {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background: #fafafa;\n}\n.container-1 {\n  max-width: 800px;\n}\n.container-2 {\n  max-width: 1200px;\n}\n.title {\n  margin: 10px auto;\n  color: #666;\n  font-size: 18px;\n}\n.scroll {\n  /* easeOutExpo */\n  -webkit-transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);\n  -moz-transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);\n  -o-transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);\n  transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);\n  -webkit-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n  -moz-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n  -o-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n.gallery {\n  margin: 0 auto 80px;\n  overflow: hidden;\n  background: #000;\n  position: relative;\n  width: 100%;\n}\n@media (max-width: 767px) {\n  .gallery {\n    max-width: 100%;\n  }\n}\n.gallery .gallery-wrap {\n  white-space: nowrap;\n  position: relative;\n  z-index: 1;\n}\n.gallery .gallery-wrap:after {\n  content: '';\n  clear: both;\n  display: block;\n}\n.gallery img {\n  display: inline-block;\n  white-space: normal;\n}\n.gallery .counter {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 10px;\n  background-color: #000;\n  z-index: 20;\n  color: #fff;\n  font-size: 12px;\n}\n.gallery .button {\n  width: 35px;\n  height: 35px;\n  margin-top: -17.5px;\n  box-shadow: 0px 0px 7px 3px rgba(255, 255, 255, 0.3);\n  background-image: url(" + __webpack_require__(9) + ");\n  background-repeat: no-repeat;\n  background-color: #000;\n  background-size: 45px auto;\n  position: absolute;\n  top: 50%;\n  z-index: 2;\n  border-radius: 50%;\n  text-indent: -9999px;\n  display: block;\n}\n.gallery .prev {\n  left: 15px;\n  background-position: 5px 4px;\n}\n.gallery .next {\n  right: 15px;\n  background-position: -16px 4px;\n}\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f0dbb8c03409b7c8dfe2929c285dc32b.png";

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pictures; });
var container = document.getElementById('gallery-container-2');

var pictures = ['http://lorempixel.com/800/400/?11', 'http://lorempixel.com/800/400/?12', 'http://lorempixel.com/800/400/?13', 'http://lorempixel.com/800/400/?14', 'http://lorempixel.com/800/400/?15'];



/***/ })
/******/ ]);