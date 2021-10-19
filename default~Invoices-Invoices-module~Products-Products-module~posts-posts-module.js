(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Invoices-Invoices-module~Products-Products-module~posts-posts-module"],{

/***/ "M9IT":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js ***!
  \***************************************************************************/
/*! exports provided: MAT_PAGINATOR_DEFAULT_OPTIONS, MAT_PAGINATOR_INTL_PROVIDER, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginator, MatPaginatorIntl, MatPaginatorModule, PageEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_DEFAULT_OPTIONS", function() { return MAT_PAGINATOR_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function() { return MAT_PAGINATOR_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function() { return MAT_PAGINATOR_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginator", function() { return MatPaginator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function() { return MatPaginatorIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function() { return MatPaginatorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEvent", function() { return PageEvent; });
/* harmony import */ var C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
 * include it in a custom provider
 */









function MatPaginator_div_4_mat_form_field_5_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var pageSizeOption_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", pageSizeOption_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n            ", pageSizeOption_r6, "\n          ");
  }
}

function MatPaginator_div_4_mat_form_field_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function MatPaginator_div_4_mat_form_field_5_Template_mat_select_selectionChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r7._changePageSize($event.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MatPaginator_div_4_mat_form_field_5_mat_option_4_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("appearance", ctx_r3._formFieldAppearance)("color", ctx_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("aria-label", ctx_r3._intl.itemsPerPageLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3._displayedPageSizeOptions);
  }
}

function MatPaginator_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.pageSize);
  }
}

function MatPaginator_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MatPaginator_div_4_mat_form_field_5_Template, 7, 6, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, MatPaginator_div_4_div_7_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n        ", ctx_r0._intl.itemsPerPageLabel, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length <= 1);
  }
}

function MatPaginator_button_11_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MatPaginator_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r9.firstPage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r1._intl.firstPageLabel);
  }
}

function MatPaginator_button_29_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MatPaginator_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r11.lastPage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx_r2._intl.lastPageLabel)("matTooltipDisabled", ctx_r2._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r2._nextButtonsDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r2._intl.lastPageLabel);
  }
}

var MatPaginatorIntl = function MatPaginatorIntl() {
  Object(C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatPaginatorIntl);

  /**
   * Stream to emit from when labels are changed. Use this to notify components when the labels have
   * changed after initialization.
   */
  this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
  /** A label for the page size selector. */

  this.itemsPerPageLabel = 'Items per page:';
  /** A label for the button that increments the current page. */

  this.nextPageLabel = 'Next page';
  /** A label for the button that decrements the current page. */

  this.previousPageLabel = 'Previous page';
  /** A label for the button that moves to the first page. */

  this.firstPageLabel = 'First page';
  /** A label for the button that moves to the last page. */

  this.lastPageLabel = 'Last page';
  /** A label for the range of items within the current page and the length of the whole list. */

  this.getRangeLabel = function (page, pageSize, length) {
    if (length == 0 || pageSize == 0) {
      return "0 of ".concat(length);
    }

    length = Math.max(length, 0);
    var startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

    var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return "".concat(startIndex + 1, " \u2013 ").concat(endIndex, " of ").concat(length);
  };
};

MatPaginatorIntl.ɵfac = function MatPaginatorIntl_Factory(t) {
  return new (t || MatPaginatorIntl)();
};

MatPaginatorIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"])({
  factory: function MatPaginatorIntl_Factory() {
    return new MatPaginatorIntl();
  },
  token: MatPaginatorIntl,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatPaginatorIntl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/** @docs-private */


function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
/** @docs-private */


var MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_5__["SkipSelf"](), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The default page size if there is no page size and there are no provided page size options. */

var DEFAULT_PAGE_SIZE = 50;
/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */

var PageEvent = function PageEvent() {
  Object(C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, PageEvent);
};
/** Injection token that can be used to provide the default options for the paginator module. */


var MAT_PAGINATOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('MAT_PAGINATOR_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to MatPaginator.

/** @docs-private */

var MatPaginatorBase = function MatPaginatorBase() {
  Object(C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatPaginatorBase);
};

var _MatPaginatorBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["mixinInitialized"])(MatPaginatorBase));
/**
 * Component to provide navigation between paged information. Displays the size of the current
 * page, user-selectable options to change that size, what items are being shown, and
 * navigational button to go to the previous or next page.
 */


