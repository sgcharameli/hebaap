import { Producto } from './../../model/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductosProvider Provider');
  }

  obtenerProductos(): Producto[] {
    return [{
      nombre: 'Miel de Soria',
      stock: 37,
      origen: 'Soria',
      precio: 4.5,
      miniatura: 'assets/img/heba-alto-tajo.jpeg',
      pesoNeto: 600
    },{
      nombre: 'Miel de Esplegares',
      stock: 12,
      origen: 'Guadalajara',
      precio: 4.5,
      miniatura: 'assets/img/advance-card-tmntr.jpg',
      pesoNeto: 600
    }];
  }
}
