import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentificationService {

  constructor(private autentificacion: AngularFireAuth, public afs: AngularFirestore) { }


  autentificarLogin(mail : string, contrasenia: string){
    return  this.autentificacion.signInWithEmailAndPassword(mail, contrasenia)
  }


  findEmpresaPorUsuario(uidUser : string): Observable<any>{
    return this.afs.collection("empresas",ref => ref.where("uidUsuario","==",uidUser)).valueChanges();

  }



 

  findUser(idU: string): Observable<any>{
    return this.afs.collection("Users").doc(idU).valueChanges();

  }


}
