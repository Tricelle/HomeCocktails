import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MargaritaComponent } from './margarita/margarita.component';

import { MDBBootstrapModulesPro, CardsModule } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
// Angular Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeerComponent } from './beer/beer.component';
import { DaiquiriComponent } from './daiquiri/daiquiri.component';
import { VodkaComponent } from './vodka/vodka.component';
import { MartiniComponent } from './martini/martini.component';
import { SubscriptionComponent } from './subscription/subscription.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MargaritaComponent,
    BeerComponent,
    DaiquiriComponent,
    VodkaComponent,
    MartiniComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CardsModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [
    MDBSpinningPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
