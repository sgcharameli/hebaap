import { Producto } from './Producto';

export interface Pedido {
    identificador: number;
    fechaPedido: Date;
    fechaPrevistaEntrega: Date;
    fechaEntrega: Date;
    estado: string;
    productos: Producto[];
    importe: number;
}