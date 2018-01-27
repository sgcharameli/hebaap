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
      productosPedido: [],
      importeTotal: 25
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'en-reparto',
      productosPedido: [],
      importeTotal: 14
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'entregado',
      productosPedido: [],
      importeTotal: 37
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'cancelado',
      productosPedido: [],
      importeTotal: 22
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'entregado',
      productosPedido: [],
      importeTotal: 19
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'entregado',
      productosPedido: [],
      importeTotal: 19
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'entregado',
      productosPedido: [],
      importeTotal: 19
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'entregado',
      productosPedido: [],
      importeTotal: 19
    },{
      identificador: 123456789,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'entregado',
      productosPedido: [],
      importeTotal: 19
    }];
  }
}    
