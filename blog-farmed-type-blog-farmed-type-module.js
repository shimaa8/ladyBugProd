(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-farmed-type-blog-farmed-type-module"],{

/***/ "KCFi":
/*!********************************************************************************!*\
  !*** ./src/app/AdminPanel/blog-farmed-type/blog-farmed-type-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: BlogFarmedTypeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogFarmedTypeRoutingModule", function() { return BlogFarmedTypeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _farmed_type_generall_info_farmed_type_generall_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./farmed-type-generall-info/farmed-type-generall-info.component */ "S1R5");





var routes = [
    { path: '', component: _farmed_type_generall_info_farmed_type_generall_info_component__WEBPACK_IMPORTED_MODULE_2__["FarmedTypeGenerallInfoComponent"] }
];
var BlogFarmedTypeRoutingModule = /** @class */ (function () {
    function BlogFarmedTypeRoutingModule() {
    }
    BlogFarmedTypeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogFarmedTypeRoutingModule });
    BlogFarmedTypeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogFarmedTypeRoutingModule_Factory(t) { return new (t || BlogFarmedTypeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return BlogFarmedTypeRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogFarmedTypeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogFarmedTypeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "S1R5":
/*!**************************************************************************************************************!*\
  !*** ./src/app/AdminPanel/blog-farmed-type/farmed-type-generall-info/farmed-type-generall-info.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: FarmedTypeGenerallInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmedTypeGenerallInfoComponent", function() { return FarmedTypeGenerallInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _Services_app_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/app-admin.service */ "+I26");
/* harmony import */ var _Services_farms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/farms.service */ "odly");
/* harmony import */ var ngx_toasta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toasta */ "LVWs");
/* harmony import */ var _farms_irrigation_ways_add_edit_irrigation_ways_add_edit_irrigation_ways_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../farms/irrigation-ways/add-edit-irrigation-ways/add-edit-irrigation-ways.component */ "MVQ1");
/* harmony import */ var _farms_irrigation_ways_delete_irrigation_ways_delete_irrigation_ways_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../farms/irrigation-ways/delete-irrigation-ways/delete-irrigation-ways.component */ "r0yz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");


















