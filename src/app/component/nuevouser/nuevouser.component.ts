import { Component, OnInit } from '@angular/core';
import {UserAdoService} from '../../service/user-ado.service';
import {NgForm} from '@angular/forms';
import{Usuario}from "../../interface/usuarios.interface"
import {Router} from '@angular/router';

@Component({
  selector: 'app-nuevouser',
  templateUrl: './nuevouser.component.html',
  styleUrls: ['./nuevouser.component.css']
})
export class NuevouserComponent implements OnInit {
  usuario:Usuario={
    nombre:"",
    apellido:"",
    correo:"",
    id:""
  }
  constructor(private _userADO:UserAdoService, private router:Router) { }

  ngOnInit() {
  }
  nuevo(){
    this._userADO.nuevoUsuario(this.usuario).subscribe(data=>{},error=> console.log(error),
    ()=>this.router.navigate(['ListadoUsuarios']))
  }
}
