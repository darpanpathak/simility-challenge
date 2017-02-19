import { Injectable } from '@angular/core';
import { contentHeaders } from '../common/headers';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class MovieServices {
    constructor(private http: Http) { }

    getMovieList() {
        return this.http.get('http://starlord.hackerearth.com/simility/movieslisting')
            .map(res => res.json());
    }

}