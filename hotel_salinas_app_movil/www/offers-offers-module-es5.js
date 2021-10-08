function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlacesOffersOffersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"m1\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Offers</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/places/tabs/offers/new\">\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\n          <ion-spinner *ngIf=\"isLoading\"></ion-spinner>\n          <p text-center *ngIf=\"!isLoading && loadedPlaces.length <= 0\">No se han encontrado ofertas!</p>\n          <ion-list *ngIf=\"!isLoading && loadedPlaces.length > 0\">\n            <ion-item-sliding *ngFor=\"let place of loadedPlaces\" #slidingItem>\n              <ion-item [routerLink]=\"['/','places','tabs','offers',place.room_id]\"\n                detail>\n                <ion-thumbnail slot=\"start\">\n                  <ion-img [src]=\"place.path_image\"></ion-img>\n                </ion-thumbnail>\n                <ion-label>\n                  <h2>{{place.name}}</h2>\n                  <p>{{place.description}}</p>\n                </ion-label>\n              </ion-item>\n              <ion-item-options side=\"end\">\n                <ion-item-option color=\"secondary\" (click)=\"onEdit(place.room_id,slidingItem)\">\n                  <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n                </ion-item-option>\n              </ion-item-options>\n            </ion-item-sliding>\n          </ion-list>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/places/offers/offers-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/places/offers/offers-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: OffersPageRoutingModule */

  /***/
  function srcAppPlacesOffersOffersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersPageRoutingModule", function () {
      return OffersPageRoutingModule;
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


    var _offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./offers.page */
    "./src/app/places/offers/offers.page.ts");

    var routes = [{
      path: '',
      component: _offers_page__WEBPACK_IMPORTED_MODULE_3__["OffersPage"]
    }, {
      path: 'new-offer',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | new-offer-new-offer-module */
        "new-offer-new-offer-module").then(__webpack_require__.bind(null,
        /*! ./new-offer/new-offer.module */
        "./src/app/places/offers/new-offer/new-offer.module.ts")).then(function (m) {
          return m.NewOfferPageModule;
        });
      }
    }, {
      path: 'edit-offer',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | edit-offer-edit-offer-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./edit-offer/edit-offer.module */
        "./src/app/places/offers/edit-offer/edit-offer.module.ts")).then(function (m) {
          return m.EditOfferPageModule;
        });
      }
    }, {
      path: 'offer-bookings',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | offer-bookings-offer-bookings-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./offer-bookings/offer-bookings.module */
        "./src/app/places/offers/offer-bookings/offer-bookings.module.ts")).then(function (m) {
          return m.OfferBookingsPageModule;
        });
      }
    }];

    var OffersPageRoutingModule = function OffersPageRoutingModule() {
      _classCallCheck(this, OffersPageRoutingModule);
    };

    OffersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OffersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/places/offers/offers.module.ts":
  /*!************************************************!*\
    !*** ./src/app/places/offers/offers.module.ts ***!
    \************************************************/

  /*! exports provided: OffersPageModule */

  /***/
  function srcAppPlacesOffersOffersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersPageModule", function () {
      return OffersPageModule;
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


    var _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./offers-routing.module */
    "./src/app/places/offers/offers-routing.module.ts");
    /* harmony import */


    var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./offers.page */
    "./src/app/places/offers/offers.page.ts");

    var OffersPageModule = function OffersPageModule() {
      _classCallCheck(this, OffersPageModule);
    };

    OffersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["OffersPageRoutingModule"]],
      declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]]
    })], OffersPageModule);
    /***/
  },

  /***/
  "./src/app/places/offers/offers.page.scss":
  /*!************************************************!*\
    !*** ./src/app/places/offers/offers.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlacesOffersOffersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: url('background-main.jpg') 0 0/100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL29mZmVycy9DOlxcVXNlcnNcXGRhdmlkXFxEZXNrdG9wXFxDb2RpbmdcXEluZ1NvZnR3YXJlRVNQT0xcXGhvdGVsX3NhbGluYXNfYXBwX21vdmlsL3NyY1xcYXBwXFxwbGFjZXNcXG9mZmVyc1xcb2ZmZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGxhY2VzL29mZmVycy9vZmZlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkRBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvYmFja2dyb3VuZC1tYWluLmpwZycpIDAgMC8xMDAlIG5vLXJlcGVhdDtcclxuIH1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLW1haW4uanBnXCIpIDAgMC8xMDAlIG5vLXJlcGVhdDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/places/offers/offers.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/places/offers/offers.page.ts ***!
    \**********************************************/

  /*! exports provided: OffersPage */

  /***/
  function srcAppPlacesOffersOffersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersPage", function () {
      return OffersPage;
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


    var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../places.service */
    "./src/app/places/places.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var OffersPage = /*#__PURE__*/function () {
      function OffersPage(placesService, router) {
        _classCallCheck(this, OffersPage);

        this.placesService = placesService;
        this.router = router;
        this.isLoading = false;
      }

      _createClass(OffersPage, [{
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
        key: "onEdit",
        value: function onEdit(offerId, slidingItem) {
          slidingItem.close();
          this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
          console.log('Editing Item', offerId);
        }
      }]);

      return OffersPage;
    }();

    OffersPage.ctorParameters = function () {
      return [{
        type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    OffersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-offers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offers.page.scss */
      "./src/app/places/offers/offers.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], OffersPage);
    /***/
  }
}]);
//# sourceMappingURL=offers-offers-module-es5.js.map