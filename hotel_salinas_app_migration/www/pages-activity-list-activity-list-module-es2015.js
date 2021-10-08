(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activity-list-activity-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activity-list/activity-list.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activity-list/activity-list.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'app.pages.activitylist.title.header' | translate }}</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      <h6 class=\"ion-no-margin\">({{ trips.length }}) Results Found!</h6>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding animated fadeIn\">\n  <div [@staggerIn]='trips.length'>\n    <ion-card class=\"ion-no-margin ion-margin-bottom tripsCard\" tappable routerLink=\"/activity-detail/{{trip.id}}\" *ngFor=\"let trip of trips; let i = index\">\n      <ion-img [src]=\"trip.thumb\"></ion-img>\n    \n      <ion-card-subtitle>\n        <ion-badge color=\"warning\">\n          <ion-icon name=\"time\"></ion-icon> {{ trip.time }}\n        </ion-badge>\n      </ion-card-subtitle>\n      <ion-card-title color=\"light\">{{ trip.name }}</ion-card-title>\n      <div class=\"shadow\"></div>\n      <ion-card-content>\n        <ion-badge slot=\"start\" color=\"dark\" class=\"rooms\">\n          <ion-icon name=\"book\" color=\"secondary\"></ion-icon>\n          {{ trip.sub_name }}\n        </ion-badge>\n    \n        <ion-badge slot=\"end\" color=\"success\" class=\"price\">\n          <h3><strong>{{ trip.price_adult | currency:'$':'code' }}</strong></h3>\n        </ion-badge>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/activity-list/activity-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/activity-list/activity-list.module.ts ***!
  \*************************************************************/
/*! exports provided: ActivityListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityListPageModule", function() { return ActivityListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _activity_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activity-list.page */ "./src/app/pages/activity-list/activity-list.page.ts");








const routes = [
    {
        path: '',
        component: _activity_list_page__WEBPACK_IMPORTED_MODULE_7__["ActivityListPage"]
    }
];
let ActivityListPageModule = class ActivityListPageModule {
};
ActivityListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_activity_list_page__WEBPACK_IMPORTED_MODULE_7__["ActivityListPage"]]
    })
], ActivityListPageModule);



/***/ }),

/***/ "./src/app/pages/activity-list/activity-list.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/activity-list/activity-list.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\nion-card.tripsCard {\n  position: relative;\n}\n\nion-card.tripsCard ion-img {\n  margin-bottom: -3px;\n}\n\nion-card.tripsCard ion-card-subtitle {\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  z-index: 2;\n}\n\nion-card.tripsCard ion-card-title {\n  font-size: 18px;\n  position: absolute;\n  top: 15%;\n  left: 5%;\n  z-index: 2;\n  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);\n}\n\nion-card.tripsCard ion-card-content {\n  width: 100%;\n  position: absolute;\n  z-index: 3;\n  bottom: 0;\n}\n\nion-card.tripsCard .shadow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  box-shadow: inset 0 0 15rem rgba(var(--ion-color-dark-rgb), 0.95);\n}\n\nion-card.tripsCard .price {\n  right: 2%;\n  bottom: 20%;\n  position: absolute;\n}\n\nion-card.tripsCard .rooms {\n  left: 0;\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWN0aXZpdHktbGlzdC9hY3Rpdml0eS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdGQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUVJO0VBQ0UsbUJBQUE7QUFBTjs7QUFFSTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBQU47O0FBRUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQ0FBQTtBQUFOOztBQUVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFBTjs7QUFFSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxpRUFBQTtBQUFOOztBQUVJO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUVJO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUFOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWN0aXZpdHktbGlzdC9hY3Rpdml0eS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKVxuICB9XG59XG5cbmlvbi1jYXJkLnRyaXBzQ2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGlvbi1pbWcge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTNweDtcbiAgICB9XG4gICAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1JTtcbiAgICAgIGxlZnQ6IDUlO1xuICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxNSU7XG4gICAgICBsZWZ0OiA1JTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgwLDAsMCwuNCk7XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAzO1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgICAuc2hhZG93IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVyZW0gcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuOTUpXG4gICAgfVxuICAgIC5wcmljZSB7XG4gICAgICByaWdodDogMiU7XG4gICAgICBib3R0b206IDIwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLnJvb21zIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/activity-list/activity-list.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/activity-list/activity-list.page.ts ***!
  \***********************************************************/
/*! exports provided: ActivityListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityListPage", function() { return ActivityListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");





let ActivityListPage = class ActivityListPage {
    constructor(navCtrl, tripsService) {
        this.navCtrl = navCtrl;
        this.tripsService = tripsService;
        this.numDays = 3;
    }
    ngOnInit() {
        this.trips = this.tripsService.getAll();
    }
};
ActivityListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["ActivitiesService"] }
];
ActivityListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./activity-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activity-list/activity-list.page.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('600ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./activity-list.page.scss */ "./src/app/pages/activity-list/activity-list.page.scss")).default]
    })
], ActivityListPage);



/***/ })

}]);
//# sourceMappingURL=pages-activity-list-activity-list-module-es2015.js.map