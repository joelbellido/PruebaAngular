import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoComponent } from './pages/tipo/tipo.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonaNaturalComponent } from './pages/persona-natural/persona-natural.component';
import { TipoentidadComponent } from './pages/tipoentidad/tipoentidad.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TiposolicitudComponent } from './pages/tiposolicitud/tiposolicitud.component';
import { TipoproductoComponent } from './pages/tipoproducto/tipoproducto.component';
import { PagesComponent } from './pages/pages.component';
import { InsumoComponent } from './pages/insumo/insumo.component';
import { DialogoComponent } from './pages/tipoentidad/dialogo/dialogo.component';
import { FormsModule } from '@angular/forms';
import { TipoproductoDialogoComponent } from './pages/tipoproducto/tipoproducto-dialogo/tipoproducto-dialogo.component';

@NgModule({
  
  declarations: [
    AppComponent,
    TipoComponent,
    PersonaNaturalComponent,
    TipoentidadComponent,
    ContactoComponent,
    TiposolicitudComponent,
    TipoproductoComponent,
    PagesComponent,
    InsumoComponent,
    DialogoComponent,
    TipoproductoDialogoComponent
    
  ],
  entryComponents:[
    DialogoComponent,
    TipoproductoDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
