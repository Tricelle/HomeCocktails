import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MargaritaComponent } from './margarita/margarita.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { BeerComponent } from './beer/beer.component';
import { DaiquiriComponent } from './daiquiri/daiquiri.component';
import { VodkaComponent } from './vodka/vodka.component';
import { MartiniComponent } from './martini/martini.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'margaritas', component:MargaritaComponent},
  { path: 'subscription', component:SubscriptionComponent},
  { path: 'beers', component:BeerComponent},
  { path: 'daiquiris', component:DaiquiriComponent},
  { path: 'vodkas', component:VodkaComponent},
  { path: 'martini', component:MartiniComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
