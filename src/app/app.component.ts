import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AutentificationService } from './services/autentification.service';
import { Usuario } from './model/usuarios';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Listar Categorias',
      url: 'lista-categoria-pr',
      icon: 'list'
      
    },
    {
      title: 'Crear Categoria',
      url: 'categoria',
      icon: 'create'
      
    },
    {
      title: 'Crear Producto',
      url: 'producto',
      icon: 'create'
      
    },
    {
      title: 'Modificar Empresa',
      url: 'modif-admin',
      icon: 'laptop'
      
    },
    {
      title: 'Pedidos',
      url: 'listapedidos',
      icon: 'create'
      
    }
    
    
  ];



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private login:AutentificationService,
    public aunt: AutentificationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  codigoUsuario: string;
  usuario: Usuario = new Usuario();

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  async recuperarUsu(){
    await this.aunt.getUsuarioStorage().then((respuesta : string) => {
      this.codigoUsuario = respuesta;
      console.log("llego al modificar usuario--------------------------------------"+ this.codigoUsuario);
    }).catch(error => {console.log(error)})

    this.BuscraUsu();

  }

  async BuscraUsu(){
  
    await this.aunt.findUidUsuario(this.codigoUsuario).then((resp:any)=>{
      const aux = resp;
      this.usuario = aux;
      console.log(this.usuario);

    })
    
  }


}
