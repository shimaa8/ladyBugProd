(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jop-jop-module"],{

/***/ "1P1H":
/*!*****************************************!*\
  !*** ./src/app/Services/job.service.ts ***!
  \*****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "MMNe");




var JobService = /** @class */ (function () {
    function JobService(dataService) {
        this.dataService = dataService;
        this.Addjobs = {};
    }
    JobService.prototype.getJop = function () {
        return this.dataService.get('human_jobs');
    };
    JobService.prototype.AddJop = function () {
        return this.dataService.post('admin/human_jobs', this.Addjobs);
    };
    JobService.prototype.deleteJop = function (id) {
        return this.dataService.delete('admin/human_jobs' + '/', id);
    };
    JobService.prototype.editJop = function (id) {
        return this.dataService.update('admin/human_jobs' + '/' + id, this.Addjobs);
    };
    JobService.ɵfac = function JobService_Factory(t) { return new (t || JobService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
    JobService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JobService, factory: JobService.ɵfac, providedIn: 'root' });
    return JobService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "GrSs":
/*!***********************************************************************!*\
  !*** ./src/app/AdminPanel/jop/add-edit-jop/add-edit-jop.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddEditJopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditJopComponent", function() { return AddEditJopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function AddEditJopComponent_div_6_Template(rf, ctx) { if (rf & 1) {
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
function AddEditJopComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                            Arabic Name Is Required\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEditJopComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                            English Name Is Required\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var AddEditJopComponent = /** @class */ (function () {
    function AddEditJopComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddEditJopComponent.prototype.ngOnInit = function () {
    };
    AddEditJopComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddEditJopComponent.ɵfac = function AddEditJopComponent_Factory(t) { return new (t || AddEditJopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    AddEditJopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEditJopComponent, selectors: [["app-add-edit-jop"]], decls: 150, vars: 7, consts: [["mat-dialog-title", ""], ["addFarmedType", "ngForm"], ["class", "row", 4, "ngIf"], [1, "mat-typography"], [1, "row"], [1, "col-md-12"], [1, "form-group"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "name", "name_ar_localized", "required", "", 3, "ngModel", "ngModelChange"], ["name_ar_localized", "ngModel"], [4, "ngIf"], ["matInput", "", "name", "name_en_localized", "required", "", 3, "ngModel", "ngModelChange"], ["name_en_localized", "ngModel"], [1, "d-flex", "justify-content-between"], ["mat-button", "", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "color", "primary", "cdkFocusInitial", "", 3, "mat-dialog-close", "disabled"], [1, "col-12"], ["role", "alert", 1, "alert", "alert-danger"]], template: function AddEditJopComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Job ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", null, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddEditJopComponent_div_6_Template, 11, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-content", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Arabic Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditJopComponent_Template_input_ngModelChange_22_listener($event) { return ctx.data.FarmedData.name_ar_localized = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddEditJopComponent_mat_error_26_Template, 2, 0, "mat-error", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "English Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 11, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditJopComponent_Template_input_ngModelChange_40_listener($event) { return ctx.data.FarmedData.name_en_localized = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddEditJopComponent_mat_error_44_Template, 2, 0, "mat-error", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n\n\n\n            ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\n            ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\n\n\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-dialog-actions", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditJopComponent_Template_button_click_142_listener() { return ctx.onNoClick(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\n            Save\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\n");
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.FarmedData.name_ar_localized);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors == null ? null : _r2.errors.required);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.FarmedData.name_en_localized);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.required);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data)("disabled", !_r0.valid);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFuZWwvam9wL2FkZC1lZGl0LWpvcC9hZGQtZWRpdC1qb3AuY29tcG9uZW50LmNzcyJ9 */"] });
    return AddEditJopComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditJopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-jop',
                templateUrl: './add-edit-jop.component.html',
                styleUrls: ['./add-edit-jop.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "JZYM":
/*!*****************************************************!*\
  !*** ./src/app/AdminPanel/jop/jop/jop.component.ts ***!
  \*****************************************************/
/*! exports provided: JopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JopComponent", function() { return JopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_toasta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toasta */ "LVWs");
/* harmony import */ var _Services_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/job.service */ "1P1H");
/* harmony import */ var _delete_jop_delete_jop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delete-jop/delete-jop.component */ "isKN");
/* harmony import */ var _add_edit_jop_add_edit_jop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-edit-jop/add-edit-jop.component */ "GrSs");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
















function JopComponent_ng_template_20_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var col_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r6.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                    ", col_r6.header, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r6.field)("ngSwitch", col_r6.field);
} }
function JopComponent_ng_template_20_th_11_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function JopComponent_ng_template_20_th_11_Template_input_input_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var col_r7 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r0.filter($event.target.value, col_r7.field, col_r7.filterMatchMode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var col_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", col_r7.field);
} }
function JopComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JopComponent_ng_template_20_th_3_Template, 4, 4, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, JopComponent_ng_template_20_th_11_Template, 4, 1, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        ");
} if (rf & 2) {
    var columns_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r3);
} }
function JopComponent_ng_template_22_td_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var col_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var rowData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r10[col_r13.field], "");
} }
function JopComponent_ng_template_22_td_3_span_6_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dis_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                            ", dis_r19.name_ar_localized, ",\n                        ");
} }
function JopComponent_ng_template_22_td_3_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JopComponent_ng_template_22_td_3_span_6_span_3_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var col_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var rowData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rowData_r10[col_r13.field]);
} }
function JopComponent_ng_template_22_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, JopComponent_ng_template_22_td_3_span_4_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JopComponent_ng_template_22_td_3_span_6_Template, 6, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var col_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r13.field !== "districts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r13.field == "districts");
} }
function JopComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JopComponent_ng_template_22_td_3_Template, 8, 2, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JopComponent_ng_template_22_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); var rowData_r10 = ctx.$implicit; var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.openEditDataDialog(rowData_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JopComponent_ng_template_22_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); var rowData_r10 = ctx.$implicit; var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.openDeleteDataDialog(rowData_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n        ");
} if (rf & 2) {
    var rowData_r10 = ctx.$implicit;
    var columns_r11 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r11);
} }
var _c0 = function () { return [5, 10, 20]; };
var JopComponent = /** @class */ (function () {
    function JopComponent(dialog, _JobService, toastyService) {
        this.dialog = dialog;
        this._JobService = _JobService;
        this.toastyService = toastyService;
        this.display = false;
    }
    //
    JopComponent.prototype.ngOnInit = function () {
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name_ar_localized', header: 'Job (Ar)' },
            { field: 'name_en_localized', header: 'Job (En)' },
        ];
        this.getTableData();
    };
    // showDialogGetFarmedTypeById(id: number) {
    //     this._FarmsService.getFarmedTypeById(id).subscribe((res: { data }) => {
    //         this.profileFarm = res.data as IFarmedType;
    //         console.log(this.profileFarm);
    //     }, error => {
    //
    //     }, () => {
    //         this.display = true;
    //
    //     });
    // }
    JopComponent.prototype.getTableData = function () {
        var _this = this;
        this._JobService.getJop().subscribe(function (res) {
            _this.farms = res.data.all;
            // this.rolesPermations = this.roles.map(x => x.permissions);
            // console.log(this.rolesPermations);
        });
    };
    JopComponent.prototype.openAddDataDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_edit_jop_add_edit_jop_component__WEBPACK_IMPORTED_MODULE_5__["AddEditJopComponent"], {
            data: {
                FarmedData: this._JobService.Addjobs, error: this.errorMessage,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.errorMessage = null;
            if (result) {
                _this._JobService.Addjobs = result.FarmedData;
                _this.onAddData();
            }
            else {
                _this._JobService.Addjobs = {};
            }
        });
    };
    JopComponent.prototype.onAddData = function () {
        var _this = this;
        this._JobService.AddJop().subscribe(function (res) {
        }, function (error) {
            // this.messageService.add({severity: 'error', summary: 'Class', detail: 'Error Happened'});
        }, function () {
            _this.getTableData();
            _this._JobService.Addjobs = {};
            _this.toastyService.success({
                title: 'Members',
                msg: 'This Role Has Been Deleted successfully!',
                showClose: true,
                timeout: 3000,
                theme: 'material'
            });
            // this.displayClassDeleteDialogue = false;
            // this.messageService.add({severity: 'error', summary: 'Class', detail: 'Deleted Successfully'});
        });
    };
    // getDataById(id: number) {
    //     this._FarmsService.getFarmedTypeById(id).subscribe((res: { data }) => {
    //         this.profileFarmData = res.data as IAddFarmedType;
    //         console.log(this.profileFarmData);
    //     }, error => {
    //
    //     }, () => {
    //         // this.display = true;
    //     });
    //
    //
    // }
    JopComponent.prototype.openEditDataDialog = function (classData) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_edit_jop_add_edit_jop_component__WEBPACK_IMPORTED_MODULE_5__["AddEditJopComponent"], {
            data: { FarmedData: classData }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._JobService.Addjobs.name_ar_localized = result.FarmedData.name_ar_localized;
                _this._JobService.Addjobs.name_en_localized = result.FarmedData.name_en_localized;
                // this.toastyService.success(this.toastOption);
                console.log(result);
                // this.eventsList.id = result;
                _this.onEditFarmedType(result.FarmedData.id);
            }
            else {
                _this._JobService.Addjobs = {};
            }
        });
    };
    JopComponent.prototype.onEditFarmedType = function (roleId) {
        var _this = this;
        this._JobService.editJop(roleId).subscribe(function (res) {
        }, function (error) {
            // this.messageService.add({severity: 'error', summary: 'Class', detail: 'Error Happened'});
        }, function () {
            _this.getTableData();
            _this._JobService.Addjobs = {};
            _this.toastyService.success({
                title: 'Members',
                msg: 'This Role Has Been Updated successfully!',
                showClose: true,
                timeout: 3000,
                theme: 'material'
            });
            // this.displayClassDeleteDialogue = false;
            // this.messageService.add({severity: 'error', summary: 'Class', detail: 'Deleted Successfully'});
        });
    };
    JopComponent.prototype.openDeleteDataDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_jop_delete_jop_component__WEBPACK_IMPORTED_MODULE_4__["DeleteJopComponent"], {
            data: { farmData: data }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                // this.toastyService.success(this.toastOption);
                console.log(result);
                // this.eventsList.id = result;
                _this.onDeleteData(result);
            }
        });
    };
    JopComponent.prototype.onDeleteData = function (roleId) {
        var _this = this;
        this._JobService.deleteJop(roleId).subscribe(function (res) {
        }, function (error) {
            // this.messageService.add({severity: 'error', summary: 'Class', detail: 'Error Happened'});
        }, function () {
            _this.getTableData();
            _this.toastyService.success({
                title: 'Members',
                msg: 'This Role Has Been Deleted successfully!',
                showClose: true,
                timeout: 3000,
                theme: 'material'
            });
            // this.displayClassDeleteDialogue = false;
            // this.messageService.add({severity: 'error', summary: 'Class', detail: 'Deleted Successfully'});
        });
    };
    JopComponent.ɵfac = function JopComponent_Factory(t) { return new (t || JopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toasta__WEBPACK_IMPORTED_MODULE_2__["ToastaService"])); };
    JopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JopComponent, selectors: [["app-jop"]], decls: 26, vars: 6, consts: [[1, "py-4", "pb-3"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "5px", "float", "right", 3, "click"], [1, "ml-2"], ["mat-raised-button", "", "color", "primary", 2, "float", "right", 3, "click"], ["autoLayout", "true", "dataKey", "id", "styleClass", "p-datatable-responsive-demo", 3, "columns", "value", "paginator", "rows", "rowsPerPageOptions"], ["dt1", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pResizableColumn", "", "pReorderableColumn", "", 3, "pSortableColumn", 4, "ngFor", "ngForOf"], ["class", "ui-fluid", 3, "ngSwitch", 4, "ngFor", "ngForOf"], ["pResizableColumn", "", "pReorderableColumn", "", 3, "pSortableColumn"], [3, "field", "ngSwitch"], [1, "ui-fluid", 3, "ngSwitch"], ["pInputText", "", "type", "text", 2, "width", "100%", 3, "input"], [3, "pSelectableRow"], [4, "ngFor", "ngForOf"], [1, "embryo-ham-icon"], ["mat-mini-fab", "", "color", "accent", "mat-card-icon", "", 3, "click"], ["mat-mini-fab", "", "color", "warn", "mat-card-icon", "", 3, "click"], [4, "ngIf"]], template: function JopComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JopComponent_Template_button_click_2_listener() { return ctx.getTableData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "autorenew");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        Refresh\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JopComponent_Template_button_click_8_listener() { return ctx.openAddDataDialog(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "add");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n        Add Job\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p-table", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, JopComponent_ng_template_20_Template, 16, 2, "ng-template", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, JopComponent_ng_template_22_Template, 41, 2, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.cols)("value", ctx.farms)("paginator", true)("rows", 10)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_10__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["ResizableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["ReorderableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["SortIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitch"], primeng_table__WEBPACK_IMPORTED_MODULE_9__["SelectableRow"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFuZWwvam9wL2pvcC9qb3AuY29tcG9uZW50LmNzcyJ9 */"] });
    return JopComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jop',
                templateUrl: './jop.component.html',
                styleUrls: ['./jop.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _Services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"] }, { type: ngx_toasta__WEBPACK_IMPORTED_MODULE_2__["ToastaService"] }]; }, null); })();


/***/ }),

/***/ "isKN":
/*!*******************************************************************!*\
  !*** ./src/app/AdminPanel/jop/delete-jop/delete-jop.component.ts ***!
  \*******************************************************************/
/*! exports provided: DeleteJopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteJopComponent", function() { return DeleteJopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





var DeleteJopComponent = /** @class */ (function () {
    function DeleteJopComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteJopComponent.prototype.ngOnInit = function () {
    };
    DeleteJopComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteJopComponent.ɵfac = function DeleteJopComponent_Factory(t) { return new (t || DeleteJopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    DeleteJopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteJopComponent, selectors: [["app-delete-jop"]], decls: 45, vars: 2, consts: [["mat-dialog-title", ""], ["role", "alert", 1, "alert", "alert-danger"], [1, "row", "text-center"], [1, "col-12"], [1, "fas", "fa-exclamation-triangle", "fa-5x", "animate__animated", "animate__infinite", "animate__pulse"], [1, "row"], [1, "col-md-6"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 2, "float", "right", 3, "mat-dialog-close"]], template: function DeleteJopComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Job");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Are you sure you want to delete this Job permanently?");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteJopComponent_Template_button_click_34_listener() { return ctx.onNoClick(); });
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
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFuZWwvam9wL2RlbGV0ZS1qb3AvZGVsZXRlLWpvcC5jb21wb25lbnQuY3NzIn0= */"] });
    return DeleteJopComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteJopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-jop',
                templateUrl: './delete-jop.component.html',
                styleUrls: ['./delete-jop.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "kfCw":
/*!******************************************************!*\
  !*** ./src/app/AdminPanel/jop/jop-routing.module.ts ***!
  \******************************************************/
/*! exports provided: JopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JopRoutingModule", function() { return JopRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _jop_jop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jop/jop.component */ "JZYM");





var routes = [
    { path: '', component: _jop_jop_component__WEBPACK_IMPORTED_MODULE_2__["JopComponent"] },
];
var JopRoutingModule = /** @class */ (function () {
    function JopRoutingModule() {
    }
    JopRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JopRoutingModule });
    JopRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function JopRoutingModule_Factory(t) { return new (t || JopRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return JopRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JopRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JopRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "s0tL":
/*!**********************************************!*\
  !*** ./src/app/AdminPanel/jop/jop.module.ts ***!
  \**********************************************/
/*! exports provided: JopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JopModule", function() { return JopModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _jop_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jop-routing.module */ "kfCw");
/* harmony import */ var _jop_jop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jop/jop.component */ "JZYM");
/* harmony import */ var _add_edit_jop_add_edit_jop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-jop/add-edit-jop.component */ "GrSs");
/* harmony import */ var _delete_jop_delete_jop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete-jop/delete-jop.component */ "isKN");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");















var JopModule = /** @class */ (function () {
    function JopModule() {
    }
    JopModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JopModule });
    JopModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function JopModule_Factory(t) { return new (t || JopModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _jop_routing_module__WEBPACK_IMPORTED_MODULE_2__["JopRoutingModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"]
            ]] });
    return JopModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JopModule, { declarations: [_jop_jop_component__WEBPACK_IMPORTED_MODULE_3__["JopComponent"], _add_edit_jop_add_edit_jop_component__WEBPACK_IMPORTED_MODULE_4__["AddEditJopComponent"], _delete_jop_delete_jop_component__WEBPACK_IMPORTED_MODULE_5__["DeleteJopComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _jop_routing_module__WEBPACK_IMPORTED_MODULE_2__["JopRoutingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JopModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_jop_jop_component__WEBPACK_IMPORTED_MODULE_3__["JopComponent"], _add_edit_jop_add_edit_jop_component__WEBPACK_IMPORTED_MODULE_4__["AddEditJopComponent"], _delete_jop_delete_jop_component__WEBPACK_IMPORTED_MODULE_5__["DeleteJopComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _jop_routing_module__WEBPACK_IMPORTED_MODULE_2__["JopRoutingModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=jop-jop-module.js.map