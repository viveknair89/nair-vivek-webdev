webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























// import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_24__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/**
* Created by sesha on 7/26/17.
*/


















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_17__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:userId/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:userId/website/:webid', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:userId/website/:webid/page', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:userId/website/:webid/page/new', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:userId/website/:webid/page/:pageid', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:userId/website/:webid/page/:pageid/widget', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:userId/website/:webid/page/:pageid/widget/new', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:userId/website/:webid/page/:pageid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'widget-header', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
    { path: 'widget-image', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'widget-youtube', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>\r\n    Angular 4 MEAN stack app\r\n  </h1>\r\n\r\n\r\n  <h3>\r\n    App works\r\n  </h3>\r\n\r\n\r\n  <h4>\r\n    <a href=\"test\">Test MongoDB</a>\r\n  </h4>\r\n  <div class=\"container-fluid\">\r\n    <ul>\r\n      <li><a href=\"../assets/index.html\"><b>Assignment Home Page</b></a></li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"update()\" #f=\"ngForm\">\n<nav class=\"bg-primary navbar navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--<div class=\"row\">-->\n    <div class=\"col-sm-3 col-xs-1\">\n      <!--heading on the nav bar-->\n      <p class=\"navbar-text pull-left\">\n        <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website', webid, 'page']\">\n          <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n        </a>\n      </p>\n      <!--<div class=\"col-xs-3 hidden-xs col-sm-3 col-md-3\">-->\n      <p class=\"navbar-text viv-white-text caption col-sm-3 hidden-xs hidden-sm\">\n        <b>Pages</b>\n      </p>\n      <!--plus mark-->\n      <p class=\"col-sm-1 hidden-xs hidden-sm navbar-text pull-right\">\n        <a [routerLink]=\"['/user', userId, 'website', webid, 'page', 'new']\" class=\"navbar-link\">\n          <span class=\"viv-white-text glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n      <!--</div>-->\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"navbar-text pull-left\">\n        <a class=\"navbar-band viv-white-text thick\">\n          <b>Edit Page</b>\n        </a>\n      </p>\n      <!--tick mark-->\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user', userId, 'website', webid, 'page']\" class=\"navbar-link\">\n          <span class=\"viv-white-text glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n    </div>\n    <!--</div>-->\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 hidden-xs hidden-sm\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let page of pages\">\n          <a [routerLink]=\"['/user', userId, 'website', webid, 'page', page['_id'], 'widget']\">{{page['name']}}</a>\n          <a [routerLink]=\"['/user', userId, 'website', webid, 'page', page['_id']]\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-9\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\">Page Name</label>\n          <input type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\">\n        </div>\n      </form>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"description\">Page Description</label>\n          <textarea class=\"form-control\" id=\"description\" [(ngModel)]=\"description\" name=\"description\"></textarea>\n        </div>\n      </form>\n      <a class=\"btn btn-danger btn-block\"\n         (click)=\"delete()\">Delete</a>\n    </div>\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"viv-white-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageEditComponent = (function () {
    function PageEditComponent(userService, activatedRoute, pageService, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.router = router;
        this.pages = [{}];
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.webid = params['webid'];
            _this.pageid = params['pageid'];
            _this.userId = params['userId'];
        });
        this.pages = this.pageService.findPageByWebsiteId(this.webid);
        this.page = this.pageService.findPageById(this.pageid);
        this.name = this.page.name;
        this.description = this.page.description;
    };
    PageEditComponent.prototype.update = function () {
        this.user = this.userService.findUserById(this.userId);
        if (this.pageEditForm.value.name.length > 0) {
            this.page['name'] = this.pageEditForm.value.name;
        }
        if (this.pageEditForm.value.description.length > 0) {
            this.user['description'] = this.pageEditForm.value.description;
        }
        this.pageService.updatePage(this.pageid, this.page);
        this.router.navigate(['user/' + this.userId, 'website', this.webid, 'page']);
    };
    PageEditComponent.prototype.delete = function () {
        this.pageService.deletePage(this.pageid);
        this.router.navigate(['user/' + this.userId, 'website', this.webid, 'page']);
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "pageEditForm", void 0);
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], PageEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--heading on the nav bar-->\n    <p class=\"navbar-text pull-left\">\n      <a class=\"navbar-link viv-white-text\" [routerLink]=\"['/user', userId, 'website']\">\n        <span class=\"glyphicon glyphicon-menu-left\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-left\">\n      <a class=\"navbar-band viv-white-text thick\">\n        <b>Pages</b>\n      </a>\n    </p>\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId, 'website', webId, 'page', 'new']\" class=\"navbar-link viv-white-text\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n<div class = \"container-fluid viv-top-buffer\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let page of pages\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/user', userId, 'website', webId, 'page', page['_id'], 'widget']\">{{page['name']}} </a>\n        </div>\n        <div class=\"col-xs-3 hidden-xs hidden-sm col-md-3\">\n          {{page['description']}}\n        </div>\n        <div class=\"col-xs-3 hidden-xs col-sm-3 col-md-3\">\n          {{user.username}}\n        </div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/user', userId, 'website', webId, 'page', page['_id']]\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a class=\"viv-white-text\" [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageListComponent = (function () {
    function PageListComponent(pageService, userService, activatedRoute) {
        this.pageService = pageService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.pages = [{}];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.webId = params['webid'];
        });
        this.pages = this.pageService.findPageByWebsiteId(this.webId);
        this.user = this.userService.findUserById(this.userId);
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], PageListComponent);

