"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factura = void 0;
var Factura = /** @class */ (function () {
    function Factura(letra, numero, recargo, tipoPago, totalItems, totalFinal, fecha, cliente, detalleFactura) {
        this._letra = letra;
        this._numero = numero;
        this._recargo = recargo;
        this._tipoPago = tipoPago;
        this._totalFinal = totalFinal;
        this._totalItems = totalItems;
        this._fecha = fecha;
        this._cliente = cliente;
        this._detalleFactura = detalleFactura;
    }
    Factura.prototype.calcularTotalItems = function () {
        var cantidad = 0;
        this._detalleFactura.forEach(function (detalle) {
            cantidad += detalle._cantidad;
        });
        this._totalItems = cantidad;
    };
    Factura.prototype.calcularTotalFinal = function () {
        var total = 0;
        this._detalleFactura.forEach(function (detalle) {
            total += detalle._subTotal;
        });
        this._totalFinal = total;
    };
    return Factura;
}());
exports.Factura = Factura;
