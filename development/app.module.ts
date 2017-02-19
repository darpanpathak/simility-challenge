import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SitemenuComponent } from './sitemenu/sitemenu.component';
import { routing } from './app.routes';
import { MovieServices } from './services/movie.service'

import { customMovieFilter } from './pipes/customMovie.pipe';
import { Ng2PaginationModule } from 'ng2-pagination';
import { ChartModule } from 'angular2-highcharts';

@NgModule({
    imports: [BrowserModule, RouterModule, routing, HttpModule,FormsModule, Ng2PaginationModule, ChartModule.forRoot(require('highcharts'))],
    declarations: [AppComponent, HomeComponent, SitemenuComponent, AboutComponent, customMovieFilter],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },MovieServices],
    bootstrap: [AppComponent]
})
export class AppModule { }
