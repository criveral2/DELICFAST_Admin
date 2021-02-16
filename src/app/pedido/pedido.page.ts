import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { PedidoService } from '../services/pedido.service';
import { MapaService } from '../services/mapa.service';
import { Mapa } from '../model/mapa';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  uidPed:string;
  pedidos:any[];
  mapa:any[];
  constructor(public router:Router,private rout:ActivatedRoute, public pedidoService: PedidoService, public mapaService:MapaService) {
    this.rout.queryParams.subscribe(result=>{
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.uidPed=this.router.getCurrentNavigation().extras.queryParams.uidPedido;
        console.log("este es el id del pedido",this.uidPed);
      }
    })
  }

  ngOnInit() {
    this.listarPedidos();
  }

  async listarPedidos(){
    await this.pedidoService.getPedidosbyId(this.uidPed).subscribe(res=>{
      this.pedidos=res;
      console.log("holaaaaaaaaaaaaaaaaaaaaaaa",this.pedidos)
    })

  }

  async recuperarDireccion(uidPedido:string){
    await this.mapaService.fingMapaById(uidPedido).subscribe(res=>{
      this.mapa=res; 
    });
    if(this.mapa==undefined){
      console.log("holaaaaaaaaaaaaaaaaaaa")
    }else{
      let navigateExtras:NavigationExtras={
        queryParams:{mapa:this.mapa}
  
      };
    
      this.router.navigate(["/mapa"],navigateExtras);
    }
    

  }

}
