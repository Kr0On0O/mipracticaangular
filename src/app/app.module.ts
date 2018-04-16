import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {app_routing} from './app.routes';

import{UserAdoService} from './service/user-ado.service'

import { AppComponent } from './app.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { DetalleuserComponent } from './component/detalleuser/detalleuser.component';
import { EditaruserComponent } from './component/editaruser/editaruser.component';
import { ObtenerkeysPipe } from './pipes/obtenerkeys.pipe';
import { TrabajouserComponent } from './component/trabajouser/trabajouser.component';
import { NuevouserComponent } from './component/nuevouser/nuevouser.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    DetalleuserComponent,
    EditaruserComponent,
    ObtenerkeysPipe,
    TrabajouserComponent,
    NuevouserComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule,
    FormsModule
  ],
  providers: [UserAdoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
