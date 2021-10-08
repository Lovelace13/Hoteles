(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-walkthrough-walkthrough-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/walkthrough/walkthrough.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/walkthrough/walkthrough.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\n        <ion-slides pager=\"true\" dir=\"ltr\" options=\"slideOpts\">\n          <ion-slide *ngFor=\"let slide of slideList\" class=\"ion-padding bg-profile\">\n            <div class=\"ion-margin-bottom\">\n              <img [src]=\"slide.image\" alt=\"ionBooking icons\" class=\"ion-margin-bottom slide-image animated fadeInDown slow\">\n              <h3 class=\"slide-title text-white animated fadeIn\" [innerHTML]=\"slide.title\"></h3>\n              <ion-text color=\"light\">\n                <p [innerHTML]=\"slide.description\" class=\"animated fadeIn\"></p>\n              </ion-text>\n\n              <ion-button size=\"large\" expand=\"full\" shape=\"round\" color=\"secondary\"  class=\"ion-margin-top\" (click)=\"onSlideNext()\">\n                Next\n                <ion-icon name=\"arrow-forward-circle-sharp\" slot=\"end\"></ion-icon>\n              </ion-button>\n            </div>\n\n          </ion-slide>\n          <ion-slide class=\"bg-profile\">\n            <div class=\"ion-padding w100\">\n              <img src=\"assets/Oceana_/Recursos/Oceana-.png\" alt=\"ionBooking\" class=\"slide-image animated fadeInDown slow\">\n              <h2 class=\"ion-margin-bottom slide-title text-white\">Ready to Book?</h2>\n\n              <hr>\n\n              <ion-button expand=\"full\" shape=\"round\" color=\"secondary\" size=\"large\" class=\"ion-margin-top\" (click)=\"openLoginPage()\">\n                Sign In / Sign Up\n              </ion-button>\n              <ion-button expand=\"full\" shape=\"round\" size=\"large\" color=\"secondary\" class=\"ion-margin-top\" (click)=\"openHomePage()\">\n                Get Started\n              </ion-button>\n            </div>\n\n          </ion-slide>\n        </ion-slides>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/walkthrough/walkthrough.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/walkthrough/walkthrough.module.ts ***!
  \*********************************************************/
/*! exports provided: WalkthroughPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function() { return WalkthroughPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _walkthrough_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walkthrough.page */ "./src/app/pages/walkthrough/walkthrough.page.ts");







// import { TabsPage } from '../tabs/tabs.page';
const routes = [
    {
        path: '',
        component: _walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughPage"]
    },
];
let WalkthroughPageModule = class WalkthroughPageModule {
};
WalkthroughPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughPage"]]
    })
], WalkthroughPageModule);



/***/ }),

/***/ "./src/app/pages/walkthrough/walkthrough.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/walkthrough/walkthrough.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\n\n.slide-title {\n  margin-top: 0;\n}\n\n.slide-image {\n  max-width: 230px !important;\n  margin: 0 0 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2Fsa3Rocm91Z2gvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUVFO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2Fsa3Rocm91Z2gvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuc2xpZGUtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cblxuICAuc2xpZGUtaW1hZ2Uge1xuICAgIG1heC13aWR0aDogMjMwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgMCA3MHB4O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/walkthrough/walkthrough.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/walkthrough/walkthrough.page.ts ***!
  \*******************************************************/
/*! exports provided: WalkthroughPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPage", function() { return WalkthroughPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let WalkthroughPage = class WalkthroughPage {
    constructor(navCtrl, menuCtrl, router) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.showSkip = true;
        this.slideOpts = {
            effect: 'flip',
            speed: 1000
        };
        this.dir = 'ltr';
        this.slideList = [
            {
                title: 'Welcome to <strong>Oceana</strong>',
                description: 'Oceana is your best choice to stay in Galapagos Island ...',
                //image: 'assets/img/hotel-sp01.png',
                image: 'assets/Oceana_/Recursos/Oceana-.png',
            },
            {
                title: 'Why Oceana?',
                description: 'Because we count with so many years on the hotel industry to bring you the best experience throug ...',
                //image: 'assets/img/hotel-sp02.png',
                image: 'assets/Oceana_/Recursos/Oceana-.png',
            },
            {
                title: 'Your Vacation is coming!',
                description: 'Come to Oceana and let us ...',
                //image: 'assets/img/hotel-sp03.png',
                image: 'assets/Oceana_/Recursos/Oceana-.png',
            }
        ];
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
    }
    onSlideNext() {
        this.slides.slideNext(1000, false);
    }
    onSlidePrev() {
        this.slides.slidePrev(300);
    }
    openHomePage() {
        this.navCtrl.navigateRoot('/home');
    }
    openLoginPage() {
        this.navCtrl.navigateForward('/login');
    }
};
WalkthroughPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WalkthroughPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], { static: true },] }]
};
WalkthroughPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-walkthrough',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./walkthrough.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/walkthrough/walkthrough.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./walkthrough.page.scss */ "./src/app/pages/walkthrough/walkthrough.page.scss")).default]
    })
], WalkthroughPage);



/***/ })

}]);
//# sourceMappingURL=pages-walkthrough-walkthrough-module-es2015.js.map