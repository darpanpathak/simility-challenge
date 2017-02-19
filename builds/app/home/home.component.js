"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var sitemenu_component_1 = require("../sitemenu/sitemenu.component");
var movie_service_1 = require("../services/movie.service");
var HomeComponent = (function () {
    function HomeComponent(movieservice) {
        this.movieservice = movieservice;
        this.movie_title = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        var movies = localStorage.getItem('movielist');
        if (movies === undefined || movies === null) {
            this.movieservice.getMovieList().subscribe(function (movies) {
                debugger;
                _this.movielist = movies;
                localStorage.setItem('movielist', JSON.stringify(movies));
            });
        }
        else {
            this.movielist = JSON.parse(movies);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        providers: [sitemenu_component_1.SitemenuComponent],
        moduleId: module.id,
        templateUrl: '../../partials/home.component.html'
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieServices])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=home.component.js.map
