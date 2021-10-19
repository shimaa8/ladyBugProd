(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~farms-farms-module~permeations-permeations-module~posts-posts-module~roles-roles-module~supe~fa32a34a"],{

/***/ "+oTs":
/*!*************************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-focustrap.js ***!
  \*************************************************************************/
/*! exports provided: FocusTrap, FocusTrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapModule", function() { return FocusTrapModule; });
/* harmony import */ var C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ "YyRF");







var FocusTrap = /*#__PURE__*/function () {
  function FocusTrap(el) {
    Object(C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FocusTrap);

    this.el = el;
  }

  Object(C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FocusTrap, [{
    key: "onkeydown",
    value: function onkeydown(e) {
      if (this.pFocusTrapDisabled !== true) {
        e.preventDefault();
        var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].getFocusableElements(this.el.nativeElement);

        if (focusableElements && focusableElements.length > 0) {
          if (!focusableElements[0].ownerDocument.activeElement) {
            focusableElements[0].focus();
          } else {
            var focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);

            if (e.shiftKey) {
              if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
            } else {
              if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
            }
          }
        }
      }
    }
  }]);

  return FocusTrap;
}();

FocusTrap.ɵfac = function FocusTrap_Factory(t) {
  return new (t || FocusTrap)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
};

FocusTrap.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: FocusTrap,
  selectors: [["", "pFocusTrap", ""]],
  hostBindings: function FocusTrap_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.tab", function FocusTrap_keydown_tab_HostBindingHandler($event) {
        return ctx.onkeydown($event);
      })("keydown.shift.tab", function FocusTrap_keydown_shift_tab_HostBindingHandler($event) {
        return ctx.onkeydown($event);
      });
    }
  },
  inputs: {
    pFocusTrapDisabled: "pFocusTrapDisabled"
  }
});

FocusTrap.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }];
};

FocusTrap.propDecorators = {
  pFocusTrapDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  onkeydown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['keydown.tab', ['$event']]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['keydown.shift.tab', ['$event']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FocusTrap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
    args: [{
      selector: '[pFocusTrap]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }];
  }, {
    onkeydown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['keydown.tab', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['keydown.shift.tab', ['$event']]
    }],
    pFocusTrapDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();

var FocusTrapModule = function FocusTrapModule() {
  Object(C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FocusTrapModule);
};

FocusTrapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: FocusTrapModule
});
FocusTrapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function FocusTrapModule_Factory(t) {
    return new (t || FocusTrapModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FocusTrapModule, {
    declarations: function declarations() {
      return [FocusTrap];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
    },
    exports: function exports() {
      return [FocusTrap];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FocusTrapModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      exports: [FocusTrap],
      declarations: [FocusTrap]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "/RsI":
/*!**********************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js ***!
  \**********************************************************************/
/*! exports provided: Dialog, DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dom */ "YyRF");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_focustrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/focustrap */ "+oTs");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");













var _c0 = ["titlebar"];
var _c1 = ["content"];
var _c2 = ["footer"];

function Dialog_div_1_div_2_div_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx_r9.id + "-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.header);
  }
}

function Dialog_div_1_div_2_div_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx_r10.id + "-label");
  }
}

function Dialog_div_1_div_2_div_3_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

var _c3 = function _c3() {
  return {
    "p-dialog-header-icon p-dialog-header-maximize p-link": true
  };
};

function Dialog_div_1_div_2_div_3_button_11_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Dialog_div_1_div_2_div_3_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return ctx_r14.maximize();
    })("keydown.enter", function Dialog_div_1_div_2_div_3_button_11_Template_button_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return ctx_r16.maximize();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r12.maximized ? ctx_r12.minimizeIcon : ctx_r12.maximizeIcon);
  }
}

var _c4 = function _c4() {
  return {
    "p-dialog-header-icon p-dialog-header-close p-link": true
  };
};

function Dialog_div_1_div_2_div_3_button_13_Template(rf, ctx) {
  if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Dialog_div_1_div_2_div_3_button_13_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return ctx_r17.close($event);
    })("keydown.enter", function Dialog_div_1_div_2_div_3_button_13_Template_button_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return ctx_r19.close($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r13.closeIcon);
  }
}

