import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/products';
import { ProductoService } from 'src/app/services/producto.service';
import { UUID } from 'angular2-uuid';
import {​​ finalize }​​ from 'rxjs/operators';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.page.html',
  styleUrls: ['./modificar-producto.page.scss'],
})
export class ModificarProductoPage implements OnInit {

  uidCas:string;
  uidPro:string;
  
  producto:Product;
  imageProdu:any;
  codigoEmpresa: string;
  aux : any[];
  variable : string;

  constructor(public router:Router,private rout:ActivatedRoute,public storage: AngularFireStorage,public servicioProducto:ProductoService) { 
    this.rout.queryParams.subscribe(result=>{
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.uidCas=this.router.getCurrentNavigation().extras.queryParams.uidC;
        this.uidPro=this.router.getCurrentNavigation().extras.queryParams.uidP;
        console.log(this.uidCas);
      }
    })


  }

  ngOnInit() {
    this.recuperar();
  }

  async recuperar(){;
    await this.servicioProducto.buscarProducto(this.uidCas,this.uidPro).then((respuesta:any)=>{
    this.producto=respuesta;
    console.log(this.producto);



    })
     

 }

 crearProducto(){
  this.servicioProducto.guardarProducto(this.producto,this.uidCas);
  this.router.navigate(["/lista-categoria-pr"])
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
