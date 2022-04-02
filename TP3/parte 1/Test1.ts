import { Detalle } from './Detalle'
import { HojaRuta } from './HojaRuta'
import { Vehiculo } from './Vehiculo'


let det1 = new Detalle(10,15,10,15,10,15),
    det2 = new Detalle(20,28,20,28,20,28),
    det3 = new Detalle(65,98,65,98,65,98),
    det4 = new Detalle(25,36,25,39,25,36),
    det5 = new Detalle(15,47,15,47,15,47)

let detalles = [],
    detalles1 = [],
    detalles2 =[],
    hojasDeRuta = []

detalles.push(det1)
detalles.push(det2)
detalles.push(det3)

detalles1.push(det2)
detalles1.push(det3)
detalles1.push(det4)

detalles2.push(det3)
detalles2.push(det4)
detalles2.push(det5)

const hoja1 = new HojaRuta(new Date("2022-06-02"), 15, detalles)
const hoja2 = new HojaRuta(new Date("2022-06-02"), 65, detalles1)
const hoja3 = new HojaRuta(new Date("2022-06-02"), 123, detalles2)

hojasDeRuta.push(hoja1)
hojasDeRuta.push(hoja2)
hojasDeRuta.push(hoja3)

const vehiculo1 = new Vehiculo('asd123', 'Ford', 'Ka', hojasDeRuta)

hoja1.setVehiculo = vehiculo1;
hoja2.setVehiculo = vehiculo1;
hoja3.setVehiculo = vehiculo1;

console.log(vehiculo1.calcularTotalKilometrosRecorridos(new Date("2022-04-02"), new Date("2023-04-02")) + " KM recorridos")
