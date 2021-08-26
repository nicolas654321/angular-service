import { Injectable} from "@angular/core";

import { Cocktail } from "./Cocktail";

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  cocktails: Cocktail[] = [
    {
      name:'morito',
      price:7,
      img:'imgMorito.jpg'
    },
    {
      name:'martini-gin',
      price:8,
      img:'imgMG.jpg'
    },
    {
      name:'cardinal',
      price:6,
      img:'imgCard.jpg'
    }
  ];

  constructor() { }

  public getCocktails() {

    return this.cocktails;
  }

}
