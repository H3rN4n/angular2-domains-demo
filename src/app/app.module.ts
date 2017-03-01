import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NotFoundPageComponent } from './components/not-found/not-found-page.component';
import { LandingComponent } from './components/landing/landing.component';

import { AppRoutingModule } from './app-routing.module';
import { reducer } from './app.reducer';
import { AppComponent } from './app.component';

import { AppEffects } from './domain';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    LandingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    //RouterStoreModule.connectRouter(),
    EffectsModule.run(AppEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
