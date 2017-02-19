import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie.model';

@Pipe({ name: 'customMovieFilter' })
export class customMovieFilter implements PipeTransform {
    transform(movies: Movie[], args: string): any {

        if (args === "") {
            return movies;
        }
        else {
            return movies.filter(m => m.movie_title.toLowerCase().indexOf(args.toLowerCase()) !== -1);
        }
    }
}