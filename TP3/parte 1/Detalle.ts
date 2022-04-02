import {HojaRuta} from './HojaRuta'

class Detalle {

    private _kmSalida: number
    private _kmRegreso: number
    private _horaSalida: number
    private _horaRegreso: number
    private _minutoSalida: number
    private _minutoRegreso: number
    private _hojaRuta: Array<HojaRuta>

    constructor(kmSalida: number, kmRegreso: number, horaSalida: number, horaRegreso: number, minutoSalida: number, minutoRegreso: number, hojaRuta?: Array<HojaRuta>){

        this._kmSalida = kmSalida
        this._kmRegreso  = kmRegreso
        this._horaSalida = horaSalida
        this._horaRegreso = horaRegreso
        this._minutoSalida = minutoSalida
        this._minutoRegreso = minutoRegreso
        this._hojaRuta = hojaRuta

    }

    public get hojaRuta(){
        return this._hojaRuta;
    }
    public get horaSalida(){
        return this._horaSalida;
    }
    public get horaRegreso(){
        return this._horaRegreso;
    }
    public get minutoSalida(){
        return this._minutoSalida;
    }
    public get minutoRegreso(){
        return this._minutoRegreso;
    }
    public calcularTotalKilometros(): number {
        return this._kmRegreso - this._kmSalida
    }
    
}

export { Detalle }