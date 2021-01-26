
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  opciones={
    slidesPerView:2,
    freeMode:true,
    pagination:false
  }

  constructor(public route:Router) { }

  ngOnInit() {
  }

  registrarCategoria(){
    this.route.navigate(["/categoria"]);
    
  }

  registrarProducto(){
    this.route.navigate(["/producto"]);
    
  }

    modificarEmpresa(){
    this.route.navigate(["/modif-admin"]);
    
  }



}
