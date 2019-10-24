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

/***/ "./src/assets/styles/chart.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/chart.scss ***!
  \**************************************/
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
/* harmony import */ var _assets_styles_chart_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/styles/chart.scss */ "./src/assets/styles/chart.scss");
/* harmony import */ var _assets_styles_chart_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_chart_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/logo.svg */ "./src/assets/images/logo.svg");
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_crayon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/crayon.svg */ "./src/assets/images/crayon.svg");
/* harmony import */ var _assets_images_crayon_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_crayon_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_flag_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/flag.png */ "./src/assets/images/flag.png");
/* harmony import */ var _assets_images_flag_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_flag_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_rocket_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/rocket.svg */ "./src/assets/images/rocket.svg");
/* harmony import */ var _assets_images_rocket_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_rocket_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_gears_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/gears.png */ "./src/assets/images/gears.png");
/* harmony import */ var _assets_images_gears_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gears_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_laptop1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/laptop1.png */ "./src/assets/images/laptop1.png");
/* harmony import */ var _assets_images_laptop1_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_laptop1_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_images_laptop2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/laptop2.png */ "./src/assets/images/laptop2.png");
/* harmony import */ var _assets_images_laptop2_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_images_laptop2_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_images_laptop3_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/images/laptop3.png */ "./src/assets/images/laptop3.png");
/* harmony import */ var _assets_images_laptop3_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_images_laptop3_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_images_laptop4_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/images/laptop4.png */ "./src/assets/images/laptop4.png");
/* harmony import */ var _assets_images_laptop4_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_images_laptop4_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_images_facebook_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/images/facebook.png */ "./src/assets/images/facebook.png");
/* harmony import */ var _assets_images_facebook_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_images_facebook_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_images_twitter_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/images/twitter.png */ "./src/assets/images/twitter.png");
/* harmony import */ var _assets_images_twitter_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_images_twitter_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_images_linkedin_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/images/linkedin.png */ "./src/assets/images/linkedin.png");
/* harmony import */ var _assets_images_linkedin_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_images_linkedin_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_images_mail_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/images/mail.png */ "./src/assets/images/mail.png");
/* harmony import */ var _assets_images_mail_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_images_mail_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_images_anne_hathaway_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/images/anne-hathaway.png */ "./src/assets/images/anne-hathaway.png");
/* harmony import */ var _assets_images_anne_hathaway_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_images_anne_hathaway_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_images_kate_upton_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/images/kate-upton.png */ "./src/assets/images/kate-upton.png");
/* harmony import */ var _assets_images_kate_upton_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_images_kate_upton_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_images_olivia_wilde_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/images/olivia-wilde.png */ "./src/assets/images/olivia-wilde.png");
/* harmony import */ var _assets_images_olivia_wilde_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_images_olivia_wilde_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_images_ashley_greene_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/images/ashley-greene.png */ "./src/assets/images/ashley-greene.png");
/* harmony import */ var _assets_images_ashley_greene_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_images_ashley_greene_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _assets_images_chart1_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/images/chart1.png */ "./src/assets/images/chart1.png");
/* harmony import */ var _assets_images_chart1_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_images_chart1_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _assets_images_chart2_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/images/chart2.png */ "./src/assets/images/chart2.png");
/* harmony import */ var _assets_images_chart2_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_images_chart2_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _assets_images_chart3_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/images/chart3.png */ "./src/assets/images/chart3.png");
/* harmony import */ var _assets_images_chart3_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_assets_images_chart3_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _assets_images_chart4_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/images/chart4.png */ "./src/assets/images/chart4.png");
/* harmony import */ var _assets_images_chart4_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_images_chart4_png__WEBPACK_IMPORTED_MODULE_26__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvYW5uZS1oYXRoYXdheS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvYXNobGV5LWdyZWVuZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY2hhcnQxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9jaGFydDIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2NoYXJ0My5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvY2hhcnQ0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9jcmF5b24uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ZhY2Vib29rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9mbGFnLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9nZWFycy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMva2F0ZS11cHRvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGFwdG9wMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGFwdG9wMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGFwdG9wMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGFwdG9wNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbGlua2VkaW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haWwucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL29saXZpYS13aWxkZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvcm9ja2V0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy90d2l0dGVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy9hbmltYXRpb25zLnNjc3M/ZTJiMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jaGFydC5zY3NzPzk5YTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWVkaWEtYnJlYWtwb2ludHMuc2Nzcz9lNDZiIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzL3Jlc2V0LnNjc3M/NTllOCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZS5zY3NzP2Y0YzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxpQkFBaUIscUJBQXVCLHVCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLHVCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGdCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGdCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGdCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGdCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGdCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGtCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsZTs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixvQjs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixpQjs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixpQjs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixpQjs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixpQjs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixrQjs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixjOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsc0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsZ0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsaUI7Ozs7Ozs7Ozs7O0FDQXhDLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ29DO0FBQ0k7QUFDSjtBQUNZO0FBQ1A7QUFDTDs7O0FBR3BDO0FBQ2tDO0FBQ0U7QUFDRjtBQUNFO0FBQ0Q7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBQ0Q7QUFDQztBQUNKO0FBQ1M7QUFDSDtBQUNFO0FBQ0M7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBR3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0EsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFubmUtaGF0aGF3YXkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNobGV5LWdyZWVuZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjaGFydDEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2hhcnQyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNoYXJ0My5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjaGFydDQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY3JheW9uLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhY2Vib29rLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZsYWcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZ2VhcnMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwia2F0ZS11cHRvbi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJsYXB0b3AxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImxhcHRvcDIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibGFwdG9wMy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJsYXB0b3A0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImxpbmtlZGluLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImxvZ28uc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWFpbC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJvbGl2aWEtd2lsZGUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicm9ja2V0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInR3aXR0ZXIucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy9zdHlsZXNcclxuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvcmVzZXQuc2Nzcyc7XHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL21lZGlhLWJyZWFrcG9pbnRzLnNjc3MnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9hbmltYXRpb25zLnNjc3MnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9jaGFydC5zY3NzJztcclxuXHJcblxyXG4vL2ltYWdlc1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9sb2dvLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2NyYXlvbi5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9mbGFnLnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL3JvY2tldC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9nZWFycy5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9sYXB0b3AxLnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2xhcHRvcDIucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvbGFwdG9wMy5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9sYXB0b3A0LnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2ZhY2Vib29rLnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL3R3aXR0ZXIucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvbGlua2VkaW4ucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvbWFpbC5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9hbm5lLWhhdGhhd2F5LnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2thdGUtdXB0b24ucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvb2xpdmlhLXdpbGRlLnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2FzaGxleS1ncmVlbmUucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvY2hhcnQxLnBuZyc7XHJcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2NoYXJ0Mi5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9jaGFydDMucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvY2hhcnQ0LnBuZyc7XHJcblxyXG5cclxuLy9tZW51IGJhcnMgYW5pbWF0aW9uIGFuZCBwb3B1cFxyXG4kKCdbZGF0YS10b2dnbGVdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGVsZW1lbnQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZScpO1xyXG5cclxuICAgICQoJ1tkYXRhLScgKyBlbGVtZW50ICsgJ10nKS50b2dnbGVDbGFzcyhlbGVtZW50ICsgJy0tYWN0aXZlJyk7XHJcblxyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoZWxlbWVudCArICctLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhlbGVtZW50ICsgJy0tYWN0aXZlJykuYWRkQ2xhc3MoZWxlbWVudCArICctLXVuYWN0aXZlJyk7XHJcbiAgICAgICAgJChcImJvZHlcIikuY3NzKHtcclxuICAgICAgICAgICAgXCJvdmVyZmxvd1wiOiBcInZpc2libGVcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5oYXNDbGFzcyhlbGVtZW50ICsgJy0tdW5hY3RpdmUnKSkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoZWxlbWVudCArICctLXVuYWN0aXZlJykuYWRkQ2xhc3MoZWxlbWVudCArICctLWFjdGl2ZScpO1xyXG4gICAgICAgICQoXCJib2R5XCIpLmNzcyh7XHJcbiAgICAgICAgICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhlbGVtZW50ICsgJy0tYWN0aXZlJyk7XHJcbiAgICAgICAgJChcImJvZHlcIikuY3NzKHtcclxuICAgICAgICAgICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy9TY3JvbGwgdG8gc3BlY2lmaWMgZWxlbWVudCBwb3NzaXRpb24gZnVuY3Rpb25hbGl0eVxyXG5mdW5jdGlvbiBzY3JvbGxUb0NvcmQoeSkge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IHksXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL2NoZWNraW5nIGlmIHBvcHVwIGlzIG9wZW4gb3Igbm90XHJcbiQoJ1tkYXRhLXNjcm9sbF0nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZWxlbWVudCA9ICQodGhpcykuZGF0YSgnc2Nyb2xsJyk7XHJcbiAgICB2YXIgb2Zmc2V0ID0gJCgnIycrIGVsZW1lbnQpLm9mZnNldCgpO1xyXG4gICAgXHJcbiAgICBpZiAoJCgnLm5hdl9fbWVudS1iYXJzLXBvcHVwJykuaGFzQ2xhc3MoJ25hdl9fbWVudS1iYXJzLXBvcHVwLS1hY3RpdmUnKSkge1xyXG4gICAgICAgICQoJy5uYXZfX21lbnUtYmFycy1wb3B1cCcpLnJlbW92ZUNsYXNzKCduYXZfX21lbnUtYmFycy1wb3B1cC0tYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLm5hdl9fbWVudS1iYXJzLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCduYXZfX21lbnUtYmFycy1wb3B1cC0tYWN0aXZlJykuYWRkQ2xhc3MoJ25hdl9fbWVudS1iYXJzLXBvcHVwLS11bmFjdGl2ZScpO1xyXG4gICAgICAgICQoXCJib2R5XCIpLmNzcyh7XHJcbiAgICAgICAgICAgIFwib3ZlcmZsb3dcIjogXCJ2aXNpYmxlXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygna2xhc2UgYnV2by4gaXN0cnluaWF1Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdudSBhcyBuaWVrbyBuZWl2eWtkemlhdSBzcnknKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzY3JvbGxUb0NvcmQob2Zmc2V0LnRvcCk7XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=