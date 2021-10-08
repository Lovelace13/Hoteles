(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-support-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSupportSupportPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Support</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn\">\n\n  <div class=\"ion-text-center bg-profile\">\n    <img src=\"assets/img/support-app.jpg\">\n  </div>\n\n  <ion-card class=\"ion-no-margin bg-white\">\n    <ion-card-content>\n\n      <ion-list>\n        <ion-item href=\"tel:1111\">\n          <ion-icon name=\"call\" slot=\"start\" color=\"primary\"></ion-icon>\n          <ion-label>\n            <p><ion-text color=\"primary\">Call to General Support</ion-text></p>\n            <h2><ion-text color=\"dark\">+1 (123) 456-7890</ion-text></h2>\n          </ion-label>\n        </ion-item>\n        <ion-item href=\"tel:1111\">\n          <ion-icon name=\"call\" slot=\"start\" color=\"primary\"></ion-icon>\n          <ion-label>\n            <p><ion-text color=\"primary\">Call to Lease & Sale Support</ion-text></p>\n            <h2><ion-text color=\"dark\">+1 (123) 456-7890</ion-text></h2>\n          </ion-label>\n        </ion-item>\n        <ion-item href=\"mailto:support-oceana@hotmail.com\">\n          <ion-icon name=\"mail\" slot=\"start\" color=\"primary\"></ion-icon>\n          <ion-label>\n            <p><ion-text color=\"primary\">Email</ion-text></p>\n            <h2><ion-text color=\"dark\">support-oceana@hotmail.com</ion-text></h2>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n        \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/support/support.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/support/support.module.ts ***!
      \*************************************************/

    /*! exports provided: SupportPageModule */

    /***/
    function srcAppPagesSupportSupportModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportPageModule", function () {
        return SupportPageModule;
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


      var _support_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./support.page */
      "./src/app/pages/support/support.page.ts");

      var routes = [{
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_7__["SupportPage"]
      }];

      var SupportPageModule = function SupportPageModule() {
        _classCallCheck(this, SupportPageModule);
      };

      SupportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_7__["SupportPage"]]
      })], SupportPageModule);
      /***/
    },

    /***/
    "./src/app/pages/support/support.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/support/support.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSupportSupportPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdGQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdXBwb3J0L3N1cHBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpXG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/support/support.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/support/support.page.ts ***!
      \***********************************************/

    /*! exports provided: SupportPage */

    /***/
    function srcAppPagesSupportSupportPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportPage", function () {
        return SupportPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SupportPage = /*#__PURE__*/function () {
        function SupportPage() {
          _classCallCheck(this, SupportPage);
        }

        _createClass(SupportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SupportPage;
      }();

      SupportPage.ctorParameters = function () {
        return [];
      };

      SupportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-support',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./support.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./support.page.scss */
        "./src/app/pages/support/support.page.scss"))["default"]]
      })], SupportPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-support-support-module-es5.js.map