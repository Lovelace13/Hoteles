(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cars-list-cars-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cars-list/cars-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cars-list/cars-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.carlist.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      <h6 class=\"ion-no-margin\">({{ shops.length }}) {{ 'app.label.resultsf' | translate }}</h6>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding animated fadeIn\">\n  <div [@staggerIn]='shops.length'>\n    <!-- # -->\n    <ion-item color=\"primary\" tappable routerLink=\"/car-detail/{{shop.id}}\" class=\"ion-margin-bottom\" *ngFor=\"let shop of shops\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"shop.thumb\">\n      </ion-thumbnail>\n      <ion-label>\n        <h2><strong>{{ shop.name }}</strong></h2>\n        <h3>\n          <ion-badge slot=\"start\" color=\"secondary\" class=\"rooms\">\n            <ion-icon name=\"book\" color=\"tertiary\"></ion-icon>\n            {{ 'app.label.daily' | translate }} {{ shop.price | currency }}\n          </ion-badge>\n        </h3>\n        <p>\n          <ion-icon name=\"person\" color=\"tertiary\"></ion-icon> {{ shop.passengers_from }}-{{ shop.passengers_to }} | <ion-icon name=\"briefcase\" color=\"tertiary\"></ion-icon> {{ shop.luggage }}\n        </p>\n        <ion-badge color=\"success\">\n          {{ 'app.label.total' | translate }} <strong>{{ shop.price * numDays | currency }}</strong>\n        </ion-badge>\n      </ion-label>\n    </ion-item>\n    <!-- # -->\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/cars-list/cars-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/cars-list/cars-list.module.ts ***!
  \*****************************************************/
/*! exports provided: CarsListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsListPageModule", function() { return CarsListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _cars_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cars-list.page */ "./src/app/pages/cars-list/cars-list.page.ts");








const routes = [
    {
        path: '',
        component: _cars_list_page__WEBPACK_IMPORTED_MODULE_7__["CarsListPage"]
    }
];
let CarsListPageModule = class CarsListPageModule {
};
CarsListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cars_list_page__WEBPACK_IMPORTED_MODULE_7__["CarsListPage"]]
    })
], CarsListPageModule);



/***/ }),

/***/ "./src/app/pages/cars-list/cars-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/cars-list/cars-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2Fycy1saXN0L2NhcnMtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3RkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2Fycy1saXN0L2NhcnMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSlcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/cars-list/cars-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cars-list/cars-list.page.ts ***!
  \***************************************************/
/*! exports provided: CarsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsListPage", function() { return CarsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");





let CarsListPage = class CarsListPage {
    constructor(navCtrl, carsService, translate) {
        this.navCtrl = navCtrl;
        this.carsService = carsService;
        this.translate = translate;
        this.numDays = 3;
    }
    ngOnInit() {
        this.shops = this.carsService.getAll();
    }
};
CarsListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["CarsService"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"] }
];
CarsListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cars-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cars-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cars-list/cars-list.page.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('600ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cars-list.page.scss */ "./src/app/pages/cars-list/cars-list.page.scss")).default]
    })
], CarsListPage);



/***/ })

}]);
//# sourceMappingURL=pages-cars-list-cars-list-module-es2015.js.map