var _a, _b, _c;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"create()\" #f=\"ngForm\">\n<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website', webId, 'page']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n        <!--<div class=\"col-xs-3 hidden-xs col-sm-3 col-md-3\">-->\n        <p class=\"navbar-text viv-white-text caption col-sm-3 hidden-xs hidden-sm\">\n          <b>Pages</b>\n        </p>\n        <!--plus mark-->\n        <p class=\"col-sm-1 hidden-xs hidden-sm navbar-text pull-right\">\n          <a [routerLink]=\"['/user', userId, 'website', webId, 'page', 'new']\" class=\"navbar-link\">\n            <span class=\"viv-white-text glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n        <!--</div>-->\n      </div>\n      <div class=\"col-sm-9\">\n        <div>\n          <p class=\"navbar-text pull-left\">\n            <a class=\"navbar-band viv-white-text thick\">\n              <b>New Page</b>\n            </a>\n          </p>\n          <!--tick mark-->\n          <p class=\"navbar-text pull-right\">\n            <a type=\"submit\" [routerLink]=\"['/user', userId, 'website', webId, 'page']\" class=\"navbar-link\">\n              <span class=\"viv-white-text glyphicon glyphicon-ok\"></span>\n            </a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 hidden-xs hidden-sm\">\n      <ul class=\"list-group\" *ngFor=\"let page of pages\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['/user', userId, 'website', webId, 'page', page['_id'], 'widget']\">{{page['name']}}</a>\n          <a [routerLink]=\"['/user', userId, 'website', webId, 'page', page['_id']]\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-9\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\">Page Name</label>\n          <input type=\"text\" id=\"name\" name=\"name\" ngModel required #name=\"ngModel\" class=\"form-control\">\n          <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n            Please enter the Page Name!\n          </span>\n        </div>\n      </form>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"description\">Page Description</label>\n          <textarea class=\"form-control\" id=\"description\" name=\"description\" ngModel required #description=\"ngModel\" >\n          </textarea>\n          <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n            Please enter the page description!\n          </span>\n        </div>\n      </form>\n      <a class=\"btn btn-success btn-block\"\n         [routerLink]=\"['/user', userId, 'website', webId, 'page']\">Cancel</a>\n    </div>\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light navbar-fixed-bottom\">\n  <div class=\"container-fluid bg-primary\">\n    <p class=\"navbar-text pull-right\">\n      <a class=\"viv-white-text\" [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageNewComponent = (function () {
    function PageNewComponent(userService, activatedRoute, pageService, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.router = router;
        this.pages = [{}];
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.webId = params['webid'];
            _this.userId = params['userId'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.pages = this.pageService.findPageByWebsiteId(this.webId);
    };
    PageNewComponent.prototype.create = function () {
        this.user = this.userService.findUserById(this.userId);
        this.name = this.pageNewForm.value.name;
        this.description = this.pageNewForm.value.description;
        var temp = { name: this.name, description: this.description };
        this.page = this.pageService.createPage(this.webId, temp);
        // this.router.navigate(['user/' + this.userId, 'website', this.webId, 'page']);
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "pageNewForm", void 0);
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], PageNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>Test</h1>\r\n\r\n  <div *ngIf=\"alertMessage\"\r\n       class=\"alert alert-danger\">\r\n    \"Failed to create\"\r\n  </div>\r\n\r\n  <div *ngIf=\"successMessage\"\r\n       class=\"alert alert-success\">\r\n    \"Succesfully created/deleted\"\r\n  </div>\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n      <th>Test Message</th>\r\n      <th>&nbsp;</th>\r\n    </tr>\r\n\r\n\r\n    <tr>\r\n      <td>\r\n        <input [(ngModel)]=\"message\"\r\n               placeholder=\"message\"\r\n               class=\"form-control\"/>\r\n      </td>\r\n\r\n\r\n      <td>\r\n        <button (click)=\"createMessage()\"\r\n                class=\"btn btn-primary pull-right\">\r\n          <span class=\"glyphicon glyphicon-plus\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </thead>\r\n\r\n\r\n    <tbody>\r\n    <tr *ngFor=\"let message of messages\">\r\n      <td>\r\n        {{message.message}}\r\n      </td>\r\n      <td>\r\n        <button (click)=\"deleteMessage(message._id)\"\r\n                class=\"btn btn-danger pull-right\">\r\n          <span class=\"glyphicon glyphicon-remove\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\"/>\n      <span class =\"help-block\" *ngIf=\"!password.valid && password.touched\">\n        Please enter password\n      </span>\n    </div>\n  <button (click)=\"login(username, password)\" class=\"btn btn-primary btn-block\"\n          type=submit [disabled]=\"!f.valid\">Login</button>\n\n  <button (click)=\"register()\" class=\"btn btn-success btn-block\"\n          type=submit>Register</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
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
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password!';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (username, password) {
        // fetching data from loginform
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.errorFlag = this.loginForm.value.errorFlag;
        var user = this.userService.findUserByCredentials(this.username, this.password);
        if (user) {
            this.router.navigate(['/user/' + user._id]);
        }
        else {
            this.errorFlag = true;
        }
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"update()\" #f=\"ngForm\">\r\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--heading on the nav bar-->\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"viv-white-text navbar-brand thick\">\r\n        <b>Profile</b>\r\n      </a>\r\n    </p>\r\n\r\n        <!--tick mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a (click)=\"update()\" [routerLink] = \"['/user', userId]\" class=\"viv-white-text navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n\r\n  <div class=\"viv-top-buffer\"></div>\r\n<div class=\"container-fluid\">\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"username\"\r\n             name=\"username\"\r\n             [(ngModel)]=\"userName\" />\r\n    </div>\r\n\r\n  <div class=\"form-group\">\r\n      <label for=\"email\">Email address</label>\r\n      <input type=\"email\"\r\n             class=\"form-control\"\r\n             id=\"email\"\r\n             value={{email}}\r\n             name=\"email\"\r\n             [(ngModel)]=\"email\" />\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label for=\"firstName\">First Name</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"firstName\"\r\n             name=\"firstName\"\r\n             [(ngModel)]= \"firstName\" />\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label for=\"lastName\">Last Name</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"lastName\"\r\n             id=\"lastName\"\r\n             [(ngModel)] = \"lastName\" />\r\n  </div>\r\n</div>\r\n  <div>\r\n  <a class=\"btn btn-primary btn-block\"\r\n     [routerLink]=\"['/user/',userId,'website']\">Websites</a>\r\n  <a class=\"btn btn-danger btn-block \"\r\n     [routerLink] = \"['/login']\">Logout</a>\r\n\r\n  </div>\r\n</form>\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink] = \"['/user', userId]\">\r\n        <span class=\"viv-white-text glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
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
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.userName = this.user['username'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        this.email = this.user['email'];
    };
    ProfileComponent.prototype.update = function () {
        if (this.profileForm.value.username.length > 0) {
            this.user['username'] = this.profileForm.value.username;
        }
        if (this.profileForm.value.email.length > 0) {
            this.user['email'] = this.profileForm.value.email;
        }
        if (this.profileForm.value.firstName.length > 0) {
            this.user['firstName'] = this.profileForm.value.firstName;
        }
        if (this.profileForm.value.lastName.length > 0) {
            this.user['lastName'] = this.profileForm.value.lastName;
        }
        if (this.profileForm.value.email.length > 0) {
            this.user['email'] = this.profileForm.value.email;
        }
        this.userService.updateUser(this.user['userId'], this.user);
        this.router.navigate(['user/' + this.userId]);
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\"/>\n      <span class =\"help-block\" *ngIf=\"!password.valid && password.touched\">\n        Please enter password\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <input placeholder=\"verify password\"\n             name=\"verify_password\"\n             id=\"verify_password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #verify_password=\"ngModel\"/>\n      <span class =\"help-block\" *ngIf=\"!verify_password.valid && password.touched\">\n        Please verify the password\n      </span>\n    </div>\n    <button (click)=\"register(username, password, verify_password)\" class=\"btn btn-primary btn-block\"\n            type=submit [disabled]=\"!f.valid\">Register</button>\n\n    <button (click)=\"cancel()\" class=\"btn btn-danger btn-block\"\n            type=submit>Cancel</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (username, password, verify_password) {
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verify_password = this.registerForm.value.verify_password;
        this.errorFlag = this.registerForm.value.errorFlag;
        if (this.password === this.verify_password) {
            var user = this.userService.findUserByUsername(this.username);
            if (user) {
                this.errorFlag = true;
            }
            var newuser = this.userService.createUser(this);
            if (newuser) {
                this.router.navigate(['/user/' + user._id]);
            }
            else {
                this.errorFlag = true;
                this.errorMsg = 'Cannot register User';
            }
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Passwords Do Not Match';
        }
    };
    RegisterComponent.prototype.cancel = function () {
        this.router.navigate(['/login']);
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"update()\" #f =\"ngForm\">\n<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n        <!--<div class=\"col-xs-3 hidden-xs col-sm-3 col-md-3\">-->\n        <p class=\"navbar-text viv-white-text caption col-sm-3 hidden-xs hidden-sm\">\n          <b>Websites</b>\n        </p>\n        <!--plus mark-->\n        <p class=\"col-sm-1 hidden-xs hidden-sm navbar-text pull-right\">\n          <a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"navbar-link\">\n            <span class=\"viv-white-text glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n        <!--</div>-->\n      </div>\n      <div class=\"col-sm-9\">\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-band viv-white-text thick\">\n            <b>Edit Website</b>\n          </a>\n        </p>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"update()\" [routerLink] = \"['/user', userId, 'website']\" class=\"navbar-link\">\n            <span class=\"viv-white-text glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 hidden-xs hidden-sm\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let website of websites\">\n          <a [routerLink]=\"['/user', userId, 'website', website['_id'], 'page']\">{{website['name']}}</a>\n          <a [routerLink]=\"['/user', userId, 'website', website['_id']]\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-9\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\">Website Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)] =\"name\" value=\"name\">\n        </div>\n      </form>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"description\">Website Description</label>\n          <textarea class=\"form-control\" name=\"description\" id=\"description\"\n                    [(ngModel)] =\"description\" placeholder=\"description\"></textarea>\n        </div>\n      </form>\n      <a class=\"btn btn-danger btn-block\"\n         (click)= \"delete()\"> Delete </a>\n    </div>\n  </div>\n</div>\n</form>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"viv-white-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(userService, activatedRoute, websiteService, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.websiteService = websiteService;
        this.router = router;
        this.websites = [{}];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.webid = params['webid'];
            _this.userId = params['userId'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
        this.website = this.websiteService.findWebsiteById(this.webid);
        this.name = this.website.name;
        this.description = this.website.description;
    };
    WebsiteEditComponent.prototype.update = function () {
        this.user = this.userService.findUserById(this.userId);
        if (this.websiteEditForm.value.name.length > 0) {
            this.user['name'] = this.websiteEditForm.value.name;
        }
        if (this.websiteEditForm.value.description.length > 0) {
            this.user['description'] = this.websiteEditForm.value.description;
        }
        this.websiteService.updateWebsite(this.webid, this.website);
        this.router.navigate(['user/' + this.userId, 'website']);
    };
    WebsiteEditComponent.prototype.delete = function () {
        this.websiteService.deleteWebsite(this.webid);
        this.router.navigate(['user/' + this.userId, 'website']);
    };
    return WebsiteEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "websiteEditForm", void 0);
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--heading on the nav bar-->\n    <p class=\"navbar-text pull-left\">\n      <a class=\"navbar-link viv-white-text\" [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-menu-left\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-left\">\n      <a class=\"navbar-band viv-white-text thick\">\n        <b>Websites</b>\n      </a>\n    </p>\n    <!--plus-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId, 'website', 'new' ]\" class=\"navbar-link viv-white-text\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class = \"container-fluid viv-top-buffer\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let website of websites\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/user', userId, 'website', website['_id'] , 'page']\">\n            {{website['_id']}}</a>\n        </div>\n        <div class=\"col-xs-3 hidden-xs hidden-sm col-md-3\">\n        {{website['description']}}\n        </div>\n        <div class=\"col-xs-3 hidden-xs col-sm-3 col-md-3\">\n          {{user.username}}\n        </div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/user', userId, 'website', website['_id']]\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a class=\"viv-white-text\" [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteListComponent = (function () {
    function WebsiteListComponent(_websiteService, userService, activatedRoute) {
        this._websiteService = _websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.websites = [{}];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.websites = this._websiteService.findWebsitesByUser(this.userId);
        this.user = this.userService.findUserById(this.userId);
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WebsiteListComponent);

var _a, _b, _c;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"create()\" #f=\"ngForm\">\n<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n        <!--<div class=\"col-xs-3 hidden-xs col-sm-3 col-md-3\">-->\n        <p class=\"navbar-text viv-white-text caption col-sm-3 hidden-xs hidden-sm\">\n          <b>Websites</b>\n        </p>\n        <!--plus mark-->\n        <p class=\"col-sm-1 hidden-xs hidden-sm navbar-text pull-right\">\n          <a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"navbar-link\">\n            <span class=\"viv-white-text glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n        <!--</div>-->\n      </div>\n      <div class=\"col-sm-9\">\n        <div>\n          <p class=\"navbar-text pull-left\">\n            <a class=\"navbar-band viv-white-text thick\">\n              <b>New Website</b>\n            </a>\n          </p>\n          <!--tick mark-->\n          <p class=\"navbar-text pull-right\">\n            <a type=\"submit\" [routerLink]=\"['/user', userId, 'website']\" class=\"navbar-link\">\n              <span class=\"viv-white-text glyphicon glyphicon-ok\"></span>\n            </a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 hidden-xs hidden-sm\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor = \"let website of websites\">\n          <a [routerLink]=\"['/user', userId, 'website', website['_id'], 'page']\">{{website['name']}}</a>\n          <a [routerLink]=\"['/user', userId, 'website', website['_id']]\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-9\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\">Website Name</label>\n          <input type=\"text\" id=\"name\" name=\"name\" ngModel required #name=\"ngModel\" class=\"form-control\">\n          <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n            Please enter the Name of the Website!\n          </span>\n        </div>\n      </form>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"description\">Website Description</label>\n          <textarea class=\"form-control\" id=\"description\" name=\"description\" ngModel required #description=\"ngModel\"\n          placeholder=\"description\"></textarea>\n          <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n            Please enter the Website description!\n          </span>\n        </div>\n      </form>\n      <a class=\"btn btn-success btn-block\"\n         [routerLink]=\"['/user', userId, 'website']\">Cancel</a>\n    </div>\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light navbar-fixed-bottom\">\n  <div class=\"container-fluid bg-primary\">\n    <p class=\"navbar-text pull-right\">\n      <a class=\"viv-white-text\" [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(userService, activatedRoute, websiteService, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.websiteService = websiteService;
        this.router = router;
        this.websites = [{}];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
    };
    WebsiteNewComponent.prototype.create = function () {
        this.user = this.userService.findUserById(this.userId);
        this.user['name'] = this.websiteNewForm.value.name;
        this.user['description'] = this.websiteNewForm.value.description;
        var temp = { name: this.name, description: this.description };
        this.website = this.websiteService.createWebsite(this.userId, temp);
        this.router.navigate(['user/' + this.userId, 'website']);
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "websiteNewForm", void 0);
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website', webId, 'page']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n          <a class=\"navbar-band viv-white-text thick\">\n            <b>Choose Widget</b>\n          </a>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              <a (click)=\"create('HEADING')\">Header</a>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              <a (click)=\"create('IMAGE')\">Image</a>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              <a (click)=\"create('YOUTUBE')\">Youtube</a>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              Label\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              HTML\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              Text Input\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              Link\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              Button\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              Data Table\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              Repeater\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navba r-text pull-right\">\n      <a class=\"viv-white-text\" [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(activatedRoutes, userService, widgetService, router) {
        this.activatedRoutes = activatedRoutes;
        this.userService = userService;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.webId = params['webid'];
            _this.pageId = params['pageid'];
            _this.userId = params['userId'];
        });
    };
    WidgetChooserComponent.prototype.create = function (type) {
        var tempwidget = { widgetType: type };
        this.widget = this.widgetService.createWidget(this.pageId, tempwidget);
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetChooserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"this.widget.widgetType\">\n\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.webId = params['webid'];
            _this.pageId = params['pageid'];
            _this.widgetId = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetEditComponent);

