import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { instrumento } from 'src/modelo/instrumento';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServinstrumentoService {

  //  instrumentosFile: any = (data as any).default;
  public instrumentosData: instrumento[] = [];
  public instrumentoencontrado: instrumento = new instrumento();

  constructor(public http: HttpClient) {
    console.log("Servicio Cargado!!!");

  }
  public getInstrus():any[]{
    return this.instrumentosData;
    console.log(this.instrumentosData);
  }

  public getInstrumentoXId(idx:number):any{
      for(let instrumento of this.instrumentosData){
          if(instrumento.id == idx){
            return instrumento;
          }
      }
  }
  //lee todos los instrumentos
  getInstrumentos():any {
    return this.http.get("http://localhost:3000/instrumentos").pipe(
      map(instrumentosData => instrumentosData));
  }
  //busca un instrumento por el id
  getInstrumentoXIdFecth(idx: string):any {
    return this.http.get("http://localhost:3000/instrumentos/" + idx).pipe(
      map(instrumentoencontrado => instrumentoencontrado));
  }
  //busca los instrumentos por un terminode busqueda
  getInstrumentosBusquedaFromDataBase(termino: string) {
    return this.http.get("http://localhost:3000/api/buscar/" + termino).pipe(
      map(platosSearch => platosSearch));
  }
  
  getPlatosFromDataBaseServlet() {
    return this.http.get("http://localhost:3000/WebAppServer/RestoServlet?action = listar").pipe(
     map(instrumentosData => instrumentosData));
  }
  
  getPlatoEnBaseDatosXIdServlet(idx: string) {
    return this.http.get("http://localhost:3000/WebAppServer/RestoServlet?action = buscar & idPlato=" + idx).pipe(
     map(instrumentoencontrado => instrumentoencontrado));
  }
  
 getPlatosBusquedaFromDataBaseServlet (termino:string){
  return this.http.get("http://localhost:3000/WebAppServer/RestoServlet?action=busqueda&termino=" + termino).pipe(
  map( instrumentosSearch => instrumentosSearch));
  }
}
