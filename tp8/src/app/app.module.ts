import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TarjetainstrumentoComponent } from './components/tarjetainstrumento/tarjetainstrumento.component';
import { DetalleinstrumentoComponent } from './components/detalleinstrumento/detalleinstrumento.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DondeestamosComponent } from './components/dondeestamos/dondeestamos.component';
import { IteminstrumentoComponent } from './components/iteminstrumento/iteminstrumento.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { KeysPipe } from './pipes/keys.pipe';
import { ServinstrumentoService } from './servicio/servinstrumento.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TarjetainstrumentoComponent,
    DetalleinstrumentoComponent,
    BuscadorComponent,
    DondeestamosComponent,
    IteminstrumentoComponent,
    KeysPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ServinstrumentoService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
