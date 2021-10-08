(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-booking-list-booking-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booking-list/booking-list.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booking-list/booking-list.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesBookingListBookingListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.bookinglist.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-no-padding ion-margin-bottom\">\n        <ion-card *ngIf=\"!bookings.length\" class=\"ion-margin-top bg-white\">\n          <ion-card-content>\n            <p class=\"ion-text-center\">\n              <ion-text color=\"primary\">{{ 'app.pages.bookinglist.title.nores' | translate }}</ion-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n  \n        <ion-list class=\"ion-no-padding\" *ngIf=\"bookings.length\">\n\n          <ion-item tappable routerLink=\"/hotel-detail/{{booking.hotel.id}}\" *ngFor=\"let booking of bookings\">\n            <ion-thumbnail slot=\"start\">\n              <img [src]=\"booking.hotel.thumb\">\n            </ion-thumbnail>\n            <ion-label>\n              <h2>\n                <ion-text color=\"primary\">{{booking.hotel.name}}</ion-text>\n              </h2>\n              <p>{{booking.hotel.address}} ∙ {{booking.hotel.price | currency }}</p>\n              <ion-badge color=\"success\">{{ 'app.label.booked' | translate }}</ion-badge>\n            </ion-label>\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/booking-list/booking-list.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/booking-list/booking-list.module.ts ***!
      \***********************************************************/

    /*! exports provided: BookingListPageModule */

    /***/
    function srcAppPagesBookingListBookingListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingListPageModule", function () {
        return BookingListPageModule;
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


      var _booking_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./booking-list.page */
      "./src/app/pages/booking-list/booking-list.page.ts");

      var routes = [{
        path: '',
        component: _booking_list_page__WEBPACK_IMPORTED_MODULE_7__["BookingListPage"]
      }];

      var BookingListPageModule = function BookingListPageModule() {
        _classCallCheck(this, BookingListPageModule);
      };

      BookingListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_booking_list_page__WEBPACK_IMPORTED_MODULE_7__["BookingListPage"]]
      })], BookingListPageModule);
      /***/
    },

    /***/
    "./src/app/pages/booking-list/booking-list.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/pages/booking-list/booking-list.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesBookingListBookingListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va2luZy1saXN0L2Jvb2tpbmctbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3RkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm9va2luZy1saXN0L2Jvb2tpbmctbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSlcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/booking-list/booking-list.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/booking-list/booking-list.page.ts ***!
      \*********************************************************/

    /*! exports provided: BookingListPage */

    /***/
    function srcAppPagesBookingListBookingListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingListPage", function () {
        return BookingListPage;
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

      var BookingListPage = /*#__PURE__*/function () {
        function BookingListPage(navCtrl, translate, hotels) {
          _classCallCheck(this, BookingListPage);

          this.navCtrl = navCtrl;
          this.translate = translate;
          this.hotels = hotels;
          this.bookings = [];
        }

        _createClass(BookingListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getBookings();
          }
        }, {
          key: "getBookings",
          value: function getBookings() {
            var _this = this;

            this.hotels.getBookings().then(function (data) {
              _this.bookings = data;
            });
          }
        }]);

        return BookingListPage;
      }();

      BookingListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]
        }, {
          type: _providers__WEBPACK_IMPORTED_MODULE_3__["HotelProvider"]
        }];
      };

      BookingListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booking-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./booking-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booking-list/booking-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./booking-list.page.scss */
        "./src/app/pages/booking-list/booking-list.page.scss"))["default"]]
      })], BookingListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-booking-list-booking-list-module-es5.js.map