import { EffectsModule } from '@ngrx/effects';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { reducer as ShopReducer } from './store/reducer';
import { ShopEffect } from './store/effects';
import { GuitarComponent } from './guitar/guitar.component';
import { GuitarsListComponent } from './guitars-list/guitars-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GuitarComponent,
    GuitarsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ shop: ShopReducer }),
    environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 30, logOnly: environment.production }),
    EffectsModule.forRoot([ShopEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
