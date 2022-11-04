import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';

@NgModule({
  // List de tout les composants, les directives, les pipes qui appartiennent au module
  declarations: [
    AppComponent,
    BorderCardDirective
  ],
  // Déclarations de tout les éléments dont on a besoin d'importer et qui sont d'autres modules
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Permet d'utiliser le sysyème d'injection d'angular
  providers: [],
  // Il s'agit du composant racine. Permet de dire à angular quel est le premier composant qui doit démarer lorsque l'utilisateur charge l'application dans son navigateur
  bootstrap: [AppComponent]
})
export class AppModule { }
