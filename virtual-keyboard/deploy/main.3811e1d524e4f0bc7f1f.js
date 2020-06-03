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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./virtual-keyboard/src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./virtual-keyboard/src/styles/stylesheet.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./virtual-keyboard/src/styles/stylesheet.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* ----------88888 reset --------------------- */\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n/* ----------- variables  ------------- */\n:root {\n\n    /* ----------- dimensions  ------------- */\n\n    /* -------------- colors  --------------- */\n\n    --background: #222;\n    --title: #666;\n    --textAreaBackground: #111;\n    --keyboard: #444;\n    --key-inactive: #111;\n    --key-active: #f00;\n    --key-symbol: #ddd;\n    --border: #777;\n    --info: #444;\n}\n\nbody {\n    background-color: var(--background);\n}\n\n/* ---- Virtual Keyboard ---- */\n.vk-container {\n    display: flex;\n    height: 100vh;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: center;\n    margin: 0 auto;\n    font-family: \"Arial\", sans-serif;\n}\n\n.vk-title {\n    text-align: center;\n    font-size: 40px;\n    font-weight: 100;\n    color: var(--title);\n    margin-bottom: 20px;\n}\n\n.vk-textarea {\n    display: block;\n    width: 800px;\n    height: 200px;\n    margin: 10px auto;\n    padding: 10px;\n    font-size: 26px;\n    color: rgb(190, 190, 190);\n    background-color: var(--textAreaBackground);\n    border: 1px solid var(--border);\n    border-radius: 8px;\n    resize: none;\n    outline: none;\n}\n\n.vk-keyboard {\n    width: 800px;\n    margin: 0 auto;\n    padding: 0px;\n    background: var(--keyboard);\n    border-radius: 8px;\n}\n\n.vk-row {\n    display: flex;\n    width: 100%;\n    height: 54px;\n}\n\n.vk-key {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 42px;\n    height: 42px;\n    margin: 6px 4px;\n    color: var(--key-symbol);\n    background: var(--key-inactive);\n    border-radius: 4px;\n}\n\n.press {\n    background: red;\n}\n\n.vk-info-lang {\n    text-align: center;\n    font-weight: 100;\n    display: block;\n    width:800px;\n    margin: 50px auto 0px auto;\n    font-size: 18px;\n    color: var(--info);\n    letter-spacing: 12px;\n    line-height: 40px;\n    text-transform: uppercase;\n}\n\n/* ----------- keys size in 1 row  ------------- */\n.vk-row:nth-child(1) .vk-key:nth-child(14) {\n    flex-grow: 5.0;\n}\n\n/* ----------- keys size in 2 row  ------------- */\n.vk-row:nth-child(2) .vk-key:nth-child(1) {\n    flex-grow: 2.0;\n}\n\n.vk-row:nth-child(2) .vk-key:nth-child(14) {\n    flex-grow: 1.0;\n    height: 96px;\n}\n\n/* ----------- keys size in 3 row  ------------- */\n.vk-row:nth-child(3) .vk-key:nth-child(1) {\n    flex-grow: 8.0;\n}\n\n.vk-row:nth-child(3) .vk-key:nth-child(13) {\n    margin-right: 88px;\n}\n\n/* ----------- keys size in 4 row  ------------- */\n.vk-row:nth-child(4) .vk-key:nth-child(1) {\n    flex-grow: 5.0;\n}\n\n.vk-row:nth-child(4) .vk-key:nth-child(13) {\n    flex-grow: 5.0;\n}\n\n/* ----------- keys size in 5 row  ------------- */\n.vk-row:nth-child(5) .vk-key:nth-child(1) {\n    flex-grow: 1.0;\n}\n\n.vk-row:nth-child(5) .vk-key:nth-child(3) {\n    flex-grow: 0.1;\n}\n\n.vk-row:nth-child(5) .vk-key:nth-child(4) {\n    flex-grow: 5.0;\n}\n\n.vk-row:nth-child(5) .vk-key:nth-child(5) {\n    flex-grow: 0.1;\n}\n\n.vk-row:nth-child(5) .vk-key:nth-child(7) {\n    height: 20px;\n    margin-top: 28px;\n}\n\n.vk-row:nth-child(5) .vk-key:nth-child(8) {\n    height: 20px;\n}\n\n.vk-row:nth-child(5) .vk-key:nth-child(9) {\n    height: 20px;\n    margin-left: -46px;\n    margin-top: 28px;\n}\n\n.vk-row:nth-child(5) .vk-key:nth-child(10) {\n    height: 20px;\n    margin-top: 28px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./virtual-keyboard/src/scripts/Key.js":
/*!*********************************************!*\
  !*** ./virtual-keyboard/src/scripts/Key.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Key; });
class Key {
  constructor({
    lowerCase,
    upperCase,
    code,
    value,
  }) {
    this.lowerCase = lowerCase;
    this.upperCase = upperCase;
    this.code = code;
    this.value = value;
    this.renderHtml();
  }

  renderHtml() {
    this.keyel = document.createElement('div');
    this.keyel.className = 'vk-key';
    this.keyel.innerText = this.char(false);
    return this.keyel;
  }

  char(capsOn) {
    return capsOn ? this.upperCase : this.lowerCase;
  }

  getvalue(capsOn) {
    const val = this.value ? this.value : this.char(capsOn);
    return val;
  }

  setCapsLock(capsOn) {
    this.keyel.innerText = this.char(capsOn);
  }

  press() {
    this.keyel.classList.add('press');
  }

  up() {
    this.keyel.classList.remove('press');
  }

  changeLanguage(newLanguage, capsOn) {
    this.lowerCase = newLanguage.lowerCase;
    this.upperCase = newLanguage.upperCase;
    this.code = newLanguage.code;
    if (capsOn) {
      this.keyel.innerText = this.upperCase;
    } else {
      this.keyel.innerText = this.lowerCase;
    }
  }
}


/***/ }),

