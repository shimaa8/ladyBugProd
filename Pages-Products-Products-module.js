(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Products-Products-module"],{

/***/ "cfeg":
/*!***********************************************************************!*\
  !*** ./src/app/Pages/Products/ProductsList/ProductsList.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/Embryo.service */ "t85P");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Global_PageTitle_PageTitle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Global/PageTitle/PageTitle.component */ "Zk/o");
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-instantsearch */ "VPfG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _Templates_Grid_ProductGrid_ProductGrid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Templates/Grid/ProductGrid/ProductGrid.component */ "+gZX");











function ProductsListComponent_ng_container_0_ng_template_82_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "embryo-ProductGrid", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addToCart", function ProductsListComponent_ng_container_0_ng_template_82_ng_container_1_Template_embryo_ProductGrid_addToCart_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.addToCart($event); })("addToWishList", function ProductsListComponent_ng_container_0_ng_template_82_ng_container_1_Template_embryo_ProductGrid_addToWishList_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.addToWishList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var hits_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().hits;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currency", ctx_r4.embryoService == null ? null : ctx_r4.embryoService.currency)("products", hits_r2);
} }
function ProductsListComponent_ng_container_0_ng_template_82_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n                  No Product Found.\n                ");
} }
function ProductsListComponent_ng_container_0_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsListComponent_ng_container_0_ng_template_82_ng_container_1_Template, 5, 2, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductsListComponent_ng_container_0_ng_template_82_ng_template_3_Template, 1, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n              ");
} if (rf & 2) {
    var hits_r2 = ctx.hits;
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", hits_r2 && hits_r2.length > 0)("ngIfElse", _r5);
} }
var _c0 = function () { return { appId: "latency", apiKey: "6be0576ff61c053d5f9a3225e2a90f76", indexName: "ikea" }; };
var _c1 = function () { return ["category", "sub_category", "sub_sub_category"]; };
var _c2 = function () { return ["name:asc"]; };
var _c3 = function () { return { name: "ikea", label: "Featured" }; };
var _c4 = function () { return { name: "ikea_price_asc", label: "Price asc." }; };
var _c5 = function () { return { name: "ikea_price_desc", label: "Price desc." }; };
var _c6 = function (a0, a1, a2) { return [a0, a1, a2]; };
var _c7 = function () { return { value: 3, label: "3 per page" }; };
var _c8 = function () { return { value: 6, label: "6 per page" }; };
var _c9 = function () { return { value: 12, label: "12 per page", default: true }; };
function ProductsListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "embryo-PageTitle", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ais-instantsearch", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ais-search-box", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Show results for");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ais-hierarchical-menu", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ais-panel", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ais-refinement-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ais-panel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ais-refinement-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ais-panel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "ais-range-slider", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "ais-panel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "ais-rating-menu", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "ais-clear-refinements", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "ais-stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ais-panel", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ais-sort-by", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "ais-hits-per-page", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ais-hits", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, ProductsListComponent_ng_container_0_ng_template_82_Template, 6, 2, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " \n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "ais-pagination");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("heading", ctx_r0.pageTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("subHeading", ctx_r0.subPageTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1))("sortBy", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pips", true)("tooltips", true)("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](17, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c5)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](24, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c7), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("transformItems", ctx_r0.transformHits);
} }
var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(route, router, embryoService) {
        this.route = route;
        this.router = router;
        this.embryoService = embryoService;
        this.pips = true;
        this.tooltips = true;
        this.subscribers = {};
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.route.queryParams.forEach(function (queryParams) {
                _this.category = queryParams['category'];
                _this.type = null;
                _this.type = params['type'];
                _this.getPageTitle();
            });
        });
    };
    ProductsListComponent.prototype.getPageTitle = function () {
        this.pageTitle = null;
        this.subPageTitle = null;
        switch (this.type || this.category) {
            case undefined:
                this.pageTitle = "Fashion";
                this.subPageTitle = "Explore your favourite fashion style.";
                break;
            case "gadgets":
                this.pageTitle = "Gadgets";
                this.subPageTitle = "Check out our new gadgets.";
                break;
            case "accessories":
                this.pageTitle = "Accessories";
                this.subPageTitle = "Choose the wide range of best accessories.";
                break;
            default:
                this.pageTitle = "Products";
                this.subPageTitle = null;
                break;
        }
    };
    ProductsListComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value);
    };
    ProductsListComponent.prototype.addToWishList = function (value) {
        this.embryoService.addToWishlist(value);
    };
    ProductsListComponent.prototype.transformHits = function (hits) {
        hits.forEach(function (hit) {
            hit.stars = [];
            for (var i = 1; i <= 5; i) {
                hit.stars.push(i <= hit.rating);
                i += 1;
            }
        });
        return hits;
    };
    ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__["EmbryoService"])); };
    ProductsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsListComponent, selectors: [["app-ProductsList"]], decls: 2, vars: 1, consts: [[4, "ngIf"], [3, "heading", "subHeading"], [1, "inner-container", "section-gap"], [1, "container"], [3, "config"], ["fxLayout", "row wrap", 1, "col-gap"], ["fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "35", "fxFlex.lg", "25", "fxFlex.xl", "25"], [1, "mat-card", "mb-4"], ["placeholder", "Search a product"], [1, "facet-category-title"], [3, "attributes", "sortBy"], ["header", "Categories"], ["attribute", "materials", "operator", "or", "limit", "10"], ["header", "Colors"], ["attribute", "colors", "operator", "or", "limit", "10"], ["header", "Prices"], ["attribute", "price", 3, "pips", "tooltips", "min"], ["header", "CUSTOMER RATINGS"], ["attribute", "rating", "andUpLabel", ""], ["buttonLabel", "Clear all filters"], ["fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "100", "fxFlex.lg", "75", "fxFlex.xl", "75", 1, "algolia-main-list"], ["header", "Sort by"], [3, "items"], [3, "transformItems"], [4, "ngIf", "ngIfElse"], ["errorBlock", ""], ["gridThree", "true", 3, "currency", "products", "addToCart", "addToWishList"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductsListComponent_ng_container_0_Template, 92, 28, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageTitle);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _Global_PageTitle_PageTitle_component__WEBPACK_IMPORTED_MODULE_4__["PageTitleComponent"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__["NgAisInstantSearch"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__["ɵr"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__["ɵe"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__["ɵa"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__["ɵp"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__["ɵo"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__["ɵt"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__["ɵc"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__["ɵu"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__["ɵs"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__["ɵg"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__["ɵh"], angular_instantsearch__WEBPACK_IMPORTED_MODULE_5__["ɵn"], _Templates_Grid_ProductGrid_ProductGrid_component__WEBPACK_IMPORTED_MODULE_7__["ProductGridComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1Byb2R1Y3RzL1Byb2R1Y3RzTGlzdC9Qcm9kdWN0c0xpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
    return ProductsListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ProductsList',
                templateUrl: './ProductsList.component.html',
                styleUrls: ['./ProductsList.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__["EmbryoService"] }]; }, null); })();


/***/ }),

/***/ "eaHl":
/*!*******************************************************************!*\
  !*** ./src/app/Pages/Products/DetailPage/DetailPage.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageComponent", function() { return DetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/Embryo.service */ "t85P");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Global_PageTitle_PageTitle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Global/PageTitle/PageTitle.component */ "Zk/o");
/* harmony import */ var _Templates_ShopDetails_ShopDetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Templates/ShopDetails/ShopDetails.component */ "Srhx");
/* harmony import */ var _Templates_Grid_ProductGrid_ProductGrid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Templates/Grid/ProductGrid/ProductGrid.component */ "+gZX");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











var _c0 = function (a1) { return ["/products", a1]; };
function DetailPageComponent_ng_container_0_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You Might Also Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "embryo-ProductGrid", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addToCart", function DetailPageComponent_ng_container_0_div_10_Template_embryo_ProductGrid_addToCart_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.addToCart($event); })("addToWishList", function DetailPageComponent_ng_container_0_div_10_Template_embryo_ProductGrid_addToWishList_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addToWishList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Show All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currency", ctx_r1.embryoService == null ? null : ctx_r1.embryoService.currency)("products", ctx_r1.productsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.type));
} }
function DetailPageComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "embryo-PageTitle", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "embryo-ShopDetails", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DetailPageComponent_ng_container_0_div_10_Template, 19, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("heading", ctx_r0.singleProductData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currency", ctx_r0.embryoService == null ? null : ctx_r0.embryoService.currency)("detailData", ctx_r0.singleProductData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.productsList && ctx_r0.productsList.length > 0);
} }
var DetailPageComponent = /** @class */ (function () {
    function DetailPageComponent(route, router, embryoService) {
        this.route = route;
        this.router = router;
        this.embryoService = embryoService;
    }
    DetailPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (res) {
            _this.id = res.id;
            _this.type = res.type;
            _this.getData();
        });
    };
    DetailPageComponent.prototype.getData = function () {
        var _this = this;
        this.embryoService.getProducts().valueChanges().subscribe(function (res) { return _this.checkResponse(res); });
    };
    DetailPageComponent.prototype.checkResponse = function (response) {
        this.productsList = null;
        this.productsList = response[this.type];
        for (var _i = 0, _a = this.productsList; _i < _a.length; _i++) {
            var data = _a[_i];
            if (data.id == this.id) {
                this.singleProductData = data;
                break;
            }
        }
    };
    DetailPageComponent.prototype.addToCart = function (value) {
        this.embryoService.addToCart(value);
    };
    DetailPageComponent.prototype.addToWishList = function (value) {
        this.embryoService.addToWishlist(value);
    };
    DetailPageComponent.ɵfac = function DetailPageComponent_Factory(t) { return new (t || DetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__["EmbryoService"])); };
    DetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailPageComponent, selectors: [["app-DetailPage"]], decls: 2, vars: 1, consts: [[4, "ngIf"], [3, "heading"], [1, "inner-container"], [1, "product-detail-page"], [3, "currency", "detailData"], ["class", "bg-grey section-gap", 4, "ngIf"], [1, "bg-grey", "section-gap"], [1, "container"], [1, "block-title", "text-center", "gap"], ["gridLength", "4", 3, "currency", "products", "addToCart", "addToWishList"], [1, "text-center", "mt-4"], ["mat-raised-button", "", 3, "routerLink"]], template: function DetailPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailPageComponent_ng_container_0_Template, 14, 4, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.singleProductData);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _Global_PageTitle_PageTitle_component__WEBPACK_IMPORTED_MODULE_4__["PageTitleComponent"], _Templates_ShopDetails_ShopDetails_component__WEBPACK_IMPORTED_MODULE_5__["ShopDetailsComponent"], _Templates_Grid_ProductGrid_ProductGrid_component__WEBPACK_IMPORTED_MODULE_6__["ProductGridComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".select-group[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvUHJvZHVjdHMvRGV0YWlsUGFnZS9EZXRhaWxQYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtBQUNEIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvUHJvZHVjdHMvRGV0YWlsUGFnZS9EZXRhaWxQYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdC1ncm91cCAubWF0LWZvcm0tZmllbGQge1xyXG5cdHdpZHRoOiAxMTBweDtcclxufSJdfQ== */"] });
    return DetailPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-DetailPage',
                templateUrl: './DetailPage.component.html',
                styleUrls: ['./DetailPage.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _Services_Embryo_service__WEBPACK_IMPORTED_MODULE_2__["EmbryoService"] }]; }, null); })();


/***/ }),

/***/ "g83S":
/*!****************************************************!*\
  !*** ./src/app/Pages/Products/Products.routing.ts ***!
  \****************************************************/
/*! exports provided: ProductsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutes", function() { return ProductsRoutes; });
/* harmony import */ var _ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsList/ProductsList.component */ "cfeg");
/* harmony import */ var _DetailPage_DetailPage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailPage/DetailPage.component */ "eaHl");


var ProductsRoutes = [
    {
        path: '',
        component: _ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_0__["ProductsListComponent"]
    },
    {
        path: ':type/:id',
        component: _DetailPage_DetailPage_component__WEBPACK_IMPORTED_MODULE_1__["DetailPageComponent"]
    },
    {
        path: ':type',
        component: _ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_0__["ProductsListComponent"]
    }
];


/***/ }),

