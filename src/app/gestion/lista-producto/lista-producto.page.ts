import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoriaProductoService } from 'src/app/services/categoria-producto.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.page.html',
  styleUrls: ['./lista-producto.page.scss'],
})
export class ListaProductoPage implements OnInit {

  uidC:string;
  productos : any[];


  constructor(private productoS:ProductoService ,public router:Router) { 

  }

  ngOnInit() {
    this.listaProducto();

  }

  async listaProducto(){
    await this.productoS.getProducto().subscribe((respuesta:any)=>{
     
      this.productos = respuesta;
      console.log( this.productos);

    })
   
  }

 

}