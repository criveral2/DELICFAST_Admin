import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-modif-admin',
  templateUrl: './modif-admin.page.html',
  styleUrls: ['./modif-admin.page.scss'],
})
export class ModifAdminPage implements OnInit {

  empresa : any[];

  constructor(public router: Router, public empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresaService.getEmpresa().subscribe(respuesta =>{
      this.empresa = respuesta;
      console.log(this.empresa);
    })
  }

  modificarEmpresa(){

    this.router.navigate(["home"]);

  }

}
