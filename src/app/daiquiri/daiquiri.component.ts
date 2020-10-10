import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../drinks.service';

@Component({
  selector: 'app-daiquiri',
  templateUrl: './daiquiri.component.html',
  styleUrls: ['./daiquiri.component.scss']
})
export class DaiquiriComponent implements OnInit {

  daiquiris: Object;

  constructor(private _drinks: DrinksService) { }

  ngOnInit(){
    this._drinks.getCocktails('Daiquiri').subscribe((data: any) => {
      this.daiquiris = data.drinks;
      console.log(this.daiquiris);
    }
    );
  }


}
