import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CategoriaProductoService } from 'src/app/services/categoria-producto.service';

@Component({
  selector: 'app-lista-categoria-pr',
  templateUrl: './lista-categoria-pr.page.html',
  styleUrls: ['./lista-categoria-pr.page.scss'],
})
export class ListaCategoriaPrPage implements OnInit {
  categorias : any[];
  uidCategoria:string;
  

  constructor( private categoriaProductos:CategoriaProductoService,public router:Router) { }

  ngOnInit() {
    this.listaCategoriasPro();
  }


  async listaCategoriasPro(){
    await this.categoriaProductos.getCategoriaProducto().subscribe((respuesta:any)=>{
     
      this.categorias = respuesta;
      console.log( this.categorias);

    })
   
  }

  redirigir(uid:string){
    console.log(uid)
    let navigateExtras:NavigationExtras={
      queryParams:{uidCategoria:uid}

    };
    this.router.navigate(["/modificar-categoria-pr"],navigateExtras)
  }

  delete(uidCa:string){
    this.categoriaProductos.deleteCategoria(uidCa);
    this.router.navigate(["/lista-categoria-pr"])
    console.log("ELIMINADO")

  }
  
}
