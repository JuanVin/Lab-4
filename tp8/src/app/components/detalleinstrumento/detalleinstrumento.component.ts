import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServinstrumentoService } from 'src/app/servicio/servinstrumento.service';
import { instrumento } from 'src/modelo/instrumento';

@Component({
  selector: 'detalleinstrumento',
  templateUrl: './detalleinstrumento.component.html',
  styleUrls: ['./detalleinstrumento.component.css']
})
export class DetalleinstrumentoComponent implements OnInit {
  instru: instrumento = new instrumento;
  constructor(private serviinstrumento: ServinstrumentoService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params =>{
      this.serviinstrumento.getInstrumentoXIdFecth(params['id'])
      .subscribe((dataInstrumentos: { [x: string]: instrumento; }) => {
        for(let i in dataInstrumentos){
          console.log(dataInstrumentos[i]);
          this.instru=(dataInstrumentos[i]);
        }
        
      })
    }) 
  }

  ngOnInit(): void {
    
  }

}