var MatPaginator = /*#__PURE__*/function (_MatPaginatorBase2) {
  Object(C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(MatPaginator, _MatPaginatorBase2);

  var _super = Object(C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(MatPaginator);

  function MatPaginator(_intl, _changeDetectorRef, defaults) {
    var _this;

    Object(C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatPaginator);

    _this = _super.call(this);
    _this._intl = _intl;
    _this._changeDetectorRef = _changeDetectorRef;
    _this._pageIndex = 0;
    _this._length = 0;
    _this._pageSizeOptions = [];
    _this._hidePageSize = false;
    _this._showFirstLastButtons = false;
    /** Event emitted when the paginator changes the page size or page index. */

    _this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    _this._intlChanges = _intl.changes.subscribe(function () {
      return _this._changeDetectorRef.markForCheck();
    });

    if (defaults) {
      var pageSize = defaults.pageSize,
          pageSizeOptions = defaults.pageSizeOptions,
          hidePageSize = defaults.hidePageSize,
          showFirstLastButtons = defaults.showFirstLastButtons,
          formFieldAppearance = defaults.formFieldAppearance;

      if (pageSize != null) {
        _this._pageSize = pageSize;
      }

      if (pageSizeOptions != null) {
        _this._pageSizeOptions = pageSizeOptions;
      }

      if (hidePageSize != null) {
        _this._hidePageSize = hidePageSize;
      }

      if (showFirstLastButtons != null) {
        _this._showFirstLastButtons = showFirstLastButtons;
      }

      if (formFieldAppearance != null) {
        _this._formFieldAppearance = formFieldAppearance;
      }
    }

    return _this;
  }
  /** The zero-based page index of the displayed list of items. Defaulted to 0. */


  Object(C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatPaginator, [{
    key: "pageIndex",
    get: function get() {
      return this._pageIndex;
    },
    set: function set(value) {
      this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceNumberProperty"])(value), 0);

      this._changeDetectorRef.markForCheck();
    }
    /** The length of the total number of items that are being paginated. Defaulted to 0. */

  }, {
    key: "length",
    get: function get() {
      return this._length;
    },
    set: function set(value) {
      this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceNumberProperty"])(value);

      this._changeDetectorRef.markForCheck();
    }
    /** Number of items to display on a page. By default set to 50. */

  }, {
    key: "pageSize",
    get: function get() {
      return this._pageSize;
    },
    set: function set(value) {
      this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceNumberProperty"])(value), 0);

      this._updateDisplayedPageSizeOptions();
    }
    /** The set of provided page size options to display to the user. */

  }, {
    key: "pageSizeOptions",
    get: function get() {
      return this._pageSizeOptions;
    },
    set: function set(value) {
      this._pageSizeOptions = (value || []).map(function (p) {
        return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceNumberProperty"])(p);
      });

      this._updateDisplayedPageSizeOptions();
    }
    /** Whether to hide the page size selection UI from the user. */

  }, {
    key: "hidePageSize",
    get: function get() {
      return this._hidePageSize;
    },
    set: function set(value) {
      this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
    }
    /** Whether to show the first/last buttons UI to the user. */

  }, {
    key: "showFirstLastButtons",
    get: function get() {
      return this._showFirstLastButtons;
    },
    set: function set(value) {
      this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._initialized = true;

      this._updateDisplayedPageSizeOptions();

      this._markInitialized();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._intlChanges.unsubscribe();
    }
    /** Advances to the next page if it exists. */

  }, {
    key: "nextPage",
    value: function nextPage() {
      if (!this.hasNextPage()) {
        return;
      }

      var previousPageIndex = this.pageIndex;
      this.pageIndex++;

      this._emitPageEvent(previousPageIndex);
    }
    /** Move back to the previous page if it exists. */

  }, {
    key: "previousPage",
    value: function previousPage() {
      if (!this.hasPreviousPage()) {
        return;
      }

      var previousPageIndex = this.pageIndex;
      this.pageIndex--;

      this._emitPageEvent(previousPageIndex);
    }
    /** Move to the first page if not already there. */

  }, {
    key: "firstPage",
    value: function firstPage() {
      // hasPreviousPage being false implies at the start
      if (!this.hasPreviousPage()) {
        return;
      }

      var previousPageIndex = this.pageIndex;
      this.pageIndex = 0;

      this._emitPageEvent(previousPageIndex);
    }
    /** Move to the last page if not already there. */

  }, {
    key: "lastPage",
    value: function lastPage() {
      // hasNextPage being false implies at the end
      if (!this.hasNextPage()) {
        return;
      }

      var previousPageIndex = this.pageIndex;
      this.pageIndex = this.getNumberOfPages() - 1;

      this._emitPageEvent(previousPageIndex);
    }
    /** Whether there is a previous page. */

  }, {
    key: "hasPreviousPage",
    value: function hasPreviousPage() {
      return this.pageIndex >= 1 && this.pageSize != 0;
    }
    /** Whether there is a next page. */

  }, {
    key: "hasNextPage",
    value: function hasNextPage() {
      var maxPageIndex = this.getNumberOfPages() - 1;
      return this.pageIndex < maxPageIndex && this.pageSize != 0;
    }
    /** Calculate the number of pages */

  }, {
    key: "getNumberOfPages",
    value: function getNumberOfPages() {
      if (!this.pageSize) {
        return 0;
      }

      return Math.ceil(this.length / this.pageSize);
    }
    /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     */

  }, {
    key: "_changePageSize",
    value: function _changePageSize(pageSize) {
      // Current page needs to be updated to reflect the new page size. Navigate to the page
      // containing the previous page's first item.
      var startIndex = this.pageIndex * this.pageSize;
      var previousPageIndex = this.pageIndex;
      this.pageIndex = Math.floor(startIndex / pageSize) || 0;
      this.pageSize = pageSize;

      this._emitPageEvent(previousPageIndex);
    }
    /** Checks whether the buttons for going forwards should be disabled. */

  }, {
    key: "_nextButtonsDisabled",
    value: function _nextButtonsDisabled() {
      return this.disabled || !this.hasNextPage();
    }
    /** Checks whether the buttons for going backwards should be disabled. */

  }, {
    key: "_previousButtonsDisabled",
    value: function _previousButtonsDisabled() {
      return this.disabled || !this.hasPreviousPage();
    }
    /**
     * Updates the list of page size options to display to the user. Includes making sure that
     * the page size is an option and that the list is sorted.
     */

  }, {
    key: "_updateDisplayedPageSizeOptions",
    value: function _updateDisplayedPageSizeOptions() {
      if (!this._initialized) {
        return;
      } // If no page size is provided, use the first page size option or the default page size.


      if (!this.pageSize) {
        this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
      }

      this._displayedPageSizeOptions = this.pageSizeOptions.slice();

      if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
        this._displayedPageSizeOptions.push(this.pageSize);
      } // Sort the numbers using a number-specific sort function.


      this._displayedPageSizeOptions.sort(function (a, b) {
        return a - b;
      });

      this._changeDetectorRef.markForCheck();
    }
    /** Emits an event notifying that a change of the paginator's properties has been triggered. */

  }, {
    key: "_emitPageEvent",
    value: function _emitPageEvent(previousPageIndex) {
      this.page.emit({
        previousPageIndex: previousPageIndex,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        length: this.length
      });
    }
  }]);

  return MatPaginator;
}(_MatPaginatorBase);

MatPaginator.ɵfac = function MatPaginator_Factory(t) {
  return new (t || MatPaginator)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
};

MatPaginator.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: MatPaginator,
  selectors: [["mat-paginator"]],
  hostAttrs: [1, "mat-paginator"],
  inputs: {
    disabled: "disabled",
    pageIndex: "pageIndex",
    length: "length",
    pageSize: "pageSize",
    pageSizeOptions: "pageSizeOptions",
    hidePageSize: "hidePageSize",
    showFirstLastButtons: "showFirstLastButtons",
    color: "color"
  },
  outputs: {
    page: "page"
  },
  exportAs: ["matPaginator"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 34,
  vars: 14,
  consts: [[1, "mat-paginator-outer-container"], [1, "mat-paginator-container"], ["class", "mat-paginator-page-size", 4, "ngIf"], [1, "mat-paginator-range-actions"], [1, "mat-paginator-range-label"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], [1, "mat-paginator-page-size"], [1, "mat-paginator-page-size-label"], ["class", "mat-paginator-page-size-select", 3, "appearance", "color", 4, "ngIf"], ["class", "mat-paginator-page-size-value", 4, "ngIf"], [1, "mat-paginator-page-size-select", 3, "appearance", "color"], [3, "value", "disabled", "aria-label", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mat-paginator-page-size-value"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
  template: function MatPaginator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MatPaginator_div_4_Template, 9, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\n\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\n\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, MatPaginator_button_11_Template, 7, 5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_13_listener() {
        return ctx.previousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "svg", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\n          ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "path", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_21_listener() {
        return ctx.nextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "svg", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\n          ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "\n        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, MatPaginator_button_29_Template, 7, 5, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "\n");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.hidePageSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n        ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), "\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx._intl.previousPageLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx._intl.nextPageLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
  styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"],
  encapsulation: 2,
  changeDetection: 0
});

MatPaginator.ctorParameters = function () {
  return [{
    type: MatPaginatorIntl
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
      args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
    }]
  }];
};

MatPaginator.propDecorators = {
  color: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  pageIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  length: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  pageSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  pageSizeOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  hidePageSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  showFirstLastButtons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  page: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatPaginator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
    args: [{
      selector: 'mat-paginator',
      exportAs: 'matPaginator',
      template: "<div class=\"mat-paginator-outer-container\">\n  <div class=\"mat-paginator-container\">\n    <div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\">\n      <div class=\"mat-paginator-page-size-label\">\n        {{_intl.itemsPerPageLabel}}\n      </div>\n\n      <mat-form-field\n        *ngIf=\"_displayedPageSizeOptions.length > 1\"\n        [appearance]=\"_formFieldAppearance!\"\n        [color]=\"color\"\n        class=\"mat-paginator-page-size-select\">\n        <mat-select\n          [value]=\"pageSize\"\n          [disabled]=\"disabled\"\n          [aria-label]=\"_intl.itemsPerPageLabel\"\n          (selectionChange)=\"_changePageSize($event.value)\">\n          <mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">\n            {{pageSizeOption}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div\n        class=\"mat-paginator-page-size-value\"\n        *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div>\n    </div>\n\n    <div class=\"mat-paginator-range-actions\">\n      <div class=\"mat-paginator-range-label\">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-first\"\n              (click)=\"firstPage()\"\n              [attr.aria-label]=\"_intl.firstPageLabel\"\n              [matTooltip]=\"_intl.firstPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-previous\"\n              (click)=\"previousPage()\"\n              [attr.aria-label]=\"_intl.previousPageLabel\"\n              [matTooltip]=\"_intl.previousPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-next\"\n              (click)=\"nextPage()\"\n              [attr.aria-label]=\"_intl.nextPageLabel\"\n              [matTooltip]=\"_intl.nextPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-last\"\n              (click)=\"lastPage()\"\n              [attr.aria-label]=\"_intl.lastPageLabel\"\n              [matTooltip]=\"_intl.lastPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/>\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n",
      inputs: ['disabled'],
      host: {
        'class': 'mat-paginator'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
      styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"]
    }]
  }], function () {
    return [{
      type: MatPaginatorIntl
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
        args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
    }],
    pageIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    length: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    pageSizeOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    hidePageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    showFirstLastButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatPaginatorModule = function MatPaginatorModule() {
  Object(C_Users_sh_Desktop_New_folder_2_ladyBug1_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatPaginatorModule);
};

MatPaginatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: MatPaginatorModule
});
MatPaginatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  factory: function MatPaginatorModule_Factory(t) {
    return new (t || MatPaginatorModule)();
  },
  providers: [MAT_PAGINATOR_INTL_PROVIDER],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MatPaginatorModule, {
    declarations: function declarations() {
      return [MatPaginator];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"]];
    },
    exports: function exports() {
      return [MatPaginator];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatPaginatorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"]],
      exports: [MatPaginator],
      declarations: [MatPaginator],
      providers: [MAT_PAGINATOR_INTL_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default~Invoices-Invoices-module~Products-Products-module~posts-posts-module.js.map