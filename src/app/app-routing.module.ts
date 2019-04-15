import { TipoentidadComponent } from './pages/tipoentidad/tipoentidad.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonaNaturalComponent} from "./pages/persona-natural/persona-natural.component";
import {TipoComponent} from "./pages/tipo/tipo.component";
import { TipoproductoComponent } from './pages/tipoproducto/tipoproducto.component';

const routes: Routes = [
  {path :'tipo',component: TipoComponent},
  {path :'personanatural',component: PersonaNaturalComponent},
  {path :'tipoentidad',component: TipoentidadComponent},
  {path :'tipoproducto',component: TipoproductoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
