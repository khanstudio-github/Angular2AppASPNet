﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/components/hero/views/dashboard.component.html',
    styleUrls: ['app/components/hero/css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero) {
        let link = ['/hero/detail', hero.id];
        this.router.navigate(link);
    }
}
