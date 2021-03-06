import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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


  findCategoriaPorID(uidCategoria:string) :Observable<any>{
    return this.afs.collection("categoriaProductos",ref => ref.where("uid","==",uidCategoria)).valueChanges();

  }



 

  getCatEmpresa(categ : string): Observable<any>{
    console.log(  "Que weada")

    return this.afs.collection('categoriaProductos', ref => ref.where('uidEmpresa', '==', categ)).valueChanges();
  }


  deleteCategoria(idCategoria:string){​​​​
    let doc = 'categoriaProductos/' + idCategoria;
    return this.afs.doc(doc).delete();

  }​​​​



 



}

