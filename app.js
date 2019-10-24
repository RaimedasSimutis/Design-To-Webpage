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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/images/anne-hathaway.png":
/*!*********************************************!*\
  !*** ./src/assets/images/anne-hathaway.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "anne-hathaway.png";

/***/ }),

/***/ "./src/assets/images/ashley-greene.png":
/*!*********************************************!*\
  !*** ./src/assets/images/ashley-greene.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ashley-greene.png";

/***/ }),

/***/ "./src/assets/images/chart1.png":
/*!**************************************!*\
  !*** ./src/assets/images/chart1.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "chart1.png";

/***/ }),

/***/ "./src/assets/images/chart2.png":
/*!**************************************!*\
  !*** ./src/assets/images/chart2.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "chart2.png";

/***/ }),

/***/ "./src/assets/images/chart3.png":
/*!**************************************!*\
  !*** ./src/assets/images/chart3.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "chart3.png";

/***/ }),

/***/ "./src/assets/images/chart4.png":
/*!**************************************!*\
  !*** ./src/assets/images/chart4.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "chart4.png";

/***/ }),

/***/ "./src/assets/images/crayon.svg":
/*!**************************************!*\
  !*** ./src/assets/images/crayon.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "crayon.svg";

/***/ }),

/***/ "./src/assets/images/facebook.png":
/*!****************************************!*\
  !*** ./src/assets/images/facebook.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "facebook.png";

/***/ }),

/***/ "./src/assets/images/flag.png":
/*!************************************!*\
  !*** ./src/assets/images/flag.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "flag.png";

/***/ }),

/***/ "./src/assets/images/gears.png":
/*!*************************************!*\
  !*** ./src/assets/images/gears.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gears.png";

/***/ }),

/***/ "./src/assets/images/kate-upton.png":
/*!******************************************!*\
  !*** ./src/assets/images/kate-upton.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kate-upton.png";

/***/ }),

/***/ "./src/assets/images/laptop1.png":
/*!***************************************!*\
  !*** ./src/assets/images/laptop1.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "laptop1.png";

/***/ }),

/***/ "./src/assets/images/laptop2.png":
/*!***************************************!*\
  !*** ./src/assets/images/laptop2.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "laptop2.png";

/***/ }),

/***/ "./src/assets/images/laptop3.png":
/*!***************************************!*\
  !*** ./src/assets/images/laptop3.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "laptop3.png";

/***/ }),

/***/ "./src/assets/images/laptop4.png":
/*!***************************************!*\
  !*** ./src/assets/images/laptop4.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "laptop4.png";

/***/ }),

/***/ "./src/assets/images/linkedin.png":
/*!****************************************!*\
  !*** ./src/assets/images/linkedin.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "linkedin.png";

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.svg";

/***/ }),

/***/ "./src/assets/images/mail.png":
/*!************************************!*\
  !*** ./src/assets/images/mail.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mail.png";

/***/ }),

/***/ "./src/assets/images/olivia-wilde.png":
/*!********************************************!*\
  !*** ./src/assets/images/olivia-wilde.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "olivia-wilde.png";

/***/ }),

/***/ "./src/assets/images/rocket.svg":
/*!**************************************!*\
  !*** ./src/assets/images/rocket.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rocket.svg";

/***/ }),

/***/ "./src/assets/images/twitter.png":
/*!***************************************!*\
  !*** ./src/assets/images/twitter.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "twitter.png";

/***/ }),

/***/ "./src/assets/styles/animations.scss":
/*!*******************************************!*\
  !*** ./src/assets/styles/animations.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/assets/styles/media-breakpoints.scss":
/*!**************************************************!*\
  !*** ./src/assets/styles/media-breakpoints.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/assets/styles/reset.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/reset.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/assets/styles/variables.scss":
/*!******************************************!*\
  !*** ./src/assets/styles/variables.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/reset.scss */ "./src/assets/styles/reset.scss");