function FarmedTypeGenerallInfoComponent_ng_template_20_th_3_Template(rf, ctx) { if (rf & 1) {
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
function FarmedTypeGenerallInfoComponent_ng_template_20_th_13_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FarmedTypeGenerallInfoComponent_ng_template_20_th_13_Template_input_input_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var col_r7 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return _r0.filter($event.target.value, col_r7.field, col_r7.filterMatchMode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var col_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", col_r7.field);
} }
function FarmedTypeGenerallInfoComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FarmedTypeGenerallInfoComponent_ng_template_20_th_3_Template, 4, 4, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FarmedTypeGenerallInfoComponent_ng_template_20_th_13_Template, 4, 1, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");
} if (rf & 2) {
    var columns_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r3);
} }
function FarmedTypeGenerallInfoComponent_ng_template_22_td_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var col_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var rowData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", rowData_r10[col_r13.field], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FarmedTypeGenerallInfoComponent_ng_template_22_td_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var col_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var rowData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", rowData_r10[col_r13.field], "");
} }
function FarmedTypeGenerallInfoComponent_ng_template_22_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FarmedTypeGenerallInfoComponent_ng_template_22_td_3_span_2_Template, 4, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FarmedTypeGenerallInfoComponent_ng_template_22_td_3_span_5_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var col_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r13.field === "assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r13.field !== "assets");
} }
function FarmedTypeGenerallInfoComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FarmedTypeGenerallInfoComponent_ng_template_22_td_3_Template, 9, 2, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmedTypeGenerallInfoComponent_ng_template_22_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var rowData_r10 = ctx.$implicit; var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.openEditFarmedTypeDialog(rowData_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmedTypeGenerallInfoComponent_ng_template_22_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var rowData_r10 = ctx.$implicit; var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.openFarmedTypeDeleteDialog(rowData_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n                            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n        ");
} if (rf & 2) {
    var rowData_r10 = ctx.$implicit;
    var columns_r11 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r11);
} }
var _c0 = function () { return [5, 10, 20]; };
var FarmedTypeGenerallInfoComponent = /** @class */ (function () {
    function FarmedTypeGenerallInfoComponent(dialog, _AppAdminService, _FarmsService, toastyService) {
        this.dialog = dialog;
        this._AppAdminService = _AppAdminService;
        this._FarmsService = _FarmsService;
        this.toastyService = toastyService;
        this.display = false;
    }
    //
    FarmedTypeGenerallInfoComponent.prototype.ngOnInit = function () {
        this.cols = [
            // {field: 'id', header: 'ID'},
            { field: 'assets', header: 'Image' },
            { field: 'farmed_type', header: 'farmed_type' },
            { field: 'farmed_type_stage', header: 'farmed_type_stage' },
            { field: 'title_ar_localized', header: 'title_ar_localized' },
            { field: 'content_ar_localized', header: 'content_ar_localized' },
        ];
        this.getFarmsApp();
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
    FarmedTypeGenerallInfoComponent.prototype.getFarmsApp = function () {
        var _this = this;
        this._FarmsService.getFarmed_type_info().subscribe(function (res) {
            _this.farms = res.data.all;
            // this.rolesPermations = this.roles.map(x => x.permissions);
            // console.log(this.rolesPermations);
        });
    };
    FarmedTypeGenerallInfoComponent.prototype.openAddFarmedTypeDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_farms_irrigation_ways_add_edit_irrigation_ways_add_edit_irrigation_ways_component__WEBPACK_IMPORTED_MODULE_5__["AddEditIrrigationWaysComponent"], {
            data: {
                FarmedData: this._FarmsService.AddIrrigationWays, error: this.errorMessage,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.errorMessage = null;
            if (result) {
                _this._FarmsService.AddIrrigationWays = result.FarmedData;
                _this.onAddFarmedType();
            }
            else {
                _this._FarmsService.AddIrrigationWays = {};
            }
        });
    };
    FarmedTypeGenerallInfoComponent.prototype.onAddFarmedType = function () {
        var _this = this;
        this._FarmsService.AddFarmed_type_info().subscribe(function (res) {
        }, function (error) {
            // this.messageService.add({severity: 'error', summary: 'Class', detail: 'Error Happened'});
        }, function () {
            _this.getFarmsApp();
            _this._FarmsService.AddIrrigationWays = {};
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
    FarmedTypeGenerallInfoComponent.prototype.openEditFarmedTypeDialog = function (classData) {
        var _this = this;
        var dialogRef = this.dialog.open(_farms_irrigation_ways_add_edit_irrigation_ways_add_edit_irrigation_ways_component__WEBPACK_IMPORTED_MODULE_5__["AddEditIrrigationWaysComponent"], {
            data: { FarmedData: classData }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._FarmsService.AddIrrigationWays.name_ar_localized = result.FarmedData.name_ar_localized;
                _this._FarmsService.AddIrrigationWays.name_en_localized = result.FarmedData.name_en_localized;
                // this.toastyService.success(this.toastOption);
                console.log(result);
                // this.eventsList.id = result;
                _this.onEditFarmedType(result.FarmedData.id);
            }
            else {
                _this._FarmsService.AddIrrigationWays = {};
            }
        });
    };
    FarmedTypeGenerallInfoComponent.prototype.onEditFarmedType = function (roleId) {
        var _this = this;
        this._FarmsService.editFarmed_type_info(roleId).subscribe(function (res) {
        }, function (error) {
            // this.messageService.add({severity: 'error', summary: 'Class', detail: 'Error Happened'});
        }, function () {
            _this.getFarmsApp();
            _this._FarmsService.AddIrrigationWays = {};
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
    FarmedTypeGenerallInfoComponent.prototype.openFarmedTypeDeleteDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_farms_irrigation_ways_delete_irrigation_ways_delete_irrigation_ways_component__WEBPACK_IMPORTED_MODULE_6__["DeleteIrrigationWaysComponent"], {
            data: { farmData: data }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                // this.toastyService.success(this.toastOption);
                console.log(result);
                // this.eventsList.id = result;
                _this.onDeleteFarmedType(result);
            }
        });
    };
    FarmedTypeGenerallInfoComponent.prototype.onDeleteFarmedType = function (roleId) {
        var _this = this;
        this._FarmsService.deleteFarmed_type_info(roleId).subscribe(function (res) {
        }, function (error) {
            // this.messageService.add({severity: 'error', summary: 'Class', detail: 'Error Happened'});
        }, function () {
            _this.getFarmsApp();
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
    FarmedTypeGenerallInfoComponent.ɵfac = function FarmedTypeGenerallInfoComponent_Factory(t) { return new (t || FarmedTypeGenerallInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_app_admin_service__WEBPACK_IMPORTED_MODULE_2__["AppAdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_farms_service__WEBPACK_IMPORTED_MODULE_3__["FarmsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toasta__WEBPACK_IMPORTED_MODULE_4__["ToastaService"])); };
    FarmedTypeGenerallInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FarmedTypeGenerallInfoComponent, selectors: [["app-farmed-type-generall-info"]], decls: 26, vars: 6, consts: [[1, "py-4", "pb-3"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "5px", "float", "right", 3, "click"], [1, "ml-2"], ["mat-raised-button", "", "color", "primary", 2, "float", "right", 3, "click"], ["autoLayout", "true", "dataKey", "id", "styleClass", "p-datatable-responsive-demo", 3, "columns", "value", "paginator", "rows", "rowsPerPageOptions"], ["dt1", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pResizableColumn", "", "pReorderableColumn", "", 3, "pSortableColumn", 4, "ngFor", "ngForOf"], ["class", "ui-fluid", 3, "ngSwitch", 4, "ngFor", "ngForOf"], ["pResizableColumn", "", "pReorderableColumn", "", 3, "pSortableColumn"], [3, "field", "ngSwitch"], [1, "ui-fluid", 3, "ngSwitch"], ["pInputText", "", "type", "text", 2, "width", "100%", 3, "input"], [3, "pSelectableRow"], [4, "ngFor", "ngForOf"], [1, "embryo-ham-icon"], ["mat-mini-fab", "", "color", "accent", "mat-card-icon", "", 3, "click"], ["mat-mini-fab", "", "color", "warn", "mat-card-icon", "", 3, "click"], [4, "ngIf"], ["alt", "", 2, "width", "32px", "height", "32px", 3, "src"]], template: function FarmedTypeGenerallInfoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmedTypeGenerallInfoComponent_Template_button_click_2_listener() { return ctx.getFarmsApp(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "autorenew");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        Refresh\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmedTypeGenerallInfoComponent_Template_button_click_8_listener() { return ctx.openAddFarmedTypeDialog(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "add");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n        Add Farmed Type Info\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p-table", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FarmedTypeGenerallInfoComponent_ng_template_20_Template, 20, 2, "ng-template", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FarmedTypeGenerallInfoComponent_ng_template_22_Template, 38, 2, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.cols)("value", ctx.farms)("paginator", true)("rows", 10)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_11__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["ResizableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["ReorderableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["SortIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitch"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["SelectableRow"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFuZWwvYmxvZy1mYXJtZWQtdHlwZS9mYXJtZWQtdHlwZS1nZW5lcmFsbC1pbmZvL2Zhcm1lZC10eXBlLWdlbmVyYWxsLWluZm8uY29tcG9uZW50LmNzcyJ9 */"] });
    return FarmedTypeGenerallInfoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmedTypeGenerallInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-farmed-type-generall-info',
                templateUrl: './farmed-type-generall-info.component.html',
                styleUrls: ['./farmed-type-generall-info.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _Services_app_admin_service__WEBPACK_IMPORTED_MODULE_2__["AppAdminService"] }, { type: _Services_farms_service__WEBPACK_IMPORTED_MODULE_3__["FarmsService"] }, { type: ngx_toasta__WEBPACK_IMPORTED_MODULE_4__["ToastaService"] }]; }, null); })();


/***/ }),

/***/ "d/pQ":
/*!************************************************************************************************!*\
  !*** ./src/app/AdminPanel/blog-farmed-type/farmed-type-staged/farmed-type-staged.component.ts ***!
  \************************************************************************************************/
/*! exports provided: FarmedTypeStagedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmedTypeStagedComponent", function() { return FarmedTypeStagedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var FarmedTypeStagedComponent = /** @class */ (function () {
    function FarmedTypeStagedComponent() {
    }
    FarmedTypeStagedComponent.prototype.ngOnInit = function () {
    };
    FarmedTypeStagedComponent.ɵfac = function FarmedTypeStagedComponent_Factory(t) { return new (t || FarmedTypeStagedComponent)(); };
    FarmedTypeStagedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FarmedTypeStagedComponent, selectors: [["app-farmed-type-staged"]], decls: 3, vars: 0, template: function FarmedTypeStagedComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "farmed-type-staged works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFuZWwvYmxvZy1mYXJtZWQtdHlwZS9mYXJtZWQtdHlwZS1zdGFnZWQvZmFybWVkLXR5cGUtc3RhZ2VkLmNvbXBvbmVudC5jc3MifQ== */"] });
    return FarmedTypeStagedComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmedTypeStagedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-farmed-type-staged',
                templateUrl: './farmed-type-staged.component.html',
                styleUrls: ['./farmed-type-staged.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zRVP":
/*!************************************************************************!*\
  !*** ./src/app/AdminPanel/blog-farmed-type/blog-farmed-type.module.ts ***!
  \************************************************************************/
/*! exports provided: BlogFarmedTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogFarmedTypeModule", function() { return BlogFarmedTypeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _blog_farmed_type_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-farmed-type-routing.module */ "KCFi");
/* harmony import */ var _farmed_type_staged_farmed_type_staged_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./farmed-type-staged/farmed-type-staged.component */ "d/pQ");
/* harmony import */ var _farmed_type_generall_info_farmed_type_generall_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./farmed-type-generall-info/farmed-type-generall-info.component */ "S1R5");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










var BlogFarmedTypeModule = /** @class */ (function () {
    function BlogFarmedTypeModule() {
    }
    BlogFarmedTypeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogFarmedTypeModule });
    BlogFarmedTypeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogFarmedTypeModule_Factory(t) { return new (t || BlogFarmedTypeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _blog_farmed_type_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogFarmedTypeRoutingModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]
            ]] });
    return BlogFarmedTypeModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogFarmedTypeModule, { declarations: [_farmed_type_staged_farmed_type_staged_component__WEBPACK_IMPORTED_MODULE_3__["FarmedTypeStagedComponent"], _farmed_type_generall_info_farmed_type_generall_info_component__WEBPACK_IMPORTED_MODULE_4__["FarmedTypeGenerallInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _blog_farmed_type_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogFarmedTypeRoutingModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogFarmedTypeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_farmed_type_staged_farmed_type_staged_component__WEBPACK_IMPORTED_MODULE_3__["FarmedTypeStagedComponent"], _farmed_type_generall_info_farmed_type_generall_info_component__WEBPACK_IMPORTED_MODULE_4__["FarmedTypeGenerallInfoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _blog_farmed_type_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogFarmedTypeRoutingModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=blog-farmed-type-blog-farmed-type-module.js.map