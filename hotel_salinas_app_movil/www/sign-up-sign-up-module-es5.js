function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-up/sign-up.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-up/sign-up.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthSignUpSignUpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button style=\"color:white;\" (click)=\"presentAlertConfirm()\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Hotel Salinas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"login-box-body\">\n\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmitP1(f)\" *ngIf=\"phase_user_credentials\">\n      <ion-card> \n        <ion-card-header>\n          <ion-card-title>Credenciales</ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"ion-text-center\">\n          <ion-item lines=\"none\">\n            <ion-input type=\"email\"  [(ngModel)]=\"input_email\" placeholder=\"Email\" name=\"email\" required email #emailCtrl=\"ngModel\"></ion-input>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-input type=\"password\" [(ngModel)]=\"input_passw\" placeholder=\"Contraseña\" name=\"password\" required minlength=\"6\" #passwordCtrl=\"ngModel\"></ion-input>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-input type=\"password\" [(ngModel)]=\"confirm_passw\" placeholder=\"Confirmar contraseña\" name=\"pass_confirmation\" required minlength=\"6\" #passwordConfirmCtrl=\"ngModel\"></ion-input>\n          </ion-item>\n          <ion-button type=\"submit\" color=\"primary\"  expand=\"block\" [disabled]=\"!f.valid\" >Continuar</ion-button>\n        </ion-card-content>\n      </ion-card>\n    </form>\n    \n\n\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmitP2(f)\" *ngIf=\"phase_user_info\">\n\n      <ion-card >\n        <ion-card-header>\n          <!--\n          <ion-card-subtitle>Información personal</ion-card-subtitle>\n          -->\n          <ion-card-title>Información personal</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content>\n          <ion-list>\n            <ion-item>\n              <ion-label>Título</ion-label>\n              <ion-select [(ngModel)]=\"user_title\" name=\"select_title\" placeholder=\"Sr/Sra\">\n                <ion-select-option value=\"sr\">Sr.</ion-select-option>\n                <ion-select-option value=\"sra\">Sra.</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-input ngModel placeholder=\"Nombres\" [(ngModel)]=\"user_name\" name=\"nombres\" required nombres #nombresCtrl=\"ngModel\"></ion-input>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-input ngModel placeholder=\"Apellidos\" [(ngModel)]=\"user_lastname\" name=\"apellidos\" required apellidos #apellidosCtrl=\"ngModel\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Género</ion-label>\n              <ion-select [(ngModel)]=\"user_gender\" name=\"select_gender\" placeholder=\"\">\n                <ion-select-option value=\"m\">Masculino</ion-select-option>\n                <ion-select-option value=\"f\">Femenino</ion-select-option>\n                <ion-select-option value=\"ot\">Otros</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Fecha Nacimiento</ion-label>\n              <ion-datetime display-format=\"DD-MM-YYYY\" picker-format=\"YYYY MMM DD\"\n              \n              [(ngModel)]=\"user_datebirth\"\n              name=\"datebirth\" required></ion-datetime>\n            </ion-item>\n          </ion-list>\n          <ion-button style=\"margin-bottom: 4%;\" type=\"submit\" color=\"primary\" expand=\"block\" [disabled]=\"!f.valid\" >Registrar</ion-button>\n          <u><p class=\"ion-text-start\" color=\"primary\" (click)=\"phaseBack()\"><strong>Regresar</strong></p></u>\n        </ion-card-content>\n      </ion-card>\n\n    </form>\n    \n    \n    <ion-card *ngIf=\"phase_user_location\"> \n      <ion-item>\n        <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n        <ion-label>ion-item in a card, icon left, button right</ion-label>\n        <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n      </ion-item>\n    \n      <ion-card-content>\n        This is content, without any paragraph or header tags,\n        within an ion-card-content element.\n      </ion-card-content>\n    </ion-card>\n    \n    <ion-card *ngIf=\"phase_user_location\">\n      <ion-item href=\"#\" class=\"ion-activated\">\n        <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\n        <ion-label>Card Link Item 1 activated</ion-label>\n      </ion-item>\n    \n      <ion-item href=\"#\">\n        <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\n        <ion-label>Card Link Item 2</ion-label>\n      </ion-item>\n    \n      <ion-item class=\"ion-activated\">\n        <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n        <ion-label>Card Button Item 1 activated</ion-label>\n      </ion-item>\n    \n      <ion-item>\n        <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\n        <ion-label>Card Button Item 2</ion-label>\n      </ion-item>\n    </ion-card>\n  </div>\n  \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/auth/sign-up/sign-up-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/auth/sign-up/sign-up-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: SignUpPageRoutingModule */

  /***/
  function srcAppAuthSignUpSignUpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function () {
      return SignUpPageRoutingModule;
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


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/auth/sign-up/sign-up.page.ts");

    var routes = [{
      path: '',
      component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }];

    var SignUpPageRoutingModule = function SignUpPageRoutingModule() {
      _classCallCheck(this, SignUpPageRoutingModule);
    };

    SignUpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignUpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/sign-up/sign-up.module.ts":
  /*!************************************************!*\
    !*** ./src/app/auth/sign-up/sign-up.module.ts ***!
    \************************************************/

  /*! exports provided: SignUpPageModule */

  /***/
  function srcAppAuthSignUpSignUpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function () {
      return SignUpPageModule;
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


    var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-up-routing.module */
    "./src/app/auth/sign-up/sign-up-routing.module.ts");
    /* harmony import */


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/auth/sign-up/sign-up.page.ts");

    var SignUpPageModule = function SignUpPageModule() {
      _classCallCheck(this, SignUpPageModule);
    };

    SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageRoutingModule"]],
      declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
    })], SignUpPageModule);
    /***/
  },

  /***/
  "./src/app/auth/sign-up/sign-up.page.scss":
  /*!************************************************!*\
    !*** ./src/app/auth/sign-up/sign-up.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthSignUpSignUpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: url('background4.jpg') 0 0/100% no-repeat;\n}\n\nion-input {\n  border-radius: 5px;\n}\n\n.login-box-body {\n  padding: 5px 5px 0px 5px;\n  border-top: 0;\n  border-radius: 0px 0px 4px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduLXVwL0M6XFxVc2Vyc1xcZGF2aWRcXERlc2t0b3BcXENvZGluZ1xcSW5nU29mdHdhcmVFU1BPTFxcaG90ZWxfc2FsaW5hc19hcHBfbW92aWwvc3JjXFxhcHBcXGF1dGhcXHNpZ24tdXBcXHNpZ24tdXAucGFnZS5zY3NzIiwic3JjL2FwcC9hdXRoL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1REFBQTtBQ0NKOztBREdDO0VBQ0csa0JBQUE7QUNBSjs7QURHQztFQUNHLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2JhY2tncm91bmQ0LmpwZycpIDAgMC8xMDAlIG5vLXJlcGVhdDtcclxuIH1cclxuXHJcblxyXG4gaW9uLWlucHV0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gfVxyXG5cclxuIC5sb2dpbi1ib3gtYm9keSB7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4IDBweCA1cHg7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xyXG59XHJcblxyXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2JhY2tncm91bmQ0LmpwZ1wiKSAwIDAvMTAwJSBuby1yZXBlYXQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxvZ2luLWJveC1ib2R5IHtcbiAgcGFkZGluZzogNXB4IDVweCAwcHggNXB4O1xuICBib3JkZXItdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/auth/sign-up/sign-up.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/auth/sign-up/sign-up.page.ts ***!
    \**********************************************/

  /*! exports provided: SignUpPage */

  /***/
  function srcAppAuthSignUpSignUpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPage", function () {
      return SignUpPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth/auth.service.ts");

    var SignUpPage = /*#__PURE__*/function () {
      function SignUpPage(authService, alertController, navCtrl) {
        _classCallCheck(this, SignUpPage);

        this.authService = authService;
        this.alertController = alertController;
        this.navCtrl = navCtrl; //Configurador de flujo

        this.phase_user_info = false;
        this.phase_user_location = false;
        this.phase_user_credentials = false;
        this.actualPhase = 1;
      }

      _createClass(SignUpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("[OnInit] Iniciando proceso de registro fase 1");
          this.initSignUp();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          console.log("[WillEnter] Iniciando proceso de registro fase 1");
          this.initSignUp();
        }
      }, {
        key: "initSignUp",
        value: function initSignUp() {
          this.actualPhase = 1;
          this.phase_user_credentials = true;
          this.phase_user_info = false;
          this.phase_user_location = false;
        }
      }, {
        key: "changePhase",
        value: function changePhase(actualPhase) {
          switch (actualPhase) {
            case 1:
              {
                this.phase_user_credentials = true;
                this.phase_user_info = false;
                this.phase_user_location = false;
                break;
              }

            case 2:
              {
                this.phase_user_credentials = false;
                this.phase_user_info = true;
                this.phase_user_location = false;
                break;
              }

            default:
              {
                this.phase_user_credentials = false;
                this.phase_user_info = false;
                this.phase_user_location = false;
                break;
              }
          }

          this.actualPhase = actualPhase;
        }
      }, {
        key: "phaseBack",
        value: function phaseBack() {
          this.actualPhase = this.actualPhase - 1;
          this.changePhase(this.actualPhase);
        }
      }, {
        key: "onSubmitP1",
        value: function onSubmitP1(form) {
          var _this = this;

          var email = form.value.email;
          var password = form.value.password;
          var confirmPass = form.value.pass_confirmation;
          console.log(password);
          console.log(confirmPass);
          console.log(email);

          if (!(password === confirmPass)) {
            var title = "Contraseña Incorrecta";
            var subtitle = "Las credenciales ingresadas no coinciden";
            var message = "\n\nPor favor intentalo de nuevo";
            this.presentAlert(title, subtitle, message);
          } else if (!form.valid) {
            var title = "Error con el correo";
            var subtitle = "El correo ingresado para invalido";
            var message = "\n\nPor favor intentalo de nuevo";
            this.presentAlert(title, subtitle, message);
          } else {
            //CONFIRMAMOS SI EL EMAIL EXISTE

            /*
            var emailInfo;
            this.authService.queryUserEmail(email);
            this.userSub = this.authService.getQueryEmailUpdateListener()
            .subscribe((data) => {
              emailInfo = data;
            });
            console.log("previa");
            console.log(this.authService.registerEmail);
            */
            this.authService.queryUserEmail(email).subscribe(function (postData) {
              if (postData.status === 1) {
                _this.presentAlert('Correo en uso', 'Lo lamento el mail ingresado se encuentra actualmente en uso.', 'Intenta con un nuevo correo');
              } else {
                console.log("exito!!!");

                _this.changePhase(_this.actualPhase + 1);
              }
            });
          }
        }
      }, {
        key: "onSubmitP2",
        value: function onSubmitP2(form) {
          var _this2 = this;

          var titulo = form.value.select_title;
          var nombres = form.value.nombres;
          var apellidos = form.value.apellidos;
          var genero = form.value.select_gender;
          var nacimiento = new Date(form.value.datebirth);
          console.log(titulo);
          console.log(nombres);
          console.log(apellidos);
          console.log(genero);
          console.log(nacimiento);
          var time = Number(new Date().getTime()) - Number(nacimiento.getTime());
          console.log(age);
          var age = Math.floor(time / (1000 * 3600 * 24) / 365);

          if (age < 18) {
            var title = "Edad Insuficiente";
            var subtitle = "\n\n\nLo sentimos, por politicas de seguridad debes de ser mayor de edad para poder crear una cuenta en hotelsalinasec.com";
            var message = "";
            this.presentAlert(title, subtitle, message);
          } else if (!titulo) {
            var title = "Llenar campo Título";
            var subtitle = "\n\n\nLo sentimos, por politicas de seguridad debes de ser mayor de edad para poder crear una cuenta en hotelsalinasec.com";
            var message = "";
            this.presentAlert(title, subtitle, message);
          } else if (!genero) {
            var title = "Llenar campo Género";
            var subtitle = "\n\n\nLo sentimos, por politicas de seguridad debes de ser mayor de edad para poder crear una cuenta en hotelsalinasec.com";
            var message = "";
            this.presentAlert(title, subtitle, message);
          } else if (!form.valid) {
            return;
          } else {
            console.log("RESULTADO");
            console.log(this.user_name);
            console.log(this.user_lastname);
            console.log(this.user_title);
            console.log(this.user_gender);
            console.log(this.user_datebirth);
            console.log("RESULTADO");
            console.log(this.input_email);
            console.log(this.input_passw);
            console.log(this.confirm_passw);
            var sendData = {
              username: this.user_name,
              lastname: this.user_lastname,
              title: this.user_title,
              gender: this.user_gender,
              datebirth: this.user_datebirth,
              email: this.input_email,
              password: this.confirm_passw
            };
            this.authService.registerUser(sendData).subscribe(function (response) {
              console.log("filas");
              console.log(response['rowsInserted']);
              console.log(response['status']);

              if (response['rowsInserted'] > 0 && response['status'] == 1) {
                console.log("INSERTADO EXITOSAMENTE");
                var title = "Registro Exitoso!";
                var subtitle = _this2.user_name + " Bienvenido a Hotel Salinas , ahora ya puedes iniciar sesión y comenzar a vivir la aventura";
                var message = "";

                _this2.presentAlert(title, subtitle, message);

                _this2.navCtrl.back();
              } else {
                console.log("Fallo!!!");
                var title = "Error de Conexión";
                var subtitle = _this2.user_name + "Ups! Parece que hubo un error en nuestros servicios, lamentamos el inconveniente";
                var message = "Favor intentar dentro de unos minutos";

                _this2.presentAlert(title, subtitle, message);

                _this2.navCtrl.back();
              }
            });
          }
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(title, subtitle, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: title,
                      subHeader: subtitle,
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Cancelacion de registro',
                      message: 'Estas seguro que deseas cancelar tu proceso de registro?\nSe perdera tu información ingresada!',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Si',
                        handler: function handler() {
                          console.log('Confirm Okay');

                          _this3.navCtrl.back();
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return SignUpPage;
    }();

    SignUpPage.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-up/sign-up.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.page.scss */
      "./src/app/auth/sign-up/sign-up.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], SignUpPage);
    /***/
  }
}]);
//# sourceMappingURL=sign-up-sign-up-module-es5.js.map