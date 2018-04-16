import { Component, OnInit } from '@angular/core';
import {UserAdoService} from '../../service/user-ado.service';
import {Usuario} from '../../interface/usuarios.interface';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[]=[];


  constructor(private _userAdo:UserAdoService) {
    this._userAdo.getUsuarios().subscribe(data=>{
        console.log(data);
      this.usuarios=data;
    })

   }

  ngOnInit() {
  }
  borrarUser(key$:string){
    this._userAdo.deleteUsuario(key$).subscribe(respuesta=>{
      console.log(respuesta)
      if(respuesta){
        console.error(respuesta);

      }else{
        delete this.usuarios[key$];
      }
    },
    error=>console.log(error),
    ()=>window.location.reload(true))

  }


}
