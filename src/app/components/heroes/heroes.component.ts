import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  // defines the private heroService parameter and inject the
  // HeroService (singleton) service to the heroes component
  // constructor serves to the single initialization purposes
  constructor(private heroService: HeroService) {}

  // This lifecycle method can be used to do complicated actions
  // as so call service's methods
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService
      .addHero({ name } as Hero)
      .subscribe((hero) => this.heroes.push(hero));
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h.id !== hero.id);
    this.heroService.deleteHero(hero).subscribe();
  }
}
