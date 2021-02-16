import { Injectable } from '@angular/core';
import { Mapa } from '../model/mapa';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  constructor(public afs: AngularFirestore) { }

  fingMapaById(uidPedido:string) {
    console.log("este es el id del ser",uidPedido)
    return this.afs.collection("mapa",ref => ref.where("uidPedido","==",uidPedido)).valueChanges();

  }
  getAddress(){
   const dato = this.afs.collection('mapa').valueChanges();
   return dato;
  }

}
