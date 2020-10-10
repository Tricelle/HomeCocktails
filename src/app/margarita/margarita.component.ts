import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../drinks.service';

@Component({
  selector: 'app-margarita',
  templateUrl: './margarita.component.html',
  styleUrls: ['./margarita.component.scss']
})
export class MargaritaComponent implements OnInit {

  margaritas: Object;

  constructor(private _drinks: DrinksService) { }

  ngOnInit(){
    this._drinks.getCocktails('margarita').subscribe((data: any) => {
      this.margaritas = data.drinks;
      console.log(this.margaritas);
    }
    );
  }

}
