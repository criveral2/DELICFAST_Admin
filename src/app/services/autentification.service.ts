import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage'
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutentificationService {

  constructor(private autentificacion: AngularFireAuth, public afs: AngularFirestore,private storage: Storage ) { }


  autentificarLogin(mail : string, contrasenia: string){
    return  this.autentificacion.signInWithEmailAndPassword(mail, contrasenia)
  }


  findEmpresaPorUsuario(uidUser : string): Observable<any>{
    return this.afs.collection("empresas",ref => ref.where("uidUsuario","==",uidUser)).valueChanges();

  }

  async findModEmpresaPorUid(uidUser : string){
    try{
      let aux = await this.afs.collection("empresas",ref => ref.where("uidUsuario","==",uidUser)).valueChanges()
                .pipe(first()).toPromise().then(doc => {
                  return doc;
                }).catch(error => {
                  throw error;
              });
        if(aux==null)
          return {};
        return aux[0];
    }catch(error){
    console.error("Error get contactos ById", error);
    throw error;
    } 
  }



 

  findUser(idU: string): Observable<any>{
    return this.afs.collection("Users").doc(idU).valueChanges();

  }



  guardarStorage( uidUusario : string){
   this.storage.set("uidUusario",uidUusario);

  }

  eliminarStorage(){
    this.storage.remove("uidUusario");
  }

 

  recuperarStorage(){
    
    return this.storage.get("uidUusario");
  }


}
