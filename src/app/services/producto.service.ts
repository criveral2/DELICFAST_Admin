import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../model/products';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(public afs: AngularFirestore) { }


  guardarProducto(producto: Product, uidCategoria : string){

    console.log("llego el id de la categoria0" + uidCategoria)

    const refPro= this.afs.collection("categoriaProductos");

    if (producto.uid==null) {
        producto.uid= this.afs.createId();
    }

    refPro.doc(uidCategoria).collection("productos").doc(producto.uid).set(Object.assign({},producto),{merge:true});
  }


  getCatEmpresa(categ : string): Observable<any>{
    console.log(  "Que weada")

    return this.afs.collection('categoriaProductos', ref => ref.where('uidEmpresa', '==', categ)).valueChanges();
  }

 
  // getCatEmpresa() : Observable<any>{
  //   return this.afs.collection("categoriaProductos").valueChanges();

  // }



}
