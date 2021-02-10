import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {




























































  

  constructor(public afs: AngularFirestore) { }


  guardarProducto(producto: Product){
    const refPro= this.afs.collection("categoriaProductos");

    if (producto.uid==null) {
        producto.uid= this.afs.createId();
    }

    refPro.doc("HIZpBjCaePv1Is3NGTIJ").collection("productos").doc(producto.uid).set(Object.assign({},producto),{merge:true});



  }

  getProducto(){
    return this.afs.collection("productos").valueChanges();
  }

}
