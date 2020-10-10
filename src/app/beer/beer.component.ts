import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../drinks.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  beers: Object;

  constructor(private _drinks: DrinksService) { }

  ngOnInit(){
    this._drinks.getCocktails('beer').subscribe((data: any) => {
      this.beers = data.drinks;
      console.log(this.beers);
    }
    );
  }

}
