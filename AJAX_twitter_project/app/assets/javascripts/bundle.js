/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const APIUtil = {
    followUser: id => {
        // ...
        return $.ajax({
            method: "POST",
            url: `/users/${id}/follow`,
            dataType: 'JSON'
        })
    },

    unfollowUser: id => {
        // ...
        return $.ajax({
            method: "DELETE",
            url: `/users/${id}/follow`,
            dataType: 'JSON'
        })
    }
};

module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// const { Module } = require("webpack");
const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js")

class FollowToggle {
    constructor(el) {
        this.element = $(el)
        this.userID = this.element.data("user-id");
        debugger
        this.followState = this.element.data("initial-follow-state");
        this.render();
        this.element.on("click", this.handleClick.bind(this));
    }
    
    render () {
        if (this.followState === "unfollowed") {
            this.element.text("Follow!");
            this.element.prop("disabled", false);
        } else if (this.followState === "followed") {
            this.element.text("Unfollow!");
            this.element.prop("disabled", false);
        } else {
            this.element.prop("disabled", true);
        };
    }

    handleClick(e) {
        e.preventDefault();
        if(this.followState === "unfollowed"){
            APIUtil.followUser(this.userID)
                .then(() => {
                    this.followState = "followed";
                    this.render();
                });
            this.followState = "following";
            this.render();
        } else {
            APIUtil.unfollowUser(this.userID)
                .then(() => {
                    this.followState = "unfollowed";
                    this.render();
                });
            this.followState = "unfollowing";
            this.render();
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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