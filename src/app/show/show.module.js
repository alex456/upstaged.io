"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var domain_module_1 = require("../domain/domain.module");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("../app-routing/app-routing.module");
var home_page_component_1 = require("./home-page/home-page.component");
var show_details_component_1 = require("./show-details/show-details.component");
var navBar_component_1 = require("./navBar/navBar.component");
var crew_details_component_1 = require("./crew-details/crew-details.component");
var create_account_component_1 = require("./create-account/create-account.component");
var cues_details_component_1 = require("./cues-details/cues-details.component");
var docs_component_1 = require("./docs/docs.component");
var ShowModule = (function () {
    function ShowModule() {
    }
    return ShowModule;
}());
ShowModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, domain_module_1.DomainModule, app_routing_module_1.AppRoutingModule],
        declarations: [show_details_component_1.ShowDetailsComponent, navBar_component_1.NavBarComponent, crew_details_component_1.CrewDetailsComponent, create_account_component_1.CreateAccountComponent, cues_details_component_1.CuesDetailsComponent, home_page_component_1.HomePageComponent,
            docs_component_1.DocsComponent
        ],
        exports: [show_details_component_1.ShowDetailsComponent, navBar_component_1.NavBarComponent, crew_details_component_1.CrewDetailsComponent, create_account_component_1.CreateAccountComponent, cues_details_component_1.CuesDetailsComponent, home_page_component_1.HomePageComponent]
    })
], ShowModule);
exports.ShowModule = ShowModule;
//# sourceMappingURL=show.module.js.map