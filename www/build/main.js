webpackJsonp([10],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FinishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FinishPage = /** @class */ (function () {
    function FinishPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FinishPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FinishPage');
    };
    FinishPage.prototype.goToPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {});
    };
    FinishPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-finish',template:/*ion-inline-start:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/finish/finish.html"*/'<ion-content>\n  <main (click)="goToPage()">\n    <ion-grid>\n      <ion-row class="End">\n        <div class="TirpitzEnd"></div>\n      </ion-row>\n    </ion-grid>\n  </main>\n</ion-content>\n'/*ion-inline-end:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/finish/finish.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], FinishPage);
    return FinishPage;
    var _a, _b;
}());

//# sourceMappingURL=finish.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameTutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__finish_finish__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GameTutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GameTutorialPage = /** @class */ (function () {
    function GameTutorialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GameTutorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GameTutorialPage');
    };
    GameTutorialPage.prototype.goToPageA = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__game_game__["a" /* GamePage */], {});
    };
    GameTutorialPage.prototype.goToPageB = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__finish_finish__["a" /* FinishPage */], {});
    };
    GameTutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game-tutorial',template:/*ion-inline-start:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/game-tutorial/game-tutorial.html"*/'<ion-content>\n  <main>\n    <ion-grid>\n      <ion-row class="Instructions">\n        <ion-col class="Content">\n          <div id="Guide1">\n            <div id="Step1">\n              <div id="Ikon1"></div>\n            </div>\n          </div>\n          <div id="Guide2">\n            <div id="Step2">\n              <div id="Ikon2"></div>\n            </div>\n          </div>\n          <div id="Guide3">\n            <div id="Step3">\n              <div id="Ikon3"></div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class="Navigation">\n        <ion-col class="Buttons">\n          <div id="Back" (click)="goToPageA()">Tilbage</div>\n          <div id="Start" (click)="goToPageB()">Start</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </main>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/game-tutorial/game-tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GameTutorialPage);
    return GameTutorialPage;
}());

//# sourceMappingURL=game-tutorial.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InstructionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InstructionsPage = /** @class */ (function () {
    function InstructionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InstructionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InstructionsPage');
    };
    InstructionsPage.prototype.goToPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */], {});
    };
    InstructionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-instructions',template:/*ion-inline-start:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/instructions/instructions.html"*/'<ion-content>\n  <main>\n    <ion-grid>\n      <ion-row class="Instructions">\n        <ion-col class="Content">\n          <div id="Guide1">\n            <div id="Step1">\n              <div id="Ikon1"></div>\n            </div>\n          </div>\n          <div id="Guide2">\n            <div id="Step2">\n              <div id="Ikon2"></div>\n            </div>\n          </div>\n        </ion-col>\n        <ion-col class="Back">\n          <div class="Button" (click)="goToPage()">Tilbage</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </main>\n</ion-content>\n'/*ion-inline-end:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/instructions/instructions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], InstructionsPage);
    return InstructionsPage;
}());

//# sourceMappingURL=instructions.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__warning_warning__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuidePage = /** @class */ (function () {
    function GuidePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GuidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuidePage');
    };
    GuidePage.prototype.goToPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__warning_warning__["a" /* WarningPage */], {});
    };
    GuidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-guide',template:/*ion-inline-start:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/guide/guide.html"*/'<ion-content>\n  <main>\n    <ion-grid>\n      <ion-row>\n        <ion-col class="Left">\n          <div class="ContentLeft">\n            <div class="HeadlineLeft">\n              <h1>Ravet viser dig vej</h1>\n            </div>\n            <div class="IconLeft"></div>\n            <div class="DescriptionLeft">\n              <p>Ved at trykke på rav-ikonerne, der er spredt rundt omkring i området, låser du op for sjove spil, lege og aktiviteter</p>\n            </div>\n          </div>\n        </ion-col>\n        <ion-col class="Right">\n          <div id="Border"></div>\n          <div class="ContentRight">\n            <div class="HeadlineRight">\n              <h1>Vejledning hele vejen</h1>\n            </div>\n            <div class="IconRight"></div>\n            <div class="DescriptionRight">\n              <p>Hjælpe-ikonet bidrager med råd og vejledning til de forskellige aktiviteter, der venter under sandets overflade</p>\n            </div>\n          </div>\n          <div class="Button">\n            <div id="Button" (click)="goToPage()">Næste</div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </main>\n</ion-content>\n'/*ion-inline-end:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/guide/guide.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GuidePage);
    return GuidePage;
}());

