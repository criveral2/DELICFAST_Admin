import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company';
import { NavigationExtras, Router } from '@angular/router';
import { EmpresaService } from '../services/empresa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registroempresa',
  templateUrl: './registroempresa.page.html',
  styleUrls: ['./registroempresa.page.scss'],
})
export class RegistroempresaPage implements OnInit {
  empresa: Company = new Company();


  categorias : any[];

  categoriaEmpUid: string ;

  constructor(public router: Router, public empresaService: EmpresaService) { }

  ngOnInit() {
    this.recuperarCategoriasEm();

    
  }


   async recuperarCategoriasEm(){
    await this.empresaService.getCategoriasEmpresa().subscribe((respuesta:any)=>{
     
      this.categorias = respuesta;
      console.log( this.categorias);

    })
   
  }









  

  crearEmpresa(){
    this.empresa.uidUsuario="cRKHfqJAq1olzVcLYKjb";
    
    this.empresaService.guardarEmpresa(this.empresa);
    let navigationExtras: NavigationExtras ={
      queryParams: {
        empresa: this.empresa
      }
    }
  
  
    this.router.navigate(["/home"], navigationExtras);

  }

}
