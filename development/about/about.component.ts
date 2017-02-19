import { Component } from '@angular/core';
import { MovieServices } from '../services/movie.service';
import { Movie } from '../models/movie.model';

@Component({
    moduleId: module.id,
    templateUrl: '../../partials/about.component.html'
})
export class AboutComponent {
    options: Object;
    movielist: Movie[];

    constructor(private movieservice: MovieServices) {

    }

    ngOnInit() {
        debugger;
        var movies = localStorage.getItem('movielist');
        if (movies === undefined || movies === null) {

            this.movieservice.getMovieList().subscribe((movies: Movie[]) => {
                debugger;
                this.movielist = movies;
                localStorage.setItem('movielist', JSON.stringify(movies));
            });
        }
        else {
            this.movielist = JSON.parse(movies);
        }

        this.creategraph();
    }

    creategraph() {
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
                height:1800
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
    }
}