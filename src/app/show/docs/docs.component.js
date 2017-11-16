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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var DocsComponent = (function () {
    function DocsComponent(route) {
        this.route = route;
        this.unions = [];
        this.unions.push({
            unionName: 'Screen Actors Guild',
            id: 1,
            docs: []
        });
        this.unions.push({
            unionName: 'Another Union',
            id: 2,
            docs: [
                {
                    name: 'Contract',
                    id: 1,
                    link: '#'
                },
                {
                    name: 'Pay',
                    id: 2,
                    link: '#'
                },
            ]
        });
    }
    DocsComponent.prototype.ngOnInit = function () {
    };
    return DocsComponent;
}());
DocsComponent = __decorate([
    core_1.Component({
        selector: 'app-docs',
        templateUrl: './docs.component.html',
        styleUrls: ['./docs.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], DocsComponent);
exports.DocsComponent = DocsComponent;
//# sourceMappingURL=docs.component.js.map