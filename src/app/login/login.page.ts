import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AutentificationService } from '../services/autentification.service';
import { Company } from '../model/company';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  codigoUsuario : string;
  empresa : Company = new Company();
  email : string = "";
  contra : string = "";
  bandera :boolean = false;
  

  constructor(public router: Router, public autentification: AutentificationService) { }

  ngOnInit() {
  }


  async logerace(){

    await this.autentification.autentificarLogin(this.email, this.contra).then((respuesta :any) =>{
      
      this.codigoUsuario = respuesta.user.uid;
      console.log(this.codigoUsuario);
    } ).catch(error =>{ console.log(error) })


    await this.autentification.findEmpresaPorUsuario(this.codigoUsuario).subscribe(resultado =>
      {      
     

        if(resultado.length == 0){
          
          this.autentification.guardarStorage(this.codigoUsuario);

          this.router.navigate(["/registroempresa"]);

        } else{
          this.autentification.guardarStorage(this.codigoUsuario);
          this.router.navigate(["/home"]);
        }      
      })

  }



  buscarUsuarioID(){

  }

}
