import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company';
import { NavigationExtras, Router } from '@angular/router';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-registroempresa',
  templateUrl: './registroempresa.page.html',
  styleUrls: ['./registroempresa.page.scss'],
})
export class RegistroempresaPage implements OnInit {
  empresa: Company = new Company();

  constructor(public router: Router, public empresaService: EmpresaService) { }

  ngOnInit() {
  }

  crearEmpresa(){
    this.empresaService.guardarEmpresa(this.empresa);
    let navigationExtras: NavigationExtras ={
      queryParams: {
        empresa: this.empresa
      }
    }
  
  
    this.router.navigate(["/home"], navigationExtras);

  }

}
