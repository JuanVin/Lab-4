"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(numero, razonSocial, cuit, factura) {
        this._numero = numero;
        this._razonSocial = razonSocial;
        this._cuit = cuit;
        this._factura = factura;
    }
    Cliente.prototype.totalFacturadoXTipoPago = function (tipoPago) {
        var total = 0;
        this._factura.forEach(function (factura) {
            if (tipoPago === null) {
                total += factura._totalFinal;
            }
            else if (factura._tipoPago === tipoPago) {
                total += factura._totalFinal;
            }
        });
        return total;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
