import { Factura } from "./Factura"

class Cliente {
    _numero: number
    _razonSocial: String
    _cuit: number
    _factura: Array<Factura>

    constructor(numero: number, razonSocial: String, cuit: number, factura?: Array<Factura>){
        this._numero = numero
        this._razonSocial = razonSocial
        this._cuit = cuit
        this._factura = factura
    }

    totalFacturadoXTipoPago(tipoPago: String): number{
        let total: number = 0
        this._factura.forEach(factura => {
            
            if (tipoPago === null){
                total += factura._totalFinal
            }
            else if (factura._tipoPago === tipoPago){
                total += factura._totalFinal
            }
        });
        return total
    }
}

export {Cliente}