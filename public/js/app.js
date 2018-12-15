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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
    // слайдер
    if ((0, _jquery2.default)('.slider').length != 0) {
        (0, _jquery2.default)('.slider').slick({});
    }
    // виджет ВК
    if (typeof VK !== 'undefined') {
        VK.Widgets.Group("vk_groups", { mode: 4, wide: 1, width: "auto", height: "200" }, 20003922);
    }
    // Поэкранный скролл на компьютере
    if ((0, _jquery2.default)(window).width() > 992) {
        _jquery2.default.scrollify({
            section: ".section",
            scrollbars: false,
            before: function before(i, panels) {
                var ref = panels[i].attr("data-section-name");
                (0, _jquery2.default)(".navigation .nav-item.active").removeClass("active");
                (0, _jquery2.default)(".navigation a[href='#" + ref + "']").parent().addClass("active");
            }
        });
        (0, _jquery2.default)(".navigation a").on("click", function () {
            _jquery2.default.scrollify.move((0, _jquery2.default)(this).attr("href"));
        });
    } else {
        // смена активного пункта меню на мобильном
        (0, _jquery2.default)(".navigation .nav-item a").on("click", function () {
            if ((0, _jquery2.default)(this).parent().hasClass("active") == false) {
                (0, _jquery2.default)(".navigation .nav-item.active").removeClass("active");
                (0, _jquery2.default)(this).parent().addClass("active");
            }
            (0, _jquery2.default)(".navbar-toggler").trigger('click');
        });
    }
    // ресайз
    (0, _jquery2.default)(window).resize(function () {
        _jquery2.default.scrollify.destroy();
        if ((0, _jquery2.default)(window).width() > 992) {
            _jquery2.default.scrollify({
                section: ".section",
                scrollbars: false,
                before: function before(i, panels) {
                    var ref = panels[i].attr("data-section-name");
                    (0, _jquery2.default)(".navigation .nav-item.active").removeClass("active");
                    (0, _jquery2.default)(".navigation a[href='#" + ref + "']").parent().addClass("active");
                }
            });
            (0, _jquery2.default)(".navigation a").on("click", function () {
                _jquery2.default.scrollify.move((0, _jquery2.default)(this).attr("href"));
            });
        } else {
            _jquery2.default.scrollify.destroy();
        }
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);