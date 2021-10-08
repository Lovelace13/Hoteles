(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-local-weather-local-weather-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/local-weather/local-weather.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/local-weather/local-weather.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLocalWeatherLocalWeatherPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.localweather.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding animated fadeIn\">\n\n  <ion-card class=\"ion-no-margin ion-margin-bottom bg-primary\">\n    <ion-card-content class=\"ion-no-padding\">\n  \n      <ion-item>\n        <ion-label class=\"text-1x fw700\">\n          <ion-text color=\"light\">{{ 'app.label.selectlocal' | translate }}</ion-text>\n        </ion-label>\n        <ion-select [(ngModel)]=\"location\" (ionChange)=\"getWeather(location)\">\n          <ion-select-option *ngFor=\"let location of locationList\" [value]=\"location\">\n            <ion-text color=\"light\">{{ location.city }}</ion-text>\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n  \n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card class=\"ion-no-margin bg-white\">\n    <ion-card-content class=\"ion-no-padding\">\n    <ion-grid class=\"ion-padding\" *ngIf=\"weather\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <h1 class=\"location text-dark\">{{weather.name}}</h1>\n          <!-- <div class=\"icon\"><img src=\"{{weather.icon_url}}\" alt=\"weather\"></div> -->\n          <h3 class=\"desc\"> {{weather.weather[0].description}}</h3>\n          <h1 class=\"temp\"><strong>{{weather.main.temp - 273.15 | number:'1.0-0'}}&deg;</strong></h1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-list>\n    \n            <ion-item>\n              <strong>{{ 'app.pages.localweather.label.temp' | translate }}: </strong> {{weather.weather[0].main}}\n            </ion-item>\n            <ion-item>\n              <strong>{{ 'app.pages.localweather.label.humidity' | translate }}: </strong> {{weather.main.humidity}}\n            </ion-item>\n            <ion-item>\n              <strong>{{ 'app.pages.localweather.label.dewpoint' | translate }}: </strong> {{weather.main.pressure}}\n            </ion-item>\n            <ion-item>\n              <strong>{{ 'app.pages.localweather.label.visibility' | translate }}: </strong> {{weather.visibility}}\n            </ion-item>\n            <ion-item>\n              <strong>{{ 'app.pages.localweather.label.heatindex' | translate }}: </strong> {{weather.clouds.all}}\n            </ion-item>\n    \n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/local-weather/local-weather.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/local-weather/local-weather.module.ts ***!
      \*************************************************************/

    /*! exports provided: LocalWeatherPageModule */

    /***/
    function srcAppPagesLocalWeatherLocalWeatherModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalWeatherPageModule", function () {
        return LocalWeatherPageModule;
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


      var _local_weather_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./local-weather.page */
      "./src/app/pages/local-weather/local-weather.page.ts");

      var routes = [{
        path: '',
        component: _local_weather_page__WEBPACK_IMPORTED_MODULE_7__["LocalWeatherPage"]
      }];

      var LocalWeatherPageModule = function LocalWeatherPageModule() {
        _classCallCheck(this, LocalWeatherPageModule);
      };

      LocalWeatherPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_local_weather_page__WEBPACK_IMPORTED_MODULE_7__["LocalWeatherPage"]]
      })], LocalWeatherPageModule);
      /***/
    },

    /***/
    "./src/app/pages/local-weather/local-weather.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/local-weather/local-weather.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLocalWeatherLocalWeatherPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\nion-select {\n  --color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9jYWwtd2VhdGhlci9sb2NhbC13ZWF0aGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdGQUFBO0FBQUo7O0FBSUE7RUFDSSwrQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9jYWwtd2VhdGhlci9sb2NhbC13ZWF0aGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKVxuICB9XG59XG5cbmlvbi1zZWxlY3Qge1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/local-weather/local-weather.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/local-weather/local-weather.page.ts ***!
      \***********************************************************/

    /*! exports provided: LocalWeatherPage */

    /***/
    function srcAppPagesLocalWeatherLocalWeatherPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalWeatherPage", function () {
        return LocalWeatherPage;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var LocalWeatherPage = /*#__PURE__*/function () {
        function LocalWeatherPage(navCtrl, translate, weatherService, storage) {
          _classCallCheck(this, LocalWeatherPage);

          this.navCtrl = navCtrl;
          this.translate = translate;
          this.weatherService = weatherService;
          this.storage = storage;
          this.locationList = [{
            city: 'Los Angeles',
            state: 'US'
          }, {
            city: 'Miami',
            state: 'US'
          }, {
            city: 'New York',
            state: 'US'
          }, {
            city: 'Seattle',
            state: 'US'
          }, {
            city: 'São Paulo',
            state: 'BR'
          }];
        }

        _createClass(LocalWeatherPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get('location').then(function (val) {
              if (val !== null) {
                _this.location = JSON.parse(val);
              } else {
                _this.location = {
                  state: 'US',
                  city: 'New York'
                };
              }

              _this.getWeather(_this.location);
            });
          }
        }, {
          key: "getWeather",
          value: function getWeather(location) {
            var _this2 = this;

            if (typeof location === 'string') {
              this.location = JSON.parse(location);
            } else {
              this.location = location;
            }

            this.storage.set('location', JSON.stringify(this.location));
            this.weatherService.getWeather(this.location.state, this.location.city).subscribe(function (weather) {
              _this2.weather = weather;
            });
          }
        }]);

        return LocalWeatherPage;
      }();

      LocalWeatherPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]
        }, {
          type: _providers__WEBPACK_IMPORTED_MODULE_3__["WeatherService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }];
      };

      LocalWeatherPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-local-weather',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./local-weather.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/local-weather/local-weather.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./local-weather.page.scss */
        "./src/app/pages/local-weather/local-weather.page.scss"))["default"]]
      })], LocalWeatherPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-local-weather-local-weather-module-es5.js.map