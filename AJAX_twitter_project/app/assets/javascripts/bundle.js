/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// const { Module } = require("webpack");

class FollowToggle {
    constructor(el) {
        this.element = $(el)
        this.userID = this.element.data("user-id");
        this.followState = this.element.data("initial-follow-state");
        this.render();
        this.element.on("click", this.handleClick.bind(this));
    }
    
    render () {
        if (this.followState === "unfollowed") {
            this.element.text("Follow!");
        } else {
            this.element.text("Unfollow!");
        };
    }

    handleClick(e) {
        e.preventDefault();
        let request;
        debugger;
        if(this.followState === "unfollowed"){
            debugger;
            request = $.ajax({
                method: "POST",
                url: `/users/${this.userID}/follow`,
            }).then(function () {
                    this.followState = "followed";
                    this.element.data("initial-follow-state", "followed");
            });
        } else {
            debugger;
            request = $.ajax({
                method: "DELETE",
                url: `/users/${this.userID}/follow`,
            }).then(function () {
                this.followState = "unfollowed";
                this.element.data("initial-follow-state", "unfollowed");
            });
        };
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowToggle);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _follow_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");


document.addEventListener("DOMContentLoaded", function() {
    $('button.follow-toggle').each(function() {
        const test = new _follow_toggle__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map