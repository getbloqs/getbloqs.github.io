webpackJsonp([1],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bet-form/bet-form.module": [
		261,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 147;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = (function () {
    function HomePage(modalController, alertController, appRef) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.appRef = appRef;
        this.sportsBet = {
            state: -1,
            winningTip: 0,
            owner: '',
            name: '',
            total: 0,
            yourBet: {
                tip: 0,
                amount: 0
            },
            tipAmounts: [],
            odds: []
        };
    }
    Object.defineProperty(HomePage.prototype, "state", {
        get: function () {
            switch (this.sportsBet.state) {
                case 0:
                    return 'Offen';
                case 1:
                    return 'Gesperrt';
                case 2:
                    return 'Finalisiert';
            }
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.continousReload = function () {
        var _this = this;
        this.reloadData();
        setTimeout(function () {
            _this.continousReload();
        }, 40000);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        if (window['web3']) {
            this.web3 = window['web3'];
            var SportsBet = this.web3.eth.contract(this.getAbi());
            this.sportsBetContractInstance = SportsBet.at('0xbee0dd7967b85cb83edff86d21df641a09ff9bb0');
            this.continousReload();
        }
    };
    HomePage.prototype.isOwner = function () {
        if (this.web3 && this.web3.eth.defaultAccount) {
            return this.web3.eth.defaultAccount == this.sportsBet.owner;
        }
        else {
            return false;
        }
    };
    HomePage.prototype.reloadData = function () {
        var _this = this;
        this.sportsBetContractInstance.owner.call(function (err, res) { _this.sportsBet.owner = res; _this.appRef.tick(); });
        this.sportsBetContractInstance.game.call(function (err, res) { _this.sportsBet.name = res; _this.appRef.tick(); });
        this.sportsBetContractInstance.winningTip.call(function (err, res) { _this.sportsBet.winningTip = res; _this.appRef.tick(); });
        this.sportsBetContractInstance.total.call(function (err, res) { _this.sportsBet.total = _this.web3.fromWei(res, 'ether'); _this.appRef.tick(); });
        this.sportsBetContractInstance.getTipAmount(1, function (err, res) { _this.sportsBet.tipAmounts[0] = _this.web3.fromWei(res, 'ether'); _this.appRef.tick(); });
        this.sportsBetContractInstance.getTipAmount(2, function (err, res) { _this.sportsBet.tipAmounts[1] = _this.web3.fromWei(res, 'ether'); _this.appRef.tick(); });
        this.sportsBetContractInstance.getTipAmount(3, function (err, res) { _this.sportsBet.tipAmounts[2] = _this.web3.fromWei(res, 'ether'); _this.appRef.tick(); });
        this.sportsBetContractInstance.odds(1, function (err, res) { _this.sportsBet.odds[0] = _this.web3.toDecimal(res); _this.appRef.tick(); });
        this.sportsBetContractInstance.odds(2, function (err, res) { _this.sportsBet.odds[1] = _this.web3.toDecimal(res); _this.appRef.tick(); });
        this.sportsBetContractInstance.odds(3, function (err, res) { _this.sportsBet.odds[2] = _this.web3.toDecimal(res); _this.appRef.tick(); });
        this.sportsBetContractInstance.getBetState(function (err, res) { _this.sportsBet.state = _this.web3.toDecimal(res); _this.appRef.tick(); });
        setTimeout(function () {
            if (_this.web3.eth.defaultAccount) {
                _this.sportsBetContractInstance.getBet(_this.web3.eth.defaultAccount, function (err, res) {
                    _this.sportsBet.yourBet.tip = _this.web3.toDecimal(res[0]);
                    _this.sportsBet.yourBet.amount = _this.web3.fromWei(res[1], 'ether');
                    _this.appRef.tick();
                });
            }
        }, 100);
    };
    HomePage.prototype.lockBet = function () {
        var _this = this;
        this.alertController.create({
            title: 'Sportwette sperren',
            message: 'Wollen Sie die Wette jetzt sperren?',
            buttons: [
                {
                    text: 'Abbrechen'
                },
                {
                    text: 'Ja',
                    handler: function () {
                        _this.sportsBetContractInstance.lockBet(function (err, res) {
                            if (!err) {
                                _this.reloadData();
                            }
                        });
                    }
                }
            ]
        }).present();
    };
    HomePage.prototype.bet = function () {
        var _this = this;
        var modal = this.modalController.create('bet-form');
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data && data.tip > 0 && data.amount > 0) {
                _this.sportsBetContractInstance.bet(data.tip, { value: _this.web3.toWei(data.amount, 'ether') }, function (err, res) {
                    if (!err) {
                        _this.reloadData();
                    }
                });
            }
        });
    };
    HomePage.prototype.finalizeBet = function () {
        var _this = this;
        var alert = this.alertController.create({
            title: 'Wette abschließen'
        });
        alert.addInput({
            type: 'radio',
            label: 'Team 1',
            value: '1',
            checked: false
        }).addInput({
            type: 'radio',
            label: 'Team 2',
            value: '2',
            checked: false
        }).addInput({
            type: 'radio',
            label: 'Unentschieden',
            value: '3',
            checked: false
        }).addButton('Abbrechen').addButton({
            text: 'Ja',
            handler: function (data) {
                _this.sportsBetContractInstance.finalizeBet(data, function (err, res) {
                    if (!err) {
                        _this.reloadData();
                    }
                });
            }
        }).present();
    };
    HomePage.prototype.payout = function () {
        var _this = this;
        this.sportsBetContractInstance.payout(function (err, res) {
            if (!err) {
                _this.reloadData();
            }
        });
    };
    HomePage.prototype.getAbi = function () {
        return [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_winningTip",
                        "type": "uint256"
                    }
                ],
                "name": "finalizeBet",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "lockBet",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "total",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "tip",
                        "type": "uint256"
                    }
                ],
                "name": "getTipAmount",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "tip",
                        "type": "uint256"
                    }
                ],
                "name": "odds",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "payout",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "tip",
                        "type": "uint256"
                    }
                ],
                "name": "bet",
                "outputs": [],
                "payable": true,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getBetState",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "winningTip",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "game",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "locked",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_betOwner",
                        "type": "address"
                    }
                ],
                "name": "getBet",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_game",
                        "type": "string"
                    }
                ],
                "payable": false,
                "type": "constructor"
            }
        ];
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/stefan/00_bloqs/scenario01/dapp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Sportwetten\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngIf="!web3">\n      <ion-item text-wrap>\n        <ion-avatar item-start>\n          <ion-icon color="danger" name="alert"></ion-icon>            \n        </ion-avatar>\n        <h2>Nutzungshinweis</h2>\n        <p>Um diese Anwendung nutzen zu können wird das Browser Plugin <a target="_blank" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">MetaMask</a> benötigt. Diese Anwendung soll am Beispiel von Sportwetten die Funktionsweise von Smart Contracts demonstrieren. Der <a target="_blank" href="https://ropsten.etherscan.io/address/0xbee0dd7967b85cb83edff86d21df641a09ff9bb0">Smart Contract</a> wird im Ethereum Testnetzwerk (Ropsten) betrieben. Mittels einer sog. Faucet können Ethereum Ropsten Tokens kostenlos bezogen werden und damit kann an der Sportwette teilgenommen werden.</p>\n\n        <ol>\n          <li>Download des MetaMask Chrome Plugins</li>\n          <li>Ropsten Test Network auswählen im MetaMask Plugin</li>\n          <li>Über den Button "Buy" kostenlos Ethereum Testnet Token beziehen</li>\n          <li>Seite neu Laden und Wetteinsatz plazieren</li>          \n        </ol>\n      </ion-item>     \n    \n  </ion-card>\n\n  <ion-card *ngIf="web3">\n      <ion-item text-wrap>\n          <ion-avatar item-start>\n            <ion-icon color="danger" name="alert"></ion-icon>            \n          </ion-avatar>\n          <h2>Nutzungshinweis</h2>\n          <ul>\n            <li>Bis zum Spielbeginn (02.09.2017, 20:45) können Wetten abgegeben werden. (Status: Offen)</li>\n            <li>Nach Spielbeginn wird der Status auf \'Gesperrt\' gesetzt und es können keine Wetten mehr abgeschlossen werden.</li>\n            <li>Nach Spielende können Wettgewinne ausgezahlt werden. (Status: Finalisiert)</li>\n          </ul>\n        </ion-item>     \n  </ion-card>\n\n  <ion-card *ngIf="web3">\n    <ion-card-header>\n        {{ sportsBet.name }}\n    </ion-card-header>\n    \n    <ion-list>\n      <ion-item>\n        <ion-note item-start>\n          Gesamter Wetteinsatz: {{ sportsBet.total }} ETH<br>\n          Status: {{ state }}<br>\n          Smart Contract: <a target="_blank" href="https://ropsten.etherscan.io/address/0xbee0dd7967b85cb83edff86d21df641a09ff9bb0">0xbee0dd7967b85cb83edff86d21df641a09ff9bb0</a><br>\n          Ersteller: <a target="_blank" [href]="\'https://ropsten.etherscan.io/address/\' + sportsBet.owner">{{ sportsBet.owner }}</a>\n        </ion-note>\n      </ion-item>\n\n      <ion-item>\n\n        <ion-grid>\n          <ion-row>\n            <ion-col col-2><b>Tipp</b></ion-col>\n            <ion-col col-3><b>Wetteinsätze</b></ion-col>\n            <ion-col col-3><b>Ihr Einsatz</b></ion-col>\n            <ion-col col-3><b>Wettquote</b></ion-col>\n          </ion-row>\n          <ion-row [ngClass]="{ winner : (sportsBet.winningTip == 1) }">\n            <ion-col col-2>Team 1</ion-col>\n            <ion-col col-3 *ngIf="sportsBet.tipAmounts[0]">{{ sportsBet.tipAmounts[0] }} ETH</ion-col>\n            <ion-col col-3>\n              <ng-container *ngIf="sportsBet.yourBet.tip == 1">{{ sportsBet.yourBet.amount }} ETH</ng-container>\n            </ion-col>\n            <ion-col col-3 *ngIf="sportsBet.odds[0]">1:{{ sportsBet.odds[0] / 100 }}</ion-col>\n          </ion-row>\n          <ion-row [ngClass]="{ winner : (sportsBet.winningTip == 2) }">\n            <ion-col col-2>Team 2</ion-col>\n            <ion-col col-3 *ngIf="sportsBet.tipAmounts[1]">{{ sportsBet.tipAmounts[1] }} ETH</ion-col>\n            <ion-col col-3>\n                <ng-container *ngIf="sportsBet.yourBet.tip == 2">{{ sportsBet.yourBet.amount }} ETH</ng-container>\n              </ion-col>\n            <ion-col col-3 *ngIf="sportsBet.odds[1]">1:{{ sportsBet.odds[1] / 100 }}</ion-col>\n          </ion-row>\n          <ion-row [ngClass]="{ winner : (sportsBet.winningTip == 3) }">\n            <ion-col col-2>Unentschieden</ion-col>\n            <ion-col col-3 *ngIf="sportsBet.tipAmounts[2]">{{ sportsBet.tipAmounts[2] }} ETH</ion-col>\n            <ion-col col-3>\n                <ng-container *ngIf="sportsBet.yourBet.tip == 3">{{ sportsBet.yourBet.amount }} ETH</ng-container>\n              </ion-col>\n            <ion-col col-3 *ngIf="sportsBet.odds[2]">1:{{ sportsBet.odds[2] / 100 }}</ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </ion-item>\n\n      <ion-item>\n        <button *ngIf="sportsBet.state == 0" ion-button (click)="bet()">Tipp abgeben</button>\n        <button *ngIf="sportsBet.state == 0 && isOwner()" ion-button (click)="lockBet()" color="danger">Wette sperren</button>\n        <button *ngIf="sportsBet.state == 1 && isOwner()" ion-button (click)="finalizeBet()" color="danger">Wette abschließen</button>\n        <button *ngIf="sportsBet.state == 2 && sportsBet.winningTip == sportsBet.yourBet.tip && sportsBet.yourBet.amount > 0" ion-button (click)="payout()" color="secondary">Gewinn auszahlen</button>\n\n        <p class="winner" *ngIf="sportsBet.state == 2 && sportsBet.winningTip == sportsBet.yourBet.tip && sportsBet.yourBet.amount > 0">Ihr Gewinn wurde bereits ausbezahlt.</p>\n        <p class="loser" *ngIf="sportsBet.state == 2 && sportsBet.winningTip != sportsBet.yourBet.tip">Leider hat Ihr Tipp nicht gewonnen.</p>\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/home/stefan/00_bloqs/scenario01/dapp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(211);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/bet-form/bet-form.module#BetFormPageModule', name: 'bet-form', segment: 'bet-form', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/stefan/00_bloqs/scenario01/dapp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/stefan/00_bloqs/scenario01/dapp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[192]);
//# sourceMappingURL=main.js.map