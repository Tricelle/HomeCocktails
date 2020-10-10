import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../drinks.service';

@Component({
  selector: 'app-vodka',
  templateUrl: './vodka.component.html',
  styleUrls: ['./vodka.component.scss']
})
export class VodkaComponent implements OnInit {

  vodkas: Object;

  constructor(private _drinks: DrinksService) { }

  ngOnInit(){
    this._drinks.getCocktails('vodka').subscribe((data: any) => {
      this.vodkas = data.drinks;
      console.log(this.vodkas);
    }
    );
  }

}
