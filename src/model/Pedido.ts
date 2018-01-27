import { ProductoPedido } from './ProductoPedido';

export interface Pedido {
    usuario: string;
    identificador: number;
    fechaPedido: Date;
    fechaPrevistaEntrega: Date;
    fechaEntrega: Date;
    estado: string;
    productosPedido: ProductoPedido[];
    importeTotal: number;
}