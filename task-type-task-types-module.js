(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-type-task-types-module"],{

/***/ "6XIi":
/*!*******************************************************************!*\
  !*** ./src/app/AdminPanel/task-type/task-types-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: TaskTypesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTypesRoutingModule", function() { return TaskTypesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _task_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-type.component */ "PO57");





var routes = [
    { path: '', component: _task_type_component__WEBPACK_IMPORTED_MODULE_2__["TaskTypeComponent"] },
];
var TaskTypesRoutingModule = /** @class */ (function () {
    function TaskTypesRoutingModule() {
    }
    TaskTypesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskTypesRoutingModule });
    TaskTypesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TaskTypesRoutingModule_Factory(t) { return new (t || TaskTypesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return TaskTypesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskTypesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskTypesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Ny8I":
/*!***********************************************************!*\
  !*** ./src/app/AdminPanel/task-type/task-types.module.ts ***!
  \***********************************************************/
/*! exports provided: TaskTypesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTypesModule", function() { return TaskTypesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _task_types_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-types-routing.module */ "6XIi");




var TaskTypesModule = /** @class */ (function () {
    function TaskTypesModule() {
    }
    TaskTypesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskTypesModule });
    TaskTypesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TaskTypesModule_Factory(t) { return new (t || TaskTypesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _task_types_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaskTypesRoutingModule"]
            ]] });
    return TaskTypesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskTypesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _task_types_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaskTypesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskTypesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _task_types_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaskTypesRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=task-type-task-types-module.js.map