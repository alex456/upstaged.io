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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../domain/index");
var show_service_1 = require("../../show.service");
var router_1 = require("@angular/router");
var NavBarComponent = (function () {
    function NavBarComponent(router, activatedRoute, showService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.showService = showService;
        this.newShow = new index_1.Show();
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showService.getShows()
            .subscribe(function (shows) { return _this.shows = shows; });
    };
    NavBarComponent.prototype.addShow = function () {
        var _this = this;
        //this.newShow.id = this.shows.length + 1;
        console.log(this.newShow.name);
        this.showService.addShow(this.newShow)
            .subscribe(function (x) { _this.shows.push(_this.newShow); });
        this.newShow = new index_1.Show();
    };
    NavBarComponent.prototype.getid = function (listID) {
        this.id = listID;
        console.log(this.id);
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: 'my-navBar',
        templateUrl: './navBar.component.html',
        styleUrls: ['./navBar.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        show_service_1.ShowService])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navBar.component.js.map