/***/ "v/1g":
/*!***************************************************!*\
  !*** ./src/app/Pages/Products/Products.module.ts ***!
  \***************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-instantsearch */ "VPfG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Products_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Products.routing */ "g83S");
/* harmony import */ var _ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductsList/ProductsList.component */ "cfeg");
/* harmony import */ var _DetailPage_DetailPage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DetailPage/DetailPage.component */ "eaHl");
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Global/Global.module */ "nZ7c");
/* harmony import */ var _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Templates/Templates.module */ "r8c5");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");





































var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsModule });
    ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsModule_Factory(t) { return new (t || ProductsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Products_routing__WEBPACK_IMPORTED_MODULE_5__["ProductsRoutes"]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_8__["GlobalModule"],
                _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"],
                angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__["NgAisModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ]] });
    return ProductsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_6__["ProductsListComponent"],
        _DetailPage_DetailPage_component__WEBPACK_IMPORTED_MODULE_7__["DetailPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
        _Global_Global_module__WEBPACK_IMPORTED_MODULE_8__["GlobalModule"],
        _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"],
        angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__["NgAisModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Products_routing__WEBPACK_IMPORTED_MODULE_5__["ProductsRoutes"]),
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                    _Global_Global_module__WEBPACK_IMPORTED_MODULE_8__["GlobalModule"],
                    _Templates_Templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"],
                    angular_instantsearch__WEBPACK_IMPORTED_MODULE_3__["NgAisModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                declarations: [
                    _ProductsList_ProductsList_component__WEBPACK_IMPORTED_MODULE_6__["ProductsListComponent"],
                    _DetailPage_DetailPage_component__WEBPACK_IMPORTED_MODULE_7__["DetailPageComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=Pages-Products-Products-module.js.map