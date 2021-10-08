(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"menu-content\">\n\n    <ion-menu contentId=\"menu-content\">\n\n      <ion-header>\n        <ion-toolbar color=\"dark\" class=\"user-profile\">\n\n          <ion-item class=\"ion-margin-bottom\">\n            <ion-avatar slot=\"start\" class=\"user-avatar\">\n              <img src=\"assets/img/avatar.jpg\">\n            </ion-avatar>\n            <ion-label>\n              <ion-text color=\"tertiary\">\n                <h1><strong>Carlos Cunalata</strong></h1>\n              </ion-text>\n              <ion-text color=\"tertiary\">\n                <h3>\n                  davidchang09@hotmail.com\n                </h3>\n              </ion-text>\n              <ion-menu-toggle class=\"mto\" auto-hide=\"false\">\n                <a class=\"text08\" tappable (click)=\"goToEditProgile()\">\n                  <ion-text color=\"tertiary\">\n                    <ion-icon name=\"person\"></ion-icon>\n                    <strong>{{ 'app.pages.menu.editprofile' | translate }}</strong>\n                  </ion-text>\n                </a> <ion-text color=\"secondary\"> | </ion-text> \n                <a class=\"text08\" tappable (click)=\"logout()\">\n                  <ion-text color=\"tertiary\">\n                    <ion-icon name=\"log-out\"></ion-icon>\n                    <strong>{{ 'app.pages.menu.logout' | translate }}</strong>\n                  </ion-text>\n                </a>\n              </ion-menu-toggle>\n            </ion-label>\n          </ion-item>\n\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content class=\"bg-profile\">\n        <ion-list>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n            <ion-item [routerLink]=\"[p.url]\" color=\"primary\">\n              <ion-icon slot=\"start\" [name]=\"p.icon\" color=\"light\"></ion-icon>\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n\n    </ion-menu>\n    <ion-router-outlet id=\"menu-content\"></ion-router-outlet>\n\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/image/image.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/image/image.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesModalImageImagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button size=\"small\" shape=\"round\" (click)=\"closeModal()\" color=\"tertiary\">\n        <ion-icon slot=\"start\" name=\"close\"></ion-icon> Close\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img [src]=\"value\">\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/location/location.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/location/location.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesModalLocationLocationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Get Location</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button size=\"small\" shape=\"round\" (click)=\"closeModal()\" color=\"tertiary\">\n          <ion-icon slot=\"start\" name=\"close\"></ion-icon> Close\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"primary\">\n      <ion-searchbar type=\"text\" placeholder=\"Find location\" animated=\"true\" (ionInput)=\"setFilteredItems($event)\"></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"animated fadeIn\">\n  <!--recent places-->\n  <ion-item color=\"secondary\" *ngFor=\"let item of places.recent\" tappable (click)=\"searchBy(item)\">\n    <ion-icon name=\"time\" slot=\"start\" color=\"primary\"></ion-icon>\n    <ion-text color=\"light\"><strong>{{ item.name }}</strong></ion-text>\n  </ion-item>\n  <!--nearby places-->\n  <ion-item *ngFor=\"let item of results\" tappable (click)=\"searchBy(item)\">\n    <ion-icon name=\"locate\" slot=\"start\" color=\"primary\"></ion-icon>\n    <ion-text color=\"primary\">{{ item.name }}</ion-text>\n  </ion-item>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-walkthrough-walkthrough-module */
          "pages-walkthrough-walkthrough-module").then(__webpack_require__.bind(null,
          /*! ./pages/walkthrough/walkthrough.module */
          "./src/app/pages/walkthrough/walkthrough.module.ts")).then(function (m) {
            return m.WalkthroughPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-home-home-module */
          "pages-home-home-module").then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "./src/app/pages/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-register-register-module */
          "pages-register-register-module").then(__webpack_require__.bind(null,
          /*! ./pages/register/register.module */
          "./src/app/pages/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'edit-profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-edit-profile-edit-profile-module */
          "pages-edit-profile-edit-profile-module").then(__webpack_require__.bind(null,
          /*! ./pages/edit-profile/edit-profile.module */
          "./src/app/pages/edit-profile/edit-profile.module.ts")).then(function (m) {
            return m.EditProfilePageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-settings-settings-module */
          "pages-settings-settings-module").then(__webpack_require__.bind(null,
          /*! ./pages/settings/settings.module */
          "./src/app/pages/settings/settings.module.ts")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'hotel-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-hotel-list-hotel-list-module */
          "pages-hotel-list-hotel-list-module").then(__webpack_require__.bind(null,
          /*! ./pages/hotel-list/hotel-list.module */
          "./src/app/pages/hotel-list/hotel-list.module.ts")).then(function (m) {
            return m.HotelListPageModule;
          });
        }
      }, {
        path: 'hotel-detail/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-hotel-detail-hotel-detail-module */
          "pages-hotel-detail-hotel-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/hotel-detail/hotel-detail.module */
          "./src/app/pages/hotel-detail/hotel-detail.module.ts")).then(function (m) {
            return m.HotelDetailPageModule;
          });
        }
      }, {
        path: 'hotel-checkout/:hotelID/:roomID',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-hotel-checkout-hotel-checkout-module */
          "pages-hotel-checkout-hotel-checkout-module").then(__webpack_require__.bind(null,
          /*! ./pages/hotel-checkout/hotel-checkout.module */
          "./src/app/pages/hotel-checkout/hotel-checkout.module.ts")).then(function (m) {
            return m.HotelCheckoutPageModule;
          });
        }
      }, {
        path: 'booking-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-booking-list-booking-list-module */
          "pages-booking-list-booking-list-module").then(__webpack_require__.bind(null,
          /*! ./pages/booking-list/booking-list.module */
          "./src/app/pages/booking-list/booking-list.module.ts")).then(function (m) {
            return m.BookingListPageModule;
          });
        }
      }, {
        path: 'favorites',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-favorites-favorites-module */
          "pages-favorites-favorites-module").then(__webpack_require__.bind(null,
          /*! ./pages/favorites/favorites.module */
          "./src/app/pages/favorites/favorites.module.ts")).then(function (m) {
            return m.FavoritesPageModule;
          });
        }
      }, {
        path: 'local-weather',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-local-weather-local-weather-module */
          "pages-local-weather-local-weather-module").then(__webpack_require__.bind(null,
          /*! ./pages/local-weather/local-weather.module */
          "./src/app/pages/local-weather/local-weather.module.ts")).then(function (m) {
            return m.LocalWeatherPageModule;
          });
        }
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-about-about-module */
          "pages-about-about-module").then(__webpack_require__.bind(null,
          /*! ./pages/about/about.module */
          "./src/app/pages/about/about.module.ts")).then(function (m) {
            return m.AboutPageModule;
          });
        }
      }, {
        path: 'support',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-support-support-module */
          "pages-support-support-module").then(__webpack_require__.bind(null,
          /*! ./pages/support/support.module */
          "./src/app/pages/support/support.module.ts")).then(function (m) {
            return m.SupportPageModule;
          });
        }
      }, {
        path: 'messages',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-messages-messages-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-messages-messages-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/messages/messages.module */
          "./src/app/pages/messages/messages.module.ts")).then(function (m) {
            return m.MessagesPageModule;
          });
        }
      }, {
        path: 'message/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-message-message-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-message-message-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/message/message.module */
          "./src/app/pages/message/message.module.ts")).then(function (m) {
            return m.MessagePageModule;
          });
        }
      }, {
        path: 'rentcar',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-rentcar-rentcar-module */
          "pages-rentcar-rentcar-module").then(__webpack_require__.bind(null,
          /*! ./pages/rentcar/rentcar.module */
          "./src/app/pages/rentcar/rentcar.module.ts")).then(function (m) {
            return m.RentcarPageModule;
          });
        }
      }, {
        path: 'cars-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-cars-list-cars-list-module */
          "pages-cars-list-cars-list-module").then(__webpack_require__.bind(null,
          /*! ./pages/cars-list/cars-list.module */
          "./src/app/pages/cars-list/cars-list.module.ts")).then(function (m) {
            return m.CarsListPageModule;
          });
        }
      }, {
        path: 'car-detail/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-car-detail-car-detail-module */
          "pages-car-detail-car-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/car-detail/car-detail.module */
          "./src/app/pages/car-detail/car-detail.module.ts")).then(function (m) {
            return m.CarDetailPageModule;
          });
        }
      }, {
        path: 'car-checkout/:carshopID/:carID',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-car-checkout-car-checkout-module */
          "pages-car-checkout-car-checkout-module").then(__webpack_require__.bind(null,
          /*! ./pages/car-checkout/car-checkout.module */
          "./src/app/pages/car-checkout/car-checkout.module.ts")).then(function (m) {
            return m.CarCheckoutPageModule;
          });
        }
      }, {
        path: 'location',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/modal/location/location.module */
          "./src/app/pages/modal/location/location.module.ts")).then(function (m) {
            return m.LocationPageModule;
          });
        }
      }, {
        path: 'activities',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-activities-activities-module */
          "pages-activities-activities-module").then(__webpack_require__.bind(null,
          /*! ./pages/activities/activities.module */
          "./src/app/pages/activities/activities.module.ts")).then(function (m) {
            return m.ActivitiesPageModule;
          });
        }
      }, {
        path: 'activity-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-activity-list-activity-list-module */
          "pages-activity-list-activity-list-module").then(__webpack_require__.bind(null,
          /*! ./pages/activity-list/activity-list.module */
          "./src/app/pages/activity-list/activity-list.module.ts")).then(function (m) {
            return m.ActivityListPageModule;
          });
        }
      }, {
        path: 'activity-detail/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-activity-detail-activity-detail-module */
          "pages-activity-detail-activity-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/activity-detail/activity-detail.module */
          "./src/app/pages/activity-detail/activity-detail.module.ts")).then(function (m) {
            return m.ActivityDetailPageModule;
          });
        }
      }, {
        path: 'activity-checkout/:tripID',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-activity-checkout-activity-checkout-module */
          "pages-activity-checkout-activity-checkout-module").then(__webpack_require__.bind(null,
          /*! ./pages/activity-checkout/activity-checkout.module */
          "./src/app/pages/activity-checkout/activity-checkout.module.ts")).then(function (m) {
            return m.ActivityCheckoutPageModule;
          });
        }
      }, {
        path: '**',
        redirectTo: '/login'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary));\n}\n:host ion-list.list-md {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0ZBQUE7QUFBUjtBQUlRO0VBQ0ksVUFBQTtBQUZaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSk7XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICAmLmxpc3QtbWQge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _providers_translate_translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./providers/translate/translate.service */
      "./src/app/providers/translate/translate.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"],
          SplashScreen = _capacitor_core__WEBP.SplashScreen,
          StatusBar = _capacitor_core__WEBP.StatusBar;
      /**
       * Main Wrap App Component with starting methods
       *
       * @export
       * @class AppComponent
       */

      var AppComponent = /*#__PURE__*/function () {
        /**
         * Creates an instance of AppComponent.
         * @param {Platform} platform
         * @param {SplashScreen} splashScreen
         * @param {StatusBar} statusBar
         * @param {TranslateProvider} translate
         * @param {TranslateService} translateService
         * @param {NavController} navCtrl
         * @memberof AppComponent
         */
        function AppComponent(platform, translate, translateService, navCtrl) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.translate = translate;
          this.translateService = translateService;
          this.navCtrl = navCtrl;
          this.appPages = [{
            title: 'Home',
            url: '/home',
            direct: 'root',
            icon: 'home'
          }, {
            title: 'Booking List',
            url: '/booking-list',
            direct: 'forward',
            icon: 'book'
          },
          /*
          {
            title: 'Favorites',
            url: '/favorites',
            direct: 'forward',
            icon: 'heart'
          },
          */
          {
            title: 'Rent a Car',
            url: '/rentcar',
            direct: 'forward',
            icon: 'car'
          }, {
            title: 'Trip Activities',
            url: '/activities',
            direct: 'forward',
            icon: 'beer'
          },
          /*
          {
            title: 'Local Weather',
            url: '/local-weather',
            direct: 'forward',
            icon: 'partly-sunny'
          },
          */
          {
            title: 'About',
            url: '/about',
            direct: 'forward',
            icon: 'information-circle-outline'
          }, {
            title: 'Support',
            url: '/support',
            direct: 'forward',
            icon: 'help-buoy'
          }, {
            title: 'Settings',
            url: '/settings',
            direct: 'forward',
            icon: 'settings'
          }];
          this.initializeApp();
        }
        /**
         * Method that starts all Cordova and Factories
         *
         * @memberof AppComponent
         */


        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              SplashScreen.show({
                showDuration: 5000,
                autoHide: true
              }, function () {
                StatusBar.show();
              });

              _this.translateService.setDefaultLang(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].language);

              _this.translateService.use(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].language);

              _this.translateService.getTranslation(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].language).subscribe(function (translations) {
                _this.translate.setTranslations(translations);
              });
            })["catch"](function () {
              _this.translateService.setDefaultLang(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].language);

              _this.translateService.use(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].language);

              _this.translateService.getTranslation(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].language).subscribe(function (translations) {
                _this.translate.setTranslations(translations);
              });
            });
          }
          /**
           * Navigate to Edit Profile Page
           *
           * @memberof AppComponent
           */

        }, {
          key: "goToEditProgile",
          value: function goToEditProgile() {
            this.navCtrl.navigateForward('edit-profile');
          }
          /**
           * Logout Method
           *
           * @memberof AppComponent
           */

        }, {
          key: "logout",
          value: function logout() {
            this.navCtrl.navigateRoot('login');
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _providers_translate_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateProvider"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: HttpLoaderFactory, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/service-worker */
      "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _providers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./providers */
      "./src/app/providers/index.ts");
      /* harmony import */


      var _pages_modal_image_image_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pages/modal/image/image.module */
      "./src/app/pages/modal/image/image.module.ts");
      /* harmony import */


      var _pages_modal_location_location_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/modal/location/location.module */
      "./src/app/pages/modal/location/location.module.ts"); // Modal Pages


      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].config), _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _pages_modal_image_image_module__WEBPACK_IMPORTED_MODULE_16__["ImagePageModule"], _pages_modal_location_location_module__WEBPACK_IMPORTED_MODULE_17__["LocationPageModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot({
          name: '__ionbooking2',
          driverOrder: ['indexeddb', 'sqlite', 'websql']
        }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
          }
        }), _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyBnTnX1cVqp8AbMAL6TNL50WV8pKPI6t7Q'
        }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production
        })],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"]
        }, _providers__WEBPACK_IMPORTED_MODULE_15__["TranslateProvider"], _providers__WEBPACK_IMPORTED_MODULE_15__["HotelProvider"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/pages/modal/image/image.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/modal/image/image.module.ts ***!
      \***************************************************/

    /*! exports provided: ImagePageModule */

    /***/
    function srcAppPagesModalImageImageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagePageModule", function () {
        return ImagePageModule;
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


      var _image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./image.page */
      "./src/app/pages/modal/image/image.page.ts");

      var routes = [{
        path: '',
        component: _image_page__WEBPACK_IMPORTED_MODULE_6__["ImagePage"]
      }];

      var ImagePageModule = function ImagePageModule() {
        _classCallCheck(this, ImagePageModule);
      };

      ImagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_image_page__WEBPACK_IMPORTED_MODULE_6__["ImagePage"]],
        entryComponents: [_image_page__WEBPACK_IMPORTED_MODULE_6__["ImagePage"]]
      })], ImagePageModule);
      /***/
    },

    /***/
    "./src/app/pages/modal/image/image.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/modal/image/image.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesModalImageImagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\nion-content img {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9kYWwvaW1hZ2UvaW1hZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usd0ZBQUE7QUFBSjs7QUFLSTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7QUFGUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsL2ltYWdlL2ltYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKVxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBpbWcge1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/modal/image/image.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/modal/image/image.page.ts ***!
      \*************************************************/

    /*! exports provided: ImagePage */

    /***/
    function srcAppPagesModalImageImagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagePage", function () {
        return ImagePage;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      var ImagePage = /*#__PURE__*/function () {
        function ImagePage(nav, modalCtrl, sanitizer) {
          _classCallCheck(this, ImagePage);

          this.nav = nav;
          this.modalCtrl = modalCtrl;
          this.sanitizer = sanitizer;
        }

        _createClass(ImagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.image = this.sanitizer.bypassSecurityTrustStyle(this.value);
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }]);

        return ImagePage;
      }();

      ImagePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }];
      };

      ImagePage.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ImagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./image.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/image/image.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./image.page.scss */
        "./src/app/pages/modal/image/image.page.scss"))["default"]]
      })], ImagePage);
      /***/
    },

    /***/
    "./src/app/pages/modal/location/location.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/modal/location/location.module.ts ***!
      \*********************************************************/

    /*! exports provided: LocationPageModule */

    /***/
    function srcAppPagesModalLocationLocationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPageModule", function () {
        return LocationPageModule;
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


      var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./location.page */
      "./src/app/pages/modal/location/location.page.ts");

      var routes = [{
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]
      }];

      var LocationPageModule = function LocationPageModule() {
        _classCallCheck(this, LocationPageModule);
      };

      LocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
      })], LocationPageModule);
      /***/
    },

    /***/
    "./src/app/pages/modal/location/location.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/modal/location/location.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesModalLocationLocationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9kYWwvbG9jYXRpb24vbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usd0ZBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsL2xvY2F0aW9uL2xvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/modal/location/location.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/modal/location/location.page.ts ***!
      \*******************************************************/

    /*! exports provided: LocationPage */

    /***/
    function srcAppPagesModalLocationLocationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPage", function () {
        return LocationPage;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var LocationPage = /*#__PURE__*/function () {
        function LocationPage(navCtrl, modalCtrl, storage) {
          _classCallCheck(this, LocationPage);

          this.navCtrl = navCtrl;
          this.modalCtrl = modalCtrl;
          this.storage = storage; // places

          this.places = {
            nearby: [{
              id: 1,
              name: "Current Location"
            }, {
              id: 2,
              name: "Galapagos Islands, Petrel, Puerto Ayora"
            }, {
              id: 3,
              name: "El Garrapatero, Galápagos"
            }, {
              id: 4,
              name: "New York, United States"
            }, {
              id: 5,
              name: "London, United Kingdom"
            }, {
              id: 6,
              name: "Same as pickup"
            }],
            recent: [{
              id: 1,
              name: "Galapagos Islands, Petrel, Puerto Ayora"
            }]
          };
          this.searchterm = '';
        }

        _createClass(LocationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.fromto);
            this.results = this.places.nearby;
            console.log(this.results);
          }
        }, {
          key: "setFilteredItems",
          value: function setFilteredItems(ev) {
            var val = ev ? ev.target.value : ''; // if the value is an empty string don't filter the items

            if (val && val.trim() !== '') {
              // this.showItems = true;
              this.results = this.places.nearby.filter(function (item) {
                return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
              });
            } else {
              this.results = this.places.nearby;
            } // return this.places.nearby.filter((item) => {
            //   return item.name.includes(term);
            // });  

          }
        }, {
          key: "searchBy",
          value: function searchBy(item) {
            if (this.fromto === 'from') {
              this.storage.set('pickup', item.name);
              this.search.pickup = item.name;
            }

            if (this.fromto === 'to') {
              this.storage.set('dropOff', item.name);
              this.search.dropOff = item.name;
            }

            this.modalCtrl.dismiss();
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }]);

        return LocationPage;
      }();

      LocationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }];
      };

      LocationPage.propDecorators = {
        fromto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      LocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./location.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/location/location.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./location.page.scss */
        "./src/app/pages/modal/location/location.page.scss"))["default"]]
      })], LocationPage);
      /***/
    },

    /***/
    "./src/app/providers/activities/activities.service.ts":
    /*!************************************************************!*\
      !*** ./src/app/providers/activities/activities.service.ts ***!
      \************************************************************/

    /*! exports provided: ActivitiesService */

    /***/
    function srcAppProvidersActivitiesActivitiesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivitiesService", function () {
        return ActivitiesService;
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


      var _mock_activities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mock-activities */
      "./src/app/providers/activities/mock-activities.ts");

      var ActivitiesService = /*#__PURE__*/function () {
        function ActivitiesService() {
          _classCallCheck(this, ActivitiesService);

          this.activities = _mock_activities__WEBPACK_IMPORTED_MODULE_2__["activities"];
        }

        _createClass(ActivitiesService, [{
          key: "getAll",
          value: function getAll() {
            return this.activities;
          }
        }, {
          key: "getItem",
          value: function getItem(id) {
            for (var i = 0; i < this.activities.length; i++) {
              if (this.activities[i].id === parseInt(id)) {
                return this.activities[i];
              }
            }

            return null;
          }
        }, {
          key: "remove",
          value: function remove(item) {
            this.activities.splice(this.activities.indexOf(item), 1);
          }
        }]);

        return ActivitiesService;
      }();

      ActivitiesService.ctorParameters = function () {
        return [];
      };

      ActivitiesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ActivitiesService);
      /***/
    },

    /***/
    "./src/app/providers/activities/mock-activities.ts":
    /*!*********************************************************!*\
      !*** ./src/app/providers/activities/mock-activities.ts ***!
      \*********************************************************/

    /*! exports provided: activities */

    /***/
    function srcAppProvidersActivitiesMockActivitiesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "activities", function () {
        return activities;
      });

      var activities = [{
        id: 1,
        name: "Tour de Bahía en la Isla de Santa Cruz",
        price_adult: 65,
        price_child: 65,
        time: "3h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English/Spanish Commentary Tour",
        thumb: "assets/img/trip/thumb/trip1/trip_1.jpg",
        description: "Nuestro bote llegará al pequeño islote llamado La Lobería, llamado así por la gran colonia de lobos marinos, también visitaremos Punta Estrada, el canal de tiburones y la playa del perro\nHaremos snorkel en este tour.",
        location: "Galapagos Islands, Petrel, Puerto Ayora",
        images: ["assets/img/trip/thumb/trip1/trip_1.jpg", "assets/img/trip/thumb/trip1/trip_2.jpg", "assets/img/trip/thumb/trip1/trip_3.jpg", "assets/img/trip/thumb/trip1/trip_4.jpg"],
        highlights: ["Actividades acuáticas (incluida)", "Observación fauna y flora (incluida)", "Visitas guiadas (incluida)"]
      }, {
        id: 2,
        name: "Excursión y Avistamiento de Animales Nativos Isla Isabela",
        price_adult: 187,
        price_child: 187,
        time: "12h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English/Spanish Commentary Tour",
        thumb: "assets/img/trip/thumb/trip2/trip_1.jpg",
        description: "Esta aventura comienza en Puerto Ayora. Recorra la isla de Isabela en esta excursión de 8 horas y experimente algunos de los puntos de interés más populares que esta isla tiene para ofrecer.Vamos a ver animales nativos como tortugas terrestres, flamencos. y zarapitos, junto con mucha flora y fauna.",
        location: "Galapagos Islands, Petrel, Puerto Ayora",
        images: ["assets/img/trip/thumb/trip2/trip_1.jpg", "assets/img/trip/thumb/trip2/trip_2.jpg", "assets/img/trip/thumb/trip2/trip_3.jpg", "assets/img/trip/thumb/trip2/trip_4.jpg"],
        highlights: ["Guía profesional", "Almuerzo", "Uso de equipo de snorkel (mascarilla y aletas)", "Recogida en el hotel (dentro del perímetro urbano de Puerto Ayora )", "Transporte"]
      }, {
        id: 3,
        name: "Full Day: Snorkeling en Santa Fe y Playa Escondida",
        price_adult: 205,
        price_child: 205,
        time: "24h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English/Spanish Commentary Tour",
        thumb: "assets/img/trip/thumb/trip3/trip_1.jpg",
        description: "En esta excursión, disfrutará de un recorrido de pesca experimental por Santa Fe, aprenderá sobre su vida salvaje y disfrutará de la naturaleza, también tendrá la oportunidad de detenerse en dos lugares de snorkel para practicar esta actividad.",
        location: "Galapagos Islands, Petrel, Puerto Ayora",
        images: ["assets/img/trip/thumb/trip3/trip_1.jpg", "assets/img/trip/thumb/trip3/trip_2.jpg", "assets/img/trip/thumb/trip3/trip_3.jpg", "assets/img/trip/thumb/trip3/trip_4.jpg"],
        highlights: ["Guía profesional", "Almuerzo", "Uso de equipo de snorkel (mascarilla y aletas)", "Recogida en el hotel (dentro del perímetro urbano de Puerto Ayora)", "Transporte"]
      }, {
        id: 4,
        name: "Actividades en la Playa el Garrapatero",
        price_adult: 200,
        price_child: 200,
        time: "72h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English/Spanish Commentary Tour",
        thumb: "assets/img/trip/thumb/trip4/trip_1.jpg",
        description: "La Playa de El Garrapatero está a 30 minutos en carro desde Puerto Ayora y es una playa perfecta para una mañana o tarde de relax con su familia, pareja o amigos.",
        location: "El Garrapatero, Galápagos",
        images: ["assets/img/trip/thumb/trip4/trip_1.jpg", "assets/img/trip/thumb/trip4/trip_2.jpg", "assets/img/trip/thumb/trip4/trip_3.jpg", "assets/img/trip/thumb/trip4/trip_4.jpg"],
        highlights: ["Transporte desde el Hotel ", "Guía Certificado del Parque Nacional Galápagos en Inglés o Español", "Uso de equipo de snorkel (mascarilla y aletas)", "Recogida en el hotel (dentro del perímetro urbano de Puerto Ayora)", "Transporte"]
      }];
      /***/
    },

    /***/
    "./src/app/providers/cars/cars.service.ts":
    /*!************************************************!*\
      !*** ./src/app/providers/cars/cars.service.ts ***!
      \************************************************/

    /*! exports provided: CarsService */

    /***/
    function srcAppProvidersCarsCarsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarsService", function () {
        return CarsService;
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


      var _mock_cars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mock-cars */
      "./src/app/providers/cars/mock-cars.ts");

      var CarsService = /*#__PURE__*/function () {
        function CarsService() {
          _classCallCheck(this, CarsService);

          this.cars = _mock_cars__WEBPACK_IMPORTED_MODULE_2__["CARS"];
        }

        _createClass(CarsService, [{
          key: "getAll",
          value: function getAll() {
            return this.cars;
          }
        }, {
          key: "getItem",
          value: function getItem(id) {
            for (var i = 0; i < this.cars.length; i++) {
              if (this.cars[i].id === parseInt(id)) {
                return this.cars[i];
              }
            }

            return null;
          }
        }, {
          key: "getCar",
          value: function getCar(carshopID, carID) {
            var carshop = this.getItem(carshopID);

            for (var i = 0; i < carshop.cars.length; i++) {
              if (carshop.cars[i].id === parseInt(carID)) {
                return carshop.cars[i];
              }
            }

            return null;
          }
        }, {
          key: "remove",
          value: function remove(item) {
            this.cars.splice(this.cars.indexOf(item), 1);
          }
        }]);

        return CarsService;
      }();

      CarsService.ctorParameters = function () {
        return [];
      };

      CarsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CarsService);
      /***/
    },

    /***/
    "./src/app/providers/cars/mock-cars.ts":
    /*!*********************************************!*\
      !*** ./src/app/providers/cars/mock-cars.ts ***!
      \*********************************************/

    /*! exports provided: CARS */

    /***/
    function srcAppProvidersCarsMockCarsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CARS", function () {
        return CARS;
      });

      var CARS = [{
        id: 1,
        name: "Localize Autos",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_1.jpg",
        price: 100,
        cars: [{
          id: 1,
          name: "Ford Focus B2017",
          thumb: "assets/img/car/thumb/car_1.jpg",
          price: 100,
          doors: 2,
          passengers: 4,
          automatic_transmission: 0,
          free_miles: 150,
          address: "Copacabana Avenue, 3250 - Rio de Janeiro",
          location: {
            lat: -22.906847,
            lon: -43.172896
          }
        }, {
          id: 2,
          name: "Volkswagen Jetta Tbi",
          thumb: "assets/img/car/thumb/car_4.jpg",
          price: 250,
          doors: 4,
          passengers: 5,
          automatic_transmission: 1,
          free_miles: 250,
          address: "Copacabana Avenue, 3250 - Rio de Janeiro",
          location: {
            lat: -22.969778,
            lon: -43.186859
          }
        }]
      }, {
        id: 2,
        name: "Beach Cars",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_2.jpg",
        price: 250,
        cars: [{
          id: 1,
          name: "Ford Focus B2017",
          thumb: "assets/img/car/thumb/car_2.jpg",
          price: 100,
          doors: 2,
          passengers: 4,
          automatic_transmission: 0,
          free_miles: 150,
          address: "Copacabana Avenue, 3250 - Rio de Janeiro",
          location: {
            lat: -22.906847,
            lon: -43.172896
          }
        }, {
          id: 2,
          name: "Volkswagen Jetta Tbi",
          thumb: "assets/img/car/thumb/car_3.jpg",
          price: 250,
          doors: 4,
          passengers: 5,
          automatic_transmission: 1,
          free_miles: 250,
          address: "Copacabana Avenue, 3250 - Rio de Janeiro",
          location: {
            lat: -22.969778,
            lon: -43.186859
          }
        }]
      }, {
        id: 3,
        name: "Speedy Cars",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_3.jpg",
        price: 200,
        cars: [{
          id: 1,
          name: "Ford Focus B2017",
          thumb: "assets/img/car/thumb/car_3.jpg",
          price: 100,
          doors: 2,
          passengers: 4,
          automatic_transmission: 0,
          free_miles: 150,
          address: "Copacabana Avenue, 3250 - Rio de Janeiro",
          location: {
            lat: -22.906847,
            lon: -43.172896
          }
        }, {
          id: 1,
          name: "Volkswagen Jetta Tbi",
          thumb: "assets/img/car/thumb/car_1.jpg",
          price: 250,
          doors: 4,
          passengers: 5,
          automatic_transmission: 1,
          free_miles: 250,
          address: "Copacabana Avenue, 3250 - Rio de Janeiro",
          location: {
            lat: -22.969778,
            lon: -43.186859
          }
        }]
      }, {
        id: 4,
        name: "J&F Rent a Car",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_4.jpg",
        price: 350,
        cars: [{
          id: 1,
          name: "Ford Focus B2017",
          thumb: "assets/img/car/thumb/car_4.jpg",
          price: 100,
          doors: 2,
          passengers: 4,
          automatic_transmission: 0,
          free_miles: 150,
          address: "Copacabana Avenue, 3250 - Rio de Janeiro",
          location: {
            lat: -22.906847,
            lon: -43.172896
          }
        }, {
          id: 2,
          name: "Volkswagen Jetta Tbi",
          thumb: "assets/img/car/thumb/car_2.jpg",
          price: 250,
          doors: 4,
          passengers: 5,
          automatic_transmission: 1,
          free_miles: 250,
          address: "Copacabana Avenue, 3250 - Rio de Janeiro",
          location: {
            lat: -22.969778,
            lon: -43.186859
          }
        }]
      }];
      /***/
    },

    /***/
    "./src/app/providers/hotel/hotel.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/providers/hotel/hotel.service.ts ***!
      \**************************************************/

    /*! exports provided: HotelProvider */

    /***/
    function srcAppProvidersHotelHotelServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HotelProvider", function () {
        return HotelProvider;
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


      var _mock_hotels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mock-hotels */
      "./src/app/providers/hotel/mock-hotels.ts");

      var HotelProvider = /*#__PURE__*/function () {
        function HotelProvider() {
          _classCallCheck(this, HotelProvider);

          this.hotels = [];
          this.favoriteCounter = 0;
          this.favorites = [];
          this.bookingCounter = 0;
          this.bookings = []; //COORDENADAS HOTEL SALINAS

          this.HOTEL_LAT = -0.7459337;
          this.HOTEL_LON = -90.3150053;
          this.hotels = _mock_hotels__WEBPACK_IMPORTED_MODULE_2__["HOTELS"];
        }

        _createClass(HotelProvider, [{
          key: "getAll",
          value: function getAll() {
            return this.hotels;
          }
        }, {
          key: "getItem",
          value: function getItem(id) {
            for (var i = 0; i < this.hotels.length; i++) {
              if (this.hotels[i].id === parseInt(id)) {
                return this.hotels[i];
              }
            }
          }
        }, {
          key: "getRoom",
          value: function getRoom(hotelID, roomID) {
            var hotel = this.getItem(hotelID);

            for (var i = 0; i < hotel.rooms.length; i++) {
              if (hotel.rooms[i].id === parseInt(roomID)) {
                return hotel.rooms[i];
              }
            }
          }
        }, {
          key: "remove",
          value: function remove(item) {
            this.hotels.splice(this.hotels.indexOf(item), 1);
          } /////
          //For Search and Favorites
          ////

        }, {
          key: "findAll",
          value: function findAll() {
            return Promise.resolve(this.hotels);
          }
        }, {
          key: "findById",
          value: function findById(id) {
            return Promise.resolve(this.hotels[id - 1]);
          }
        }, {
          key: "findByName",
          value: function findByName(searchKey) {
            var key = searchKey.toUpperCase();
            return Promise.resolve(this.hotels.filter(function (property) {
              return (property.title + ' ' + property.address + ' ' + property.city + ' ' + property.description).toUpperCase().indexOf(key) > -1;
            }));
          }
        }, {
          key: "getFavorites",
          value: function getFavorites() {
            return Promise.resolve(this.favorites);
          }
        }, {
          key: "getBookings",
          value: function getBookings() {
            return Promise.resolve(this.bookings);
          }
        }, {
          key: "favorite",
          value: function favorite(hotel) {
            this.favoriteCounter = this.favoriteCounter + 1;
            var exist = false;

            if (this.favorites && this.favorites.length > 0) {
              this.favorites.forEach(function (val, i) {
                if (val.hotel.id === hotel.id) {
                  exist = true;
                }
              });
            }

            if (!exist) {
              this.favorites.push({
                id: this.favoriteCounter,
                hotel: hotel
              });
            }

            return Promise.resolve();
          }
        }, {
          key: "booking",
          value: function booking(hotel) {
            this.bookingCounter = this.bookingCounter + 1;
            var existb = false;

            if (this.bookings && this.bookings.length > 0) {
              this.bookings.forEach(function (val, i) {
                if (val.hotel.id === hotel.id) {
                  existb = true;
                }
              });
            }

            if (!existb) {
              this.bookings.push({
                id: this.bookingCounter,
                hotel: hotel
              });
            }

            return Promise.resolve();
          }
        }, {
          key: "unfavorite",
          value: function unfavorite(favorite) {
            var index = this.favorites.indexOf(favorite);

            if (index > -1) {
              this.favorites.splice(index, 1);
            }

            return Promise.resolve();
          }
        }]);

        return HotelProvider;
      }();

      HotelProvider.ctorParameters = function () {
        return [];
      };

      HotelProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], HotelProvider);
      /***/
    },

    /***/
    "./src/app/providers/hotel/mock-hotels.ts":
    /*!************************************************!*\
      !*** ./src/app/providers/hotel/mock-hotels.ts ***!
      \************************************************/

    /*! exports provided: HOTELS */

    /***/
    function srcAppProvidersHotelMockHotelsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HOTELS", function () {
        return HOTELS;
      });

      var HOTELS = [{
        id: 1,
        name: "Copacabana Hotel",
        rating: 5,
        price: 150,
        sale_price: 120,
        location: {
          //lat: -22.906847,
          //lon: -43.172896,
          lat: 0,
          lon: -90.3150053
        },
        address: "Av Pres. Antônio Carlos, 223",
        description: "Situated in the best rated area in Rio de Janeiro, this property has an excellent location.",
        location_text: "Located in the Copacabana district in Rio de Janeiro, 80 m from Copacabana Beach, Ritz Copacabana Boutique Hotel features an outdoor pool and views of the city. Guests can enjoy the on-site bar. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "Every room at this hotel is air conditioned and has a flat-screen TV. Each room comes with a private bathroom. For your comfort, you will find free toiletries and a hair dryer. ",
        thumb: "assets/img/hotel/thumb/hotel_1.jpg",
        images: ["assets/img/hotel/thumb/hotel_1.jpg", "assets/img/hotel/thumb/hotel_4.jpg", "assets/img/hotel/thumb/hotel_5.jpg", "assets/img/hotel/thumb/hotel_6.jpg"],
        free_wifi: 1,
        services: [{
          id: 1,
          icon: "checkmark-circle-outline",
          name: "Pool"
        }, {
          id: 2,
          icon: "wifi",
          name: "Internet"
        }, {
          id: 3,
          icon: "cafe",
          name: "Breakfast"
        }, {
          id: 4,
          icon: "restaurant",
          name: "Restaurant"
        }, {
          id: 5,
          icon: "easel",
          name: "Conference"
        }, {
          id: 6,
          icon: "sunny",
          name: "Beach"
        }],
        numb_available_rooms: 3,
        reviews: [{
          id: 1,
          username: "Oliver Bishop",
          from: "Chesterfield, UK",
          title: "Nice place",
          content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
          rating: 4
        }, {
          id: 2,
          username: " Alejandro Suarez",
          from: "Bogotá, CO",
          title: "Close to old quarter",
          content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
          rating: 4
        }, {
          id: 3,
          username: "Matt Doley",
          from: "Cincinnati, US",
          title: "Short stay",
          content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
          rating: 3
        }, {
          id: 4,
          username: "Jorge Silva",
          from: "São Paulo, BR",
          title: "Disappointing and overpriced",
          content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
          rating: 2
        }],
        rooms: [{
          id: 1,
          active: 1,
          name: "Deluxe Room",
          beds: "1 king bed or 1 twin bed",
          numb_available_rooms: 4,
          refundable: 0,
          room_info: "Free Parking, Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_4.jpg",
          price: 120
        }, {
          id: 2,
          active: 0,
          name: "Grand Deluxe",
          beds: "1 king bed or 1 queen bed",
          numb_available_rooms: 2,
          refundable: 0,
          room_info: "Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_2.jpg",
          price: 180
        }]
      }, {
        id: 2,
        name: "La Belle Place",
        rating: 4.7,
        price: 120,
        sale_price: 80,
        location: {
          lat: -22.969778,
          lon: -43.186859
        },
        address: "Av Copacabana, 44",
        description: "Family-friendly place in Rio de Janeiro, close to Flamengo Beach.",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Flamengo Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_2.jpg",
        images: ["assets/img/hotel/thumb/hotel_2.jpg", "assets/img/hotel/thumb/hotel_4.jpg", "assets/img/hotel/thumb/hotel_5.jpg", "assets/img/hotel/thumb/hotel_6.jpg"],
        free_wifi: 1,
        services: [{
          id: 1,
          icon: "checkmark-circle-outline",
          name: "Pool"
        }, {
          id: 2,
          icon: "wifi",
          name: "Internet"
        }, {
          id: 3,
          icon: "cafe",
          name: "Breakfast"
        }, {
          id: 4,
          icon: "restaurant",
          name: "Restaurant"
        }, {
          id: 5,
          icon: "easel",
          name: "Conference"
        }, {
          id: 6,
          icon: "sunny",
          name: "Beach"
        }],
        numb_available_rooms: 12,
        reviews: [{
          id: 1,
          username: "Oliver Bishop",
          from: "Chesterfield, UK",
          title: "Nice place, as long as you don't want to leave",
          content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
          rating: 4
        }, {
          id: 2,
          username: " Alejandro Suarez",
          from: "Bogotá, CO",
          title: "Close to old quarter",
          content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
          rating: 4
        }, {
          id: 3,
          username: "Matt Doley",
          from: "Cincinnati, US",
          title: "Short stay",
          content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
          rating: 3
        }, {
          id: 4,
          username: "Jorge Silva",
          from: "São Paulo, BR",
          title: "Disappointing and overpriced",
          content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
          rating: 2
        }],
        rooms: [{
          id: 1,
          active: 1,
          name: "Deluxe Room",
          beds: "1 king bed or 1 twin bed",
          numb_available_rooms: 1,
          refundable: 0,
          room_info: "Free Parking, Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_4.jpg",
          price: 120
        }, {
          id: 2,
          active: 0,
          name: "Grand Deluxe",
          beds: "1 king bed or 1 queen bed",
          numb_available_rooms: 2,
          refundable: 0,
          room_info: "Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_2.jpg",
          price: 180
        }]
      }, {
        id: 3,
        name: "Marshal Hotel",
        rating: 4.5,
        price: 100,
        sale_price: 70,
        location: {
          lat: -22.984337,
          lon: -43.223142
        },
        address: "Av Ataulfo de Paiva, 98",
        description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_3.jpg",
        images: ["assets/img/hotel/thumb/hotel_3.jpg", "assets/img/hotel/thumb/hotel_4.jpg", "assets/img/hotel/thumb/hotel_5.jpg", "assets/img/hotel/thumb/hotel_6.jpg"],
        free_wifi: 1,
        services: [{
          id: 1,
          icon: "checkmark-circle-outline",
          name: "Pool"
        }, {
          id: 2,
          icon: "wifi",
          name: "Internet"
        }, {
          id: 3,
          icon: "cafe",
          name: "Breakfast"
        }, {
          id: 4,
          icon: "restaurant",
          name: "Restaurant"
        }, {
          id: 5,
          icon: "easel",
          name: "Conference"
        }, {
          id: 6,
          icon: "sunny",
          name: "Beach"
        }],
        numb_available_rooms: 5,
        reviews: [{
          id: 1,
          username: "Oliver Bishop",
          from: "Chesterfield, UK",
          title: "Nice place, as long as you don't want to leave",
          content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
          rating: 4
        }, {
          id: 2,
          username: " Alejandro Suarez",
          from: "Bogotá, CO",
          title: "Close to old quarter",
          content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
          rating: 4
        }, {
          id: 3,
          username: "Matt Doley",
          from: "Cincinnati, US",
          title: "Short stay",
          content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
          rating: 3
        }, {
          id: 4,
          username: "Jorge Silva",
          from: "São Paulo, BR",
          title: "Disappointing and overpriced",
          content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
          rating: 2
        }],
        rooms: [{
          id: 1,
          active: 1,
          name: "Deluxe Room",
          beds: "1 king bed or 1 twin bed",
          numb_available_rooms: 1,
          refundable: 0,
          room_info: "Free Parking, Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_4.jpg",
          price: 120
        }, {
          id: 2,
          active: 0,
          name: "Grand Deluxe",
          beds: "1 king bed or 1 queen bed",
          numb_available_rooms: 2,
          refundable: 0,
          room_info: "Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_2.jpg",
          price: 180
        }]
      }, {
        id: 4,
        name: "Pousada Marés do Amanhã",
        rating: 3.3,
        price: 40,
        sale_price: 30,
        location: {
          lat: -22.933129,
          lon: -43.177427
        },
        address: "Praia do Flamengo",
        description: "Family-friendly place in Rio de Janeiro, close to Flamengo Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Flamengo Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_4.jpg",
        images: ["assets/img/hotel/thumb/hotel_4.jpg", "assets/img/hotel/thumb/hotel_7.jpg", "assets/img/hotel/thumb/hotel_5.jpg", "assets/img/hotel/thumb/hotel_6.jpg"],
        free_wifi: 1,
        services: [{
          id: 1,
          icon: "checkmark-circle-outline",
          name: "Pool"
        }, {
          id: 2,
          icon: "wifi",
          name: "Internet"
        }, {
          id: 3,
          icon: "cafe",
          name: "Breakfast"
        }, {
          id: 4,
          icon: "restaurant",
          name: "Restaurant"
        }, {
          id: 5,
          icon: "easel",
          name: "Conference"
        }, {
          id: 6,
          icon: "sunny",
          name: "Beach"
        }],
        numb_available_rooms: 5,
        reviews: [{
          id: 1,
          username: "Oliver Bishop",
          from: "Chesterfield, UK",
          title: "Nice place, as long as you don't want to leave",
          content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
          rating: 4
        }, {
          id: 2,
          username: " Alejandro Suarez",
          from: "Bogotá, CO",
          title: "Close to old quarter",
          content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
          rating: 4
        }, {
          id: 3,
          username: "Matt Doley",
          from: "Cincinnati, US",
          title: "Short stay",
          content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
          rating: 3
        }, {
          id: 4,
          username: "Jorge Silva",
          from: "São Paulo, BR",
          title: "Disappointing and overpriced",
          content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
          rating: 2
        }],
        rooms: [{
          id: 1,
          active: 1,
          name: "Deluxe Room",
          beds: "1 king bed or 1 twin bed",
          numb_available_rooms: 1,
          refundable: 0,
          room_info: "Free Parking, Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_4.jpg",
          price: 120
        }, {
          id: 2,
          active: 0,
          name: "Grand Deluxe",
          beds: "1 king bed or 1 queen bed",
          numb_available_rooms: 2,
          refundable: 0,
          room_info: "Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_2.jpg",
          price: 180
        }]
      }, {
        id: 5,
        name: "Ipanema Garden Hotel",
        rating: 3.5,
        price: 50,
        sale_price: 40,
        location: {
          lat: -22.984667,
          lon: -43.198593
        },
        address: "Av Vieira Solto, 13",
        description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_5.jpg",
        images: ["assets/img/hotel/thumb/hotel_5.jpg", "assets/img/hotel/thumb/hotel_8.jpg", "assets/img/hotel/thumb/hotel_7.jpg", "assets/img/hotel/thumb/hotel_6.jpg"],
        free_wifi: 1,
        services: [{
          id: 1,
          icon: "checkmark-circle-outline",
          name: "Pool"
        }, {
          id: 2,
          icon: "wifi",
          name: "Internet"
        }, {
          id: 3,
          icon: "cafe",
          name: "Breakfast"
        }, {
          id: 4,
          icon: "restaurant",
          name: "Restaurant"
        }, {
          id: 5,
          icon: "easel",
          name: "Conference"
        }, {
          id: 6,
          icon: "sunny",
          name: "Beach"
        }],
        numb_available_rooms: 4,
        reviews: [{
          id: 1,
          username: "Oliver Bishop",
          from: "Chesterfield, UK",
          title: "Nice place, as long as you don't want to leave",
          content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
          rating: 4
        }, {
          id: 2,
          username: " Alejandro Suarez",
          from: "Bogotá, CO",
          title: "Close to old quarter",
          content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
          rating: 4
        }, {
          id: 3,
          username: "Matt Doley",
          from: "Cincinnati, US",
          title: "Short stay",
          content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
          rating: 3
        }, {
          id: 4,
          username: "Jorge Silva",
          from: "São Paulo, BR",
          title: "Disappointing and overpriced",
          content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
          rating: 2
        }],
        rooms: [{
          id: 1,
          active: 1,
          name: "Deluxe Room",
          beds: "1 king bed or 1 twin bed",
          numb_available_rooms: 1,
          refundable: 0,
          room_info: "Free Parking, Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_4.jpg",
          price: 120
        }, {
          id: 2,
          active: 0,
          name: "Grand Deluxe",
          beds: "1 king bed or 1 queen bed",
          numb_available_rooms: 2,
          refundable: 0,
          room_info: "Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_2.jpg",
          price: 180
        }]
      }, {
        id: 6,
        name: "Tijuquinha Plaza Hotel",
        rating: 4.1,
        price: 65,
        sale_price: 45,
        location: {
          lat: -23.000371,
          lon: -43.365895
        },
        address: "Av Ayrton Senna, 877",
        description: "Family-friendly place in Rio de Janeiro, close to Botafogo Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Botafogo Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_6.jpg",
        images: ["assets/img/hotel/thumb/hotel_6.jpg", "assets/img/hotel/thumb/hotel_4.jpg", "assets/img/hotel/thumb/hotel_5.jpg", "assets/img/hotel/thumb/hotel_10.jpg"],
        free_wifi: 1,
        services: [{
          id: 1,
          icon: "checkmark-circle-outline",
          name: "Pool"
        }, {
          id: 2,
          icon: "wifi",
          name: "Internet"
        }, {
          id: 3,
          icon: "cafe",
          name: "Breakfast"
        }, {
          id: 4,
          icon: "restaurant",
          name: "Restaurant"
        }, {
          id: 5,
          icon: "easel",
          name: "Conference"
        }, {
          id: 6,
          icon: "sunny",
          name: "Beach"
        }],
        numb_available_rooms: 12,
        reviews: [{
          id: 1,
          username: "Oliver Bishop",
          from: "Chesterfield, UK",
          title: "Nice place, as long as you don't want to leave",
          content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
          rating: 4
        }, {
          id: 2,
          username: " Alejandro Suarez",
          from: "Bogotá, CO",
          title: "Close to old quarter",
          content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
          rating: 4
        }, {
          id: 3,
          username: "Matt Doley",
          from: "Cincinnati, US",
          title: "Short stay",
          content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
          rating: 3
        }, {
          id: 4,
          username: "Jorge Silva",
          from: "São Paulo, BR",
          title: "Disappointing and overpriced",
          content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
          rating: 2
        }],
        rooms: [{
          id: 1,
          active: 1,
          name: "Deluxe Room",
          beds: "1 king bed or 1 twin bed",
          numb_available_rooms: 1,
          refundable: 0,
          room_info: "Free Parking, Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_4.jpg",
          price: 120
        }, {
          id: 2,
          active: 0,
          name: "Grand Deluxe",
          beds: "1 king bed or 1 queen bed",
          numb_available_rooms: 2,
          refundable: 0,
          room_info: "Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_2.jpg",
          price: 180
        }]
      }, {
        id: 7,
        name: "Pousada Maresias",
        rating: 4.0,
        price: 100,
        sale_price: 70,
        location: {
          lat: -23.791402,
          lon: -45.567807
        },
        address: "Alameda Água Branca, 123",
        description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_7.jpg",
        images: ["assets/img/hotel/thumb/hotel_7.jpg", "assets/img/hotel/thumb/hotel_8.jpg", "assets/img/hotel/thumb/hotel_10.jpg", "assets/img/hotel/thumb/hotel_9.jpg"],
        free_wifi: 1,
        services: [{
          id: 1,
          icon: "checkmark-circle-outline",
          name: "Pool"
        }, {
          id: 2,
          icon: "wifi",
          name: "Internet"
        }, {
          id: 3,
          icon: "cafe",
          name: "Breakfast"
        }, {
          id: 4,
          icon: "restaurant",
          name: "Restaurant"
        }, {
          id: 5,
          icon: "easel",
          name: "Conference"
        }, {
          id: 6,
          icon: "sunny",
          name: "Beach"
        }],
        numb_available_rooms: 6,
        reviews: [{
          id: 1,
          username: "Oliver Bishop",
          from: "Chesterfield, UK",
          title: "Nice place, as long as you don't want to leave",
          content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
          rating: 4
        }, {
          id: 2,
          username: " Alejandro Suarez",
          from: "Bogotá, CO",
          title: "Close to old quarter",
          content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
          rating: 4
        }, {
          id: 3,
          username: "Matt Doley",
          from: "Cincinnati, US",
          title: "Short stay",
          content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
          rating: 3
        }, {
          id: 4,
          username: "Jorge Silva",
          from: "São Paulo, BR",
          title: "Disappointing and overpriced",
          content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
          rating: 2
        }],
        rooms: [{
          id: 1,
          active: 1,
          name: "Deluxe Room",
          beds: "1 king bed or 1 twin bed",
          numb_available_rooms: 1,
          refundable: 0,
          room_info: "Free Parking, Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_4.jpg",
          price: 120
        }, {
          id: 2,
          active: 0,
          name: "Grand Deluxe",
          beds: "1 king bed or 1 queen bed",
          numb_available_rooms: 2,
          refundable: 0,
          room_info: "Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_2.jpg",
          price: 180
        }]
      }, {
        id: 8,
        name: "Solar Beach Hotel",
        rating: 4.1,
        price: 90,
        sale_price: 80,
        location: {
          lat: -9.010380,
          lon: -35.220805
        },
        address: "Rua Jangadeiros",
        description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_8.jpg",
        images: ["assets/img/hotel/thumb/hotel_8.jpg", "assets/img/hotel/thumb/hotel_9.jpg", "assets/img/hotel/thumb/hotel_5.jpg", "assets/img/hotel/thumb/hotel_6.jpg"],
        free_wifi: 1,
        services: [{
          id: 1,
          icon: "checkmark-circle-outline",
          name: "Pool"
        }, {
          id: 2,
          icon: "wifi",
          name: "Internet"
        }, {
          id: 3,
          icon: "cafe",
          name: "Breakfast"
        }, {
          id: 4,
          icon: "restaurant",
          name: "Restaurant"
        }, {
          id: 5,
          icon: "easel",
          name: "Conference"
        }, {
          id: 6,
          icon: "sunny",
          name: "Beach"
        }],
        numb_available_rooms: 12,
        reviews: [{
          id: 1,
          username: "Oliver Bishop",
          from: "Chesterfield, UK",
          title: "Nice place, as long as you don't want to leave",
          content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
          rating: 4
        }, {
          id: 2,
          username: " Alejandro Suarez",
          from: "Bogotá, CO",
          title: "Close to old quarter",
          content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
          rating: 4
        }, {
          id: 3,
          username: "Matt Doley",
          from: "Cincinnati, US",
          title: "Short stay",
          content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
          rating: 3
        }, {
          id: 4,
          username: "Jorge Silva",
          from: "São Paulo, BR",
          title: "Disappointing and overpriced",
          content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
          rating: 2
        }],
        rooms: [{
          id: 1,
          active: 1,
          name: "Deluxe Room",
          beds: "1 king bed or 1 twin bed",
          numb_available_rooms: 1,
          refundable: 0,
          room_info: "Free Parking, Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_4.jpg",
          price: 120
        }, {
          id: 2,
          active: 0,
          name: "Grand Deluxe",
          beds: "1 king bed or 1 queen bed",
          numb_available_rooms: 2,
          refundable: 0,
          room_info: "Free Internet and Free Breakfast.",
          thumb: "assets/img/hotel/thumb/hotel_2.jpg",
          price: 180
        }]
      }];
      /***/
    },

    /***/
    "./src/app/providers/index.ts":
    /*!************************************!*\
      !*** ./src/app/providers/index.ts ***!
      \************************************/

    /*! exports provided: TranslateProvider, HotelProvider, WeatherService, CarsService, ActivitiesService */

    /***/
    function srcAppProvidersIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _translate_translate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./translate/translate.service */
      "./src/app/providers/translate/translate.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TranslateProvider", function () {
        return _translate_translate_service__WEBPACK_IMPORTED_MODULE_0__["TranslateProvider"];
      });
      /* harmony import */


      var _hotel_hotel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./hotel/hotel.service */
      "./src/app/providers/hotel/hotel.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HotelProvider", function () {
        return _hotel_hotel_service__WEBPACK_IMPORTED_MODULE_1__["HotelProvider"];
      });
      /* harmony import */


      var _weather_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./weather/weather.service */
      "./src/app/providers/weather/weather.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WeatherService", function () {
        return _weather_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"];
      });
      /* harmony import */


      var _cars_cars_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cars/cars.service */
      "./src/app/providers/cars/cars.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CarsService", function () {
        return _cars_cars_service__WEBPACK_IMPORTED_MODULE_3__["CarsService"];
      });
      /* harmony import */


      var _activities_activities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./activities/activities.service */
      "./src/app/providers/activities/activities.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ActivitiesService", function () {
        return _activities_activities_service__WEBPACK_IMPORTED_MODULE_4__["ActivitiesService"];
      }); // Add your providers here for easy indexing.

      /***/

    },

    /***/
    "./src/app/providers/translate/translate.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/providers/translate/translate.service.ts ***!
      \**********************************************************/

    /*! exports provided: TranslateProvider */

    /***/
    function srcAppProvidersTranslateTranslateServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslateProvider", function () {
        return TranslateProvider;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TranslateProvider = /*#__PURE__*/function () {
        function TranslateProvider() {
          _classCallCheck(this, TranslateProvider);
        } // Set the translations of the app.


        _createClass(TranslateProvider, [{
          key: "setTranslations",
          value: function setTranslations(translations) {
            this.translations = translations;
          }
        }, {
          key: "getTranslations",
          value: function getTranslations() {
            return this.translations;
          } // Get the translated string given the key based on the i18n .json file.

        }, {
          key: "get",
          value: function get(key) {
            return this.translations[key];
          }
        }]);

        return TranslateProvider;
      }();

      TranslateProvider.ctorParameters = function () {
        return [];
      };

      TranslateProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TranslateProvider);
      /***/
    },

    /***/
    "./src/app/providers/weather/weather.service.ts":
    /*!******************************************************!*\
      !*** ./src/app/providers/weather/weather.service.ts ***!
      \******************************************************/

    /*! exports provided: WeatherService */

    /***/
    function srcAppProvidersWeatherWeatherServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeatherService", function () {
        return WeatherService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var WeatherService = /*#__PURE__*/function () {
        function WeatherService(http) {
          _classCallCheck(this, WeatherService);

          this.http = http;
          this.apiKey = '3846169fbe28c1f5498aa431a3cb010e'; // Please generate your own api key here --> https://openweathermap.org

          this.url = 'https://api.openweathermap.org/data/2.5/weather?q=';
        }

        _createClass(WeatherService, [{
          key: "getWeather",
          value: function getWeather(state, city) {
            return this.http.get(this.url + city + ',' + state + '&appid=' + this.apiKey).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          } // Private

        }, {
          key: "extractData",
          value: function extractData(res) {
            var body = res;
            return body || {};
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            var errMsg;

            if (error instanceof Response) {
              var err = error || '';
              errMsg = "".concat(error.status, " - ").concat(error.statusText || '', " ").concat(err);
            } else {
              errMsg = error.message ? error.message : error.toString();
            }

            console.error(errMsg);
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](errMsg);
          }
        }]);

        return WeatherService;
      }();

      WeatherService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      WeatherService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], WeatherService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        // Set your app configurations here.
        // For the list of config options, please refer to https://ionicframework.com/docs/api/config/Config/
        config: {
          // iconMode: 'md',
          // mode: 'md'
          // iconMode: 'ios',
          // mode: 'ios'
          // preloadModules: true,
          // scrollPadding: false,
          // scrollAssist: true,
          autoFocusAssist: false,
          menuType: 'overlay'
        },
        // Set language to use.
        language: 'en',
        // Loading Configuration.
        // Please refer to the official Loading documentation here: https://ionicframework.com/docs/api/components/loading/LoadingController/
        loading: {
          spinner: 'circles'
        },
        // Toast Configuration.
        // Please refer to the official Toast documentation here: https://ionicframework.com/docs/api/components/toast/ToastController/
        toast: {
          position: 'bottom' // Position of Toast, top, middle, or bottom.

        },
        toastDuration: 3000,
        // Angular Google Maps Styles Config
        agmStyles: [{
          elementType: 'geometry',
          stylers: [{
            color: '#1d2c4d'
          }]
        }, {
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#8ec3b9'
          }]
        }, {
          elementType: 'labels.text.stroke',
          stylers: [{
            color: '#1a3646'
          }]
        }, {
          featureType: 'administrative.country',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#4b6878'
          }]
        }, {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#64779e'
          }]
        }, {
          featureType: 'administrative.province',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#4b6878'
          }]
        }, {
          featureType: 'landscape.man_made',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#334e87'
          }]
        }, {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [{
            color: '#023e58'
          }]
        }, {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{
            color: '#283d6a'
          }]
        }, {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#6f9ba5'
          }]
        }, {
          featureType: 'poi',
          elementType: 'labels.text.stroke',
          stylers: [{
            color: '#1d2c4d'
          }]
        }, {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{
            color: '#023e58'
          }]
        }, {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#3C7680'
          }]
        }, {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{
            color: '#304a7d'
          }]
        }, {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#98a5be'
          }]
        }, {
          featureType: 'road',
          elementType: 'labels.text.stroke',
          stylers: [{
            color: '#1d2c4d'
          }]
        }, {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{
            color: '#2c6675'
          }]
        }, {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#255763'
          }]
        }, {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#b0d5ce'
          }]
        }, {
          featureType: 'road.highway',
          elementType: 'labels.text.stroke',
          stylers: [{
            color: '#023e58'
          }]
        }, {
          featureType: 'transit',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#98a5be'
          }]
        }, {
          featureType: 'transit',
          elementType: 'labels.text.stroke',
          stylers: [{
            color: '#1d2c4d'
          }]
        }, {
          featureType: 'transit.line',
          elementType: 'geometry.fill',
          stylers: [{
            color: '#283d6a'
          }]
        }, {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{
            color: '#3a4762'
          }]
        }, {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{
            color: '#0e1626'
          }]
        }, {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#4e6d70'
          }]
        }] // //

      };
      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\david\Desktop\Coding\IngSoftwareESPOL\HotelSalinas2020\App\hotel_salinas_app_migration\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map