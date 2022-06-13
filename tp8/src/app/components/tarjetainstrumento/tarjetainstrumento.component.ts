import { Component, OnInit } from '@angular/core';
import { ServinstrumentoService } from 'src/app/servicio/servinstrumento.service';
import { Router } from '@angular/router';
import { instrumento } from 'src/modelo/instrumento';

@Component({
  selector: 'tarjetainstrumento',
  templateUrl: './tarjetainstrumento.component.html',
  styleUrls: ['./tarjetainstrumento.component.css']
})
export class TarjetainstrumentoComponent implements OnInit {

  instrumentosArr:instrumento[] = [];
  loading=true;
  
  //al instanciar el componente se llama al servicio
  constructor(private serviinstrumento: ServinstrumentoService, private router:Router) { }

  ngOnInit(): void {
    this.serviinstrumento.getInstrumentos() 
    .subscribe((dataInstrumentos: { [x: string]: instrumento; }) => {
      for(let instrumento in dataInstrumentos){
        console.log(dataInstrumentos[instrumento]);
        this.instrumentosArr.push(dataInstrumentos[instrumento]);
      }
      this.loading=false;
    })
  }
  
  public verInstrumento(idx:number){
    console.log("ID INSTRUMENTO " + idx);
    this.router.navigate(['/detalleinstrumento', idx]) 
  }
}
