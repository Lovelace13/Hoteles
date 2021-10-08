(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-info-user-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-info/user-info.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-info/user-info.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Información de Usuario</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user\">atras</ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card >\n    <ion-card-header>\n      <!--\n      <ion-card-subtitle>Información personal</ion-card-subtitle>\n      -->\n      <ion-card-title><b>Información personal</b></ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label>Título</ion-label>\n          <ion-select [(ngModel)]=\"user_title\" name=\"select_title\" placeholder=\"Sr/Sra\">\n            <ion-select-option value=\"sr\">Sr.</ion-select-option>\n            <ion-select-option value=\"sra\">Sra.</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label>Nombres: </ion-label>\n          <ion-input ngModel placeholder=\"Nombres\" [(ngModel)]=\"user_name\" name=\"nombres\" required nombres #nombresCtrl=\"ngModel\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label>Apellidos: </ion-label>\n          <ion-input ngModel placeholder=\"Apellidos\" [(ngModel)]=\"user_lastname\" name=\"apellidos\" required apellidos #apellidosCtrl=\"ngModel\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Género</ion-label>\n          <ion-select [(ngModel)]=\"user_gender\" name=\"select_gender\" placeholder=\"\">\n            <ion-select-option value=\"m\">Masculino</ion-select-option>\n            <ion-select-option value=\"f\">Femenino</ion-select-option>\n            <ion-select-option value=\"ot\">Otros</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Fecha Nacimiento</ion-label>\n          \n          <ion-datetime display-format=\"DD-MM-YYYY\" picker-format=\"YYYY MMM DD\"\n          \n          value=\"1996-04-09T15:43:40.394Z\"\n          name=\"datebirth\" required></ion-datetime>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card >\n    <ion-card-header>\n      <!--\n      <ion-card-subtitle>Información personal</ion-card-subtitle>\n      -->\n      <ion-card-title><b>Contacto</b></ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-list>\n        <ion-item lines=\"none\">\n          <ion-label>Celular: </ion-label>\n          <ion-input ngModel placeholder=\"Apellidos\" [(ngModel)]=\"user_phone\" name=\"apellidos\" required apellidos #apellidosCtrl=\"ngModel\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-input ngModel placeholder=\"Apellidos\" [(ngModel)]=\"user_address\" name=\"apellidos\" required apellidos #apellidosCtrl=\"ngModel\"></ion-input>\n        </ion-item>\n        <ion-label>País/Region</ion-label>\n        <ion-item>\n          <ion-select [(ngModel)]=\"user_country\" name=\"select_gender\" placeholder=\"\">\n            <ion-select-option value=\"EC\">Ecuador</ion-select-option>\n          </ion-select>\n          <ion-input ngModel placeholder=\"Zip code\" [(ngModel)]=\"user_zip\" name=\"apellidos\" required apellidos #apellidosCtrl=\"ngModel\"></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card >\n    <ion-card-header>\n      <ion-card-title><b>Dirección de correo</b></ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-list>\n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\" name=\"checkmark-circle\"></ion-icon>\n          <ion-label>davidchang09@hotmail.com<br><ion-label style=\"font-size: small\">Email confirmado</ion-label></ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n        <a><ion-label style=\"font-size: large\">Edita tu correo</ion-label></a>\n        </ion-item>\n        \n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  \n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/user/user-info/user-info-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/user/user-info/user-info-routing.module.ts ***!
  \************************************************************/
/*! exports provided: UserInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoPageRoutingModule", function() { return UserInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-info.page */ "./src/app/user/user-info/user-info.page.ts");




const routes = [
    {
        path: '',
        component: _user_info_page__WEBPACK_IMPORTED_MODULE_3__["UserInfoPage"]
    }
];
let UserInfoPageRoutingModule = class UserInfoPageRoutingModule {
};
UserInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/user/user-info/user-info.module.ts":
/*!****************************************************!*\
  !*** ./src/app/user/user-info/user-info.module.ts ***!
  \****************************************************/
/*! exports provided: UserInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoPageModule", function() { return UserInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _user_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-info-routing.module */ "./src/app/user/user-info/user-info-routing.module.ts");
/* harmony import */ var _user_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-info.page */ "./src/app/user/user-info/user-info.page.ts");







let UserInfoPageModule = class UserInfoPageModule {
};
UserInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserInfoPageRoutingModule"]
        ],
        declarations: [_user_info_page__WEBPACK_IMPORTED_MODULE_6__["UserInfoPage"]]
    })
], UserInfoPageModule);



/***/ }),

/***/ "./src/app/user/user-info/user-info.page.scss":
/*!****************************************************!*\
  !*** ./src/app/user/user-info/user-info.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1pbmZvL3VzZXItaW5mby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/user-info/user-info.page.ts":
/*!**************************************************!*\
  !*** ./src/app/user/user-info/user-info.page.ts ***!
  \**************************************************/
/*! exports provided: UserInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoPage", function() { return UserInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserInfoPage = class UserInfoPage {
    constructor() {
        //Configurador de flujo
        this.phase_user_info = false;
        this.phase_user_location = false;
        this.phase_user_credentials = false;
        this.actualPhase = 1;
        //DATA FASE 2
        this.user_name = "Carlos David";
        this.user_lastname = "Cunalata Chang";
        this.user_title = "sr";
        this.user_gender = "m";
        this.user_phone = "0990867613";
        this.user_address = "Ceibos Norte Calle primera #314";
        this.user_country = "EC";
        this.user_zip = "00914";
    }
    ngOnInit() {
    }
};
UserInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-info/user-info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-info.page.scss */ "./src/app/user/user-info/user-info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserInfoPage);



/***/ })

}]);
//# sourceMappingURL=user-info-user-info-module-es2015.js.map