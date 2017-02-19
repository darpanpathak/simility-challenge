import { Component } from '@angular/core';
import { SitemenuComponent } from '../sitemenu/sitemenu.component';
import { MovieServices } from '../services/movie.service';
import { Movie } from '../models/movie.model';

@Component({
    selector: 'home',
    providers: [SitemenuComponent],
    moduleId: module.id,
    templateUrl: '../../partials/home.component.html'
})
export class HomeComponent {
    movielist: Movie[];
    private movie_title: string = "";

    constructor(private movieservice: MovieServices) { }

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
    }
}