var _a, _b;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n        <!--</div>-->\n      </div>\n      <div class=\"col-sm-9\">\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-band viv-white-text thick\">\n            <b>Widget Edit</b>\n          </a>\n        </p>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"update()\" [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget']\"\n             class=\"navbar-link\">\n            <span class=\"viv-white-text glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"txt\">\n        Text\n      </label>\n      <input type=\"text\" class=\"form-control\" name=\"txt\" id=\"txt\" required [(ngModel)]=\"txt\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"size\">\n        Size\n      </label>\n      <input type=\"number\" class=\"form-control\" name=\"size\" id=\"size\" required [(ngModel)]=\"size\">\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"delete()\" class=\"btn btn-danger btn-block\"\n         [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget']\">\n        Delete</a>\n    </div>\n  </form>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"viv-white-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.webid = params['webid'];
            _this.pageid = params['pageid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
            _this.txt = _this.widget['text'];
            _this.size = _this.widget['size'];
        });
    };
    WidgetHeaderComponent.prototype.update = function () {
        this.widget['widgetType'] = 'HEADING';
        this.widget['text'] = this.txt;
        this.widget['size'] = this.size;
        this.widgetService.updateWidget(this.wgid, this.widget);
    };
    WidgetHeaderComponent.prototype.delete = function () {
        this.widgetService.deleteWidget(this.wgid);
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetHeaderComponent);

