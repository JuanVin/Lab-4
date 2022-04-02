import { HojaRuta } from './HojaRuta'

class Vehiculo {

    private _patente: String
    private _marca: String
    private _modelo: String
    private _hojaRuta: Array<HojaRuta>

    constructor(patente: String, marca: String, modelo: String, hojaRuta?: Array<HojaRuta>){
        
        this._patente = patente 
        this._marca = marca
        this._modelo = modelo
        this._hojaRuta = hojaRuta

    }


    public get patente(){
        return this._patente
    }
    public get marca(){
        return this._marca
    }
    public get modelo(){
        return this._modelo
    }

    calcularTotalKilometrosRecorridos (fechaDesde: Date, fechaHasta: Date){
        let aux: number = 0;
        this._hojaRuta.forEach(ruta => {
            if(ruta.fecha >= fechaDesde && ruta.fecha <= fechaHasta){
                ruta.detalle.forEach(item => {
                    aux+= item.calcularTotalKilometros()
                });
            }
        });
        return aux
    }

}

export { Vehiculo }