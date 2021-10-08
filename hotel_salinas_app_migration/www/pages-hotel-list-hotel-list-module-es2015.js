(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hotel-list-hotel-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hotel-list/hotel-list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hotel-list/hotel-list.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.hotellist.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      <h6 class=\"ion-no-margin\">({{ hotels?.length || '0' }}) {{ 'app.label.resultsf' | translate }}</h6>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animated fadeIn\">\n\n  <div class=\"ion-padding\">\n\n    <ion-segment [(ngModel)]=\"hotelLists\" (ionChange)=\"segmentChanged($event)\" color=\"light\">\n      <ion-segment-button value=\"cardlist\">\n        <ion-icon name=\"apps\" color=\"tertiary\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"linelist\">\n        <ion-icon name=\"list\" color=\"tertiary\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"maplist\">\n        <ion-icon name=\"map\" color=\"tertiary\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n\n    <div [ngSwitch]=\"hotelLists\">\n      <div *ngSwitchCase=\"'cardlist'\" [@staggerIn]='hotels?.length'>\n        <!-- # -->\n        <ion-card class=\"ion-no-margin ion-margin-bottom hotelsCard\" tappable routerLink=\"/hotel-detail/{{hotel.id}}\" *ngFor=\"let hotel of hotels; let i = index\">\n          <ion-img [src]=\"hotel.thumb\"></ion-img>\n        \n          <ion-card-subtitle>\n            <ion-badge color=\"warning\">\n              <ion-icon name=\"star\"></ion-icon> {{ hotel.rating }}\n            </ion-badge>\n          </ion-card-subtitle>\n          <ion-card-title color=\"light\">{{ hotel.name }}</ion-card-title>\n          <div class=\"shadow\"></div>\n          <ion-card-content>\n            <ion-badge slot=\"start\" color=\"dark\" class=\"rooms\">\n              <ion-icon name=\"book\" color=\"secondary\"></ion-icon>\n              {{ hotel.numb_available_rooms }} {{ 'app.label.availrooms' | translate }}\n            </ion-badge>\n        \n            <ion-badge slot=\"end\" color=\"success\" class=\"price\">\n              <h3><strong>{{ hotel.price | currency:'$':'code' }}</strong></h3>\n            </ion-badge>\n          </ion-card-content>\n        </ion-card>\n        <!-- # -->\n      </div>\n      <div *ngSwitchCase=\"'linelist'\" [@staggerIn]='hotels.length'>\n        <!-- # -->\n        <ion-item color=\"primary\" tappable routerLink=\"/hotel-detail/{{hotel.id}}\" class=\"ion-margin-bottom\" *ngFor=\"let hotel of hotels; let i = index\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"hotel.thumb\">\n          </ion-thumbnail>\n          <ion-label>\n            <h2><strong>{{ hotel.name }}</strong></h2>\n            <h3>\n              <ion-badge slot=\"start\" color=\"secondary\" class=\"rooms\">\n                <ion-icon name=\"book\" color=\"tertiary\"></ion-icon>\n                {{ hotel.numb_available_rooms }} {{ 'app.label.availrooms' | translate }}\n              </ion-badge>\n            </h3>\n            <ion-badge color=\"warning\">\n              <ion-icon name=\"star\"></ion-icon> {{ hotel.rating }}\n            </ion-badge>\n          </ion-label>\n        </ion-item>\n        <!-- # -->\n      </div>\n      <div *ngSwitchCase=\"'maplist'\">\n        <!-- # -->\n        <agm-map [latitude]=\"hotels[0].location.lat\" [longitude]=\"hotels[0].location.lon\" [zoom]=\"10\" [styles]=\"agmStyles\">\n          <agm-marker *ngFor=\"let hotel of hotels\" [latitude]=\"hotel.location.lat\" [longitude]=\"hotel.location.lon\">\n            <agm-info-window>\n              <ion-item tappable routerLink=\"/hotel-detail/{{hotel.id}}\">\n                <ion-thumbnail slot=\"start\">\n                  <img [src]=\"hotel.thumb\">\n                </ion-thumbnail>\n                <ion-label>\n                  <ion-text color=\"primary\">\n                    <h2><strong>{{ hotel.name }}</strong></h2>\n                  </ion-text>\n                  \n                  <h3>\n                    <ion-badge slot=\"start\" color=\"secondary\" class=\"rooms\">\n                      <ion-icon name=\"book\" color=\"tertiary\"></ion-icon>\n                      {{ hotel.numb_available_rooms }} {{ 'app.label.availrooms' | translate }}\n                    </ion-badge>\n                  </h3>\n                  <ion-badge color=\"warning\">\n                    <ion-icon name=\"star\"></ion-icon> {{ hotel.rating }}\n                  </ion-badge>\n                </ion-label>\n              </ion-item>\n            </agm-info-window>\n          </agm-marker>\n        </agm-map>\n        <!-- # -->\n      </div>\n    </div>\n    <!-- # -->\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/hotel-list/hotel-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/hotel-list/hotel-list.module.ts ***!
  \*******************************************************/
/*! exports provided: HotelListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelListPageModule", function() { return HotelListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _hotel_list_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hotel-list.page */ "./src/app/pages/hotel-list/hotel-list.page.ts");









