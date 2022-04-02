"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articulo = void 0;
var Articulo = /** @class */ (function () {
    function Articulo(codigo, denominacion, precio, unidadMedida, detalleFactura) {
        this._codigo = codigo;
        this._denominacion = denominacion;
        this._precio = precio;
        this._unidadMedida = unidadMedida;
        this._detalleFactura = detalleFactura;
    }
    return Articulo;
}());
exports.Articulo = Articulo;
