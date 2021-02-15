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


  getProducto(uidCat:string){
 
    return this.afs.collection('categoriaProductos', ref => ref.where('uidCategoria', '==', uidCat)).valueChanges();

  }

  async buscarProducto(uidCat: string, uidPro: string){​​

    try{​​

      let aux = await this.afs.collection("categoriaProductos").doc(uidCat).collection("productos",ref => ref.where("uid","==",uidPro)).valueChanges()

                .pipe(first()).toPromise().then(doc => {​​

                  return doc;

                }​​).catch(error => {​​

                  throw error;

              }​​);

        if(aux==null)

          return {​​}​​;

        return aux[0];

    }​​catch(error){​​

    console.error("Error get contactos ById", error);

    throw error;

    }​​ 

  }​​

 

  getProductosCat( uidCategoria : string):Observable<any>{​​
    console.log("llego el id de la categoria0"+ uidCategoria)
    const refPro= this.afs.collection("categoriaProductos");
   return  refPro.doc(uidCategoria).collection("productos",ref => ref.where("uidCategoria","==",uidCategoria)).valueChanges();

  }
  
 ​​

  

 
  // getCatEmpresa() : Observable<any>{
  //   return this.afs.collection("categoriaProductos").valueChanges();

  // }

  findCategoriaPorID(uidCategoria:string) :Observable<any>{
    return this.afs.collection("productos",ref => ref.where("uid","==",uidCategoria)).valueChanges();

  }


  deleteProducto(uidCat:string, uidPro: string){
    console.log("Llegaaa categoria:",uidCat,"Producto",uidPro)  ​​​​
    let doc = 'categoriaProductos/' + uidCat+'/productos/'+uidPro;
    return this.afs.doc(doc).delete();

  }



}
