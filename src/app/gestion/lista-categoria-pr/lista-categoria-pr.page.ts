import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CategoriaProductoService } from 'src/app/services/categoria-producto.service';
import { AutentificationService } from '../../services/autentification.service';
import { Company } from '../../model/company';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-categoria-pr',
  templateUrl: './lista-categoria-pr.page.html',
  styleUrls: ['./lista-categoria-pr.page.scss'],
})
export class ListaCategoriaPrPage implements OnInit {
  categorias : any[];
  uidCategoria:string;
  codigoUsuario : string;
  codigoEmpresa: string;
  emp : Company;
  

  constructor( private categoriaProductos:CategoriaProductoService,public router:Router,public autentificacion : AutentificationService) { }

  ngOnInit() {
    this.recuperarUsu();
  }


  async recuperarUsu(){
    await this.autentificacion.recuperarStorage().then((respuesta : string) => {
      this.codigoUsuario = respuesta;
      console.log("llego el ususario cat"+ this.codigoUsuario);
    }).catch(error => {console.log(error)})

    this.recuperarEmpresa();
    

  }

  async recuperarEmpresa(){
    await this.autentificacion.findModEmpresaPorUid(this.codigoUsuario).then(data =>{
      const ja:any = data
      this.emp  = ja;
      this.codigoEmpresa = this.emp.uid;
      console.log("llego uuuu la empresa cat   ",this.emp.uid);
      
    })

    this.recuperarCategoriasEmpresa();

  }

  async recuperarCategoriasEmpresa(){
  
    await this.categoriaProductos.getCatEmpresa(this.codigoEmpresa).subscribe((resp:any)  =>{
      console.log(resp)
      this.categorias = resp;
    
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