/* harmony import */ var _assets_styles_reset_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_reset_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles/variables.scss */ "./src/assets/styles/variables.scss");
/* harmony import */ var _assets_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/style.scss */ "./src/assets/styles/style.scss");
/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_styles_media_breakpoints_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/styles/media-breakpoints.scss */ "./src/assets/styles/media-breakpoints.scss");
/* harmony import */ var _assets_styles_media_breakpoints_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_media_breakpoints_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_styles_animations_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/styles/animations.scss */ "./src/assets/styles/animations.scss");
/* harmony import */ var _assets_styles_animations_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_animations_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/logo.svg */ "./src/assets/images/logo.svg");
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_crayon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/crayon.svg */ "./src/assets/images/crayon.svg");
/* harmony import */ var _assets_images_crayon_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_crayon_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_flag_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/flag.png */ "./src/assets/images/flag.png");
/* harmony import */ var _assets_images_flag_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_flag_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_rocket_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/rocket.svg */ "./src/assets/images/rocket.svg");
/* harmony import */ var _assets_images_rocket_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_rocket_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_gears_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/gears.png */ "./src/assets/images/gears.png");
/* harmony import */ var _assets_images_gears_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gears_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_laptop1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/laptop1.png */ "./src/assets/images/laptop1.png");
/* harmony import */ var _assets_images_laptop1_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_laptop1_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_laptop2_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/laptop2.png */ "./src/assets/images/laptop2.png");
/* harmony import */ var _assets_images_laptop2_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_laptop2_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_images_laptop3_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/laptop3.png */ "./src/assets/images/laptop3.png");
/* harmony import */ var _assets_images_laptop3_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_images_laptop3_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_images_laptop4_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/images/laptop4.png */ "./src/assets/images/laptop4.png");
/* harmony import */ var _assets_images_laptop4_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_images_laptop4_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_images_facebook_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/images/facebook.png */ "./src/assets/images/facebook.png");
/* harmony import */ var _assets_images_facebook_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_images_facebook_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_images_twitter_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/images/twitter.png */ "./src/assets/images/twitter.png");
/* harmony import */ var _assets_images_twitter_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_images_twitter_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_images_linkedin_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/images/linkedin.png */ "./src/assets/images/linkedin.png");
/* harmony import */ var _assets_images_linkedin_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_images_linkedin_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_images_mail_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/images/mail.png */ "./src/assets/images/mail.png");
/* harmony import */ var _assets_images_mail_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_images_mail_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_images_anne_hathaway_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/images/anne-hathaway.png */ "./src/assets/images/anne-hathaway.png");
/* harmony import */ var _assets_images_anne_hathaway_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_images_anne_hathaway_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_images_kate_upton_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/images/kate-upton.png */ "./src/assets/images/kate-upton.png");
/* harmony import */ var _assets_images_kate_upton_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_images_kate_upton_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_images_olivia_wilde_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/images/olivia-wilde.png */ "./src/assets/images/olivia-wilde.png");
/* harmony import */ var _assets_images_olivia_wilde_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_images_olivia_wilde_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_images_ashley_greene_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/images/ashley-greene.png */ "./src/assets/images/ashley-greene.png");
/* harmony import */ var _assets_images_ashley_greene_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_images_ashley_greene_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_images_chart1_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/images/chart1.png */ "./src/assets/images/chart1.png");
/* harmony import */ var _assets_images_chart1_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_images_chart1_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _assets_images_chart2_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/images/chart2.png */ "./src/assets/images/chart2.png");
/* harmony import */ var _assets_images_chart2_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_images_chart2_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _assets_images_chart3_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/images/chart3.png */ "./src/assets/images/chart3.png");
/* harmony import */ var _assets_images_chart3_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_images_chart3_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _assets_images_chart4_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/images/chart4.png */ "./src/assets/images/chart4.png");
/* harmony import */ var _assets_images_chart4_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_assets_images_chart4_png__WEBPACK_IMPORTED_MODULE_25__);
//styles







//images























