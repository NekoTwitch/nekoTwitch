webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_page_home_page_component__ = __webpack_require__("./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tournament_tournament_component__ = __webpack_require__("./src/app/pages/tournament/tournament.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_home_page_home_page_component__["a" /* HomePageComponent */]
    },
    {
        path: 'tournament',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_tournament_tournament_component__["a" /* TournamentComponent */],
    },
    {
        path: '**',
        redirectTo: '',
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-head-nav></app-head-nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".underline-select {\n  background-color: #F4989C;\n  height: 4px;\n  width: 0;\n  opacity: 0;\n  border-radius: 4px;\n  -webkit-transition: width 0.25s, opacity 0.25s;\n  transition: width 0.25s, opacity 0.25s; }\n  .underline-select.selected {\n    width: 100%;\n    opacity: 1; }\n  :host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -ms-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_page_home_page_component__ = __webpack_require__("./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tournament_tournament_component__ = __webpack_require__("./src/app/pages/tournament/tournament.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_head_nav_head_nav_component__ = __webpack_require__("./src/app/pages/head-nav/head-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__widgets_script_hack_script_hack_component__ = __webpack_require__("./src/app/widgets/script-hack/script-hack.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tournament_tournament_component__["a" /* TournamentComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_head_nav_head_nav_component__["a" /* HeadNavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__widgets_script_hack_script_hack_component__["a" /* ScriptHackComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/head-nav/head-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\" (click)=\"selected = 'home'\">\n  <div class=\"section\">STREAM</div>\n  <div class=\"underline-select\" [class.selected]=\"selected === 'home'\"></div>\n</a>\n\n<a [routerLink]=\"['/tournament']\" (click)=\"selected = 'tournament'\">\n  <div class=\"section\">TOURNAMENT</div>\n  <div class=\"underline-select\" [class.selected]=\"selected === 'tournament'\"></div>\n</a>\n\n"

/***/ }),

/***/ "./src/app/pages/head-nav/head-nav.component.scss":
/***/ (function(module, exports) {

module.exports = ".underline-select {\n  background-color: #F4989C;\n  height: 4px;\n  width: 0;\n  opacity: 0;\n  border-radius: 4px;\n  -webkit-transition: width 0.25s, opacity 0.25s;\n  transition: width 0.25s, opacity 0.25s; }\n  .underline-select.selected {\n    width: 100%;\n    opacity: 1; }\n  :host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -ms-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 48px;\n  min-height: 48px;\n  border-bottom: 1px solid #FFF0EF; }\n  :host a {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -ms-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  :host a .section {\n      color: #FFF0EF;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      display: -ms-flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      padding: 0 16px; }\n  :host a .underline-select.selected {\n      width: calc(100% - 32px); }\n"

/***/ }),

/***/ "./src/app/pages/head-nav/head-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadNavComponent = /** @class */ (function () {
    function HeadNavComponent() {
        this.selected = 'home';
    }
    HeadNavComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HeadNavComponent.prototype, "selected", void 0);
    HeadNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-head-nav',
            template: __webpack_require__("./src/app/pages/head-nav/head-nav.component.html"),
            styles: [__webpack_require__("./src/app/pages/head-nav/head-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadNavComponent);
    return HeadNavComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"twitch-container\">\n  <div class='twitchStream'>\n    <iframe\n      class=\"video\"\n      src=\"http://player.twitch.tv/?channel=monstercat\"\n      frameborder=\"0\"\n      scrolling=\"no\"\n      allowfullscreen=\"true\"\n      autoplay=\"true\">\n    </iframe>\n  </div>\n\n  <!--<div class='twitchChat'>-->\n  <!--<iframe frameborder=\"0\" scrolling=\"no\" src=\"https://www.twitch.tv/**YOUR-CHANNEL-NAME**/chat\"></iframe>-->\n  <!--</div>-->\n</div>\n\n<div class=\"description\">\n  <p>Description à venir</p>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.scss":
/***/ (function(module, exports) {

module.exports = ".underline-select {\n  background-color: #F4989C;\n  height: 4px;\n  width: 0;\n  opacity: 0;\n  border-radius: 4px;\n  -webkit-transition: width 0.25s, opacity 0.25s;\n  transition: width 0.25s, opacity 0.25s; }\n  .underline-select.selected {\n    width: 100%;\n    opacity: 1; }\n  .twitchStream {\n  position: relative; }\n  .twitchStream:before {\n  content: \"\";\n  display: block;\n  padding-top: 56.25%;\n  /* 16:9 */ }\n  .twitchChat {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 25%; }\n  .twitchStream iframe, .twitchChat iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n  :host {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -ms-flex;\n  overflow: auto;\n  margin: 16px; }\n  :host .twitch-container {\n    height: 100%;\n    width: 100%; }\n  :host .description {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -ms-flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-justify-content: center;\n    width: 450px; }\n  @media all and (max-width: 1024px) {\n  :host {\n    margin: 8px; }\n    :host .twitch-container {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      -ms-flex-direction: column; }\n      :host .twitch-container .twitchStream {\n        -webkit-box-flex: 0;\n                flex: none;\n        -ms-flex: none;\n        -webkit-flex: none; }\n      :host .twitch-container .description {\n        width: 100%; } }\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        this.animDone = false;
    }
    HomePageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.animDone = true;
        }, 250);
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__("./src/app/pages/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tournament/tournament.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/tournament/tournament.component.scss":
/***/ (function(module, exports) {

module.exports = ".underline-select {\n  background-color: #F4989C;\n  height: 4px;\n  width: 0;\n  opacity: 0;\n  border-radius: 4px;\n  -webkit-transition: width 0.25s, opacity 0.25s;\n  transition: width 0.25s, opacity 0.25s; }\n  .underline-select.selected {\n    width: 100%;\n    opacity: 1; }\n  :host {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -ms-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/pages/tournament/tournament.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TournamentComponent = /** @class */ (function () {
    function TournamentComponent() {
    }
    TournamentComponent.prototype.ngOnInit = function () {
    };
    TournamentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tournament',
            template: __webpack_require__("./src/app/pages/tournament/tournament.component.html"),
            styles: [__webpack_require__("./src/app/pages/tournament/tournament.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TournamentComponent);
    return TournamentComponent;
}());



/***/ }),

/***/ "./src/app/widgets/script-hack/script-hack.component.html":
/***/ (function(module, exports) {

module.exports = "<div #script style.display=\"none\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/widgets/script-hack/script-hack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptHackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScriptHackComponent = /** @class */ (function () {
    function ScriptHackComponent() {
    }
    ScriptHackComponent.prototype.convertToScript = function () {
        var element = this.script.nativeElement;
        var script = document.createElement('script');
        script.type = this.type ? this.type : 'text/javascript';
        if (this.src) {
            script.src = this.src;
        }
        if (element.innerHTML) {
            script.innerHTML = element.innerHTML;
        }
        var parent = element.parentElement;
        parent.parentElement.replaceChild(script, parent);
    };
    ScriptHackComponent.prototype.ngAfterViewInit = function () {
        this.convertToScript();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ScriptHackComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ScriptHackComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('script'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ScriptHackComponent.prototype, "script", void 0);
    ScriptHackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-script-hack',
            template: __webpack_require__("./src/app/widgets/script-hack/script-hack.component.html")
        })
    ], ScriptHackComponent);
    return ScriptHackComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map