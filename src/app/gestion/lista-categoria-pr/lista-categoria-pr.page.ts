import { Component, OnInit } from '@angular/core';
import { CategoriaProductoService } from 'src/app/services/categoria-producto.service';

@Component({
  selector: 'app-lista-categoria-pr',
  templateUrl: './lista-categoria-pr.page.html',
  styleUrls: ['./lista-categoria-pr.page.scss'],
})
export class ListaCategoriaPrPage implements OnInit {
  categorias : any[];
  

  constructor( private categoriaProductos:CategoriaProductoService) { }

  ngOnInit() {
    this.listaCategoriasPro();
  }


  async listaCategoriasPro(){
    await this.categoriaProductos.getCategoriaProducto().subscribe((respuesta:any)=>{
     
      this.categorias = respuesta;
      console.log( this.categorias);

    })
   
  }

}
