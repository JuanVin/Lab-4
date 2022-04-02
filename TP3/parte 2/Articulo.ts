import { DetalleFactura } from "./DetalleFactura"

class Articulo {
    _codigo: number
    _denominacion: String
    _precio: number
    _unidadMedida: String
    _detalleFactura: Array<DetalleFactura>

    constructor(codigo: number, denominacion: String, precio: number, unidadMedida: String, detalleFactura?: Array<DetalleFactura>){
        this._codigo = codigo
        this._denominacion = denominacion
        this._precio = precio
        this._unidadMedida = unidadMedida
        this._detalleFactura = detalleFactura
    }
}

export {Articulo}