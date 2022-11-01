import { Component } from '@angular/core';

// Utilisation de l'importation Component sous la forme d'un décorateur avec @ qui va permettre de construire un composant web
@Component({
  // selector permet de donner un nom (avec balise html personnalisée) au composant afin de l'identifier par la suite
  selector: 'app-root',
  // template permet de définir le code html
  template: `
      <h1>
        Welcome to {{title}}!
      </h1>
  `,
  styles: []
})
export class AppComponent {
  // déclaration de propriétés
  title = 'ng-pokemon-app';
}