/***/ "./virtual-keyboard/src/scripts/engKeyboard.js":
/*!*****************************************************!*\
  !*** ./virtual-keyboard/src/scripts/engKeyboard.js ***!
  \*****************************************************/
/*! exports provided: engKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "engKeyboard", function() { return engKeyboard; });
const engKeyboard = [
    [
      {
        "lowerCase": "£",
        "upperCase": "§",
        "code": "Backquote"
      },
      {
        "lowerCase": "1",
        "upperCase": "!",
        "code": "Digit1"
      },
      {
        "lowerCase": "2",
        "upperCase": "@",
        "code": "Digit2"
      },
      {
        "lowerCase": "3",
        "upperCase": "#",
        "code": "Digit3"
      },
      {
        "lowerCase": "4",
        "upperCase": "$",
        "code": "Digit4"
      },
      {
        "lowerCase": "5",
        "upperCase": "%",
        "code": "Digit5"
      },
      {
        "lowerCase": "6",
        "upperCase": "^",
        "code": "Digit6"
      },
      {
        "lowerCase": "7",
        "upperCase": "&",
        "code": "Digit7"
      },
      {
        "lowerCase": "8",
        "upperCase": "*",
        "code": "Digit8"
      },
      {
        "lowerCase": "9",
        "upperCase": "(",
        "code": "Digit9"
      },
      {
        "lowerCase": "0",
        "upperCase": ")",
        "code": "Digit0"
      },
      {
        "lowerCase": "-",
        "upperCase": "_",
        "code": "Minus"
      },
      {
        "lowerCase": "=",
        "upperCase": "+",
        "code": "Equal"
      },
      {
        "lowerCase": "Backspace",
        "upperCase": "Backspace",
        "code": "Backspace",
      }
    ],
    [
      {
        "lowerCase": "Tab ",
        "upperCase": "Tab",
        "code": "Tab",
        "value": "\t"
      },
      {
        "lowerCase": "q",
        "upperCase": "Q",
        "code": "KeyQ"
      },
      {
        "lowerCase": "w",
        "upperCase": "W",
        "code": "KeyW"
      },
      {
        "lowerCase": "e",
        "upperCase": "E",
        "code": "KeyE"
      },
      {
        "lowerCase": "r",
        "upperCase": "R",
        "code": "KeyR"
      },
      {
        "lowerCase": "t",
        "upperCase": "T",
        "code": "KeyT"
      },
      {
        "lowerCase": "y",
        "upperCase": "Y",
        "code": "KeyY"
      },
      {
        "lowerCase": "u",
        "upperCase": "U",
        "code": "KeyU"
      },
      {
        "lowerCase": "i",
        "upperCase": "I",
        "code": "KeyI"
      },
      {
        "lowerCase": "o",
        "upperCase": "O",
        "code": "KeyO"
      },
      {
        "lowerCase": "p",
        "upperCase": "P",
        "code": "KeyP"
      },
      {
        "lowerCase": "[",
        "upperCase": "{",
        "code": "BracketLeft"
      },
      {
        "lowerCase": "]",
        "upperCase": "}",
        "code": "BracketRight"
      },
      {
        "lowerCase": "Enter",
        "upperCase": "Enter",
        "code": "Enter",
        "value": "\n"
      }
    ],
    [
      {
        "lowerCase": "Caps Lock",
        "upperCase": "Caps Lock",
        "code": "CapsLock"
      },
      {
        "lowerCase": "a",
        "upperCase": "A",
        "code": "KeyA"
      },
      {
        "lowerCase": "s",
        "upperCase": "S",
        "code": "KeyS"
      },
      {
        "lowerCase": "d",
        "upperCase": "D",
        "code": "KeyD"
      },
      {
        "lowerCase": "f",
        "upperCase": "F",
        "code": "KeyF"
      },
      {
        "lowerCase": "g",
        "upperCase": "G",
        "code": "KeyG"
      },
      {
        "lowerCase": "h",
        "upperCase": "H",
        "code": "KeyH"
      },
      {
        "lowerCase": "j",
        "upperCase": "J",
        "code": "KeyJ"
      },
      {
        "lowerCase": "k",
        "upperCase": "K",
        "code": "KeyK"
      },
      {
        "lowerCase": "l",
        "upperCase": "L",
        "code": "KeyL"
      },
      {
        "lowerCase": ";",
        "upperCase": ":",
        "code": "Semicolon"
      },
      {
        "lowerCase": "'",
        "upperCase": "\"",
        "code": "Quote"
      },
      {
        "lowerCase": "\\",
        "upperCase": "|",
        "code": "Backslash"
      }
    ],
    [
      {
        "lowerCase": "Shift",
        "upperCase": "Shift",
        "code": "ShiftLeft"
      },
      {
        "lowerCase": "`",
        "upperCase": "~",
        "code": "IntlBackslash"
      },
      {
        "lowerCase": "z",
        "upperCase": "Z",
        "code": "KeyZ"
      },
      {
        "lowerCase": "x",
        "upperCase": "X",
        "code": "KeyX"
      },
      {
        "lowerCase": "c",
        "upperCase": "C",
        "code": "KeyC"
      },
      {
        "lowerCase": "v",
        "upperCase": "V",
        "code": "KeyV"
      },
      {
        "lowerCase": "b",
        "upperCase": "B",
        "code": "KeyB"
      },
      {
        "lowerCase": "n",
        "upperCase": "N",
        "code": "KeyN"
      },
      {
        "lowerCase": "m",
        "upperCase": "M",
        "code": "KeyM"
      },
      {
        "lowerCase": ",",
        "upperCase": "<",
        "code": "Comma"
      },
      {
        "lowerCase": ".",
        "upperCase": ">",
        "code": "Period"
      },
      {
        "lowerCase": "/",
        "upperCase": "?",
        "code": "Slash"
      },
      {
        "lowerCase": "Shift",
        "upperCase": "Shift",
        "code": "ShiftRight"
      }
    ],
    [
      {
        "lowerCase": "Ctrl",
        "upperCase": "Ctrl",
        "code": "ControlLeft"
      },
      {
        "lowerCase": "Alt",
        "upperCase": "Alt",
        "code": "AltLeft"
      },
      {
        "lowerCase": "Cmd",
        "upperCase": "Cmd",
        "code": "MetaLeft"
      },

      {
        "lowerCase": "",
        "upperCase": "",
        "code": "Space",
        "value": " "
      },
      {
        "lowerCase": "Cmd",
        "upperCase": "Cmd",
        "code": "MetaRight"
      },
      {
        "lowerCase": "Alt",
        "upperCase": "Alt",
        "code": "AltRight"
      },
      {
        "lowerCase": "◄",
        "upperCase": "◄",
        "code": "ArrowLeft"
      },
      {
        "lowerCase": "▲",
        "upperCase": "▲",
        "code": "ArrowUp"
      },
      {
        "lowerCase": "▼",
        "upperCase": "▼",
        "code": "ArrowDown"
      },
      {
        "lowerCase": "►",
        "upperCase": "►",
        "code": "ArrowRight"
      }
    ]
  ]

/***/ }),

