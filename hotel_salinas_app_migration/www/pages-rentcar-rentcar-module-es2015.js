(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rentcar-rentcar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rentcar/rentcar.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rentcar/rentcar.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Rent a Car</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding animated fadeIn\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col>\n        <!-- choose pickup and drop-off-->\n        <h6 class=\"ion-no-margin ion-margin-bottom\">\n          <ion-text color=\"primary\">Pick-up / Drop-off</ion-text>\n        </h6>\n        <ion-card class=\"ion-no-margin ion-margin-bottom bg-white\">\n          <ion-item tappable (click)=\"choosePlace('from')\" class=\"border-bottom\">\n            <ion-icon name=\"pin\" color=\"primary\" slot=\"start\"></ion-icon>\n            <ion-text color=\"primary\">{{ search.pickup }}</ion-text>\n          </ion-item>\n          <ion-item tappable (click)=\"choosePlace('to')\">\n            <ion-icon name=\"pin\" color=\"primary\" slot=\"start\"></ion-icon>\n            <ion-text color=\"primary\">{{ search.dropOff }}</ion-text>\n          </ion-item>\n        </ion-card>\n  \n        <!--choose time-->\n        <ion-card class=\"ion-no-margin ion-margin-bottom bg-white\">\n          <ion-item>\n            <ion-icon name=\"calendar\" color=\"primary\" slot=\"start\"></ion-icon>\n            <ion-datetime class=\"no-pl\" color=\"primary\" displayFormat=\"DD/MM/YYYY h:mm A\" pickerFormat=\"DD/MM/YYYY h:mm A\"\n              [(ngModel)]=\"search.from\"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"calendar\" color=\"primary\" slot=\"start\"></ion-icon>\n            <ion-datetime class=\"no-pl\" color=\"primary\" displayFormat=\"DD/MM/YYYY h:mm A\" pickerFormat=\"DD/MM/YYYY h:mm A\"\n              [(ngModel)]=\"search.to\"></ion-datetime>\n          </ion-item>\n        </ion-card>\n  \n        <hr>\n  \n        <h6 class=\"ion-no-margin ion-margin-bottom\">\n          <ion-text color=\"primary\">Make:</ion-text>\n        </h6>\n        <ion-card class=\"ion-no-margin ion-margin-bottom bg-white\">\n          <ion-item>\n            <ion-label>\n              <ion-text color=\"primary\">One or more:</ion-text>\n            </ion-label>\n            <ion-select [(ngModel)]=\"toppings\" color=\"primary\" multiple=\"true\" cancelText=\"Cancel\" okText=\"OK\">\n              <ion-select-option value=\"audi\" selected=\"true\">Audi</ion-select-option>\n              <ion-select-option value=\"bmw\">BMW</ion-select-option>\n              <ion-select-option value=\"chevrolet\" selected=\"true\">Chevrolet</ion-select-option>\n              <ion-select-option value=\"dodge\">Dodge</ion-select-option>\n              <ion-select-option value=\"fiat\">FIAT</ion-select-option>\n              <ion-select-option value=\"ford\">Ford</ion-select-option>\n              <ion-select-option value=\"honda\">Honda</ion-select-option>\n              <ion-select-option value=\"toyota\">Toyota</ion-select-option>\n              <ion-select-option value=\"volvo\">Volvo</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-card>\n  \n        <ion-button shape=\"round\" expand=\"full\" color=\"dark\" (click)=\"doSearch()\">\n          <ion-icon slot=\"start\" name=\"search\"></ion-icon> Search\n        </ion-button>\n  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/rentcar/rentcar.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/rentcar/rentcar.module.ts ***!
  \*************************************************/
/*! exports provided: RentcarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentcarPageModule", function() { return RentcarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _rentcar_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rentcar.page */ "./src/app/pages/rentcar/rentcar.page.ts");








const routes = [
    {
        path: '',
        component: _rentcar_page__WEBPACK_IMPORTED_MODULE_7__["RentcarPage"]
    }
];
let RentcarPageModule = class RentcarPageModule {
};
RentcarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_rentcar_page__WEBPACK_IMPORTED_MODULE_7__["RentcarPage"]]
    })
], RentcarPageModule);



/***/ }),

/***/ "./src/app/pages/rentcar/rentcar.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/rentcar/rentcar.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVudGNhci9yZW50Y2FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdGQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZW50Y2FyL3JlbnRjYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpXG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/rentcar/rentcar.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/rentcar/rentcar.page.ts ***!
  \***********************************************/
/*! exports provided: RentcarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentcarPage", function() { return RentcarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _modal_location_location_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../modal/location/location.page */ "./src/app/pages/modal/location/location.page.ts");





let RentcarPage = class RentcarPage {
    constructor(navCtrl, modalCtrl, storage) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.search = {
            pickup: 'Galapagos Islands, Petrel, Puerto Ayora',
            dropOff: 'Same as pickup',
            from: new Date().toISOString(),
            to: new Date().toISOString()
        };
    }
    ngOnInit() {
        this.storage.get('pickup').then((val) => {
            // console.log(val)
            if (val === null) {
                this.search.pickup = 'Galapagos Islands, Petrel, Puerto Ayora';
            }
            else {
                this.search.pickup = val;
            }
            // this.search.pickup = val;
            console.log(this.search.pickup);
        }).catch((err) => {
            console.log(err);
        });
        this.storage.get('dropOff').then((val) => {
            if (val === null) {
                this.search.dropOff = 'Same as pickup';
            }
            else {
                this.search.dropOff = val;
            }
            // this.search.dropOff = val;
        }).catch((err) => {
            console.log(err);
        });
    }
    choosePlace(fromto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_location_location_page__WEBPACK_IMPORTED_MODULE_4__["LocationPage"],
                componentProps: { fromto: fromto, search: this.search }
            });
            return yield modal.present();
        });
    }
    doSearch() {
        this.navCtrl.navigateForward('cars-list');
    }
};
RentcarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
RentcarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rentcar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rentcar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rentcar/rentcar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rentcar.page.scss */ "./src/app/pages/rentcar/rentcar.page.scss")).default]
    })
], RentcarPage);



/***/ })

}]);
//# sourceMappingURL=pages-rentcar-rentcar-module-es2015.js.map