const routes = [
    {
        path: '',
        component: _hotel_list_page__WEBPACK_IMPORTED_MODULE_8__["HotelListPage"]
    }
];
let HotelListPageModule = class HotelListPageModule {
};
HotelListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
            })
        ],
        declarations: [_hotel_list_page__WEBPACK_IMPORTED_MODULE_8__["HotelListPage"]]
    })
], HotelListPageModule);



/***/ }),

/***/ "./src/app/pages/hotel-list/hotel-list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/hotel-list/hotel-list.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary)) ;\n}\n\nagm-map {\n  height: 72vh;\n}\n\nagm-map .gmnoprint {\n  display: none !important;\n}\n\nion-card.hotelsCard {\n  position: relative;\n}\n\nion-card.hotelsCard ion-img {\n  margin-bottom: -3px;\n}\n\nion-card.hotelsCard ion-card-subtitle {\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  z-index: 2;\n}\n\nion-card.hotelsCard ion-card-title {\n  font-size: 18px;\n  position: absolute;\n  top: 15%;\n  left: 5%;\n  z-index: 2;\n  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);\n}\n\nion-card.hotelsCard ion-card-content {\n  width: 100%;\n  position: absolute;\n  z-index: 3;\n  bottom: 0;\n}\n\nion-card.hotelsCard .shadow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  box-shadow: inset 0 0 15rem rgba(var(--ion-color-dark-rgb), 0.95);\n}\n\nion-card.hotelsCard .price {\n  right: 2%;\n  bottom: 20%;\n  position: absolute;\n}\n\nion-card.hotelsCard .rooms {\n  left: 0;\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG90ZWwtbGlzdC9ob3RlbC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHVGQUFBO0FBQUo7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBR0U7RUFDRSx3QkFBQTtBQURKOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFHRTtFQUNFLG1CQUFBO0FBREo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQURKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7QUFESjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBREo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsaUVBQUE7QUFESjs7QUFHRTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHRTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvdGVsLWxpc3QvaG90ZWwtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKVxuICB9XG59XG5cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogNzJ2aDtcbiAgLmdtbm9wcmludCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbmlvbi1jYXJkLmhvdGVsc0NhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGlvbi1pbWcge1xuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gIH1cbiAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUlO1xuICAgIGxlZnQ6IDUlO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNSU7XG4gICAgbGVmdDogNSU7XG4gICAgei1pbmRleDogMjtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgwLDAsMCwuNCk7XG4gIH1cbiAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgYm90dG9tOiAwO1xuICB9XG4gIC5zaGFkb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVyZW0gcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuOTUpXG4gIH1cbiAgLnByaWNlIHtcbiAgICByaWdodDogMiU7XG4gICAgYm90dG9tOiAyMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIC5yb29tcyB7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/hotel-list/hotel-list.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/hotel-list/hotel-list.page.ts ***!
  \*****************************************************/
/*! exports provided: HotelListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelListPage", function() { return HotelListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");






let HotelListPage = class HotelListPage {
    constructor(navCtrl, translate, hotelService) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.hotelService = hotelService;
        this.hotelLists = 'cardlist';
        this.agmStyles = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].agmStyles;
        this.hotels = this.hotelService.getAll();
    }
    ngOnInit() {
    }
    segmentChanged(ev) {
        console.log('Segment changed', ev);
    }
};
HotelListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["HotelProvider"] }
];
HotelListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hotel-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hotel-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hotel-list/hotel-list.page.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('600ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hotel-list.page.scss */ "./src/app/pages/hotel-list/hotel-list.page.scss")).default]
    })
], HotelListPage);



/***/ })

}]);
//# sourceMappingURL=pages-hotel-list-hotel-list-module-es2015.js.map