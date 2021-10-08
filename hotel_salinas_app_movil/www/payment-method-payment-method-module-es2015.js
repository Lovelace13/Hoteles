(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-method-payment-method-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/payment-method/payment-method.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/payment-method/payment-method.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Métodos de Pago</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user\">atras</ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list inset>\n    <ion-item routerLink=\"/user/payment-method\">\n      <ion-label>Formas de Pago</ion-label>\n      <ion-icon slot=\"end\" name=\"card-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label\n        >Pago Preferente</ion-label>\n        <ion-icon slot=\"end\" name=\"bookmarks-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Creditos & Cupones</ion-label>\n      <ion-icon slot=\"end\" name=\"pricetag-outline\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label>Moneda</ion-label>\n      <ion-icon slot=\"end\" name=\"logo-usd\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/user/payment-method/payment-method-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user/payment-method/payment-method-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: PaymentMethodPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPageRoutingModule", function() { return PaymentMethodPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_method_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-method.page */ "./src/app/user/payment-method/payment-method.page.ts");




const routes = [
    {
        path: '',
        component: _payment_method_page__WEBPACK_IMPORTED_MODULE_3__["PaymentMethodPage"]
    }
];
let PaymentMethodPageRoutingModule = class PaymentMethodPageRoutingModule {
};
PaymentMethodPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentMethodPageRoutingModule);



/***/ }),

/***/ "./src/app/user/payment-method/payment-method.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/payment-method/payment-method.module.ts ***!
  \**************************************************************/
/*! exports provided: PaymentMethodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPageModule", function() { return PaymentMethodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_method_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-method-routing.module */ "./src/app/user/payment-method/payment-method-routing.module.ts");
/* harmony import */ var _payment_method_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-method.page */ "./src/app/user/payment-method/payment-method.page.ts");







let PaymentMethodPageModule = class PaymentMethodPageModule {
};
PaymentMethodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_method_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentMethodPageRoutingModule"]
        ],
        declarations: [_payment_method_page__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodPage"]]
    })
], PaymentMethodPageModule);



/***/ }),

/***/ "./src/app/user/payment-method/payment-method.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/user/payment-method/payment-method.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/payment-method/payment-method.page.ts":
/*!************************************************************!*\
  !*** ./src/app/user/payment-method/payment-method.page.ts ***!
  \************************************************************/
/*! exports provided: PaymentMethodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPage", function() { return PaymentMethodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaymentMethodPage = class PaymentMethodPage {
    constructor() { }
    ngOnInit() {
    }
};
PaymentMethodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-method',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-method.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/payment-method/payment-method.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment-method.page.scss */ "./src/app/user/payment-method/payment-method.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PaymentMethodPage);



/***/ })

}]);
//# sourceMappingURL=payment-method-payment-method-module-es2015.js.map