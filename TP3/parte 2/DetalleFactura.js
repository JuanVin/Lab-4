"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleFactura = void 0;
var DetalleFactura = /** @class */ (function () {
    function DetalleFactura(cantidad, subTotal, factura, articulo) {
        this._cantidad = cantidad;
        this._subTotal = subTotal;
        this._factura = factura;
        this._articulo = articulo;
    }
    DetalleFactura.prototype.calcularSubTotal = function () {
        this._subTotal = this._cantidad * this._articulo._precio;
    };
    return DetalleFactura;
}());
exports.DetalleFactura = DetalleFactura;
