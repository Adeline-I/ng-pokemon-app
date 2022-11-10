import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// HttpClientModule : Permet de requêter des serveurs distants
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  // List de tout les composants, les directives, les pipes qui appartiennent au module
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  // Déclarations de tout les éléments dont on a besoin d'importer et qui sont d'autres modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    PokemonModule,
    AppRoutingModule
  ],
  // Permet d'utiliser le système d'injection d'angular
  providers: [

  ],
  // Il s'agit du composant racine. Permet de dire à angular quel est le premier composant qui doit démarer lorsque l'utilisateur charge l'application dans son navigateur
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
