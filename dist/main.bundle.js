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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
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
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_25__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_26__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_27__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_28__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_9__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_31__services_shared_service_client__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_32__services_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_34__services_flickr_service_client__["a" /* FlickrService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/**
* Created by sesha on 7/26/17.
*/






















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_17__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:userId', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:userId/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:userId/website/:webid', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:userId/website/:webid/page', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_list_page_list_component__["a" /* PageListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:userId/website/:webid/page/new', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__["a" /* PageNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:userId/website/:webid/page/:pageid', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:userId/website/:webid/page/:pageid/widget', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:userId/website/:webid/page/:pageid/widget/new', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:userId/website/:webid/page/:pageid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'widget-header', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'widget-image', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'widget-youtube', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'widget-text', component: __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'widget-html', component: __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:userId/website/:webid/page/:pageid/widget/:wgid/flickr', component: __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] }
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

module.exports = "<form (ngSubmit) = \"update()\" #f=\"ngForm\">\n<nav class=\"bg-primary navbar navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--<div class=\"row\">-->\n    <div class=\"col-sm-3 col-xs-1\">\n      <!--heading on the nav bar-->\n      <p class=\"navbar-text pull-left\">\n        <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website', webid, 'page']\">\n          <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n        </a>\n      </p>\n      <!--<div class=\"col-xs-3 hidden-xs col-sm-3 col-md-3\">-->\n      <p class=\"navbar-text viv-white-text caption col-sm-3 hidden-xs hidden-sm\">\n        <b>Pages</b>\n      </p>\n      <!--plus mark-->\n      <p class=\"col-sm-1 hidden-xs hidden-sm navbar-text pull-right\">\n        <a [routerLink]=\"['/user', userId, 'website', webid, 'page', 'new']\" class=\"navbar-link\">\n          <span class=\"viv-white-text glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n      <!--</div>-->\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"navbar-text pull-left\">\n        <a class=\"navbar-band viv-white-text thick\">\n          <b>Edit Page</b>\n        </a>\n      </p>\n      <!--tick mark-->\n      <p class=\"navbar-text pull-right\">\n        <a type=\"submit\" (click)=\"update()\" [routerLink]=\"['/user', userId, 'website', webid, 'page']\" class=\"navbar-link\">\n          <span class=\"viv-white-text glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n    </div>\n    <!--</div>-->\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 hidden-xs hidden-sm\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let page of pages\">\n          <a [routerLink]=\"['/user', userId, 'website', webid, 'page', page['_id'], 'widget']\">{{page['name']}}</a>\n          <a [routerLink]=\"['/user', userId, 'website', webid, 'page', page['_id']]\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-9\">\n        <div class=\"form-group\">\n          <label for=\"name\">Page Name</label>\n          <input type=\"text\" id=\"name\" value=\"{{name}}\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"description\">Page Description</label>\n          <textarea class=\"form-control\" id=\"description\" [(ngModel)]=\"description\" name=\"description\"></textarea>\n        </div>\n      <a class=\"btn btn-danger btn-block\"\n         (click)=\"delete()\">Delete</a>\n    </div>\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"viv-white-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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




var PageEditComponent = (function () {
    function PageEditComponent(activatedRoute, pageService, router) {
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
        this.pageService.findPageById(this.pageid)
            .subscribe(function (page) {
            _this.name = page.name;
            _this.description = page.description;
        });
        this.pageService.findPageByWebsiteId(this.webid).subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    PageEditComponent.prototype.update = function () {
        var _this = this;
        var tempPage = { '_id': this.pageid, name: this.pageEditForm.value.name,
            description: this.pageEditForm.value.description, 'websiteId': this.webid };
        this.pageService.updatePage(this.pageid, tempPage)
            .subscribe(function (page) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.webid, 'page']);
        });
    };
    PageEditComponent.prototype.delete = function () {
        var _this = this;
        this.pageService.deletePage(this.pageid)
            .subscribe(function (page) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.webid, 'page']);
        });
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "pageEditForm", void 0);
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PageEditComponent);

var _a, _b, _c, _d;
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

module.exports = "<nav class=\"navbar navbar-light bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--heading on the nav bar-->\n    <p class=\"navbar-text pull-left\">\n      <a class=\"navbar-link viv-white-text\" [routerLink]=\"['/user', userId, 'website']\">\n        <span class=\"glyphicon glyphicon-menu-left\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-left\">\n      <a class=\"navbar-band viv-white-text thick\">\n        <b>Pages</b>\n      </a>\n    </p>\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId, 'website', webId, 'page', 'new']\" class=\"navbar-link viv-white-text\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n<div class = \"container-fluid viv-top-buffer\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let page of pages\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/user', userId, 'website', webId, 'page', page['_id'], 'widget']\">\n            {{page['name']}} </a>\n        </div>\n        <div class=\"col-xs-3 hidden-xs hidden-sm col-md-3\">\n          {{page['description']}}\n        </div>\n        <div class=\"col-xs-3 hidden-xs col-sm-3 col-md-3\">\n          {{page['creationDate']}}\n        </div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/user', userId, 'website', webId, 'page', page['_id']]\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a class=\"viv-white-text\" [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

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
        this.pageService.findPageByWebsiteId(this.webId).subscribe(function (pages) {
            _this.pages = pages;
        });
        // this.pages = this.pageService.findPageByWebsiteId(this.webId);
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

module.exports = "<form (ngSubmit) = \"create()\" #f=\"ngForm\">\n<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website', webId, 'page']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n        <!--<div class=\"col-xs-3 hidden-xs col-sm-3 col-md-3\">-->\n        <p class=\"navbar-text viv-white-text caption col-sm-3 hidden-xs hidden-sm\">\n          <b>Pages</b>\n        </p>\n        <!--plus mark-->\n        <p class=\"col-sm-1 hidden-xs hidden-sm navbar-text pull-right\">\n          <a [routerLink]=\"['/user', userId, 'website', webId, 'page', 'new']\" class=\"navbar-link\">\n            <span class=\"viv-white-text glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n        <!--</div>-->\n      </div>\n      <div class=\"col-sm-9\">\n        <div>\n          <p class=\"navbar-text pull-left\">\n            <a class=\"navbar-band viv-white-text thick\">\n              <b>New Page</b>\n            </a>\n          </p>\n          <!--tick mark-->\n          <p class=\"navbar-text pull-right\">\n            <a type=\"submit\" (click)=\"create()\" [routerLink]=\"['/user', userId, 'website', webId, 'page']\" class=\"navbar-link\">\n              <span class=\"viv-white-text glyphicon glyphicon-ok\"></span>\n            </a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 hidden-xs hidden-sm\">\n      <ul class=\"list-group\" *ngFor=\"let page of pages\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['/user', userId, 'website', webId, 'page', page['_id'], 'widget']\">{{page['name']}}</a>\n          <a [routerLink]=\"['/user', userId, 'website', webId, 'page', page['_id']]\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-9\">\n        <div class=\"form-group\">\n          <label for=\"name\">Page Name</label>\n          <input type=\"text\" id=\"name\" name=\"name\" ngModel required #name=\"ngModel\" class=\"form-control\">\n          <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n            Please enter the Page Name!\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"description\">Page Description</label>\n          <textarea class=\"form-control\" id=\"description\" name=\"description\" ngModel required #description=\"ngModel\" >\n          </textarea>\n          <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n            Please enter the page description!\n          </span>\n        </div>\n      <a class=\"btn btn-success btn-block\"\n         [routerLink]=\"['/user', userId, 'website', webId, 'page']\">Cancel</a>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar navbar-light navbar-fixed-bottom\">\n  <div class=\"container-fluid bg-primary\">\n    <p class=\"navbar-text pull-right\">\n      <a class=\"viv-white-text\" [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n</form>\n"

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
        // this.user = this.userService.findUserById(this.userId);
        this.pageService.findPageByWebsiteId(this.webId)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    PageNewComponent.prototype.create = function () {
        var _this = this;
        // this.user = this.userService.findUserById(this.userId);
        this.name = this.pageNewForm.value.name;
        this.description = this.pageNewForm.value.description;
        var temp = { name: this.name, description: this.description };
        this.page = this.pageService.createPage(this.webId, temp)
            .subscribe(function (page) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.webId, 'page']);
        });
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
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

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\"/>\n      <span class =\"help-block\" *ngIf=\"!password.valid && password.touched\">\n        Please enter password\n      </span>\n    </div>\n    <button class=\"btn btn-primary btn-block\"\n            type=submit [disabled]=\"!f.valid\">Login</button>\n    <!--<a href=\"http://localhost:3100/auth/facebook\" -->\n    <a href=\"https://nair-vivek-webdev.herokuapp.com/auth/facebook\"\n       class=\"btn btn-primary btn-block\">\n      <span class=\"fa fa-facebook\"></span>\n      Facebook Login\n    </a>\n    <button (click)=\"register()\" class=\"btn btn-success btn-block\"\n            type=submit>Register</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function LoginComponent(userService, sharedService, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.router = router;
        this.errorMsg = 'Invalid username or password!';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // login() {
    //   // fetching data from loginform
    //   this.username = this.loginForm.value.username;
    //   this.password = this.loginForm.value.password;
    //   this.errorFlag = this.loginForm.value.errorFlag;
    //   this.userService.findUserByCredentials(this.username, this.password)
    //     .subscribe((user: any) => {
    //       if (user) {
    //         this.router.navigate(['/user/' + user._id]);
    //       } else {
    //         this.errorFlag = true;
    //       }
    //     });
    // }
    LoginComponent.prototype.login = function () {
        var _this = this;
        // fetching data from loginForm
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        // calling client side userservice to send login information
        console.log(this.username);
        this.userService.login(this.username, this.password)
            .subscribe(function (user) {
            if (user) {
                _this.sharedService.user = user;
                _this.router.navigate(['/user', user._id]);
            }
            else {
                _this.errorFlag = true;
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (user) { return _this.router.navigate(['/login']); });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
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

module.exports = "<form (ngSubmit) = \"update()\" #f=\"ngForm\">\r\n  <nav class=\"navbar navbar-light bg-primary navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <!--heading on the nav bar-->\r\n      <p class=\"navbar-header pull-left\">\r\n        <a class=\"viv-white-text navbar-brand thick\">\r\n          <b>Profile</b>\r\n        </a>\r\n      </p>\r\n\r\n      <!--tick mark-->\r\n      <p class=\"navbar-text pull-right\">\r\n        <a (click)=\"update()\" [routerLink]=\"['/user', userId]\"\r\n           class=\"viv-white-text navbar-link\">\r\n          <span class=\"glyphicon glyphicon-ok\"></span>\r\n        </a>\r\n      </p>\r\n    </div>\r\n  </nav>\r\n\r\n  <div class=\"viv-top-buffer\"></div>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"username\"\r\n             name=\"username\"\r\n             [(ngModel)]=\"userName\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email address</label>\r\n      <input type=\"email\"\r\n             class=\"form-control\"\r\n             id=\"email\"\r\n             value={{email}}\r\n             name=\"email\"\r\n             [(ngModel)]=\"email\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"firstName\">First Name</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"firstName\"\r\n             name=\"firstName\"\r\n             [(ngModel)]= \"firstName\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"lastName\">Last Name</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"lastName\"\r\n             id=\"lastName\"\r\n             [(ngModel)] = \"lastName\" />\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <a class=\"btn btn-primary btn-block\"\r\n       [routerLink]=\"['/user/',userId,'website']\">Websites</a>\r\n    <a class=\"btn btn-danger btn-block \"\r\n       (click) = \"logout()\">Logout</a>\r\n\r\n  </div>\r\n</form>\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink] = \"['/user', userId]\">\r\n        <span class=\"viv-white-text glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function ProfileComponent(userService, activatedRoute, router, sharedService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        alert("in profile");
        // this.activatedRoute.params.subscribe((params: any) => {
        //     this.userId = params['userId'];
        //   }
        // );
        // this.userService.findUserById(this.userId)
        //   .subscribe((user: any) => {
        //       this.user = user;
        //       this.userName = this.user['username'];
        //       this.firstName = this.user['firstName'];
        //       this.lastName = this.user['lastName'];
        //       this.email = this.user['email'];
        //     },
        //     (error: any) => {
        //       this.errorFlag = true;
        //     }
        //   );
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
        this.userName = this.user['username'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        this.password = this.user['password'];
        this.email = this.user['email'];
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        // if (this.profileForm.value.username.length > 0) {
        this.user['username'] = this.profileForm.value.username;
        // }
        // if (this.profileForm.value.email.length > 0) {
        this.user['email'] = this.profileForm.value.email;
        // }
        // if (this.profileForm.value.firstName.length > 0) {
        this.user['firstName'] = this.profileForm.value.firstName;
        // }
        // if (this.profileForm.value.lastName.length > 0) {
        this.user['lastName'] = this.profileForm.value.lastName;
        // }
        // if (this.profileForm.value.email.length > 0) {
        this.user['email'] = this.profileForm.value.email;
        // }
        console.log(this.userId);
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (user) {
            _this.errorFlag = false;
            _this.userName = _this.user['username'];
            _this.firstName = _this.user['firstName'];
            _this.lastName = _this.user['lastName'];
            _this.email = _this.user['email'];
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <input placeholder=\"firstName\"\n             name=\"firstName\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n    </div>\n    <div class=\"form-group\">\n      <input placeholder=\"lastName\"\n             name=\"lastName\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n    </div>\n    <div class=\"form-group\">\n      <input placeholder=\"xyz@email\"\n             name=\"email\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n    </div>\n    <div class=\"form-group\">\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\"/>\n    </div>\n    <div class=\"form-group\">\n      <input placeholder=\"verify password\"\n             name=\"verify_password\"\n             id=\"verify_password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #verify_password=\"ngModel\"/>\n    </div>\n    <button class=\"btn btn-primary btn-block\"\n            type=submit [disabled]=\"!f.valid\">Register</button>\n\n    <button (click)=\"cancel()\" class=\"btn btn-danger\n    btn-block\">Cancel</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function RegisterComponent(userService, sharedService, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.firstName = this.registerForm.value.firstName;
        this.lastName = this.registerForm.value.lastName;
        this.email = this.registerForm.value.email;
        this.verify_password = this.registerForm.value.verify_password;
        this.errorFlag = this.registerForm.value.errorFlag;
        var user = {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        };
        // this.userService.createUser(user)
        //   .subscribe((newuser: any) => {
        //       this.router.navigate(['user/' + newuser._id]);
        //       this.errorFlag = false;
        //     },
        //     (error: any) => {
        //       this.errorFlag = true;
        //     }
        //   );
        this.userService.register(user)
            .subscribe(function (data) {
            _this.sharedService.user = data;
            _this.router.navigate(['/profile']);
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = error._body;
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.router.navigate(['/login']);
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
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

module.exports = "<form (ngSubmit) = \"update()\" #f =\"ngForm\">\n<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n        <!--<div class=\"col-xs-3 hidden-xs col-sm-3 col-md-3\">-->\n        <p class=\"navbar-text viv-white-text caption col-sm-3 hidden-xs hidden-sm\">\n          <b>Websites</b>\n        </p>\n        <!--plus mark-->\n        <p class=\"col-sm-1 hidden-xs hidden-sm navbar-text pull-right\">\n          <a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"navbar-link\">\n            <span class=\"viv-white-text glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n        <!--</div>-->\n      </div>\n      <div class=\"col-sm-9\">\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-band viv-white-text thick\">\n            <b>Edit Website</b>\n          </a>\n        </p>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right\">\n          <a type=\"submit\" (click)=\"update()\" [routerLink]=\"['/user', userId, 'website']\" class=\"navbar-link\">\n            <span class=\"viv-white-text glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 hidden-xs hidden-sm\">\n      <ul class=\"list-group\" *ngFor=\"let website of websites\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['/user', userId, 'website', website['_id'], 'page']\">{{website['name']}}</a>\n          <a [routerLink]=\"['/user', userId, 'website', website['_id']]\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-9\">\n        <div class=\"form-group\">\n          <label for=\"name\">Website Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)] =\"name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"description\">Website Description</label>\n          <textarea class=\"form-control\" name=\"description\" id=\"description\"\n                    [(ngModel)] =\"description\" placeholder=\"description\"></textarea>\n        </div>\n      <a class=\"btn btn-danger btn-block\"\n         (click)= \"delete()\"> Delete </a>\n    </div>\n  </div>\n</div>\n</form>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"viv-white-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

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
        this.websiteService.findWebsiteById(this.webid).subscribe(function (website) {
            _this.name = website.name;
            _this.description = website.description;
        });
        this.websiteService.findWebsitesByUser(this.userId).subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    // this.user = this.userService.findUserById(this.userId);
    // this.websites = this.websiteService.findWebsitesByUser(this.userId);
    //   this.website = this.websiteService.findWebsiteById(this.webid);
    // this.name = this.website.name;
    // this.description = this.website.description;
    WebsiteEditComponent.prototype.update = function () {
        var _this = this;
        // this.user = this.userService.findUserById(this.userId);
        var edited = { '_id': this.webid,
            'name': this.websiteEditForm.value.name,
            'developerId': this.userId,
            'description': this.websiteEditForm.value.description };
        // if (this.websiteEditForm.value.name.length > 0) {
        //   this.website['name'] = this.websiteEditForm.value.name;
        // }
        // if (this.websiteEditForm.value.description.length > 0) {
        //   this.website['description'] = this.websiteEditForm.value.description;
        // }
        this.websiteService.updateWebsite(this.webid, edited)
            .subscribe(function (sites) {
            _this.websites = sites;
            _this.router.navigate(['user/' + _this.userId, 'website']);
        });
        // const tempWebsite = {name: this.user['name'], description: this.user['description']};
        // this.websiteService.updateWebsite( this.webid, tempWebsite);
        // this.router.navigate(['user/' + this.userId, 'website']);
    };
    WebsiteEditComponent.prototype.delete = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.webid)
            .subscribe(function (website) {
            _this.router.navigate(['user/' + _this.userId, 'website']);
        });
    };
    return WebsiteEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
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

module.exports = "<nav class=\"navbar navbar-light bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--heading on the nav bar-->\n    <p class=\"navbar-text pull-left\">\n      <a class=\"navbar-link viv-white-text\" [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-menu-left\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-left\">\n      <a class=\"navbar-band viv-white-text thick\">\n        <b>Websites</b>\n      </a>\n    </p>\n    <!--plus-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId, 'website', 'new' ]\" class=\"navbar-link viv-white-text\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class = \"container-fluid viv-top-buffer\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let website of websites\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/user', userId, 'website', website['_id'] , 'page']\">\n            {{website['name']}}</a>\n        </div>\n        <div class=\"col-xs-3 hidden-xs hidden-sm col-md-3\">\n        {{website['description']}}\n        </div>\n        <div class=\"col-xs-3 hidden-xs col-sm-3 col-md-3\">\n          {{username}}\n        </div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/user', userId, 'website', website['_id']]\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a class=\"viv-white-text\" [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

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
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            _this.username = user.username;
        });
        this._websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
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

module.exports = "<form (ngSubmit) = \"create()\" #f=\"ngForm\">\n<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n        <!--<div class=\"col-xs-3 hidden-xs col-sm-3 col-md-3\">-->\n        <p class=\"navbar-text viv-white-text caption col-sm-3 hidden-xs hidden-sm\">\n          <b>Websites</b>\n        </p>\n        <!--plus mark-->\n        <p class=\"col-sm-1 hidden-xs hidden-sm navbar-text pull-right\">\n          <a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"navbar-link\">\n            <span class=\"viv-white-text glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n        <!--</div>-->\n      </div>\n      <div class=\"col-sm-9\">\n        <div>\n          <p class=\"navbar-text pull-left\">\n            <a class=\"navbar-band viv-white-text thick\">\n              <b>New Website</b>\n            </a>\n          </p>\n          <!--tick mark-->\n          <p class=\"navbar-text pull-right\">\n            <a type=\"submit\" (click)=\"create()\" [routerLink]=\"['/user', userId, 'website']\" class=\"navbar-link\">\n              <span class=\"viv-white-text glyphicon glyphicon-ok\"></span>\n            </a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 hidden-xs hidden-sm\">\n      <ul class=\"list-group\" *ngFor = \"let website of websites\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['/user', userId, 'website', website['_id'], 'page']\">{{website['name']}}</a>\n          <a [routerLink]=\"['/user', userId, 'website', website['_id']]\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-edit\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-9\">\n      <!--<form>-->\n        <!--<div class=\"form-group\">-->\n          <label for=\"name\">Website Name</label>\n          <input type=\"text\" id=\"name\" name=\"name\" ngModel required #name=\"ngModel\" placeholder=\"website name\"\n                 class=\"form-control\">\n          <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n            Please enter the Name of the Website!\n          </span>\n        <!--</div>-->\n      <!--</form>-->\n      <!--<form>-->\n        <!--<div class=\"form-group\">-->\n          <label for=\"description\">Website Description</label>\n          <textarea class=\"form-control\" id=\"description\" name=\"description\" ngModel required #description=\"ngModel\"\n          placeholder=\"description\"></textarea>\n          <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n            Please enter the Website description!\n          </span>\n        <!--</div>-->\n      <!--</form>-->\n      <a class=\"btn btn-success btn-block\"\n         [routerLink]=\"['/user', userId, 'website']\">Cancel</a>\n    </div>\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light navbar-fixed-bottom\">\n  <div class=\"container-fluid bg-primary\">\n    <p class=\"navbar-text pull-right\">\n      <a class=\"viv-white-text\" [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n</form>\n"

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
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    WebsiteNewComponent.prototype.create = function () {
        var _this = this;
        var temp = { name: this.websiteNewForm.value.name, description: this.websiteNewForm.value.description };
        this.websiteService.createWebsite(this.userId, temp)
            .subscribe(function (new_website) {
            _this.router.navigate(['user/' + _this.userId, 'website']);
        });
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
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

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website', webId, 'page']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n          <a class=\"navbar-band viv-white-text thick\">\n            <b>Choose Widget</b>\n          </a>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              <a (click)=\"create('HEADING')\">Header</a>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              <a (click)=\"create('IMAGE')\">Image</a>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              <a (click)=\"create('YOUTUBE')\">Youtube</a>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              <a (click)=\"create('HTML')\">Html</a>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              <a (click)=\"create('TEXT')\">Text Input</a>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              Label\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              Link\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              Button\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              Data Table\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9 col-sm-6 col-md-3\">\n              Repeater\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navba r-text pull-right\">\n      <a class=\"viv-white-text\" [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

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
        var _this = this;
        var tempwidget = { widgetType: type };
        this.widget = this.widgetService.createWidget(this.pageId, tempwidget)
            .subscribe(function (newwidget) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget',
                newwidget['_id']]);
        });
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

module.exports = "<div [ngSwitch]=\"this.widtype\">\n\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n</div>\n"

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
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.widtype = widget['widgetType'];
            });
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

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n        <!--</div>-->\n      </div>\n      <div class=\"col-sm-9\">\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-band viv-white-text thick\">\n            <b>Widget Edit</b>\n          </a>\n        </p>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"update()\" [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget']\"\n             class=\"navbar-link\">\n            <span class=\"viv-white-text glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <!--<form>-->\n    <div class=\"form-group\">\n      <label for=\"txt\">\n        Text\n      </label>\n      <input type=\"text\" class=\"form-control\" name=\"txt\" id=\"txt\" required [(ngModel)]=\"txt\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"size\">\n        Size\n      </label>\n      <input type=\"number\" class=\"form-control\" name=\"size\" id=\"size\" required [(ngModel)]=\"size\">\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"delete()\" class=\"btn btn-danger btn-block\"\n         [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget']\">\n        Delete</a>\n    </div>\n  <!--</form>-->\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"viv-white-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

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
        this.widgets = [{}];
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.webid = params['webid'];
            _this.pageid = params['pageid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.txt = _this.widget['text'];
                _this.size = _this.widget['size'];
            });
        });
    };
    WidgetHeaderComponent.prototype.update = function () {
        var _this = this;
        this.widget['widgetType'] = 'HEADING';
        this.widget['text'] = this.txt;
        this.widget['size'] = this.size;
        this.widgetService.updateWidget(this.wgid, this.widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetHeaderComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widgets) {
            _this.widgets = widgets;
        });
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

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website', webId, 'page', pageId, 'widget']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n        <!--</div>-->\n      </div>\n      <div class=\"col-sm-9\">\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-band viv-white-text thick\">\n            <b>Widget Edit</b>\n          </a>\n        </p>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"update()\" [routerLink]=\"['/user', userId, 'website', webId, 'page', pageId, 'widget']\"\n             class=\"navbar-link\">\n            <span class=\"viv-white-text glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <!--<form>-->\n  <div class=\"form-group\">\n    <label>\n      Text\n    </label>\n    <quill-editor name=\"text\"  [(ngModel)]=\"text\"></quill-editor>\n  </div>\n\n  <div class=\"form-group\">\n    <a (click)=\"delete()\" class=\"btn btn-danger btn-block\"\n       [routerLink]=\"['/user', userId, 'website', webId, 'page', pageId, 'widget']\">\n      Delete</a>\n  </div>\n  <!--</form>-->\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"viv-white-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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




var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.basUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.widget = {};
        this.widgets = [{}];
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.webId = params['webid'];
            _this.pageId = params['pageid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.text = widget['text'];
            });
        });
    };
    WidgetHtmlComponent.prototype.update = function () {
        var _this = this;
        this.widget['widgetType'] = 'HTML';
        this.widget['text'] = this.text;
        this.widgetService.updateWidget(this.wgid, this.widget)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/' + _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetHtmlComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetHtmlComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website', webId, 'page', pageId, 'widget']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n      </div>\n      <div class=\"col-sm-6\">\n        <a class=\"navbar-band viv-white-text thick\">\n          <b>Search Image</b>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n<div class=\"input-group\">\n  <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n  <span class=\"input-group-btn\">\n         <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n </span>\n</div>\n<div class=\"row\">\n  <div *ngFor = \"let pic of photos['photo']\"\n       class=\"col-xs-4\">\n    <img    (click)=\"selectPhoto(pic)\"\n            width=\"100%\"\n            [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\n\n    <p></p>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlickrImageSearchComponent = (function () {
    function FlickrImageSearchComponent(widgetService, router, activatedRoute, sharedService, flickrService) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.flickrService = flickrService;
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['webid'];
            _this.pageId = params['pageid'];
            _this.widgetId = params['wgid'];
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = {
            websiteId: this.websiteId,
            _page: this.pageId,
            url: url
        };
        this.widgetService
            .updateWidget(this.widgetId, widget)
            .subscribe(function (data) {
            if (data) {
                _this.router.navigate(['/user/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget']);
            }
            else {
                _this.error = false;
            }
        });
    };
    return FlickrImageSearchComponent;
}());
FlickrImageSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _e || Object])
], FlickrImageSearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=flickr-image-search.component.js.map

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

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n\n      </div>\n      <div class=\"col-sm-9\">\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-band viv-white-text thick\">\n            <b>Widget Edit</b>\n          </a>\n        </p>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"update()\" [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget']\"\n             class=\"navbar-link\">\n            <span class=\"viv-white-text glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n  <!--<form>-->\n    <div class=\"form-group\">\n      <label for=\"imageName\">\n        Name\n      </label>\n      <input [(ngModel)]=\"imageName\" required name=\"imageName\" type=\"text\" class=\"form-control\" id=\"imageName\"\n      placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"imageText\">\n        Text\n      </label>\n      <input [(ngModel)]=\"imageText\" required name=\"imageText\" type=\"text\" class=\"form-control\" id=\"imageText\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"url\">\n        URL\n      </label>\n      <input [(ngModel)]=\"url\" required name=\"url\" type=\"url\" class=\"form-control\" id=\"url\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"width\">\n        Width\n      </label>\n      <input [(ngModel)]=\"width\" type=\"text\" class=\"form-control\" name=\"width\" id=\"width\" required\n             placeholder=\"100%\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"myFile\">\n        Upload\n      </label>\n      <input [(ngModel)]=\"upload\" type=\"file\" class=\"form-control\" name=\"myFile\" id=\"myFile\" required\n             placeholder=\"100%\">\n    </div>\n\n    <div class =\"form-group\">\n      <input  name=\"widgetId\" value=\"{{wgid}}\" style=\"display: none;\"/>\n    </div>\n    <div class=\"form-group\">\n      <input  name=\"pageId\" value=\"{{pageid}}\" style=\"display: none\"/>\n    </div>\n    <div class=\"form-group\">\n      <input name=\"widget\" value=\"{{widget}}\" style=\"display:none;\">\n    </div>\n    <!--<div class=\"form-group\">-->\n      <!--<input name=\"appUrl\" value=\"{{appUrl}}\">-->\n    <!--</div>-->\n    <div class=\"form-group\">\n      <!--<input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>-->\n\n      <input  name=\"websiteId\" value=\"{{webid}}\" style=\"display: none;\"/>\n\n      <input  name=\"userId\" value=\"{{userId}}\" style=\"display: none;\"/>\n\n      <button type=\"submit\" class=\"form-control btn btn-primary\">\n        Upload Image\n      </button>\n    </div>\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-primary btn-block \"\n         [routerLink]=\"['/user/'+ userId +'/website/'+webid+'/page/'+pageid+'/widget/'+wgid+'/flickr']\" >\n        Flickr Search\n      </a>\n      <a (click)=\"delete()\" class=\"btn btn-danger btn-block\"\n         [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget']\">\n        Delete</a>\n    </div>\n  </form>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"viv-white-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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




var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.widget = {};
        this.widgets = [{}];
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // alert('in init');
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.webid = params['webid'];
            _this.pageid = params['pageid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.width = _this.widget['width'];
                _this.url = _this.widget['url'];
                _this.imageName = _this.widget['imageName'];
                _this.imageText = _this.widget['imageText'];
                _this.upload = _this.widget['upload'];
                // alert(this.imageName);
            });
        });
    };
    WidgetImageComponent.prototype.update = function () {
        var _this = this;
        this.widget['widgetType'] = 'IMAGE';
        this.widget['url'] = this.url;
        this.widget['width'] = this.width;
        this.widget['upload'] = this.upload;
        this.widget['imageName'] = this.imageName;
        this.widget['imageText'] = this.imageText;
        this.widgetService.updateWidget(this.wgid, this.widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['user/' + _this.userId, 'website', _this.wgid, 'page', _this.pageid, 'widget']);
        });
    };
    WidgetImageComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\">\n  <div class=\"container-fluid bg-primary\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-link\" [routerLink]=\"['/user', userId, 'website', webId, 'page', pageId, 'widget']\">\n            <span class=\"viv-white-text glyphicon glyphicon-menu-left\"></span>\n          </a>\n        </p>\n        <!--</div>-->\n      </div>\n      <div class=\"col-sm-9\">\n        <p class=\"navbar-text pull-left\">\n          <a class=\"navbar-band viv-white-text thick\">\n            <b>Widget Edit</b>\n          </a>\n        </p>\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right\">\n          <a (click)=\"update()\" [routerLink]=\"['/user', userId, 'website', webId, 'page', pageId, 'widget']\"\n             class=\"navbar-link\">\n            <span class=\"viv-white-text glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <!--<form>-->\n  <div class=\"form-group\">\n    <label for=\"text\">\n      Text\n    </label>\n    <input type=\"text\" class=\"form-control\" name=\"text\" id=\"text\" [(ngModel)]=\"text\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"rows\">\n      Rows\n    </label>\n    <input type=\"number\" class=\"form-control\" name=\"rows\" id=\"rows\" [(ngModel)]=\"rows\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"name\">\n      Name\n    </label>\n    <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"name\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"placeholder\">\n      Placeholder\n    </label>\n    <input class=\"form-control\" name=\"placeholder\" id=\"placeholder\" [(ngModel)]=\"placeholder\">\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"text\" readonly value=\"Formatted\" class=\"form-control\">\n    <span class=\"input-group-addon\">\n      <input type=\"checkbox\" [(ngModel)]=\"formatted\" name=\"formatted\">\n    </span>\n  </div>\n\n  <div class=\"form-group\">\n    <a (click)=\"delete()\" class=\"btn btn-danger btn-block\"\n       [routerLink]=\"['/user', userId, 'website', webId, 'page', pageId, 'widget']\">\n      Delete</a>\n  </div>\n  <!--</form>-->\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"viv-white-text glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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




var WidgetTextComponent = (function () {
    function WidgetTextComponent(widgetService, activatedRoutes, router) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.widgets = [{}];
        this.widget = {};
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.webId = params['webid'];
            _this.pageId = params['pageid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.rows = widget['rows'];
                _this.text = widget['text'];
                _this.formatted = widget['formatted'];
                _this.name = widget['name'];
                _this.placeholder = widget['placeholder'];
            });
        });
    };
    WidgetTextComponent.prototype.update = function () {
        var _this = this;
        this.widget['widgetType'] = 'TEXT';
        this.widget['rows'] = this.rows;
        this.widget['name'] = this.name;
        this.widget['text'] = this.text;
        this.widget['formatted'] = this.formatted;
        this.widget['placeholder'] = this.placeholder;
        this.widgetService.updateWidget(this.wgid, this.widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetTextComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    return WidgetTextComponent;
}());
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetTextComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-text.component.js.map

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
        this.widgets = [{}];
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.webid = params['webid'];
            _this.pageid = params['pageid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.width = _this.widget['width'];
                _this.url = _this.widget['url'];
            });
        });
    };
    WidgetYoutubeComponent.prototype.update = function () {
        var _this = this;
        this.widget['widgetType'] = 'YOUTUBE';
        this.widget['url'] = this.url;
        this.widget['width'] = this.width;
        this.widgetService.updateWidget(this.wgid, this.widget).subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetYoutubeComponent.prototype.delete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widgets) {
            _this.widgets = widgets;
        });
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
exports.push([module.i, "body{\r\n  padding-top: 40px;\r\n}\r\n.viv-toolbar{\r\n  position: absolute;\r\n  right: 0px;\r\n  background-color: transparent;\r\n  padding: 7px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.viv-widget .viv-content{\r\n  width: 100%;\r\n}\r\n.viv-white-text{\r\n  color: white;\r\n}\r\n\r\n.viv-top-buffer {\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-top: 50px;\r\n  padding-top: 15px\r\n}\r\n\r\n.viv-footer-buffer{\r\n  top:0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n\r\n.youtube-widget {\r\n  position: relative;\r\n  padding-bottom: 56.25%; /* 16:9 */\r\n  height: 0;\r\n}\r\n.youtube-widget iframe {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n\r\nbody.fixed_width #page, body.fixed_width #footer, body.canvas .page-canvas {\r\n  width: 960px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-primary navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--heading on the nav bar-->\n    <p class=\"navbar-text pull-left\">\n      <a class=\"navbar-link viv-white-text\" [routerLink]=\"['/user', userId, 'website', webid, 'page']\">\n        <span class=\"glyphicon glyphicon-menu-left\"></span>\n      </a>\n    </p>\n    <p class=\"navbar-text pull-left\">\n      <a class=\"navbar-band viv-white-text thick\">\n        <b>Widgets</b>\n      </a>\n    </p>\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget', 'new']\" class=\"navbar-link viv-white-text\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n<div class=\"container-fluid viv-top-buffer\">\n  <div class=\"viv-widget\" *ngFor=\"let widget of widgets\">\n    <div [ngSwitch]=\"widget.widgetType\">\n\n      <div *ngSwitchCase=\"'HEADING'\">\n        <div class=\"viv-toolbar\">\n          <a [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget', widget._id]\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </div>\n        <h1>{{widget.text}}</h1>\n      </div>\n\n      <div *ngSwitchCase=\"'HTML'\">\n        <div class=\"viv-toolbar\">\n          <a [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget', widget._id]\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </div>\n        <div [innerHtml]=\"widget.text\"></div>\n      </div>\n\n      <div *ngSwitchCase=\"'TEXT'\">\n        <div class=\"viv-toolbar\">\n          <a [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget', widget._id]\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </div>\n        <div *ngIf=\"widget.formatted\">\n          <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n        </div>\n        <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n               placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n        <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                  rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                  class=\"form-control\">{{widget.text}}</textarea>\n        </div>\n\n\n  <div *ngSwitchCase=\"'IMAGE'\" class=\"viv-widget\">\n    <div class=\"viv-toolbar\">\n      <a [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget', widget._id]\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <img [style.width]=\"widget.width\" class=\"viv-content\" [src]=\"widget.url\"/>\n  </div>\n\n  <div class=\"youtube-widget viv-footer-buffer\" *ngSwitchCase=\"'YOUTUBE'\">\n    <div class=\"viv-toolbar\">\n      <a [routerLink]=\"['/user', userId, 'website', webid, 'page', pageid, 'widget', widget._id]\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <iframe class=\"viv-content\"\n            [style.width]=\"widget.width\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(widget.url)\"\n            frameborder=\"0\" allowfullscreen></iframe>\n  </div>\n</div>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-light bg-primary navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a class=\"viv-white-text\" [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

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
        this.widgetService.findWidgetsByPageId(this.pageid)
            .subscribe(function (wdgts) {
            _this.widgets = wdgts;
        });
        this.user = this.userService.findUserById(this.userId);
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

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlickrService = (function () {
    function FlickrService(http) {
        this.http = http;
        this.key = '166ee5cc0935a19d5493b3cc22f3acb9';
        this.secret = '4bc828d63669efa9';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this.http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
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




// injecting service into module
var PageService = (function () {
    function PageService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createPage': this.createPage,
            'findPageByWebsiteId': this.findPageByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page.websiteId = websiteId;
        return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
            .map(function (res) {
            return res.json();
        });
    };
    // const resultset = [];
    // for (let x = 0; x < this.pages.length; x++) {
    //   if (this.pages[x].websiteId === websiteId) {
    //     // let ws: any;
    //     // ws = this.pages[x];
    //     resultset.push(this.pages[x]);
    //   }
    // }
    // return resultset;
    PageService.prototype.findPageById = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId, page)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        return this._http.delete(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            return res.json();
        });
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function UserService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
            'findUserByCredentials': this.findUserByCredentials
        };
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true; // jga
        var body = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/login', body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    UserService.prototype.register = function (user) {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/user', user, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user/', user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        // return this._http.put(this.baseUrl + '/api/user/' + userId, user)
        return this._http.put(this.baseUrl + '/api/user/' + userId, user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
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




// injecting service into module
var WebsiteService = (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website.developerId = userId;
        return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/website')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this._http.put(this.baseUrl + '/api/website/' + websiteId, website)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this._http.delete(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
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




// injecting service into module
var WidgetService = (function () {
    function WidgetService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget.pageId = pageId;
        return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this._http.get(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        // alert("client service");
        return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this._http.delete(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return res.json();
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
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