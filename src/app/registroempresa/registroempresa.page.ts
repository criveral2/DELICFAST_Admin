import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { EmpresaService } from '../services/empresa.service';
import { Observable } from 'rxjs';
import { UUID } from 'angular2-uuid';
import { AngularFireStorage} from '@angular/fire/storage';
import {​​ finalize }​​ from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { AutentificationService } from '../services/autentification.service';

@Component({
  selector: 'app-registroempresa',
  templateUrl: './registroempresa.page.html',
  styleUrls: ['./registroempresa.page.scss'],
})
export class RegistroempresaPage implements OnInit {
  empresa: Company = new Company();

  imagenLogo:any;
  categorias : any[];

  categoriaEmpUid: string ;

  codigoUsuario: string;

  constructor(public router: Router, public empresaService: EmpresaService, public storage: AngularFireStorage, public aute : AutentificationService) {}

  ngOnInit() {
    this.aute.recuperarStorage().then((respuesta : string) => {
      this.codigoUsuario = respuesta
      console.log("codigo del uduario llega a registro ", this.codigoUsuario)
    }).catch(error => {console.log(error)})

    this.recuperarCategoriasEm();
 
     
  }


   async recuperarCategoriasEm(){
    await this.empresaService.getCategoriasEmpresa().subscribe((respuesta:any)=>{
     
      this.categorias = respuesta;
      console.log( this.categorias);

    })
   
  }

  crearEmpresa(){

    this.empresa.uidUsuario=this.codigoUsuario;
    this.empresaService.guardarEmpresa(this.empresa);
   
    this.router.navigate(["/home"]);

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
        this.empresa.img=subs;
        this.crearEmpresa();
      })
    })).subscribe((ano)=>{})
    

  }



}
