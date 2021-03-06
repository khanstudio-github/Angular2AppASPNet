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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var dragon_service_1 = require('../../services/dragon.service');
var DragonListComponent = (function () {
    function DragonListComponent(router, dragonService) {
        this.router = router;
        this.dragonService = dragonService;
        this.title = 'Dragon List';
        this.dragonList = [];
    }
    DragonListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dragonService.getDragons()
            .then(function (dragon) { return _this.dragonList = dragon; });
    };
    //ngOnInit() {
    //    this.dragonService.getHeroes()
    //        .subscribe(
    //        heroes => this.dragonList = heroes,
    //            error => this.errorMessage = <any>error
    //        )
    //        //.then(dragon => this.dragonList = dragon);
    //}
    DragonListComponent.prototype.showDetails = function (dragon) {
        //let link = ['/hero/detail', hero.id];
        //this.router.navigate(link);
    };
    DragonListComponent = __decorate([
        core_1.Component({
            selector: 'dragon-list',
            templateUrl: 'app/components/dragon/views/dragon-list.component.html',
            styleUrls: ['app/components/dragon/css/dragon-list.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, dragon_service_1.DragonService])
    ], DragonListComponent);
    return DragonListComponent;
}());
exports.DragonListComponent = DragonListComponent;
//# sourceMappingURL=dragon-list.component.js.map