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
var show_service_1 = require("../../show.service");
var ShowDetailsComponent = (function () {
    function ShowDetailsComponent(showService) {
        this.showService = showService;
    }
    ShowDetailsComponent.prototype.getShows = function () {
        var _this = this;
        //this.shows = this.showService.getShows();
        this.showService.getShows()
            .subscribe(function (shows) { return _this.shows = shows; });
    };
    ShowDetailsComponent.prototype.ngOnInit = function () {
        this.getShows();
    };
    return ShowDetailsComponent;
}());
ShowDetailsComponent = __decorate([
    core_1.Component({
        selector: 'my-show-details',
        templateUrl: './show-details.component.html'
    }),
    __metadata("design:paramtypes", [show_service_1.ShowService])
], ShowDetailsComponent);
exports.ShowDetailsComponent = ShowDetailsComponent;
//# sourceMappingURL=show-details.component.js.map