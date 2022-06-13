import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServinstrumentoService } from 'src/app/servicio/servinstrumento.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  instrumentosArr:any[] = [];
  termino:string | undefined

  constructor(private serviinstrumento: ServinstrumentoService, private router:Router, private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.termino = params['termino'];
      //this.instrumentosArr = this.serviinstrumento.buscarInstrumentos(params['termino']);
    });
  }
  public verInstrumento(idx:string){
    this.router.navigate(['/detalleinstrumento', idx]) 
  }

}