function Dialog_div_1_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function Dialog_div_1_div_2_div_3_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return ctx_r20.initDrag($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Dialog_div_1_div_2_div_3_span_3_Template, 2, 2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, Dialog_div_1_div_2_div_3_span_5_Template, 4, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, Dialog_div_1_div_2_div_3_ng_container_7_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, Dialog_div_1_div_2_div_3_button_11_Template, 4, 3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, Dialog_div_1_div_2_div_3_button_13_Template, 4, 3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.headerFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.maximizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.closable);
  }
}

function Dialog_div_1_div_2_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

function Dialog_div_1_div_2_div_13_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

function Dialog_div_1_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, Dialog_div_1_div_2_div_13_ng_container_5_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.footerTemplate);
  }
}

function Dialog_div_1_div_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function Dialog_div_1_div_2_div_15_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return ctx_r24.initResize($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

var _c5 = function _c5(a1, a2, a3, a4) {
  return {
    "p-dialog p-component": true,
    "p-dialog-rtl": a1,
    "p-dialog-draggable": a2,
    "p-dialog-resizable": a3,
    "p-dialog-maximized": a4
  };
};

var _c6 = function _c6(a0, a1) {
  return {
    transform: a0,
    transition: a1
  };
};

var _c7 = function _c7(a1) {
  return {
    value: "visible",
    params: a1
  };
};

function Dialog_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@animation.start", function Dialog_div_1_div_2_Template_div_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r26.onAnimationStart($event);
    })("@animation.done", function Dialog_div_1_div_2_Template_div_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r28.onAnimationEnd($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Dialog_div_1_div_2_div_3_Template, 16, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, Dialog_div_1_div_2_ng_container_10_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, Dialog_div_1_div_2_div_13_Template, 7, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, Dialog_div_1_div_2_div_15_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](15, _c5, ctx_r1.rtl, ctx_r1.draggable, ctx_r1.resizable, ctx_r1.maximized))("ngStyle", ctx_r1.style)("pFocusTrapDisabled", ctx_r1.focusTrap === false)("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](20, _c6, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-labelledby", ctx_r1.id + "-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "p-dialog-content")("ngStyle", ctx_r1.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.footerFacet || ctx_r1.footerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.resizable);
  }
}

var _c8 = function _c8(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  return {
    "p-dialog-mask": true,
    "p-component-overlay": a1,
    "p-dialog-mask-scrollblocker": a2,
    "p-dialog-left": a3,
    "p-dialog-right": a4,
    "p-dialog-top": a5,
    "p-dialog-top-left": a6,
    "p-dialog-top-right": a7,
    "p-dialog-bottom": a8,
    "p-dialog-bottom-left": a9,
    "p-dialog-bottom-right": a10
  };
};

function Dialog_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Dialog_div_1_div_2_Template, 17, 25, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r0.maskStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](4, _c8, [ctx_r0.modal, ctx_r0.modal || ctx_r0.blockScroll, ctx_r0.position === "left", ctx_r0.position === "right", ctx_r0.position === "top", ctx_r0.position === "topleft" || ctx_r0.position === "top-left", ctx_r0.position === "topright" || ctx_r0.position === "top-right", ctx_r0.position === "bottom", ctx_r0.position === "bottomleft" || ctx_r0.position === "bottom-left", ctx_r0.position === "bottomright" || ctx_r0.position === "bottom-right"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.visible);
  }
}

var _c9 = ["*", [["p-header"]], [["p-footer"]]];
var _c10 = ["*", "p-header", "p-footer"];
var idx = 0;
var showAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
  transform: '{{transform}}',
  opacity: 0
}), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{transition}}')]);
var hideAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{transition}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
  transform: '{{transform}}',
  opacity: 0
}))]);

