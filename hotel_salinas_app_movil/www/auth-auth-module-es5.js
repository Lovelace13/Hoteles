function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">Inicio Sesión</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n\n    <div class=\"content\">\n      <ion-button class=\"actionbutton\" expand=\"full\" fill=\"clear\" routerLink=\"/auth/signin\" style=\"text-transform: none;\">Iniciar Sesión</ion-button>\n      <ion-button class=\"fbbutton\" expand=\"full\" fill=\"clear\"><b>Facebook</b></ion-button>\n      <ion-button class=\"googlebutton\" expand=\"full\" fill=\"clear\"><b>Google</b></ion-button>\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"line\" size=\"4\">\n  \n          </ion-col>\n          <ion-col size=\"5\" style=\"text-align: center;\">\n            Eres nuevo?\n          </ion-col>\n          <ion-col class=\"line\" size=\"3\">\n  \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-button class=\"signupbutton\" expand=\"full\" fill=\"clear\" routerLink=\"/auth/signup\" style=\"text-transform: none;\">Creacion de cuenta</ion-button>\n      <p style=\"text-align: center;font-size: small;color: grey;\">Al crear una cuenta o iniciar sesión estas aceptando nuestros <a>Terminos y Condiciones</a> y <a>Politica de Privacidad</a></p>\n    </div>\n    \n    <!--\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-margin-top ion-margin-bottom\">\n          <ion-list class=\"bg-transparent\">\n            <ion-item color=\"none\" lines=\"none\">\n              <ion-input type=\"email\" ngModel placeholder=\"Email\" name=\"email\" required email #emailCtrl=\"ngModel\"></ion-input>\n            </ion-item>\n            <ion-item color=\"none\" lines=\"none\" *ngIf=\"!emailCtrl.valid && emailCtrl.touched\">\n              <p>Should be a valid Address</p>\n            </ion-item>\n            <ion-item color=\"none\" lines=\"none\">\n              <ion-input type=\"password\" ngModel placeholder=\"Contraseña\" name=\"password\" required minlength=\"6\" #passwordCtrl=\"ngModel\">\n              </ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\" color=\"none\" lines=\"none\">\n              <p>Debe tener al menos 6 dígitos</p>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          \n          \n          <ion-button type=\"submit\" color=\"primary\" (click)=\"onLogin()\" expand=\"block\">Inicio Sesión</ion-button>\n          <ion-button type=\"submit\" color=\"primary\" (click)=\"onLogin()\" expand=\"block\" [disabled]=\"!f.valid\">Inicio Sesión\n          </ion-button>\n          \n          <span class=\"divider line one-line\">or</span>\n          <ion-button type=\"button\" color=\"primary\" fill=\"clear\" expand=\"block\" routerLink=\"/auth/signup\"><strong>Crear cuenta</strong></ion-button>\n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    -->\n  </form>\n\n\n\n\n  <!--<div class=\"ion-text-center\">\n    <ion-spinner color=\"primary\" *ngIf=\"isLoading\"></ion-spinner>\n  </div> -->\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthPageRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function () {
      return AuthPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.page */
    "./src/app/auth/auth.page.ts");

    var routes = [{
      path: '',
      component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"]
    }, {
      path: 'sign-up',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sign-up-sign-up-module */
        "sign-up-sign-up-module").then(__webpack_require__.bind(null,
        /*! ./sign-up/sign-up.module */
        "./src/app/auth/sign-up/sign-up.module.ts")).then(function (m) {
          return m.SignUpPageModule;
        });
      }
    }, {
      path: 'sign-in',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sign-in-sign-in-module */
        "sign-in-sign-in-module").then(__webpack_require__.bind(null,
        /*! ./sign-in/sign-in.module */
        "./src/app/auth/sign-in/sign-in.module.ts")).then(function (m) {
          return m.SignInPageModule;
        });
      }
    }];

    var AuthPageRoutingModule = function AuthPageRoutingModule() {
      _classCallCheck(this, AuthPageRoutingModule);
    };

    AuthPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthPageModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPageModule", function () {
      return AuthPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.page */
    "./src/app/auth/auth.page.ts");

    var AuthPageModule = function AuthPageModule() {
      _classCallCheck(this, AuthPageModule);
    };

    AuthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPageRoutingModule"]],
      declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]]
    })], AuthPageModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.page.scss":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: url('background5.jpg') 0 0/100% no-repeat;\n}\n\n.content {\n  margin-top: 83%;\n  margin-left: 7px;\n}\n\nion-input {\n  background-color: #ededed;\n  border-radius: 5px;\n  font-size: small;\n}\n\n.actionbutton {\n  background-color: #3b5998;\n  color: cornsilk;\n  border-radius: 5px;\n  margin-left: 15px;\n  margin-right: 13px;\n  margin-bottom: 14px;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.signupbutton {\n  background-color: #3b5998;\n  color: cornsilk;\n  border-radius: 5px;\n  margin-left: 15px;\n  margin-right: 13px;\n  margin-bottom: 14px;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.line {\n  border-bottom: 1px solid grey;\n  margin-bottom: 7px;\n}\n\n.fbbutton {\n  background-color: #3b5998;\n  border-radius: 6px;\n  color: cornsilk;\n  margin-left: 15px;\n  margin-right: 13px;\n  margin-bottom: 13px;\n  font-family: \"Nunito\", sans-serif;\n  text-transform: none;\n}\n\n.googlebutton {\n  background-color: #ffffff;\n  border-radius: 5px;\n  margin-left: 15px;\n  margin-right: 13px;\n  color: grey;\n  margin-bottom: 3px;\n  font-family: \"Nunito\", sans-serif;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9DOlxcVXNlcnNcXGRhdmlkXFxEZXNrdG9wXFxDb2RpbmdcXEluZ1NvZnR3YXJlRVNQT0xcXGhvdGVsX3NhbGluYXNfYXBwX21vdmlsL3NyY1xcYXBwXFxhdXRoXFxhdXRoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC9hdXRoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHVEQUFBO0FDQUo7O0FER0M7RUFFRyxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURLQTtFQUNHLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ZIOztBREtBO0VBQ0cseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQ0ZIOztBREtBO0VBQ0cseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQ0ZIOztBREtBO0VBQ0csNkJBQUE7RUFDQSxrQkFBQTtBQ0ZIOztBREtBO0VBQ0cseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0FDRkg7O0FES0E7RUFDRyx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7QUNGSCIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4vLi4vYXNzZXRzL2JhY2tncm91bmQ1LmpwZycpIDAgMC8xMDAlIG5vLXJlcGVhdDtcclxuIH1cclxuXHJcbiAuY29udGVudHtcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDo4MyU7XHJcbiAgICBtYXJnaW4tbGVmdDo3cHg7XHJcbiB9XHJcblxyXG5cclxuaW9uLWlucHV0e1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5hY3Rpb25idXR0b257XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbiAgIGNvbG9yOiBjb3Juc2lsaztcclxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zaWdudXBidXR0b257XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbiAgIGNvbG9yOiBjb3Juc2lsaztcclxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5saW5le1xyXG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG4uZmJidXR0b257XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgY29sb3I6IGNvcm5zaWxrO1xyXG4gICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG4gICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4uZ29vZ2xlYnV0dG9ue1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbiAgIGNvbG9yOiBncmV5O1xyXG4gICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi8uLi9hc3NldHMvYmFja2dyb3VuZDUuanBnXCIpIDAgMC8xMDAlIG5vLXJlcGVhdDtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA4MyU7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmFjdGlvbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG4gIGNvbG9yOiBjb3Juc2lsaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnNpZ251cGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG4gIGNvbG9yOiBjb3Juc2lsaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmxpbmUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG4uZmJidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGNvbG9yOiBjb3Juc2lsaztcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uZ29vZ2xlYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICBjb2xvcjogZ3JleTtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/auth/auth.page.ts":
  /*!***********************************!*\
    !*** ./src/app/auth/auth.page.ts ***!
    \***********************************/

  /*! exports provided: AuthPage */

  /***/
  function srcAppAuthAuthPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPage", function () {
      return AuthPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var AuthPage = /*#__PURE__*/function () {
      function AuthPage(authService, router, loadingCtrl) {
        _classCallCheck(this, AuthPage);

        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
        this.isLogin = true;
      }

      _createClass(AuthPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this = this;

          this.isLoading = true;
          this.loadingCtrl.create({
            keyboardClose: true,
            message: 'Logging in...'
          }).then(function (loadingEl) {
            loadingEl.present();
            setTimeout(function () {
              _this.isLoading = false;
              loadingEl.dismiss();

              _this.router.navigateByUrl("/places/tabs/discover");
            }, 2000);
          });
          this.authService.login();
        }
      }, {
        key: "onSwitchAuthMode",
        value: function onSwitchAuthMode() {
          this.isLogin = !this.isLogin;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          if (!form.valid) {
            return;
          }

          var email = form.value.email;
          var password = form.value.password;
          console.log(email, password);

          if (this.isLogin) {//Send a request to login servers
          } else {//Send a request to signup servers
            }
        }
      }]);

      return AuthPage;
    }();

    AuthPage.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };

    AuthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-auth",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.page.scss */
      "./src/app/auth/auth.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], AuthPage);
    /***/
  }
}]);
//# sourceMappingURL=auth-auth-module-es5.js.map