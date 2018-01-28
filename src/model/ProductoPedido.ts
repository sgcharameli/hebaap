import { Descuento } from './Descuento';

export interface ProductoPedido {
    identificadorProducto: number;
    identificadorPedido: number;
    nombreProducto: string;
    importeUnidad: number;
    miniatura: string;
    importeTotalProductos: number;
    cantidadPedida: number;
    descuento: Descuento;
}