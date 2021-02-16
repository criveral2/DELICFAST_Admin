import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage'
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutentificationService {
  nombre:string;

  constructor(private autentificacion: AngularFireAuth, public afs: AngularFirestore,private storage: Storage,private router:Router ) { }


  autentificarLogin(mail : string, contrasenia: string){
    return new Promise((resolve, reject)=>{
      this.autentificacion.signInWithEmailAndPassword(mail,contrasenia).then(user =>{
        resolve(user)
        //this.updateUserData(user);
      }).catch(err => reject(err));
    })
    
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

  logout(){
    this.autentificacion.signOut().then(()=>{
      this.router.navigate(["/login"])
    });
    
  
}


getUsuarioStorage(){
  return this.storage.get('uidUsuario');
}

async findUidUsuario(uidUser : string){
  try{
    let aux = await this.afs.collection("Users",ref => ref.where("uid","==",uidUser)).valueChanges()
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


}
