"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HojaRuta = void 0;
var HojaRuta = /** @class */ (function () {
    function HojaRuta(fecha, numero, detalle, vehiculo) {
        this._fecha = fecha;
        this._numero = numero;
        this._detalle = detalle;
        this._vehiculo = vehiculo;
    }
    Object.defineProperty(HojaRuta.prototype, "vehiculo", {
        get: function () {
            return this._vehiculo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HojaRuta.prototype, "detalle", {
        get: function () {
            return this._detalle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HojaRuta.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HojaRuta.prototype, "fecha", {
        get: function () {
            return this._fecha;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HojaRuta.prototype, "setVehiculo", {
        set: function (vehiculo) {
            this._vehiculo = vehiculo;
        },
        enumerable: false,
        configurable: true
    });
    return HojaRuta;
}());
exports.HojaRuta = HojaRuta;
