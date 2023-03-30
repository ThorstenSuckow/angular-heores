import { Injectable } from '@angular/core';
import {Hero} from "./Hero";
import {HEROES} from "./mock-heroes";
import {MessageService} from "./message.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("Paging all Heroes...");
    const heroes = of(HEROES);
    this.messageService.add("Heroes have assembled!");
    return heroes;
  }

}
