(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"teal\">\n  <div class=\"container\">\n    <div class=\"nav-wrapper\">\n      <a href=\"#\" class=\"brand-logo\">Disaster Management | <small>Team Phoenix</small></a>\n      <ul id=\"nav-mobile\" class=\"right\">\n          <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/feed']\">Feed</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.url = this.router.url;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/feed/feed.component */ "./src/app/components/feed/feed.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: 'feed', component: _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bridge.service.ts":
/*!***********************************!*\
  !*** ./src/app/bridge.service.ts ***!
  \***********************************/
/*! exports provided: BridgeService */
/***/ function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "BridgeService", function () {
            return BridgeService;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
        var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        var __metadata = (undefined && undefined.__metadata) || function (k, v) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };


        var BridgeService = /** @class */ (function () {
            function BridgeService(http) {
                this.http = http;
                this.mock_epi = {
                    'epic': 'Bandra',
                    'html_attributions': [],
                    'results': [{
                        'geometry': {
                            'location': {
                                'lat': 19.0127298,
                                'lng': 72.86138729999999
                            },
                            'viewport': {
                                'northeast': {
                                    'lat': 19.01407962989272,
                                    'lng': 72.86273712989271
                                },
                                'southwest': {'lat': 19.01137997010728, 'lng': 72.86003747010727}
                            }
                        },
                        'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/doctor-71.png',
                        'id': 'f39fdcc270156bade6b49bf4f919ab97d0bcae8c',
                        'name': 'Bpt Hospital',
                        'opening_hours': {'open_now': true},
                        'photos': [{
                            'height': 3096,
                            'html_attributions': ['<a href="https://maps.google.com/maps/contrib/105102428605482307354/photos">Ramzanali Khan</a>'],
                            'photo_reference': 'CmRaAAAAyncDbAS1FDuzjDka0SeNRcG7Rxm0M20YOXGRfmizpxj0PvIa_sH2oT6yuASNJn2y6rYmpOpD_RI5PkNIzd09GLpVnxG1sma3V0RGjabWItAlyhvTWQsS2lZTtuoK1Y3dEhAA8rMeXiTTQoBikYhIPfytGhRRnyz85kRingbaZpNZb-sbvOsEdw',
                            'width': 4128
                        }],
                        'place_id': 'ChIJc990siPP5zsRBneQPIJdC20',
                        'plus_code': {
                            'compound_code': '2V76+3H Mumbai, Maharashtra',
                            'global_code': '7JFJ2V76+3H'
                        },
                        'rating': 4.1,
                        'reference': 'ChIJc990siPP5zsRBneQPIJdC20',
                        'scope': 'GOOGLE',
                        'types': ['hospital', 'point_of_interest', 'establishment'],
                        'vicinity': 'Near Wadala Police Station, Nadkarni Park, East Wadala, Mumbai'
                    },
                        {
                            'geometry': {
                                'location': {'lat': 19.0096403, 'lng': 72.855767},
                                'viewport': {
                                    'northeast': {
                                        'lat': 19.01092767989272,
                                        'lng': 72.85702392989272
                                    },
                                    'southwest': {'lat': 19.00822802010728, 'lng': 72.85432427010728}
                                }
                            },
                            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/doctor-71.png',
                            'id': 'a31d3dbbad9ac90244d297d4af81cd7806a7390e',
                            'name': 'MBPT Wadala Dispensary',
                            'opening_hours': {'open_now': false},
                            'place_id': 'ChIJna3ElB7P5zsRpxmeVeKXoL8',
                            'plus_code': {
                                'compound_code': '2V54+V8 Mumbai, Maharashtra',
                                'global_code': '7JFJ2V54+V8'
                            },
                            'rating': 4.2,
                            'reference': 'ChIJna3ElB7P5zsRpxmeVeKXoL8',
                            'scope': 'GOOGLE',
                            'types': ['hospital', 'point_of_interest', 'establishment'],
                            'vicinity': 'Reynolds Road, Tejas Nagar Colony, Wadala East, Wadala West, Wadala, Mumbai'
                        },
                        {
                            'geometry': {
                                'location': {'lat': 19.0411418, 'lng': 72.8940118},
                                'viewport': {
                                    'northeast': {
                                        'lat': 19.04249162989272,
                                        'lng': 72.89536162989272
                                    },
                                    'southwest': {'lat': 19.03979197010728, 'lng': 72.89266197010727}
                                }
                            },
                            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/doctor-71.png',
                            'id': '67be8cfaba71ae8f6fc0720ff8364faf07c01ee1',
                            'name': 'Shiv Hospital',
                            'photos': [{
                                'height': 4160,
                                'html_attributions': ['<a href="https://maps.google.com/maps/contrib/100090898969973612190/photos">30 Seconds Of Blaze</a>'],
                                'photo_reference': 'CmRaAAAAjMpZmXth4r8Nl6BjXXc9BfdudtkGHvE9UXVGfH8hd6JHroHXKSiB4ajUa5WRhfIWi2U3fp1T9cQinO-tqkkkV58u40PdJ0snAtyNz7HsasCsE5-Fod-6U3j-QZido4ckEhCl1e3AoMFKmWnzI1iVp6s6GhR7NQPzNqn98G6KVSSu3KSL1VGF6w',
                                'width': 2340
                            }],
                            'place_id': 'ChIJB6QySavI5zsRGBZ_fMM5Uws',
                            'plus_code': {
                                'compound_code': '2VRV+FJ Mumbai, Maharashtra',
                                'global_code': '7JFJ2VRV+FJ'
                            },
                            'rating': 3.3,
                            'reference': 'ChIJB6QySavI5zsRGBZ_fMM5Uws',
                            'scope': 'GOOGLE',
                            'types': ['hospital', 'point_of_interest', 'establishment'],
                            'vicinity': 'Plot No.16, Prem Nivas, Mahul Road, Near Ashish Theatre, Laxmi Colony, Chembur, Mumbai'
                        },
                        {
                            'geometry': {
                                'location': {'lat': 19.0510891, 'lng': 72.8292259},
                                'viewport': {
                                    'northeast': {
                                        'lat': 19.05220582989272,
                                        'lng': 72.83066712989272
                                    },
                                    'southwest': {'lat': 19.04950617010728, 'lng': 72.82796747010728}
                                }
                            },
                            'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
                            'id': '87d0852f6e88e7746cb3d0c02c6e4ae599fd1201',
                            'name': 'Orthopaedic & Joint Replacement Surgeon',
                            'opening_hours': {'open_now': true},
                            'photos': [{
                                'height': 733,
                                'html_attributions': ['<a href="https://maps.google.com/maps/contrib/100192645701356301891/photos">Tarun Shekhawat</a>'],
                                'photo_reference': 'CmRaAAAAK87r_IM3N5UCuuKq_s2s3goupA61W_89Sw8YAJ3Oct3EDb8QxTgXdbjluTaJJpabogvwUUgJRxFArDA3t9XBD-eP2PcwUwteXYD-S781ejcfR6PHfV2-3egxzrDv7dE3EhD_1_wBB9LOqLAA7VShadxTGhR7A-S0is-S6k1ujj_e9A690RyWCA',
                                'width': 1125
                            }],
                            'place_id': 'ChIJkdTfyTjJ5zsRzOEZ0hMAeYg',
                            'plus_code': {
                                'compound_code': '3R2H+CM Mumbai, Maharashtra',
                                'global_code': '7JFJ3R2H+CM'
                            },
                            'rating': 4,
                            'reference': 'ChIJkdTfyTjJ5zsRzOEZ0hMAeYg',
                            'scope': 'GOOGLE',
                            'types': ['hospital', 'health', 'point_of_interest', 'establishment'],
                            'vicinity': 'Lilavati Hospital, A-791, Bandra Reclamation Rd, Bandra West, Mumbai'
                        }],
                    'status': 'OK'
                };
            }

            BridgeService.prototype.retrieveStations = function (epicenter) {
                //TODO: retrieve from backend
                return this.http.get("http://127.0.0.1:8000/hos");
            };
            BridgeService.prototype.retrievePlc = function (epicenter) {
                return this.http.get("http://127.0.0.1:8000/pol");
            };
            BridgeService.prototype.updateData = function (epicenter) {
                console.log('querying');
                return this.http.get("http://localhost:8000/Disaster/?name=" + epicenter.toString());
            };
            BridgeService.prototype.retrieveFeed = function () {
                //TODO: retrieve from backend
                return this.http.get("http://localhost:8000/twitter");
            };
            BridgeService = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
                    providedIn: 'root'
                }),
                __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
            ], BridgeService);
            return BridgeService;
        }());


        /***/
    },

