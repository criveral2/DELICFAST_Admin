import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Router, NavigationExtras } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { AutentificationService } from '../../services/autentification.service';
import { Company } from '../../model/company';

@Component({
  selector: 'app-listapedidos',
  templateUrl: './listapedidos.page.html',
  styleUrls: ['./listapedidos.page.scss'],
})
export class ListapedidosPage implements OnInit {

  codigoUsuario:string;
  codigoEmpresa:string;
  emp:Company;
  aux : any[];
  variable : string;
  productos:any[];
  uidPedido:string;


  constructor(public router: Router, public pedidoService: PedidoService, public storage:AngularFireStorage, public autentificacion : AutentificationService) { }

  ngOnInit() {
    this.recuperarUsu();
  }

  
  async recuperarUsu(){
    await this.autentificacion.recuperarStorage().then((respuesta : string) => {
      this.codigoUsuario = respuesta;
      console.log("Pedidooooooo usuariouid",this.codigoUsuario)
    }).catch(error => {console.log(error)})

    this.recuperarEmpresa();
    

  }

  redirigir(uidPedido:String){
    console.log(uidPedido,"Llego al redirigir Del modificar")
    let navigateExtras:NavigationExtras={
      queryParams:{uidPedido:uidPedido}

    };
    this.router.navigate(["/pedido"],navigateExtras)


  }

  async recuperarEmpresa(){
    await this.autentificacion.findModEmpresaPorUid(this.codigoUsuario).then(data =>{
      const empresa:any = data
      this.emp  = empresa;
      this.codigoEmpresa = this.emp.uid;
      console.log("Pedidooooooo empresauid",this.codigoEmpresa)
      
    })

    this.recuperarPedidos();

  }

  

 async recuperarPedidos(){
  
    await this.pedidoService.getPedidos(this.codigoEmpresa).subscribe((resp:any)  =>{
      this.aux = resp;
      this.productos=resp.productos;
      console.log("Este el el productoooooooooooooooooooooooooooooooooooooooo",this.aux);
      
    })

  }

}
