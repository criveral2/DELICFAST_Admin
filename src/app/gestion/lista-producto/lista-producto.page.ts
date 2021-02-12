import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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
  uidP:string;
  productos : any[];


  constructor(private productoS:ProductoService ,public router:Router,private rout:ActivatedRoute) {
    this.rout.queryParams.subscribe(result=>{
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.uidC=this.router.getCurrentNavigation().extras.queryParams.uidCategoria;
        console.log(this.uidC);
      }
    }) 

  }

  ngOnInit() {
    this.listaProducto();

  }

  async listaProducto(){
    await this.productoS.getProductosCat(this.uidC).subscribe((respuesta:any)=>{
     
      this.productos = respuesta;
      console.log( this.productos);
      console.log("LLEGA AL PRODUCTOS")

    })
   
  }

  redirigir2(uidP:string ,uidCat: string){

    console.log(uidP,"Llego al redirigir Del modificar")
    let navigateExtras:NavigationExtras={
      queryParams:{uidC:uidCat,uidP:uidP}

    };
    this.router.navigate(["/modificar-producto"],navigateExtras)
  }

  delete(uidCat:string,uidPro:string){
    this.productoS.deleteProducto(uidCat,uidPro);
    this.router.navigate(["/lista-categoria-pr"])
    console.log("ELIMINADO")

  }
 

}
