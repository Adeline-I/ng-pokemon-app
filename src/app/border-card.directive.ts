// HostListener : permet de lier une méthode de notre directive à un événement donné
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  // ElementRef est une référence vers l'élément du Dom sur lequel on va appliquer la directive
  constructor(private el: ElementRef) { 
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  @Input('pkmnBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || '#009688');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  // Création de méthodes
  setHeight(height: number) {
    // nativeElement permet d'accéder réellement à l'élément natif du Dom sur lequel la directive sera appelée
    this.el.nativeElement.style.height = height + 'px';
  }

  setBorder(color: string) {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }

}
