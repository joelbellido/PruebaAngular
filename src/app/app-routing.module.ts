import { InsumoEdicionComponent } from './pages/insumo/insumo-edicion/insumo-edicion.component';
import { InsumoComponent } from './pages/insumo/insumo.component';
import { MarcaComponent } from './pages/marca/marca.component';
import { ProveedorinsumoComponent } from './pages/proveedorinsumo/proveedorinsumo.component';
import { TipoentidadComponent } from './pages/tipoentidad/tipoentidad.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonaNaturalComponent} from "./pages/persona-natural/persona-natural.component";


const routes: Routes = [
  {path :'personanatural',component: PersonaNaturalComponent},
  {path :'tipoentidad',component: TipoentidadComponent},
  {path :'proveedorinsumo',component:ProveedorinsumoComponent},
  {path :'marca',component:MarcaComponent},
  {path :'insumo',component:InsumoComponent , children:[
    {path :'nuevo',component:InsumoEdicionComponent},
    {path :'edicion/:id',component:InsumoEdicionComponent}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
