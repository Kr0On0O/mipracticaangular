import { Injectable } from '@angular/core';
import {Usuario} from '../interface/usuarios.interface';
import {Http,Headers} from '@angular/http';
import 'rxjs/Rx'
@Injectable()
export class UserAdoService {
  usuariosURL:string="https://miproyectangular.firebaseio.com/usuarios.json"
  usuarioURL:string="https://miproyectangular.firebaseio.com/usuarios"

  constructor(private http:Http) { }

  getUsuario(key$:string){
   let URL=`${this.usuarioURL}/${key$}.json`;
   return this.http.get(URL).map(res=>res.json())
  }

  getUsuarios(){
    return this.http.get(this.usuariosURL).map(res=>res.json())
  }

  actualizarUsuario(usuario:Usuario,key$:string){
  let body=JSON.stringify(usuario);
  let headers=new Headers({
    'Content-Type':'application/json'
  })
  let url=`${this.usuarioURL}/${key$}.json`;
  return this.http.put(url,body,{headers})
  .map(res=>{
    return res.json()
  })

}
deleteUsuario(key$:string){
let url=`${this.usuarioURL}/${key$}.json`;
return this.http.delete(url).map(res=>res.json())
}

nuevoUsuario(usuario:Usuario){
let body=JSON.stringify(usuario);
let headers=new Headers({
  'Content-Type':'application/json'
})
return this.http.post(this.usuariosURL,body,{headers})
.map(res=>{
  console.log(res.json())
  return res.json();
})
}
}
