import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor(private drinks: HttpClient) { }

  getCocktails(drinksType:any){
    return this.drinks.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ drinksType);
  }


}