//menu bars animation and popup
$('[data-toggle]').on("click", function (e) {
    e.preventDefault();
    let element = $(this).data('toggle');

    $('[data-' + element + ']').toggleClass(element + '--active');

    if ($(this).hasClass(element + '--active')) {
        $(this).removeClass(element + '--active').addClass(element + '--unactive');
        $("body").css({
            "overflow": "visible"
        });

    } else if ($(this).hasClass(element + '--unactive')) {
        $(this).removeClass(element + '--unactive').addClass(element + '--active');
        $("body").css({
            "overflow": "hidden"
        });

    } else {
        $(this).addClass(element + '--active');
        $("body").css({
            "overflow": "hidden"
        });
    }
});

//Scroll to specific element possition functionality
function scrollToCord(y) {
    window.scrollTo({
        top: y,
        left: 0,
        behavior: 'smooth'
    });
}

//checking if popup is open or not
$('[data-scroll]').on("click", function (e) {
    e.preventDefault();
    let element = $(this).data('scroll');
    var offset = $('#'+ element).offset();
    
    if ($('.nav__menu-bars-popup').hasClass('nav__menu-bars-popup--active')) {
        $('.nav__menu-bars-popup').removeClass('nav__menu-bars-popup--active');
        $('.nav__menu-bars-container').removeClass('nav__menu-bars-popup--active').addClass('nav__menu-bars-popup--unactive');
        $("body").css({
            "overflow": "visible"
        });
        console.log('klase buvo. istryniau');
    } else {
        console.log('nu as nieko neivykdziau sry')
        
    }
    
    scrollToCord(offset.top);
})