var Dialog = /*#__PURE__*/function () {
  function Dialog(el, renderer, zone, cd) {
    Object(C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dialog);

    this.el = el;
    this.renderer = renderer;
    this.zone = zone;
    this.cd = cd;
    this.draggable = true;
    this.resizable = true;
    this.closeOnEscape = true;
    this.closable = true;
    this.showHeader = true;
    this.blockScroll = false;
    this.autoZIndex = true;
    this.baseZIndex = 0;
    this.minX = 0;
    this.minY = 0;
    this.focusOnShow = true;
    this.keepInViewport = true;
    this.focusTrap = true;
    this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    this.closeIcon = 'pi pi-times';
    this.minimizeIcon = 'pi pi-window-minimize';
    this.maximizeIcon = 'pi pi-window-maximize';
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.onResizeInit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.onResizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.id = "p-dialog-".concat(idx++);
    this._style = {};
    this._position = "center";
    this.transformOptions = "scale(0.7)";
  }

  Object(C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dialog, [{
    key: "positionLeft",
    get: function get() {
      return 0;
    },
    set: function set(_positionLeft) {
      console.log("positionLeft property is deprecated.");
    }
  }, {
    key: "positionTop",
    get: function get() {
      return 0;
    },
    set: function set(_positionTop) {
      console.log("positionTop property is deprecated.");
    }
  }, {
    key: "responsive",
    get: function get() {
      return false;
    },
    set: function set(_responsive) {
      console.log("Responsive property is deprecated.");
    }
  }, {
    key: "breakpoint",
    get: function get() {
      return 649;
    },
    set: function set(_breakpoint) {
      console.log("Breakpoint property is not utilized and deprecated, use CSS media queries instead.");
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this = this;

      this.templates.forEach(function (item) {
        switch (item.getType()) {
          case 'header':
            _this.headerTemplate = item.template;
            break;

          case 'content':
            _this.contentTemplate = item.template;
            break;

          case 'footer':
            _this.footerTemplate = item.template;
            break;

          default:
            _this.contentTemplate = item.template;
            break;
        }
      });
    }
  }, {
    key: "visible",
    get: function get() {
      return this._visible;
    },
    set: function set(value) {
      this._visible = value;

      if (this._visible && !this.maskVisible) {
        this.maskVisible = true;
      }
    }
  }, {
    key: "style",
    get: function get() {
      return this._style;
    },
    set: function set(value) {
      if (value) {
        this._style = Object.assign({}, value);
        this.originalStyle = value;
      }
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(value) {
      this._position = value;

      switch (value) {
        case 'topleft':
        case 'bottomleft':
        case 'left':
          this.transformOptions = "translate3d(-100%, 0px, 0px)";
          break;

        case 'topright':
        case 'bottomright':
        case 'right':
          this.transformOptions = "translate3d(100%, 0px, 0px)";
          break;

        case 'bottom':
          this.transformOptions = "translate3d(0px, 100%, 0px)";
          break;

        case 'top':
          this.transformOptions = "translate3d(0px, -100%, 0px)";
          break;

        default:
          this.transformOptions = "scale(0.7)";
          break;
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      var focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.container, '[autofocus]');

      if (focusable) {
        this.zone.runOutsideAngular(function () {
          setTimeout(function () {
            return focusable.focus();
          }, 5);
        });
      }
    }
  }, {
    key: "close",
    value: function close(event) {
      this.visibleChange.emit(false);
      event.preventDefault();
    }
  }, {
    key: "enableModality",
    value: function enableModality() {
      var _this2 = this;

      if (this.closable && this.dismissableMask) {
        this.maskClickListener = this.renderer.listen(this.wrapper, 'click', function (event) {
          if (_this2.wrapper && _this2.wrapper.isSameNode(event.target)) {
            _this2.close(event);
          }
        });
      }

      if (this.modal) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(document.body, 'p-overflow-hidden');
      }
    }
  }, {
    key: "disableModality",
    value: function disableModality() {
      if (this.wrapper) {
        if (this.dismissableMask) {
          this.unbindMaskClickListener();
        }

        if (this.modal) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
        }

        if (!this.cd.destroyed) {
          this.cd.detectChanges();
        }
      }
    }
  }, {
    key: "maximize",
    value: function maximize() {
      this.maximized = !this.maximized;

      if (!this.modal && !this.blockScroll) {
        if (this.maximized) primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(document.body, 'p-overflow-hidden');else primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
      }
    }
  }, {
    key: "unbindMaskClickListener",
    value: function unbindMaskClickListener() {
      if (this.maskClickListener) {
        this.maskClickListener();
        this.maskClickListener = null;
      }
    }
  }, {
    key: "moveOnTop",
    value: function moveOnTop() {
      if (this.autoZIndex) {
        this.container.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex);
        this.wrapper.style.zIndex = String(this.baseZIndex + (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex - 1));
      }
    }
  }, {
    key: "initDrag",
    value: function initDrag(event) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'p-dialog-header-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
        return;
      }

      if (this.draggable) {
        this.dragging = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        this.container.style.margin = '0';
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(document.body, 'p-unselectable-text');
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(event) {
      if (this.focusTrap) {
        if (event.which === 9) {
          event.preventDefault();
          var focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getFocusableElements(this.container);

          if (focusableElements && focusableElements.length > 0) {
            if (!focusableElements[0].ownerDocument.activeElement) {
              focusableElements[0].focus();
            } else {
              var focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);

              if (event.shiftKey) {
                if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
              } else {
                if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
              }
            }
          }
        }
      }
    }
  }, {
    key: "onDrag",
    value: function onDrag(event) {
      if (this.dragging) {
        var containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOuterWidth(this.container);
        var containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOuterHeight(this.container);
        var deltaX = event.pageX - this.lastPageX;
        var deltaY = event.pageY - this.lastPageY;
        var offset = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOffset(this.container);
        var leftPos = offset.left + deltaX;
        var topPos = offset.top + deltaY;
        var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getViewport();
        this.container.style.position = 'fixed';

        if (this.keepInViewport) {
          if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
            this._style.left = leftPos + 'px';
            this.lastPageX = event.pageX;
            this.container.style.left = leftPos + 'px';
          }

          if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
            this._style.top = topPos + 'px';
            this.lastPageY = event.pageY;
            this.container.style.top = topPos + 'px';
          }
        } else {
          this.lastPageX = event.pageX;
          this.container.style.left = leftPos + 'px';
          this.lastPageY = event.pageY;
          this.container.style.top = topPos + 'px';
        }
      }
    }
  }, {
    key: "endDrag",
    value: function endDrag(event) {
      if (this.dragging) {
        this.dragging = false;
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'p-unselectable-text');
        this.cd.detectChanges();
        this.onDragEnd.emit(event);
      }
    }
  }, {
    key: "resetPosition",
    value: function resetPosition() {
      this.container.style.position = '';
      this.container.style.left = '';
      this.container.style.top = '';
      this.container.style.margin = '';
    } //backward compatibility

  }, {
    key: "center",
    value: function center() {
      this.resetPosition();
    }
  }, {
    key: "initResize",
    value: function initResize(event) {
      if (this.resizable) {
        this.resizing = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(document.body, 'p-unselectable-text');
        this.onResizeInit.emit(event);
      }
    }
  }, {
    key: "onResize",
    value: function onResize(event) {
      if (this.resizing) {
        var deltaX = event.pageX - this.lastPageX;
        var deltaY = event.pageY - this.lastPageY;
        var containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOuterWidth(this.container);
        var containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOuterHeight(this.container);
        var contentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOuterHeight(this.contentViewChild.nativeElement);
        var newWidth = containerWidth + deltaX;
        var newHeight = containerHeight + deltaY;
        var minWidth = this.container.style.minWidth;
        var minHeight = this.container.style.minHeight;
        var offset = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getOffset(this.container);
        var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getViewport();
        var hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);

        if (hasBeenDragged) {
          newWidth += deltaX;
          newHeight += deltaY;
        }

        if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
          this._style.width = newWidth + 'px';
          this.container.style.width = this._style.width;
        }

        if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
          this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + 'px';

          if (this._style.height) {
            this._style.height = newHeight + 'px';
            this.container.style.height = this._style.height;
          }
        }

        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
      }
    }
  }, {
    key: "resizeEnd",
    value: function resizeEnd(event) {
      if (this.resizing) {
        this.resizing = false;
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'p-unselectable-text');
        this.onResizeEnd.emit(event);
      }
    }
  }, {
    key: "bindGlobalListeners",
    value: function bindGlobalListeners() {
      if (this.draggable) {
        this.bindDocumentDragListener();
        this.bindDocumentDragEndListener();
      }

      if (this.resizable) {
        this.bindDocumentResizeListeners();
      }

      if (this.closeOnEscape && this.closable) {
        this.bindDocumentEscapeListener();
      }
    }
  }, {
    key: "unbindGlobalListeners",
    value: function unbindGlobalListeners() {
      this.unbindDocumentDragListener();
      this.unbindDocumentDragEndListener();
      this.unbindDocumentResizeListeners();
      this.unbindDocumentEscapeListener();
    }
  }, {
    key: "bindDocumentDragListener",
    value: function bindDocumentDragListener() {
      var _this3 = this;

      this.zone.runOutsideAngular(function () {
        _this3.documentDragListener = _this3.onDrag.bind(_this3);
        window.document.addEventListener('mousemove', _this3.documentDragListener);
      });
    }
  }, {
    key: "unbindDocumentDragListener",
    value: function unbindDocumentDragListener() {
      if (this.documentDragListener) {
        window.document.removeEventListener('mousemove', this.documentDragListener);
        this.documentDragListener = null;
      }
    }
  }, {
    key: "bindDocumentDragEndListener",
    value: function bindDocumentDragEndListener() {
      var _this4 = this;

      this.zone.runOutsideAngular(function () {
        _this4.documentDragEndListener = _this4.endDrag.bind(_this4);
        window.document.addEventListener('mouseup', _this4.documentDragEndListener);
      });
    }
  }, {
    key: "unbindDocumentDragEndListener",
    value: function unbindDocumentDragEndListener() {
      if (this.documentDragEndListener) {
        window.document.removeEventListener('mouseup', this.documentDragEndListener);
        this.documentDragEndListener = null;
      }
    }
  }, {
    key: "bindDocumentResizeListeners",
    value: function bindDocumentResizeListeners() {
      var _this5 = this;

      this.zone.runOutsideAngular(function () {
        _this5.documentResizeListener = _this5.onResize.bind(_this5);
        _this5.documentResizeEndListener = _this5.resizeEnd.bind(_this5);
        window.document.addEventListener('mousemove', _this5.documentResizeListener);
        window.document.addEventListener('mouseup', _this5.documentResizeEndListener);
      });
    }
  }, {
    key: "unbindDocumentResizeListeners",
    value: function unbindDocumentResizeListeners() {
      if (this.documentResizeListener && this.documentResizeEndListener) {
        window.document.removeEventListener('mousemove', this.documentResizeListener);
        window.document.removeEventListener('mouseup', this.documentResizeEndListener);
        this.documentResizeListener = null;
        this.documentResizeEndListener = null;
      }
    }
  }, {
    key: "bindDocumentEscapeListener",
    value: function bindDocumentEscapeListener() {
      var _this6 = this;

      var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', function (event) {
        if (event.which == 27) {
          if (parseInt(_this6.container.style.zIndex) === primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex + _this6.baseZIndex) {
            _this6.close(event);
          }
        }
      });
    }
  }, {
    key: "unbindDocumentEscapeListener",
    value: function unbindDocumentEscapeListener() {
      if (this.documentEscapeListener) {
        this.documentEscapeListener();
        this.documentEscapeListener = null;
      }
    }
  }, {
    key: "appendContainer",
    value: function appendContainer() {
      if (this.appendTo) {
        if (this.appendTo === 'body') document.body.appendChild(this.wrapper);else primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].appendChild(this.wrapper, this.appendTo);
      }
    }
  }, {
    key: "restoreAppend",
    value: function restoreAppend() {
      if (this.container && this.appendTo) {
        this.el.nativeElement.appendChild(this.wrapper);
      }
    }
  }, {
    key: "onAnimationStart",
    value: function onAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.container = event.element;
          this.wrapper = this.container.parentElement;
          this.onShow.emit({});
          this.appendContainer();
          this.moveOnTop();
          this.bindGlobalListeners();

          if (this.modal) {
            this.enableModality();
          }

          if (!this.modal && this.blockScroll) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].addClass(document.body, 'p-overflow-hidden');
          }

          if (this.focusOnShow) {
            this.focus();
          }

          break;
      }
    }
  }, {
    key: "onAnimationEnd",
    value: function onAnimationEnd(event) {
      switch (event.toState) {
        case 'void':
          this.onContainerDestroy();
          this.onHide.emit({});
          break;
      }
    }
  }, {
    key: "onContainerDestroy",
    value: function onContainerDestroy() {
      this.unbindGlobalListeners();
      this.dragging = false;
      this.maskVisible = false;

      if (this.maximized) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
        this.maximized = false;
      }

      if (this.modal) {
        this.disableModality();
      }

      if (this.blockScroll) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
      }

      this.container = null;
      this.wrapper = null;
      this._style = this.originalStyle ? Object.assign({}, this.originalStyle) : {};
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.container) {
        this.restoreAppend();
        this.onContainerDestroy();
      }
    }
  }]);

  return Dialog;
}();

