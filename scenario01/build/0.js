webpackJsonp([0],{

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetFormPageModule", function() { return BetFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bet_form__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BetFormPageModule = (function () {
    function BetFormPageModule() {
    }
    return BetFormPageModule;
}());
BetFormPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bet_form__["a" /* BetFormPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bet_form__["a" /* BetFormPage */]),
        ],
    })
], BetFormPageModule);

//# sourceMappingURL=bet-form.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BetFormPage = (function () {
    function BetFormPage(viewController) {
        this.viewController = viewController;
    }
    BetFormPage.prototype.ionViewDidLoad = function () {
    };
    BetFormPage.prototype.close = function () {
        try {
            this.amount = this.amount.replace(',', '.');
            this.viewController.dismiss({
                tip: this.tip,
                amount: parseFloat(this.amount)
            });
        }
        catch (e) {
            this.amount = '';
            console.error(e);
        }
    };
    return BetFormPage;
}());
BetFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'bet-form'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/stefan/00_bloqs/scenario01/dapp/src/pages/bet-form/bet-form.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Tipp abgeben</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>Tipp</ion-label>\n      <ion-select [(ngModel)]="tip" interface="popover">\n        <ion-option value="1">Team 1</ion-option>\n        <ion-option value="2">Team 2</ion-option>\n        <ion-option value="3">Unentschieden</ion-option>        \n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Einsatz (in ETH)</ion-label>\n      <ion-input type="text" [(ngModel)]="amount"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button (click)="close()">Tipp abgeben</button>\n    </ion-item>\n\n  </ion-list>\n    \n</ion-content>\n'/*ion-inline-end:"/home/stefan/00_bloqs/scenario01/dapp/src/pages/bet-form/bet-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
], BetFormPage);

//# sourceMappingURL=bet-form.js.map

/***/ })

});
//# sourceMappingURL=0.js.map