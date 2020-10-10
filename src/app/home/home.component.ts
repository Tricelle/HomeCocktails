import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../drinks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

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