Dialog.ɵfac = function Dialog_Factory(t) {
  return new (t || Dialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]));
};

Dialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: Dialog,
  selectors: [["p-dialog"]],
  contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__["Header"], true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__["Footer"], true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"], false);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Dialog_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.headerViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.footerViewChild = _t.first);
    }
  },
  inputs: {
    draggable: "draggable",
    resizable: "resizable",
    closeOnEscape: "closeOnEscape",
    closable: "closable",
    showHeader: "showHeader",
    blockScroll: "blockScroll",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    minX: "minX",
    minY: "minY",
    focusOnShow: "focusOnShow",
    keepInViewport: "keepInViewport",
    focusTrap: "focusTrap",
    transitionOptions: "transitionOptions",
    closeIcon: "closeIcon",
    minimizeIcon: "minimizeIcon",
    maximizeIcon: "maximizeIcon",
    positionLeft: "positionLeft",
    positionTop: "positionTop",
    responsive: "responsive",
    breakpoint: "breakpoint",
    visible: "visible",
    style: "style",
    position: "position",
    header: "header",
    contentStyle: "contentStyle",
    contentStyleClass: "contentStyleClass",
    modal: "modal",
    dismissableMask: "dismissableMask",
    rtl: "rtl",
    appendTo: "appendTo",
    styleClass: "styleClass",
    maskStyleClass: "maskStyleClass",
    maximizable: "maximizable"
  },
  outputs: {
    onShow: "onShow",
    onHide: "onHide",
    visibleChange: "visibleChange",
    onResizeInit: "onResizeInit",
    onResizeEnd: "onResizeEnd",
    onDragEnd: "onDragEnd"
  },
  ngContentSelectors: _c10,
  decls: 3,
  vars: 1,
  consts: [[3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], ["container", ""], ["class", "p-dialog-header", 3, "mousedown", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["content", ""], [4, "ngTemplateOutlet"], ["class", "p-dialog-footer", 4, "ngIf"], ["class", "p-resizable-handle", "style", "z-index: 90;", 3, "mousedown", 4, "ngIf"], [1, "p-dialog-header", 3, "mousedown"], ["titlebar", ""], ["class", "p-dialog-title", 4, "ngIf"], [1, "p-dialog-header-icons"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], [1, "p-dialog-title"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter"], [1, "p-dialog-header-maximize-icon", 3, "ngClass"], [1, "p-dialog-header-close-icon", 3, "ngClass"], [1, "p-dialog-footer"], ["footer", ""], [1, "p-resizable-handle", 2, "z-index", "90", 3, "mousedown"]],
  template: function Dialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Dialog_div_1_Template, 4, 15, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\n    ");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.maskVisible);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_7__["FocusTrap"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["Ripple"]],
  styles: [".p-dialog-mask{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,0);display:-ms-flexbox;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{-ms-flex-direction:column;-ms-transform:scale(1);display:-ms-flexbox;display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{-ms-flex-align:center;-ms-flex-pack:justify;align-items:center;display:-ms-flexbox;display:flex;justify-content:space-between}.p-dialog-footer,.p-dialog-header{-ms-flex-negative:0;flex-shrink:0}.p-dialog .p-dialog-header-icon,.p-dialog .p-dialog-header-icons{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-dialog .p-dialog-header-icon{-ms-flex-pack:center;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:rgba(0,0,0,0)}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-ms-transform:none;height:100%;max-height:100%;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{-ms-flex-positive:1;flex-grow:1}.p-dialog-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-right{-ms-flex-pack:end;justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{-ms-flex-align:start;align-items:flex-start}.p-dialog-top-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-top-right{-ms-flex-align:start;-ms-flex-pack:end;align-items:flex-start;justify-content:flex-end}.p-dialog-bottom,.p-dialog-bottom-left{-ms-flex-align:end;align-items:flex-end}.p-dialog-bottom-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-bottom-right{-ms-flex-align:end;-ms-flex-pack:end;align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}"],
  encapsulation: 2,
  data: {
    animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(showAnimation)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('visible => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(hideAnimation)])])]
  },
  changeDetection: 0
});

Dialog.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
  }];
};