/***/ "./virtual-keyboard/src/scripts/index.js":
/*!***********************************************!*\
  !*** ./virtual-keyboard/src/scripts/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Key */ "./virtual-keyboard/src/scripts/Key.js");
/* harmony import */ var _styles_stylesheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/stylesheet.css */ "./virtual-keyboard/src/styles/stylesheet.css");
/* harmony import */ var _styles_stylesheet_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_stylesheet_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _engKeyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engKeyboard */ "./virtual-keyboard/src/scripts/engKeyboard.js");
/* harmony import */ var _ukrKeyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ukrKeyboard */ "./virtual-keyboard/src/scripts/ukrKeyboard.js");







const keyboardEng = _engKeyboard__WEBPACK_IMPORTED_MODULE_2__["engKeyboard"];
const keyboardUkr = _ukrKeyboard__WEBPACK_IMPORTED_MODULE_3__["ukrKeyboard"];

class VirtualKeyboard {
  constructor(root) {
    this.keysSetup = [];
    this.keyboardLanguage = [];
    this.capsLockOn = false;
    this.alt = false;
    this.ctrl = false;
    this.shift = false;
    this.setKeyboardLanguage();
    this.title = this.createTitle('Virtual Keyboard on MacBook Pro');
    this.textArea = this.createTextArea(8, 50);
    this.vkKeyboard = this.createVirtualKeyboardContainer();
    this.changingLanguageInfo = this.createInfoAboutChangingLanguage();
    // creating virtual keyboard container
    this.vkContainer = document.createElement('div');
    this.vkContainer.classList.add('vk-container');
    this.vkContainer.appendChild(this.title);
    this.vkContainer.appendChild(this.textArea);
    this.vkContainer.appendChild(this.vkKeyboard);
    this.vkContainer.appendChild(this.changingLanguageInfo);

    this.root = root;
    this.root.appendChild(this.vkContainer);
    this.setUpMouseListeners();
  }

