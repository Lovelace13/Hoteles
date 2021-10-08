(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.editprofile.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile\">\n  <ion-card class=\"ion-no-margin\">\n    <ion-card-content class=\"bg-profile\">\n      <img src=\"assets/img/avatar.jpg\">\n      <h1 class=\"fw500\">Carlos Cunalata</h1>\n      <h2 color=\"light\" class=\"ion-margin-bottom\">Customer</h2>\n      <ion-button icon-left color=\"secondary\">\n        <ion-icon name=\"images\" slot=\"start\"></ion-icon> \n        {{ 'app.label.edit' | translate }} / {{ 'app.label.insertavatar' | translate }}\n      </ion-button>\n    </ion-card-content>\n  \n    <ion-grid fixed class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"ion-padding\">\n          <ion-list class=\"ion-margin-bottom\">\n            <ion-list-header color=\"light\">\n              <ion-label class=\"fw700\">{{ 'app.label.userdata' | translate }}</ion-label>\n            </ion-list-header>\n\n            <ion-item>\n              <ion-label color=\"dark\" position=\"stacked\">{{ 'app.label.title' | translate }}:</ion-label>\n              <ion-select name=\"select_title\" placeholder=\"Sr/Sra\">\n                <ion-select-option value=\"sr\">Sr.</ion-select-option>\n                <ion-select-option value=\"sra\">Sra.</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label color=\"dark\" position=\"stacked\">{{ 'app.label.fullname' | translate }}:</ion-label>\n              <ion-input inputmode=\"text\" placeholder=\"Ex..: Joe Doe\" value=\"Carlos Cunalata\"></ion-input>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label color=\"dark\" position=\"stacked\">{{ 'app.label.email' | translate }}:</ion-label>\n              <ion-input inputmode=\"email\" placeholder=\"Ex.: joe@doe.com\" value=\"davidchang09@hotmail.com\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label color=\"dark\" position=\"stacked\">{{ 'app.label.gender' | translate }}:</ion-label>\n              <ion-select name=\"select_gender\" placeholder=\"\">\n                <ion-select-option value=\"m\">Masculino</ion-select-option>\n                <ion-select-option value=\"f\">Femenino</ion-select-option>\n                <ion-select-option value=\"ot\">Otros</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label color=\"dark\" position=\"stacked\">{{ 'app.label.birth_date' | translate }}:</ion-label>\n              <ion-datetime display-format=\"DD-MM-YYYY\" picker-format=\"YYYY MMM DD\"\n              value=\"1996-04-09T15:43:40.394Z\" name=\"datebirth\" required>\n              </ion-datetime>\n            </ion-item>\n          </ion-list>\n\n          <ion-list>\n            <ion-list-header color=\"light\">\n              <ion-label class=\"fw700\">{{ 'app.label.contact_info' | translate }}</ion-label>\n            </ion-list-header>\n\n            <ion-item>\n              <ion-select value=\"EC\" name=\"select_country\" placeholder=\"\">\n                <ion-select-option value=\"EC\">Ecuador</ion-select-option>\n              </ion-select>\n              <ion-input ngModel placeholder=\"Zip code\" name=\"zipcode\" zipcode #zipcodeCtrl=\"ngModel\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label color=\"dark\">{{ 'app.label.city' | translate }}</ion-label>\n              <ion-select>\n                <ion-select-option value=\"nes\">Guayaquil</ion-select-option>\n                <ion-select-option value=\"n64\">Quito</ion-select-option>\n                <ion-select-option value=\"ps\">Cuenca</ion-select-option>\n                <ion-select-option value=\"genesis\">Machala</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label color=\"dark\" position=\"stacked\">{{ 'app.label.address' | translate }}:</ion-label>\n              <ion-input inputmode=\"text\" placeholder=\"Ex.: Abey Road 5\"></ion-input>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label color=\"dark\">{{ 'app.label.phone_number' | translate }}</ion-label>\n              <ion-input ngModel placeholder=\"\"  name=\"phoneNumber\"  phoneNumber #phoneNumberCtrl=\"ngModel\"></ion-input>\n            </ion-item>\n\n          </ion-list>\n\n          <ion-list>\n            <ion-list-header color=\"light\">\n              <ion-label class=\"fw700\">{{ 'app.label.email_address' | translate }}</ion-label>\n            </ion-list-header>\n\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"checkmark-circle\"></ion-icon>\n              <ion-label>davidchang09@hotmail.com<br><ion-label style=\"font-size: small\">Email confirmado</ion-label></ion-label>\n            </ion-item>\n            <ion-item>\n              <a><ion-label style=\"font-size: large\">Edita tu correo</ion-label></a>\n            </ion-item>\n\n            \n\n          </ion-list>\n\n          <ion-list>\n            <ion-radio-group>\n              <ion-list-header color=\"light\">\n                <ion-label class=\"fw700\">{{ 'app.label.usertype' | translate }}</ion-label>\n              </ion-list-header>\n          \n              <ion-item>\n                <ion-label color=\"primary\">Customer</ion-label>\n                <ion-radio slot=\"start\" value=\"customer\" checked></ion-radio>\n              </ion-item>\n          \n              <ion-item>\n                <ion-label color=\"primary\">Travel Agent</ion-label>\n                <ion-radio slot=\"start\" value=\"agent\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n\n            <ion-item>\n              <ion-label class=\"text-1x\">{{ 'app.pages.editprofile.avail.text' | translate }}</ion-label>\n              <ion-checkbox></ion-checkbox>\n            </ion-item>\n          </ion-list>\n  \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <ion-button class=\"ion-no-margin\" size=\"large\" expand=\"full\" color=\"dark\" (click)=\"sendData()\">{{ 'app.label.edit' | translate }}</ion-button>\n  </ion-card>\n  \n  <div class=\"ion-padding\">\n    <ion-text color=\"dark\" class=\"ion-no-margin\">\n      Oceana 2020 - Ecuador,Todos los derechos reservador.\n    </ion-text>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");








