"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var in_memory_service_1 = require("./in-memory.service");
var http_1 = require("@angular/common/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var show_module_1 = require("./show/show.module");
var show_service_1 = require("./show.service");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing/app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, show_module_1.ShowModule, app_routing_module_1.AppRoutingModule,
            http_1.HttpClientModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forFeature(in_memory_service_1.MemoryService)],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [show_service_1.ShowService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map