Dialog.propDecorators = {
  header: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  draggable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  resizable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  positionLeft: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  positionTop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  contentStyle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  contentStyleClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  closeOnEscape: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  dismissableMask: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  rtl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  closable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  responsive: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  appendTo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  styleClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  maskStyleClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  showHeader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  breakpoint: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  blockScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  autoZIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  baseZIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  minX: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  minY: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  focusOnShow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  maximizable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  keepInViewport: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  focusTrap: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  transitionOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  closeIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  minimizeIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  maximizeIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  headerFacet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
    args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["Header"]]
  }],
  footerFacet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
    args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["Footer"]]
  }],
  templates: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
    args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"]]
  }],
  headerViewChild: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
    args: ['titlebar']
  }],
  contentViewChild: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
    args: ['content']
  }],
  footerViewChild: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
    args: ['footer']
  }],
  onShow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onHide: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  visibleChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onResizeInit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onResizeEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onDragEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  visible: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  style: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Dialog, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'p-dialog',
      template: "\n        <div *ngIf=\"maskVisible\" [class]=\"maskStyleClass\"\n            [ngClass]=\"{'p-dialog-mask': true, 'p-component-overlay': this.modal, 'p-dialog-mask-scrollblocker': this.modal || this.blockScroll,\n                'p-dialog-left': position === 'left',\n                'p-dialog-right': position === 'right',\n                'p-dialog-top': position === 'top',\n                'p-dialog-top-left': position === 'topleft' || position === 'top-left',\n                'p-dialog-top-right': position === 'topright' || position === 'top-right',\n                'p-dialog-bottom': position === 'bottom',\n                'p-dialog-bottom-left': position === 'bottomleft' || position === 'bottom-left',\n                'p-dialog-bottom-right': position === 'bottomright' || position === 'bottom-right'}\">\n            <div #container [ngClass]=\"{'p-dialog p-component':true, 'p-dialog-rtl':rtl,'p-dialog-draggable':draggable,'p-dialog-resizable':resizable, 'p-dialog-maximized': maximized}\"\n                [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"visible\" pFocusTrap [pFocusTrapDisabled]=\"focusTrap === false\"\n                [@animation]=\"{value: 'visible', params: {transform: transformOptions, transition: transitionOptions}}\" (@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\" role=\"dialog\" [attr.aria-labelledby]=\"id + '-label'\">\n                <div #titlebar class=\"p-dialog-header\" (mousedown)=\"initDrag($event)\" *ngIf=\"showHeader\">\n                    <span [attr.id]=\"id + '-label'\" class=\"p-dialog-title\" *ngIf=\"header\">{{header}}</span>\n                    <span [attr.id]=\"id + '-label'\" class=\"p-dialog-title\" *ngIf=\"headerFacet\">\n                        <ng-content select=\"p-header\"></ng-content>\n                    </span>\n                    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n                    <div class=\"p-dialog-header-icons\">\n                        <button *ngIf=\"maximizable\" type=\"button\" [ngClass]=\"{'p-dialog-header-icon p-dialog-header-maximize p-link':true}\" (click)=\"maximize()\" (keydown.enter)=\"maximize()\" tabindex=\"-1\" pRipple>\n                            <span class=\"p-dialog-header-maximize-icon\" [ngClass]=\"maximized ? minimizeIcon : maximizeIcon\"></span>\n                        </button>\n                        <button *ngIf=\"closable\" type=\"button\" [ngClass]=\"{'p-dialog-header-icon p-dialog-header-close p-link':true}\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\" tabindex=\"-1\" pRipple>\n                            <span class=\"p-dialog-header-close-icon\" [ngClass]=\"closeIcon\"></span>\n                        </button>\n                    </div>\n                </div>\n                <div #content [ngClass]=\"'p-dialog-content'\" [ngStyle]=\"contentStyle\" [class]=\"contentStyleClass\">\n                    <ng-content></ng-content>\n                    <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n                </div>\n                <div #footer class=\"p-dialog-footer\" *ngIf=\"footerFacet || footerTemplate\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n                </div>\n                <div *ngIf=\"resizable\" class=\"p-resizable-handle\" style=\"z-index: 90;\" (mousedown)=\"initResize($event)\"></div>\n            </div>\n        </div>\n    ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(showAnimation)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('visible => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(hideAnimation)])])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      styles: [".p-dialog-mask{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,0);display:-ms-flexbox;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{-ms-flex-direction:column;-ms-transform:scale(1);display:-ms-flexbox;display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{-ms-flex-align:center;-ms-flex-pack:justify;align-items:center;display:-ms-flexbox;display:flex;justify-content:space-between}.p-dialog-footer,.p-dialog-header{-ms-flex-negative:0;flex-shrink:0}.p-dialog .p-dialog-header-icon,.p-dialog .p-dialog-header-icons{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-dialog .p-dialog-header-icon{-ms-flex-pack:center;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:rgba(0,0,0,0)}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-ms-transform:none;height:100%;max-height:100%;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{-ms-flex-positive:1;flex-grow:1}.p-dialog-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-right{-ms-flex-pack:end;justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{-ms-flex-align:start;align-items:flex-start}.p-dialog-top-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-top-right{-ms-flex-align:start;-ms-flex-pack:end;align-items:flex-start;justify-content:flex-end}.p-dialog-bottom,.p-dialog-bottom-left{-ms-flex-align:end;align-items:flex-end}.p-dialog-bottom-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-bottom-right{-ms-flex-align:end;-ms-flex-pack:end;align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
    }];
  }, {
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    resizable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    closeOnEscape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    closable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    showHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    blockScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    minX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    minY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    focusOnShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    keepInViewport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    focusTrap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    transitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    closeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    minimizeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    maximizeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    visibleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    onResizeInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    onResizeEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    onDragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    positionLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    positionTop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    responsive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    breakpoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    contentStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    contentStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    modal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    dismissableMask: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    rtl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    maskStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    maximizable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    headerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["Header"]]
    }],
    footerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["Footer"]]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"]]
    }],
    headerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
      args: ['titlebar']
    }],
    contentViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
      args: ['content']
    }],
    footerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
      args: ['footer']
    }]
  });
})();

var DialogModule = function DialogModule() {
  Object(C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DialogModule);
};

DialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: DialogModule
});
DialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function DialogModule_Factory(t) {
    return new (t || DialogModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_7__["FocusTrapModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"]], primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DialogModule, {
    declarations: function declarations() {
      return [Dialog];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_7__["FocusTrapModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"]];
    },
    exports: function exports() {
      return [Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DialogModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_7__["FocusTrapModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_8__["RippleModule"]],
      exports: [Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
      declarations: [Dialog]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default~farms-farms-module~permeations-permeations-module~posts-posts-module~roles-roles-module~supe~fa32a34a.js.map