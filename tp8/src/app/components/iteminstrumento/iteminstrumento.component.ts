import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { instrumento } from 'src/modelo/instrumento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iteminstrumento',
  templateUrl: './iteminstrumento.component.html',
  styleUrls: ['./iteminstrumento.component.css']
})
export class IteminstrumentoComponent implements OnInit {

  @Input() instrumentoaux: instrumento = new instrumento;  //el @input indica que el valor de la variable viene de afuera del componente actual
  @Input() index: number | undefined;
  @Output() instrumentoSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.instrumentoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }
  public verInstrumento() {
    console.log(this.index);
    this.instrumentoSeleccionado.emit(this.index);
  }

}
