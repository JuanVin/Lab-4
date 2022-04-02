"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./Cliente");
var Factura_1 = require("./Factura");
var DetalleFactura_1 = require("./DetalleFactura");
var Articulo_1 = require("./Articulo");
var cliente = new Cliente_1.Cliente(25, "ni idea", 20376981238);
var art1 = new Articulo_1.Articulo(1, "PC", 100000, "pesos"), art2 = new Articulo_1.Articulo(2, "Play", 50000, "pesos"), art3 = new Articulo_1.Articulo(3, "Escritorio", 12000, "pesos"), art4 = new Articulo_1.Articulo(4, "Ventilador", 5000, "pesos"), art5 = new Articulo_1.Articulo(5, "Sillón", 8000, "pesos"), articulos = [art1, art2, art3, art4, art5], fac1 = new Factura_1.Factura("A", 10, 456, "E", null, null, new Date("2022-04-02"), cliente), fac2 = new Factura_1.Factura("C", 20, 200, "TD", null, null, new Date("2022-05-02"), cliente), fac3 = new Factura_1.Factura("A", 15, 500, "E", null, null, new Date("2022-02-02"), cliente), facturas = [fac1, fac2, fac3], detFac = new DetalleFactura_1.DetalleFactura(5, null, fac1, art1), detFac2 = new DetalleFactura_1.DetalleFactura(3, null, fac1, art3), detallesFac = [detFac, detFac2];
fac1._detalleFactura = detallesFac;
fac2._detalleFactura = detallesFac;
fac3._detalleFactura = detallesFac;
cliente._factura = facturas;
articulos.forEach(function (articulo) {
    articulo._detalleFactura = detallesFac;
});
detallesFac.forEach(function (detalle) {
    detalle.calcularSubTotal();
});
facturas.forEach(function (factura) {
    factura.calcularTotalFinal();
    factura.calcularTotalItems();
    console.log("\"Total final factura N\u00B0 ".concat(factura._numero, ": ").concat(factura._totalFinal, "\""));
    console.log("\"Total items factura N\u00B0 ".concat(factura._numero, ": ").concat(factura._totalItems, "\""));
});
console.log(cliente.totalFacturadoXTipoPago("E"));