//# sourceMappingURL=guide.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WarningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WarningPage = /** @class */ (function () {
    function WarningPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WarningPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WarningPage');
    };
    WarningPage.prototype.goToPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */], {});
    };
    WarningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-warning',template:/*ion-inline-start:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/warning/warning.html"*/'<ion-content>\n  <main>\n    <ion-grid>\n      <ion-row>\n        <ion-col class="Warning">\n          <div class="Content">\n            <div class="Icon"></div>\n            <div class="Info">\n              <p>Vær opmærksom på dine omgivelser og de andre besøgende på museet!</p>\n            </div>\n          </div>\n          <div class="Button">\n            <div id="Button" (click)="goToPage()">Udforsk Tirpitz</div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </main>\n</ion-content>\n'/*ion-inline-end:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/warning/warning.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], WarningPage);
    return WarningPage;
}());

//# sourceMappingURL=warning.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__languages_languages__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.goToPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__languages_languages__["a" /* LanguagesPage */], {});
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/home/home.html"*/'<ion-content>\n  <main (click)="goToPage()">\n    <div class="Tirpitz">\n        <img src="../assets/imgs/Tirpitz-Logo.svg" alt="Tirpitz Logo">\n    </div>\n  </main>\n</ion-content>\n'/*ion-inline-end:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_start__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LanguagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LanguagesPage = /** @class */ (function () {
    function LanguagesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LanguagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LanguagesPage');
    };
    LanguagesPage.prototype.goToPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__start_start__["a" /* StartPage */], {});
    };
    LanguagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-languages',template:/*ion-inline-start:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/languages/languages.html"*/'<ion-content>\n  <main>\n    <ion-grid id="BackgroundImage">\n      <ion-row class="Spacer"></ion-row>\n      <ion-row class="Tirpitz">\n        <div class="Logo">\n        </div>\n      </ion-row>\n      <ion-row class="Options">\n        <div class="Languages">\n          <div id="Dansk" (click)="goToPage()"></div>\n          <div id="Deutsch" (click)="goToPage()"></div>\n          <div id="English" (click)="goToPage()"></div>\n        </div>\n      </ion-row>\n      <ion-row class="Spacer"></ion-row>\n    </ion-grid>\n  </main>\n</ion-content>\n'/*ion-inline-end:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/languages/languages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LanguagesPage);
    return LanguagesPage;
}());

