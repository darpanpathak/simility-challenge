"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
// Route Configuration
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);

//# sourceMappingURL=app.routes.js.map
