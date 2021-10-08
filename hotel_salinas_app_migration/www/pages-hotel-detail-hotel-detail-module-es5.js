(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hotel-detail-hotel-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hotel-detail/hotel-detail.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hotel-detail/hotel-detail.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHotelDetailHotelDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{hotel.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn\">\n  <ion-slides pager=\"true\" class=\"ion-margin-bottom\">\n    <ion-slide *ngFor=\"let image of hotel.images\" (click)=\"presentImage(image)\">\n      <img [src]=\"image\">\n      <div class=\"shadow\"></div>\n    </ion-slide>\n  </ion-slides>\n\n  <div class=\"ion-padding-horizontal\">\n\n    <ion-segment [(ngModel)]=\"hotelSegment\" color=\"primary\">\n      <ion-segment-button value=\"details\">\n        <ion-label>{{ 'app.label.details' | translate }}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"rooms\">\n        <ion-label>{{ 'app.label.rooms' | translate }}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"rating\">\n        <ion-label>{{ 'app.label.rating' | translate }}</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    \n    <div [ngSwitch]=\"hotelSegment\">\n      <div *ngSwitchCase=\"'details'\">\n\n        <ion-card class=\"ion-no-margin ion-margin-top ion-margin-bottom animated fadeIn\">\n          <ion-card-content class=\"ion-no-padding\">\n            <agm-map [latitude]=\"hotel.location.lat\" [longitude]=\"hotel.location.lon\" [zoom]=\"14\" [styles]=\"agmStyles\">\n              <agm-marker [latitude]=\"hotel.location.lat\" [longitude]=\"hotel.location.lon\"></agm-marker>\n            </agm-map>\n          </ion-card-content>\n          <ion-card-content class=\"bg-white\">\n            <h2>\n              <ion-text color=\"primary\">\n                <strong>{{ 'app.label.address' | translate }}</strong>\n              </ion-text>\n            </h2>\n            <p>{{hotel.address}}</p>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"ion-no-margin ion-margin-bottom bg-white animated fadeIn\">\n          <ion-card-content>\n            <ion-card-title>\n              <ion-text color=\"primary\">{{ 'app.label.about' | translate }}</ion-text>\n            </ion-card-title>\n          \n            <ion-text color=\"dark\" class=\"ion-margin-bottom\">\n              <p>{{hotel.description}}</p>\n            </ion-text>\n            <ion-text color=\"dark\" class=\"ion-margin-bottom\">\n              <p>{{hotel.location_text}}</p>\n            </ion-text>\n            \n          </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"ion-no-margin ion-margin-bottom bg-white animated fadeIn\">\n          <ion-card-content>\n            <ion-card-title class=\"ion-margin-bottom\">\n              <ion-text color=\"primary\">{{ 'app.label.amenities' | translate }}</ion-text>\n            </ion-card-title>\n\n            <ion-chip class=\"ion-margin-left\" color=\"primary\" *ngFor=\"let services of hotel.services\">\n              <ion-icon [name]=\"services.icon\"></ion-icon>\n              <ion-label>{{services.name}}</ion-label>\n            </ion-chip>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"ion-no-margin ion-margin-bottom bg-white animated fadeIn\">\n          <ion-card-content>\n            <ion-card-title class=\"ion-margin-bottom\">\n              <ion-text color=\"primary\">{{ 'app.label.features' | translate }}</ion-text>\n            </ion-card-title>\n        \n            <ion-text color=\"dark\">\n              <p>{{hotel.features}}</p>\n            </ion-text>\n          </ion-card-content>\n        </ion-card>\n\n      </div>\n\n      <div *ngSwitchCase=\"'rooms'\" [@staggerIn]='hotel.rooms.length'>\n        <ion-card class=\"ion-no-margin ion-margin-vertical bg-profile animated fadeIn\">\n          <ion-card-content>\n            <ion-text color=\"light\">\n              <p>{{hotel.room_amenities}}</p>\n            </ion-text>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"ion-no-margin ion-margin-vertical bg-white\" *ngFor=\"let room of hotel.rooms\">\n          <img [src]=\"room.thumb\">\n\n          <ion-card-content>\n            \n            <ion-card-subtitle>\n              <ion-text color=\"secondary\">{{room.beds}}</ion-text>\n            </ion-card-subtitle>\n\n            <ion-card-title>\n              <ion-text color=\"primary\">{{room.name}}</ion-text>\n            </ion-card-title>\n\n            <ion-badge slot=\"start\" color=\"primary\" class=\"ion-margin-bottom\">{{ room.numb_available_rooms }} {{ 'app.label.availrooms' | translate }}</ion-badge>\n            <p><ion-text color=\"primary\">{{room.room_info}}</ion-text></p>\n            \n            <ion-button size=\"large\" shape=\"round\" expand=\"full\" color=\"success\" (click)=\"checkout(hotel.id, room.id)\">\n              <ion-icon slot=\"start\" name=\"book\"></ion-icon>\n              {{ 'app.label.book' | translate }} ({{ room.price | currency:'$':'code' }})\n            </ion-button>\n          </ion-card-content>\n\n        </ion-card>\n      </div>\n\n      <div *ngSwitchCase=\"'rating'\">\n        \n       <ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\n         <ion-row>\n           <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-card class=\"card-average ion-no-margin bg-white animated fadeIn\">\n                <ion-card-content class=\"ion-text-center\">\n                  <h3>\n                    <ion-text color=\"primary\">{{ 'app.label.average' | translate }}</ion-text>\n                  </h3>\n                  <h1 class=\"ion-no-margin\">\n                    <ion-text color=\"primary\">\n                      <strong>{{ avgRating() }}</strong>\n                    </ion-text>\n                  </h1>\n                </ion-card-content>\n              </ion-card>\n           </ion-col>\n           <ion-col size=\"8\" class=\"ion-no-padding\">\n              <ion-card class=\"ion-no-margin bg-profile animated fadeIn\">\n                  <ion-card-content>\n                    <h1>\n                      <ion-text color=\"light\">{{ avgRating() }} / <strong>5</strong></ion-text>\n                    </h1>\n                    <h3>\n                      <ion-text color=\"light\">\n                        totally {{hotel.reviews.length}} people reviewed\n                      </ion-text>\n                    </h3>\n                  </ion-card-content>\n                </ion-card>\n            </ion-col>  \n         </ion-row>\n       </ion-grid>\n\n        <ion-card *ngFor=\"let review of hotel.reviews\" class=\"ion-no-margin ion-margin-bottom bg-white\">\n          <ion-card-content>\n            <h2>\n              <ion-text color=\"primary\">\n                <strong>{{ review.title }}</strong>\n              </ion-text>\n            </h2>\n            <div class=\"text-08\">\n              <ion-icon color=\"warning\" size=\"small\" name=\"star\" *ngFor=\"let start of range(review.rating)\"></ion-icon>\n            </div>\n            <p class=\"ion-margin-bottom\">\n              <ion-text color=\"primary\">\n                {{ review.content }}\n              </ion-text>\n            </p>\n            <cite class=\"text-08\">\n              <ion-text color=\"secondary\">{{ review.username }} from {{ review.from }}</ion-text>\n            </cite>\n            <!-- <h3>{{}}</h3> -->\n          </ion-card-content>\n        </ion-card>\n\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"animated fadeIn\">\n    <ion-toolbar color=\"primary\">\n      <ion-grid class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-button size=\"small\" shape=\"round\" expand=\"full\" fill=\"clear\" color=\"tertiary\" (click)=\"favorite(hotel)\">\n                <ion-icon slot=\"start\" name=\"heart\"></ion-icon>\n                {{ 'app.button.fav' | translate }}\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-button size=\"small\" shape=\"round\" expand=\"full\" fill=\"clear\" color=\"tertiary\" href=\"tel:+13174562564\">\n                <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n                {{ 'app.button.callus' | translate }}\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-no-padding\">\n              <ion-button size=\"small\" shape=\"round\" expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"share()\">\n                <ion-icon slot=\"start\" name=\"share\"></ion-icon>\n                {{ 'app.button.share' | translate }}\n              </ion-button>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/hotel-detail/hotel-detail.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/hotel-detail/hotel-detail.module.ts ***!
      \***********************************************************/

    /*! exports provided: HotelDetailPageModule */

    /***/
    function srcAppPagesHotelDetailHotelDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HotelDetailPageModule", function () {
        return HotelDetailPageModule;
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


      var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var _hotel_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./hotel-detail.page */
      "./src/app/pages/hotel-detail/hotel-detail.page.ts");

      var routes = [{
        path: '',
        component: _hotel_detail_page__WEBPACK_IMPORTED_MODULE_8__["HotelDetailPage"]
      }];

      var HotelDetailPageModule = function HotelDetailPageModule() {
        _classCallCheck(this, HotelDetailPageModule);
      };

      HotelDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(), _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
        })],
        declarations: [_hotel_detail_page__WEBPACK_IMPORTED_MODULE_8__["HotelDetailPage"]]
      })], HotelDetailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/hotel-detail/hotel-detail.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/pages/hotel-detail/hotel-detail.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHotelDetailHotelDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\nagm-map {\n  height: 180px;\n}\n\nagm-map .gmnoprint {\n  display: none !important;\n}\n\nion-slides {\n  box-shadow: 0 4px 16px rgba(var(--ion-color-dark-rgb), 0.4);\n}\n\nion-slides ion-slide .shadow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  box-shadow: inset 0 0 15rem rgba(var(--ion-color-dark-rgb), 0.95);\n}\n\n.card-average {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  margin-right: -4px;\n}\n\n.card-average h1 {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG90ZWwtZGV0YWlsL2hvdGVsLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3RkFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUVFO0VBQ0Usd0JBQUE7QUFBSjs7QUFJQTtFQUNFLDJEQUFBO0FBREY7O0FBR0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsaUVBQUE7QUFETjs7QUFNQTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQUlFO0VBQ0ksZ0JBQUE7QUFGTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvdGVsLWRldGFpbC9ob3RlbC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpXG4gIH1cbn1cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogMTgwcHg7XG4gIC5nbW5vcHJpbnQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG5pb24tc2xpZGVzIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksLjQpO1xuICBpb24tc2xpZGUge1xuICAgIC5zaGFkb3cge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXJlbSByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC45NSlcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQtYXZlcmFnZSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgbWFyZ2luLXJpZ2h0OiAtNHB4O1xuICBoMSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/hotel-detail/hotel-detail.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/hotel-detail/hotel-detail.page.ts ***!
      \*********************************************************/

    /*! exports provided: HotelDetailPage */

    /***/
    function srcAppPagesHotelDetailHotelDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HotelDetailPage", function () {
        return HotelDetailPage;
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
      /* harmony import */


      var _modal_image_image_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../modal/image/image.page */
      "./src/app/pages/modal/image/image.page.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      var HotelDetailPage = /*#__PURE__*/function () {
        function HotelDetailPage(navCtrl, asCtrl, toastCtrl, modalCtrl, translate, hotels, route, router) {
          _classCallCheck(this, HotelDetailPage);

          this.navCtrl = navCtrl;
          this.asCtrl = asCtrl;
          this.toastCtrl = toastCtrl;
          this.modalCtrl = modalCtrl;
          this.translate = translate;
          this.hotels = hotels;
          this.route = route;
          this.router = router;
          this.hotelID = this.route.snapshot.paramMap.get('id');
          this.agmStyles = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].agmStyles;
          this.hotelSegment = 'details';
          this.hotel = this.hotels.getItem(this.hotelID);
        }

        _createClass(HotelDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.hotel);
          }
        }, {
          key: "checkout",
          value: function checkout(hotelID, roomID) {
            this.navCtrl.navigateForward("hotel-checkout/".concat(hotelID, "/").concat(roomID)); // this.router.navigate(['../../hotel-checkout', { hotelID: hotelID, roomID: roomID }], { relativeTo: this.route });
            // return await modal.present();
          }
        }, {
          key: "presentImage",
          value: function presentImage(image) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _modal_image_image_page__WEBPACK_IMPORTED_MODULE_5__["ImagePage"],
                        componentProps: {
                          value: image
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "favorite",
          value: function favorite(hotel) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.hotels.favorite(hotel).then(function (property) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.next = 2;
                                  return this.toastCtrl.create({
                                    buttons: [{
                                      handler: function handler() {
                                        console.log('Close clicked');
                                      }
                                    }],
                                    message: 'Hotel added on Favorites list.',
                                    duration: 2000,
                                    position: 'bottom'
                                  });

                                case 2:
                                  toast = _context2.sent;
                                  toast.present();

                                case 4:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "share",
          value: function share() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var actionSheet;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.asCtrl.create({
                        header: 'Share Hotel:',
                        buttons: [{
                          text: 'Facebook',
                          role: 'facebook',
                          icon: 'logo-facebook',
                          handler: function handler() {
                            console.log('Facebook clicked');
                          }
                        }, {
                          text: 'Twitter',
                          icon: 'logo-twitter',
                          handler: function handler() {
                            console.log('Twitter clicked');
                          }
                        }, {
                          text: 'Google+',
                          icon: 'logo-googleplus',
                          handler: function handler() {
                            console.log('Google+ clicked');
                          }
                        }, {
                          text: 'Instagram',
                          icon: 'logo-instagram',
                          handler: function handler() {
                            console.log('Instagram clicked');
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context4.sent;
                      _context4.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "range",
          value: function range(n) {
            return new Array(n);
          }
        }, {
          key: "avgRating",
          value: function avgRating() {
            var average = 0;
            this.hotel.reviews.forEach(function (val, key) {
              average += val.rating;
            });
            return average / this.hotel.reviews.length;
          }
        }]);

        return HotelDetailPage;
      }();

      HotelDetailPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"]
        }, {
          type: _providers__WEBPACK_IMPORTED_MODULE_3__["HotelProvider"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      HotelDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hotel-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./hotel-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hotel-detail/hotel-detail.page.html"))["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('staggerIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          opacity: 0,
          transform: "translate3d(0,10px,0)"
        }), {
          optional: true
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('600ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          opacity: 1,
          transform: "translate3d(0,0,0)"
        }))]), {
          optional: true
        })])])],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./hotel-detail.page.scss */
        "./src/app/pages/hotel-detail/hotel-detail.page.scss"))["default"]]
      })], HotelDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-hotel-detail-hotel-detail-module-es5.js.map