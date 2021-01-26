import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(public afs: AngularFirestore) { }
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
