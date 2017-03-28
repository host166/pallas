(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pallas"] = factory();
	else
		root["pallas"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Switch__ = __webpack_require__(4);


function init(...components) {
  const com = {};
  components.forEach(c => {
    Object.keys(c).forEach(key => {
      com[`P${key}`] = c[key];
    });
  });

  return com;
}

/* harmony default export */ __webpack_exports__["a"] = init(__WEBPACK_IMPORTED_MODULE_0__Switch__["a" /* default */]);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * @file 入口
 */

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'switch',
  data() {
    return {
      onText: 'on',
      offText: 'off',
      size: 'small',
      disabled: false,
      onColor: '#e266ab',
      offColor: '#efe565',
      hasText: true,
      checked: false,
      hasIcon: false,
      onIconClass: "",
      offIconClass: "",
      isDisabled: false
    };
  },
  computed: {
    switchWrapper() {
      return ['xg-switch', {
        ['switch-' + this.size]: !!this.size,
        'switch-disabled': !!this.isDisabled,
        'switchOn': this.checked
      }];
    },
    switchOn() {
      return {
        backgroundColor: this.onColor,
        borderColor: this.onColor
      };
    },
    switchOff() {
      return {
        backgroundColor: this.offColor,
        borderColor: this.offColor
      };
    },
    actionStyle() {
      if (this.isDisabled) {
        return this.switchDisabled;
      } else if (this.checked) {
        return this.switchOn;
      } else {
        return this.switchOff;
      }
    }
  },
  methods: {
    toggle() {
      if (!this.isDisabled) {
        this.checked = !this.checked;
        this.actionStyle = this.checked ? this.switchOn : this.switchOff;
      }
      this.$emit('change', this.checked);
    }
  }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Switch_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Switch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Switch_vue__);


/* harmony default export */ __webpack_exports__["a"] = {
  Switch: __WEBPACK_IMPORTED_MODULE_0__Switch_vue___default.a
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(5)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  "data-v-082a53cf",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: [_vm.switchWrapper],
    style: (_vm.actionStyle),
    attrs: {
      "role": "switch"
    },
    on: {
      "click": _vm.toggle
    }
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.checked),
      expression: "checked"
    }],
    staticClass: "switch-on"
  }, [(_vm.hasIcon) ? _c('i', {
    class: _vm.onIconClass
  }) : _vm._e(), _vm._v(" "), (!_vm.hasIcon && _vm.hasText) ? _c('span', [_vm._v(_vm._s(_vm.onText))]) : _vm._e()]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.checked),
      expression: "!checked"
    }],
    staticClass: "switch-off"
  }, [(_vm.hasIcon) ? _c('i', {
    class: _vm.offIconClass
  }) : _vm._e(), _vm._v(" "), (!_vm.hasIcon && _vm.hasText) ? _c('span', [_vm._v(_vm._s(_vm.offText))]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__directives__);



function Pallas(Vue) {
  Object.keys(__WEBPACK_IMPORTED_MODULE_1__directives___default.a).forEach(key => {
    Vue.directive(key, __WEBPACK_IMPORTED_MODULE_1__directives___default.a[key]);
  });

  Object.keys(__WEBPACK_IMPORTED_MODULE_0__components__["a" /* default */]).forEach(key => {
    Vue.component(key, __WEBPACK_IMPORTED_MODULE_0__components__["a" /* default */][key]);
  });

  Vue.prototype.$pallas = {};
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Pallas);
}

module.exports = Pallas;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)(module)))

/***/ })
/******/ ]);
});
//# sourceMappingURL=pallas.js.map