  createTitle(textOfTitle) {
    this.title = document.createElement('h1');
    this.title.className = 'vk-title';
    this.title.innerText = textOfTitle;
    return this.title;
  }

  createTextArea(rows, cols) {
    this.textArea = document.createElement('textarea');
    this.textArea.className = 'vk-textarea';
    this.textArea.id = 'textarea';
    this.textArea.rows = rows;
    this.textArea.cols = cols;
    return this.textArea;
  }

  createVirtualKeyboardContainer() {
    const vkKeyboard = document.createElement('div');
    vkKeyboard.className = 'vk-keyboard';
    vkKeyboard.id = 'keyboard';
    this.keyboardLanguage.map((i, idx) => {
      const rowElement = this.createVirtualKeyboardRow(idx);
      vkKeyboard.appendChild(rowElement);
    });
    this.setUpKeyboardListeners();
    return vkKeyboard;
  }

  createVirtualKeyboardRow(rowNumber) {
    const vkKeyboardRow = document.createElement('div');
    vkKeyboardRow.className = 'vk-row';
    this.keyboardLanguage[rowNumber].map((i, idx) => {
      const keyText = this.keyboardLanguage[rowNumber][idx];
      const keyElement = this.createVirtualKeyboardKey(keyText);
      vkKeyboardRow.appendChild(keyElement);
    });
    return vkKeyboardRow;
  }

