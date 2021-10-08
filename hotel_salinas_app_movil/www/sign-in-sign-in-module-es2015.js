(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-in/sign-in.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-in/sign-in.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button style=\"color:white;\" (click)=\"backEvent()\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Hotel Salinas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <div class=\"login-box-body\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Inicio Sesión</ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"ion-text-center\">\n          <ion-item lines=\"none\">\n            <ion-input type=\"email\" ngModel placeholder=\"Email\" name=\"email\" required email #emailCtrl=\"ngModel\"></ion-input>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-input type=\"password\" ngModel placeholder=\"Contraseña\" name=\"password\" required minlength=\"6\" #passwordCtrl=\"ngModel\"></ion-input>\n          </ion-item>\n          <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [disabled]=\"!f.valid\">Inicio Sesión</ion-button>\n          <a routerLink=\"/auth\" class=\"small-text\">Olvidaste tu contraseña?</a>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    \n\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/auth/sign-in/sign-in-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in-routing.module.ts ***!
  \********************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/auth/sign-in/sign-in.page.ts");




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/sign-in/sign-in.module.ts":
/*!************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.module.ts ***!
  \************************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in-routing.module */ "./src/app/auth/sign-in/sign-in-routing.module.ts");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/auth/sign-in/sign-in.page.ts");







let SignInPageModule = class SignInPageModule {
};
SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignInPageRoutingModule"]
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "./src/app/auth/sign-in/sign-in.page.scss":
/*!************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('background5.jpg') 0 0/100% no-repeat;\n}\n\nion-input {\n  border-radius: 5px;\n}\n\n.login-box-body {\n  padding: 10px 10px 0px 10px;\n  border-top: 0;\n  color: #67757c;\n  border-radius: 0px 0px 4px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduLWluL0M6XFxVc2Vyc1xcZGF2aWRcXERlc2t0b3BcXENvZGluZ1xcSW5nU29mdHdhcmVFU1BPTFxcaG90ZWxfc2FsaW5hc19hcHBfbW92aWwvc3JjXFxhcHBcXGF1dGhcXHNpZ24taW5cXHNpZ24taW4ucGFnZS5zY3NzIiwic3JjL2FwcC9hdXRoL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1REFBQTtBQ0NKOztBREVDO0VBQ0csa0JBQUE7QUNDSjs7QURFQztFQUNHLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kNS5qcGcnKSAwIDAvMTAwJSBuby1yZXBlYXQ7XHJcbiB9XHJcblxyXG4gaW9uLWlucHV0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gfVxyXG5cclxuIC5sb2dpbi1ib3gtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4IDEwcHg7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgY29sb3I6ICM2Nzc1N2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XHJcbn1cclxuXHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja2dyb3VuZDUuanBnXCIpIDAgMC8xMDAlIG5vLXJlcGVhdDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubG9naW4tYm94LWJvZHkge1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4IDEwcHg7XG4gIGJvcmRlci10b3A6IDA7XG4gIGNvbG9yOiAjNjc3NTdjO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/sign-in/sign-in.page.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.page.ts ***!
  \**********************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let SignInPage = class SignInPage {
    constructor(authService, router, loadingCtrl, alertController, navCtrl) {
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.isLoading = false;
        this.isLogin = true;
    }
    ngOnInit() {
    }
    onLogin() {
        this.isLoading = true;
        this.loadingCtrl.create({ keyboardClose: true, message: 'Logging in...' })
            .then(loadingEl => {
            loadingEl.present();
            setTimeout(() => {
                this.isLoading = false;
                loadingEl.dismiss();
                this.router.navigateByUrl("/places/tabs/discover");
            }, 400);
        });
        this.authService.login();
    }
    presentAlert(title, subtitle, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: title,
                subHeader: subtitle,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    onSubmit(form) {
        if (!form.valid) {
            form.reset();
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        console.log(email, password);
        this.authService.loginValidation(email)
            .subscribe((response) => {
            console.log(response);
            if (response['status'] == 1) {
                var passwordCompare = response['data']['password'];
                console.log("* " + passwordCompare);
                console.log("* " + password);
                if (passwordCompare == password) {
                    console.log("INICIO EXITOSO");
                    this.onLogin();
                }
                else {
                    this.presentAlert('Inicio Fallido', 'Parece que las credenciales ingresadas son incorrectas.', '');
                }
            }
            else {
                console.log("Error de conexion!!!");
            }
        });
        if (this.isLogin) {
            //Send a request to login servers
            form.reset();
        }
        else {
            //Send a request to signup servers
        }
    }
    backEvent() {
        this.navCtrl.back();
    }
};
SignInPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-in/sign-in.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/auth/sign-in/sign-in.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], SignInPage);



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module-es2015.js.map