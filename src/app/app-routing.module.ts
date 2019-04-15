import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoComponent } from './pages/tipo/tipo.component';

const routes: Routes = [
  {path :'tipo',component: TipoComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
