// Un composant est une classe (logique du composant, propriétés et méthodes) + une vue (template)
import { Component } from '@angular/core';

// Utilisation de l'importation Component sous la forme d'un décorateur avec @ qui va permettre de construire un composant web
@Component({
  // selector permet de donner un nom (avec balise html personnalisée) au composant afin de l'identifier par la suite
  selector: 'app-root',
  // template permet de définir le code html
  templateUrl:'./app.component.html',
  styles: []
})
export class AppComponent {

}