import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(public afs: AngularFirestore) { }


  getPedidos(empresaId : string): Observable<any>{
    console.log(  "Entra pedido")

    return this.afs.collection('pedidos',ref => ref.where('uidEmpresa', '==',empresaId)).valueChanges();
  }

  getPedidosbyId(uidPed : string): Observable<any>{
    console.log(  "Entra pedido Para listar",uidPed)
    return this.afs.collection('pedidos',ref => ref.where('uid', '==',uidPed)).valueChanges();
  }

}
