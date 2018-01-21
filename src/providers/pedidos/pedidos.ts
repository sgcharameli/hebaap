import { Pedido } from './../../model/Pedido';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PedidosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PedidosProvider Provider');
  }

  obtenerPedidos(): Pedido[] {
    return [{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: null,
      estado: 'en-preparacion',
      productos: [],
      importe: 25
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'en-reparto',
      productos: [],
      importe: 14
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'entregado',
      productos: [],
      importe: 37
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'cancelado',
      productos: [],
      importe: 22
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'entregado',
      productos: [],
      importe: 19
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'entregado',
      productos: [],
      importe: 19
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'entregado',
      productos: [],
      importe: 19
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'entregado',
      productos: [],
      importe: 19
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'entregado',
      productos: [],
      importe: 19
    }];
  }
}    
