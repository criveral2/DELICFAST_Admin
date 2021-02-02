import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriaProductoService {

  constructor(public afs: AngularFirestore) { }

  guardarCategoriaP(categoria: Category){
    const refCatP= this.afs.collection("categoriaProductos");
    console.log(categoria);

    if(categoria.uid == null){
      categoria.uid = this.afs.createId();

    }
    
    refCatP.doc(categoria.uid).set(Object.assign({}, categoria),{merge: true})


  }

  getCategoriaProducto(){
    return this.afs.collection("categoriaProductos").valueChanges();
  }

 



}

