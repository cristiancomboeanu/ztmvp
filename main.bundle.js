webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-md-12 forward addMargR\">\n            <nav class=\"navbar navbar-default navbar-fixed-top\">\n                <div class=\"container-fluid\">\n                    <!-- Brand and toggle get grouped for better mobile display -->\n                    <div class=\"navbar-header\">\n                        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        </button>\n                        <a class=\"navbar-brand\" routerLink=\"/\">\n                            <h1 class=\"strip\">ZEALTARDS</h1>\n                        </a>\n                    </div>\n\n                    <!-- Collect the nav links, forms, and other content for toggling -->\n                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                        <ul class=\"nav navbar-nav\">\n                            <li><a [routerLink]=\"['/browse/']\">Browse</a></li>\n                            <li><a href=\"#\">Ambasador</a></li>\n                        </ul>\n                        <form class=\"navbar-form navbar-left\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-default\">Search</button>\n                        </form>\n                        <ul class=\"nav navbar-nav navbar-right\">\n                            <li *ngIf=\"!(af.auth | async)\"><a routerLink=\"/login\">Login</a></li>\n                            <li>\n                                <a *ngIf=\"(af.auth | async)\" [routerLink]=\"['/video-manager/'+userUid+'/add']\" name=\"button\"><span class=\"glyphicon glyphicon-plus smaller\" aria-hidden=\"true\"></span></a>\n                            </li>\n                            <li>\n                                <a *ngIf=\"(af.auth | async)\" [routerLink]=\"['./'+userUid]\" name=\"button\">{{username}}</a>\n                            </li>\n                            <li *ngIf=\"(af.auth | async)\" class=\"dropdown\">\n                                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"caret\"></span></a>\n                                <ul class=\"dropdown-menu\">\n                                    <li><a href=\"#\">Another action</a></li>\n                                    <li role=\"separator\" class=\"divider\"></li>\n                                    <li>\n                                        <a *ngIf=\"(af.auth | async)\" [routerLink]=\"['/edit/'+userUid]\" name=\"button\">Settings</a>\n                                    </li>\n                                    <li><a (click)=\"logout()\">Logout</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                    <!-- /.navbar-collapse -->\n                </div>\n                <!-- /.container-fluid -->\n            </nav>\n        </div>\n        <div class=\"col-md-12 strip pushDown\">\n            <div class=\"wrapper\" [ngClass]=\"{active: status}\">\n                <div class=\"side-bar\">\n                    <h1 class=\"text-center\">Videos</h1>\n                    <ul>\n                        <div class=\"menu\">\n                            <li>\n                                <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Discover <span class=\"glyphicon glyphicon-star pull-right\"></span></a>\n                            </li>\n                            <li>\n                                <a routerLink=\"/classes\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Classes <span class=\"glyphicon glyphicon-th-list pull-right\"></span></a>\n                            </li>\n                            <li>\n                                <a routerLink=\"/contests\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Contests <span class=\"glyphicon glyphicon-globe pull-right\"></span></a>\n                            </li>\n                            <li>\n                                <a routerLink=\"/crews\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Crews <span class=\"glyphicon glyphicon-fire pull-right\"></span></a>\n                            </li>\n                        </div>\n                    </ul>\n                </div>\n                <div class=\"content\">\n                    <div class=\"container-fluid\">\n                        <span (click)=\"toggle(status)\" class=\"glyphicon glyphicon-chevron-left above pushDownChev pointer\"></span>\n                        <router-outlet></router-outlet>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".col-xs-12 {\n  padding: 0; }\n\n.strip {\n  margin: 0;\n  padding: 0; }\n\n.nav > li > a:hover {\n  background: none; }\n\n.navbar {\n  margin-bottom: 0; }\n\n.navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand {\n  padding-top: 6px; }\n\na {\n  cursor: pointer; }\n\n.above {\n  position: fixed; }\n\nspan.smaller {\n  font-size: 0.8em; }\n\n.bg-purple {\n  background: #6327c5; }\n\n.bg-black {\n  background: black; }\n\n.pointer {\n  cursor: pointer; }\n\n.pushDown {\n  margin: 50px 0 0 0; }\n\n.pushDownChev {\n  margin: 60px 0 0 5px; }\n\n.side-bar {\n  background: black;\n  position: fixed;\n  height: 100%;\n  width: 180px;\n  color: #fff;\n  transition: margin-left 0.5s; }\n  .side-bar ul {\n    list-style: none;\n    padding: 0px; }\n    .side-bar ul li.menu-head {\n      padding: 20px 5px 20px 20px; }\n      .side-bar ul li.menu-head a {\n        color: #fff;\n        text-decoration: none;\n        height: 50px; }\n    .side-bar ul .menu-head a {\n      color: #fff;\n      text-decoration: none;\n      height: 50px; }\n    .side-bar ul .menu li a {\n      color: #fff;\n      text-decoration: none;\n      display: inline-table;\n      width: 100%;\n      padding-left: 20px;\n      padding-right: 8px;\n      padding-top: 10px;\n      padding-bottom: 10px; }\n      .side-bar ul .menu li a:hover {\n        border-left: 3px solid #ECECEA;\n        padding-left: 17px; }\n      .side-bar ul .menu li a.active {\n        padding-left: 17px;\n        background: white;\n        color: black;\n        border-left: 3px solid #ECECEA; }\n\n.content1 {\n  transition: padding-left 0.5s; }\n\n.content {\n  padding-left: 145px;\n  transition: padding-left 0.5s; }\n\n.active > .side-bar {\n  margin-left: -145px;\n  transition: margin-left 0.5s; }\n\n.active > .content {\n  padding-left: 30px;\n  transition: padding-left 0.5s; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/app.component.sass"],"names":[],"mappings":"AAEA;EACE,WAAU,EAAI;;AAChB;EACE,UAAS;EACT,WAAU,EAAI;;AAChB;EACE,iBAAgB,EAAI;;AACtB;EACE,iBAAgB,EAAI;;AACtB;EACE,iBAAgB,EAAI;;AACtB;EACE,gBAAe,EAAI;;AACrB;EACE,gBAAe,EAAI;;AACrB;EACE,iBAAgB,EAAI;;AAEtB;EACE,oBAAmB,EAAI;;AACzB;EACE,kBAAiB,EAAI;;AAIvB;EACE,gBAAe,EAAI;;AACrB;EACE,mBAAkB,EAAI;;AACxB;EAEE,qBAAoB,EAAI;;AAC1B;EACE,kBAAiB;EACjB,gBAAe;EACf,aAAY;EACZ,aAAY;EACZ,YAAW;EACX,6BAA4B,EA8BkB;EApChD;IAQI,iBAAgB;IAChB,aAAY,EA2B8B;IApC9C;MAWM,4BAA2B,EAIP;MAf1B;QAaQ,YAAW;QACX,sBAAqB;QACrB,aAAY,EAAI;IAfxB;MAiBM,YAAW;MACX,sBAAqB;MACrB,aAAY,EAAI;IAnBtB;MAqBM,YAAW;MACX,sBAAqB;MACrB,sBAAqB;MACrB,YAAW;MACX,mBAAkB;MAClB,mBAAkB;MAClB,kBAAiB;MACjB,qBAAoB,EAQkB;MApC5C;QA8BQ,+BAA8B;QAC9B,mBAAkB,EAAI;MA/B9B;QAiCQ,mBAAkB;QAClB,kBAAiB;QACjB,aAAY;QACZ,+BAA8B,EAAI;;AAE1C;EACE,8BAA6B,EAAI;;AACnC;EACE,oBAAmB;EACnB,8BAA6B,EAAI;;AAEnC;EAEI,oBAAmB;EACnB,6BAA4B,EAAI;;AAHpC;EAKI,mBAAkB;EAClB,8BAA6B,EAAI","file":"app.component.sass","sourcesContent":["\n// Bootstrap Modifications\n.col-xs-12 {\n  padding: 0; }\n.strip {\n  margin: 0;\n  padding: 0; }\n.nav>li>a:hover {\n  background: none; }\n.navbar {\n  margin-bottom: 0; }\n.navbar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {\n  padding-top: 6px; }\na {\n  cursor: pointer; }\n.above {\n  position: fixed; }\nspan.smaller {\n  font-size: 0.8em; }\n// Colors and BG's\n.bg-purple {\n  background: #6327c5; }\n.bg-black {\n  background: black; }\n\n\n// Navigation Left Implementation\n.pointer {\n  cursor: pointer; }\n.pushDown {\n  margin: 50px 0 0 0; }\n.pushDownChev {\n  // the toggle button for sidebar\n  margin: 60px 0 0 5px; }\n.side-bar {\n  background: black;\n  position: fixed;\n  height: 100%;\n  width: 180px;\n  color: #fff;\n  transition: margin-left 0.5s;\n  ul {\n    list-style: none;\n    padding: 0px;\n    li.menu-head {\n      padding: 20px 5px 20px 20px;\n      a {\n        color: #fff;\n        text-decoration: none;\n        height: 50px; } }\n    .menu-head a {\n      color: #fff;\n      text-decoration: none;\n      height: 50px; }\n    .menu li a {\n      color: #fff;\n      text-decoration: none;\n      display: inline-table;\n      width: 100%;\n      padding-left: 20px;\n      padding-right: 8px;\n      padding-top: 10px;\n      padding-bottom: 10px;\n      &:hover {\n        border-left: 3px solid #ECECEA;\n        padding-left: 17px; }\n      &.active {\n        padding-left: 17px;\n        background: white;\n        color: black;\n        border-left: 3px solid #ECECEA; } } } }\n\n.content1 {\n  transition: padding-left 0.5s; }\n.content {\n  padding-left: 145px;\n  transition: padding-left 0.5s; }\n\n.active > {\n  .side-bar {\n    margin-left: -145px;\n    transition: margin-left 0.5s; }\n  .content {\n    padding-left: 30px;\n    transition: padding-left 0.5s; } }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(af, firebaseService, router) {
        this.af = af;
        this.firebaseService = firebaseService;
        this.router = router;
        this.status = true;
    }
    AppComponent.prototype.toggle = function (status) {
        this.status = !status;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Current Profile to Display
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.currentUser) {
                    _this.userUid = profiles[i].$key;
                    _this.username = profiles[i].username;
                }
            }
        });
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
    };
    AppComponent.prototype.onClick = function () {
        this.router.navigate(['./' + this.userUid], { skipLocationChange: true });
    };
    AppComponent.prototype.login = function () {
        this.af.auth.login();
        this.router.navigate(['/']);
    };
    AppComponent.prototype.logout = function () {
        this.router.navigate(['/']);
        this.currentUser = '';
        this.af.auth.logout();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_add_info_add_info_component__ = __webpack_require__("../../../../../src/app/components/add-info/add-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_contests_contests_component__ = __webpack_require__("../../../../../src/app/components/contests/contests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_videos_add_video_add_video_component__ = __webpack_require__("../../../../../src/app/components/profile/videos/add-video/add-video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_videos_edit_video_edit_video_component__ = __webpack_require__("../../../../../src/app/components/profile/videos/edit-video/edit-video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_videos_edit_video_edit_videos_component__ = __webpack_require__("../../../../../src/app/components/profile/videos/edit-video/edit-videos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_supporters_supporters_component__ = __webpack_require__("../../../../../src/app/components/profile/supporters/supporters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_profile_supporting_supporting_component__ = __webpack_require__("../../../../../src/app/components/profile/supporting/supporting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_browse_browse_component__ = __webpack_require__("../../../../../src/app/components/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_video_manager_video_manager_component__ = __webpack_require__("../../../../../src/app/components/video-manager/video-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_crew_service__ = __webpack_require__("../../../../../src/app/services/crew.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_login_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/components/login/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_crew_crew_component__ = __webpack_require__("../../../../../src/app/components/crew/crew.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_profile_classes_classes_component__ = __webpack_require__("../../../../../src/app/components/profile/classes/classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_profile_videos_videos_component__ = __webpack_require__("../../../../../src/app/components/profile/videos/videos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_profile_classes_add_classes_add_classes_component__ = __webpack_require__("../../../../../src/app/components/profile/classes/add-classes/add-classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_classes_classes_component__ = __webpack_require__("../../../../../src/app/components/classes/classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_classes_manager_classes_manager_component__ = __webpack_require__("../../../../../src/app/components/classes-manager/classes-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_profile_classes_edit_class_edit_class_component__ = __webpack_require__("../../../../../src/app/components/profile/classes/edit-class/edit-class.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_profile_classes_edit_class_edit_classes_component__ = __webpack_require__("../../../../../src/app/components/profile/classes/edit-class/edit-classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_classes_requests_requests_component__ = __webpack_require__("../../../../../src/app/components/classes/requests/requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_classes_members_members_component__ = __webpack_require__("../../../../../src/app/components/classes/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_truncate_pipe__ = __webpack_require__("../../../../../src/app/pipes/truncate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipes_time_ago_pipe__ = __webpack_require__("../../../../../src/app/pipes/time-ago.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_profile_classes_short_classes_short_classes_component__ = __webpack_require__("../../../../../src/app/components/profile/classes/short-classes/short-classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_browse_browse_videos_browse_videos_component__ = __webpack_require__("../../../../../src/app/components/browse/browse-videos/browse-videos.component.ts");
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






































var firebaseConfig = {
    apiKey: "AIzaSyAo_V-2aoQk4eqH8k6pr-pmojU-taZNfp0",
    authDomain: "ztmvp-2d85c.firebaseapp.com",
    databaseURL: "https://ztmvp-2d85c.firebaseio.com",
    projectId: "ztmvp-2d85c",
    storageBucket: "ztmvp-2d85c.appspot.com",
    messagingSenderId: "876505154620"
};
var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AuthProviders */].Google,
    method: __WEBPACK_IMPORTED_MODULE_18_angularfire2__["b" /* AuthMethods */].Popup
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_25__components_profile_videos_videos_component__["a" /* VideosComponent */],
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_add_info_add_info_component__["a" /* AddInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_profile_videos_add_video_add_video_component__["a" /* AddVideoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_videos_edit_video_edit_video_component__["a" /* EditVideoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_videos_edit_video_edit_videos_component__["a" /* EditVideosComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_contests_contests_component__["a" /* ContestsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_add_info_add_info_component__["a" /* AddInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_profile_supporters_supporters_component__["a" /* SupportersComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_profile_supporting_supporting_component__["a" /* SupportingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_browse_browse_component__["a" /* BrowseComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_video_manager_video_manager_component__["a" /* VideoManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_login_sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_crew_crew_component__["a" /* CrewComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_profile_classes_classes_component__["a" /* ClassesProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_profile_classes_add_classes_add_classes_component__["a" /* AddClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_classes_classes_component__["a" /* ClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_classes_manager_classes_manager_component__["a" /* ClassesManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_profile_classes_edit_class_edit_class_component__["a" /* EditClassComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_profile_classes_edit_class_edit_classes_component__["a" /* EditClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_classes_requests_requests_component__["a" /* RequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_classes_members_members_component__["a" /* MembersComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pipes_truncate_pipe__["a" /* TruncatePipe */],
                __WEBPACK_IMPORTED_MODULE_34__pipes_time_ago_pipe__["a" /* TimeAgoPipe */],
                __WEBPACK_IMPORTED_MODULE_34__pipes_time_ago_pipe__["b" /* StringToDate */],
                __WEBPACK_IMPORTED_MODULE_35__components_profile_classes_short_classes_short_classes_component__["a" /* ShortClassesComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_browse_browse_videos_browse_videos_component__["a" /* BrowseVideosComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseConfig, firebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__app_routing__["b" /* appRoutingProviders */], __WEBPACK_IMPORTED_MODULE_19__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_20__services_crew_service__["a" /* CrewService */], __WEBPACK_IMPORTED_MODULE_25__components_profile_videos_videos_component__["a" /* VideosComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_add_info_add_info_component__ = __webpack_require__("../../../../../src/app/components/add-info/add-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_contests_contests_component__ = __webpack_require__("../../../../../src/app/components/contests/contests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_videos_add_video_add_video_component__ = __webpack_require__("../../../../../src/app/components/profile/videos/add-video/add-video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_videos_edit_video_edit_video_component__ = __webpack_require__("../../../../../src/app/components/profile/videos/edit-video/edit-video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_profile_videos_edit_video_edit_videos_component__ = __webpack_require__("../../../../../src/app/components/profile/videos/edit-video/edit-videos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_profile_edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_profile_supporters_supporters_component__ = __webpack_require__("../../../../../src/app/components/profile/supporters/supporters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_supporting_supporting_component__ = __webpack_require__("../../../../../src/app/components/profile/supporting/supporting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_browse_browse_component__ = __webpack_require__("../../../../../src/app/components/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_video_manager_video_manager_component__ = __webpack_require__("../../../../../src/app/components/video-manager/video-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/components/login/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_crew_crew_component__ = __webpack_require__("../../../../../src/app/components/crew/crew.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_profile_classes_classes_component__ = __webpack_require__("../../../../../src/app/components/profile/classes/classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_profile_videos_videos_component__ = __webpack_require__("../../../../../src/app/components/profile/videos/videos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_profile_classes_add_classes_add_classes_component__ = __webpack_require__("../../../../../src/app/components/profile/classes/add-classes/add-classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_classes_classes_component__ = __webpack_require__("../../../../../src/app/components/classes/classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_classes_manager_classes_manager_component__ = __webpack_require__("../../../../../src/app/components/classes-manager/classes-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_profile_classes_edit_class_edit_class_component__ = __webpack_require__("../../../../../src/app/components/profile/classes/edit-class/edit-class.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_profile_classes_edit_class_edit_classes_component__ = __webpack_require__("../../../../../src/app/components/profile/classes/edit-class/edit-classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_classes_requests_requests_component__ = __webpack_require__("../../../../../src/app/components/classes/requests/requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_classes_members_members_component__ = __webpack_require__("../../../../../src/app/components/classes/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_profile_classes_short_classes_short_classes_component__ = __webpack_require__("../../../../../src/app/components/profile/classes/short-classes/short-classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_browse_browse_videos_browse_videos_component__ = __webpack_require__("../../../../../src/app/components/browse/browse-videos/browse-videos.component.ts");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



























var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3__components_add_info_add_info_component__["a" /* AddInfoComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_14__components_login_sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'crews', component: __WEBPACK_IMPORTED_MODULE_15__components_crew_crew_component__["a" /* CrewComponent */] },
    { path: 'browse/:profile/:username', component: __WEBPACK_IMPORTED_MODULE_26__components_browse_browse_videos_browse_videos_component__["a" /* BrowseVideosComponent */] },
    { path: 'browse', component: __WEBPACK_IMPORTED_MODULE_11__components_browse_browse_component__["a" /* BrowseComponent */] },
    { path: 'classes', component: __WEBPACK_IMPORTED_MODULE_19__components_classes_classes_component__["a" /* ClassesComponent */] },
    { path: 'contests', component: __WEBPACK_IMPORTED_MODULE_4__components_contests_contests_component__["a" /* ContestsComponent */] },
    { path: 'classes/add', component: __WEBPACK_IMPORTED_MODULE_18__components_profile_classes_add_classes_add_classes_component__["a" /* AddClassesComponent */] },
    { path: 'class/requests/:username', component: __WEBPACK_IMPORTED_MODULE_23__components_classes_requests_requests_component__["a" /* RequestsComponent */] },
    { path: 'class/members/:username', component: __WEBPACK_IMPORTED_MODULE_24__components_classes_members_members_component__["a" /* MembersComponent */] },
    { path: 'supporting/:username', component: __WEBPACK_IMPORTED_MODULE_10__components_profile_supporting_supporting_component__["a" /* SupportingComponent */] },
    { path: 'supporters/:username', component: __WEBPACK_IMPORTED_MODULE_9__components_profile_supporters_supporters_component__["a" /* SupportersComponent */] },
    { path: 'video-edit/:username', component: __WEBPACK_IMPORTED_MODULE_6__components_profile_videos_edit_video_edit_video_component__["a" /* EditVideoComponent */] },
    { path: 'edit/:username', component: __WEBPACK_IMPORTED_MODULE_8__components_profile_edit_profile_edit_profile_component__["a" /* EditProfileComponent */] },
    { path: 'edit-class/:username', component: __WEBPACK_IMPORTED_MODULE_21__components_profile_classes_edit_class_edit_class_component__["a" /* EditClassComponent */] },
    { path: 'classes/:username', component: __WEBPACK_IMPORTED_MODULE_25__components_profile_classes_short_classes_short_classes_component__["a" /* ShortClassesComponent */] },
    { path: 'classes/:username/:username', component: __WEBPACK_IMPORTED_MODULE_16__components_profile_classes_classes_component__["a" /* ClassesProfileComponent */] },
    { path: 'video-manager/:username', component: __WEBPACK_IMPORTED_MODULE_12__components_video_manager_video_manager_component__["a" /* VideoManagerComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_profile_videos_edit_video_edit_videos_component__["a" /* EditVideosComponent */] },
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_5__components_profile_videos_add_video_add_video_component__["a" /* AddVideoComponent */] },
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: '**', redirectTo: '', pathMatch: 'full' },
        ]
    },
    { path: ':profile/:username', component: __WEBPACK_IMPORTED_MODULE_17__components_profile_videos_videos_component__["a" /* VideosComponent */] },
    { path: 'classes-manager/:username', component: __WEBPACK_IMPORTED_MODULE_20__components_classes_manager_classes_manager_component__["a" /* ClassesManagerComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_22__components_profile_classes_edit_class_edit_classes_component__["a" /* EditClassesComponent */] },
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_18__components_profile_classes_add_classes_add_classes_component__["a" /* AddClassesComponent */] },
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: '**', redirectTo: '', pathMatch: 'full' },
        ]
    },
    { path: ':username', component: __WEBPACK_IMPORTED_MODULE_2__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-info/add-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"col-md-offset-1 col-md-10\">\n        <form (submit)=\"onAddSubmit()\">\n            <div *ngFor=\"let profile of profiles\">\n                <div *ngIf=\"username === profile?.$key\">\n                    <h2>The username {{username}} is already taken. Please try a different one.</h2>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <h1>Username *</h1>\n                <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" required>\n            </div>\n            <div class=\"form-group\">\n                <h1>Styles *</h1>\n                <div *ngFor=\"let style of styles\">\n                    <div class=\"col-md-4\">\n                        <div class=\"col-md-5\">\n                            <input type=\"checkbox\" name=\"style\" id=\"change\" value=\"{{style.value}}\" [(ngModel)]=\"style.checked\" />\n                        </div>\n                        <div class=\"col-md-pull-2 col-md-7\">\n                            <h3>{{style?.display}}</h3>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h1>Profile Picture *</h1>\n\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <input id=\"image\" name=\"image\" [(ngModel)]=\"image\" type=\"file\" required>\n\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <h1>Description</h1>\n                <textarea type=\"text\" [(ngModel)]=\"description\" name=\"description\" required></textarea>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h1>Promo Code (USE - CRISTIANTARD) *</h1>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <input type=\"text\" (keyup)=\"checkPromo(promo)\" [(ngModel)]=\"promo\" name=\"promo\" required>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <span *ngIf=\"promoUniq?.promo === promo\" class=\"glyphicon glyphicon-globe \"></span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-12 pushDown menu\">\n                    <button type=\"submit\" [disabled]=\"promoUniq?.promo !== promo\" value=\"submit\" class=\"btn btn-success\"><h4>Create</h4></button>\n\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-info/add-info.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 50px 0 0 50px; }\n\n#change {\n  margin-top: 25px; }\n\ninput {\n  margin-bottom: 30px; }\n\n.bg-grey {\n  background: #e8e8e8; }\n\n.bg-white {\n  background: white; }\n\nh1 {\n  color: #6327c5; }\n\ninput[type=\"text\"] {\n  background-color: transparent;\n  color: black;\n  outline: none;\n  outline-style: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid #eeeeee 1px;\n  padding: 20px 10px 10px 15px;\n  margin-bottom: 20px;\n  width: 100%;\n  font-size: 1.5em; }\n\ninput::-webkit-input-placeholder {\n  font-size: 1.5em;\n  line-height: 3; }\n\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  .menu a:hover, button:hover {\n    background: white;\n    color: black;\n    border: 3px solid #6327c5; }\n  .menu a.active, button.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; }\n\ntextarea {\n  width: 100%;\n  font-size: 1.6em; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/add-info/add-info.component.sass"],"names":[],"mappings":"AACA;EACE,uBAAsB,EAAI;;AAE5B;EACE,iBAAgB,EAAI;;AACtB;EACE,oBAAmB,EAAI;;AAEzB;EACE,oBAAmB,EAAI;;AACzB;EACE,kBAAiB,EAAI;;AACvB;EACE,eAAc,EAAI;;AAEpB;EACI,8BAA6B;EAC7B,aAAY;EACZ,cAAa;EACb,oBAAmB;EACnB,iBAAgB;EAChB,kBAAiB;EACjB,mBAAkB;EAClB,iCAAgC;EAChC,6BAA4B;EAC5B,oBAAmB;EACnB,YAAW;EAET,iBAAW,EAAM;;AAEvB;EACE,iBAAgB;EAChB,eAAc,EAAI;;AAIpB;EACE,aAAY;EACZ,0BAAyB;EACzB,0BAAyB;EACzB,sBAAqB;EACrB,mBAAkB;EAClB,oBAAmB;EACnB,kBAAiB;EACjB,qBAAoB,EAQA;EAhBtB;IAUI,kBAAiB;IACjB,aAAY;IACZ,0BAAyB,EAAI;EAZjC;IAcI,kBAAiB;IACjB,0BAAyB;IACzB,aAAY,EAAI;;AAEpB;EACE,YAAW;EACX,iBAAgB,EAAI","file":"add-info.component.sass","sourcesContent":["// Bootstrap Changes\n.container-fluid {\n  padding: 50px 0 0 50px; }\n// Layout Changes\n#change {\n  margin-top: 25px; }\ninput {\n  margin-bottom: 30px; }\n// Colors and BG's\n.bg-grey {\n  background: #e8e8e8; }\n.bg-white {\n  background: white; }\nh1 {\n  color: #6327c5; }\n// Input modifications\ninput[type=\"text\"] {\n    background-color: transparent;\n    color: black;\n    outline: none;\n    outline-style: none;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: solid #eeeeee 1px;\n    padding: 20px 10px 10px 15px;\n    margin-bottom: 20px;\n    width: 100%;\n    font: {\n      size: 1.5em; } }\n\ninput::-webkit-input-placeholder {\n  font-size: 1.5em;\n  line-height: 3; }\n\n\n// Customize btn\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  &:hover {\n    background: white;\n    color: black;\n    border: 3px solid #6327c5; }\n  &.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; } }\n// Other changes\ntextarea {\n  width: 100%;\n  font-size: 1.6em; }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-info/add-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddInfoComponent = (function () {
    function AddInfoComponent(firebaseService, router, route, af) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.af = af;
        this.level = 'Beginner';
        this.count = 0;
        this.sub = true;
        this.styles = [
            { id: '0', display: 'StreetDance', checked: false },
            { id: '1', display: 'Modern', checked: false },
            { id: '2', display: 'Ballet', checked: false },
            { id: '3', display: 'Jazz', checked: false },
        ];
    }
    AddInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get current email
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.userin = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.email;
            }
            return _this.userin;
        });
        // Get current uid
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.uid = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.uid;
            }
            return _this.uid;
        });
        // Get current users
        this.firebaseService.getUsers().subscribe(function (users) {
            _this.users = users;
        });
        // Get current profiles
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
        });
    };
    AddInfoComponent.prototype.checkPromo = function (promo) {
        var _this = this;
        this.firebaseService.getProfilePromo(promo).subscribe(function (profiles) {
            _this.promoUniq = profiles[0];
        });
    };
    AddInfoComponent.prototype.onAddSubmit = function () {
        var referralInfo = {
            username: this.username,
            userin: this.userin
        };
        var referral = {
            referralCount: this.promoUniq.referralCount + 1,
        };
        var user = {
            username: this.username,
            userin: this.userin
        };
        var styles = {
            styles: this.styles
        };
        var profile = {
            level: this.level,
            username: this.username,
            displayName: this.username,
            description: this.description,
            supporters: this.count,
            supportingAdd: this.count,
            sub: this.sub,
            userin: this.userin,
            support: this.sub,
            styles: this.styles,
            referralCount: this.count,
            promo: __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref().child('profiles').push().key,
            views: this.count,
            classes: this.count,
        };
        this.firebaseService.updateUser(this.uid, user); // Push user
        this.firebaseService.addProfile(this.username, profile); // Update profile database, create profile
        this.firebaseService.updateProfile(this.promoUniq.$key, referral); // Update refferal count of user with the promo code
        this.firebaseService.updateProfile(this.promoUniq.$key + '/referral/' + this.username, referralInfo); // Update refferal count of user with the promo code
        this.router.navigate(['/']); // Navigate back dashboard
    };
    AddInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-add-info',
            template: __webpack_require__("../../../../../src/app/components/add-info/add-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-info/add-info.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _d) || Object])
    ], AddInfoComponent);
    return AddInfoComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/add-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/browse/browse-videos/browse-videos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 \">\n    <div class=\"col-md-6\" (mouseover)=\"over(edit)\" (mouseleave)=\"leave(edit)\">\n        <div class=\"col-md-12 heightVid\">\n            <video #edit width=\"100%\" height=\"100%\" src=\"{{vid?.url}}\"></video>\n        </div>\n        <div class=\"col-md-1 \">\n            <div class=\"box\">\n                <img class=\"img\" src=\"{{vid?.imgUrl}}\" alt=\"profile-picture\">\n            </div>\n        </div>\n        <div class=\"col-md-8 \" *ngIf=\"vid?.userin !== currentUser\">\n            <div class=\"inline-blockLeft\">\n                <p><a class=\"cl-purple\" [routerLink]=\"['/'+vid?.username]\">{{vid?.username}}</a></p>\n                <button class=\"btn\" *ngIf=\"!profile?.support[supportKey]?.support\" class=\"btn btnChange\" (click)=\"supportProfile(vid?.username)\">SUPPORT</button>\n                <button class=\"btn\" *ngIf=\"profile?.support[supportKey]?.support\" class=\"btn btnChange btn-danger\" (click)=\"unsupportProfile(vid?.username)\">UNSUPPORT</button>\n                <h3>{{profile?.supporters}} supporters</h3>\n            </div>\n            <div class=\"inline-blockRight\">\n                <button class=\"btn\" *ngIf=\"!zealVideo?.addZeal[supportKey]?.addZeal\" class=\"btn btnChange\" (click)=\"zeal(zealVideo?.$key)\">ZEAL</button>\n                <button class=\"btn\" *ngIf=\"zealVideo?.addZeal[supportKey]?.addZeal\" class=\"btn btnChange btn-danger\" (click)=\"unzeal(zealVideo?.$key)\">UNZEAL</button>\n                <h3>{{zealCount}} zeals</h3>\n            </div>\n        </div>\n        <div class=\"col-md-4\" *ngIf=\"vid?.userin === currentUser\">\n            <p><a class=\"cl-purple\" [routerLink]=\"['/'+vid?.username]\">{{vid?.username}}</a></p>\n            <button [routerLink]=\"['/video-edit/'+vid?.$key]\" class=\"btn\">Edit Video</button>\n        </div>\n    </div>\n    <div class=\"col-md-4 commentSection \">\n        <div class=\"row\">\n            <div class=\"inline-block btnAlign\">\n                <button class=\"btn\" (click)=\"changeState('about')\">About</button>\n                <button class=\"btn\" (click)=\"changeState('comment')\">Comment</button>\n            </div>\n        </div>\n        <div *ngIf=\"appState === 'about'\">\n            <h1>{{vid?.name}}</h1>\n            <p>{{vid?.description}}</p>\n            <div class=\"inline-block row\">\n                <p>Styles:</p>\n                <div *ngFor=\"let style of vid?.styles\">\n                    <div *ngIf=\"style.checked === true\">\n                        <p class=\"cl-white\">#{{style.display | lowercase}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"appState === 'comment'\">\n            <div class=\"messageBox\" style=\"overflow-y: scroll;\">\n                <div *ngFor=\"let comment of comments\">\n                    <div *ngIf=\"comment?.video === vid?.$key\">\n                        <div class=\"col-md-11\">\n                            <div class=\"inline-block padd\">\n                                <div>\n                                    <img src=\"{{comment?.url}}\" alt=\"comment picture\">\n                                </div>\n                                <h4><a [routerLink]=\"['/'+comment?.key]\">{{comment?.key}}</a></h4>\n                                :\n                                <h4>&nbsp;{{comment?.comm}}</h4>\n                            </div>\n                        </div>\n                        <div *ngIf=\"comment?.key === supportKey\">\n                            <div class=\"col-md-1\">\n                                <span style=\"cursor: pointer\" (click)=\"deleteComment(comment?.$key)\">x</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-9\">\n                <input type=\"text\" name=\"comment\" [(ngModel)]=\"comment\" placeholder=\"Type a comment\">\n            </div>\n            <div class=\"col-md-2 menu\">\n                <button class=\"btn\" type=\"submit\" (click)=\"addComment()\" value=\"Send\">Send</button>\n            </div>\n        </div>\n    </div>\n\n    <div *ngFor=\"let video of videos; let i=index\">\n        <div class=\"col-md-2\" *ngIf=\"video?.$key !== vid?.$key\">\n            <div>\n                <video [routerLink]=\"['/browse/'+video?.username+'/'+video?.$key]\" width=\"100%\" height=\"auto\" src=\"{{video?.url}}\"></video>\n                <div class=\"positionRelative\">\n                    <p class=\"modifiedBtn\">{{video?.duration / 100 | number: '1.2-2'}}</p>\n                </div>\n            </div>\n            <div class=\"minH lH\">\n                <div class=\"col-md-12 \">\n                    <h4>{{video?.name | truncate : 50}}</h4>\n                </div>\n                <div class=\"row \">\n                    <div class=\"inline-block\">\n                        <p>by:&nbsp;<a [routerLink]=\"['/'+video?.username]\">@{{video?.username}}</a></p>\n                        <p>&nbsp; • &nbsp;<span class=\"glyphicon glyphicon-globe\"></span><span class=\"glyphicon glyphicon-globe \"></span><span class=\"glyphicon glyphicon-globe\"></span><span class=\"pull-right\">&nbsp; • &nbsp;</span></p>\n                        <p><span class=\"glyphicon glyphicon-globe pull-right\"></span></p>\n                    </div>\n                </div>\n                <div class=\"row text-left\">\n                    <div class=\"inline-block\">\n                        <p>{{zeals[i]?.zeals}} zeals</p>\n                        <p>&nbsp; • &nbsp; {{video?.views}} views </p>\n                        <p>&nbsp; • &nbsp;{{video?.date | toDate | timeAgo}} </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/browse/browse-videos/browse-videos.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 0;\n  margin: 0; }\n\n.pushUp {\n  margin-top: 50px; }\n\n.fixed {\n  height: 100%; }\n\n.pull-center {\n  margin: 0;\n  padding: 0; }\n\n.col-md-12 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-1 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-8 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-2 {\n  margin-top: 15px; }\n\n.modified {\n  margin: 50px 30px; }\n\n.messageBox {\n  max-height: 920px;\n  height: 392px; }\n\n.commentSection {\n  margin-bottom: 40; }\n\nimg {\n  height: 50px; }\n\n.box {\n  background: white;\n  text-align: center;\n  height: 60px;\n  border-radius: 50%;\n  overflow: hidden; }\n  .box img {\n    background-size: cover;\n    height: 100%; }\n\n.minH {\n  min-height: 103px; }\n\n.padd {\n  padding: 10px 8px 10px 10px; }\n\ndiv.row.text-left {\n  line-height: 0.4; }\n\nh4 {\n  font-size: 1.08em;\n  padding: 0;\n  margin: 0; }\n\np:nth-child(1) {\n  margin: 0 0 0 15px; }\n\na {\n  color: #6327c5;\n  cursor: pointer; }\n\n.inline-block {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.container-fluid {\n  padding: 0;\n  margin: 0; }\n\n.pushUp {\n  margin-top: 50px; }\n\n.fixed {\n  height: 100%; }\n\n.pull-center {\n  margin: 0;\n  padding: 0; }\n\n.col-md-12 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-1 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-8 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-2 {\n  margin-top: 15px; }\n\n.modified {\n  margin: 50px 30px; }\n\n.messageBox {\n  max-height: 920px;\n  height: 392px; }\n\n.commentSection {\n  margin-bottom: 40; }\n\n.minH {\n  min-height: 103px; }\n\n.padd {\n  padding: 10px 8px 10px 10px; }\n\n.purple {\n  color: #6327c5; }\n\nh3 {\n  padding: 0 0 0 0;\n  margin: 5px 0 0 5px; }\n\n.btnAlign {\n  margin-left: 15px; }\n\n.bg-white {\n  background: white; }\n\n.bg-purple {\n  background: #6327c5; }\n\n.inline-blockLeft {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.inline-blockRight {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\ninput[type=\"text\"] {\n  background-color: transparent;\n  color: black;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid #eeeeee 1px;\n  padding: 20px 10px 10px 15px;\n  margin-bottom: 10px;\n  width: 100%;\n  font-size: 1.2em; }\n\n.positionRelative {\n  position: relative; }\n\n.modifiedBtn {\n  position: absolute;\n  right: 5px;\n  bottom: 13px;\n  color: grey;\n  padding: 2px 3px;\n  background: black; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/browse/browse-videos/browse-videos.component.sass"],"names":[],"mappings":"AAEA;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,iBAAgB,EAAI;;AACtB;EACE,aAAY,EAAI;;AAClB;EACE,UAAS;EACT,WAAU,EAAI;;AAChB;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,iBAAgB,EAAI;;AACtB;EACE,kBAAiB,EAAI;;AACvB;EACE,kBAAiB;EACjB,cAAa,EAAI;;AACnB;EACE,kBAAiB,EAAI;;AAEvB;EACE,aAAY,EAAI;;AAClB;EACE,kBAAiB;EACjB,mBAAkB;EAClB,aAAY;EACZ,mBAAkB;EAClB,iBAAgB,EAGI;EARtB;IAOI,uBAAsB;IACtB,aAAY,EAAI;;AACpB;EACE,kBAAiB,EAAI;;AACvB;EACE,4BAA2B,EAAI;;AAEjC;EACE,iBAAgB,EAAI;;AACtB;EAEI,kBAAY;EACd,WAAU;EACV,UAAS,EAAI;;AACf;EACE,mBAAkB,EAAI;;AACxB;EACE,eAAc;EACd,gBAAe,EAAI;;AAGrB;EACE,4BAAoB;EAApB,4BAAoB;EAApB,qBAAoB,EAAI;;AAI1B;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,iBAAgB,EAAI;;AACtB;EACE,aAAY,EAAI;;AAClB;EACE,UAAS;EACT,WAAU,EAAI;;AAChB;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,iBAAgB,EAAI;;AACtB;EACE,kBAAiB,EAAI;;AACvB;EACE,kBAAiB;EACjB,cAAa,EAAI;;AACnB;EACE,kBAAiB,EAAI;;AACvB;EACE,kBAAiB,EAAI;;AACvB;EACE,4BAA2B,EAAI;;AACjC;EACE,eAAc,EAAI;;AAEpB;EACE,iBAAgB;EAChB,oBAAmB,EAAI;;AAGzB;EACE,kBAAiB,EAAI;;AAEvB;EACE,kBAAiB,EAAI;;AACvB;EACE,oBAAmB,EAAI;;AACzB;EACE,4BAAoB;EAApB,4BAAoB;EAApB,qBAAoB,EAAI;;AAC1B;EACE,4BAAoB;EAApB,4BAAoB;EAApB,qBAAoB,EAAI;;AAE1B;EACI,8BAA6B;EAC7B,aAAY;EACZ,cAAa;EACb,iBAAgB;EAChB,kBAAiB;EACjB,mBAAkB;EAClB,iCAAgC;EAChC,6BAA4B;EAC5B,oBAAmB;EACnB,YAAW;EAET,iBAAW,EAAM;;AAEvB;EACE,mBAAkB,EAAI;;AACxB;EACE,mBAAkB;EAClB,WAAU;EACV,aAAY;EACZ,YAAW;EACX,iBAAgB;EAChB,kBAAiB,EAAI","file":"browse-videos.component.sass","sourcesContent":["\n// Bootstrap Modifications\n.container-fluid {\n  padding: 0;\n  margin: 0; }\n.pushUp {\n  margin-top: 50px; }\n.fixed {\n  height: 100%; }\n.pull-center {\n  margin: 0;\n  padding: 0; }\n.col-md-12 {\n  padding: 0;\n  margin: 0; }\n.col-md-1 {\n  padding: 0;\n  margin: 0; }\n.col-md-8 {\n  padding: 0;\n  margin: 0; }\n.col-md-2 {\n  margin-top: 15px; }\n.modified {\n  margin: 50px 30px; }\n.messageBox {\n  max-height: 920px;\n  height: 392px; }\n.commentSection {\n  margin-bottom: 40; }\n// Profile image\nimg {\n  height: 50px; }\n.box {\n  background: white;\n  text-align: center;\n  height: 60px;\n  border-radius: 50%;\n  overflow: hidden;\n  img {\n    background-size: cover;\n    height: 100%; } }\n.minH {\n  min-height: 103px; }\n.padd {\n  padding: 10px 8px 10px 10px; }\n\ndiv.row.text-left {\n  line-height: 0.4; }\nh4 {\n  font: {\n    size: 1.08em; }\n  padding: 0;\n  margin: 0; }\np:nth-child(1) {\n  margin: 0 0 0 15px; }\na {\n  color: #6327c5;\n  cursor: pointer; }\n\n\n.inline-block {\n  display: inline-flex; }\n\n\n// Bootstrap Modifications\n.container-fluid {\n  padding: 0;\n  margin: 0; }\n.pushUp {\n  margin-top: 50px; }\n.fixed {\n  height: 100%; }\n.pull-center {\n  margin: 0;\n  padding: 0; }\n.col-md-12 {\n  padding: 0;\n  margin: 0; }\n.col-md-1 {\n  padding: 0;\n  margin: 0; }\n.col-md-8 {\n  padding: 0;\n  margin: 0; }\n.col-md-2 {\n  margin-top: 15px; }\n.modified {\n  margin: 50px 30px; }\n.messageBox {\n  max-height: 920px;\n  height: 392px; }\n.commentSection {\n  margin-bottom: 40; }\n.minH {\n  min-height: 103px; }\n.padd {\n  padding: 10px 8px 10px 10px; }\n.purple {\n  color: #6327c5; }\n\nh3 {\n  padding: 0 0 0 0;\n  margin: 5px 0 0 5px; }\nh4 {}\n\n.btnAlign {\n  margin-left: 15px; }\n\n.bg-white {\n  background: white; }\n.bg-purple {\n  background: #6327c5; }\n.inline-blockLeft {\n  display: inline-flex; }\n.inline-blockRight {\n  display: inline-flex; }\n\ninput[type=\"text\"] {\n    background-color: transparent;\n    color: black;\n    outline: none;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: solid #eeeeee 1px;\n    padding: 20px 10px 10px 15px;\n    margin-bottom: 10px;\n    width: 100%;\n    font: {\n      size: 1.2em; } }\n\n.positionRelative {\n  position: relative; }\n.modifiedBtn {\n  position: absolute;\n  right: 5px;\n  bottom: 13px;\n  color: grey;\n  padding: 2px 3px;\n  background: black; }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/browse/browse-videos/browse-videos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseVideosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrowseVideosComponent = (function () {
    function BrowseVideosComponent(firebaseService, af, route) {
        this.firebaseService = firebaseService;
        this.af = af;
        this.route = route;
        this.sub = false;
        this.appState = 'about';
    }
    BrowseVideosComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id to fetch the user details
        this.supportIsNull = this.route.params.subscribe(function (params) {
            // Get current Video
            _this.firebaseService.getVideoDetails(params['username']).subscribe(function (video) {
                _this.vid = video;
            });
            // Get Zeal to Display
            _this.firebaseService.getZealDetails(params['username']).subscribe(function (zeal) {
                _this.zealVideo = zeal;
                _this.zealCount = zeal.zeals;
            });
            // Get Comments to Display
            _this.firebaseService.getProfileDetails(params['profile']).subscribe(function (profile) {
                _this.profile = profile;
            });
            // Get Comments to Display
            _this.firebaseService.getZeals().subscribe(function (zeals) {
                _this.zeals = zeals;
            });
        });
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        this.firebaseService.getVideos().subscribe(function (videos) {
            _this.videos = videos;
        });
        // Get Current Profile to Display
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.currentUser) {
                    _this.supportKey = profiles[i].$key;
                    _this.supportUser = profiles[i].username;
                    _this.supportUrl = profiles[i].url;
                    _this.supportingAdd = profiles[i].supportingAdd;
                }
            }
        });
        // Get Comments to Display
        this.firebaseService.getZeals().subscribe(function (zeals) {
            _this.zeals = zeals;
        });
        // Get Comments to Display
        this.firebaseService.getComments().subscribe(function (comments) {
            _this.comments = comments;
        });
    };
    BrowseVideosComponent.prototype.changeState = function (state) {
        this.appState = state.toString();
    };
    BrowseVideosComponent.prototype.addComment = function () {
        var comment = {
            comm: this.comment,
            key: this.supportKey,
            url: this.supportUrl,
            video: this.vid.$key
        };
        this.firebaseService.addComment(comment);
        this.comment = "";
    };
    BrowseVideosComponent.prototype.deleteComment = function (key) {
        this.firebaseService.deleteComment(key);
    };
    BrowseVideosComponent.prototype.over = function (video) {
        if (!video.hasAttribute("controls")) {
            video.setAttribute("controls", "controls");
        }
    };
    BrowseVideosComponent.prototype.leave = function (video) {
        if (video.hasAttribute("controls")) {
            video.removeAttribute("controls");
        }
    };
    // SUPPORT PROFILE BTN IMPLEMENTATION
    BrowseVideosComponent.prototype.supportProfile = function (id) {
        var _this = this;
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // 1. Add 1 PROFILES support
        var addSupport = {
            supporters: this.profile.supporters + 1
        };
        // 2. Add 1 PROFILES
        var addSupporting = {
            supportingAdd: this.supportingAdd + 1
        };
        // 3. Add support LoggedIn user
        var support = {
            support: this.profile.userin
        };
        // 4. Add on LoggedIn Profile support for userin
        var supporting = {
            supporting: this.profile.userin
        };
        // 5. Add To the supports LoggedIn user information
        var supportProfile = {
            url: this.supportUrl,
            username: this.supportUser,
            key: this.supportKey
        };
        // 6. Add To the supports Userin Profile LoggedIn User information
        var supportingProfile = {
            url: this.profile.url,
            username: this.profile.username,
            key: this.profile.$key
        };
        // 7. Add support LoggedIn user
        var sub = {
            support: true
        };
        // Methods used on Profiles Data
        this.firebaseService.updateProfile(id, addSupport);
        this.firebaseService.updateProfile(this.supportKey, addSupporting);
        this.firebaseService.updateProfile(id + '/support/' + this.supportKey, support);
        this.firebaseService.updateProfile(this.supportKey + '/supporting/' + id, supporting);
        // Methods used on Supports Data
        this.firebaseService.updateSupport(this.supportKey, supportProfile);
        this.firebaseService.updateSupport(this.supportKey + '/' + id, support);
        this.firebaseService.updateSupport(id + '/' + this.supportKey, supporting);
        this.firebaseService.updateSupport(id, supportingProfile);
    };
    // UNSUPPORT PROFILE BTN IMPLEMENTATION
    BrowseVideosComponent.prototype.unsupportProfile = function (id) {
        // 1. Take 1 PROFILES support
        var takeSupport = {
            supporters: this.profile.supporters - 1
        };
        // 1. Take 1 PROFILES unsupport
        var takeSupporting = {
            supportingAdd: this.supportingAdd - 1
        };
        // Set when profile support === 0
        var support = {
            support: true
        };
        // Set when profile supportingAdd === 0
        var supporting = {
            supporting: true
        };
        // Change sub to true
        var sub = {
            support: true
        };
        // Profiles Methods
        this.firebaseService.updateProfile(id, takeSupport);
        this.firebaseService.updateProfile(this.supportKey, takeSupporting);
        this.firebaseService.deleteProfile(id + '/support/' + this.supportKey);
        this.firebaseService.deleteProfile(this.supportKey + '/supporting/' + id);
        // Supports Methods
        this.firebaseService.deleteSupport(this.supportKey + "/" + id + '/support/');
        this.firebaseService.deleteSupport(id + "/" + this.supportKey + '/supporting/');
        // When User is equal to 0
        if (this.profile.supporters === 0) {
            // Profiles Methods
            this.firebaseService.updateProfile(id, support);
            this.firebaseService.updateProfile(this.supportKey, supporting);
        }
    };
    // Support button on and off for videos
    BrowseVideosComponent.prototype.zeal = function (id) {
        var add = {
            zeals: this.zealCount + 1,
        };
        var zeal = {
            addZeal: true,
        };
        this.firebaseService.updateZeal(id, add);
        this.firebaseService.updateZeal(id + "/addZeal/" + this.supportKey, zeal);
    };
    // Unsupport button on and off for videos
    BrowseVideosComponent.prototype.unzeal = function (id) {
        var take = {
            zeals: this.zealCount - 1,
        };
        var zeal = {
            addZeal: false
        };
        if (this.zealCount > 1) {
            this.firebaseService.updateZeal(id, take);
            this.firebaseService.deleteZeal(id + "/addZeal/" + this.supportKey + '/addZeal');
        }
        else {
            this.firebaseService.updateZeal(id, take);
            this.firebaseService.updateZeal(id, zeal);
        }
    };
    ;
    BrowseVideosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-browse-videos',
            template: __webpack_require__("../../../../../src/app/components/browse/browse-videos/browse-videos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/browse/browse-videos/browse-videos.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], BrowseVideosComponent);
    return BrowseVideosComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/browse-videos.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \">\n    <select (change)=\"navigateTo($event.target.value)\">\n        <option value=\"filter\">Filter</option>\n        <option value=\"popular\">Popular</option>\n    </select>\n    <div class=\"row \">\n        <div class=\"bg-white container-fluid\">\n\n            <div *ngFor=\"let video of videos;\">\n                <div class=\"col-md-2\">\n                    <div>\n                        <video [routerLink]=\"['/browse/'+video?.username+'/'+video?.$key]\" width=\"100%\" height=\"auto\" src=\"{{video?.url}}\"></video>\n                        <div class=\"positionRelative\">\n                            <p class=\"modifiedBtn\">{{video?.duration / 100 | number: '1.2-2'}}</p>\n                        </div>\n                    </div>\n                    <div class=\"minH lH\">\n                        <div class=\"col-md-12 \">\n                            <h4>{{video?.name | truncate : 50}}</h4>\n                        </div>\n                        <div class=\"row \">\n                            <div class=\"inline-block\">\n                                <p>by:&nbsp;<a [routerLink]=\"['/'+video?.username]\">@{{video?.username}}</a></p>\n                                <p>&nbsp; • &nbsp;<span class=\"glyphicon glyphicon-globe\"></span><span class=\"glyphicon glyphicon-globe \"></span><span class=\"glyphicon glyphicon-globe\"></span><span class=\"pull-right\">&nbsp; • &nbsp;</span></p>\n                                <p><span class=\"glyphicon glyphicon-globe pull-right\"></span></p>\n                            </div>\n                        </div>\n                        <div class=\"row text-left\">\n                            <div class=\"inline-block\">\n                                <div *ngFor=\"let zeal of zeals; let i=index;\">\n                                    <p *ngIf=\"zeal?.$key === video?.$key\">{{zeal?.zeals}} zeals</p>\n                                </div>\n                                <p>&nbsp; • &nbsp; {{video?.views}} views </p>\n                                <p>&nbsp; • &nbsp;{{video?.date | toDate | timeAgo}} </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/browse/browse.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "div.container-fluid {\n  padding: 10px 0 0 30px; }\n\n.pushUp {\n  margin-top: 50px; }\n\n.fixed {\n  height: 100%; }\n\n.pull-center {\n  margin: 0;\n  padding: 0; }\n\n.col-md-12 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-1 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-8 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-2 {\n  margin-top: 15px; }\n\n.modified {\n  margin: 50px 30px; }\n\n.messageBox {\n  max-height: 920px;\n  height: 392px; }\n\n.commentSection {\n  margin-bottom: 40; }\n\n.box {\n  background: white;\n  text-align: center;\n  height: 60px;\n  border-radius: 50%;\n  overflow: hidden; }\n  .box img {\n    background-size: cover;\n    height: 100%; }\n\n.minH {\n  min-height: 103px; }\n\n.padd {\n  padding: 10px 8px 10px 10px; }\n\ndiv.row.text-left {\n  line-height: 0.4; }\n\nh4 {\n  font-size: 1.08em;\n  padding: 0 0 0 7px;\n  margin: 0; }\n\np:nth-child(1) {\n  margin: 0 0 0 15px; }\n\na {\n  color: #6327c5;\n  cursor: pointer; }\n\np {\n  padding: 0 0;\n  margin: 0;\n  font-size: 0.8em; }\n\n.bg-white {\n  background: white;\n  width: 100%;\n  height: 100%; }\n\n.inline-block {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\ninput[type=\"text\"] {\n  background-color: transparent;\n  color: black;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid #eeeeee 1px;\n  padding: 20px 10px 10px 15px;\n  margin-bottom: 10px;\n  width: 100%;\n  font-size: 1.2em; }\n\n.positionRelative {\n  position: relative; }\n\n.modifiedBtn {\n  position: absolute;\n  right: 5px;\n  bottom: 13px;\n  color: grey;\n  padding: 2px 3px;\n  background: black; }\n\n.container-fluid {\n  padding: 0;\n  margin: 0; }\n\n.pushUp {\n  margin-top: 50px; }\n\n.fixed {\n  height: 100%; }\n\n.pull-center {\n  margin: 0;\n  padding: 0; }\n\n.col-md-12 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-1 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-8 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-2 {\n  margin-top: 15px; }\n\n.modified {\n  margin: 50px 30px; }\n\n.messageBox {\n  max-height: 920px;\n  height: 392px; }\n\n.commentSection {\n  margin-bottom: 40; }\n\n.minH {\n  min-height: 103px; }\n\n.padd {\n  padding: 10px 8px 10px 10px; }\n\n.purple {\n  color: #6327c5; }\n\nh3 {\n  padding: 0 0 0 0;\n  margin: 5px 0 0 5px; }\n\nh4 {\n  padding: 0 0 0 0;\n  margin: 0; }\n\n.btnAlign {\n  margin-left: 15px; }\n\n.bg-white {\n  background: white; }\n\n.bg-purple {\n  background: #6327c5; }\n\n.inline-blockLeft {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.inline-blockRight {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\ninput[type=\"text\"] {\n  background-color: transparent;\n  color: black;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid #eeeeee 1px;\n  padding: 20px 10px 10px 15px;\n  margin-bottom: 10px;\n  width: 100%;\n  font-size: 1.2em; }\n\n.positionRelative {\n  position: relative; }\n\n.modifiedBtn {\n  position: absolute;\n  right: 5px;\n  bottom: 13px;\n  color: grey;\n  padding: 2px 3px;\n  background: black; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/browse/browse.component.sass"],"names":[],"mappings":"AAEA;EACE,uBAAsB,EAAI;;AAC5B;EACE,iBAAgB,EAAI;;AACtB;EACE,aAAY,EAAI;;AAClB;EACE,UAAS;EACT,WAAU,EAAI;;AAChB;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,iBAAgB,EAAI;;AACtB;EACE,kBAAiB,EAAI;;AACvB;EACE,kBAAiB;EACjB,cAAa,EAAI;;AACnB;EACE,kBAAiB,EAAI;;AAEvB;EACE,kBAAiB;EACjB,mBAAkB;EAClB,aAAY;EACZ,mBAAkB;EAClB,iBAAgB,EAGI;EARtB;IAOI,uBAAsB;IACtB,aAAY,EAAI;;AACpB;EACE,kBAAiB,EAAI;;AACvB;EACE,4BAA2B,EAAI;;AAEjC;EACE,iBAAgB,EAAI;;AACtB;EAEI,kBAAY;EACd,mBAAkB;EAClB,UAAS,EAAI;;AACf;EACE,mBAAkB,EAAI;;AACxB;EACE,eAAc;EACd,gBAAe,EAAI;;AACrB;EACE,aAAY;EACZ,UAAS;EAEP,iBAAW,EAAM;;AACrB;EACE,kBAAiB;EACjB,YAAW;EACX,aAAY,EAAI;;AAClB;EACE,4BAAoB;EAApB,4BAAoB;EAApB,qBAAoB,EAAI;;AAE1B;EACI,8BAA6B;EAC7B,aAAY;EACZ,cAAa;EACb,iBAAgB;EAChB,kBAAiB;EACjB,mBAAkB;EAClB,iCAAgC;EAChC,6BAA4B;EAC5B,oBAAmB;EACnB,YAAW;EAET,iBAAW,EAAM;;AAEvB;EACE,mBAAkB,EAAI;;AACxB;EACE,mBAAkB;EAClB,WAAU;EACV,aAAY;EACZ,YAAW;EACX,iBAAgB;EAChB,kBAAiB,EAAI;;AAIvB;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,iBAAgB,EAAI;;AACtB;EACE,aAAY,EAAI;;AAClB;EACE,UAAS;EACT,WAAU,EAAI;;AAChB;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,iBAAgB,EAAI;;AACtB;EACE,kBAAiB,EAAI;;AACvB;EACE,kBAAiB;EACjB,cAAa,EAAI;;AACnB;EACE,kBAAiB,EAAI;;AACvB;EACE,kBAAiB,EAAI;;AACvB;EACE,4BAA2B,EAAI;;AACjC;EACE,eAAc,EAAI;;AAEpB;EACE,iBAAgB;EAChB,oBAAmB,EAAI;;AACzB;EACE,iBAAgB;EAChB,UAAS,EAAI;;AACf;EACE,kBAAiB,EAAI;;AAEvB;EACE,kBAAiB,EAAI;;AACvB;EACE,oBAAmB,EAAI;;AACzB;EACE,4BAAoB;EAApB,4BAAoB;EAApB,qBAAoB,EAAI;;AAC1B;EACE,4BAAoB;EAApB,4BAAoB;EAApB,qBAAoB,EAAI;;AAE1B;EACI,8BAA6B;EAC7B,aAAY;EACZ,cAAa;EACb,iBAAgB;EAChB,kBAAiB;EACjB,mBAAkB;EAClB,iCAAgC;EAChC,6BAA4B;EAC5B,oBAAmB;EACnB,YAAW;EAET,iBAAW,EAAM;;AAEvB;EACE,mBAAkB,EAAI;;AACxB;EACE,mBAAkB;EAClB,WAAU;EACV,aAAY;EACZ,YAAW;EACX,iBAAgB;EAChB,kBAAiB,EAAI","file":"browse.component.sass","sourcesContent":["\n// Bootstrap Modifications\ndiv.container-fluid {\n  padding: 10px 0 0 30px; }\n.pushUp {\n  margin-top: 50px; }\n.fixed {\n  height: 100%; }\n.pull-center {\n  margin: 0;\n  padding: 0; }\n.col-md-12 {\n  padding: 0;\n  margin: 0; }\n.col-md-1 {\n  padding: 0;\n  margin: 0; }\n.col-md-8 {\n  padding: 0;\n  margin: 0; }\n.col-md-2 {\n  margin-top: 15px; }\n.modified {\n  margin: 50px 30px; }\n.messageBox {\n  max-height: 920px;\n  height: 392px; }\n.commentSection {\n  margin-bottom: 40; }\n// Profile image\n.box {\n  background: white;\n  text-align: center;\n  height: 60px;\n  border-radius: 50%;\n  overflow: hidden;\n  img {\n    background-size: cover;\n    height: 100%; } }\n.minH {\n  min-height: 103px; }\n.padd {\n  padding: 10px 8px 10px 10px; }\n\ndiv.row.text-left {\n  line-height: 0.4; }\nh4 {\n  font: {\n    size: 1.08em; }\n  padding: 0 0 0 7px;\n  margin: 0; }\np:nth-child(1) {\n  margin: 0 0 0 15px; }\na {\n  color: #6327c5;\n  cursor: pointer; }\np {\n  padding: 0 0;\n  margin: 0;\n  font: {\n    size: 0.8em; } }\n.bg-white {\n  background: white;\n  width: 100%;\n  height: 100%; }\n.inline-block {\n  display: inline-flex; }\n\ninput[type=\"text\"] {\n    background-color: transparent;\n    color: black;\n    outline: none;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: solid #eeeeee 1px;\n    padding: 20px 10px 10px 15px;\n    margin-bottom: 10px;\n    width: 100%;\n    font: {\n      size: 1.2em; } }\n\n.positionRelative {\n  position: relative; }\n.modifiedBtn {\n  position: absolute;\n  right: 5px;\n  bottom: 13px;\n  color: grey;\n  padding: 2px 3px;\n  background: black; }\n\n\n// Bootstrap Modifications\n.container-fluid {\n  padding: 0;\n  margin: 0; }\n.pushUp {\n  margin-top: 50px; }\n.fixed {\n  height: 100%; }\n.pull-center {\n  margin: 0;\n  padding: 0; }\n.col-md-12 {\n  padding: 0;\n  margin: 0; }\n.col-md-1 {\n  padding: 0;\n  margin: 0; }\n.col-md-8 {\n  padding: 0;\n  margin: 0; }\n.col-md-2 {\n  margin-top: 15px; }\n.modified {\n  margin: 50px 30px; }\n.messageBox {\n  max-height: 920px;\n  height: 392px; }\n.commentSection {\n  margin-bottom: 40; }\n.minH {\n  min-height: 103px; }\n.padd {\n  padding: 10px 8px 10px 10px; }\n.purple {\n  color: #6327c5; }\n\nh3 {\n  padding: 0 0 0 0;\n  margin: 5px 0 0 5px; }\nh4 {\n  padding: 0 0 0 0;\n  margin: 0; }\n.btnAlign {\n  margin-left: 15px; }\n\n.bg-white {\n  background: white; }\n.bg-purple {\n  background: #6327c5; }\n.inline-blockLeft {\n  display: inline-flex; }\n.inline-blockRight {\n  display: inline-flex; }\n\ninput[type=\"text\"] {\n    background-color: transparent;\n    color: black;\n    outline: none;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: solid #eeeeee 1px;\n    padding: 20px 10px 10px 15px;\n    margin-bottom: 10px;\n    width: 100%;\n    font: {\n      size: 1.2em; } }\n\n.positionRelative {\n  position: relative; }\n.modifiedBtn {\n  position: absolute;\n  right: 5px;\n  bottom: 13px;\n  color: grey;\n  padding: 2px 3px;\n  background: black; }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrowseComponent = (function () {
    function BrowseComponent(firebaseService, af, route, router) {
        this.firebaseService = firebaseService;
        this.af = af;
        this.route = route;
        this.router = router;
        this.sub = false;
        this.date = new Date();
    }
    BrowseComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id to fetch the user details
        this.id = this.route.snapshot.params['username'];
        // Get Videos to Display
        this.firebaseService.getZeals().subscribe(function (zeals) {
            _this.zeals = zeals;
        });
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // Get Current Profile to Display
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.currentUser) {
                    _this.currentKey = profiles[i].$key;
                    _this.currentUrl = profiles[i].url;
                }
            }
        });
        // Get Videos to Display
        this.firebaseService.getVideos().subscribe(function (videos) {
            _this.videos = videos;
        });
    };
    BrowseComponent.prototype.navigateTo = function (value) {
        if (value === 'popular') {
            this.router.navigate(['/browse/' + value]);
        }
        else if (value === 'filter') {
            this.router.navigate(['/browse/']);
        }
        return false;
    };
    BrowseComponent.prototype.updateFalse = function (key, count, views) {
        var videoTrue = {
            watch: true,
        };
        var zealTrue = {
            zealState: true,
        };
        var watch = {
            watching: count + 1,
            views: views + 1
        };
        var unwatch = {
            watching: this.count - 1
        };
        var videoFalse = {
            watch: false
        };
        var zealFalse = {
            zealState: false,
        };
        if (this.count > 1) {
            this.firebaseService.updateVideo(this.videoFalse, unwatch);
            this.firebaseService.deleteVideo(this.videoFalse + '/watch/' + this.currentKey + '/watch');
            this.firebaseService.deleteZeal(this.videoFalse + '/zealState');
        }
        else if (this.count === 1) {
            this.firebaseService.updateVideo(this.videoFalse, unwatch);
            this.firebaseService.updateVideo(this.videoFalse, videoTrue);
            this.firebaseService.updateZeal(this.videoFalse + '/', zealTrue);
        }
        this.firebaseService.updateVideo(key + '/watch/' + this.currentKey, videoFalse);
        this.firebaseService.updateZeal(key + '/', zealFalse);
        this.firebaseService.updateVideo(key, watch);
    };
    BrowseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-browse',
            template: __webpack_require__("../../../../../src/app/components/browse/browse.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/browse/browse.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === 'function' && _d) || Object])
    ], BrowseComponent);
    return BrowseComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/browse.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/classes-manager/classes-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1>Classes Manager</h1>\n    <div class=\"menu\">\n        <button [routerLink]=\"['/'+userUid]\">Back</button>\n\n    </div>\n    <br>\n\n    <div class=\"menu\">\n        <a routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['./']\">Classes</a>\n        <a routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['./add']\">Add Class</a>\n    </div>\n\n    <br>\n\n    <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/classes-manager/classes-manager.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 50px 0 0 50px; }\n\n.resize {\n  min-width: 20%; }\n\n.addMarg {\n  margin: 10px; }\n\n.cl-white {\n  color: white; }\n\n.bg-purple {\n  background: #6327c5; }\n\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  .menu a:hover, button:hover {\n    background: white;\n    color: black; }\n  .menu a.active, button.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/classes-manager/classes-manager.component.sass"],"names":[],"mappings":"AACA;EACE,uBAAsB,EAAI;;AAE5B;EACI,eAAc,EAAI;;AACtB;EACI,aAAY,EAAI;;AAEpB;EACE,aAAY,EAAI;;AAClB;EACE,oBAAmB,EAAI;;AAEzB;EACE,aAAY;EACZ,0BAAyB;EACzB,0BAAyB;EACzB,sBAAqB;EACrB,mBAAkB;EAClB,oBAAmB;EACnB,kBAAiB;EACjB,qBAAoB,EAOA;EAftB;IAUI,kBAAiB;IACjB,aAAY,EAAI;EAXpB;IAaI,kBAAiB;IACjB,0BAAyB;IACzB,aAAY,EAAI","file":"classes-manager.component.sass","sourcesContent":["// Bootstrap Modifications\n.container-fluid {\n  padding: 50px 0 0 50px; }\n// Layout Changes\n.resize {\n    min-width: 20%; }\n.addMarg {\n    margin: 10px; }\n// Colors and BG's\n.cl-white {\n  color: white; }\n.bg-purple {\n  background: #6327c5; }\n// Customize Btn\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  &:hover {\n    background: white;\n    color: black; }\n  &.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; } }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/classes-manager/classes-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_crew_service__ = __webpack_require__("../../../../../src/app/services/crew.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClassesManagerComponent = (function () {
    function ClassesManagerComponent(firebaseService, crewService, af, route) {
        this.firebaseService = firebaseService;
        this.crewService = crewService;
        this.af = af;
        this.route = route;
    }
    ClassesManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get current email
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // Get Classes
        this.crewService.getClasses().subscribe(function (classes) {
            _this.classes = classes;
        });
        // Get Current Profile
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.currentUser) {
                    _this.userUid = profiles[i].$key;
                }
            }
        });
    };
    ClassesManagerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-classes-manager',
            template: __webpack_require__("../../../../../src/app/components/classes-manager/classes-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/classes-manager/classes-manager.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_crew_service__["a" /* CrewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_crew_service__["a" /* CrewService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], ClassesManagerComponent);
    return ClassesManagerComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/classes-manager.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/classes/classes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row bg-grey\">\n    <div class=\"container-fluid\">\n        <div *ngFor=\"let class of classes\">\n            <div class=\"col-md-4 cl-black addMargDown\">\n                <div class=\"bg-white paddAround minH\">\n                    <div class=\"addMargDown\">\n                        <div class=\"col-md-2 addMarg\">\n                            <div class=\"box\">\n                                <img class=\"img\" src=\"{{class?.url}}\" alt=\"profile-picture\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-9 addMargSec\">\n                                <p>Instructor:&nbsp; <a class=\"cl-purple\" [routerLink]=\"['/'+class?.userin]\">{{class.userin}}</a></p>\n\n                            </div>\n                            <div class=\"col-md-9\">\n                                <h2>{{class.title | truncate : 57}}</h2>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 inline-block\">\n                            <p class=\"cl-purple\">@{{class.studio}} &nbsp; | &nbsp;</p>\n                            <p>{{class.location}}</p>\n                        </div>\n                    </div>\n                    <p>{{class.description | truncate : 230}}</p>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 inline-block\">\n                            <p>Styles: &nbsp; </p>\n                            <div *ngFor=\"let cls of class.styles\" class=\"inline-block\">\n                                <p class=\"cl-purple\">#{{cls?.display | lowercase}} &nbsp;</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 inline-block\">\n                            <p>Level: &nbsp; {{class?.level}} &nbsp; | &nbsp;</p>\n                            <p>Age: &nbsp; {{class?.age}}</p>\n\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 \">\n                            <button class=\"btn pull-right\" [routerLink]=\"['/classes/'+profile?.$key+'/'+class?.$key]\">Find Out More</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/classes/classes.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 15px 50px 0 30px; }\n\n.col-md-2.addMarg {\n  padding: 0;\n  margin: 20px 10px 0 0; }\n\n.col-md-9 {\n  margin-right: 0;\n  padding-right: 0; }\n\n.pull-right {\n  margin-right: 4px; }\n\n.addMarg {\n  margin-top: 20px; }\n\n.addMargSec {\n  margin: 20px 0 0 0; }\n\n.addMargDown {\n  margin-bottom: 15px; }\n\nh2 {\n  padding: 0;\n  margin: 0; }\n\nh3 {\n  padding: 0;\n  margin: 0; }\n\np {\n  margin-bottom: 0; }\n\n.minH {\n  min-height: 365px; }\n\n.paddAround {\n  padding: 0 20px 10px 20px; }\n\n.inline-block {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.resize {\n  min-width: 20%; }\n\n.bg-purple {\n  background: #6327c5; }\n\n.cl-purple {\n  color: #6327c5; }\n\n.cl-black {\n  color: black; }\n\n.bg-grey {\n  background: #e8e8e8;\n  position: fixed;\n  z-index: -1000;\n  /* Preserve aspet ratio */\n  min-width: 100%;\n  min-height: 100%; }\n\n.bg-white {\n  background: white; }\n\n.box {\n  background: white;\n  text-align: center;\n  width: 80px;\n  height: 80px;\n  padding: 0;\n  margin: 0;\n  border-radius: 50%;\n  overflow: hidden; }\n  .box img {\n    background-size: cover;\n    height: 100%; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/classes/classes.component.sass"],"names":[],"mappings":"AACA;EACE,0BAAyB,EAAI;;AAC/B;EACE,WAAU;EACV,sBAAqB,EAAI;;AAC3B;EACE,gBAAe;EACf,iBAAgB,EAAI;;AACtB;EACE,kBAAiB,EAAI;;AAEvB;EACE,iBAAgB,EAAI;;AACtB;EACE,mBAAkB,EAAI;;AACxB;EACE,oBAAmB,EAAI;;AACzB;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,iBAAgB,EAAI;;AACtB;EACE,kBAAiB,EAAI;;AACvB;EACE,0BAAyB,EAAI;;AAC/B;EACE,4BAAoB;EAApB,4BAAoB;EAApB,qBAAoB,EAAI;;AAC1B;EACI,eAAc,EAAI;;AAEtB;EACE,oBAAmB,EAAI;;AACzB;EACE,eAAc,EAAI;;AACpB;EACE,aAAY,EAAI;;AAClB;EACE,oBAAmB;EACnB,gBAAe;EACf,eAAc;EACd,0BAA0B;EAC1B,gBAAe;EACf,iBAAgB,EAAI;;AACtB;EACE,kBAAiB,EAAI;;AAGvB;EACE,kBAAiB;EACjB,mBAAkB;EAClB,YAAW;EACX,aAAY;EACZ,WAAU;EACV,UAAS;EACT,mBAAkB;EAClB,iBAAgB,EAGI;EAXtB;IAUI,uBAAsB;IACtB,aAAY,EAAI","file":"classes.component.sass","sourcesContent":["// Bootstrap Modifications\n.container-fluid {\n  padding: 15px 50px 0 30px; }\n.col-md-2.addMarg {\n  padding: 0;\n  margin: 20px 10px 0 0; }\n.col-md-9 {\n  margin-right: 0;\n  padding-right: 0; }\n.pull-right {\n  margin-right: 4px; }\n// Layout Changes\n.addMarg {\n  margin-top: 20px; }\n.addMargSec {\n  margin: 20px 0 0 0; }\n.addMargDown {\n  margin-bottom: 15px; }\nh2 {\n  padding: 0;\n  margin: 0; }\nh3 {\n  padding: 0;\n  margin: 0; }\np {\n  margin-bottom: 0; }\n.minH {\n  min-height: 365px; }\n.paddAround {\n  padding: 0 20px 10px 20px; }\n.inline-block {\n  display: inline-flex; }\n.resize {\n    min-width: 20%; }\n// Colors and BG's\n.bg-purple {\n  background: #6327c5; }\n.cl-purple {\n  color: #6327c5; }\n.cl-black {\n  color: black; }\n.bg-grey {\n  background: #e8e8e8;\n  position: fixed;\n  z-index: -1000;\n  /* Preserve aspet ratio */\n  min-width: 100%;\n  min-height: 100%; }\n.bg-white {\n  background: white; }\n\n// Profile image\n.box {\n  background: white;\n  text-align: center;\n  width: 80px;\n  height: 80px;\n  padding: 0;\n  margin: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  img {\n    background-size: cover;\n    height: 100%; } }\n// Other changes\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/classes/classes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_crew_service__ = __webpack_require__("../../../../../src/app/services/crew.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClassesComponent = (function () {
    function ClassesComponent(firebaseService, crewService, af, route) {
        this.firebaseService = firebaseService;
        this.crewService = crewService;
        this.af = af;
        this.route = route;
    }
    ClassesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get current email
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // Get Classes
        this.crewService.getClasses().subscribe(function (classes) {
            _this.classes = classes;
        });
    };
    ClassesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-classes',
            template: __webpack_require__("../../../../../src/app/components/classes/classes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/classes/classes.component.sass")],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_crew_service__["a" /* CrewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_crew_service__["a" /* CrewService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], ClassesComponent);
    return ClassesComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/classes.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/classes/members/members.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1>Members</h1>\n    <div class=\"menu\">\n        <button [routerLink]=\"['/classes/'+userin]\">Back</button>\n\n    </div>\n    <div *ngFor=\"let class of classes\">\n        <div class=\"col-md-2 text-center \">\n            <h1><a [routerLink]=\"['/'+class?.member]\">{{class?.member}}</a></h1>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/classes/members/members.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 50px 0 0 50px; }\n\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  .menu a:hover, button:hover {\n    background: white;\n    color: black; }\n  .menu a.active, button.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/classes/members/members.component.sass"],"names":[],"mappings":"AACA;EACE,uBAAsB,EAAI;;AAC5B;EACE,aAAY;EACZ,0BAAyB;EACzB,0BAAyB;EACzB,sBAAqB;EACrB,mBAAkB;EAClB,oBAAmB;EACnB,kBAAiB;EACjB,qBAAoB,EAOA;EAftB;IAUI,kBAAiB;IACjB,aAAY,EAAI;EAXpB;IAaI,kBAAiB;IACjB,0BAAyB;IACzB,aAAY,EAAI","file":"members.component.sass","sourcesContent":["// Bootstrap Modifications\n.container-fluid {\n  padding: 50px 0 0 50px; }\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  &:hover {\n    background: white;\n    color: black; }\n  &.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; } }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/classes/members/members.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_crew_service__ = __webpack_require__("../../../../../src/app/services/crew.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MembersComponent = (function () {
    function MembersComponent(crewService, firebaseService, router, route, af) {
        this.crewService = crewService;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.af = af;
    }
    MembersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['username'];
        this.crewService.getClassMembers(this.id).subscribe(function (classes) {
            _this.classes = classes;
        });
        this.crewService.getClassDetails(this.id).subscribe(function (cls) {
            _this.participants = cls.participants;
            _this.userin = cls.userin;
            _this.requestCount = cls.requestCount;
        });
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // Get Current Profile to Display
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.currentUser) {
                    _this.userUid = profiles[i].$key;
                }
            }
        });
    };
    MembersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-members',
            template: __webpack_require__("../../../../../src/app/components/classes/members/members.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/classes/members/members.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_crew_service__["a" /* CrewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_crew_service__["a" /* CrewService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _e) || Object])
    ], MembersComponent);
    return MembersComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/members.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/classes/requests/requests.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1>Requests</h1>\n    <div class=\"menu\">\n        <button [routerLink]=\"['/classes/'+userUid]\">Back</button>\n\n    </div>\n    <div *ngFor=\"let class of classes\">\n        <div class=\"col-md-2 text-center \">\n            <h1><a [routerLink]=\"['/'+class?.requestFrom]\">{{class?.requestFrom}}</a></h1>\n            <div class=\"menu\">\n                <a (click)=\"acceptRequest(class?.requestFrom)\">Accept</a>\n                <a (click)=\"declineRequest(class?.requestFrom)\">Decline</a>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/classes/requests/requests.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 50px 0 0 50px; }\n\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  .menu a:hover, button:hover {\n    background: white;\n    color: black; }\n  .menu a.active, button.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/classes/requests/requests.component.sass"],"names":[],"mappings":"AACA;EACE,uBAAsB,EAAI;;AAC5B;EACE,aAAY;EACZ,0BAAyB;EACzB,0BAAyB;EACzB,sBAAqB;EACrB,mBAAkB;EAClB,oBAAmB;EACnB,kBAAiB;EACjB,qBAAoB,EAOA;EAftB;IAUI,kBAAiB;IACjB,aAAY,EAAI;EAXpB;IAaI,kBAAiB;IACjB,0BAAyB;IACzB,aAAY,EAAI","file":"requests.component.sass","sourcesContent":["// Bootstrap Modifications\n.container-fluid {\n  padding: 50px 0 0 50px; }\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  &:hover {\n    background: white;\n    color: black; }\n  &.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; } }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/classes/requests/requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_crew_service__ = __webpack_require__("../../../../../src/app/services/crew.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequestsComponent = (function () {
    function RequestsComponent(crewService, firebaseService, router, route, af) {
        this.crewService = crewService;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.af = af;
    }
    RequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['username'];
        this.crewService.getClassRequests(this.id).subscribe(function (classes) {
            _this.classes = classes;
        });
        this.crewService.getClassDetails(this.id).subscribe(function (cls) {
            _this.participants = cls.participants;
            _this.requestCount = cls.requestCount;
        });
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // Get Current Profile to Display
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.currentUser) {
                    _this.userUid = profiles[i].$key;
                }
            }
        });
    };
    RequestsComponent.prototype.acceptRequest = function (key) {
        var accept = {
            requestCount: this.requestCount - 1,
            participants: this.participants + 1,
        };
        var members = {
            member: key,
        };
        var requestsDefault = {
            requests: false
        };
        this.crewService.updateClass(this.id, accept);
        this.crewService.updateClass(this.id + '/members/' + key, members);
        if (this.requestCount < 1) {
            this.crewService.updateClass(this.id, requestsDefault);
        }
        else {
            this.crewService.deleteClass(this.id + '/requests/' + key);
        }
    };
    RequestsComponent.prototype.declineRequest = function (key) {
        var requestsDefault = {
            requests: false
        };
        var refuse = {
            requestCount: this.requestCount - 1,
        };
        this.crewService.updateClass(this.id, refuse);
        if (this.requestCount < 1) {
            this.crewService.updateClass(this.id, requestsDefault);
        }
        else {
            this.crewService.deleteClass(this.id + '/requests/' + key);
        }
    };
    RequestsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-requests',
            template: __webpack_require__("../../../../../src/app/components/classes/requests/requests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/classes/requests/requests.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_crew_service__["a" /* CrewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_crew_service__["a" /* CrewService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _e) || Object])
    ], RequestsComponent);
    return RequestsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/requests.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/contests/contests.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Contests</h1>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/contests/contests.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 50px 0 0 50px; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/contests/contests.component.sass"],"names":[],"mappings":"AACA;EACE,uBAAsB,EAAI","file":"contests.component.sass","sourcesContent":["// Bootstrap Modifications\n.container-fluid {\n  padding: 50px 0 0 50px; }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contests/contests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContestsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContestsComponent = (function () {
    function ContestsComponent() {
    }
    ContestsComponent.prototype.ngOnInit = function () {
    };
    ContestsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-contests',
            template: __webpack_require__("../../../../../src/app/components/contests/contests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contests/contests.component.sass")]
        }), 
        __metadata('design:paramtypes', [])
    ], ContestsComponent);
    return ContestsComponent;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/contests.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/crew/crew.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1>Crews</h1>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/crew/crew.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 50px 0 0 50px; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/crew/crew.component.sass"],"names":[],"mappings":"AACA;EACE,uBAAsB,EAAI","file":"crew.component.sass","sourcesContent":["// Bootstrap Modifications\n.container-fluid {\n  padding: 50px 0 0 50px; }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/crew/crew.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CrewComponent = (function () {
    function CrewComponent() {
    }
    CrewComponent.prototype.ngOnInit = function () {
    };
    CrewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-crew',
            template: __webpack_require__("../../../../../src/app/components/crew/crew.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/crew/crew.component.sass")]
        }), 
        __metadata('design:paramtypes', [])
    ], CrewComponent);
    return CrewComponent;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/crew.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Most Popular Profiles -->\n<div class=\"container-fluid\">\n    <h1>Popular</h1>\n    <div *ngFor=\"let profile of profiles\">\n        <div class=\"col-md-2  text-center\">\n            <div class=\"col-md-12\">\n                <div class=\"box\">\n                    <img class=\"img\" src=\"{{profile?.url}}\" alt=\"profile-picture\">\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <a [routerLink]=\"[profile?.$key]\" class=\"btn\">@{{profile.username}}</a>\n            </div>\n            <div class=\"col-md-12\">\n                <p>Supporters: {{profile.supporters}}</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Most Popular Videos -->\n<div class=\"container-fluid\">\n    <h1>Videos</h1>\n\n    <div class=\"row\">\n        <div *ngFor=\"let video of videos\">\n            <div class=\"col-md-3 min-height\">\n                <a [routerLink]=\"[video?.userUid]\">@{{video?.username}}</a>\n                <video width=\"100%\" height=\"200\" controls src=\"{{video?.url}}\"></video>\n                <span>Supporters: {{video.supporters}}</span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 50px 0 0 50px; }\n\n.bg-white {\n  background: white; }\n\n.box {\n  background: white;\n  height: 200px;\n  border-radius: 50%;\n  overflow: hidden; }\n  .box img {\n    background-size: cover;\n    height: 100%; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/dashboard/dashboard.component.sass"],"names":[],"mappings":"AACA;EACE,uBAAsB,EAAI;;AAI5B;EACE,kBAAiB,EAAI;;AAEvB;EACE,kBAAiB;EACjB,cAAa;EACb,mBAAkB;EAClB,iBAAgB,EAGI;EAPtB;IAMI,uBAAsB;IACtB,aAAY,EAAI","file":"dashboard.component.sass","sourcesContent":["// Bootstrap Modifications\n.container-fluid {\n  padding: 50px 0 0 50px; }\n// Layout Changes\n\n// Colors and BG's\n.bg-white {\n  background: white; }\n// Profile img\n.box {\n  background: white;\n  height: 200px;\n  border-radius: 50%;\n  overflow: hidden;\n  img {\n    background-size: cover;\n    height: 100%; } }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_crew_service__ = __webpack_require__("../../../../../src/app/services/crew.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(firebaseService, crewService, af, router, route) {
        this.firebaseService = firebaseService;
        this.crewService = crewService;
        this.af = af;
        this.router = router;
        this.route = route;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id to fetch the user details
        this.id = this.route.snapshot.params['username'];
        // Get current email
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // Get Current Profile
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.currentUser) {
                    _this.userUid = profiles[i].$key;
                }
            }
        });
        // Get Supports to Display
        this.firebaseService.getSupporters().subscribe(function (supports) {
            _this.supports = supports;
        });
        // Get Classes to Display
        this.crewService.getClasses().subscribe(function (classes) {
            _this.classes = classes;
        });
        // Get Comments to Display
        this.firebaseService.getComments().subscribe(function (comments) {
            _this.comments = comments;
        });
        // Get Profiles to Display
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
        });
        // Get Zeals to Display
        this.firebaseService.getZeals().subscribe(function (zeals) {
            _this.zeals = zeals;
        });
        // Get Videos to Display
        this.firebaseService.getVideos().subscribe(function (videos) {
            _this.videos = videos;
        });
        // CHECK IF USER HAS UPLOADED INFORMATION
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.firebaseService.getUsers().subscribe(function (users) {
                    _this.users = users;
                    if (users.length === 0) {
                        _this.router.navigate(['/add']);
                    }
                    else {
                        _this.router.navigate(['/']);
                    }
                });
            }
            return _this.users;
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_crew_service__["a" /* CrewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_crew_service__["a" /* CrewService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _e) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"bg\">\n    <div class=\"bg\">\n        <div class=\"container-fluid text-center\">\n            <div class=\"box\">\n                <h1>ZEALTARDS</h1>\n                <h3 class=\"error\" *ngIf=\"error\">{{ error }}</h3>\n                <div class=\"bg-white\">\n                    <div class=\"inline-block\">\n                        <i (click)=\"loginGoogle()\" class=\"fa fa-google cl-white pointer\" aria-hidden=\"true\"></i>\n                        <i (click)=\"loginFb()\" class=\"fa fa-facebook-official cl-white pointer\" aria-hidden=\"true\"></i>\n                        <i class=\"fa fa-twitter cl-white pointer\" aria-hidden=\"true\"></i>\n                    </div>\n                    <div class=\"reduce\">\n                        <h2>Or</h2>\n                        <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n                            <input type=\"text\" placeholder=\"Email address\" (ngModel)=\"email\" name=\"email\" required>\n                            <input type=\"password\" placeholder=\"Password\" (ngModel)=\"password\" name=\"password\" required>\n                            <div class=\"col-md-12 menu\">\n                                <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"basic-btn\">Log in</button>\n                            </div>\n                        </form>\n                        <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"alc\">No account? Create one here</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "body, html {\n  height: 100%;\n  margin: 0; }\n\n.bg {\n  background-image: url(\"/ztmvp/assets/login.jpg\");\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: -1; }\n\n.container-fluid {\n  padding: 150px 0 0 0;\n  margin: 0; }\n\n.box {\n  width: 26%;\n  margin: 0 auto;\n  padding: 20px 0;\n  background: rgba(1, 1, 1, 0.5); }\n\nh1 {\n  color: white;\n  text-align: center;\n  font-size: 4.5em;\n  margin-bottom: 40px; }\n\n.cl-white {\n  color: white;\n  cursor: pointer;\n  margin: 0 20px; }\n\n.inline-block {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n  top: -30px;\n  background: #6327c5;\n  padding: 15px 30px;\n  font-size: 2em; }\n\n.reduce {\n  position: relative;\n  top: -30px; }\n\ninput::-webkit-input-placeholder {\n  font-size: 1em;\n  line-height: 3;\n  color: rgba(1, 1, 1, 0.5); }\n\ninput {\n  background-color: transparent;\n  color: black;\n  text-align: center;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid #eeeeee 1px;\n  padding: 20px 10px 10px 15px;\n  width: 70%;\n  font-size: 1.5em; }\n\n.menu button {\n  color: white;\n  cursor: pointer;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin: 10px 0; }\n  .menu button:hover {\n    background: white;\n    color: black; }\n  .menu button.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; }\n\n.bg-white {\n  background: white;\n  margin: 0 25px; }\n\na {\n  color: black; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/login/login.component.sass"],"names":[],"mappings":"AAAA;EACE,aAAY;EACZ,UAAS,EAAI;;AAEf;EACE,iDAA0C;EAC1C,gBAAe;EACf,OAAM;EACN,QAAO;EACP,uBAAsB;EACtB,4BAA2B;EAC3B,gBAAe;EACf,iBAAgB;EAChB,YAAW,EAAI;;AAEjB;EACE,qBAAoB;EACpB,UAAS,EAAI;;AACf;EACE,WAAU;EACV,eAAc;EACd,gBAAe;EACf,+BAA8B,EAAG;;AACnC;EACE,aAAY;EACZ,mBAAkB;EAEhB,iBAAW;EACb,oBAAmB,EAAI;;AACzB;EACE,aAAY;EACZ,gBAAe;EACf,eAAc,EAAI;;AACpB;EACE,4BAAoB;EAApB,4BAAoB;EAApB,qBAAoB;EACpB,mBAAkB;EAClB,WAAU;EACV,oBAAmB;EACnB,mBAAkB;EAEhB,eAAS,EAAM;;AACnB;EACE,mBAAkB;EAClB,WAAU,EAAI;;AAChB;EACE,eAAc;EACd,eAAc;EACd,0BAAyB,EAAG;;AAC9B;EACI,8BAA6B;EAC7B,aAAY;EACZ,mBAAkB;EAClB,cAAa;EACb,iBAAgB;EAChB,kBAAiB;EACjB,mBAAkB;EAClB,iCAAgC;EAChC,6BAA4B;EAC5B,WAAU;EAER,iBAAW,EAAM;;AACvB;EACE,aAAY;EACZ,gBAAe;EACf,0BAAyB;EACzB,0BAAyB;EACzB,sBAAqB;EACrB,mBAAkB;EAClB,oBAAmB;EACnB,kBAAiB;EACjB,qBAAoB;EACpB,eAAc,EAOM;EAjBtB;IAYI,kBAAiB;IACjB,aAAY,EAAI;EAbpB;IAeI,kBAAiB;IACjB,0BAAyB;IACzB,aAAY,EAAI;;AACpB;EACE,kBAAiB;EACjB,eAAc,EAAI;;AACpB;EACE,aAAY,EAAI","file":"login.component.sass","sourcesContent":["body, html {\n  height: 100%;\n  margin: 0; }\n\n.bg {\n  background-image: url(\"/assets/login.jpg\");\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: -1; }\n// Bootstrap Modifications\n.container-fluid {\n  padding: 150px 0 0 0;\n  margin: 0; }\n.box {\n  width: 26%;\n  margin: 0 auto;\n  padding: 20px 0;\n  background: rgba(1, 1, 1, 0.5); }\nh1 {\n  color: white;\n  text-align: center;\n  font: {\n    size: 4.5em; }\n  margin-bottom: 40px; }\n.cl-white {\n  color: white;\n  cursor: pointer;\n  margin: 0 20px; }\n.inline-block {\n  display: inline-flex;\n  position: relative;\n  top: -30px;\n  background: #6327c5;\n  padding: 15px 30px;\n  font: {\n    size: 2em; } }\n.reduce {\n  position: relative;\n  top: -30px; }\ninput::-webkit-input-placeholder {\n  font-size: 1em;\n  line-height: 3;\n  color: rgba(1, 1, 1, 0.5); }\ninput {\n    background-color: transparent;\n    color: black;\n    text-align: center;\n    outline: none;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: solid #eeeeee 1px;\n    padding: 20px 10px 10px 15px;\n    width: 70%;\n    font: {\n      size: 1.5em; } }\n.menu button {\n  color: white;\n  cursor: pointer;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin: 10px 0;\n  &:hover {\n    background: white;\n    color: black; }\n  &.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; } }\n.bg-white {\n  background: white;\n  margin: 0 25px; }\na {\n  color: black; }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.state = '';
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/');
            }
        });
    }
    ;
    LoginComponent.prototype.loginFb = function () {
        var _this = this;
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AuthProviders */].Facebook,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthMethods */].Popup,
        }).then(function (success) {
            _this.router.navigate(['/']);
        }).catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthMethods */].Popup,
        }).then(function (success) {
            _this.router.navigate(['/']);
        }).catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent.prototype.loginTwitter = function () {
        var _this = this;
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AuthProviders */].Twitter,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthMethods */].Popup,
        }).then(function (success) {
            _this.router.navigate(['/']);
        }).catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            this.af.auth.login({
                email: formData.value.email,
                password: formData.value.password
            }, {
                provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AuthProviders */].Password,
                method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthMethods */].Password,
            }).then(function (success) {
                _this.router.navigate(['/members']);
            }).catch(function (err) {
                _this.error = err;
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.sass")],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"bg\">\n    <div class=\"bg\">\n        <div class=\"container-fluid text-center\">\n            <div class=\"box\">\n                <h1>ZEALTARDS</h1>\n                <h3 class=\"error\" *ngIf=\"error\">{{ error }}</h3>\n                <div class=\"bg-white menu\">\n                    <h2>Sign Up</h2>\n                    <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n\n                        <input type=\"text\" placeholder=\"Email address..\" (ngModel)=\"email\" name=\"email\" required>\n                        <input type=\"password\" placeholder=\"Password\" (ngModel)=\"password\" name=\"password\" required>\n                        <button type=\"submit\" [disabled]=\"!formData.valid\">Create my account</button>\n\n                    </form>\n                    <a routerLink=\"/login\" id=\"goback\">Already have and account? <strong>Login</strong></a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/sign-up/sign-up.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "body, html {\n  height: 100%;\n  margin: 0; }\n\n.bg {\n  background-image: url(\"/ztmvp/assets/login.jpg\");\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: -1; }\n\n.container-fluid {\n  padding: 150px 0 0 0;\n  margin: 0; }\n\n.box {\n  width: 26%;\n  margin: 0 auto;\n  padding: 20px 0;\n  background: rgba(1, 1, 1, 0.5); }\n\nh1 {\n  color: white;\n  text-align: center;\n  font-size: 4.5em;\n  margin-bottom: 40px; }\n\nh2 {\n  font-size: 1.9em;\n  padding-bottom: 20px; }\n\ninput::-webkit-input-placeholder {\n  font-size: 1 em;\n  color: rgba(1, 1, 1, 0.5); }\n\ninput {\n  background-color: transparent;\n  color: black;\n  text-align: center;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid #eeeeee 1px;\n  padding: 20px 10px 10px 15px;\n  width: 70%;\n  font-size: 1.5em; }\n\n.menu button {\n  color: white;\n  cursor: pointer;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin: 10px 0 15px 0; }\n  .menu button:hover {\n    background: white;\n    color: black; }\n  .menu button.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; }\n\n.bg-white {\n  background: white;\n  margin: 0 25px;\n  padding: 10px 0 15px 0; }\n\na {\n  color: black; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/login/sign-up/sign-up.component.sass"],"names":[],"mappings":"AAAA;EACE,aAAY;EACZ,UAAS,EAAI;;AAEf;EACE,iDAA0C;EAC1C,gBAAe;EACf,OAAM;EACN,QAAO;EACP,uBAAsB;EACtB,4BAA2B;EAC3B,gBAAe;EACf,iBAAgB;EAChB,YAAW,EAAI;;AAEjB;EACE,qBAAoB;EACpB,UAAS,EAAI;;AACf;EACE,WAAU;EACV,eAAc;EACd,gBAAe;EACf,+BAA8B,EAAG;;AACnC;EACE,aAAY;EACZ,mBAAkB;EAEhB,iBAAW;EACb,oBAAmB,EAAI;;AACzB;EAEI,iBAAW;EACb,qBAAoB,EAAI;;AAC1B;EACE,gBAAe;EACf,0BAAyB,EAAG;;AAC9B;EACI,8BAA6B;EAC7B,aAAY;EACZ,mBAAkB;EAClB,cAAa;EACb,iBAAgB;EAChB,kBAAiB;EACjB,mBAAkB;EAClB,iCAAgC;EAChC,6BAA4B;EAC5B,WAAU;EAER,iBAAW,EAAM;;AACvB;EACE,aAAY;EACZ,gBAAe;EACf,0BAAyB;EACzB,0BAAyB;EACzB,sBAAqB;EACrB,mBAAkB;EAClB,oBAAmB;EACnB,kBAAiB;EACjB,qBAAoB;EACpB,sBAAqB,EAOD;EAjBtB;IAYI,kBAAiB;IACjB,aAAY,EAAI;EAbpB;IAeI,kBAAiB;IACjB,0BAAyB;IACzB,aAAY,EAAI;;AACpB;EACE,kBAAiB;EACjB,eAAc;EACd,uBAAsB,EAAI;;AAC5B;EACE,aAAY,EAAI","file":"sign-up.component.sass","sourcesContent":["body, html {\n  height: 100%;\n  margin: 0; }\n\n.bg {\n  background-image: url(\"/assets/login.jpg\");\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: -1; }\n// Bootstrap Modifications\n.container-fluid {\n  padding: 150px 0 0 0;\n  margin: 0; }\n.box {\n  width: 26%;\n  margin: 0 auto;\n  padding: 20px 0;\n  background: rgba(1, 1, 1, 0.5); }\nh1 {\n  color: white;\n  text-align: center;\n  font: {\n    size: 4.5em; }\n  margin-bottom: 40px; }\nh2 {\n  font: {\n    size: 1.9em; }\n  padding-bottom: 20px; }\ninput::-webkit-input-placeholder {\n  font-size: 1 em;\n  color: rgba(1, 1, 1, 0.5); }\ninput {\n    background-color: transparent;\n    color: black;\n    text-align: center;\n    outline: none;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: solid #eeeeee 1px;\n    padding: 20px 10px 10px 15px;\n    width: 70%;\n    font: {\n      size: 1.5em; } }\n.menu button {\n  color: white;\n  cursor: pointer;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin: 10px 0 15px 0;\n  &:hover {\n    background: white;\n    color: black; }\n  &.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; } }\n.bg-white {\n  background: white;\n  margin: 0 25px;\n  padding: 10px 0 15px 0; }\na {\n  color: black; }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = (function () {
    function SignUpComponent(af, router) {
        this.af = af;
        this.router = router;
        this.state = '';
    }
    SignUpComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            this.af.auth.createUser({
                email: formData.value.email,
                password: formData.value.password,
            }).then(function (success) {
                _this.router.navigate(['/']);
            }).catch(function (err) {
                _this.error = err;
            });
        }
    };
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/components/login/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/sign-up/sign-up.component.sass")],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], SignUpComponent);
    return SignUpComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/classes/add-classes/add-classes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-grey\">\n    <div class=\"col-md-offset-1 bg-white col-sm-11 col-md-11\">\n        <form (submit)=\"onAddSubmit()\">\n            <div class=\"col-md-6 bg-white\">\n                <div class=\"form-group\">\n                    <h1>Title</h1>\n                    <input placeholder=\"Title of the class\" type=\"input\" [(ngModel)]=\"title\" name=\"title\">\n                </div>\n                <div class=\"form-group\">\n                    <h1>Location</h1>\n                    <input placeholder=\"Dance Studio Name\" type=\"input\" [(ngModel)]=\"studio\" name=\"studio\">\n                    <input placeholder=\"Address\" type=\"input\" [(ngModel)]=\"location\" name=\"location\" value=\"location\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <input placeholder=\"City\" type=\"input\" [(ngModel)]=\"city\" name=\"city\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <input placeholder=\"Phone Number\" type=\"number\" [(ngModel)]=\"phone\" name=\"phone\">\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <h1>Level</h1>\n                            <input placeholder=\"Beginner, Medium, Advanced\" type=\"input\" [(ngModel)]=\"level\" name=\"level\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <h1>Age</h1>\n                            <input placeholder=\"14+, 18+, etc\" type=\"input\" [(ngModel)]=\"age\" name=\"age\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <h1>Description</h1>\n                    <textarea cols=\"100%\" rows=\"4\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"You can tell people what will happen at the class and what they can expect to learn\"></textarea>\n                </div>\n\n            </div>\n            <div class=\"col-md-offset-1 col-md-5\">\n                <div class=\"form-group\">\n                    <h1>Styles</h1>\n                    <div class=\"row\">\n                        <div *ngFor=\"let style of styles\">\n                            <div class=\"col-md-4\">\n                                <div class=\"col-md-5\">\n                                    <input type=\"checkbox\" name=\"style\" id=\"change\" value=\"{{style.value}}\" [(ngModel)]=\"style.checked\" />\n                                </div>\n                                <div class=\"col-md-pull-2 col-md-7\">\n                                    <h3>{{style?.display}}</h3>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <h1>Hours</h1>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div *ngFor=\"let schedule of schedules\">\n                            <div class=\"col-md-4\">\n                                <h2>{{schedule.display}}</h2>\n                            </div>\n                            <div class=\"col-md-pull-1 col-md-4\"><input type=\"input\" placeholder=\"From - To\" [(ngModel)]=\"schedule.from\" name=\"from\" value=\"{{schedule.from}}\" /></div>\n                            <div class=\"col-md-pull-1 col-md-4\"><input type=\"input\" placeholder=\"From - To\" [(ngModel)]=\"schedule.to\" name=\"to\" value=\"{{schedule.to}}\" /></div>\n\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"col-md-11\">\n                <button class=\"btn pull-right align\" [routerLink]=\"['/'+this.userUid+'/classes/'+userUid]\" name=\"button\"><h4>Cancel</h4></button>\n                <button class=\"btn pull-right align\" type=\"submit\" value=\"submit\"><h4>Submit</h4></button>\n\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/classes/add-classes/add-classes.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 50px 0 0 50px;\n  margin: 0; }\n\n.col-md-offset-1 {\n  margin-left: 45px; }\n\n.pull-right {\n  margin-right: 5px; }\n\ninput {\n  background-color: transparent;\n  color: black;\n  outline: none;\n  outline-style: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid #eeeeee 1px;\n  padding: 20px 10px 10px 15px;\n  margin-bottom: 20px;\n  width: 100%; }\n\ntextarea {\n  width: 100%;\n  font-size: 1.6em; }\n\n.align {\n  margin-bottom: 40px; }\n\ninput::-webkit-input-placeholder {\n  font-size: 1.3em;\n  line-height: 3; }\n\nh1 {\n  color: #6327c5; }\n\n.bg-grey {\n  background: #e8e8e8; }\n\n.bg-white {\n  background: white; }\n\n#change {\n  margin-top: 25px; }\n\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  .menu a:hover, button:hover {\n    background: white;\n    color: black;\n    border: 3px solid #6327c5; }\n  .menu a.active, button.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/profile/classes/add-classes/add-classes.component.sass"],"names":[],"mappings":"AACA;EACE,uBAAsB;EACtB,UAAS,EAAI;;AACf;EACE,kBAAiB,EAAI;;AACvB;EACE,kBAAiB,EAAI;;AACvB;EACI,8BAA6B;EAC7B,aAAY;EACZ,cAAa;EACb,oBAAmB;EACnB,iBAAgB;EAChB,kBAAiB;EACjB,mBAAkB;EAClB,iCAAgC;EAChC,6BAA4B;EAC5B,oBAAmB;EACnB,YAAW,EAAI;;AAEnB;EACE,YAAW;EACX,iBAAgB,EAAI;;AACtB;EACE,oBAAmB,EAAI;;AACzB;EACE,iBAAgB;EAChB,eAAc,EAAI;;AACpB;EACE,eAAc,EAAI;;AACpB;EACE,oBAAmB,EAAI;;AACzB;EACE,kBAAiB,EAAI;;AAEvB;EACE,iBAAgB,EAAI;;AAEtB;EACE,aAAY;EACZ,0BAAyB;EACzB,0BAAyB;EACzB,sBAAqB;EACrB,mBAAkB;EAClB,oBAAmB;EACnB,kBAAiB;EACjB,qBAAoB,EAQA;EAhBtB;IAUI,kBAAiB;IACjB,aAAY;IACZ,0BAAyB,EAAI;EAZjC;IAcI,kBAAiB;IACjB,0BAAyB;IACzB,aAAY,EAAI","file":"add-classes.component.sass","sourcesContent":["// Bootstrap Modifications\n.container-fluid {\n  padding: 50px 0 0 50px;\n  margin: 0; }\n.col-md-offset-1 {\n  margin-left: 45px; }\n.pull-right {\n  margin-right: 5px; }\ninput {\n    background-color: transparent;\n    color: black;\n    outline: none;\n    outline-style: none;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: solid #eeeeee 1px;\n    padding: 20px 10px 10px 15px;\n    margin-bottom: 20px;\n    width: 100%; }\n\ntextarea {\n  width: 100%;\n  font-size: 1.6em; }\n.align {\n  margin-bottom: 40px; }\ninput::-webkit-input-placeholder {\n  font-size: 1.3em;\n  line-height: 3; }\nh1 {\n  color: #6327c5; }\n.bg-grey {\n  background: #e8e8e8; }\n.bg-white {\n  background: white; }\n\n#change {\n  margin-top: 25px; }\n// Styling of the routerlink\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  &:hover {\n    background: white;\n    color: black;\n    border: 3px solid #6327c5; }\n  &.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; } }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/classes/add-classes/add-classes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crew_service__ = __webpack_require__("../../../../../src/app/services/crew.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClassesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddClassesComponent = (function () {
    function AddClassesComponent(crewService, router, firebaseService, route, af) {
        this.crewService = crewService;
        this.router = router;
        this.firebaseService = firebaseService;
        this.route = route;
        this.af = af;
        this.participants = 0;
        this.date = new Date();
        this.schedules = [
            { display: 'Monday', from: '', to: '' },
            { display: 'Tuesday', from: '', to: '' },
            { display: 'Wednesday', from: '', to: '' },
            { display: 'Thursday', from: '', to: '' },
            { display: 'Friday', from: '', to: '' },
            { display: 'Saturday', from: '', to: '' },
            { display: 'Sunday', from: '', to: '' },
        ];
        this.styles = [
            { id: '0', display: 'StreetDance', checked: false },
            { id: '1', display: 'Modern', checked: false },
            { id: '2', display: 'Ballet', checked: false },
            { id: '3', display: 'Jazz', checked: false },
        ];
    }
    AddClassesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.userin = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.email;
            }
            return _this.userin;
        });
        // Get Current Profile to Display
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.userin) {
                    _this.userUid = profiles[i].$key;
                    _this.userEmail = profiles[i].username;
                    _this.userUrl = profiles[i].url;
                    _this.userClassCount = profiles[i].classes;
                }
            }
        });
        // Get Classes to Display
        this.crewService.getClasses().subscribe(function (classes) {
            _this.classes = classes;
        });
    };
    AddClassesComponent.prototype.onAddSubmit = function () {
        var classes = {
            userUid: this.userin,
            userin: this.userEmail,
            studio: this.studio,
            level: this.level,
            phone: this.phone,
            city: this.city,
            age: this.age,
            location: this.location,
            title: this.title,
            description: this.description,
            schedules: this.schedules,
            participants: this.participants,
            requests: false,
            members: false,
            requestCount: this.participants,
            styles: this.styles,
            date: this.date,
            url: this.userUrl
        };
        var classCount = {
            classes: this.userClassCount + 1
        };
        this.crewService.addClass(classes);
        this.firebaseService.updateProfile(this.userUid, classCount);
        this.router.navigate([this.userUid + '/classes/' + this.userUid]);
    };
    AddClassesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-add-classes',
            template: __webpack_require__("../../../../../src/app/components/profile/classes/add-classes/add-classes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/classes/add-classes/add-classes.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_crew_service__["a" /* CrewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_crew_service__["a" /* CrewService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_app_services_firebase_service__["a" /* FirebaseService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _e) || Object])
    ], AddClassesComponent);
    return AddClassesComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/add-classes.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/classes/classes.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Inside User-->\n<div *ngIf=\"cls?.userKey === currentUser\">\n    <div class=\"container-fluid\">\n        <div class=\"col-md-12 menu \">\n            <a class=\" pull-left\" [routerLink]=\"['/'+userKey]\">Back</a>\n            <a class=\" pull-right\" [routerLink]=\"['/classes-manager/'+profile?.$key]\">Classes Manager</a>\n            <a class=\" pull-right\" [routerLink]=\"['/classes/add/']\">Add Class</a>\n        </div>\n\n        <div *ngFor=\"let class of classes\">\n            <div *ngIf=\"class?.userin === userKey\">\n                <div class=\"row bg-white col-md-12 \">\n                    <br>\n                    <div class=\"col-md-offset-1 col-md-5\">\n                        <h2>{{class.studio}}</h2>\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <h2>{{class.title}}</h2>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <h2>{{class.userin}}</h2>\n                            </div>\n                        </div>\n                        <p>{{class.description}}</p>\n\n                        <h3>Location: &nbsp; {{class.location}}</h3>\n                    </div>\n                    <div class=\"col-md-offset-1 col-md-4\">\n                        <div class=\"col-md-12\">\n                            <div class=\"col-md-6\">\n                                <h2>Hours</h2>\n                            </div>\n                            <div class=\"col-md-6 menu\">\n                                <a class=\" pull-right\" [routerLink]=\"['/classes/requests/'+class?.$key]\">Requests</a>\n\n                            </div>\n                        </div>\n                        <div *ngFor=\"let item of class.schedules\">\n                            <div class=\"row\" *ngIf=\"item?.from && item?.to\">\n                                <div class=\"col-md-4\">\n                                    {{item?.display}}:\n                                </div>\n                                <div class=\"col-md-4\">\n                                    From: &nbsp; {{item?.from}}\n                                </div>\n                                <div class=\"col-md-4\">\n                                    To: &nbsp;{{item?.to}}\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <h2>Age: &nbsp; {{class?.age}}</h2>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <h2>Phone: &nbsp; {{class?.phone}}</h2>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"cls?.userKey !== currentUser\">\n    <div class=\"container-fluid\">\n        <div class=\"col-md-12 menu \">\n            <a class=\" pull-left\" [routerLink]=\"['/'+userKey]\">Back</a>\n        </div>\n        <div *ngFor=\"let class of classes\">\n            <div *ngIf=\"class?.userin === userKey\">\n                <div class=\"row bg-white col-md-12\">\n                    <div class=\"col-md-offset-1 col-md-5\">\n                        <h2>{{class.studio}}</h2>\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <h2>{{class.title}}</h2>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <h2>{{class.userin}}</h2>\n                            </div>\n                        </div>\n                        <p>{{class.description}}</p>\n\n                        <h3>Location: &nbsp; {{class.location}}</h3>\n                    </div>\n                    <div class=\"col-md-offset-1 col-md-4\">\n                        <div class=\"col-md-12\">\n                            <div class=\"col-md-6\">\n                                <h2>Hours</h2>\n                            </div>\n                            <div class=\"col-md-6 menu pointer\">\n                                <div *ngIf=\"!class?.members[userKey]\">\n                                    <a *ngIf=\"!class?.requests[userKey]\" (click)=\"sendRequest(class?.$key)\" class=\"pull-right\">Join Class</a>\n                                    <a *ngIf=\"class?.requests[userKey]\" (click)=\"cancelRequest(class?.$key)\" class=\"pull-right\">Cancel Request</a>\n                                </div>\n                                <a [routerLink]=\"['/class/members/'+class?.$key]\" class=\"pull-right\">Members</a>\n                            </div>\n                        </div>\n                        <div *ngFor=\"let item of class.schedules\">\n                            <div class=\"row\" *ngIf=\"item?.from && item?.to\">\n                                <div class=\"col-md-4\">\n                                    {{item?.display}}:\n                                </div>\n                                <div class=\"col-md-4\">\n                                    From: &nbsp; {{item?.from}}\n                                </div>\n                                <div class=\"col-md-4\">\n                                    To: &nbsp;{{item?.to}}\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <h2>Age: &nbsp; {{class?.age}}</h2>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <h2>Phone: &nbsp; {{class?.phone}}</h2>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/classes/classes.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".bg-white {\n  background: white; }\n\n.bg-grey {\n  background: #e8e8e8; }\n\n.pushDown {\n  margin-bottom: 25px; }\n\n.menu a {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  margin-left: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 0; }\n  .menu a:hover {\n    background: white;\n    color: black; }\n  .menu a.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; }\n\n.pointer {\n  cursor: pointer; }\n\n.bg-purple {\n  background: #6327c5; }\n\n.addMarg {\n  margin: 10px 15px 0; }\n\n.cl-white {\n  width: 450px;\n  color: white; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/profile/classes/classes.component.sass"],"names":[],"mappings":"AACA;EACE,kBAAiB,EAAI;;AACvB;EACE,oBAAmB,EAAI;;AACzB;EACE,oBAAmB,EAAI;;AAEzB;EACE,aAAY;EACZ,0BAAyB;EACzB,0BAAyB;EACzB,sBAAqB;EACrB,iBAAgB;EAChB,mBAAkB;EAClB,oBAAmB;EACnB,iBAAgB;EAChB,kBAAiB,EAOG;EAhBtB;IAWI,kBAAiB;IACjB,aAAY,EAAI;EAZpB;IAcI,kBAAiB;IACjB,0BAAyB;IACzB,aAAY,EAAI;;AACpB;EACE,gBAAe,EAAI;;AACrB;EACE,oBAAmB,EAAI;;AACzB;EACI,oBAAmB,EAAI;;AAC3B;EACE,aAAY;EACZ,aAAY,EAAI","file":"classes.component.sass","sourcesContent":["// Bootstrap Modifications\n.bg-white {\n  background: white; }\n.bg-grey {\n  background: #e8e8e8; }\n.pushDown {\n  margin-bottom: 25px; }\n\n.menu a {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  margin-left: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 0;\n  &:hover {\n    background: white;\n    color: black; }\n  &.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; } }\n.pointer {\n  cursor: pointer; }\n.bg-purple {\n  background: #6327c5; }\n.addMarg {\n    margin: 10px 15px 0; }\n.cl-white {\n  width: 450px;\n  color: white; }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/classes/classes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_crew_service__ = __webpack_require__("../../../../../src/app/services/crew.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClassesProfileComponent = (function () {
    function ClassesProfileComponent(firebaseService, crewService, af, route) {
        this.firebaseService = firebaseService;
        this.crewService = crewService;
        this.af = af;
        this.route = route;
    }
    ClassesProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id to fetch the user details
        this.id = this.route.snapshot.params['username'];
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // Get Current Profile to Display
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.currentUser) {
                    _this.userKey = profiles[i].$key;
                    _this.userSupporters = profiles[i].supporters;
                    _this.userUrl = profiles[i].url;
                }
            }
        });
        // Get Profile Details
        this.firebaseService.getProfileDetails(this.id).subscribe(function (profile) {
            _this.profile = profile;
        });
        // Get Class Details
        this.crewService.getClass(this.id).subscribe(function (cls) {
            _this.class = cls[0];
        });
        // Get Classes to Display
        this.crewService.getClasses().subscribe(function (classes) {
            _this.classes = classes;
        });
        // Get Classes to Display
        this.crewService.getClassDetails(this.id).subscribe(function (cls) {
            _this.cls = cls;
        });
    };
    ClassesProfileComponent.prototype.sendRequest = function (key) {
        var request = {
            requestFrom: this.userKey
        };
        var requestCountAdd = {
            requestCount: this.class.requestCount + 1
        };
        this.crewService.updateClass(key + '/requests/' + this.userKey, request);
        this.crewService.updateClass(key, requestCountAdd);
    };
    ClassesProfileComponent.prototype.cancelRequest = function (key) {
        var requestCountTake = {
            requestCount: this.class.requestCount - 1
        };
        var requestDefault = {
            requests: false
        };
        this.crewService.deleteClass(key + '/requests/' + this.userKey);
        this.crewService.updateClass(key, requestCountTake);
        if (this.class.requestCount < 1) {
            this.crewService.updateClass(key, requestDefault);
        }
    };
    ClassesProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-classes',
            template: __webpack_require__("../../../../../src/app/components/profile/classes/classes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/classes/classes.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_crew_service__["a" /* CrewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_app_services_crew_service__["a" /* CrewService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], ClassesProfileComponent);
    return ClassesProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/classes.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/classes/edit-class/edit-class.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <form (submit)=\"onEditSubmit()\">\n        <div class=\"col-md-5\">\n            <div class=\"form-group\">\n                <h1>Title</h1>\n                <input type=\"text\" [(ngModel)]=\"title\" name=\"title\">\n            </div>\n            <div class=\"form-group\">\n                <div>\n                    <h1>Description</h1>\n                </div>\n                <textarea cols=\"85%\" rows=\"4\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"Information about the course\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <h1>Dance Studio</h1>\n                <input type=\"text\" [(ngModel)]=\"studio\" name=\"studio\">\n            </div>\n            <div class=\"form-group\">\n                <h1>Location</h1>\n                <input type=\"text\" [(ngModel)]=\"location\" name=\"location\">\n            </div>\n            <div class=\"form-group\">\n                <h1>Phone Number</h1>\n                <input type=\"number\" [(ngModel)]=\"phone\" name=\"phone\">\n            </div>\n\n\n        </div>\n        <div class=\"col-md-offset-1 col-md-5\">\n\n            <div class=\"form-group\">\n                <h1>Level</h1>\n                <input type=\"text\" [(ngModel)]=\"level\" name=\"level\">\n            </div>\n            <div class=\"form-group\">\n                <h1>Age</h1>\n                <input type=\"text\" [(ngModel)]=\"age\" name=\"age\">\n            </div>\n\n            <div class=\"form-group\">\n                <h1>Hours</h1>\n                <div class=\"row\">\n                    <div *ngFor=\"let schedule of schedules\">\n                        <div class=\"col-md-4\">\n                            <h2>{{schedule.display}}</h2>\n                        </div>\n                        <div class=\"col-md-pull-1 col-md-4\"><input type=\"input\" placeholder=\"From - To\" [(ngModel)]=\"schedule.from\" name=\"from\" value=\"{{schedule.from}}\" /></div>\n                        <div class=\"col-md-pull-1 col-md-4\"><input type=\"input\" placeholder=\"From - To\" [(ngModel)]=\"schedule.to\" name=\"to\" value=\"{{schedule.to}}\" /></div>\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"col-md-11\">\n            <button class=\"btn btn-danger pull-right\" [routerLink]=\"['/classes-manager/'+userUid]\" name=\"button\">Cancel</button>\n            <button class=\"btn btn-danger pull-right\" (click)=\"onDelete()\" name=\"button\">Remove</button>\n            <input class=\"btn  btn-success pull-right\" type=\"submit\" value=\"submit\">\n\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/classes/edit-class/edit-class.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 15px 0 0 50px; }\n\n.pull-right {\n  margin-left: 5px; }\n\n.col-md-3 {\n  width: 470px;\n  margin: 0 10px;\n  margin-bottom: 16px;\n  min-height: 395px; }\n\n.col-md-2.addMarg {\n  padding: 0;\n  margin: 20px 10px 10px 10px; }\n\n.col-md-8 {\n  margin: 0;\n  padding: 0; }\n\nh1 {\n  color: #6327c5; }\n\n.bg-grey {\n  background: #e8e8e8; }\n\n.bg-white {\n  background: white; }\n\n.bg-purple {\n  background: #6327c5; }\n\n.cl-purple {\n  color: #6327c5; }\n\n.cl-black {\n  color: black; }\n\n.bg-grey {\n  background: #e8e8e8; }\n\n.bg-white {\n  background: white; }\n\n.resize {\n  min-width: 20%; }\n\n.addMarg {\n  margin-top: 20px; }\n\n.addMargSec {\n  margin: 20px 0 0 0; }\n\n.addMargDown {\n  margin-bottom: 15px; }\n\np:nth-child(1) {\n  margin-bottom: 0; }\n\nh2 {\n  padding: 0;\n  margin: 0; }\n\nh3 {\n  padding: 0;\n  margin: 0; }\n\n.inline-block {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\ninput {\n  margin-bottom: 30px; }\n\n#change {\n  margin-top: 25px; }\n\nbutton:nth-child(2) {\n  margin-bottom: 40px; }\n\ninput::-webkit-input-placeholder {\n  font-size: 1.5em;\n  line-height: 3; }\n\n.img {\n  background: white;\n  position: relative;\n  width: 70px;\n  border-radius: 50%;\n  height: 70px;\n  overflow: hidden; }\n  .img img {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    height: 100%;\n    width: auto; }\n    .img img.portrait {\n      width: 100%;\n      height: auto; }\n\ninput[type=\"text\"] {\n  background-color: transparent;\n  color: black;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid #eeeeee 1px;\n  padding: 20px 10px 10px 15px;\n  margin-bottom: 20px;\n  width: 100%;\n  font-size: 1.5em; }\n\ntextarea {\n  width: 100%;\n  font-size: 1.6em; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/profile/classes/edit-class/edit-class.component.sass"],"names":[],"mappings":"AAEA;EACE,uBAAsB,EAAI;;AAC5B;EACE,iBAAgB,EAAI;;AACtB;EACE,aAAY;EACZ,eAAc;EACd,oBAAmB;EACnB,kBAAiB,EAAI;;AACvB;EACE,WAAU;EACV,4BAA2B,EAAI;;AACjC;EACE,UAAS;EACT,WAAU,EAAI;;AAEhB;EACE,eAAc,EAAI;;AACpB;EACE,oBAAmB,EAAI;;AACzB;EACE,kBAAiB,EAAI;;AACvB;EACE,oBAAmB,EAAI;;AACzB;EACE,eAAc,EAAI;;AACpB;EACE,aAAY,EAAI;;AAClB;EACE,oBAAmB,EAAI;;AACzB;EACE,kBAAiB,EAAI;;AAEvB;EACI,eAAc,EAAI;;AACtB;EACE,iBAAgB,EAAI;;AACtB;EACE,mBAAkB,EAAI;;AACxB;EACE,oBAAmB,EAAI;;AACzB;EACE,iBAAgB,EAAI;;AACtB;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,4BAAoB;EAApB,4BAAoB;EAApB,qBAAoB,EAAI;;AAC1B;EACE,oBAAmB,EAAI;;AACzB;EACE,iBAAgB,EAAI;;AACtB;EACE,oBAAmB,EAAI;;AACzB;EACE,iBAAgB;EAChB,eAAc,EAAI;;AAEpB;EACE,kBAAiB;EACjB,mBAAkB;EAClB,YAAW;EACX,mBAAkB;EAClB,aAAY;EAEZ,iBAAgB,EASQ;EAhB1B;IASI,mBAAkB;IAClB,UAAS;IACT,SAAQ;IACR,aAAY;IACZ,YAAW,EAGS;IAhBxB;MAeM,YAAW;MACX,aAAY,EAAI;;AAEtB;EACI,8BAA6B;EAC7B,aAAY;EACZ,cAAa;EACb,iBAAgB;EAChB,kBAAiB;EACjB,mBAAkB;EAClB,iCAAgC;EAChC,6BAA4B;EAC5B,oBAAmB;EACnB,YAAW;EAET,iBAAW,EAAM;;AAEvB;EACE,YAAW;EACX,iBAAgB,EAAI","file":"edit-class.component.sass","sourcesContent":["\n// Bootstrap Modifications\n.container-fluid {\n  padding: 15px 0 0 50px; }\n.pull-right {\n  margin-left: 5px; }\n.col-md-3 {\n  width: 470px;\n  margin: 0 10px;\n  margin-bottom: 16px;\n  min-height: 395px; }\n.col-md-2.addMarg {\n  padding: 0;\n  margin: 20px 10px 10px 10px; }\n.col-md-8 {\n  margin: 0;\n  padding: 0; }\n// Colors and BG's\nh1 {\n  color: #6327c5; }\n.bg-grey {\n  background: #e8e8e8; }\n.bg-white {\n  background: white; }\n.bg-purple {\n  background: #6327c5; }\n.cl-purple {\n  color: #6327c5; }\n.cl-black {\n  color: black; }\n.bg-grey {\n  background: #e8e8e8; }\n.bg-white {\n  background: white; }\n// Layout Changes\n.resize {\n    min-width: 20%; }\n.addMarg {\n  margin-top: 20px; }\n.addMargSec {\n  margin: 20px 0 0 0; }\n.addMargDown {\n  margin-bottom: 15px; }\np:nth-child(1) {\n  margin-bottom: 0; }\nh2 {\n  padding: 0;\n  margin: 0; }\nh3 {\n  padding: 0;\n  margin: 0; }\n.inline-block {\n  display: inline-flex; }\ninput {\n  margin-bottom: 30px; }\n#change {\n  margin-top: 25px; }\nbutton:nth-child(2) {\n  margin-bottom: 40px; }\ninput::-webkit-input-placeholder {\n  font-size: 1.5em;\n  line-height: 3; }\n// Profile image\n.img {\n  background: white;\n  position: relative;\n  width: 70px;\n  border-radius: 50%;\n  height: 70px;\n\n  overflow: hidden;\n  img {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    height: 100%;\n    width: auto;\n    &.portrait {\n      width: 100%;\n      height: auto; } } }\n// Input modifications\ninput[type=\"text\"] {\n    background-color: transparent;\n    color: black;\n    outline: none;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: solid #eeeeee 1px;\n    padding: 20px 10px 10px 15px;\n    margin-bottom: 20px;\n    width: 100%;\n    font: {\n      size: 1.5em; } }\n// Other changes\ntextarea {\n  width: 100%;\n  font-size: 1.6em; }\n\n\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/classes/edit-class/edit-class.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_crew_service__ = __webpack_require__("../../../../../src/app/services/crew.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditClassComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditClassComponent = (function () {
    function EditClassComponent(crewService, firebaseService, router, route, af) {
        this.crewService = crewService;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.af = af;
        this.schedules = [
            { display: 'Monday', from: '', to: '' },
            { display: 'Tuesday', from: '', to: '' },
            { display: 'Wednesday', from: '', to: '' },
            { display: 'Thursday', from: '', to: '' },
            { display: 'Friday', from: '', to: '' },
            { display: 'Saturday', from: '', to: '' },
            { display: 'Sunday', from: '', to: '' },
        ];
    }
    EditClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get current profile key from url
        this.id = this.route.snapshot.params['username'];
        // Get current email
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // Get Current Profile
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.currentUser) {
                    _this.userUid = profiles[i].$key;
                }
            }
        });
        // Get class info for edit
        this.crewService.getClassDetails(this.id).subscribe(function (cls) {
            _this.class = cls;
            _this.title = cls.title;
            _this.studio = cls.studio;
            _this.username = cls.username;
            _this.description = cls.description;
            _this.level = cls.level;
            _this.age = cls.age;
            _this.location = cls.location;
            _this.phone = cls.phone;
            _this.schedules = cls.schedules;
        });
    };
    EditClassComponent.prototype.onEditSubmit = function () {
        var classes = {
            title: this.title,
            studio: this.studio,
            description: this.description,
            level: this.level,
            age: this.age,
            location: this.location,
            phone: this.phone,
            schedules: this.schedules
        };
        this.crewService.updateClass(this.id, classes); // update class
        this.router.navigate(['/classes-manager/' + this.userUid]); // navigate to class manager
    };
    EditClassComponent.prototype.onDelete = function () {
        this.router.navigate(['/classes-manager/' + this.userUid]); // navigate to class manager
        this.crewService.deleteClass(this.id); // deelte class
    };
    EditClassComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-edit-class',
            template: __webpack_require__("../../../../../src/app/components/profile/classes/edit-class/edit-class.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/classes/edit-class/edit-class.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_crew_service__["a" /* CrewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_crew_service__["a" /* CrewService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _e) || Object])
    ], EditClassComponent);
    return EditClassComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/edit-class.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/classes/edit-class/edit-classes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_crew_service__ = __webpack_require__("../../../../../src/app/services/crew.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditClassesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditClassesComponent = (function () {
    function EditClassesComponent(firebaseService, crewService, af, route) {
        this.firebaseService = firebaseService;
        this.crewService = crewService;
        this.af = af;
        this.route = route;
    }
    EditClassesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id to fetch the user details
        this.id = this.route.snapshot.params['username'];
        // Get current email
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // Get Classes to Display
        this.crewService.getClasses().subscribe(function (classes) {
            _this.classes = classes;
        });
        // Get Profile Details
        this.firebaseService.getProfileDetails(this.id).subscribe(function (profile) {
            _this.profile = profile;
        });
    };
    EditClassesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-edit-classes',
            template: "\n            <div class=\"row bg-grey\" *ngIf=\"profile?.userin === currentUser\">\n            <div class=\"container-fluid\">\n                <div *ngFor=\"let class of classes\">\n                    <div *ngIf=\"class?.userin === profile?.$key\">\n                        <div class=\"col-md-3 bg-white cl-black\">\n                            <div class=\"row addMargDown\">\n                                <div class=\"col-md-2 addMarg\">\n                                    <img class=\"img\" src=\"{{class?.url}}\" border=\"0\">\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-8 addMargSec\">\n                                        <p>Instructor:&nbsp; <a class=\"cl-purple\" [routerLink]=\"['/'+class?.userin]\">{{class.userin}}</a></p>\n\n                                    </div>\n                                    <div class=\"col-md-8\">\n                                        <h2>{{class.title | truncate : 57}}</h2>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12 inline-block\">\n                                    <p class=\"cl-purple\">@{{class.studio}} &nbsp; | &nbsp;</p>\n                                    <p>{{class.location}}</p>\n                                </div>\n                            </div>\n                            <p>{{class.description | truncate : 230}}</p>\n                            <div class=\"inline-block\">\n                                <p>Styles: &nbsp; </p>\n                                <div *ngFor=\"let cls of class.styles\" class=\"inline-block\">\n                                    <p class=\"cl-purple\">#{{cls?.display | lowercase}} &nbsp;</p>\n                                </div>\n                            </div>\n                            <div class=\"inline-block\">\n                                <p>Level: &nbsp; {{class?.level}} &nbsp; | &nbsp;</p>\n                                <p>Age: &nbsp; {{class?.age}}</p>\n\n                            </div>\n                            <div>\n                                <button class=\"btn btn-danger pull-right\" [routerLink]=\"['/edit-class/'+class?.$key]\">Edit</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ",
            styles: [__webpack_require__("../../../../../src/app/components/profile/classes/edit-class/edit-class.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_crew_service__["a" /* CrewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_app_services_crew_service__["a" /* CrewService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], EditClassesComponent);
    return EditClassesComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/edit-classes.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/classes/short-classes/short-classes.component.html":
/***/ (function(module, exports) {

module.exports = "<!--IF OUTSIDE USER-->\n<div class=\"row bg-grey\" *ngIf=\"profile?.userin !== currentUser\">\n    <div class=\"container-fluid\">\n        <div *ngFor=\"let class of classes\">\n            <div *ngIf=\"class?.userin === profile?.$key\">\n                <div class=\"col-md-4 cl-black addMargDown\">\n                    <div class=\"bg-white paddAround minH\">\n                        <div class=\"addMargDown\">\n                            <div class=\"col-md-2 addMarg\">\n                                <div class=\"box\">\n                                    <img class=\"img\" src=\"{{class?.url}}\" alt=\"profile-picture\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-9 addMargSec\">\n                                    <p>Instructor:&nbsp; <a class=\"cl-purple\" [routerLink]=\"['/'+class?.userin]\">{{class.userin}}</a></p>\n\n                                </div>\n                                <div class=\"col-md-9\">\n                                    <h2>{{class.title | truncate : 57}}</h2>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 inline-block\">\n                                <p class=\"cl-purple\">@{{class.studio}} &nbsp; | &nbsp;</p>\n                                <p>{{class.location}}</p>\n                            </div>\n                        </div>\n                        <p>{{class.description | truncate : 230}}</p>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 inline-block\">\n                                <p>Styles: &nbsp; </p>\n                                <div *ngFor=\"let cls of class.styles\" class=\"inline-block\">\n                                    <p class=\"cl-purple\">#{{cls?.display | lowercase}} &nbsp;</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 inline-block\">\n                                <p>Level: &nbsp; {{class?.level}} &nbsp; | &nbsp;</p>\n                                <p>Age: &nbsp; {{class?.age}}</p>\n\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 \">\n                                <div>\n                                    <button class=\"btn pull-right\" [routerLink]=\"['/classes/'+profile?.$key+'/'+class?.$key]\">Find Out More</button>\n                                    <div *ngIf=\"!class?.members[userUid]\">\n                                        <button *ngIf=\"!class?.requests[userUid]\" (click)=\"sendRequest(class?.$key, class)\" class=\"btn pull-right\">Join Class</button>\n                                        <button *ngIf=\"class?.requests[userUid]\" (click)=\"cancelRequest(class?.$key, class)\" class=\"btn pull-right\">Cancel Request</button>\n                                    </div>\n                                    <button [routerLink]=\"['/class/members/'+class?.$key]\" class=\"btn pull-right\">Members {{class?.participants}}/10</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--IF INSIDE USER-->\n<div class=\"row bg-grey\" *ngIf=\"profile?.userin === currentUser\">\n    <div class=\"container-fluid\">\n        <div class=\"col-md-12\">\n            <button class=\"btn pull-left\" [routerLink]=\"['/'+userUid]\">Back</button>\n            <button class=\"btn pull-right\" [routerLink]=\"['/classes-manager/'+profile?.$key]\">Classes Manager</button>\n            <button class=\"btn pull-right\" [routerLink]=\"['/classes/add/']\">Add Class</button>\n        </div>\n        <div *ngFor=\"let class of classes\">\n            <div *ngIf=\"class?.userin === profile?.$key\">\n                <div class=\"col-md-4 cl-black addMargDown \">\n                    <div class=\"bg-white paddAround minH\">\n                        <div class=\"addMargDown\">\n                            <div class=\"col-md-2 addMarg\">\n                                <div class=\"box\">\n                                    <img class=\"img\" src=\"{{class?.url}}\" alt=\"profile-picture\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-9 addMargSec\">\n                                    <p>Instructor:&nbsp; <a class=\"cl-purple\" [routerLink]=\"['/'+class?.userin]\">{{class.userin}}</a></p>\n\n                                </div>\n                                <div class=\"col-md-9\">\n                                    <h2>{{class.title | truncate : 57}}</h2>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 inline-block\">\n                                <p class=\"cl-purple\">@{{class.studio}} &nbsp; | &nbsp;</p>\n                                <p>{{class.location}}</p>\n                            </div>\n                        </div>\n                        <p>{{class.description | truncate : 230}}</p>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 inline-block\">\n                                <p>Styles: &nbsp; </p>\n                                <div *ngFor=\"let cls of class.styles\" class=\"inline-block\">\n                                    <p class=\"cl-purple\">#{{cls?.display | lowercase}} &nbsp;</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 inline-block\">\n                                <p>Level: &nbsp; {{class?.level}} &nbsp; | &nbsp;</p>\n                                <p>Age: &nbsp; {{class?.age}}</p>\n\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 \">\n                                <button class=\"btn pull-right\" [routerLink]=\"['/classes/'+profile?.$key+'/'+class?.$key]\">Find Out More</button>\n                                <button [routerLink]=\"['/class/members/'+class?.$key]\" class=\"btn pull-right\">Members {{class?.participants}}/10</button>\n                                <button [routerLink]=\"['/class/requests/'+class?.$key]\" class=\"btn pull-right\">Requests</button>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/classes/short-classes/short-classes.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 15px 50px 0 30px; }\n\n.col-md-2.addMarg {\n  padding: 0;\n  margin: 20px 10px 0 0; }\n\n.col-md-9 {\n  margin-right: 0;\n  padding-right: 0; }\n\n.pull-right {\n  margin-right: 4px; }\n\n.addMarg {\n  margin-top: 20px; }\n\n.addMargSec {\n  margin: 20px 0 0 0; }\n\n.addMargDown {\n  margin-bottom: 15px; }\n\nh2 {\n  padding: 0;\n  margin: 0; }\n\nh3 {\n  padding: 0;\n  margin: 0; }\n\np {\n  margin-bottom: 0; }\n\n.minH {\n  min-height: 365px; }\n\n.paddAround {\n  padding: 0 20px 10px 20px; }\n\n.inline-block {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.resize {\n  min-width: 20%; }\n\n.bg-purple {\n  background: #6327c5; }\n\n.cl-purple {\n  color: #6327c5; }\n\n.cl-black {\n  color: black; }\n\n.bg-grey {\n  background: #e8e8e8;\n  position: fixed;\n  z-index: -1000;\n  /* Preserve aspet ratio */\n  min-width: 100%;\n  min-height: 100%; }\n\n.bg-white {\n  background: white; }\n\n.box {\n  background: white;\n  text-align: center;\n  width: 80px;\n  height: 80px;\n  padding: 0;\n  margin: 0;\n  border-radius: 50%;\n  overflow: hidden; }\n  .box img {\n    background-size: cover;\n    height: 100%; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/profile/classes/short-classes/short-classes.component.sass"],"names":[],"mappings":"AACA;EACE,0BAAyB,EAAI;;AAC/B;EACE,WAAU;EACV,sBAAqB,EAAI;;AAC3B;EACE,gBAAe;EACf,iBAAgB,EAAI;;AACtB;EACE,kBAAiB,EAAI;;AAEvB;EACE,iBAAgB,EAAI;;AACtB;EACE,mBAAkB,EAAI;;AACxB;EACE,oBAAmB,EAAI;;AACzB;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,iBAAgB,EAAI;;AACtB;EACE,kBAAiB,EAAI;;AACvB;EACE,0BAAyB,EAAI;;AAC/B;EACE,4BAAoB;EAApB,4BAAoB;EAApB,qBAAoB,EAAI;;AAC1B;EACI,eAAc,EAAI;;AAEtB;EACE,oBAAmB,EAAI;;AACzB;EACE,eAAc,EAAI;;AACpB;EACE,aAAY,EAAI;;AAClB;EACE,oBAAmB;EACnB,gBAAe;EACf,eAAc;EACd,0BAA0B;EAC1B,gBAAe;EACf,iBAAgB,EAAI;;AACtB;EACE,kBAAiB,EAAI;;AAGvB;EACE,kBAAiB;EACjB,mBAAkB;EAClB,YAAW;EACX,aAAY;EACZ,WAAU;EACV,UAAS;EACT,mBAAkB;EAClB,iBAAgB,EAGI;EAXtB;IAUI,uBAAsB;IACtB,aAAY,EAAI","file":"short-classes.component.sass","sourcesContent":["// Bootstrap Modifications\n.container-fluid {\n  padding: 15px 50px 0 30px; }\n.col-md-2.addMarg {\n  padding: 0;\n  margin: 20px 10px 0 0; }\n.col-md-9 {\n  margin-right: 0;\n  padding-right: 0; }\n.pull-right {\n  margin-right: 4px; }\n// Layout Changes\n.addMarg {\n  margin-top: 20px; }\n.addMargSec {\n  margin: 20px 0 0 0; }\n.addMargDown {\n  margin-bottom: 15px; }\nh2 {\n  padding: 0;\n  margin: 0; }\nh3 {\n  padding: 0;\n  margin: 0; }\np {\n  margin-bottom: 0; }\n.minH {\n  min-height: 365px; }\n.paddAround {\n  padding: 0 20px 10px 20px; }\n.inline-block {\n  display: inline-flex; }\n.resize {\n    min-width: 20%; }\n// Colors and BG's\n.bg-purple {\n  background: #6327c5; }\n.cl-purple {\n  color: #6327c5; }\n.cl-black {\n  color: black; }\n.bg-grey {\n  background: #e8e8e8;\n  position: fixed;\n  z-index: -1000;\n  /* Preserve aspet ratio */\n  min-width: 100%;\n  min-height: 100%; }\n.bg-white {\n  background: white; }\n\n// Profile image\n.box {\n  background: white;\n  text-align: center;\n  width: 80px;\n  height: 80px;\n  padding: 0;\n  margin: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  img {\n    background-size: cover;\n    height: 100%; } }\n// Other changes\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/classes/short-classes/short-classes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_crew_service__ = __webpack_require__("../../../../../src/app/services/crew.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortClassesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShortClassesComponent = (function () {
    function ShortClassesComponent(firebaseService, crewService, af, route) {
        this.firebaseService = firebaseService;
        this.crewService = crewService;
        this.af = af;
        this.route = route;
    }
    ShortClassesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id to fetch the user details
        this.id = this.route.snapshot.params['username'];
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // Get Profile Details
        this.firebaseService.getProfileDetails(this.id).subscribe(function (profile) {
            _this.profile = profile;
        });
        // Get Current Profile to Display
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.currentUser) {
                    _this.userUid = profiles[i].$key;
                }
            }
        });
        // Get Class to Display
        this.crewService.getClassDetails(this.id).subscribe(function (cls) {
            _this.cls = cls;
        });
        // Get Classes to Display
        this.crewService.getClasses().subscribe(function (classes) {
            _this.classes = classes;
        });
    };
    ShortClassesComponent.prototype.sendRequest = function (key, cls) {
        var request = {
            requestFrom: this.userUid
        };
        var requestCountAdd = {
            requestCount: cls.requestCount + 1
        };
        this.crewService.updateClass(key + '/requests/' + this.userUid, request);
        this.crewService.updateClass(key, requestCountAdd);
    };
    ShortClassesComponent.prototype.cancelRequest = function (key, cls) {
        var requestCountTake = {
            requestCount: cls.requestCount - 1
        };
        var requestDefault = {
            requests: false
        };
        this.crewService.deleteClass(key + '/requests/' + this.userUid);
        if (cls.requestCount === 1) {
            this.crewService.updateClass(key, requestDefault);
        }
        this.crewService.updateClass(key, requestCountTake);
    };
    ShortClassesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-short-classes',
            template: __webpack_require__("../../../../../src/app/components/profile/classes/short-classes/short-classes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/classes/short-classes/short-classes.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_crew_service__["a" /* CrewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_crew_service__["a" /* CrewService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], ShortClassesComponent);
    return ShortClassesComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/short-classes.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"profile?.userin === currentUser\">\n    <div class=\"col-md-offset-1 bg-white col-md-10\">\n        <div *ngIf=\"promoUniq?.promo === promo && promoUniq?.username !== username\">\n            <h2>The promo code -> {{promo}} is already taken. Please try a different one.</h2>\n        </div>\n        <form (submit)=\"onEditSubmit()\">\n            <div class=\"form-group\">\n                <h1>Username</h1>\n                <div class=\"row\">\n                    <div class=\"col-md-9\">\n                        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" disabled>\n                    </div>\n                    <div class=\"col-md-3 \">\n                        <button class=\"pull-right\" type=\"text\" disabled>Request to change</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <h1>Display Name</h1>\n                <input type=\"text\" [(ngModel)]=\"displayName\" name=\"displayName\">\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <h1>Your Styles</h1>\n                        <div *ngFor=\"let style of styles\">\n                            <div *ngIf=\"style?.checked === true\">\n                                <div class=\"col-md-1\">\n                                    <a (click)=\"styleFalse(style?.id)\" class=\"btn\">x</a>\n                                </div>\n                                <div class=\"col-md-2\">\n                                    <p> {{style.display}}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <h1>Add Styles</h1>\n                        <div *ngFor=\"let style of styles\">\n                            <div *ngIf=\"style?.checked === false\">\n                                <div class=\"col-md-1\">\n                                    <a (click)=\"styleTrue(style?.id)\" class=\"btn\">+</a>\n                                </div>\n                                <div class=\"col-md-2\">\n                                    <p> {{style.display}}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <h1>Description</h1>\n                <textarea class=\"form-control\" type=\"text\" [(ngModel)]=\"description\" name=\"description\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <h1>Promo Code</h1>\n                <input (keyup)=\"checkPromo(promo)\" type=\"text\" [(ngModel)]=\"promo\" name=\"promo code\">\n            </div>\n\n\n            <button type=\"submit\" [disabled]=\"promoUniq?.promo === promo && promoUniq?.username !== username\" value=\"submit\" class=\"btn btn-success\"><h4>Save</h4></button>\n            <button class=\"btn\" [routerLink]=\"['../'+profile?.$key]\" name=\"button\"><h4>Cancel</h4></button>\n        </form>\n    </div>\n</div>\n\n<div class=\"container-fluid\" *ngIf=\"profile?.userin === currentUser\">\n    <div class=\"col-md-offset-1 bg-white col-md-10\">\n        <h2>{{profile?.username | uppercase}}</h2>\n        <button class=\"btn last\" (click)=\"onDeleteClick(profile.path)\"><h4>Delete Account</h4></button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/edit-profile/edit-profile.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 50px 0 0 50px; }\n\n.bg-grey {\n  background: #e8e8e8; }\n\n.bg-white {\n  background: white; }\n\nh1 {\n  color: #6327c5; }\n\ninput[type=\"text\"] {\n  background-color: transparent;\n  color: black;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid #eeeeee 1px;\n  padding: 20px 10px 10px 15px;\n  margin-bottom: 20px;\n  width: 100%;\n  font-size: 1.5em; }\n\ninput::-webkit-input-placeholder {\n  font-size: 1.5em;\n  line-height: 3; }\n\ninput {\n  margin-bottom: 30px; }\n\n#change {\n  margin-top: 25px; }\n\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  .menu a:hover, button:hover {\n    background: white;\n    color: black;\n    border: 3px solid #6327c5; }\n  .menu a.active, button.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; }\n\nbutton:nth-child(2) {\n  margin-bottom: 40px; }\n\ntextarea {\n  width: 100%;\n  font-size: 1.6em; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/profile/edit-profile/edit-profile.component.sass"],"names":[],"mappings":"AACA;EACE,uBAAsB,EAAI;;AAE5B;EACE,oBAAmB,EAAI;;AACzB;EACE,kBAAiB,EAAI;;AACvB;EACE,eAAc,EAAI;;AAEpB;EACI,8BAA6B;EAC7B,aAAY;EACZ,cAAa;EACb,iBAAgB;EAChB,kBAAiB;EACjB,mBAAkB;EAClB,iCAAgC;EAChC,6BAA4B;EAC5B,oBAAmB;EACnB,YAAW;EAET,iBAAW,EAAM;;AAEvB;EACE,iBAAgB;EAChB,eAAc,EAAI;;AAIpB;EACE,oBAAmB,EAAI;;AAEzB;EACE,iBAAgB,EAAI;;AAEtB;EACE,aAAY;EACZ,0BAAyB;EACzB,0BAAyB;EACzB,sBAAqB;EACrB,mBAAkB;EAClB,oBAAmB;EACnB,kBAAiB;EACjB,qBAAoB,EAQA;EAhBtB;IAUI,kBAAiB;IACjB,aAAY;IACZ,0BAAyB,EAAI;EAZjC;IAcI,kBAAiB;IACjB,0BAAyB;IACzB,aAAY,EAAI;;AACpB;EACE,oBAAmB,EAAI;;AAEzB;EACE,YAAW;EACX,iBAAgB,EAAI","file":"edit-profile.component.sass","sourcesContent":["// Bootstrap Modifications\n.container-fluid {\n  padding: 50px 0 0 50px; }\n// Colors and BG's\n.bg-grey {\n  background: #e8e8e8; }\n.bg-white {\n  background: white; }\nh1 {\n  color: #6327c5; }\n// Input modifications\ninput[type=\"text\"] {\n    background-color: transparent;\n    color: black;\n    outline: none;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: solid #eeeeee 1px;\n    padding: 20px 10px 10px 15px;\n    margin-bottom: 20px;\n    width: 100%;\n    font: {\n      size: 1.5em; } }\n\ninput::-webkit-input-placeholder {\n  font-size: 1.5em;\n  line-height: 3; }\n\n\n// Layout Changes\ninput {\n  margin-bottom: 30px; }\n\n#change {\n  margin-top: 25px; }\n// Customize btn\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  &:hover {\n    background: white;\n    color: black;\n    border: 3px solid #6327c5; }\n  &.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; } }\nbutton:nth-child(2) {\n  margin-bottom: 40px; }\n// Other changes\ntextarea {\n  width: 100%;\n  font-size: 1.6em; }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProfileComponent = (function () {
    function EditProfileComponent(firebaseService, router, route, af) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.af = af;
        this.styles = [
            { id: '0', display: 'StreetDance', checked: false },
            { id: '1', display: 'Modern', checked: false },
            { id: '2', display: 'Ballet', checked: false },
            { id: '3', display: 'Jazz', checked: false },
        ];
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get LoggedIn id
        this.id = this.route.snapshot.params['username'];
        // Store the current user EMAIL
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // LOGGEDIN Profile INFORMATION
        this.firebaseService.getProfileDetails(this.id).subscribe(function (profile) {
            _this.profile = profile;
            _this.options = profile.styles;
            if (profile.userin !== _this.currentUser) {
                _this.router.navigate(['/']);
            }
            _this.username = profile.username;
            _this.styles = profile.styles;
            _this.profileUid = profile.userin;
            _this.userin = profile.$key;
            _this.description = profile.description;
            _this.displayName = profile.displayName;
            _this.promo = profile.promo;
            _this.uid = profile.uid;
        });
    };
    EditProfileComponent.prototype.checkPromo = function (promo) {
        var _this = this;
        this.firebaseService.getProfilePromo(promo).subscribe(function (profiles) {
            _this.promoUniq = profiles[0];
        });
    };
    EditProfileComponent.prototype.styleFalse = function (style) {
        var styles = {
            checked: false
        };
        this.firebaseService.updateProfile(this.id + '/styles/' + style, styles);
    };
    EditProfileComponent.prototype.styleTrue = function (style) {
        var styles = {
            checked: true
        };
        this.firebaseService.updateProfile(this.id + '/styles/' + style, styles);
    };
    EditProfileComponent.prototype.onEditSubmit = function () {
        var profile = {
            username: this.username,
            description: this.description,
            displayName: this.displayName,
            promo: this.promo
        };
        var video = {
            username: this.username,
        };
        var styles = {
            styles: this.styles
        };
        this.firebaseService.updateProfile(this.id, profile);
        this.firebaseService.updateProfile(this.id, styles);
        this.router.navigate(['/' + this.id]);
    };
    EditProfileComponent.prototype.onDeleteClick = function (path) {
        var _this = this;
        // DELETE SUPPORT AND SUPPORTING FROM PROFILES
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            for (var i = 0; i < profiles.length; i++) {
                // 1. Take 1 PROFILES support
                var takeSupport = {
                    supporters: profiles[i].supporters - 1
                };
                // 2. Take 1 PROFILES supporting
                var takeSupporting = {
                    supportingAdd: profiles[i].supportingAdd - 1
                };
                // 3. Update support with true
                var sub = {
                    support: true
                };
                if (profiles[i].support[_this.id] != undefined && profiles[i].support[_this.id]) {
                    _this.firebaseService.updateProfile(profiles[i].$key, takeSupport);
                    _this.firebaseService.deleteProfile(profiles[i].$key + '/support/' + _this.id);
                    _this.firebaseService.updateProfile(profiles[i].$key + '/support/', sub);
                }
                else if (profiles[i].supporting[_this.id] != undefined && profiles[i].supporting[_this.id]) {
                    _this.firebaseService.updateProfile(profiles[i].$key, takeSupporting);
                }
                else {
                    _this.firebaseService.deleteProfile(_this.id);
                }
            }
        });
        // DELETE SUPPORT AND SUPPORTING FROM SUPPORTS
        this.firebaseService.getSupporters().subscribe(function (supporters) {
            for (var i = 0; i < supporters.length; i++) {
                if (supporters[i][_this.id] != undefined && supporters[i][_this.id]) {
                    _this.firebaseService.deleteSupport(supporters[i].$key + '/' + _this.id);
                }
                else {
                    // DELETE SUPPORT PROFILE
                    _this.firebaseService.deleteSupport(_this.username);
                }
            }
        });
        // DELETE Image from storage
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref();
        var spaceRef = storageRef.child(path);
        storageRef.child(path).delete().then(function (url) {
        }).catch(function (error) {
            console.log(error);
        });
        // DELETE PROFILE && USER
        this.firebaseService.deleteUser(this.uid);
        this.firebaseService.deleteProfile(this.userin);
        this.af.auth.logout();
        this.router.navigate(['/']);
        return this.currentUser = '';
    };
    EditProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-edit-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/edit-profile/edit-profile.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _d) || Object])
    ], EditProfileComponent);
    return EditProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/edit-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!---->\n<!---->\n<!---->\n<!---->\n<!-- If Outside USER do this -->\n<!---->\n<!---->\n<!---->\n<!---->\n<div *ngIf=\"profile?.userin != currentUser\">\n    <div class=\"row cover\"></div>\n    <div class=\"row marginLeft height\">\n        <div class=\"col-md-2 text-center\">\n            <h1 class=\"pullDivision\">Division</h1>\n            <h2>{{profile?.level}}</h2>\n            <p>Points: {{profile?.supporters}}/100 until Promotion</p>\n        </div>\n        <div class=\"col-md-2 pullUp\">\n            <div class=\"box\">\n                <img class=\"img\" src=\"{{imageUrl}}\" alt=\"profile-picture\">\n            </div>\n        </div>\n        <div class=\"col-md-6 text-center pullUp\">\n            <div class=\"col-md-12\">\n                <h1 class=\"text-left\"><b>@{{profile?.displayName | uppercase}}</b></h1>\n            </div>\n            <div class=\"col-md-10 pullUp2\">\n                <div *ngFor=\"let style of styles\">\n                    <div *ngIf=\"style.checked === true\">\n                        <div class=\"col-md-2 \">\n                            <p class=\"cl-white\">#{{style.display | lowercase}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"col-md-2\">\n                    <h2><b>0</b></h2>\n                    <p>Challenges</p>\n\n                </div>\n                <div class=\"col-md-2 pointer\" [routerLink]=\"['/supporting/'+profile?.$key]\">\n                    <h2><b>{{profile?.supportingAdd}}</b></h2>\n                    <p>Supporting</p>\n                </div>\n                <div class=\"col-md-2 pointer\" [routerLink]=\"['/supporters/'+profile?.$key]\">\n                    <h2><b>{{profile?.supporters}}</b></h2>\n                    <p>Supporters</p>\n                </div>\n                <div class=\"col-md-2 pointer\" [routerLink]=\"['/classes/'+profile?.$key]\">\n                    <h2><b>{{profile?.classes}}</b></h2>\n                    <p>Classes</p>\n                </div>\n                <div class=\"col-md-2 pointer\">\n                    <h2><b>Crew</b></h2>\n                    <p>Zealtards</p>\n                </div>\n                <div class=\"col-md-2 pushBtn\">\n                    <div class=\"col-md-12\">\n                        <button *ngIf=\"!profile?.support[supportKey]?.support\" class=\"btn btnChange bg-purple\" (click)=\"supportProfile()\"><h4 class=\"changeText\"><strong>SUPPORT</strong></h4></button>\n                        <button *ngIf=\"profile?.support[supportKey]?.support\" class=\"btn btnChange btn-danger\" (click)=\"unsupportProfile()\"><h4 class=\"changeText\"><strong>UNSUPPORT</strong></h4></button>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <button class=\"btn btnChange\"><h5>Message</h5></button>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"row bg-grey videos\">\n        <div class=\"bg-white container-fluid\">\n\n            <div *ngFor=\"let video of videos\">\n                <div class=\"col-md-2\" *ngIf=\"video?.userin === profile?.userin\">\n                    <div>\n                        <video [routerLink]=\"['/'+profile?.$key+'/'+video?.$key]\" width=\"100%\" height=\"auto\" src=\"{{video?.url}}\"></video>\n                        <div class=\"positionRelative\">\n                            <p class=\"modifiedBtn\">{{video?.duration / 100 | number: '1.2-2'}}</p>\n                        </div>\n                    </div>\n                    <div class=\"minH lH\">\n                        <div class=\"col-md-12 \">\n                            <h4>{{video?.name | truncate : 50}}</h4>\n                        </div>\n                        <div class=\"row \">\n                            <div class=\"inline-block\">\n                                <p>by:&nbsp;<a [routerLink]=\"['/'+video?.username]\">@{{video?.username}}</a></p>\n                                <p>&nbsp; • &nbsp;<span class=\"glyphicon glyphicon-globe\"></span><span class=\"glyphicon glyphicon-globe \"></span><span class=\"glyphicon glyphicon-globe\"></span><span class=\"pull-right\">&nbsp; • &nbsp;</span></p>\n                                <p><span class=\"glyphicon glyphicon-globe pull-right\"></span></p>\n                            </div>\n                        </div>\n                        <div class=\"row text-left\">\n                            <div class=\"inline-block\">\n                                <p>{{zealCount}} zeals</p>\n                                <p>&nbsp; • &nbsp; {{video?.views}} views </p>\n                                <p>&nbsp; • &nbsp;{{video?.date | toDate | timeAgo}} </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<!---->\n<!---->\n<!---->\n<!---->\n<!-- IF INSIDE USER DO THIS -->\n<!---->\n<!---->\n<!---->\n<!---->\n\n<div *ngIf=\"profile?.userin === currentUser\">\n    <!-- Profile Info -->\n    <div class=\"row cover\"></div>\n    <div class=\"row marginLeft height\">\n        <div class=\"col-md-2 text-center\">\n            <h1 class=\"pullDivision\">Division</h1>\n            <h2>{{profile?.level}}</h2>\n            <p>Points: {{profile?.supporters}}/100 until Promotion</p>\n        </div>\n        <div class=\"col-md-2 pullUp\">\n            <div class=\"box\">\n                <img class=\"img\" src=\"{{imageUrl}}\" alt=\"profile-picture\">\n            </div>\n            <form class=\"pullUp index \" (submit)=\"onEditSubmitImage()\">\n                <div class=\"col-md-offset-1 input\">\n                    <div class=\"form-group\">\n                        <input type=\"file\" name=\"image\" id=\"image\" class=\"input\" />\n                    </div>\n                </div>\n                <div class=\"col-md-12 leftPush\">\n                    <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n                </div>\n            </form>\n        </div>\n        <div class=\"col-md-6 text-center pullUp\">\n            <div class=\"col-md-12\">\n                <h1 class=\"text-left\"><b>@{{profile?.displayName | uppercase}}</b></h1>\n            </div>\n            <div class=\"col-md-10 pullUp2\">\n                <div *ngFor=\"let style of styles\">\n                    <div *ngIf=\"style.checked === true\">\n                        <div class=\"col-md-2 \">\n                            <p class=\"cl-white\">#{{style.display | lowercase}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"col-md-2\">\n                    <h2><b>0</b></h2>\n                    <p>Challenges</p>\n\n                </div>\n                <div class=\"col-md-2 pointer\" [routerLink]=\"['/supporting/'+profile?.$key]\">\n                    <h2><b>{{profile?.supportingAdd}}</b></h2>\n                    <p>Supporting</p>\n                </div>\n                <div class=\"col-md-2 pointer\" [routerLink]=\"['/supporters/'+profile?.$key]\">\n                    <h2><b>{{profile?.supporters}}</b></h2>\n                    <p>Supporters</p>\n                </div>\n                <div class=\"col-md-2 pointer\" [routerLink]=\"['/classes/'+profile?.$key]\">\n                    <h2><b>{{profile?.classes}}</b></h2>\n                    <p>Classes</p>\n                </div>\n                <div class=\"col-md-2 pointer\">\n                    <h2><b>Crew</b></h2>\n                    <p>Zealtards</p>\n                </div>\n                <div class=\"col-md-2 pushBtn\">\n                    <div class=\"col-md-12\">\n                        <button class=\"btn btnChange btn-danger\" [routerLink]=\"['/video-manager/'+profile?.$key]\"><h4 class=\"changeText\"><strong>Video Manager</strong></h4></button>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <button class=\"btn btnChange bg-default\" [routerLink]=\"['/edit/'+profile?.$key]\"><h5 class=\"changeText\"><strong>Settings</strong></h5></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"row bg-grey videos\">\n        <div class=\"bg-white container-fluid\">\n\n            <div *ngFor=\"let video of videos; let i=index\">\n                <div class=\"col-md-2\" *ngIf=\"video?.userin === profile?.userin\">\n                    <div>\n                        <video [routerLink]=\"['/'+profile?.$key+'/'+video?.$key]\" width=\"100%\" height=\"auto\" src=\"{{video?.url}}\"></video>\n                        <div class=\"positionRelative\">\n                            <p class=\"modifiedBtn\">{{video?.duration / 100 | number: '1.2-2'}}</p>\n                        </div>\n                    </div>\n                    <div class=\"minH lH\">\n                        <div class=\"col-md-12 \">\n                            <h4>{{video?.name | truncate : 50}}</h4>\n                        </div>\n                        <div class=\"row \">\n                            <div class=\"inline-block\">\n                                <p>by:&nbsp;<a [routerLink]=\"['/'+video?.username]\">@{{video?.username}}</a></p>\n                                <p>&nbsp; • &nbsp;<span class=\"glyphicon glyphicon-globe\"></span><span class=\"glyphicon glyphicon-globe \"></span><span class=\"glyphicon glyphicon-globe\"></span><span class=\"pull-right\">&nbsp; • &nbsp;</span></p>\n                                <p><span class=\"glyphicon glyphicon-globe pull-right\"></span></p>\n                            </div>\n                        </div>\n                        <div class=\"row text-left\">\n                            <div class=\"inline-block\">\n                                <p>{{zeals[i]?.zeals}} zeals</p>\n                                <p>&nbsp; • &nbsp; {{video?.views}} views </p>\n                                <p>&nbsp; • &nbsp;{{video?.date | toDate | timeAgo}} </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "h1, h4 {\n  color: white; }\n\n.cover {\n  height: 150px;\n  background: #6327c5; }\n\n.marginLeft {\n  margin-left: 40px; }\n\n.cl-white {\n  color: white; }\n\n.bg-premium {\n  background: #a0db4b; }\n\n.bg-grey {\n  background: #e8e8e8;\n  position: fixed;\n  z-index: -1000;\n  /* Preserve aspet ratio */\n  min-width: 100%;\n  min-height: 100%; }\n\n.bg-purple {\n  background: #6327c5; }\n\n.fullKeep {\n  min-width: 100%; }\n\n.height {\n  margin-bottom: -25px; }\n\n.index {\n  position: absolute; }\n\n.pullUp {\n  margin-top: -100px; }\n\n.pullUp1 {\n  margin-top: -30px; }\n\n.pullDivision {\n  margin-top: -45px; }\n\n.pullUp2 {\n  margin-top: -11px; }\n\n.pushDown {\n  margin-top: 30px; }\n\n.paddUp {\n  padding-top: 50px; }\n\n.btnChange {\n  padding: 0;\n  border-radius: 0;\n  max-width: 150px;\n  min-width: 150px; }\n\n.pushBtn {\n  margin-top: 13px; }\n\nh4.changeText {\n  font-style: italic; }\n\n.flag {\n  width: 10%; }\n\n.col-md-3 h2 {\n  padding: 0; }\n\n.pointer {\n  cursor: pointer; }\n\n.box {\n  background: white;\n  text-align: center;\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  border: 10px solid white;\n  overflow: hidden; }\n  .box img {\n    background-size: cover;\n    height: 100%; }\n\n.input {\n  padding-left: 5px; }\n\n.menu a {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  margin-right: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  .menu a:hover {\n    background: white;\n    color: black; }\n  .menu a.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; }\n\n.videos {\n  margin-right: 20px; }\n  .videos .container-fluid {\n    margin: 50px 45px 20px 20px;\n    padding-top: 10px; }\n  .videos .pushUp {\n    margin-top: 50px; }\n  .videos .fixed {\n    height: 100%; }\n  .videos .pull-center {\n    margin: 0;\n    padding: 0; }\n  .videos .col-md-12 {\n    padding: 0;\n    margin: 0; }\n  .videos .col-md-1 {\n    padding: 0;\n    margin: 0; }\n  .videos .col-md-8 {\n    padding: 0;\n    margin: 0; }\n  .videos .col-md-2 {\n    margin-top: 15px; }\n  .videos .modified {\n    margin: 50px 30px; }\n  .videos .messageBox {\n    max-height: 920px;\n    height: 392px; }\n  .videos .commentSection {\n    margin-bottom: 40; }\n  .videos img {\n    height: 50px; }\n  .videos .box2 {\n    background: white;\n    text-align: center;\n    border-radius: 50%;\n    overflow: hidden; }\n    .videos .box2 img {\n      background-size: cover; }\n  .videos .minH {\n    min-height: 103px; }\n  .videos .padd {\n    padding: 10px 8px 10px 10px; }\n  .videos div.row.text-left {\n    line-height: 0.4; }\n  .videos h1 {\n    color: black; }\n  .videos h4 {\n    font-size: 1.08em;\n    padding: 0 0 0 7px;\n    margin: 0;\n    color: black; }\n  .videos p:nth-child(1) {\n    margin: 0 0 0 15px; }\n  .videos a {\n    color: #6327c5;\n    cursor: pointer; }\n  .videos p {\n    padding: 0 0;\n    margin: 0;\n    font-size: 0.8em; }\n  .videos .bg-white {\n    background: white; }\n  .videos .inline-block {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex; }\n  .videos .positionRelative {\n    position: relative; }\n  .videos .modifiedBtn {\n    position: absolute;\n    right: 5px;\n    bottom: 13px;\n    color: grey;\n    padding: 2px 3px;\n    background: black; }\n  .videos .fixed {\n    height: 100%; }\n  .videos .col-md-12 {\n    padding: 0;\n    margin: 0; }\n  .videos .col-md-1 {\n    padding: 0;\n    margin: 0; }\n  .videos .col-md-8 {\n    padding: 0;\n    margin: 0; }\n  .videos .col-md-2 {\n    margin-top: 15px; }\n  .videos h3 {\n    padding: 0 0 0 0;\n    margin: 5px 0 0 5px; }\n  .videos h4 {\n    padding: 0 0 0 0;\n    margin: 0; }\n  .videos .btnAlign {\n    margin-left: 15px; }\n  .videos .bg-purple {\n    background: #6327c5; }\n  .videos .inline-blockLeft {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex; }\n  .videos .inline-blockRight {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex; }\n  .videos .heightVid img {\n    height: 500px;\n    background: black; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/profile/profile.component.sass"],"names":[],"mappings":"AACA;EACE,aAAY,EAAI;;AAClB;EACE,cAAa;EACb,oBAAmB,EAAI;;AACzB;EACE,kBAAiB,EAAI;;AACvB;EACE,aAAY,EAAI;;AAElB;EACE,oBAAmB,EAAI;;AACzB;EACE,oBAAmB;EACnB,gBAAe;EACf,eAAc;EACd,0BAA0B;EAC1B,gBAAe;EACf,iBAAgB,EAAI;;AAEtB;EACE,oBAAmB,EAAI;;AACzB;EACE,gBAAe,EAAI;;AACrB;EACE,qBAAoB,EAAI;;AAC1B;EACE,mBAAkB,EAAI;;AAExB;EACE,mBAAkB,EAAI;;AACxB;EACE,kBAAiB,EAAI;;AACvB;EACE,kBAAiB,EAAI;;AACvB;EACE,kBAAiB,EAAI;;AACvB;EACE,iBAAgB,EAAI;;AACtB;EACE,kBAAiB,EAAI;;AAEvB;EACE,WAAU;EACV,iBAAgB;EAChB,iBAAgB;EAChB,iBAAgB,EAAI;;AACtB;EACE,iBAAgB,EAAI;;AACtB;EACE,mBAAkB,EAAI;;AACxB;EACE,WAAU,EAAI;;AAChB;EACE,WAAU,EAAI;;AAChB;EACE,gBAAe,EAAI;;AAErB;EACE,kBAAiB;EACjB,mBAAkB;EAClB,aAAY;EACZ,cAAa;EACb,mBAAkB;EAClB,yBAAwB;EACxB,iBAAgB,EAGI;EAVtB;IASI,uBAAsB;IACtB,aAAY,EAAI;;AACpB;EACE,kBAAiB,EAAI;;AAEvB;EACE,aAAY;EACZ,0BAAyB;EACzB,0BAAyB;EACzB,sBAAqB;EACrB,mBAAkB;EAClB,mBAAkB;EAClB,oBAAmB;EACnB,kBAAiB;EACjB,qBAAoB,EAOA;EAhBtB;IAWI,kBAAiB;IACjB,aAAY,EAAI;EAZpB;IAcI,kBAAiB;IACjB,0BAAyB;IACzB,aAAY,EAAI;;AAGpB;EACE,mBAAkB,EAgHO;EAjH3B;IAGI,4BAA2B;IAC3B,kBAAiB,EAAI;EAJzB;IAMI,iBAAgB,EAAI;EANxB;IAQI,aAAY,EAAI;EARpB;IAUI,UAAS;IACT,WAAU,EAAI;EAXlB;IAaI,WAAU;IACV,UAAS,EAAI;EAdjB;IAgBI,WAAU;IACV,UAAS,EAAI;EAjBjB;IAmBI,WAAU;IACV,UAAS,EAAI;EApBjB;IAsBI,iBAAgB,EAAI;EAtBxB;IAwBI,kBAAiB,EAAI;EAxBzB;IA0BI,kBAAiB;IACjB,cAAa,EAAI;EA3BrB;IA6BI,kBAAiB,EAAI;EA7BzB;IAgCI,aAAY,EAAI;EAhCpB;IAkCI,kBAAiB;IACjB,mBAAkB;IAClB,mBAAkB;IAClB,iBAAgB,EAEc;IAvClC;MAuCM,uBAAsB,EAAI;EAvChC;IAyCI,kBAAiB,EAAI;EAzCzB;IA2CI,4BAA2B,EAAI;EA3CnC;IA8CI,iBAAgB,EAAI;EA9CxB;IAgDI,aAAY,EAAI;EAhDpB;IAmDM,kBAAY;IACd,mBAAkB;IAClB,UAAS;IACT,aAAY,EAAI;EAtDpB;IAwDI,mBAAkB,EAAI;EAxD1B;IA0DI,eAAc;IACd,gBAAe,EAAI;EA3DvB;IA6DI,aAAY;IACZ,UAAS;IAEP,iBAAW,EAAM;EAhEvB;IAkEI,kBAAiB,EAAI;EAlEzB;IAoEI,4BAAoB;IAApB,4BAAoB;IAApB,qBAAoB,EAAI;EApE5B;IAuEI,mBAAkB,EAAI;EAvE1B;IAyEI,mBAAkB;IAClB,WAAU;IACV,aAAY;IACZ,YAAW;IACX,iBAAgB;IAChB,kBAAiB,EAAI;EA9EzB;IAmFI,aAAY,EAAI;EAnFpB;IAqFI,WAAU;IACV,UAAS,EAAI;EAtFjB;IAwFI,WAAU;IACV,UAAS,EAAI;EAzFjB;IA2FI,WAAU;IACV,UAAS,EAAI;EA5FjB;IA8FI,iBAAgB,EAAI;EA9FxB;IAiGI,iBAAgB;IAChB,oBAAmB,EAAI;EAlG3B;IAoGI,iBAAgB;IAChB,UAAS,EAAI;EArGjB;IAuGI,kBAAiB,EAAI;EAvGzB;IA0GI,oBAAmB,EAAI;EA1G3B;IA4GI,4BAAoB;IAApB,4BAAoB;IAApB,qBAAoB,EAAI;EA5G5B;IA8GI,4BAAoB;IAApB,4BAAoB;IAApB,qBAAoB,EAAI;EA9G5B;IAgHI,cAAa;IACb,kBAAiB,EAAI","file":"profile.component.sass","sourcesContent":["// Colors and BG's\nh1, h4 {\n  color: white; }\n.cover {\n  height: 150px;\n  background: #6327c5; }\n.marginLeft {\n  margin-left: 40px; }\n.cl-white {\n  color: white; }\n\n.bg-premium {\n  background: #a0db4b; }\n.bg-grey {\n  background: #e8e8e8;\n  position: fixed;\n  z-index: -1000;\n  /* Preserve aspet ratio */\n  min-width: 100%;\n  min-height: 100%; }\n\n.bg-purple {\n  background: #6327c5; }\n.fullKeep {\n  min-width: 100%; }\n.height {\n  margin-bottom: -25px; }\n.index {\n  position: absolute; }\n\n.pullUp {\n  margin-top: -100px; }\n.pullUp1 {\n  margin-top: -30px; }\n.pullDivision {\n  margin-top: -45px; }\n.pullUp2 {\n  margin-top: -11px; }\n.pushDown {\n  margin-top: 30px; }\n.paddUp {\n  padding-top: 50px; }\n\n.btnChange {\n  padding: 0;\n  border-radius: 0;\n  max-width: 150px;\n  min-width: 150px; }\n.pushBtn {\n  margin-top: 13px; }\nh4.changeText {\n  font-style: italic; }\n.flag {\n  width: 10%; }\n.col-md-3 h2 {\n  padding: 0; }\n.pointer {\n  cursor: pointer; }\n// Profile image\n.box {\n  background: white;\n  text-align: center;\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  border: 10px solid white;\n  overflow: hidden;\n  img {\n    background-size: cover;\n    height: 100%; } }\n.input {\n  padding-left: 5px; }\n// Styling of the routerlink\n.menu a {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  margin-right: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  &:hover {\n    background: white;\n    color: black; }\n  &.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; } }\n\n// Bootstrap Modifications\n.videos {\n  margin-right: 20px;\n  .container-fluid {\n    margin: 50px 45px 20px 20px;\n    padding-top: 10px; }\n  .pushUp {\n    margin-top: 50px; }\n  .fixed {\n    height: 100%; }\n  .pull-center {\n    margin: 0;\n    padding: 0; }\n  .col-md-12 {\n    padding: 0;\n    margin: 0; }\n  .col-md-1 {\n    padding: 0;\n    margin: 0; }\n  .col-md-8 {\n    padding: 0;\n    margin: 0; }\n  .col-md-2 {\n    margin-top: 15px; }\n  .modified {\n    margin: 50px 30px; }\n  .messageBox {\n    max-height: 920px;\n    height: 392px; }\n  .commentSection {\n    margin-bottom: 40; }\n  // Profile image\n  img {\n    height: 50px; }\n  .box2 {\n    background: white;\n    text-align: center;\n    border-radius: 50%;\n    overflow: hidden;\n    img {\n      background-size: cover; } }\n  .minH {\n    min-height: 103px; }\n  .padd {\n    padding: 10px 8px 10px 10px; }\n\n  div.row.text-left {\n    line-height: 0.4; }\n  h1 {\n    color: black; }\n  h4 {\n    font: {\n      size: 1.08em; }\n    padding: 0 0 0 7px;\n    margin: 0;\n    color: black; }\n  p:nth-child(1) {\n    margin: 0 0 0 15px; }\n  a {\n    color: #6327c5;\n    cursor: pointer; }\n  p {\n    padding: 0 0;\n    margin: 0;\n    font: {\n      size: 0.8em; } }\n  .bg-white {\n    background: white; }\n  .inline-block {\n    display: inline-flex; }\n\n  .positionRelative {\n    position: relative; }\n  .modifiedBtn {\n    position: absolute;\n    right: 5px;\n    bottom: 13px;\n    color: grey;\n    padding: 2px 3px;\n    background: black; }\n\n\n  // Bootstrap Modifications\n  .fixed {\n    height: 100%; }\n  .col-md-12 {\n    padding: 0;\n    margin: 0; }\n  .col-md-1 {\n    padding: 0;\n    margin: 0; }\n  .col-md-8 {\n    padding: 0;\n    margin: 0; }\n  .col-md-2 {\n    margin-top: 15px; }\n\n  h3 {\n    padding: 0 0 0 0;\n    margin: 5px 0 0 5px; }\n  h4 {\n    padding: 0 0 0 0;\n    margin: 0; }\n  .btnAlign {\n    margin-left: 15px; }\n\n  .bg-purple {\n    background: #6327c5; }\n  .inline-blockLeft {\n    display: inline-flex; }\n  .inline-blockRight {\n    display: inline-flex; }\n  .heightVid img {\n    height: 500px;\n    background: black; } }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_crew_service__ = __webpack_require__("../../../../../src/app/services/crew.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(firebaseService, crewService, af, router, route) {
        this.firebaseService = firebaseService;
        this.crewService = crewService;
        this.af = af;
        this.router = router;
        this.route = route;
        this.appState = 'profile'; // what shows var
        this.appSwitch = 'about'; // between about and comment
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // Get id to fetch the user details
        var _this = this;
        this.supportIsNull = this.route.params.subscribe(function (params) {
            _this.id = _this.route.snapshot.params['username'];
            _this.paramsChanged(params['username']);
        });
        // Get Comments to Display
        this.firebaseService.getZeals().subscribe(function (zeals) {
            _this.zeals = zeals;
        });
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // Get Current Profile to Display
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.currentUser) {
                    _this.supportKey = profiles[i].$key;
                    _this.supportUser = profiles[i].username;
                    _this.supportUrl = profiles[i].url;
                    _this.supportingAdd = profiles[i].supportingAdd;
                }
            }
        });
        // Get Profile Details
        this.firebaseService.getProfileDetails(this.id).subscribe(function (profile) {
            _this.profile = profile;
            _this.profileName = profile.userin;
            _this.userin = profile.$key;
            _this.styles = profile.styles;
            var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref();
            var spaceRef = storageRef.child(_this.profile.path);
            storageRef.child(_this.profile.path).getDownloadURL().then(function (url) {
                // Set image url
                _this.imageUrl = url;
            }).catch(function (error) {
                console.log(error);
            });
        });
        // Get Videos to Display
        this.firebaseService.getVideos().subscribe(function (videos) {
            _this.videos = videos;
        });
        // Get Classes to Display
        this.crewService.getClasses().subscribe(function (classes) {
            _this.classes = classes;
        });
        // Get Supporters to Display
        this.firebaseService.getSupporters().subscribe(function (supports) {
            _this.supports = supports;
        });
    };
    ProfileComponent.prototype.changeState = function (state) {
        this.appState = state.toString();
    };
    ProfileComponent.prototype.switchState = function (state) {
        this.appSwitch = state.toString();
    };
    ProfileComponent.prototype.addComment = function () {
        var comment = {
            comm: this.comment,
            key: this.supportKey,
            url: this.supportUrl,
            video: this.videoKey
        };
        this.firebaseService.addComment(comment);
        this.comment = "";
    };
    ProfileComponent.prototype.deleteComment = function (key) {
        this.firebaseService.deleteComment(key);
    };
    ProfileComponent.prototype.over = function (video) {
        if (!video.hasAttribute("controls")) {
            video.setAttribute("controls", "controls");
        }
    };
    ProfileComponent.prototype.leave = function (video) {
        if (video.hasAttribute("controls")) {
            video.removeAttribute("controls");
        }
    };
    ProfileComponent.prototype.paramsChanged = function (id) {
        this.id = id;
        if (id === this.supportKey) {
            window.location.href = './' + id;
            return this.id;
        }
    };
    // SUPPORT PROFILE BTN IMPLEMENTATION
    ProfileComponent.prototype.supportProfile = function () {
        var _this = this;
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // 1. Add 1 PROFILES support
        var addSupport = {
            supporters: this.profile.supporters + 1
        };
        // 2. Add 1 PROFILES
        var addSupporting = {
            supportingAdd: this.supportingAdd + 1
        };
        // 3. Add support LoggedIn user
        var support = {
            support: this.profile.userin
        };
        // 4. Add on LoggedIn Profile support for userin
        var supporting = {
            supporting: this.profile.userin
        };
        // 5. Add To the supports LoggedIn user information
        var supportProfile = {
            url: this.supportUrl,
            username: this.supportUser,
            key: this.supportKey
        };
        // 6. Add To the supports Userin Profile LoggedIn User information
        var supportingProfile = {
            url: this.profile.url,
            username: this.profile.username,
            key: this.profile.$key
        };
        // 7. Add support LoggedIn user
        var sub = {
            support: true
        };
        // Methods used on Profiles Data
        this.firebaseService.updateProfile(this.id, addSupport);
        this.firebaseService.updateProfile(this.supportKey, addSupporting);
        this.firebaseService.updateProfile(this.id + '/support/' + this.supportKey, support);
        this.firebaseService.updateProfile(this.supportKey + '/supporting/' + this.id, supporting);
        // Methods used on Supports Data
        this.firebaseService.updateSupport(this.supportKey, supportProfile);
        this.firebaseService.updateSupport(this.supportKey + '/' + this.id, support);
        this.firebaseService.updateSupport(this.id + '/' + this.supportKey, supporting);
        this.firebaseService.updateSupport(this.id, supportingProfile);
    };
    // UNSUPPORT PROFILE BTN IMPLEMENTATION
    ProfileComponent.prototype.unsupportProfile = function () {
        // 1. Take 1 PROFILES support
        var takeSupport = {
            supporters: this.profile.supporters - 1
        };
        // 1. Take 1 PROFILES unsupport
        var takeSupporting = {
            supportingAdd: this.supportingAdd - 1
        };
        // Set when profile support === 0
        var support = {
            support: true
        };
        // Set when profile supportingAdd === 0
        var supporting = {
            supporting: true
        };
        // Change sub to true
        var sub = {
            support: true
        };
        // Profiles Methods
        this.firebaseService.updateProfile(this.id, takeSupport);
        this.firebaseService.updateProfile(this.supportKey, takeSupporting);
        this.firebaseService.deleteProfile(this.id + '/support/' + this.supportKey);
        this.firebaseService.deleteProfile(this.supportKey + '/supporting/' + this.id);
        // Supports Methods
        this.firebaseService.deleteSupport(this.supportKey + "/" + this.id + '/support/');
        this.firebaseService.deleteSupport(this.id + "/" + this.supportKey + '/supporting/');
        // When User is equal to 0
        if (this.profile.supporters === 0) {
            // Profiles Methods
            this.firebaseService.updateProfile(this.id, support);
            this.firebaseService.updateProfile(this.supportKey, supporting);
        }
    };
    // Support button on and off for videos
    ProfileComponent.prototype.support = function (id) {
        var _this = this;
        this.firebaseService.getVideoDetails(id).subscribe(function (video) {
            _this.video = video;
        });
        var add = {
            supporters: this.video.supporters + 1,
        };
        var support = {
            support: true
        };
        this.firebaseService.updateVideo(id, add);
        this.firebaseService.updateVideo(id + "/support/" + this.currentUser, support);
    };
    // Unsupport button on and off for videos
    ProfileComponent.prototype.unsupport = function (id) {
        var _this = this;
        this.firebaseService.getVideoDetails(id).subscribe(function (video) {
            _this.video = video;
        });
        var take = {
            supporters: this.video.supporters - 1,
        };
        var unsupport = {
            support: this.sub = false
        };
        this.firebaseService.updateVideo(id, take);
        this.firebaseService.updateVideo(id + "/support/" + this.currentUser, unsupport);
    };
    ;
    // UPDATE IMAGE
    ProfileComponent.prototype.onEditSubmitImage = function () {
        this.id = this.route.snapshot.params['username'];
        var image = {
            image: this.image
        };
        this.router.navigate([this.id]);
        this.firebaseService.updateProfileImage(this.id, image);
        this.firebaseService.updateSupportImage(this.id, image);
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_crew_service__["a" /* CrewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_crew_service__["a" /* CrewService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _e) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/supporters/supporters.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"menu\">\n        <button [routerLink]=\"['/'+id]\"><h4>Back</h4></button>\n    </div>\n    <h1>Supporters</h1>\n    <div *ngFor=\"let supporter of supporters; let i=index;\">\n        <div class=\"col-md-2  text-center\" *ngIf=\"supporters[i][id]?.support\">\n            <div class=\"col-md-6\">\n                <p class=\"pointer\" [routerLink]=\"['/'+supporter.key]\"><a>@{{supporter?.username}}</a></p>\n            </div>\n            <div class=\"col-md-6\">\n                <p>{{supporter?.level | lowercase}}</p>\n            </div>\n            <div class=\"box\">\n                <img class=\"img\" src=\"{{supporter?.url}}\" alt=\"profile-picture\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/supporters/supporters.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 50px 0 0 50px; }\n\n.pointer {\n  cursor: pointer; }\n\n.box {\n  background: white;\n  text-align: center;\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  border: 10px solid white;\n  overflow: hidden; }\n  .box img {\n    background-size: cover;\n    height: 100%; }\n\n.input {\n  padding-left: 5px; }\n\n.menu button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  margin-left: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 0; }\n  .menu button:hover {\n    background: white;\n    color: black; }\n  .menu button.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/profile/supporters/supporters.component.sass"],"names":[],"mappings":"AACA;EACE,uBAAsB,EAAI;;AAC5B;EACE,gBAAe,EAAI;;AAErB;EACE,kBAAiB;EACjB,mBAAkB;EAClB,aAAY;EACZ,cAAa;EACb,mBAAkB;EAClB,yBAAwB;EACxB,iBAAgB,EAGI;EAVtB;IASI,uBAAsB;IACtB,aAAY,EAAI;;AACpB;EACE,kBAAiB,EAAI;;AACvB;EACE,aAAY;EACZ,0BAAyB;EACzB,0BAAyB;EACzB,sBAAqB;EACrB,iBAAgB;EAChB,mBAAkB;EAClB,oBAAmB;EACnB,iBAAgB;EAChB,kBAAiB,EAOG;EAhBtB;IAWI,kBAAiB;IACjB,aAAY,EAAI;EAZpB;IAcI,kBAAiB;IACjB,0BAAyB;IACzB,aAAY,EAAI","file":"supporters.component.sass","sourcesContent":["// Bootstrap Modifications\n.container-fluid {\n  padding: 50px 0 0 50px; }\n.pointer {\n  cursor: pointer; }\n// Profile image\n.box {\n  background: white;\n  text-align: center;\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  border: 10px solid white;\n  overflow: hidden;\n  img {\n    background-size: cover;\n    height: 100%; } }\n.input {\n  padding-left: 5px; }\n.menu button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  margin-left: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 0;\n  &:hover {\n    background: white;\n    color: black; }\n  &.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; } }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/supporters/supporters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SupportersComponent = (function () {
    function SupportersComponent(af, firebaseService, route) {
        this.af = af;
        this.firebaseService = firebaseService;
        this.route = route;
        this.currentUser;
    }
    SupportersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id to fetch the user details
        this.id = this.route.snapshot.params['username'];
        this.firebaseService.getSupporters().subscribe(function (supporters) {
            _this.supporters = supporters;
        });
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.email;
            }
        });
    };
    SupportersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-supporters',
            template: __webpack_require__("../../../../../src/app/components/profile/supporters/supporters.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/supporters/supporters.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], SupportersComponent);
    return SupportersComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/supporters.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/supporting/supporting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"menu\">\n        <button [routerLink]=\"['/'+id]\"><h4>Back</h4></button>\n    </div>\n    <h1>Supporting</h1>\n    <div *ngFor=\"let supporter of supporters; let i=index;\">\n        <div class=\"col-md-2  text-center\" *ngIf=\"supporters[i][id]?.supporting\">\n            <div class=\"col-md-6\">\n                <p class=\"pointer\" [routerLink]=\"['/'+supporter.key]\"><a>@{{supporter?.username}}</a></p>\n            </div>\n            <div class=\"col-md-6\">\n                <p>{{supporter?.level | lowercase}}</p>\n            </div>\n            <div class=\"box\">\n                <img class=\"img\" src=\"{{supporter?.url}}\" alt=\"profile-picture\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/supporting/supporting.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 50px 0 0 50px; }\n\n.pointer {\n  cursor: pointer; }\n\n.box {\n  background: white;\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  border: 10px solid white;\n  overflow: hidden; }\n  .box img {\n    background-size: cover;\n    height: 100%; }\n\n.input {\n  padding-left: 5px; }\n\n.menu button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  margin-left: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 0; }\n  .menu button:hover {\n    background: white;\n    color: black; }\n  .menu button.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/profile/supporting/supporting.component.sass"],"names":[],"mappings":"AACA;EACE,uBAAsB,EAAI;;AAC5B;EACE,gBAAe,EAAI;;AAErB;EACE,kBAAiB;EACjB,aAAY;EACZ,cAAa;EACb,mBAAkB;EAClB,yBAAwB;EACxB,iBAAgB,EAGI;EATtB;IAQI,uBAAsB;IACtB,aAAY,EAAI;;AACpB;EACE,kBAAiB,EAAI;;AACvB;EACE,aAAY;EACZ,0BAAyB;EACzB,0BAAyB;EACzB,sBAAqB;EACrB,iBAAgB;EAChB,mBAAkB;EAClB,oBAAmB;EACnB,iBAAgB;EAChB,kBAAiB,EAOG;EAhBtB;IAWI,kBAAiB;IACjB,aAAY,EAAI;EAZpB;IAcI,kBAAiB;IACjB,0BAAyB;IACzB,aAAY,EAAI","file":"supporting.component.sass","sourcesContent":["// Bootstrap Modifications\n.container-fluid {\n  padding: 50px 0 0 50px; }\n.pointer {\n  cursor: pointer; }\n// Profile image\n.box {\n  background: white;\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  border: 10px solid white;\n  overflow: hidden;\n  img {\n    background-size: cover;\n    height: 100%; } }\n.input {\n  padding-left: 5px; }\n.menu button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  margin-left: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 0;\n  &:hover {\n    background: white;\n    color: black; }\n  &.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; } }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/supporting/supporting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SupportingComponent = (function () {
    function SupportingComponent(af, firebaseService, route) {
        this.af = af;
        this.firebaseService = firebaseService;
        this.route = route;
    }
    SupportingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id to fetch the user details
        this.id = this.route.snapshot.params['username'];
        this.firebaseService.getSupporters().subscribe(function (supporters) {
            _this.supporters = supporters;
        });
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.email;
            }
        });
    };
    SupportingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-supporting',
            template: __webpack_require__("../../../../../src/app/components/profile/supporting/supporting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/supporting/supporting.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], SupportingComponent);
    return SupportingComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/supporting.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/videos/add-video/add-video.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"col-md-offset-1 col-md-10\">\n        <form (submit)=\"onAddSubmit()\">\n            <div class=\"form-group\">\n                <h1>Title</h1>\n                <input #userName type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\n            </div>\n            <div class=\"form-group\">\n                <h1>Description</h1>\n                <textarea type=\"text\" [(ngModel)]=\"description\" name=\"description\" required></textarea>\n            </div>\n            <div class=\"form-group\">\n                <h1>Profile Video</h1>\n                <input [disabled]=\"!name\" (change)=\"updateUrl()\" id=\"video\" name=\"video\" [(ngModel)]=\"video\" type=\"file\">\n                <div *ngFor=\"let duration of durations\">\n                    <div *ngIf=\"duration?.videoDuration === false && duration?.name === name\">\n                        <video #time (loadedmetadata)=\"onMetadata(time, duration?.$key, duration?.name)\" src=\"{{duration?.url}}\"></video>\n                    </div>\n\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group\">\n                    <h1>Styles *</h1>\n                    <div *ngFor=\"let style of styles\">\n                        <div class=\"col-md-4\">\n                            <div class=\"col-md-5\">\n                                <input type=\"checkbox\" name=\"style\" id=\"change\" value=\"{{style.value}}\" [(ngModel)]=\"style.checked\" />\n                            </div>\n                            <div class=\"col-md-pull-2 col-md-7\">\n                                <h3>{{style?.display}}</h3>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n            <button type=\"submit\" [disabled]=\"!time\" value=\"Upload\" class=\"btn btn-success\">Upload</button>\n            <button [routerLink]=\"['/'+ userUid]\" class=\"btn\">Cancel</button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/videos/add-video/add-video.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 50px 0 0 50px; }\n\n.col-md-offset-1 {\n  margin-left: 45px; }\n\n.align {\n  margin-bottom: 40px; }\n\n#change {\n  margin-top: 25px; }\n\nh1 {\n  color: #6327c5; }\n\n.bg-grey {\n  background: #e8e8e8; }\n\n.bg-white {\n  background: white; }\n\ninput {\n  background-color: transparent;\n  color: black;\n  outline: none;\n  outline-style: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid #eeeeee 1px;\n  padding: 20px 10px 10px 15px;\n  margin-bottom: 20px;\n  width: 100%; }\n\ninput::-webkit-input-placeholder {\n  font-size: 1.3em;\n  line-height: 3; }\n\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  .menu a:hover, button:hover {\n    background: white;\n    color: black;\n    border: 3px solid #6327c5; }\n  .menu a.active, button.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; }\n\ntextarea {\n  width: 100%;\n  font-size: 1.6em; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/profile/videos/add-video/add-video.component.sass"],"names":[],"mappings":"AAEA;EACE,uBAAsB,EAAI;;AAC5B;EACE,kBAAiB,EAAI;;AAEvB;EACE,oBAAmB,EAAI;;AACzB;EACE,iBAAgB,EAAI;;AAEtB;EACE,eAAc,EAAI;;AACpB;EACE,oBAAmB,EAAI;;AACzB;EACE,kBAAiB,EAAI;;AAEvB;EACI,8BAA6B;EAC7B,aAAY;EACZ,cAAa;EACb,oBAAmB;EACnB,iBAAgB;EAChB,kBAAiB;EACjB,mBAAkB;EAClB,iCAAgC;EAChC,6BAA4B;EAC5B,oBAAmB;EACnB,YAAW,EAAI;;AAEnB;EACE,iBAAgB;EAChB,eAAc,EAAI;;AAEpB;EACE,aAAY;EACZ,0BAAyB;EACzB,0BAAyB;EACzB,sBAAqB;EACrB,mBAAkB;EAClB,oBAAmB;EACnB,kBAAiB;EACjB,qBAAoB,EAQA;EAhBtB;IAUI,kBAAiB;IACjB,aAAY;IACZ,0BAAyB,EAAI;EAZjC;IAcI,kBAAiB;IACjB,0BAAyB;IACzB,aAAY,EAAI;;AAEpB;EACE,YAAW;EACX,iBAAgB,EAAI","file":"add-video.component.sass","sourcesContent":["\n// Bootstrap Changes\n.container-fluid {\n  padding: 50px 0 0 50px; }\n.col-md-offset-1 {\n  margin-left: 45px; }\n// Layout Changes\n.align {\n  margin-bottom: 40px; }\n#change {\n  margin-top: 25px; }\n// Colors and BG's\nh1 {\n  color: #6327c5; }\n.bg-grey {\n  background: #e8e8e8; }\n.bg-white {\n  background: white; }\n// Input modifications\ninput {\n    background-color: transparent;\n    color: black;\n    outline: none;\n    outline-style: none;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: solid #eeeeee 1px;\n    padding: 20px 10px 10px 15px;\n    margin-bottom: 20px;\n    width: 100%; }\n\ninput::-webkit-input-placeholder {\n  font-size: 1.3em;\n  line-height: 3; }\n// Customize btn\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  &:hover {\n    background: white;\n    color: black;\n    border: 3px solid #6327c5; }\n  &.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; } }\n// Other changes\ntextarea {\n  width: 100%;\n  font-size: 1.6em; }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/videos/add-video/add-video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddVideoComponent = (function () {
    function AddVideoComponent(firebaseService, router, route, af) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.af = af;
        this.time = false; // check if time lenght of video
        this.count = 0;
        this.level = 'Beginner';
        this.booLean = true;
        this.date = new Date();
        this.styles = [
            { id: '0', display: 'StreetDance', checked: false },
            { id: '1', display: 'Modern', checked: false },
            { id: '2', display: 'Ballet', checked: false },
            { id: '3', display: 'Jazz', checked: false },
        ];
    }
    AddVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Current Profile
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.currentUser) {
                    _this.username = profiles[i].username;
                    _this.userUid = profiles[i].$key;
                    _this.userUrl = profiles[i].url;
                }
            }
        });
        // Get Videos
        this.firebaseService.getVideos().subscribe(function (videos) {
            _this.videos = videos;
        });
        // Get Zeals
        this.firebaseService.getZeals().subscribe(function (zeals) {
            _this.zeals = zeals;
        });
        // Get Video Duration
        this.firebaseService.getDurationVideo(this.userUid).subscribe(function (videoDuration) {
            _this.durations = videoDuration;
        });
        // Get current email
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
    };
    AddVideoComponent.prototype.updateUrl = function () {
        var video = {
            videoDuration: false,
            userUid: this.userUid,
            name: this.name
        };
        this.firebaseService.addVideo(video); // push video to get time length
    };
    AddVideoComponent.prototype.onMetadata = function (video, videoKey) {
        this.duration = video.duration;
        this.videoKey = videoKey;
        this.time = true;
    };
    AddVideoComponent.prototype.onAddSubmit = function () {
        this.router.navigate(['/' + this.userUid]); // Navigate to profile
        var styles = {
            styles: this.styles
        };
        var zeals = {
            addZeal: true,
            zeal: false,
            zeals: this.count,
        };
        var videos = {
            name: this.name,
            champion: this.level,
            description: this.description,
            userUid: this.userUid,
            userin: __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.email,
            username: this.username,
            duration: this.duration,
            videoDuration: true,
            views: this.count,
            styles: this.styles,
            watch: true,
            watching: this.count,
            date: this.date,
            imgUrl: this.userUrl
        };
        this.firebaseService.updateVideo(this.videoKey, videos); // update video database
        this.firebaseService.updateZeal(this.videoKey, zeals); // update zeals database
        for (var i = 0; i < this.durations.length; i++) {
            if (this.durations[i].videoDuration === false) {
                this.firebaseService.deleteVideo(this.durations[i].$key);
            }
        }
    };
    AddVideoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-add-video',
            template: __webpack_require__("../../../../../src/app/components/profile/videos/add-video/add-video.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/videos/add-video/add-video.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _d) || Object])
    ], AddVideoComponent);
    return AddVideoComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/add-video.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/videos/edit-video/edit-video.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <form (submit)=\"onEditSubmit()\">\n        <div class=\"form-group\">\n            <label>Title</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" name=\"name\">\n        </div>\n        <div class=\"form-group\">\n            <label>Description</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"description\" name=\"description\">\n        </div>\n        <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n        <button class=\"btn\" [routerLink]=\"['/video-manager/'+ userUid ]\" name=\"button\">Cancel</button>\n        <button class=\"btn\" (click)=\"onDeleteClick(video.path)\">Delete Video</button>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/videos/edit-video/edit-video.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 50px 0 0 50px; }\n\n.col-md-12 {\n  padding: 0;\n  margin: 0; }\n\n.modifiedEditBtn {\n  display: block;\n  position: absolute;\n  left: 5px;\n  top: 5px;\n  color: black;\n  padding: 0 4px;\n  z-index: 1;\n  font-size: 1.1em; }\n\n.positionRelative {\n  cursor: pointer;\n  position: relative; }\n\n.modifiedBtn {\n  position: absolute;\n  right: 5px;\n  bottom: 13px;\n  color: grey;\n  padding: 2px 3px;\n  background: black; }\n\nh4 {\n  font-size: 1.08em;\n  margin: 0; }\n\n.inline-block {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\np {\n  padding: 0;\n  margin: 0;\n  font-size: 0.8em; }\n\na {\n  color: #6327c5; }\n\n.minH {\n  min-height: 103px; }\n\np:nth-child(1) {\n  margin: 0 0 0 22px; }\n\nh4 {\n  padding: 0;\n  margin: 0; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/profile/videos/edit-video/edit-video.component.sass"],"names":[],"mappings":"AACA;EACE,uBAAsB,EAAI;;AAC5B;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,eAAc;EACd,mBAAkB;EAClB,UAAS;EACT,SAAQ;EACR,aAAY;EACZ,eAAc;EACd,WAAU;EAER,iBAAW,EAAM;;AACrB;EACE,gBAAe;EACf,mBAAkB,EAAI;;AACxB;EACE,mBAAkB;EAClB,WAAU;EACV,aAAY;EACZ,YAAW;EACX,iBAAgB;EAChB,kBAAiB,EAAI;;AACvB;EAEI,kBAAY;EACd,UAAS,EAAI;;AACf;EACE,4BAAoB;EAApB,4BAAoB;EAApB,qBAAoB,EAAI;;AAC1B;EACE,WAAU;EACV,UAAS;EAEP,iBAAW,EAAM;;AACrB;EACE,eAAc,EAAI;;AACpB;EACE,kBAAiB,EAAI;;AACvB;EACE,mBAAkB,EAAI;;AACxB;EACE,WAAU;EACV,UAAS,EAAI","file":"edit-video.component.sass","sourcesContent":["// Bootstrap Modifications\n.container-fluid {\n  padding: 50px 0 0 50px; }\n.col-md-12 {\n  padding: 0;\n  margin: 0; }\n.modifiedEditBtn {\n  display: block;\n  position: absolute;\n  left: 5px;\n  top: 5px;\n  color: black;\n  padding: 0 4px;\n  z-index: 1;\n  font: {\n    size: 1.1em; } }\n.positionRelative {\n  cursor: pointer;\n  position: relative; }\n.modifiedBtn {\n  position: absolute;\n  right: 5px;\n  bottom: 13px;\n  color: grey;\n  padding: 2px 3px;\n  background: black; }\nh4 {\n  font: {\n    size: 1.08em; }\n  margin: 0; }\n.inline-block {\n  display: inline-flex; }\np {\n  padding: 0;\n  margin: 0;\n  font: {\n    size: 0.8em; } }\na {\n  color: #6327c5; }\n.minH {\n  min-height: 103px; }\np:nth-child(1) {\n  margin: 0 0 0 22px; }\nh4 {\n  padding: 0;\n  margin: 0; }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/videos/edit-video/edit-video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditVideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditVideoComponent = (function () {
    function EditVideoComponent(firebaseService, router, route, af) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.af = af;
    }
    EditVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['username'];
        // Get Current Profile to Display
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.currentUser) {
                    _this.userUid = profiles[i].$key;
                }
            }
        });
        this.firebaseService.getVideoDetails(this.id).subscribe(function (video) {
            _this.video = video;
            _this.af.auth.subscribe(function (auth) {
                if (auth) {
                    _this.currentUser = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.email;
                    if (video.userin != _this.currentUser) {
                        _this.router.navigate(['/']);
                    }
                }
                return _this.currentUser;
            });
            _this.name = video.name;
            _this.description = video.description;
        });
    };
    EditVideoComponent.prototype.onEditSubmit = function () {
        var video = {
            name: this.name,
            description: this.description,
        };
        this.firebaseService.updateVideo(this.id, video);
        this.router.navigate(['/video-manager/' + this.userUid]);
    };
    EditVideoComponent.prototype.onDeleteClick = function (path) {
        this.firebaseService.deleteVideo(this.id);
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref();
        var spaceRef = storageRef.child(path);
        storageRef.child(path).delete().then(function (url) {
        }).catch(function (error) {
            console.log(error);
        });
        this.router.navigate(['/video-manager/' + this.userUid]);
    };
    EditVideoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-edit-video',
            template: __webpack_require__("../../../../../src/app/components/profile/videos/edit-video/edit-video.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/videos/edit-video/edit-video.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _d) || Object])
    ], EditVideoComponent);
    return EditVideoComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/edit-video.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/videos/edit-video/edit-videos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditVideosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditVideosComponent = (function () {
    function EditVideosComponent(firebaseService, af, route) {
        this.firebaseService = firebaseService;
        this.af = af;
        this.route = route;
    }
    EditVideosComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id to fetch the user details
        this.id = this.route.snapshot.params['username'];
        // Get Zeals to Display
        this.firebaseService.getZeals().subscribe(function (zeals) {
            _this.zeals = zeals;
        });
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // Get Videos to Display
        this.firebaseService.getVideos().subscribe(function (videos) {
            _this.videos = videos;
        });
        // Get Profile Details
        this.firebaseService.getProfileDetails(this.id).subscribe(function (profile) {
            _this.profile = profile;
        });
    };
    EditVideosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-edit-videos',
            template: "\n              <br>\n                <div *ngFor=\"let video of videos; let i=index;\">\n                  <div class=\"col-md-2 \" *ngIf=\"video?.userin === profile?.userin && !video?.watch[currentKey]\">\n\n                      <div>\n                          <div class=\"positionRelative\">\n                            <button class=\"btn pull-right modifiedEditBtn\" [routerLink]=\"['/video-edit/'+video.$key]\">Edit</button>\n                          </div>\n                          <video width=\"100%\" height=\"auto\" src=\"{{video?.url}}\"></video>\n                          <div class=\"positionRelative\">\n                              <p class=\"modifiedBtn\">{{video?.duration / 100 | number: '1.2-2'}}</p>\n                          </div>\n\n                      </div>\n\n                      <div class=\"minH\">\n                          <div class=\"col-md-12 \">\n                              <h4>{{video?.name | truncate : 50}}</h4>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"inline-block\">\n                                  <p>by:&nbsp;<a [routerLink]=\"['/'+video?.username]\">@{{video?.username}}</a></p>\n                                  <p>&nbsp; \u2022 &nbsp;<span class=\"glyphicon glyphicon-globe\"></span><span class=\"glyphicon glyphicon-globe \"></span><span class=\"glyphicon glyphicon-globe\"></span><span class=\"pull-right\">&nbsp; \u2022 &nbsp;</span></p>\n                                  <p><span class=\"glyphicon glyphicon-globe pull-right\"></span></p>\n                              </div>\n                          </div>\n                           <div class=\"row text-left\">\n                              <div class=\"inline-block\">\n                                  <p>{{zeals[i]?.zeals}} zeals</p>\n                                  <p>&nbsp; \u2022 &nbsp; {{video?.views}} views </p>\n                                  <p>&nbsp; \u2022 &nbsp;{{video?.date | toDate | timeAgo}} </p>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n\n              </div>\n\n            ",
            styles: [__webpack_require__("../../../../../src/app/components/profile/videos/edit-video/edit-video.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EditVideosComponent);
    return EditVideosComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/edit-videos.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/videos/videos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 \">\n    <div class=\"col-md-6\" (mouseover)=\"over(edit)\" (mouseleave)=\"leave(edit)\">\n        <div class=\"col-md-12 heightVid\">\n            <video #edit width=\"100%\" height=\"100%\" src=\"{{vid?.url}}\"></video>\n        </div>\n        <div class=\"col-md-1 \">\n            <div class=\"box\">\n                <img class=\"img\" src=\"{{vid?.imgUrl}}\" alt=\"profile-picture\">\n            </div>\n        </div>\n        <div class=\"col-md-8 \" *ngIf=\"vid?.userin !== currentUser\">\n            <div class=\"inline-blockLeft\">\n                <p><a class=\"cl-purple\" [routerLink]=\"['/'+vid?.username]\">{{vid?.username}}</a></p>\n                <button class=\"btn\" *ngIf=\"!profile?.support[supportKey]?.support\" class=\"btn btnChange\" (click)=\"supportProfile(vid?.username)\">SUPPORT</button>\n                <button class=\"btn\" *ngIf=\"profile?.support[supportKey]?.support\" class=\"btn btnChange btn-danger\" (click)=\"unsupportProfile(vid?.username)\">UNSUPPORT</button>\n                <h3>{{profile?.supporters}} supporters</h3>\n            </div>\n            <div class=\"inline-blockRight\">\n                <button class=\"btn\" *ngIf=\"!zealVideo?.addZeal[supportKey]?.addZeal\" class=\"btn btnChange\" (click)=\"zeal(zealVideo?.$key)\">ZEAL</button>\n                <button class=\"btn\" *ngIf=\"zealVideo?.addZeal[supportKey]?.addZeal\" class=\"btn btnChange btn-danger\" (click)=\"unzeal(zealVideo?.$key)\">UNZEAL</button>\n                <h3>{{zealCount}} zeals</h3>\n            </div>\n        </div>\n        <div class=\"col-md-4\" *ngIf=\"vid?.userin === currentUser\">\n            <p><a class=\"cl-purple\" [routerLink]=\"['/'+vid?.username]\">{{vid?.username}}</a></p>\n            <button [routerLink]=\"['/video-edit/'+vid?.$key]\" class=\"btn\">Edit Video</button>\n        </div>\n    </div>\n    <div class=\"col-md-4 commentSection \">\n        <div class=\"row\">\n            <div class=\"inline-block btnAlign\">\n                <button class=\"btn\" (click)=\"changeState('about')\">About</button>\n                <button class=\"btn\" (click)=\"changeState('comment')\">Comment</button>\n            </div>\n        </div>\n        <div *ngIf=\"appState === 'about'\">\n            <h1>{{vid?.name}}</h1>\n            <p>{{vid?.description}}</p>\n            <div class=\"inline-block row\">\n                <p>Styles:</p>\n                <div *ngFor=\"let style of vid?.styles\">\n                    <div *ngIf=\"style.checked === true\">\n                        <p class=\"cl-white\">#{{style.display | lowercase}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"appState === 'comment'\">\n            <div class=\"messageBox\" style=\"overflow-y: scroll;\">\n                <div *ngFor=\"let comment of comments\">\n                    <div *ngIf=\"comment?.video === vid?.$key\">\n                        <div class=\"col-md-11\">\n                            <div class=\"inline-block padd\">\n                                <div>\n                                    <img src=\"{{comment?.url}}\" alt=\"comment picture\">\n                                </div>\n                                <h4><a [routerLink]=\"['/'+comment?.key]\">{{comment?.key}}</a></h4>\n                                :\n                                <h4>&nbsp;{{comment?.comm}}</h4>\n                            </div>\n                        </div>\n                        <div *ngIf=\"comment?.key === supportKey\">\n                            <div class=\"col-md-1\">\n                                <span style=\"cursor: pointer\" (click)=\"deleteComment(comment?.$key)\">x</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-9\">\n                <input type=\"text\" name=\"comment\" [(ngModel)]=\"comment\" placeholder=\"Type a comment\">\n            </div>\n            <div class=\"col-md-2 menu\">\n                <button class=\"btn\" type=\"submit\" (click)=\"addComment()\" value=\"Send\">Send</button>\n            </div>\n        </div>\n    </div>\n\n    <div *ngFor=\"let video of videos; let i=index\">\n        <div class=\"col-md-2\" *ngIf=\"video?.username === vid?.username && video?.$key !== vid?.$key\">\n            <div>\n                <video [routerLink]=\"['/'+vid?.username+'/'+video?.$key]\" width=\"100%\" height=\"auto\" src=\"{{video?.url}}\"></video>\n                <div class=\"positionRelative\">\n                    <p class=\"modifiedBtn\">{{video?.duration / 100 | number: '1.2-2'}}</p>\n                </div>\n            </div>\n            <div class=\"minH lH\">\n                <div class=\"col-md-12 \">\n                    <h4>{{video?.name | truncate : 50}}</h4>\n                </div>\n                <div class=\"row \">\n                    <div class=\"inline-block\">\n                        <p>by:&nbsp;<a [routerLink]=\"['/'+video?.username]\">@{{video?.username}}</a></p>\n                        <p>&nbsp; • &nbsp;<span class=\"glyphicon glyphicon-globe\"></span><span class=\"glyphicon glyphicon-globe \"></span><span class=\"glyphicon glyphicon-globe\"></span><span class=\"pull-right\">&nbsp; • &nbsp;</span></p>\n                        <p><span class=\"glyphicon glyphicon-globe pull-right\"></span></p>\n                    </div>\n                </div>\n                <div class=\"row text-left\">\n                    <div class=\"inline-block\">\n                        <p>{{zeals[i]?.zeals}} zeals</p>\n                        <p>&nbsp; • &nbsp; {{video?.views}} views </p>\n                        <p>&nbsp; • &nbsp;{{video?.date | toDate | timeAgo}} </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/videos/videos.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 0;\n  margin: 0; }\n\n.pushUp {\n  margin-top: 50px; }\n\n.fixed {\n  height: 100%; }\n\n.pull-center {\n  margin: 0;\n  padding: 0; }\n\n.col-md-12 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-1 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-8 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-2 {\n  margin-top: 15px; }\n\n.modified {\n  margin: 50px 30px; }\n\n.commentSection {\n  margin-bottom: 40; }\n\nimg {\n  height: 50px; }\n\n.box {\n  background: white;\n  text-align: center;\n  height: 60px;\n  border-radius: 50%;\n  overflow: hidden; }\n  .box img {\n    background-size: cover;\n    height: 100%; }\n\n.minH {\n  min-height: 103px; }\n\n.padd {\n  padding: 10px 8px 10px 10px; }\n\ndiv.row.text-left {\n  line-height: 0.4; }\n\nh4 {\n  font-size: 1.08em;\n  padding: 0;\n  margin: 0; }\n\np:nth-child(1) {\n  margin: 0 0 0 15px; }\n\na {\n  color: #6327c5;\n  cursor: pointer; }\n\n.inline-block {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.container-fluid {\n  padding: 0;\n  margin: 0; }\n\n.pushUp {\n  margin-top: 50px; }\n\n.fixed {\n  height: 100%; }\n\n.pull-center {\n  margin: 0;\n  padding: 0; }\n\n.col-md-12 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-1 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-8 {\n  padding: 0;\n  margin: 0; }\n\n.col-md-2 {\n  margin-top: 15px; }\n\n.modified {\n  margin: 50px 30px; }\n\n.messageBox {\n  max-height: 920px;\n  height: 392px; }\n\n.commentSection {\n  margin-bottom: 40; }\n\n.minH {\n  min-height: 103px; }\n\n.padd {\n  padding: 10px 8px 10px 10px; }\n\n.purple {\n  color: #6327c5; }\n\nh3 {\n  padding: 0 0 0 0;\n  margin: 5px 0 0 5px; }\n\n.btnAlign {\n  margin-left: 15px; }\n\n.bg-white {\n  background: white; }\n\n.bg-purple {\n  background: #6327c5; }\n\n.inline-blockLeft {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.inline-blockRight {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\ninput[type=\"text\"] {\n  background-color: transparent;\n  color: black;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: solid #eeeeee 1px;\n  padding: 20px 10px 10px 15px;\n  margin-bottom: 10px;\n  width: 100%;\n  font-size: 1.2em; }\n\n.positionRelative {\n  position: relative; }\n\n.modifiedBtn {\n  position: absolute;\n  right: 5px;\n  bottom: 13px;\n  color: grey;\n  padding: 2px 3px;\n  background: black; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/profile/videos/videos.component.sass"],"names":[],"mappings":"AAEA;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,iBAAgB,EAAI;;AACtB;EACE,aAAY,EAAI;;AAClB;EACE,UAAS;EACT,WAAU,EAAI;;AAChB;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,iBAAgB,EAAI;;AACtB;EACE,kBAAiB,EAAI;;AAEvB;EACE,kBAAiB,EAAI;;AAEvB;EACE,aAAY,EAAI;;AAClB;EACE,kBAAiB;EACjB,mBAAkB;EAClB,aAAY;EACZ,mBAAkB;EAClB,iBAAgB,EAGI;EARtB;IAOI,uBAAsB;IACtB,aAAY,EAAI;;AACpB;EACE,kBAAiB,EAAI;;AACvB;EACE,4BAA2B,EAAI;;AAEjC;EACE,iBAAgB,EAAI;;AACtB;EAEI,kBAAY;EACd,WAAU;EACV,UAAS,EAAI;;AACf;EACE,mBAAkB,EAAI;;AACxB;EACE,eAAc;EACd,gBAAe,EAAI;;AAGrB;EACE,4BAAoB;EAApB,4BAAoB;EAApB,qBAAoB,EAAI;;AAI1B;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,iBAAgB,EAAI;;AACtB;EACE,aAAY,EAAI;;AAClB;EACE,UAAS;EACT,WAAU,EAAI;;AAChB;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,WAAU;EACV,UAAS,EAAI;;AACf;EACE,iBAAgB,EAAI;;AACtB;EACE,kBAAiB,EAAI;;AACvB;EACE,kBAAiB;EACjB,cAAa,EAAI;;AACnB;EACE,kBAAiB,EAAI;;AACvB;EACE,kBAAiB,EAAI;;AACvB;EACE,4BAA2B,EAAI;;AACjC;EACE,eAAc,EAAI;;AAEpB;EACE,iBAAgB;EAChB,oBAAmB,EAAI;;AAGzB;EACE,kBAAiB,EAAI;;AAEvB;EACE,kBAAiB,EAAI;;AACvB;EACE,oBAAmB,EAAI;;AACzB;EACE,4BAAoB;EAApB,4BAAoB;EAApB,qBAAoB,EAAI;;AAC1B;EACE,4BAAoB;EAApB,4BAAoB;EAApB,qBAAoB,EAAI;;AAE1B;EACI,8BAA6B;EAC7B,aAAY;EACZ,cAAa;EACb,iBAAgB;EAChB,kBAAiB;EACjB,mBAAkB;EAClB,iCAAgC;EAChC,6BAA4B;EAC5B,oBAAmB;EACnB,YAAW;EAET,iBAAW,EAAM;;AAEvB;EACE,mBAAkB,EAAI;;AACxB;EACE,mBAAkB;EAClB,WAAU;EACV,aAAY;EACZ,YAAW;EACX,iBAAgB;EAChB,kBAAiB,EAAI","file":"videos.component.sass","sourcesContent":["\n// Bootstrap Modifications\n.container-fluid {\n  padding: 0;\n  margin: 0; }\n.pushUp {\n  margin-top: 50px; }\n.fixed {\n  height: 100%; }\n.pull-center {\n  margin: 0;\n  padding: 0; }\n.col-md-12 {\n  padding: 0;\n  margin: 0; }\n.col-md-1 {\n  padding: 0;\n  margin: 0; }\n.col-md-8 {\n  padding: 0;\n  margin: 0; }\n.col-md-2 {\n  margin-top: 15px; }\n.modified {\n  margin: 50px 30px; }\n\n.commentSection {\n  margin-bottom: 40; }\n// Profile image\nimg {\n  height: 50px; }\n.box {\n  background: white;\n  text-align: center;\n  height: 60px;\n  border-radius: 50%;\n  overflow: hidden;\n  img {\n    background-size: cover;\n    height: 100%; } }\n.minH {\n  min-height: 103px; }\n.padd {\n  padding: 10px 8px 10px 10px; }\n\ndiv.row.text-left {\n  line-height: 0.4; }\nh4 {\n  font: {\n    size: 1.08em; }\n  padding: 0;\n  margin: 0; }\np:nth-child(1) {\n  margin: 0 0 0 15px; }\na {\n  color: #6327c5;\n  cursor: pointer; }\n\n\n.inline-block {\n  display: inline-flex; }\n\n\n// Bootstrap Modifications\n.container-fluid {\n  padding: 0;\n  margin: 0; }\n.pushUp {\n  margin-top: 50px; }\n.fixed {\n  height: 100%; }\n.pull-center {\n  margin: 0;\n  padding: 0; }\n.col-md-12 {\n  padding: 0;\n  margin: 0; }\n.col-md-1 {\n  padding: 0;\n  margin: 0; }\n.col-md-8 {\n  padding: 0;\n  margin: 0; }\n.col-md-2 {\n  margin-top: 15px; }\n.modified {\n  margin: 50px 30px; }\n.messageBox {\n  max-height: 920px;\n  height: 392px; }\n.commentSection {\n  margin-bottom: 40; }\n.minH {\n  min-height: 103px; }\n.padd {\n  padding: 10px 8px 10px 10px; }\n.purple {\n  color: #6327c5; }\n\nh3 {\n  padding: 0 0 0 0;\n  margin: 5px 0 0 5px; }\nh4 {}\n\n.btnAlign {\n  margin-left: 15px; }\n\n.bg-white {\n  background: white; }\n.bg-purple {\n  background: #6327c5; }\n.inline-blockLeft {\n  display: inline-flex; }\n.inline-blockRight {\n  display: inline-flex; }\n\ninput[type=\"text\"] {\n    background-color: transparent;\n    color: black;\n    outline: none;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: solid #eeeeee 1px;\n    padding: 20px 10px 10px 15px;\n    margin-bottom: 10px;\n    width: 100%;\n    font: {\n      size: 1.2em; } }\n\n.positionRelative {\n  position: relative; }\n.modifiedBtn {\n  position: absolute;\n  right: 5px;\n  bottom: 13px;\n  color: grey;\n  padding: 2px 3px;\n  background: black; }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/videos/videos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideosComponent = (function () {
    function VideosComponent(firebaseService, af, route) {
        this.firebaseService = firebaseService;
        this.af = af;
        this.route = route;
        this.sub = false;
        this.appState = 'about';
    }
    VideosComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id to fetch the user details
        this.id = this.route.snapshot.params['profile'];
        this.supportIsNull = this.route.params.subscribe(function (params) {
            // Get current Video
            _this.firebaseService.getVideoDetails(params['username']).subscribe(function (video) {
                _this.vid = video;
            });
            // Get Zeal to Display
            _this.firebaseService.getZealDetails(params['username']).subscribe(function (zeal) {
                _this.zealVideo = zeal;
                _this.zealCount = zeal.zeals;
            });
        });
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        this.firebaseService.getVideos().subscribe(function (videos) {
            _this.videos = videos;
        });
        // Get Current Profile to Display
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.currentUser) {
                    _this.supportKey = profiles[i].$key;
                    _this.supportUser = profiles[i].username;
                    _this.supportUrl = profiles[i].url;
                    _this.supportingAdd = profiles[i].supportingAdd;
                }
            }
        });
        // Get Comments to Display
        this.firebaseService.getZeals().subscribe(function (zeals) {
            _this.zeals = zeals;
        });
        // Get Comments to Display
        this.firebaseService.getProfileDetails(this.id).subscribe(function (profile) {
            _this.profile = profile;
        });
        // Get Comments to Display
        this.firebaseService.getComments().subscribe(function (comments) {
            _this.comments = comments;
        });
    };
    VideosComponent.prototype.changeState = function (state) {
        this.appState = state.toString();
    };
    VideosComponent.prototype.addComment = function () {
        var comment = {
            comm: this.comment,
            key: this.supportKey,
            url: this.supportUrl,
            video: this.vid.$key
        };
        this.firebaseService.addComment(comment);
        this.comment = "";
    };
    VideosComponent.prototype.deleteComment = function (key) {
        this.firebaseService.deleteComment(key);
    };
    VideosComponent.prototype.over = function (video) {
        if (!video.hasAttribute("controls")) {
            video.setAttribute("controls", "controls");
        }
    };
    VideosComponent.prototype.leave = function (video) {
        if (video.hasAttribute("controls")) {
            video.removeAttribute("controls");
        }
    };
    // SUPPORT PROFILE BTN IMPLEMENTATION
    VideosComponent.prototype.supportProfile = function (id) {
        var _this = this;
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // 1. Add 1 PROFILES support
        var addSupport = {
            supporters: this.profile.supporters + 1
        };
        // 2. Add 1 PROFILES
        var addSupporting = {
            supportingAdd: this.supportingAdd + 1
        };
        // 3. Add support LoggedIn user
        var support = {
            support: this.profile.userin
        };
        // 4. Add on LoggedIn Profile support for userin
        var supporting = {
            supporting: this.profile.userin
        };
        // 5. Add To the supports LoggedIn user information
        var supportProfile = {
            url: this.supportUrl,
            username: this.supportUser,
            key: this.supportKey
        };
        // 6. Add To the supports Userin Profile LoggedIn User information
        var supportingProfile = {
            url: this.profile.url,
            username: this.profile.username,
            key: this.profile.$key
        };
        // 7. Add support LoggedIn user
        var sub = {
            support: true
        };
        // Methods used on Profiles Data
        this.firebaseService.updateProfile(id, addSupport);
        this.firebaseService.updateProfile(this.supportKey, addSupporting);
        this.firebaseService.updateProfile(id + '/support/' + this.supportKey, support);
        this.firebaseService.updateProfile(this.supportKey + '/supporting/' + id, supporting);
        // Methods used on Supports Data
        this.firebaseService.updateSupport(this.supportKey, supportProfile);
        this.firebaseService.updateSupport(this.supportKey + '/' + id, support);
        this.firebaseService.updateSupport(id + '/' + this.supportKey, supporting);
        this.firebaseService.updateSupport(id, supportingProfile);
    };
    // UNSUPPORT PROFILE BTN IMPLEMENTATION
    VideosComponent.prototype.unsupportProfile = function (id) {
        // 1. Take 1 PROFILES support
        var takeSupport = {
            supporters: this.profile.supporters - 1
        };
        // 1. Take 1 PROFILES unsupport
        var takeSupporting = {
            supportingAdd: this.supportingAdd - 1
        };
        // Set when profile support === 0
        var support = {
            support: true
        };
        // Set when profile supportingAdd === 0
        var supporting = {
            supporting: true
        };
        // Change sub to true
        var sub = {
            support: true
        };
        // Profiles Methods
        this.firebaseService.updateProfile(id, takeSupport);
        this.firebaseService.updateProfile(this.supportKey, takeSupporting);
        this.firebaseService.deleteProfile(id + '/support/' + this.supportKey);
        this.firebaseService.deleteProfile(this.supportKey + '/supporting/' + id);
        // Supports Methods
        this.firebaseService.deleteSupport(this.supportKey + "/" + id + '/support/');
        this.firebaseService.deleteSupport(id + "/" + this.supportKey + '/supporting/');
        // When User is equal to 0
        if (this.profile.supporters === 0) {
            // Profiles Methods
            this.firebaseService.updateProfile(id, support);
            this.firebaseService.updateProfile(this.supportKey, supporting);
        }
    };
    // Support button on and off for videos
    VideosComponent.prototype.zeal = function (id) {
        var add = {
            zeals: this.zealCount + 1,
        };
        var zeal = {
            addZeal: true,
        };
        this.firebaseService.updateZeal(id, add);
        this.firebaseService.updateZeal(id + "/addZeal/" + this.supportKey, zeal);
    };
    // Unsupport button on and off for videos
    VideosComponent.prototype.unzeal = function (id) {
        var take = {
            zeals: this.zealCount - 1,
        };
        var zeal = {
            addZeal: false
        };
        if (this.zealCount > 1) {
            this.firebaseService.updateZeal(id, take);
            this.firebaseService.deleteZeal(id + "/addZeal/" + this.supportKey + '/addZeal');
        }
        else {
            this.firebaseService.updateZeal(id, take);
            this.firebaseService.updateZeal(id, zeal);
        }
    };
    ;
    VideosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-videos',
            template: __webpack_require__("../../../../../src/app/components/profile/videos/videos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/videos/videos.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], VideosComponent);
    return VideosComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/videos.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/video-manager/video-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1>Video Manager</h1>\n    <div class=\"menu\">\n        <button [routerLink]=\"['/'+userUid]\">Back</button>\n\n    </div>\n    <br>\n\n    <div class=\"menu\">\n\n        <a routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['./']\">Videos</a>\n        <a routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['./add']\">Add Video</a>\n    </div>\n\n    <br>\n\n    <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/video-manager/video-manager.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".container-fluid {\n  padding: 50px 0 0 50px; }\n\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  .menu a:hover, button:hover {\n    background: white;\n    color: black; }\n  .menu a.active, button.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; }\n", "", {"version":3,"sources":["/Users/Tradeshift/Desktop/ztmvp/src/app/components/video-manager/video-manager.component.sass"],"names":[],"mappings":"AAEA;EACE,uBAAsB,EAAI;;AAG5B;EACE,aAAY;EACZ,0BAAyB;EACzB,0BAAyB;EACzB,sBAAqB;EACrB,mBAAkB;EAClB,oBAAmB;EACnB,kBAAiB;EACjB,qBAAoB,EAOA;EAftB;IAUI,kBAAiB;IACjB,aAAY,EAAI;EAXpB;IAaI,kBAAiB;IACjB,0BAAyB;IACzB,aAAY,EAAI","file":"video-manager.component.sass","sourcesContent":["\n// Bootstrap Modifications\n.container-fluid {\n  padding: 50px 0 0 50px; }\n\n// Styling of the routerlink\n.menu a, button {\n  color: white;\n  background-color: #6327c5;\n  border: 3px solid #6327c5;\n  text-decoration: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  &:hover {\n    background: white;\n    color: black; }\n  &.active {\n    background: white;\n    border: 3px solid #6327c5;\n    color: black; } }\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/video-manager/video-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideoManagerComponent = (function () {
    function VideoManagerComponent(firebaseService, af, route) {
        this.firebaseService = firebaseService;
        this.af = af;
        this.route = route;
    }
    VideoManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id to fetch the user details
        this.id = this.route.snapshot.params['username'];
        // Get Current Profile to Display
        this.firebaseService.getProfiles().subscribe(function (profiles) {
            _this.profiles = profiles;
            for (var i = 0; i < profiles.length; i++) {
                if (profiles[i].userin === _this.currentUser) {
                    _this.userUid = profiles[i].$key;
                }
            }
        });
        // Store the current user
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.email;
            }
            return _this.currentUser;
        });
        // Get Videos to Display
        this.firebaseService.getVideos().subscribe(function (videos) {
            _this.videos = videos;
        });
        // Get Videos to Display
        this.firebaseService.getVideoDetails(this.id).subscribe(function (video) {
            _this.video = video;
        });
    };
    VideoManagerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-video-manager',
            template: __webpack_require__("../../../../../src/app/components/video-manager/video-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/video-manager/video-manager.component.sass")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], VideoManagerComponent);
    return VideoManagerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/video-manager.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/time-ago.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_repeatWhen__ = __webpack_require__("../../../../rxjs/add/operator/repeatWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_repeatWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_repeatWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeAgoPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StringToDate; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TimeAgoPipe = (function () {
    function TimeAgoPipe(ref) {
        this.isDestroyed = false;
        this.async = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* AsyncPipe */](ref);
    }
    TimeAgoPipe.prototype.transform = function (obj) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (obj == null) {
            return '';
        }
        if (!(obj instanceof Date)) {
            throw new Error('TimeAgoPipe works only with Dates');
        }
        this.value = obj;
        if (!this.timer) {
            this.timer = this.getObservable();
        }
        return this.async.transform(this.timer);
    };
    TimeAgoPipe.prototype.now = function () {
        return new Date();
    };
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        // on next interval, will complete
    };
    TimeAgoPipe.prototype.getObservable = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
            .of(1)
            .repeatWhen(function (notifications) {
            // for each next raised by the source sequence, map it to the result of the returned observable
            return notifications.flatMap(function (x, i) {
                var sleep = i < 60 ? 1000 : 30000;
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(sleep);
            });
        })
            .takeWhile(function (_) { return !_this.isDestroyed; })
            .map(function (x, i) { return _this.elapsed(); });
    };
    ;
    TimeAgoPipe.prototype.elapsed = function () {
        var now = this.now().getTime();
        // time since message was sent in seconds
        var delta = (now - this.value.getTime()) / 1000;
        // format string
        if (delta < 60) {
            return Math.floor(delta) + "s ago";
        }
        else if (delta < 3600) {
            return Math.floor(delta / 60) + "m ago";
        }
        else if (delta < 86400) {
            return Math.floor(delta / 3600) + "h ago";
        }
        else {
            return Math.floor(delta / 86400) + "d ago";
        }
    };
    TimeAgoPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Pipe */])({
            name: 'timeAgo',
            pure: false
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* ChangeDetectorRef */]) === 'function' && _a) || Object])
    ], TimeAgoPipe);
    return TimeAgoPipe;
    var _a;
}());
var StringToDate = (function () {
    function StringToDate() {
    }
    StringToDate.prototype.transform = function (value) {
        if (value) {
            return new Date(value);
        }
    };
    StringToDate = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Pipe */])({ name: 'toDate' }), 
        __metadata('design:paramtypes', [])
    ], StringToDate);
    return StringToDate;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/time-ago.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/truncate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (val, args) {
        if (args === undefined) {
            return val;
        }
        if (val.length > args) {
            return val.substring(0, args) + '...';
        }
        else {
            return val;
        }
    };
    TruncatePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Pipe */])({
            name: 'truncate'
        }), 
        __metadata('design:paramtypes', [])
    ], TruncatePipe);
    return TruncatePipe;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/truncate.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/crew.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrewService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CrewService = (function () {
    function CrewService(af) {
        this.af = af;
    }
    // Classes Methods
    CrewService.prototype.getClasses = function () {
        this.classes = this.af.database.list('/classes');
        return this.classes;
    };
    CrewService.prototype.getClassRequests = function (id) {
        this.classes = this.af.database.list('/classes/' + id + '/requests');
        return this.classes;
    };
    CrewService.prototype.getClassMembers = function (id) {
        this.classes = this.af.database.list('/classes/' + id + '/members');
        return this.classes;
    };
    CrewService.prototype.getClass = function (id) {
        this.classes = this.af.database.list('/classes/', {
            query: {
                orderByChild: 'userin',
                equalTo: id
            }
        });
        return this.classes;
    };
    CrewService.prototype.getClassDetails = function (id) {
        this.class = this.af.database.object('/classes/' + id);
        return this.class;
    };
    CrewService.prototype.getClassDetailsSchedules = function (id) {
        this.class = this.af.database.object('/classes/' + id + '/schedules/');
        return this.class;
    };
    CrewService.prototype.addClass = function (classes) {
        return this.classes.push(classes);
    };
    CrewService.prototype.updateClass = function (id, classes) {
        this.getClasses();
        return this.classes.update(id, classes);
    };
    CrewService.prototype.deleteClass = function (id) {
        return this.classes.remove(id);
    };
    CrewService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], CrewService);
    return CrewService;
    var _a;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/crew.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseService = (function () {
    function FirebaseService(af) {
        this.af = af;
        this.sub = false;
        this.folder = 'image-profile';
        this.vids = 'video-profile';
    }
    // Users Methods
    FirebaseService.prototype.getUsers = function () {
        var _this = this;
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.userName = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
                _this.users = _this.af.database.list('/users/' + _this.userName + '/');
            }
            return _this.users;
        });
        this.users = this.af.database.list('/users/' + this.userName + '/');
        return this.users;
    };
    FirebaseService.prototype.addUser = function (user) {
        return this.users.push(user);
    };
    // Profiles Methods
    FirebaseService.prototype.getProfiles = function () {
        this.profiles = this.af.database.list('/profiles');
        return this.profiles;
    };
    FirebaseService.prototype.getProfilePromo = function (promo) {
        this.profiles = this.af.database.list('/profiles', {
            query: {
                orderByChild: 'promo',
                equalTo: promo
            }
        });
        return this.profiles;
    };
    FirebaseService.prototype.getProfileDetails = function (id) {
        this.profile = this.af.database.object('/profiles/' + id);
        return this.profile;
    };
    FirebaseService.prototype.addProfile = function (user, profile) {
        var _this = this;
        this.userName = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
        // Create root ref
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var _loop_1 = function(selectedFile) {
            var path = "/" + this_1.folder + "/" + this_1.userName;
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                profile.image = selectedFile.name;
                profile.path = path;
                storageRef.child(path).getDownloadURL().then(function (url) {
                    // Set image url
                    profile.url = url;
                    return _this.profiles.update(user, profile);
                });
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = [document.getElementById('image').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            _loop_1(selectedFile);
        }
    };
    // Videos Methods
    FirebaseService.prototype.getVideos = function () {
        this.videos = this.af.database.list('/videos/', {
            query: {
                orderByChild: 'date',
            }
        });
        return this.videos;
    };
    FirebaseService.prototype.getProfileVideos = function (id) {
        this.videos = this.af.database.list('/videos/' + id);
        return this.videos;
    };
    FirebaseService.prototype.getDurationVideo = function (id) {
        this.videos = this.af.database.list('/videos/', {
            query: {
                orderByChild: 'userUid',
                equalTo: id
            }
        });
        return this.videos;
    };
    FirebaseService.prototype.getVideoDetails = function (id) {
        this.video = this.af.database.object('/videos/' + id).take(1);
        return this.video;
    };
    FirebaseService.prototype.addVideo = function (video) {
        var _this = this;
        var newPostKey = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref().child('videos').push().key;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var _loop_2 = function(selectedFile) {
            var path = "/" + this_2.vids + "/" + newPostKey;
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                video.image = newPostKey;
                video.path = path;
                storageRef.child(path).getDownloadURL().then(function (url) {
                    // Set image url
                    video.url = url;
                    return _this.videos.push(video);
                });
            });
        };
        var this_2 = this;
        for (var _i = 0, _a = [document.getElementById('video').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            _loop_2(selectedFile);
        }
    };
    // Zeals Methods
    FirebaseService.prototype.getZeals = function () {
        this.zeals = this.af.database.list('/zeals/');
        return this.zeals;
    };
    FirebaseService.prototype.getZealDetails = function (id) {
        this.zeal = this.af.database.object('/zeals/' + id);
        return this.zeal;
    };
    // Comment Methods
    FirebaseService.prototype.getComments = function () {
        this.comments = this.af.database.list('/comments/');
        return this.comments;
    };
    FirebaseService.prototype.addComment = function (change) {
        return this.comments.push(change);
    };
    // Support Methods
    FirebaseService.prototype.getSupporters = function () {
        this.supports = this.af.database.list('/supports/');
        return this.supports;
    };
    FirebaseService.prototype.addSupport = function (support) {
        return this.supports.push(support);
    };
    // Update Methods
    FirebaseService.prototype.updateZeal = function (id, change) {
        this.getZeals();
        return this.zeals.update(id, change);
    };
    FirebaseService.prototype.updateSupport = function (id, change) {
        this.getSupporters();
        return this.supports.update(id, change);
    };
    FirebaseService.prototype.updateProfile = function (id, change) {
        this.getProfiles();
        return this.profiles.update(id, change);
    };
    FirebaseService.prototype.updateStyles = function (id, state) {
        this.getProfiles();
        return this.profiles.update(id, state);
    };
    FirebaseService.prototype.updateProfileImage = function (id, change) {
        var _this = this;
        this.userName = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var _loop_3 = function(selectedFile) {
            var path = "/" + this_3.folder + "/" + this_3.userName;
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                change.image = selectedFile.name;
                change.path = path;
                storageRef.child(path).getDownloadURL().then(function (url) {
                    // Set image url
                    change.url = url;
                    return _this.profiles.update(id, change);
                });
            });
        };
        var this_3 = this;
        for (var _i = 0, _a = [document.getElementById('image').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            _loop_3(selectedFile);
        }
    };
    FirebaseService.prototype.updateSupportImage = function (id, change) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var _loop_4 = function(selectedFile) {
            var path = "/" + this_4.folder + "/" + this_4.userName;
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                storageRef.child(path).getDownloadURL().then(function (url) {
                    // Set image url
                    change.url = url;
                    return _this.supports.update(id, change);
                });
            });
        };
        var this_4 = this;
        for (var _i = 0, _a = [document.getElementById('image').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            _loop_4(selectedFile);
        }
    };
    FirebaseService.prototype.updateVideo = function (id, change) {
        return this.videos.update(id, change);
    };
    FirebaseService.prototype.updateUser = function (id, change) {
        return this.users.update(id, change);
    };
    // Delete Methods
    FirebaseService.prototype.deleteZeal = function (id) {
        this.getZeals();
        return this.zeals.remove(id);
    };
    FirebaseService.prototype.deleteUser = function (id) {
        this.getUsers();
        return this.users.remove(id);
    };
    FirebaseService.prototype.deleteComment = function (id) {
        this.getComments();
        return this.comments.remove(id);
    };
    FirebaseService.prototype.deleteProfile = function (id) {
        this.getProfiles();
        return this.profiles.remove(id);
    };
    FirebaseService.prototype.deleteSupport = function (id) {
        this.getSupporters();
        return this.supports.remove(id);
    };
    FirebaseService.prototype.deleteVideo = function (id) {
        this.getVideos();
        return this.videos.remove(id);
    };
    FirebaseService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], FirebaseService);
    return FirebaseService;
    var _a;
}());
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/firebase.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/Tradeshift/Desktop/ztmvp/src/polyfills.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map