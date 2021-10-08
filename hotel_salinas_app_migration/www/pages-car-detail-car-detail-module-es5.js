(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-car-detail-car-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/car-detail/car-detail.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/car-detail/car-detail.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCarDetailCarDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.cardetail.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"animated fadeIn\">\n  <div class=\"ion-text-center bg-profile\">\n    <img [src]=\"carshop.thumb\">\n  </div>\n\n  <ion-card class=\"ion-no-margin animated fadeIn\">\n    <ion-card-content class=\"bg-white\">\n      <h1>\n        <ion-text color=\"primary\">\n          <strong>{{carshop.name}}</strong>\n        </ion-text>\n      </h1>\n      <h3>\n        <ion-text color=\"primary\">{{ carshop.slogan }}</ion-text>\n      </h3>\n      <hr>\n      <p>{{carshop.address}}</p>\n    </ion-card-content>\n    <ion-item color=\"primary\">\n      <ion-label>\n        {{ 'app.label.averageprice' | translate }}:\n      </ion-label>\n      <ion-badge slot=\"end\" color=\"success\">\n        {{ carshop.price | currency }}\n      </ion-badge>\n    </ion-item>\n  </ion-card>\n\n  <ion-card class=\"bg-white\" *ngFor=\"let car of carshop.cars\">\n    <ion-img [src]=\"car.thumb\"></ion-img>\n  \n    <ion-card-content>\n  \n      <ion-card-subtitle>\n        <ion-text color=\"secondary\">{{ 'app.label.daily' | translate }} {{ car.price | currency }}</ion-text>\n      </ion-card-subtitle>\n  \n      <ion-card-title>\n        <ion-text color=\"primary\">{{car.name}}</ion-text>\n      </ion-card-title>\n  \n      <p>\n        <ion-text color=\"primary\">\n          <ion-icon name=\"person\" color=\"dark\"></ion-icon>\n          <span class=\"ion-margin-right\">{{ car.passengers }} {{ 'app.label.passengers' | translate }}</span>\n        </ion-text>\n      </p>\n      <p>\n        <ion-text color=\"primary\">\n          <ion-icon name=\"car\" color=\"dark\"></ion-icon>\n          {{ car.doors }} {{ 'app.label.doors' | translate }}\n        </ion-text>\n      </p>\n      <p>\n        <ion-text color=\"primary\">\n          <ion-icon name=\"checkmark\" color=\"success\"></ion-icon>\n          <span ion-text color=\"dark\" *ngIf=\"car.automatic_transmission\">{{ 'app.pages.cardetail.label.autotransmission' | translate }}</span>\n          <span ion-text color=\"dark\" *ngIf=\"!car.automatic_transmission\">{{ 'app.pages.cardetail.label.manualtransmission' | translate }}</span>\n        </ion-text>\n      </p>\n      <ion-button shape=\"round\" expand=\"full\" color=\"dark\" (click)=\"checkout(carshop.id, car.id)\">\n        <ion-icon slot=\"start\" name=\"car\"></ion-icon>\n        {{ 'app.label.reserve' | translate }} ({{ car.price * 3 | currency }})\n      </ion-button>\n    </ion-card-content>\n  \n  </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/car-detail/car-detail.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/car-detail/car-detail.module.ts ***!
      \*******************************************************/

    /*! exports provided: CarDetailPageModule */

    /***/
    function srcAppPagesCarDetailCarDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarDetailPageModule", function () {
        return CarDetailPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _car_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./car-detail.page */
      "./src/app/pages/car-detail/car-detail.page.ts");

      var routes = [{
        path: '',
        component: _car_detail_page__WEBPACK_IMPORTED_MODULE_7__["CarDetailPage"]
      }];

      var CarDetailPageModule = function CarDetailPageModule() {
        _classCallCheck(this, CarDetailPageModule);
      };

      CarDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_car_detail_page__WEBPACK_IMPORTED_MODULE_7__["CarDetailPage"]]
      })], CarDetailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/car-detail/car-detail.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/pages/car-detail/car-detail.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesCarDetailCarDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\nion-card {\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FyLWRldGFpbC9jYXItZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdGQUFBO0FBQUo7O0FBS0E7RUFDSSxnQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FyLWRldGFpbC9jYXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKVxuICB9XG59XG5cblxuaW9uLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/car-detail/car-detail.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/car-detail/car-detail.page.ts ***!
      \*****************************************************/

    /*! exports provided: CarDetailPage */

    /***/
    function srcAppPagesCarDetailCarDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarDetailPage", function () {
        return CarDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../providers */
      "./src/app/providers/index.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var CarDetailPage = /*#__PURE__*/function () {
        // carSegment: string = 'details';
        function CarDetailPage(navCtrl, toastCtrl, translate, cars, route, router) {
          _classCallCheck(this, CarDetailPage);

          this.navCtrl = navCtrl;
          this.toastCtrl = toastCtrl;
          this.translate = translate;
          this.cars = cars;
          this.route = route;
          this.router = router;
          this.carID = this.route.snapshot.paramMap.get('id');
        }

        _createClass(CarDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.carshop = this.cars.getItem(this.carID);
          }
        }, {
          key: "checkout",
          value: function checkout(carshopID, carID) {
            this.navCtrl.navigateForward("car-checkout/".concat(carshopID, "/").concat(carID));
          }
        }]);

        return CarDetailPage;
      }();

      CarDetailPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]
        }, {
          type: _providers__WEBPACK_IMPORTED_MODULE_3__["CarsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      CarDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./car-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/car-detail/car-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./car-detail.page.scss */
        "./src/app/pages/car-detail/car-detail.page.scss"))["default"]]
      })], CarDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-car-detail-car-detail-module-es5.js.map