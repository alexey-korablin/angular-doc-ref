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
  selectedHero: Hero;
  heroes: Hero[];

  // defines the private heroService parameter and inject the
  // HeroService (singleton) service to the heroes component
  // constructor serves to the single initialization purposes
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  // This lifecycle method can be used to do complicated actions
  // as so call service's methods
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Hero service: selected hero id=${hero.id}`);
  }
}
