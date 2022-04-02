import { Cliente } from "./Cliente"
import { DetalleFactura } from "./DetalleFactura"

class Factura {

    _letra: String
    _numero: Number
    _recargo: Number
    _tipoPago: String
    _totalItems: number
    _totalFinal: number
    _fecha: Date
    _cliente: Cliente
    _detalleFactura: Array<DetalleFactura>

    constructor(letra: String, numero: Number, recargo: Number, tipoPago: String, totalItems: number, totalFinal: number, fecha: Date, cliente?: Cliente, detalleFactura?: Array<DetalleFactura>){
        
        this._letra = letra
        this._numero = numero
        this._recargo = recargo
        this._tipoPago = tipoPago
        this._totalFinal = totalFinal
        this._totalItems = totalItems
        this._fecha = fecha
        this._cliente = cliente
        this._detalleFactura = detalleFactura

    }

    calcularTotalItems(){
        let cantidad:number = 0
        this._detalleFactura.forEach(detalle => {
            cantidad += detalle._cantidad
        })
        this._totalItems = cantidad
    }

    calcularTotalFinal(){
        let total:number = 0
        this._detalleFactura.forEach(detalle => {
            total += detalle._subTotal
        });
        this._totalFinal = total
    }

}

export {Factura}