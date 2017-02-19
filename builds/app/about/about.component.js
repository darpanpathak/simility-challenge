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
var movie_service_1 = require("../services/movie.service");
var AboutComponent = (function () {
    function AboutComponent(movieservice) {
        this.movieservice = movieservice;
    }
    AboutComponent.prototype.ngOnInit = function () {
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
        this.creategraph();
    };
    AboutComponent.prototype.creategraph = function () {
        var xdata = [];
        var ydata = [];
        for (var i = 0; i < this.movielist.length; i++) {
            xdata.push(this.movielist[i].movie_title);
            ydata.push(Number(this.movielist[i].budget).toString() === "NaN" ? 0 : Number(this.movielist[i].budget));
        }
        debugger;
        this.options = {
            chart: {
                type: 'bar',
                width: 1000,
                height: 1800
            },
            title: {
                text: 'Movie vs Budget'
            },
            xAxis: {
                categories: xdata
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Movie Budget'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                    name: 'Budget',
                    data: ydata
                }]
        };
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: '../../partials/about.component.html'
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieServices])
], AboutComponent);
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=about.component.js.map
