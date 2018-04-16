import { Component, OnInit } from '@angular/core';
import {UserAdoService} from '../../service/user-ado.service';
import {NgForm} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import{Usuario}from "../../interface/usuarios.interface"

@Component({
  selector: 'app-detalleuser',
  templateUrl: './detalleuser.component.html',
  styleUrls: ['./detalleuser.component.css']
})
export class DetalleuserComponent implements OnInit {
  usuario:Usuario;
  key$:string;
    constructor(private _userAdo:UserAdoService,
    private _activatedRoute:ActivatedRoute,
    private _router:Router) {
      this._activatedRoute.parent.params.subscribe(parametros=>{
        this.key$=parametros['id']
        console.log(this.key$)
      })
      this._userAdo.getUsuario(this.key$).subscribe(data=>{
        console.log(data)
        this.usuario=data;
      })
      }
    ngOnInit() {
    }

  }
