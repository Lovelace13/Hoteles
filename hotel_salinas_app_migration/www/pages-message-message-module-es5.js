(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-message-message-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/message/message.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/message/message.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesMessageMessagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Message</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"ion-padding animated fadeIn\">\n\n    <ion-card class=\"ion-no-margin bg-white\">\n      <ion-card-header>\n          <ion-card-subtitle>{{message.date | date: 'MM/dd/yyyy'}} ∙ by <strong>{{message.senderName}}</strong></ion-card-subtitle>\n          <ion-card-title>\n            <ion-text color=\"primary\">\n              {{message.title}}\n            </ion-text>\n          </ion-card-title>\n      </ion-card-header>\n        <ion-card-content>\n\t\t\t\t\t<p class=\"ion-margin-top\">\n            <ion-text color=\"primary\">\n              {{message.message}}\n            </ion-text>\n          </p>\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/message/message.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/message/message.module.ts ***!
      \*************************************************/

    /*! exports provided: MessagePageModule */

    /***/
    function srcAppPagesMessageMessageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagePageModule", function () {
        return MessagePageModule;
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


      var _message_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./message.page */
      "./src/app/pages/message/message.page.ts");

      var routes = [{
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_7__["MessagePage"]
      }];

      var MessagePageModule = function MessagePageModule() {
        _classCallCheck(this, MessagePageModule);
      };

      MessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_message_page__WEBPACK_IMPORTED_MODULE_7__["MessagePage"]]
      })], MessagePageModule);
      /***/
    },

    /***/
    "./src/app/pages/message/message.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/message/message.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesMessageMessagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVzc2FnZS9tZXNzYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdGQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZXNzYWdlL21lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpXG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/message/message.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/message/message.page.ts ***!
      \***********************************************/

    /*! exports provided: MessagePage */

    /***/
    function srcAppPagesMessageMessagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagePage", function () {
        return MessagePage;
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
      /* harmony import */


      var _providers_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../providers/message/message.service */
      "./src/app/providers/message/message.service.ts");

      var MessagePage = /*#__PURE__*/function () {
        function MessagePage(route, messageService) {
          _classCallCheck(this, MessagePage);

          this.route = route;
          this.messageService = messageService;
          this.messageID = this.route.snapshot.paramMap.get('id');
        }

        _createClass(MessagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.message = this.messageService.getItem(this.messageID) ? this.messageService.getItem(this.messageID) : this.messageService.getMessages()[0];
          }
        }]);

        return MessagePage;
      }();

      MessagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _providers_message_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
        }];
      };

      MessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./message.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/message/message.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./message.page.scss */
        "./src/app/pages/message/message.page.scss"))["default"]]
      })], MessagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-message-message-module-es5.js.map