/***/ "./src/app/components/feed/feed.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/feed/feed.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/feed/feed.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/feed/feed.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container white z-depth-2\">\n  <div class=\"card-panel\">\n    <table class=\"highlight\" *ngIf=\"feedData\">\n      <thead>\n        <tr>\n          <th></th>\n          <th>Percentage</th>\n          <th>Location</th>\n          <th>Disaster</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let entry of feedData; let i = index\">\n          <td *ngIf=\"entry.twitter_percentage>19\">{{i+1}}</td>\n          <td *ngIf=\"entry.twitter_percentage>19\">{{ (entry.twitter_percentage/100) | percent }}</td>\n          <td *ngIf=\"entry.twitter_percentage>19\">{{entry.city_name}}</td>\n          <td *ngIf=\"entry.twitter_percentage>19\">{{capitalizeFirst(entry.disaster)}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/feed/feed.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/feed/feed.component.ts ***!
  \***************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bridge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bridge.service */ "./src/app/bridge.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedComponent = /** @class */ (function () {
    function FeedComponent(bridgeService) {
        this.bridgeService = bridgeService;
    }
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getData();
        this.interval = setInterval(function () {
            _this.getData();
        }, 10000);
    };
    FeedComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    FeedComponent.prototype.getData = function () {
        var _this = this;
        this.bridgeService.retrieveFeed().subscribe(function (data) {
            _this.feedData = data;
        });
    };
    FeedComponent.prototype.capitalizeFirst = function (str) {
        return str.replace(str.charAt(0), str.charAt(0).toLocaleUpperCase());
    };
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/components/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/components/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [_bridge_service__WEBPACK_IMPORTED_MODULE_1__["BridgeService"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container white z-depth-2\">\n  <div class=\"card-panel\">\n    <div class=\"lookup\">\n        <h4 class=\"center-align\">\n            Disaster response station lookup\n          </h4>\n          <div class=\"container\">\n            <div class=\"row center-align\">\n              <div class=\"input-field col m6\">\n                <input id=\"epicenter\" type=\"text\" #epicenter>\n                <label for=\"epicenter\">Epicenter</label>\n              </div>\n              <div class=\"input-field col m6\">\n                <a class=\"btn waves-effect waves-light teal col m12\" (click)=\"retrieve(epicenter.value)\">\n                  Locate\n                </a>\n              </div>\n            </div>\n          </div>\n    </div>\n    <div class=\"loading center-align\" *ngIf=\"waiting\">\n      <h5>Querying server...</h5>\n    </div>\n    <div class=\"data\" *ngIf=\"render_data\">\n      <h5 class=\"center-align\">Hospitals near {{epicenter.value}}</h5>\n      <div class=\"row\">\n        <div class=\"col s12 m6\" *ngFor='let result of render_data'>\n          <div class=\"card blue-grey darken-1\">\n            <div class=\"card-content white-text\">\n              <span class=\"card-title\">{{result.hospital_name}}</span>\n              <p>{{result.hospital_vicinity}}</p>\n            </div>\n            <div class=\"card-action\">\n              <a href=\"javascript:void(0)\" (click)='openMap(result)'>Show on map</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h5 class=\"center-align\">Police stations near {{epicenter.value}}</h5>\n      <div class=\"row\">\n        <div class=\"col s12 m6\" *ngFor='let result_plc of plc_data'>\n          <div class=\"card blue-grey darken-1\">\n            <div class=\"card-content white-text\">\n              <span class=\"card-title\">{{result_plc.police_name}}</span>\n              <p>{{result_plc.police_vicinity}}</p>\n            </div>\n            <div class=\"card-action\">\n              <a href=\"javascript:void(0)\" (click)='openMapPlc(result_plc)'>Show on map</a>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bridge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bridge.service */ "./src/app/bridge.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(bridgeService) {
        this.bridgeService = bridgeService;
        this.render_data = null;
        this.plc_data = null;
        this.waiting = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.retrieve = function (epicenter) {
        var _this = this;
        this.waiting = true;
        this.bridgeService.updateData(epicenter).subscribe(function (data) {
            console.log(data);
        });
        setTimeout(function () {
            _this.waiting = false;
            _this.bridgeService.retrieveStations(epicenter).subscribe(function (data) {
                _this.render_data = data;
            });
            _this.bridgeService.retrievePlc(epicenter).subscribe(function (data) {
                _this.plc_data = data;
            });
        }, 7000);
    };
    HomeComponent.prototype.openMap = function (result) {
        var url = "https://maps.google.com/?q=" + result.hospital_lat + "," + result.hospital_lon + "&ll=" + result.hospital_lat + "," + result.hospital_lon + "&z=15";
        window.open(url, '_blank');
    };
    HomeComponent.prototype.openMapPlc = function (result) {
        console.log(result);
        var url = "https://maps.google.com/?q=" + result.police_lat + "," + result.police_lon + "&ll=" + result.police_lat + "," + result.police_lon + "&z=15";
        window.open(url, '_blank');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_bridge_service__WEBPACK_IMPORTED_MODULE_1__["BridgeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\ng-disaster\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map