//# sourceMappingURL=languages.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guide_guide__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StartPage = /** @class */ (function () {
    function StartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartPage');
    };
    StartPage.prototype.goToPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__guide_guide__["a" /* GuidePage */], {});
    };
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start',template:/*ion-inline-start:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/start/start.html"*/'<ion-content>\n  <main>\n    <ion-grid>\n      <ion-row>\n        <ion-col class="Info">\n          <div class="Content">\n            <div class="Logo"></div>\n            <div id="Info">\n              <div class="Slogan"></div>\n              <div class="Introduction">\n                <p>Gå på opdagelse i de mange klitter omkring museet, og oplev de mange skatte, historier, og steder, der ligger og lurer lige under sandets overflade!</p>\n              </div>\n            </div>\n          </div>\n        </ion-col>\n        <ion-col class="Button">\n          <div id="Button" (click)="goToPage()">Start</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </main>\n</ion-content>\n'/*ion-inline-end:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/start/start.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/finish/finish.module": [
		278,
		9
	],
	"../pages/game-tutorial/game-tutorial.module": [
		279,
		8
	],
	"../pages/game/game.module": [
		280,
		7
	],
	"../pages/guide/guide.module": [
		281,
		6
	],
	"../pages/home/home.module": [
		282,
		5
	],
	"../pages/instructions/instructions.module": [
		283,
		4
	],
	"../pages/languages/languages.module": [
		284,
		3
	],
	"../pages/map/map.module": [
		285,
		2
	],
	"../pages/start/start.module": [
		286,
		1
	],
	"../pages/warning/warning.module": [
		287,
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_start_start__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_game_game__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_guide_guide__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_map_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_warning_warning__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_languages_languages__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_instructions_instructions__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_game_tutorial_game_tutorial__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_finish_finish__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_guide_guide__["a" /* GuidePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_warning_warning__["a" /* WarningPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_languages_languages__["a" /* LanguagesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_instructions_instructions__["a" /* InstructionsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_game_tutorial_game_tutorial__["a" /* GameTutorialPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_finish_finish__["a" /* FinishPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/finish/finish.module#FinishPageModule', name: 'FinishPage', segment: 'finish', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game-tutorial/game-tutorial.module#GameTutorialPageModule', name: 'GameTutorialPage', segment: 'game-tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guide/guide.module#GuidePageModule', name: 'GuidePage', segment: 'guide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/instructions/instructions.module#InstructionsPageModule', name: 'InstructionsPage', segment: 'instructions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/languages/languages.module#LanguagesPageModule', name: 'LanguagesPage', segment: 'languages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/warning/warning.module#WarningPageModule', name: 'WarningPage', segment: 'warning', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_guide_guide__["a" /* GuidePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_warning_warning__["a" /* WarningPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_languages_languages__["a" /* LanguagesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_instructions_instructions__["a" /* InstructionsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_game_tutorial_game_tutorial__["a" /* GameTutorialPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_finish_finish__["a" /* FinishPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instructions_instructions__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
    };
    MapPage.prototype.goToPageA = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__instructions_instructions__["a" /* InstructionsPage */], {});
    };
    MapPage.prototype.goToPageB = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__game_game__["a" /* GamePage */], {});
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/map/map.html"*/'<ion-content>\n  <main>\n    <ion-grid>\n      <ion-row class="Row1">\n        <div class="Button">\n          <div id="Button" (click)="goToPageA()"></div>\n        </div>\n      </ion-row>\n      <ion-row class="Row2"></ion-row>\n      <ion-row class="Row3"></ion-row>\n      <ion-row class="Row4"></ion-row>\n      <ion-row class="Row5">\n        <div class="Button">\n          <div id="Button" (click)="goToPageB()"></div>\n        </div>\n      </ion-row>\n    </ion-grid>\n  </main>\n</ion-content>\n'/*ion-inline-end:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_tutorial_game_tutorial__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GamePage = /** @class */ (function () {
    function GamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GamePage');
    };
    GamePage.prototype.goToPageA = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */], {});
    };
    GamePage.prototype.goToPageB = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__game_tutorial_game_tutorial__["a" /* GameTutorialPage */], {});
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/game/game.html"*/'<ion-content>\n  <main>\n    <ion-grid>\n      <ion-row class="Content">\n          <ion-col class="Description">\n            <div id="Content">\n              <div id="Header">\n                <h1>Mammutten har brug for hjælp!</h1>\n              </div>\n              <div id="Description">\n                <p>Hjælp den forhistoriske elefant med at slippe væk, inden jægerne fanger den!</p>\n              </div>\n            </div>\n          </ion-col>\n        <ion-col class="Mammoth">\n          <div id="Mammoth"></div>\n        </ion-col>\n      </ion-row>\n      <ion-row class="Buttons">\n        <ion-col id="Buttons">\n          <div id="Back" (click)="goToPageA()">Tilbage</div>\n          <div id="Start" (click)="goToPageB()">Start</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </main>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nielsbeier/Desktop/MMD EASV 2017/2. Semester/Interaktion/Eksamen/Prototype/Tirpitz/src/pages/game/game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map