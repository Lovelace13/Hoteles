(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\" class=\"animated fadeIn\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"primary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-text color=\"light\">\n        {{ 'app.name' | translate }} <ion-text color=\"secondary\" class=\"fw700\"> {{ 'app.version' | translate }}</ion-text>\n      </ion-text>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"tertiary\" (click)=\"messages()\">\n        <ion-icon name=\"mail\"></ion-icon>\n      </ion-button>\n      <ion-button size=\"small\" shape=\"round\" color=\"tertiary\" (click)=\"editprofile()\">\n        <ion-icon name=\"person\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding animated fadeIn fast\">\n\n  <div class=\"booking-card bg-dark\">\n    <ion-card class=\"searchcard animated fadeIn\">\n      <ion-card-content class=\"ion-no-padding\">\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col class=\"ion-no-padding\">\n              <ion-searchbar [(ngModel)]=\"hotellocation\" (ionInput)=\"getItems($event)\" (ionCancel)=\"showItems = !showItems\" autocomplete=\"on\"\n autocorrect=\"on\" spellcheck=\"true\" animated=\"true\" search-icon=\"pin\" color=\"tertiary\" debounce=\"500\" placeholder=\"Destination or address...\"></ion-searchbar>\n              <ion-list class=\"searchbar-results animated fadeIn\" *ngIf=\"showItems\">\n                <ion-item *ngFor=\"let item of items\" tappable (click)=\"itemSelected(item)\">\n                  <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n                  {{ item }}\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"ion-no-padding ion-no-margin\">\n            <ion-col size=\"6\" class=\"ion-no-padding ion-no-margin ion-text-center br bb datetime-btn\">\n              <ion-item lines=\"none\" class=\"ion-text-center\">\n                <ion-label position=\"stacked\">\n                  <ion-icon name=\"calendar\" slot=\"start\" class=\"text-dark\"></ion-icon>\n                  <ion-text color=\"dark\">{{ checkin.name }}</ion-text>\n                </ion-label>\n\n                <ion-datetime class=\"text-primary\" displayFormat=\"MM/DD/YYYY\" pickerFormat=\"YYYY-MM-DD\" min=\"2019\" max=\"2020\" [(ngModel)]=\"checkin.date\"></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-no-padding ion-no-margin ion-text-center bb datetime-btn\">\n              <ion-item lines=\"none\" class=\"ion-text-center\">\n                <ion-label position=\"stacked\">\n                  <ion-icon name=\"calendar\" slot=\"start\" class=\"text-dark\"></ion-icon>\n                  <ion-text color=\"dark\">{{ checkout.name }}</ion-text>\n                </ion-label>\n                <ion-datetime class=\"text-primary\" displayFormat=\"MM/DD/YYYY\" pickerFormat=\"YYYY-MM-DD\" min=\"2019\" max=\"2020\" [(ngModel)]=\"checkout.date\"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n      <ion-card-content>\n\n        <ion-row class=\"adjust-qts\">\n          <ion-col size=\"4\" class=\"ion-no-padding br bb bl bt\">\n              <ion-item>\n                <ion-label class=\"ion-no-padding text08\">\n                    <ion-text color=\"dark\">{{ 'app.pages.home.label.rooms' | translate }}</ion-text>\n                </ion-label>\n                <ion-select [(ngModel)]=\"rooms\" cancelText=\"Cancel\" okText=\"OK\" color=\"primary\"  class=\"ion-no-padding text1 text-dark\">\n                  <ion-select-option value=\"1\" selected=\"true\">1</ion-select-option>\n                  <ion-select-option value=\"2\">2</ion-select-option>\n                  <ion-select-option value=\"3\">3</ion-select-option>\n                  <ion-select-option value=\"4\">4</ion-select-option>\n                  <ion-select-option value=\"5\">5</ion-select-option>\n                  <ion-select-option value=\"6\">6</ion-select-option>\n                  <ion-select-option value=\"7\">7</ion-select-option>\n                  <ion-select-option value=\"8\">8</ion-select-option>\n                  <ion-select-option value=\"9\">9</ion-select-option>\n                </ion-select>\n              </ion-item>\n          </ion-col>\n          <ion-col size=\"4\" class=\"ion-no-padding br bb bt\">\n\n              <ion-item>\n                <ion-label class=\"ion-no-padding text-primary text08\">\n                  <ion-text color=\"dark\">{{ 'app.pages.home.label.adults' | translate }}</ion-text>\n                </ion-label>\n                <ion-select [(ngModel)]=\"adults\" cancelText=\"Cancel\" okText=\"OK\" class=\"ion-no-padding text1 text-dark\">\n                  <ion-select-option value=\"1\" selected=\"true\">1</ion-select-option>\n                  <ion-select-option value=\"2\">2</ion-select-option>\n                  <ion-select-option value=\"3\">3</ion-select-option>\n                  <ion-select-option value=\"4\">4</ion-select-option>\n                  <ion-select-option value=\"5\">5</ion-select-option>\n                  <ion-select-option value=\"6\">6</ion-select-option>\n                  <ion-select-option value=\"7\">7</ion-select-option>\n                  <ion-select-option value=\"8\">8</ion-select-option>\n                  <ion-select-option value=\"9\">9</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n          </ion-col>\n          <ion-col size=\"4\" class=\"ion-no-padding bb bt br\">\n\n              <ion-item>\n                <ion-label class=\"ion-no-padding ion-no-margin text-primary text08\">\n                  <ion-text color=\"dark\">{{ 'app.pages.home.label.children' | translate }}</ion-text>\n                </ion-label>\n                <ion-select [(ngModel)]=\"children\" cancelText=\"Cancel\" okText=\"OK\" (ngModelChange)=\"childrenArr($event)\" class=\"ion-no-padding text1 text-dark\">\n                  <ion-select-option value=\"0\" selected=\"true\">0</ion-select-option>\n                  <ion-select-option value=\"1\">1</ion-select-option>\n                  <ion-select-option value=\"2\">2</ion-select-option>\n                  <ion-select-option value=\"3\">3</ion-select-option>\n                  <ion-select-option value=\"4\">4</ion-select-option>\n                  <ion-select-option value=\"5\">5</ion-select-option>\n                  <ion-select-option value=\"6\">6</ion-select-option>\n                  <ion-select-option value=\"7\">7</ion-select-option>\n                  <ion-select-option value=\"8\">8</ion-select-option>\n                  <ion-select-option value=\"9\">9</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-no-padding\">\n        \n          </ion-col>\n        </ion-row>\n        \n        <ion-row *ngIf=\"children > 0\" class=\"animated fadeIn\">\n          <ion-col size=\"12\" class=\"ion-padding-vertical\">\n            <ion-text color=\"primary\" class=\"ion-text-center\">\n              <h3 class=\"bold\" *ngIf=\"children > 0 && children < 2\">{{ 'app.pages.home.label.childage' | translate }}</h3>\n              <h3 class=\"bold\" *ngIf=\"children > 1\">{{ 'app.pages.home.label.childrenages' | translate }}</h3>\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-no-padding bb bt br bl\" *ngFor=\"let child of childs; let i = index\">\n\n              <ion-item>\n                <ion-label class=\"ion-no-padding ion-no-margin text-primary text08\">\n                  <ion-text color=\"dark\">{{ 'app.pages.home.label.child' | translate }} {{ i + 1 }}</ion-text>\n                </ion-label>\n                <ion-select cancelText=\"Cancel\" okText=\"OK\" class=\"ion-no-padding text08 text-dark\">\n                  <ion-select-option value=\"0\" selected=\"true\">0</ion-select-option>\n                  <ion-select-option value=\"1\">1</ion-select-option>\n                  <ion-select-option value=\"2\">2</ion-select-option>\n                  <ion-select-option value=\"3\">3</ion-select-option>\n                  <ion-select-option value=\"4\">4</ion-select-option>\n                  <ion-select-option value=\"5\">5</ion-select-option>\n                  <ion-select-option value=\"6\">6</ion-select-option>\n                  <ion-select-option value=\"7\">7</ion-select-option>\n                  <ion-select-option value=\"8\">8</ion-select-option>\n                  <ion-select-option value=\"9\">9</ion-select-option>\n                  <ion-select-option value=\"10\">10</ion-select-option>\n                  <ion-select-option value=\"11\">11</ion-select-option>\n                  <ion-select-option value=\"12\">12</ion-select-option>\n                  <ion-select-option value=\"13\">13</ion-select-option>\n                  <ion-select-option value=\"14\">14</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n          </ion-col>         \n        </ion-row>\n        <ion-row class=\"adjust-qts\">\n          <ion-col size=\"12\" class=\"ion-no-padding ion-margin-top ion-margin-bottom bb bt br bl\">\n\n              <ion-item>\n                <ion-label class=\"ion-no-padding ion-no-margin text-primary text08\">\n                  <ion-text color=\"dark\">{{ 'app.pages.home.label.pamenities' | translate }}</ion-text>\n                </ion-label>\n                <ion-select multiple=\"true\" cancelText=\"Cancel\" okText=\"OK\" class=\"ion-no-padding text08 text-dark\">\n                  <ion-select-option value=\"0\" selected=\"true\">Wifi</ion-select-option>\n                  <ion-select-option value=\"1\">Conference</ion-select-option>\n                  <ion-select-option value=\"2\">Pool</ion-select-option>\n                  <ion-select-option value=\"3\">Free Parking</ion-select-option>\n                  <ion-select-option value=\"4\">Free Breakfast</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n          </ion-col>          \n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-button icon-left shape=\"round\" size=\"full\" color=\"secondary\" (click)=\"viewHotels()\">\n              <ion-ripple-effect></ion-ripple-effect>\n              <ion-icon name=\"search\"></ion-icon>\n              {{ 'app.button.search' | translate }}\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-text color=\"primary\">\n      <h3><ion-icon size=\"small\" color=\"dark\" name=\"map\"></ion-icon> {{ 'app.pages.home.title.nearyou' | translate }}</h3>\n    </ion-text>\n\n    <ion-card class=\"animated fadeIn\">\n      <ion-card-content class=\"ion-no-padding\">\n        <agm-map *ngIf=\"hotelList\" [latitude]=\"hotel_lat\" [longitude]=\"hotel_lon\" [zoom]=\"10\" [styles]=\"agmStyles\">\n          <agm-marker *ngFor=\"let hotel of hotelList\" [latitude]=\"hotel.location.lat\" [longitude]=\"hotel.location.lon\">\n              <agm-info-window>\n                  <ion-item tappable routerLink=\"/hotel-detail/{{hotel.id}}\">\n                    <ion-thumbnail slot=\"start\">\n                      <img [src]=\"hotel.thumb\">\n                    </ion-thumbnail>\n                    <ion-label>\n                      <ion-text color=\"primary\">\n                        <h2><strong>{{ hotel.name }}</strong></h2>\n                      </ion-text>\n                      \n                      <h3>\n                        <ion-badge slot=\"start\" color=\"secondary\" class=\"rooms\">\n                          <ion-icon name=\"book\" color=\"tertiary\"></ion-icon>\n                          {{ hotel.numb_available_rooms }} {{ 'app.pages.home.label.availrooms' | translate }}\n                        </ion-badge>\n                      </h3>\n                      <ion-badge color=\"warning\">\n                        <ion-icon name=\"star\"></ion-icon> {{ hotel.rating }}\n                      </ion-badge>\n                    </ion-label>\n                  </ion-item>\n                </agm-info-window>            \n          </agm-marker>\n        </agm-map>\n      </ion-card-content>\n    </ion-card>\n\n    <hr class=\"bg-tertiary\">\n\n    <ion-text color=\"primary\">\n      <h3><ion-icon size=\"small\" color=\"dark\" name=\"bookmark\"></ion-icon> {{ 'app.pages.home.title.recommended' | translate }}</h3>\n    </ion-text>\n\n    <ion-slides pager=\"true\" class=\"ion-margin-bottom\">\n      <ion-slide *ngFor=\"let hotel of hotelList | slice:0:4; let i = index\">\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-card class=\"hotelsCard\" tappable routerLink=\"/hotel-detail/{{hotel.id}}\">\n                <ion-img [src]=\"hotel.thumb\"></ion-img>\n\n                <ion-card-subtitle>\n                  <ion-badge color=\"warning\">\n                    <ion-icon name=\"star\"></ion-icon> {{ hotel.rating }}\n                  </ion-badge>\n                </ion-card-subtitle>\n                <ion-card-title color=\"light\">{{ hotel.name }}</ion-card-title>\n                <div class=\"shadow\"></div>\n                <ion-card-content>\n                  <ion-badge slot=\"start\" color=\"dark\" class=\"rooms\">\n                    <ion-icon name=\"book\" color=\"secondary\"></ion-icon>\n                    {{ hotel.numb_available_rooms }} {{ 'app.pages.home.label.availrooms' | translate }}\n                  </ion-badge>\n\n                  <ion-badge slot=\"end\" color=\"success\" class=\"price\">\n                    <h3><strong>{{ hotel.price | currency:'$':'code' }}</strong></h3>  \n                  </ion-badge> \n                </ion-card-content>               \n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </ion-slide>\n    </ion-slides>\n\n    <hr class=\"bg-tertiary\">\n\n    <ion-text color=\"primary\">\n      <h3><ion-icon size=\"small\" color=\"secondary\" name=\"bookmarks\"></ion-icon> {{ 'app.pages.home.title.latestbookings' | translate }}</h3>\n    </ion-text>\n\n    <ion-card>\n      <ion-list>\n          <ion-item color=\"secondary\" tappable routerLink=\"/hotel-detail/{{hotel.id}}\" *ngFor=\"let hotel of hotelList | slice:4:8; let i = index\">\n              <ion-thumbnail slot=\"start\">\n                <img [src]=\"hotel.thumb\">\n              </ion-thumbnail>\n              <ion-label>\n                <h2><strong>{{ hotel.name }}</strong></h2>\n                <h3>\n                  <ion-badge slot=\"start\" color=\"secondary\" class=\"rooms\">\n                    <ion-icon name=\"book\" color=\"tertiary\"></ion-icon>\n                    {{ hotel.numb_available_rooms }} {{ 'app.pages.home.label.availrooms' | translate }}\n                  </ion-badge>                \n                </h3>\n                <ion-badge color=\"warning\">\n                    <ion-icon name=\"star\"></ion-icon> {{ hotel.rating }}\n                  </ion-badge>           \n              </ion-label>\n            </ion-item>\n      </ion-list>\n    </ion-card>\n  </div>\n  <!-- ## -->\n  <!-- ## -->\n  <!-- <popmenu></popmenu> -->\n</ion-content>\n\n<ion-footer class=\"animated fadeIn\">\n  <ion-toolbar color=\"primary\">\n    <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col size=\"4\" class=\"ion-no-padding\">\n            <ion-button size=\"small\" shape=\"round\" expand=\"full\" fill=\"clear\" color=\"tertiary\" routerLink=\"/rentcar\">\n              <ion-icon slot=\"start\" name=\"car\"></ion-icon>\n              {{ 'app.pages.menu.rentacar' | translate }}\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"4\" class=\"ion-no-padding\">\n            <ion-button size=\"small\" shape=\"round\" expand=\"full\" fill=\"clear\" color=\"tertiary\" routerLink=\"/activities\">\n              <ion-icon slot=\"start\" name=\"beer\"></ion-icon>\n              {{ 'app.pages.menu.activitiestab' | translate }}\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"4\" class=\"ion-no-padding\">\n            <ion-button size=\"small\" shape=\"round\" expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"settings()\">\n              <ion-icon slot=\"start\" name=\"cog\"></ion-icon>\n              {{ 'app.pages.menu.settings' | translate }}\n            </ion-button>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]
                }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
            })
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light));\n}\n:host ion-list.list-md {\n  padding: 0;\n}\nion-content {\n  padding-bottom: 120px;\n}\nagm-map {\n  height: 180px;\n}\nagm-map .gmnoprint {\n  display: none !important;\n}\nion-card.hotelsCard {\n  position: relative;\n}\nion-card.hotelsCard ion-img {\n  margin-bottom: -3px;\n}\nion-card.hotelsCard ion-card-subtitle {\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  z-index: 2;\n}\nion-card.hotelsCard ion-card-title {\n  font-size: 18px;\n  position: absolute;\n  top: 15%;\n  left: 5%;\n  z-index: 2;\n  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);\n}\nion-card.hotelsCard ion-card-content {\n  width: 100%;\n  position: absolute;\n  z-index: 3;\n  bottom: 0;\n}\nion-card.hotelsCard .shadow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  box-shadow: inset 0 0 15rem rgba(var(--ion-color-dark-rgb), 0.95);\n}\nion-card.hotelsCard .price {\n  right: 2%;\n  bottom: 20%;\n  position: absolute;\n}\nion-card.hotelsCard .rooms {\n  left: 0;\n  position: absolute;\n  bottom: 0;\n}\n.booking-card {\n  margin: -20px -20px 40px;\n  padding: 20px;\n  height: 60px;\n}\n.booking-card ion-card {\n  width: 100%;\n  background-color: #fff;\n  margin: 0 0 20px;\n}\n.booking-card ion-card.searchcard ion-item::shadow {\n  --inner-border-width: 0;\n}\n.booking-card ion-searchbar {\n  border-bottom: 1px solid rgba(79, 36, 172, 0.1);\n}\n.booking-card .br {\n  border-right: 1px solid rgba(79, 36, 172, 0.1);\n}\n.booking-card .bb {\n  border-bottom: 1px solid rgba(79, 36, 172, 0.1);\n}\n.booking-card .adjust-qts {\n  margin: 0 -20px 0;\n}\n.booking-card .datetime-btn {\n  background-color: rgba(79, 36, 172, 0.06);\n}\n.booking-card .datetime-btn ion-icon {\n  color: var(--ion-color-primary);\n}\n.booking-card .searchbar {\n  z-index: 1000;\n}\n.booking-card .searchbar-results {\n  position: absolute;\n  top: 50px;\n  left: 12px;\n  right: 12px;\n  z-index: 999;\n  padding-top: 12px;\n  border-radius: 12px;\n  box-shadow: 0 0 1px rgba(79, 36, 172, 0.06), 0 2px 4px rgba(79, 36, 172, 0.1), 0 0 100rem rgba(79, 36, 172, 0.85);\n}\n.booking-card .searchbar-results .item {\n  color: rgba(79, 36, 172, 0.85);\n}\n.br {\n  border-right: 1px solid rgba(79, 36, 172, 0.1);\n}\n.bb {\n  border-bottom: 1px solid rgba(79, 36, 172, 0.1);\n}\n.bt {\n  border-top: 1px solid rgba(79, 36, 172, 0.1);\n}\n.bl {\n  border-left: 1px solid rgba(79, 36, 172, 0.1);\n}\n.datetime-btn {\n  padding-top: 0;\n  padding-bottom: 0;\n  background-color: rgba(79, 36, 172, 0.06);\n}\n.datetime-btn ion-icon {\n  color: var(--ion-color-primary);\n}\n.datetime-btn ion-datetime {\n  padding-top: 5px;\n}\nion-select {\n  font-weight: 500;\n}\nion-select .select-icon {\n  position: relative;\n  width: 14px;\n  height: 18px;\n}\nion-scroll {\n  padding-bottom: 96px;\n}\nion-slide {\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHVGQUFBO0FBQUo7QUFJSTtFQUNFLFVBQUE7QUFGTjtBQU9BO0VBQ0UscUJBQUE7QUFKRjtBQU9BO0VBQ0UsYUFBQTtBQUpGO0FBS0U7RUFDRSx3QkFBQTtBQUhKO0FBT0E7RUFDRSxrQkFBQTtBQUpGO0FBS0U7RUFDRSxtQkFBQTtBQUhKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUhKO0FBS0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQ0FBQTtBQUhKO0FBS0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUhKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsaUVBQUE7QUFISjtBQUtFO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUhKO0FBS0U7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBSEo7QUFPQTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFKRjtBQUtFO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQVNRO0VBQ0UsdUJBQUE7QUFQVjtBQWFFO0VBQ0UsK0NBQUE7QUFYSjtBQWFFO0VBQ0UsOENBQUE7QUFYSjtBQWFFO0VBQ0UsK0NBQUE7QUFYSjtBQWFFO0VBQ0UsaUJBQUE7QUFYSjtBQWFFO0VBQ0UseUNBQUE7QUFYSjtBQVlJO0VBQ0UsK0JBQUE7QUFWTjtBQWFFO0VBQ0UsYUFBQTtBQVhKO0FBYUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUhBQUE7QUFYSjtBQVlJO0VBQ0UsOEJBQUE7QUFWTjtBQWVBO0VBQ0UsOENBQUE7QUFaRjtBQWNBO0VBQ0UsK0NBQUE7QUFYRjtBQWNBO0VBQ0UsNENBQUE7QUFYRjtBQWNBO0VBQ0UsNkNBQUE7QUFYRjtBQWNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7QUFYRjtBQVlFO0VBQ0UsK0JBQUE7QUFWSjtBQVlFO0VBQ0UsZ0JBQUE7QUFWSjtBQWNBO0VBRUUsZ0JBQUE7QUFaRjtBQWFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVhKO0FBZUE7RUFDRSxvQkFBQTtBQVpGO0FBZUE7RUFDRSxvQkFBQTtBQVpGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pLCB2YXIoLS1pb24tY29sb3ItbGlnaHQpKTtcbiAgfVxuXG4gIGlvbi1saXN0IHtcbiAgICAmLmxpc3QtbWQge1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDE4MHB4O1xuICAuZ21ub3ByaW50IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaW9uLWNhcmQuaG90ZWxzQ2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaW9uLWltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcbiAgfVxuICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNSU7XG4gICAgbGVmdDogNSU7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1JTtcbiAgICBsZWZ0OiA1JTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIH1cbiAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgYm90dG9tOiAwO1xuICB9XG4gIC5zaGFkb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVyZW0gcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjk1KTtcbiAgfVxuICAucHJpY2Uge1xuICAgIHJpZ2h0OiAyJTtcbiAgICBib3R0b206IDIwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLnJvb21zIHtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gIH1cbn1cblxuLmJvb2tpbmctY2FyZCB7XG4gIG1hcmdpbjogLTIwcHggLTIwcHggNDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBpb24tY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgIC8vICY6bGFzdC1vZi10eXBlIHtcbiAgICAvLyAgIG1hcmdpbi1ib3R0b206IDg2cHg7XG4gICAgLy8gfVxuICAgICYuc2VhcmNoY2FyZCB7XG4gICAgICBpb24taXRlbSB7XG4gICAgICAgICY6OnNoYWRvdyB7XG4gICAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24tc2VhcmNoYmFyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg3OSwgMzYsIDE3MiwgMC4xKTtcbiAgfVxuICAuYnIge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNzksIDM2LCAxNzIsIDAuMSk7XG4gIH1cbiAgLmJiIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg3OSwgMzYsIDE3MiwgMC4xKTtcbiAgfVxuICAuYWRqdXN0LXF0cyB7XG4gICAgbWFyZ2luOiAwIC0yMHB4IDA7XG4gIH1cbiAgLmRhdGV0aW1lLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3OSwgMzYsIDE3MiwgMC4wNik7XG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbiAgLnNlYXJjaGJhciB7XG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuICAuc2VhcmNoYmFyLXJlc3VsdHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwcHg7XG4gICAgbGVmdDogMTJweDtcbiAgICByaWdodDogMTJweDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoNzksIDM2LCAxNzIsIDAuMDYpLCAwIDJweCA0cHggcmdiYSg3OSwgMzYsIDE3MiwgMC4xKSwgMCAwIDEwMHJlbSByZ2JhKDc5LCAzNiwgMTcyLCAwLjg1KTtcbiAgICAuaXRlbSB7XG4gICAgICBjb2xvcjogcmdiYSg3OSwgMzYsIDE3MiwgMC44NSk7XG4gICAgfVxuICB9XG59XG5cbi5iciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNzksIDM2LCAxNzIsIDAuMSk7XG59XG4uYmIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg3OSwgMzYsIDE3MiwgMC4xKTtcbn1cblxuLmJ0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNzksIDM2LCAxNzIsIDAuMSk7XG59XG5cbi5ibCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSg3OSwgMzYsIDE3MiwgMC4xKTtcbn1cblxuLmRhdGV0aW1lLWJ0biB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3OSwgMzYsIDE3MiwgMC4wNik7XG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIGlvbi1kYXRldGltZSB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxufVxuXG5pb24tc2VsZWN0IHtcbiAgLy8gd2lkdGg6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC5zZWxlY3QtaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgfVxufVxuXG5pb24tc2Nyb2xsIHtcbiAgcGFkZGluZy1ib3R0b206IDk2cHg7XG59XG5cbmlvbi1zbGlkZSB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers */ "./src/app/providers/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





let HomePage = class HomePage {
    constructor(navCtrl, menuCtrl, loadingCtrl, translate, hotels) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.hotels = hotels;
        this.openMenu = false;
        this.searchQuery = '';
        this.showItems = false;
        this.childs = 0;
        this.agmStyles = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].agmStyles;
        // search conditions
        this.checkin = {
            name: this.translate.get('app.pages.home.label.checkin'),
            date: new Date().toISOString()
        };
        this.checkout = {
            name: this.translate.get('app.pages.home.label.checkout'),
            date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString()
        };
        this.hotelList = hotels.getAll();
        this.hotel_lat = hotels.HOTEL_LAT;
        this.hotel_lon = hotels.HOTEL_LON;
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true);
    }
    initializeItems() {
        this.items = [
            'La Belle Place - Rio de Janeiro',
            'Marshall Hotel - Marshall Islands',
            'Maksoud Plaza - São Paulo',
            'Hotel Copacabana - Rio de Janeiro',
            'Pousada Marés do amanhã - Maragogi'
        ];
    }
    itemSelected(item) {
        this.hotellocation = item;
        this.showItems = false;
    }
    childrenArr(chil) {
        const child = Number(chil);
        this.childs = Array(child).fill(0).map((v, i) => i);
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.showItems = true;
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.showItems = false;
        }
    }
    viewHotels() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                duration: 2000
            });
            loader.present();
            loader.onWillDismiss().then(() => {
                this.navCtrl.navigateForward('hotel-list');
            });
        });
    }
    editprofile() {
        this.navCtrl.navigateForward('edit-profile');
    }
    settings() {
        this.navCtrl.navigateForward('settings');
    }
    goToWalk() {
        this.navCtrl.navigateRoot('walkthrough');
    }
    logout() {
        this.navCtrl.navigateRoot('login');
    }
    register() {
        this.navCtrl.navigateForward('register');
    }
    messages() {
        this.navCtrl.navigateForward('messages');
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["TranslateProvider"] },
    { type: _providers__WEBPACK_IMPORTED_MODULE_3__["HotelProvider"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map