var _a, _b;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n\n      </div>\n      <div class=\"col-sm-9\">\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-band viv-white-text thick\">\n            <b>Widget Edit</b>\n          </a>\n        </p>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"update()\" [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget']\"\n             class=\"navbar-link\">\n            <span class=\"viv-white-text glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"url\">\n        URL\n      </label>\n      <input type=\"url\" class=\"form-control\" name=\"url\" id=\"url\" required [(ngModel)]=\"url\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"width\">\n        Width\n      </label>\n      <input type=\"text\" class=\"form-control\" name=\"width\" id=\"width\" required [(ngModel)]=\"width\"\n             placeholder=\"100%\">\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"delete()\" class=\"btn btn-danger btn-block\"\n         [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget']\">\n        Delete</a>\n    </div>\n  </form>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"viv-white-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.webid = params['webid'];
            _this.pageid = params['pageid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
            _this.width = _this.widget['width'];
            _this.url = _this.widget['url'];
        });
    };
    WidgetImageComponent.prototype.update = function () {
        this.widget['widgetType'] = 'IMAGE';
        this.widget['url'] = this.url;
        this.widget['width'] = this.width;
        this.widgetService.updateWidget(this.wgid, this.widget);
    };
    WidgetImageComponent.prototype.delete = function () {
        this.widgetService.deleteWidget(this.wgid);
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetImageComponent);

