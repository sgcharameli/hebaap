import { Direccion } from './../../model/Direccion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DireccionesEntregaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DireccionesEntregaProvider Provider');
  }

  obtenerDireccionesEntrega(): Direccion[] {
    return [{
      nombre: 'Sanitas',
      poblacion: 'Madrid',
      provincia: 'Madrid'
    },
    {
      nombre: 'Soria',
      poblacion: 'Soria',
      provincia: 'Soria'
    },
    {
      nombre: 'Esplegares',
      poblacion: 'Esplegares',
      provincia: 'Guadalajara'
    }]
  }
}
