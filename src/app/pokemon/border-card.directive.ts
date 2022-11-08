// HostListener : permet de lier une méthode de notre directive à un événement donné
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  // Déclaration de propriétés
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  // ElementRef est une référence vers l'élément du Dom sur lequel on va appliquer la directive
  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('pkmnBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  // Création de méthodes
  private setHeight(height: number) {
    // nativeElement permet d'accéder réellement à l'élément natif du Dom sur lequel la directive sera appelée
    this.el.nativeElement.style.height = height + 'px';
  }

  private setBorder(color: string) {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }

}