var _a, _b;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n\n      </div>\n      <div class=\"col-sm-9\">\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-band viv-white-text thick\">\n            <b>Widget Edit</b>\n          </a>\n        </p>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"update()\" [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget']\"\n             class=\"navbar-link\">\n            <span class=\"viv-white-text glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"url\">\n        URL\n      </label>\n      <input type=\"url\" class=\"form-control\" name=\"url\" id=\"url\" required [(ngModel)]=\"url\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"width\">\n        Width\n      </label>\n      <input type=\"text\" class=\"form-control\" name=\"width\" id=\"width\" required [(ngModel)]=\"width\"\n             placeholder=\"100%\">\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"delete()\" class=\"btn btn-danger btn-block\"\n         [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget']\">\n        Delete</a>\n    </div>\n  </form>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"viv-white-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.webid = params['webid'];
            _this.pageid = params['pageid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
            _this.url = _this.widget['url'];
            _this.width = _this.widget['width'];
        });
    };
    WidgetYoutubeComponent.prototype.update = function () {
        this.widget['widgetType'] = 'YOUTUBE';
        this.widget['url'] = this.url;
        this.widget['width'] = this.width;
        this.widgetService.updateWidget(this.wgid, this.widget);
    };
    WidgetYoutubeComponent.prototype.delete = function () {
        this.widgetService.deleteWidget(this.wgid);
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetYoutubeComponent);