const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_7__["EditProfilePage"]
    }
];
let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_7__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\n.profile ion-card {\n  width: 100%;\n  border-radius: 0;\n  background-color: #fff;\n}\n\n.profile ion-card ion-card-content {\n  padding: 32px;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  text-align: center;\n}\n\n.profile ion-card ion-card-content img {\n  height: 128px;\n  width: 128px;\n  border-radius: 50%;\n  border: solid 4px #fff;\n  display: inline;\n  box-shadow: 0 0 28px rgba(255, 255, 255, 0.65);\n}\n\n.profile ion-card ion-card-content h1 {\n  margin-top: 0.5rem;\n}\n\n.profile ion-item ion-input {\n  border-bottom: 1px solid var(--ion-color-tertiary);\n}\n\n.profile ion-buttom button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3RkFBQTtBQUFKOztBQUtFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFHSTtFQUNFLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUROOztBQUlNO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLDhDQUFBO0FBSFI7O0FBTU07RUFFRSxrQkFBQTtBQUxSOztBQWtCSTtFQUNFLGtEQUFBO0FBaEJOOztBQXFCSTtFQUNFLFNBQUE7QUFuQk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKVxuICB9XG59XG5cbi5wcm9maWxlIHtcbiAgaW9uLWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDMycHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAyOHB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEyOHB4O1xuICAgICAgICB3aWR0aDogMTI4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIDRweCAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyOHB4IHJnYmEoMjU1LDI1NSwyNTUsIC42NSk7XG4gICAgICB9XG5cbiAgICAgIGgxIHtcbiAgICAgICAgLy8gZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICAvLyBjb2xvcjogI2ZmZjtcbiAgICAgIH1cblxuICAgIC8vICAgaDMge1xuICAgIC8vICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAvLyAgICAgY29sb3I6ICNmZmY7XG4gICAgLy8gICB9XG5cbiAgICB9XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgaW9uLWlucHV0IHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1idXR0b20ge1xuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");




let EditProfilePage = class EditProfilePage {
    constructor(navCtrl, loadingCtrl, toastCtrl, translate) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
    }
    ngOnInit() {
    }
    sendData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // send booking info
            const loader = yield this.loadingCtrl.create({
                duration: 2000
            });
            loader.present();
            loader.onWillDismiss().then((l) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({
                    buttons: [
                        {
                            handler: () => {
                                console.log('Close clicked');
                            }
                        }
                    ],
                    cssClass: 'bg-profile',
                    message: 'Your Data was Edited!',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                this.navCtrl.navigateForward('/home');
            }));
            // end
        });
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"] }
];
EditProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/pages/edit-profile/edit-profile.page.scss")).default]
    })
], EditProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-edit-profile-edit-profile-module-es2015.js.map