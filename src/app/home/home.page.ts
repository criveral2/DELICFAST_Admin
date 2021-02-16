
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { async } from '@angular/core/testing';
import { AutentificationService } from '../services/autentification.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  codigoUsuario : string;
 

  opciones={
    slidesPerView:2,
    freeMode:true,
    pagination:false
  }

  constructor(public router:Router, public autentificacion:AutentificationService) { }

  ngOnInit() {
  this.recuperarUsu();

  }

  async recuperarUsu(){
    await this.autentificacion.recuperarStorage().then((respuesta : string) => {
      this.codigoUsuario = respuesta;
      console.log("llego al home --------------------------------------"+ this.codigoUsuario);
    }).catch(error => {console.log(error)})

  }

  registrarCategoria(){
    this.router.navigate(["/categoria"]);
    
  }

  registrarProducto(){
    this.router.navigate(["/producto"]);
    
  }

    modificarEmpresa(){
    this.router.navigate(["/modif-admin"]);
    
  }
    listaPedidos(){
    this.router.navigate(["/modif-admin"]);
    
  }


}
