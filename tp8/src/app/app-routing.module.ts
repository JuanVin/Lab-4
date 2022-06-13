import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TarjetainstrumentoComponent } from './components/tarjetainstrumento/tarjetainstrumento.component';
import { DetalleinstrumentoComponent } from './components/detalleinstrumento/detalleinstrumento.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tarjetainstrumento', component: TarjetainstrumentoComponent },
  { path: 'detalleinstrumento/:id', component: DetalleinstrumentoComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
