import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Company } from '../model/company';
import { CategoriaEmpresa } from '../model/categoriasempresa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(public afs: AngularFirestore) { }





  getCategoriasEmpresa() : Observable<any>{
    return this.afs.collection("categoriaEmpresa").valueChanges();

  }







  guardarEmpresa(empresa: Company){

    const refEmpresa = this.afs.collection("empresas");

    if(empresa.uid == null){
      empresa.uid = this.afs.createId();
    }
    refEmpresa.doc(empresa.uid).set(Object.assign({}, empresa),{merge: true})


  }

  

  getEmpresa(){
    return this.afs.collection("empresas").valueChanges();
  }







 


}
