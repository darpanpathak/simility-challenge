import { Component } from '@angular/core';

@Component({
    selector: 'site-menu',
    moduleId: module.id,
    templateUrl: '../../partials/sitemenu.component.html'
})
export class SitemenuComponent{
    private isLoggedin: boolean;
    private username:string;

    constructor() {
        
    }

    logout(){
    }
}