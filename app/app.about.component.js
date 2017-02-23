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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var club_service_1 = require('./club.service');
var AboutComponent = (function () {
    function AboutComponent(clubService, route, location) {
        this.clubService = clubService;
        this.route = route;
        this.location = location;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.club = this.clubService.getClub(this.route.snapshot.params['name']);
    };
    AboutComponent.prototype.goBack = function () {
        this.location.back();
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about-app',
            template: "\n    <div *ngIf=\"club\">\n      <h2>{{club.name}}</h2>\n      <div><label>about: </label>{{club.about}}</div>\n      <div><label>image: </label>{{club.image}}</div>\n    </div>\n    <button (click)=\"goBack()\">Back</button>\n  "
        }), 
        __metadata('design:paramtypes', [club_service_1.ClubService, router_1.ActivatedRoute, common_1.Location])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=app.about.component.js.map