  createVirtualKeyboardKey(key) {
    const elkey = new _Key__WEBPACK_IMPORTED_MODULE_0__["default"](key);
    this.keysSetup.push(elkey);
    return elkey.renderHtml();
  }

  createInfoAboutChangingLanguage() {
    this.vkInfoAboutChangingLanguage = document.createElement('p');
    this.vkInfoAboutChangingLanguage.className = 'vk-info-lang';
    this.vkInfoAboutChangingLanguage.innerText = "To change the keyboard language press the 'Command' key.";
    return this.vkInfoAboutChangingLanguage;
  }

  changeCaps() {
    this.capsLockOn = !this.capsLockOn;
    this.keysSetup.forEach((item) => item.setCapsLock(this.capsLockOn));
  }

  setKeyboardLanguage() {
    if (localStorage.getItem('vk-language')) {
      this.keyboardLanguage = JSON.parse(localStorage.getItem('vk-language'));
    } else {
      this.keyboardLanguage = keyboardEng;
      localStorage.setItem('vk-language', JSON.stringify(this.keyboardLanguage));
    }
  }

  changeKeyboardLanguage() {
    this.keyboardLanguage = this.keyboardLanguage === keyboardEng ? keyboardUkr : keyboardEng;
    this.keyboardLanguage.map((i, idx) => {
      i.map((j, jdx) => {
        this.keysSetup.map((item, index) => item.code === this.keyboardLanguage[idx][jdx].code
          && this.keysSetup[index].changeLanguage(this.keyboardLanguage[idx][jdx], this.capsLockOn));
      });
    });
    localStorage.setItem('vk-language', JSON.stringify(this.keyboardLanguage));
  }

  setUpKeyboardListeners() {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'CapsLock') {
        this.changeCaps();
      }
    });
    document.addEventListener('keyup', (e) => {
      if (e.code === 'CapsLock') {
        this.changeCaps();
      }
    });
    document.addEventListener('keydown', (e) => {
      const key = this.keysSetup.find((item) => item.code === e.code);
      if (key.code === 'Tab') {
        e.preventDefault();
      }
      key.press();
      this.generateChar(key);
    });
    document.addEventListener('keyup', (e) => {
      const key = this.keysSetup.find((item) => item.code === e.code);
      key.up();
      switch (key.code) {
        case 'ShiftLeft':
        case 'ShiftRight':
          if (!this.shift) {
            break;
          } else {
            this.shift = false;
            this.changeCaps();
            break;
          }
        case 'AltLeft':
        case 'AltRight':
          this.alt = false;
          break;
        case 'ControlLeft':
        case 'ControlRight':
          this.ctrl = false;
          break;
        default:
          break;
      }
    });
  }

  setUpMouseListeners() {
    document.addEventListener('mousedown', (e) => {
      if (e.target.className === 'vk-key' || e.target.className === 'vk-key press') {
        const key = this.keysSetup.find((item) => item.keyel === e.target);
        if (key.code && key.code === 'Tab') {
          e.preventDefault();
        }
        if (key.code === 'CapsLock') {
          this.changeCaps();
        }
        key.press();
        this.generateChar(key);
      }
    });
    document.addEventListener('mouseup', (e) => {
      if (e.target.className === 'vk-key press') {
        const key = this.keysSetup.find((item) => item.keyel === e.target);
        if (key.code !== 'CapsLock') {
          key.up();
          if (key.lowerCase === 'Shift') {
            this.shift = false;
          }
        }
        if (key.code === 'CapsLock') {
          if (!this.capsLockOn) {
            key.up();
          }
        }
      }
    });
  }

  generateChar(key) {
    switch (key.code) {
      case 'Backspace':
        this.textArea.value = this.textArea.value.slice(0, -1);
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        if (this.shift) {
          break;
        } else {
          this.shift = true;
          this.changeCaps();
          break;
        }
      case 'CapsLock':
        break;
      case 'AltLeft':
      case 'AltRight':
        this.alt = true;
        break;
      case 'ControlLeft':
      case 'ControlRight':
        this.ctrl = true;
        break;
      case 'MetaLeft':
      case 'MetaRight':
        this.changeKeyboardLanguage();
        break;
      default:
        this.textArea.value += key.getvalue(this.capsLockOn);
        this.textArea.innerText = this.textArea.value;
        break;
    }
  }

  get htmlElement() {
    return this.root;
  }
}

