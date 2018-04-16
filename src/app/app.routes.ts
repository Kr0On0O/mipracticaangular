import { RouterModule, Routes } from '@angular/router';
import {UsuariosComponent} from './component/usuarios/usuarios.component';
import {DetalleuserComponent} from './component/detalleuser/detalleuser.component';
import {EditaruserComponent} from './component/editaruser/editaruser.component';
import {TrabajouserComponent} from './component/trabajouser/trabajouser.component';
import {NuevouserComponent} from './component/nuevouser/nuevouser.component';
const app_routes: Routes = [
  { path: 'ListadoUsuarios', component: UsuariosComponent },
  { path: 'Opciones/:id', component:TrabajouserComponent,
    children:[
  { path: 'Detalle', component:DetalleuserComponent},
  { path: 'Editar', component:EditaruserComponent},
    { path: '', pathMatch:'full',redirectTo:'Detalle' }
      ]},
  { path: 'Nuevo', component: NuevouserComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'ListadoUsuarios' }
];

export const app_routing = RouterModule.forRoot(app_routes);
