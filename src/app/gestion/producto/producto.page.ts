import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { Product } from '../../model/products';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { UUID } from 'angular2-uuid';
import {​​ finalize }​​ from 'rxjs/operators';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  imageProdu:any;
  producto:Product= new Product();
  constructor(public router: Router, public productoService: ProductoService, public storage:AngularFireStorage) { }

  ngOnInit() {
  }

  crearProducto(){
    console.log(this.imageProdu)
    this.productoService.guardarProducto(this.producto);
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
