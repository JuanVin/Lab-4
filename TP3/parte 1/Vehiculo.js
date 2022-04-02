"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, marca, modelo, hojaRuta) {
        this._patente = patente;
        this._marca = marca;
        this._modelo = modelo;
        this._hojaRuta = hojaRuta;
    }
    Object.defineProperty(Vehiculo.prototype, "patente", {
        get: function () {
            return this._patente;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        enumerable: false,
        configurable: true
    });
    Vehiculo.prototype.calcularTotalKilometrosRecorridos = function (fechaDesde, fechaHasta) {
        var aux = 0;
        this._hojaRuta.forEach(function (ruta) {
            if (ruta.fecha >= fechaDesde && ruta.fecha <= fechaHasta) {
                ruta.detalle.forEach(function (item) {
                    aux += item.calcularTotalKilometros();
                });
            }
        });
        return aux;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
