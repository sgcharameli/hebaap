import { Component } from '@angular/core';

/**
 * Generated class for the ProductoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'producto',
  templateUrl: 'producto.html'
})
export class ProductoComponent {

  text: string;

  constructor() {
    console.log('Hello ProductoComponent Component');
    this.text = 'Hello World';
  }

}