const virtualKeyboard = new VirtualKeyboard(document.body);


/***/ }),

/***/ "./virtual-keyboard/src/scripts/ukrKeyboard.js":
/*!*****************************************************!*\
  !*** ./virtual-keyboard/src/scripts/ukrKeyboard.js ***!
  \*****************************************************/
/*! exports provided: ukrKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ukrKeyboard", function() { return ukrKeyboard; });
const ukrKeyboard = [
    [
        {
            "lowerCase": "'",
            "upperCase": "₴",
            "code": "Backquote"
        },
        {
            "lowerCase": "1",
            "upperCase": "!",
            "code": "Digit1"
        },
        {
            "lowerCase": "2",
            "upperCase": "\"",
            "code": "Digit2"
        },
        {
            "lowerCase": "3",
            "upperCase": "№",
            "code": "Digit3"
        },
        {
            "lowerCase": "4",
            "upperCase": ";",
            "code": "Digit4"
        },
        {
            "lowerCase": "5",
            "upperCase": "%",
            "code": "Digit5"
        },
        {
            "lowerCase": "6",
            "upperCase": ":",
            "code": "Digit6"
        },
        {
            "lowerCase": "7",
            "upperCase": "?",
            "code": "Digit7"
        },
        {
            "lowerCase": "8",
            "upperCase": "*",
            "code": "Digit8"
        },
        {
            "lowerCase": "9",
            "upperCase": "(",
            "code": "Digit9"
        },
        {
            "lowerCase": "0",
            "upperCase": ")",
            "code": "Digit0"
        },
        {
            "lowerCase": "-",
            "upperCase": "_",
            "code": "Minus"
        },
        {
            "lowerCase": "=",
            "upperCase": "+",
            "code": "Equal"
        },
        {
            "lowerCase": "Backspace",
            "upperCase": "Backspace",
            "code": "Backspace"
        }
    ],
    [{
            "lowerCase": "Tab",
            "upperCase": "Tab",
            "code": "Tab",
            "value": "\t"
        },
        {
            "lowerCase": "й",
            "upperCase": "Й",
            "code": "KeyQ"
        },
        {
            "lowerCase": "ц",
            "upperCase": "Ц",
            "code": "KeyW"
        },
        {
            "lowerCase": "у",
            "upperCase": "У",
            "code": "KeyE"
        },
        {
            "lowerCase": "к",
            "upperCase": "К",
            "code": "KeyR"
        },
        {
            "lowerCase": "е",
            "upperCase": "Е",
            "code": "KeyT"
        },
        {
            "lowerCase": "н",
            "upperCase": "Н",
            "code": "KeyY"
        },
        {
            "lowerCase": "г",
            "upperCase": "Г",
            "code": "KeyU"
        },
        {
            "lowerCase": "ш",
            "upperCase": "Ш",
            "code": "KeyI"
        },
        {
            "lowerCase": "щ",
            "upperCase": "Щ",
            "code": "KeyO"
        },
        {
            "lowerCase": "з",
            "upperCase": "З",
            "code": "KeyP"
        },
        {
            "lowerCase": "х",
            "upperCase": "Х",
            "code": "BracketLeft"
        },
        {
            "lowerCase": "ї",
            "upperCase": "Ї",
            "code": "BracketRight"
        },
        {
            "lowerCase": "Enter",
            "upperCase": "Enter",
            "code": "Enter",
            "value": "\n"
        }
    ],
    [{
            "lowerCase": "Caps Lock",
            "upperCase": "Caps Lock",
            "code": "CapsLock"
        },
        {
            "lowerCase": "ф",
            "upperCase": "Ф",
            "code": "KeyA"
        },
        {
            "lowerCase": "і",
            "upperCase": "І",
            "code": "KeyS"
        },
        {
            "lowerCase": "в",
            "upperCase": "В",
            "code": "KeyD"
        },
        {
            "lowerCase": "а",
            "upperCase": "А",
            "code": "KeyF"
        },
        {
            "lowerCase": "п",
            "upperCase": "П",
            "code": "KeyG"
        },
        {
            "lowerCase": "р",
            "upperCase": "Р",
            "code": "KeyH"
        },
        {
            "lowerCase": "о",
            "upperCase": "О",
            "code": "KeyJ"
        },
        {
            "lowerCase": "л",
            "upperCase": "Л",
            "code": "KeyK"
        },
        {
            "lowerCase": "д",
            "upperCase": "Д",
            "code": "KeyL"
        },
        {
            "lowerCase": "ж",
            "upperCase": "Ж",
            "code": "Semicolon"
        },
        {
            "lowerCase": "є",
            "upperCase": "Є",
            "code": "Quote"
        },
        {
            "lowerCase": "\\",
            "upperCase": "/",
            "code": "Backslash"
        }

    ],
    [{
            "lowerCase": "Shift",
            "upperCase": "Shift",
            "code": "ShiftLeft"
        },
        {
            "lowerCase": "`",
            "upperCase": "~",
            "code": "IntlBackslash"
          },
        {
            "lowerCase": "я",
            "upperCase": "Я",
            "code": "KeyZ"
        },
        {
            "lowerCase": "ч",
            "upperCase": "Ч",
            "code": "KeyX"
        },
        {
            "lowerCase": "с",
            "upperCase": "С",
            "code": "KeyC"
        },
        {
            "lowerCase": "м",
            "upperCase": "М",
            "code": "KeyV"
        },
        {
            "lowerCase": "и",
            "upperCase": "И",
            "code": "KeyB"
        },
        {
            "lowerCase": "т",
            "upperCase": "Т",
            "code": "KeyN"
        },
        {
            "lowerCase": "ь",
            "upperCase": "Ь",
            "code": "KeyM"
        },
        {
            "lowerCase": "б",
            "upperCase": "Б",
            "code": "Comma"
        },
        {
            "lowerCase": "ю",
            "upperCase": "Ю",
            "code": "Period"
        },
        {
            "lowerCase": ".",
            "upperCase": ",",
            "code": "Slash"
        },
        {
            "lowerCase": "Shift",
            "upperCase": "Shift",
            "code": "ShiftRight"
        }
    ],
    [{
            "lowerCase": "Ctrl",
            "upperCase": "Ctrl",
            "code": "ControlLeft"
        },
        {
            "lowerCase": "Alt",
            "upperCase": "Alt",
            "code": "AltLeft"
        },
        {
            "lowerCase": "Cmd",
            "upperCase": "Cmd",
            "code": "MetaLeft"
        },
        {
            "lowerCase": "",
            "upperCase": "",
            "code": "Space",
            "value": " "
        },
        {
            "lowerCase": "Cmd",
            "upperCase": "Cmd",
            "code": "MetaRight"
          },
          {
            "lowerCase": "Alt",
            "upperCase": "Alt",
            "code": "AltRight"
          },
          {
            "lowerCase": "◄",
            "upperCase": "◄",
            "code": "ArrowLeft"
          },
          {
            "lowerCase": "▲",
            "upperCase": "▲",
            "code": "ArrowUp"
          },
          {
            "lowerCase": "▼",
            "upperCase": "▼",
            "code": "ArrowDown"
          },
          {
            "lowerCase": "►",
            "upperCase": "►",
            "code": "ArrowRight"
          }
    ]
]

/***/ }),

/***/ "./virtual-keyboard/src/styles/stylesheet.css":
/*!****************************************************!*\
  !*** ./virtual-keyboard/src/styles/stylesheet.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./stylesheet.css */ "./node_modules/css-loader/dist/cjs.js!./virtual-keyboard/src/styles/stylesheet.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });