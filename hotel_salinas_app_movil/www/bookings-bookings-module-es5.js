function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookings-bookings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookingsBookingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>bookings</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/user\">atras</ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\n          <ion-spinner *ngIf=\"isLoading\"></ion-spinner>\n          <p text-center *ngIf=\"!isLoading && loadedPlaces.length <= 0\">No se han encontrado ofertas!</p>\n          <ion-list *ngIf=\"!isLoading && loadedPlaces.length > 0\">\n            <ion-item-sliding *ngFor=\"let place of loadedPlaces\" #slidingItem>\n              <ion-item  detail>\n                <ion-thumbnail slot=\"start\">\n                  <ion-img [src]=\"place.path_image\"></ion-img>\n                </ion-thumbnail>\n                <ion-label>\n                  <h2>{{place.name}}</h2>\n                  <p>Oct9-Oct10 . US$52.65</p>\n                </ion-label>\n              </ion-item>\n              <ion-item-options side=\"end\">\n                <ion-item-option color=\"secondary\">\n                  <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n              </ion-item-options>\n            </ion-item-sliding>\n          </ion-list>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/bookings/bookings-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/bookings/bookings-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: BookingsPageRoutingModule */

  /***/
  function srcAppBookingsBookingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsPageRoutingModule", function () {
      return BookingsPageRoutingModule;
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


    var _bookings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bookings.page */
    "./src/app/bookings/bookings.page.ts");

    var routes = [{
      path: '',
      component: _bookings_page__WEBPACK_IMPORTED_MODULE_3__["BookingsPage"]
    }];

    var BookingsPageRoutingModule = function BookingsPageRoutingModule() {
      _classCallCheck(this, BookingsPageRoutingModule);
    };

    BookingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookingsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/bookings/bookings.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/bookings/bookings.module.ts ***!
    \*********************************************/

  /*! exports provided: BookingsPageModule */

  /***/
  function srcAppBookingsBookingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function () {
      return BookingsPageModule;
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


    var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bookings-routing.module */
    "./src/app/bookings/bookings-routing.module.ts");
    /* harmony import */


    var _bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bookings.page */
    "./src/app/bookings/bookings.page.ts");

    var BookingsPageModule = function BookingsPageModule() {
      _classCallCheck(this, BookingsPageModule);
    };

    BookingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingsPageRoutingModule"]],
      declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"]]
    })], BookingsPageModule);
    /***/
  },

  /***/
  "./src/app/bookings/bookings.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/bookings/bookings.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookingsBookingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2Jvb2tpbmdzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/bookings/bookings.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/bookings/bookings.page.ts ***!
    \*******************************************/

  /*! exports provided: BookingsPage */

  /***/
  function srcAppBookingsBookingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsPage", function () {
      return BookingsPage;
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


    var _bookings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bookings.service */
    "./src/app/bookings/bookings.service.ts");
    /* harmony import */


    var _places_places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../places/places.service */
    "./src/app/places/places.service.ts");

    var BookingsPage = /*#__PURE__*/function () {
      function BookingsPage(placesService, bookingService) {
        _classCallCheck(this, BookingsPage);

        this.placesService = placesService;
        this.bookingService = bookingService;
        this.isLoading = false;
      }

      _createClass(BookingsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.roomsSub = this.placesService.places.subscribe(function (places) {
            _this.loadedPlaces = places;
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.isLoading = true;
          this.placesService.fetchPlaces().subscribe(function () {
            _this2.isLoading = false;
          });
        }
      }, {
        key: "onCancelBooking",
        value: function onCancelBooking(offerId, slidingEl) {
          slidingEl.close();
        }
      }]);

      return BookingsPage;
    }();

    BookingsPage.ctorParameters = function () {
      return [{
        type: _places_places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"]
      }, {
        type: _bookings_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"]
      }];
    };

    BookingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookings.page.scss */
      "./src/app/bookings/bookings.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"], _bookings_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"]])], BookingsPage);
    /***/
  },

  /***/
  "./src/app/bookings/bookings.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/bookings/bookings.service.ts ***!
    \**********************************************/

  /*! exports provided: BookingService */

  /***/
  function srcAppBookingsBookingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingService", function () {
      return BookingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BookingService = /*#__PURE__*/function () {
      function BookingService() {
        _classCallCheck(this, BookingService);

        this._bookings = [{
          id: 'xyz',
          placeId: 'p1',
          placeTitle: 'Manhattan Mansion',
          guestNumber: 2,
          userId: 'abc'
        }];
      }

      _createClass(BookingService, [{
        key: "bookings",
        get: function get() {
          return _toConsumableArray(this._bookings);
        }
      }]);

      return BookingService;
    }();

    BookingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BookingService);
    /***/
  }
}]);
//# sourceMappingURL=bookings-bookings-module-es5.js.map