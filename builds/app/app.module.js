"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var sitemenu_component_1 = require("./sitemenu/sitemenu.component");
var app_routes_1 = require("./app.routes");
var movie_service_1 = require("./services/movie.service");
var customMovie_pipe_1 = require("./pipes/customMovie.pipe");
var ng2_pagination_1 = require("ng2-pagination");
var angular2_highcharts_1 = require("angular2-highcharts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule, app_routes_1.routing, http_1.HttpModule, forms_1.FormsModule, ng2_pagination_1.Ng2PaginationModule, angular2_highcharts_1.ChartModule.forRoot(require('highcharts'))],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, sitemenu_component_1.SitemenuComponent, about_component_1.AboutComponent, customMovie_pipe_1.customMovieFilter],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, movie_service_1.MovieServices],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
