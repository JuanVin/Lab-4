
import {Vehiculo} from './Vehiculo'
import {Detalle} from './Detalle'

class HojaRuta{

    private _fecha: Date
    private _numero: number
    private _detalle: Array<Detalle>
    private _vehiculo: Vehiculo

    constructor(fecha: Date, numero: number, detalle?: Array<Detalle>, vehiculo?: Vehiculo){

        this._fecha = fecha
        this._numero = numero
        this._detalle = detalle
        this._vehiculo = vehiculo

    }

    public get vehiculo(){
        return this._vehiculo
    }
    public get detalle(){
        return this._detalle
    }
    public get numero(){
        return this._numero
    }
    public get fecha(){
        return this._fecha
    }
    public set setVehiculo(vehiculo:Vehiculo){
        this._vehiculo = vehiculo
    }

}

export { HojaRuta }