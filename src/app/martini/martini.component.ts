import { Component, OnInit } from '@angular/core';
import { DrinksService } from "../drinks.service"

@Component({
  selector: 'app-martini',
  templateUrl: './martini.component.html',
  styleUrls: ['./martini.component.scss']
})
export class MartiniComponent implements OnInit {

  martinis: Object;

  constructor(private _drinks: DrinksService) { }


  ngOnInit() {
    this._drinks.getCocktails('martini').subscribe((data: any) => {
      this.martinis = data.drinks;
      console.log(this.martinis);
    }
    );
  }
}