var _a, _b;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--heading on the nav bar-->\n    <p class=\"navbar-text pull-left\">\n      <a class=\"navbar-link viv-white-text\" [routerLink]=\"['/user', userId, 'website', webid, 'page']\">\n        <span class=\"glyphicon glyphicon-menu-left\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-left\">\n      <a class=\"navbar-band viv-white-text thick\">\n        <b>Widgets</b>\n      </a>\n    </p>\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget', 'new']\" class=\"navbar-link viv-white-text\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <div class=\"viv-widget\" *ngFor=\"let widget of widgets\">\n    <div [ngSwitch]=\"widget.widgetType\">\n\n      <div *ngSwitchCase=\"'HEADING'\">\n        <div class=\"viv-toolbar\">\n          <a [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget', widget._id]\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </div>\n        <h1>{{widget.text}}</h1>\n      </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\" class=\"viv-widget\">\n    <div class=\"viv-toolbar\">\n      <a [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget', widget._id]\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <img class=\"viv-content\" src={{widget.url}}/>\n  </div>\n\n  <div class=\"viv-widget viv-footer-buffer\" *ngSwitchCase=\"'YOUTUBE'\">\n    <div class=\"viv-toolbar\">\n      <a [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget', widget._id]\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <iframe class=\"viv-content\" width=\"560\" height=\"315\"\n            [style.width]=\"widget.width\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(widget.url)\"\n            frameborder=\"0\" allowfullscreen></iframe>\n  </div>\n</div>\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a class=\"viv-white-text\" [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetListComponent = (function () {
    function WidgetListComponent(activatedRoute, userService, widgetService, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.widgetService = widgetService;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.webid = params['webid'];
            _this.userId = params['userId'];
            _this.pageid = params['pageid'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.widgets = this.widgetService.findWidgetsByPageId(this.pageid);
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var PageService = (function () {
    function PageService() {
        this.pages = [
            { '_id': '321', 'name': 'Post 1', 'websiteId': '890', 'description': 'Lorem' },
            { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
        ];
        this.api = {
            'createPage': this.createPage,
            'findPageByWebsiteId': this.findPageByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page._id = Math.random() * 10000;
        page.websiteId = websiteId;
        this.pages.push(page);
        return page;
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var resultset = [];
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                // let ws: any;
                // ws = this.pages[x];
                resultset.push(this.pages[x]);
            }
        }
        return resultset;
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return this.pages[x];
            }
        }
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x] = page;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages.splice(x, 1);
            }
        }
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PageService);

