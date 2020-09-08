import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import {HEROES} from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  heroes =HEROES;
  hero: Hero = {
    id: 1,
    name: 'Zilola',
    lastName: 'Matasimova'
  };

  className = "blue-button";
  inputType = "textarea";

  constructor() { }
  
  ngOnInit(): void {
  }

}
