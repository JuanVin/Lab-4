import { Factura } from "./Factura"
import { Articulo } from "./Articulo"

class DetalleFactura{

    _cantidad: number
    _subTotal: number
    _factura: Factura
    _articulo: Articulo

    constructor(cantidad: number, subTotal: number, factura?: Factura, articulo?: Articulo){

        this._cantidad = cantidad
        this._subTotal = subTotal
        this._factura = factura
        this._articulo = articulo

    }

    calcularSubTotal(){
        this._subTotal = this._cantidad * this._articulo._precio
    }

}

export {DetalleFactura}