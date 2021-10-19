(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~blog-farmed-type-blog-farmed-type-module~farms-farms-module"],{

/***/ "MVQ1":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/AdminPanel/farms/irrigation-ways/add-edit-irrigation-ways/add-edit-irrigation-ways.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AddEditIrrigationWaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditIrrigationWaysComponent", function() { return AddEditIrrigationWaysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function AddEditIrrigationWaysComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.error);
} }
function AddEditIrrigationWaysComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                            Arabic Name Is Required\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEditIrrigationWaysComponent_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                            English Name Is Required\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var AddEditIrrigationWaysComponent = /** @class */ (function () {
    function AddEditIrrigationWaysComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddEditIrrigationWaysComponent.prototype.ngOnInit = function () {
    };
    AddEditIrrigationWaysComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddEditIrrigationWaysComponent.ɵfac = function AddEditIrrigationWaysComponent_Factory(t) { return new (t || AddEditIrrigationWaysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    AddEditIrrigationWaysComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEditIrrigationWaysComponent, selectors: [["app-add-edit-irrigation-ways"]], decls: 149, vars: 7, consts: [["mat-dialog-title", ""], ["addFarmedType", "ngForm"], ["class", "row", 4, "ngIf"], [1, "mat-typography"], [1, "row"], [1, "col-md-12"], [1, "form-group"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "name", "name_ar_localized", "required", "", 3, "ngModel", "ngModelChange"], ["name_ar_localized", "ngModel"], [4, "ngIf"], ["matInput", "", "name", "name_en_localized", "required", "", 3, "ngModel", "ngModelChange"], ["name_en_localized", "ngModel"], [1, "d-flex", "justify-content-between"], ["mat-button", "", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "color", "primary", "cdkFocusInitial", "", 3, "mat-dialog-close", "disabled"], [1, "col-12"], ["role", "alert", 1, "alert", "alert-danger"]], template: function AddEditIrrigationWaysComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Irrigation Way ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", null, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddEditIrrigationWaysComponent_div_6_Template, 11, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Arabic Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditIrrigationWaysComponent_Template_input_ngModelChange_21_listener($event) { return ctx.data.FarmedData.name_ar_localized = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddEditIrrigationWaysComponent_mat_error_25_Template, 2, 0, "mat-error", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "English Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 11, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditIrrigationWaysComponent_Template_input_ngModelChange_39_listener($event) { return ctx.data.FarmedData.name_en_localized = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AddEditIrrigationWaysComponent_mat_error_43_Template, 2, 0, "mat-error", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n\n\n\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\n\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "mat-dialog-actions", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditIrrigationWaysComponent_Template_button_click_141_listener() { return ctx.onNoClick(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\n            Save\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\n");
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.FarmedData.name_ar_localized);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors.required);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.FarmedData.name_en_localized);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.required);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data)("disabled", !_r0.valid);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFuZWwvZmFybXMvaXJyaWdhdGlvbi13YXlzL2FkZC1lZGl0LWlycmlnYXRpb24td2F5cy9hZGQtZWRpdC1pcnJpZ2F0aW9uLXdheXMuY29tcG9uZW50LmNzcyJ9 */"] });
    return AddEditIrrigationWaysComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditIrrigationWaysComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-irrigation-ways',
                templateUrl: './add-edit-irrigation-ways.component.html',
                styleUrls: ['./add-edit-irrigation-ways.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "r0yz":
/*!*************************************************************************************************************!*\
  !*** ./src/app/AdminPanel/farms/irrigation-ways/delete-irrigation-ways/delete-irrigation-ways.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DeleteIrrigationWaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIrrigationWaysComponent", function() { return DeleteIrrigationWaysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





var DeleteIrrigationWaysComponent = /** @class */ (function () {
    function DeleteIrrigationWaysComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteIrrigationWaysComponent.prototype.ngOnInit = function () {
    };
    DeleteIrrigationWaysComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteIrrigationWaysComponent.ɵfac = function DeleteIrrigationWaysComponent_Factory(t) { return new (t || DeleteIrrigationWaysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    DeleteIrrigationWaysComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteIrrigationWaysComponent, selectors: [["app-delete-irrigation-ways"]], decls: 45, vars: 2, consts: [["mat-dialog-title", ""], ["role", "alert", 1, "alert", "alert-danger"], [1, "row", "text-center"], [1, "col-12"], [1, "fas", "fa-exclamation-triangle", "fa-5x", "animate__animated", "animate__infinite", "animate__pulse"], [1, "row"], [1, "col-md-6"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 2, "float", "right", 3, "mat-dialog-close"]], template: function DeleteIrrigationWaysComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Irrigation Way");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Are You Sure You Want To Delete?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Are you sure you want to delete this Farmed Type Class permanently?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteIrrigationWaysComponent_Template_button_click_34_listener() { return ctx.onNoClick(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n            Yes\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.farmData.name_ar_localized);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data.farmData.id);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFuZWwvZmFybXMvaXJyaWdhdGlvbi13YXlzL2RlbGV0ZS1pcnJpZ2F0aW9uLXdheXMvZGVsZXRlLWlycmlnYXRpb24td2F5cy5jb21wb25lbnQuY3NzIn0= */"] });
    return DeleteIrrigationWaysComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteIrrigationWaysComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-irrigation-ways',
                templateUrl: './delete-irrigation-ways.component.html',
                styleUrls: ['./delete-irrigation-ways.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~blog-farmed-type-blog-farmed-type-module~farms-farms-module.js.map