//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var UserService = (function () {
    function UserService() {
        this.users = [
            { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder',
                email: 'alice@wonderland.com' },
            { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley',
                email: 'bob@marley.com' },
            { _id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia',
                email: 'charly@garcia.com' },
            { _id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi',
                email: 'jannunzi@annunzi.com' }
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
            'findUserByCredentials': this.findUserByCredentials
        };
    }
    UserService.prototype.createUser = function (user) {
        user._id = Math.random() * 10000;
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username && this.users[x].password === password) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users[x] = user;
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users.splice(x, 1);
            }
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var WebsiteService = (function () {
    function WebsiteService() {
        this.websites = [
            { _id: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },
            { _id: '234', name: 'Tweeter', developerId: '456', description: 'Lorem' },
            { _id: '456', name: 'Gizmodo', developerId: '456', description: 'Lorem' },
            { _id: '890', name: 'Go', developerId: '123', description: 'Lorem' },
            { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },
            { _id: '678', name: 'Checkers', developerId: '123', description: 'Lorem' },
            { _id: '789', name: 'Chess', developerId: '234', description: 'Lorem' }
        ];
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website._id = Math.random() * 10000;
        website.developerId = userId;
        this.websites.push(website);
        return website;
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var resultset = [];
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                resultset.push(this.websites[x]);
            }
        }
        return resultset;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                return this.websites[x];
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites[x] = website;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites.splice(x, 1);
            }
        }
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsiteService);

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var WidgetService = (function () {
    function WidgetService() {
        this.widgets = [
            { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO' },
            { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
                'url': 'http://lorempixel.com/400/200/' },
            { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' },
            { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
                'url': 'https://www.youtube.com/embed/vbOO9Wq6rCA' },
            { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' }
        ];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = Math.random() * 10000;
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        // const resultset= [{}];
        var resultset = [];
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                resultset.push(this.widgets[x]);
            }
        }
        return resultset;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets[x] = widget;
            }
        }
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets.splice(x, 1);
            }
        }
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WidgetService);

//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map