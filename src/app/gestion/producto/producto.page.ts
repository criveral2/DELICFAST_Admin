import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { Product } from '../../model/products';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { UUID } from 'angular2-uuid';
import {​​ finalize }​​ from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Category } from '../../model/category';
import { AutentificationService } from '../../services/autentification.service';
import { Company } from '../../model/company';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  codigoUsuario : string;
  codigoEmpresa: string;
  emp : Company;
  aux : any[];
  variable : string;

  imageProdu:any;
  producto:Product= new Product();
  constructor(public router: Router, public productoService: ProductoService, public storage:AngularFireStorage, public autentificacion : AutentificationService) { }

  ngOnInit() {

    this.recuperarUsu();


  }



  async recuperarUsu(){
    await this.autentificacion.recuperarStorage().then((respuesta : string) => {
      this.codigoUsuario = respuesta;
      console.log("llego el ususario"+ this.codigoUsuario);
    }).catch(error => {console.log(error)})

    this.recuperarEmpresa();
    

  }

  async recuperarEmpresa(){
    await this.autentificacion.findModEmpresaPorUid(this.codigoUsuario).then(data =>{
      const ja:any = data
      this.emp  = ja;
      this.codigoEmpresa = this.emp.uid;
      console.log("llego uuuu la empresa   ",this.emp.uid);
      
    })

    this.recuperarCategoriasEmpresa();

  }

 async recuperarCategoriasEmpresa(){
  
    await this.productoService.getCatEmpresa(this.codigoEmpresa).subscribe((resp:any)  =>{
      this.aux = resp;
     
      
    })

  }


 

  crearProducto(){
    console.log(this.imageProdu)
    this.productoService.guardarProducto(this.producto, this.variable);
    this.router.navigate(["/home"])
  }

  cargarImgBase(){


    let uuid = UUID.UUID();
    let path= "imagenesProducto/"+uuid;
    let varRef = this.storage.ref(path);
    let subiendo=this.storage.upload(path,this.imageProdu);
    subiendo.snapshotChanges().pipe(finalize(()=>{
      varRef.getDownloadURL().subscribe((subs)=>{
        this.producto.img=subs;
        this.crearProducto();
      })
    })).subscribe((ano)=>{})
    

  }



  cargaImagen(event){
    console.log(event);
    if(event.target.files && event.target.files[0]){
      let recupera= new FileReader();
      this.imageProdu=  event.target.files[0];

    }
  }



}
