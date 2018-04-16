import { Component, OnInit } from '@angular/core';
import {UserAdoService} from '../../service/user-ado.service';
import {NgForm} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import{Usuario}from "../../interface/usuarios.interface"

@Component({
  selector: 'app-editaruser',
  templateUrl: './editaruser.component.html',
  styleUrls: ['./editaruser.component.css']
})
export class EditaruserComponent implements OnInit {
  usuario:Usuario;
  id:string;
    constructor(private _userAdo:UserAdoService,
    private _activatedRoute:ActivatedRoute,
    private _router:Router) {
      this._activatedRoute.parent.params.subscribe(parametros=>{
        this.id=parametros['id']
      })
      this._userAdo.getUsuario(this.id).subscribe(data=>{
        this.usuario=data;
      })
      }
    ngOnInit() {
    }
    guardar(){
      this._userAdo.actualizarUsuario(this.usuario,this.id)
      .subscribe(data=>console.log(data),
                error=>console.log(error),
                ()=>this._router.navigate(['../Detalle'],{relativeTo:this._activatedRoute}))
    }


  }
