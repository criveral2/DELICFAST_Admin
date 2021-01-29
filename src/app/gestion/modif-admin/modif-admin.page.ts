import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-admin',
  templateUrl: './modif-admin.page.html',
  styleUrls: ['./modif-admin.page.scss'],
})
export class ModifAdminPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  modificarEmpresa(){

    this.router.navigate(["home"]);

  }

}
