import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from '../../services/empresa.service';
import { AutentificationService } from '../../services/autentification.service';
import { Company } from '../../model/company';
import { UUID } from 'angular2-uuid';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-modif-admin',
  templateUrl: './modif-admin.page.html',
  styleUrls: ['./modif-admin.page.scss'],
})
export class ModifAdminPage implements OnInit {

  
  emp : Company = new Company();
  imagenLogo:any;
  codigoUsuario : string;
  codigoEmpresa : string;
  categorias : any[];

  constructor(public router: Router, public empresaService: EmpresaService, private autentificacion:AutentificationService, public storage: AngularFireStorage) { }

  ngOnInit() {
    this.recuperarUsu();
   
   
   
  }

  modificarEmpresa(){
  

    this.router.navigate(["home"]);

  }


  async recuperarUsu(){
    await this.autentificacion.recuperarStorage().then((respuesta : string) => {
      this.codigoUsuario = respuesta;
      console.log("llego al home --------------------------------------"+ this.codigoUsuario);
    }).catch(error => {console.log(error)})

    this.recuperarEmpresa();
    this.recuperarCategoriasEm();

  }


  async recuperarEmpresa(){
    await this.autentificacion.findModEmpresaPorUid(this.codigoUsuario).then(data =>{
      const aux:any = data
      this.emp  = aux;
      // this.codigoEmpresa = respuesta[0].uid;
      console.log("jajjajaj  si valio   ",this.emp.img);


    })

  }


  cargarLogo(event){
    console.log(event);
    if(event.target.files && event.target.files[0]){
      this.imagenLogo=  event.target.files[0];

    }
  }

  cargarImgBase(){
    let uuid = UUID.UUID();
    let path= "imagenesProducto/"+uuid; 
    let varRef = this.storage.ref(path);
    let subiendo=this.storage.upload(path,this.imagenLogo);
    subiendo.snapshotChanges().pipe(finalize(()=>{
      varRef.getDownloadURL().subscribe((subs)=>{
        this.emp.img=subs;
        this.crearEmpresa();
      })
    })).subscribe((ano)=>{})
    

  }

  crearEmpresa(){
    
  
    this.empresaService.modificarEmpresa(this.emp);
   
    this.router.navigate(["/home"]);

  }

  async recuperarCategoriasEm(){
    await this.empresaService.getCategoriasEmpresa().subscribe((respuesta:any)=>{
     
      this.categorias = respuesta;
      console.log( this.categorias);

    })
   
  }


}
