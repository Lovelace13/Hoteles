(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activity-detail-activity-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activity-detail/activity-detail.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activity-detail/activity-detail.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesActivityDetailActivityDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.activitydetail.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg-tertiary animated fadeIn\">\n  <ion-slides pager=\"true\">\n    <ion-slide *ngFor=\"let image of trip.images\">\n      <img [src]=\"image\">\n      <div class=\"shadow\"></div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-card class=\"ion-no-margin animated fadeIn\">\n    <ion-card-content class=\"bg-white\">\n      <h1>\n        <ion-text color=\"primary\">\n          <strong>{{trip.name}}</strong>\n        </ion-text>\n      </h1>\n      <h3>\n        <ion-text color=\"primary\">{{ trip.sub_name }}</ion-text>\n      </h3>\n      <hr>\n      <ion-badge slot=\"end\" color=\"tertiary\" class=\"ion-margin-right\">\n        <ion-icon name=\"time\"></ion-icon>\n        {{ trip.time }}\n      </ion-badge>\n      <ion-badge slot=\"end\" color=\"tertiary\" *ngIf=\"trip.free_cancellation === 1\">\n        <ion-icon name=\"checkbox-outline\"></ion-icon>\n        {{ 'app.label.freecancel' | translate }}\n      </ion-badge>\n      <ion-badge slot=\"end\" color=\"tertiary\" *ngIf=\"trip.electric_voucher === 1\">\n        <ion-icon name=\"list-circle\"></ion-icon>\n        {{ 'app.label.voucher' | translate }}\n      </ion-badge>\n    </ion-card-content>\n    <ion-list class=\"ion-no-padding\">\n      <ion-item color=\"primary\" *ngFor=\"let high of trip.highlights\">\n        <ion-icon slot=\"start\" name=\"checkmark\" color=\"success\"></ion-icon>\n        {{ high }}\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-card class=\"bg-white\">\n    <ion-card-content>\n      <ion-card-title>\n        <ion-text color=\"primary\"><strong>{{ 'app.label.description' | translate }}</strong></ion-text>\n      </ion-card-title>\n  \n      <p>\n        <ion-text color=\"primary\">\n          {{ trip.description }}\n        </ion-text>\n      </p>\n    </ion-card-content>\n    <ion-card-content>\n        <ion-card-title>\n          <ion-text color=\"primary\"><strong>{{ 'app.label.location' | translate }}</strong></ion-text>\n        </ion-card-title>\n    \n        <p>\n          <ion-text color=\"primary\">\n            {{ trip.location }}\n          </ion-text>\n        </p>\n      </ion-card-content>  \n  </ion-card>\n\n  <ion-card class=\"bg-white\">\n    <ion-card-content>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"adult\" size=\"6\">\n            <h2>\n              <ion-text color=\"primary\"><strong>{{ trip.price_adult | currency }}</strong> p/ Adult</ion-text>\n            </h2>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-text-center\">\n            <ion-icon name=\"remove-circle\" class=\"text20\" tappable (click)=\"minusAdult()\" [hidden]=\"adults < 2\" color=\"secondary\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-text-center\">\n            <h2><ion-text color=\"primary\"><strong>{{ adults }}</strong></ion-text></h2>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-text-center\">\n            <ion-icon name=\"add-circle\" class=\"text20\" tappable (click)=\"plusAdult()\" color=\"secondary\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            <h2>\n              <ion-text color=\"primary\"><strong>{{ trip.price_child | currency }}</strong> p/ Child (0-12 years)</ion-text>\n            </h2>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-text-center\">\n            <ion-icon name=\"remove-circle\" class=\"text20\" tappable (click)=\"minusChildren()\" [hidden]=\"children < 1\"\n                      color=\"secondary\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-text-center\">\n            <h2><ion-text color=\"primary\"><strong>{{ children }}</strong></ion-text></h2>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-text-center\">\n            <ion-icon name=\"add-circle\" class=\"text20\" tappable (click)=\"plusChildren()\" color=\"secondary\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-button shape=\"round\" size=\"full\" color=\"success\" tappable (click)=\"checkout(trip.id)\">{{'app.button.booknow' | translate }} {{ adults * trip.price_adult +\n        children * trip.price_child | currency }}\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/activity-detail/activity-detail.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/activity-detail/activity-detail.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ActivityDetailPageModule */

    /***/
    function srcAppPagesActivityDetailActivityDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityDetailPageModule", function () {
        return ActivityDetailPageModule;
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


      var _activity_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./activity-detail.page */
      "./src/app/pages/activity-detail/activity-detail.page.ts");

      var routes = [{
        path: '',
        component: _activity_detail_page__WEBPACK_IMPORTED_MODULE_7__["ActivityDetailPage"]
      }];

      var ActivityDetailPageModule = function ActivityDetailPageModule() {
        _classCallCheck(this, ActivityDetailPageModule);
      };

      ActivityDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_activity_detail_page__WEBPACK_IMPORTED_MODULE_7__["ActivityDetailPage"]]
      })], ActivityDetailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/activity-detail/activity-detail.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/activity-detail/activity-detail.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesActivityDetailActivityDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\nion-card {\n  border-radius: 0;\n}\n\nion-card ion-badge {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWN0aXZpdHktZGV0YWlsL2FjdGl2aXR5LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3RkFBQTtBQUFKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFFSTtFQUNJLGtCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY3Rpdml0eS1kZXRhaWwvYWN0aXZpdHktZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKVxuICB9XG59XG5cbmlvbi1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGlvbi1iYWRnZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/activity-detail/activity-detail.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/activity-detail/activity-detail.page.ts ***!
      \***************************************************************/

    /*! exports provided: ActivityDetailPage */

    /***/
    function srcAppPagesActivityDetailActivityDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityDetailPage", function () {
        return ActivityDetailPage;
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

      var ActivityDetailPage = /*#__PURE__*/function () {
        function ActivityDetailPage(navCtrl, toastCtrl, translate, trips, route, router) {
          _classCallCheck(this, ActivityDetailPage);

          this.navCtrl = navCtrl;
          this.toastCtrl = toastCtrl;
          this.translate = translate;
          this.trips = trips;
          this.route = route;
          this.router = router;
          this.tripID = this.route.snapshot.paramMap.get('id');
          this.adults = 1;
          this.children = 0;
        }

        _createClass(ActivityDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.trip = this.trips.getItem(this.tripID);
          } // minus adult when click minus button

        }, {
          key: "minusAdult",
          value: function minusAdult() {
            this.adults--;
          }
        }, {
          key: "plusAdult",
          value: function plusAdult() {
            this.adults++;
          }
        }, {
          key: "minusChildren",
          value: function minusChildren() {
            this.children--;
          }
        }, {
          key: "plusChildren",
          value: function plusChildren() {
            this.children++;
          }
        }, {
          key: "checkout",
          value: function checkout(tripID) {
            this.navCtrl.navigateForward("activity-checkout/".concat(tripID)); // this.router.navigate(['../../activity-checkout', { tripID: tripID }], { relativeTo: this.route });
          }
        }]);

        return ActivityDetailPage;
      }();

      ActivityDetailPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]
        }, {
          type: _providers__WEBPACK_IMPORTED_MODULE_3__["ActivitiesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ActivityDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./activity-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activity-detail/activity-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./activity-detail.page.scss */
        "./src/app/pages/activity-detail/activity-detail.page.scss"))["default"]]
      })], ActivityDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-activity-detail-activity-detail-module-es5.js.map