/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvYW5uZS1oYXRoYXdheS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvYXNobGV5LWdyZWVuZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY2hhcnQxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9jaGFydDIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2NoYXJ0My5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY2hhcnQ0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmF5b24uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ZhY2Vib29rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9mbGFnLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9nZWFycy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMva2F0ZS11cHRvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGFwdG9wMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGFwdG9wMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGFwdG9wMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGFwdG9wNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGlua2VkaW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haWwucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL29saXZpYS13aWxkZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvcm9ja2V0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy90d2l0dGVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy9hbmltYXRpb25zLnNjc3M/ZTJiMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy9tZWRpYS1icmVha3BvaW50cy5zY3NzP2U0NmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXMvcmVzZXQuc2Nzcz81OWU4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlLnNjc3M/ZjRjMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGlCQUFpQixxQkFBdUIsdUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsdUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsZ0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsZ0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsZ0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsZ0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsZ0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsa0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsYzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixlOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLG9COzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGlCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGlCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGlCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGlCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGtCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsYzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixzQjs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixnQjs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixpQjs7Ozs7Ozs7Ozs7QUNBeEMsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNvQztBQUNJO0FBQ0o7QUFDWTtBQUNQOzs7QUFHekM7QUFDa0M7QUFDRTtBQUNGO0FBQ0U7QUFDRDtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFDRDtBQUNDO0FBQ0o7QUFDUztBQUNIO0FBQ0U7QUFDQztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7QUFHcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQSxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYW5uZS1oYXRoYXdheS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc2hsZXktZ3JlZW5lLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNoYXJ0MS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjaGFydDIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2hhcnQzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNoYXJ0NC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjcmF5b24uc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmFjZWJvb2sucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmxhZy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJnZWFycy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJrYXRlLXVwdG9uLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImxhcHRvcDEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibGFwdG9wMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJsYXB0b3AzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImxhcHRvcDQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibGlua2VkaW4ucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibG9nby5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYWlsLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIm9saXZpYS13aWxkZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJyb2NrZXQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwidHdpdHRlci5wbmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvL3N0eWxlc1xyXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9yZXNldC5zY3NzJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9zdHlsZS5zY3NzJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbWVkaWEtYnJlYWtwb2ludHMuc2Nzcyc7XHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL2FuaW1hdGlvbnMuc2Nzcyc7XHJcblxyXG5cclxuLy9pbWFnZXNcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9jcmF5b24uc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvZmxhZy5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9yb2NrZXQuc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvZ2VhcnMucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvbGFwdG9wMS5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9sYXB0b3AyLnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2xhcHRvcDMucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvbGFwdG9wNC5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9mYWNlYm9vay5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy90d2l0dGVyLnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2xpbmtlZGluLnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL21haWwucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvYW5uZS1oYXRoYXdheS5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9rYXRlLXVwdG9uLnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL29saXZpYS13aWxkZS5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9hc2hsZXktZ3JlZW5lLnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2NoYXJ0MS5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9jaGFydDIucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvY2hhcnQzLnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2NoYXJ0NC5wbmcnO1xyXG5cclxuXHJcbi8vbWVudSBiYXJzIGFuaW1hdGlvbiBhbmQgcG9wdXBcclxuJCgnW2RhdGEtdG9nZ2xlXScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBlbGVtZW50ID0gJCh0aGlzKS5kYXRhKCd0b2dnbGUnKTtcclxuXHJcbiAgICAkKCdbZGF0YS0nICsgZWxlbWVudCArICddJykudG9nZ2xlQ2xhc3MoZWxlbWVudCArICctLWFjdGl2ZScpO1xyXG5cclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKGVsZW1lbnQgKyAnLS1hY3RpdmUnKSkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoZWxlbWVudCArICctLWFjdGl2ZScpLmFkZENsYXNzKGVsZW1lbnQgKyAnLS11bmFjdGl2ZScpO1xyXG4gICAgICAgICQoXCJib2R5XCIpLmNzcyh7XHJcbiAgICAgICAgICAgIFwib3ZlcmZsb3dcIjogXCJ2aXNpYmxlXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuaGFzQ2xhc3MoZWxlbWVudCArICctLXVuYWN0aXZlJykpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKGVsZW1lbnQgKyAnLS11bmFjdGl2ZScpLmFkZENsYXNzKGVsZW1lbnQgKyAnLS1hY3RpdmUnKTtcclxuICAgICAgICAkKFwiYm9keVwiKS5jc3Moe1xyXG4gICAgICAgICAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoZWxlbWVudCArICctLWFjdGl2ZScpO1xyXG4gICAgICAgICQoXCJib2R5XCIpLmNzcyh7XHJcbiAgICAgICAgICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vU2Nyb2xsIHRvIHNwZWNpZmljIGVsZW1lbnQgcG9zc2l0aW9uIGZ1bmN0aW9uYWxpdHlcclxuZnVuY3Rpb24gc2Nyb2xsVG9Db3JkKHkpIHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgdG9wOiB5LFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy9jaGVja2luZyBpZiBwb3B1cCBpcyBvcGVuIG9yIG5vdFxyXG4kKCdbZGF0YS1zY3JvbGxdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGVsZW1lbnQgPSAkKHRoaXMpLmRhdGEoJ3Njcm9sbCcpO1xyXG4gICAgdmFyIG9mZnNldCA9ICQoJyMnKyBlbGVtZW50KS5vZmZzZXQoKTtcclxuICAgIFxyXG4gICAgaWYgKCQoJy5uYXZfX21lbnUtYmFycy1wb3B1cCcpLmhhc0NsYXNzKCduYXZfX21lbnUtYmFycy1wb3B1cC0tYWN0aXZlJykpIHtcclxuICAgICAgICAkKCcubmF2X19tZW51LWJhcnMtcG9wdXAnKS5yZW1vdmVDbGFzcygnbmF2X19tZW51LWJhcnMtcG9wdXAtLWFjdGl2ZScpO1xyXG4gICAgICAgICQoJy5uYXZfX21lbnUtYmFycy1jb250YWluZXInKS5yZW1vdmVDbGFzcygnbmF2X19tZW51LWJhcnMtcG9wdXAtLWFjdGl2ZScpLmFkZENsYXNzKCduYXZfX21lbnUtYmFycy1wb3B1cC0tdW5hY3RpdmUnKTtcclxuICAgICAgICAkKFwiYm9keVwiKS5jc3Moe1xyXG4gICAgICAgICAgICBcIm92ZXJmbG93XCI6IFwidmlzaWJsZVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2tsYXNlIGJ1dm8uIGlzdHJ5bmlhdScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbnUgYXMgbmlla28gbmVpdnlrZHppYXUgc3J5JylcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2Nyb2xsVG9Db3JkKG9mZnNldC50b3ApO1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9