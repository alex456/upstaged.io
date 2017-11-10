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
var index_1 = require("../../domain/index");
var show_service_1 = require("../../show.service");
var router_1 = require("@angular/router");
var CuesDetailsComponent = (function () {
    function CuesDetailsComponent(route, showService) {
        this.route = route;
        this.showService = showService;
    }
    CuesDetailsComponent.prototype.ngOnInit = function () {
        this.getShow();
    };
    CuesDetailsComponent.prototype.getShow = function () {
        var _this = this;
        this.id = +this.route.snapshot.paramMap.get('id');
        if (this.id.toString() == 'undefined' || !this.id) {
            this.id = 1;
        }
        console.log(this.id);
        this.showService.getShow(this.id)
            .subscribe(function (show) { return _this.show = show; });
    };
    return CuesDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Show)
], CuesDetailsComponent.prototype, "show", void 0);
CuesDetailsComponent = __decorate([
    core_1.Component({
        selector: 'my-cues',
        templateUrl: './cues-details.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        show_service_1.ShowService])
], CuesDetailsComponent);
exports.CuesDetailsComponent = CuesDetailsComponent;
//# sourceMappingURL=cues-details.component.js.map