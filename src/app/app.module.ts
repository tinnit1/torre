import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './store/app.reducer';
import {effectsArray} from './store/effects';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment.prod';
import {RouterModule} from '@angular/router';
import {PagesModule} from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    // modulos independientes
    PagesModule,
    // modulos NgRx
    // este modulo instancia y carga los reducers que esten en appReducers.
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(effectsArray),
    // modulo para herramientas de desarrollo.
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
