"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Detalle = void 0;
var Detalle = /** @class */ (function () {
    function Detalle(kmSalida, kmRegreso, horaSalida, horaRegreso, minutoSalida, minutoRegreso, hojaRuta) {
        this._kmSalida = kmSalida;
        this._kmRegreso = kmRegreso;
        this._horaSalida = horaSalida;
        this._horaRegreso = horaRegreso;
        this._minutoSalida = minutoSalida;
        this._minutoRegreso = minutoRegreso;
        this._hojaRuta = hojaRuta;
    }
    Object.defineProperty(Detalle.prototype, "hojaRuta", {
        get: function () {
            return this._hojaRuta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Detalle.prototype, "horaSalida", {
        get: function () {
            return this._horaSalida;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Detalle.prototype, "horaRegreso", {
        get: function () {
            return this._horaRegreso;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Detalle.prototype, "minutoSalida", {
        get: function () {
            return this._minutoSalida;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Detalle.prototype, "minutoRegreso", {
        get: function () {
            return this._minutoRegreso;
        },
        enumerable: false,
        configurable: true
    });
    Detalle.prototype.calcularTotalKilometros = function () {
        return this._kmRegreso - this._kmSalida;
    };
    return Detalle;
}());
exports.Detalle = Detalle;
