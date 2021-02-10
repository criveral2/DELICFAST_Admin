import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoriaProductoService } from 'src/app/services/categoria-producto.service';
import { UUID } from 'angular2-uuid';
import {​​ finalize }​​ from 'rxjs/operators';
import { AutentificationService } from '../../services/autentification.service';
import { Company } from '../../model/company';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  categoriaPro: Category = new Category();
  imagenCategoriaPro:any;

  codigoUsuario: string;
  codigoEmpresa: string;
  emp: Company;

  constructor(public router: Router, public categoriaService: CategoriaProductoService, public storage: AngularFireStorage, public autentificacion: AutentificationService) { }

  ngOnInit() {
    this.recuperarUsu();

  }


  async recuperarUsu(){
    await this.autentificacion.recuperarStorage().then((respuesta : string) => {
      this.codigoUsuario = respuesta;
      console.log("llego el ususario"+ this.codigoUsuario);
    }).catch(error => {console.log(error)})

    this.recuperarEmpresa();
    

  }

  async recuperarEmpresa(){
    await this.autentificacion.findModEmpresaPorUid(this.codigoUsuario).then(data =>{
      const ja:any = data
      this.emp  = ja;
      this.codigoEmpresa = this.emp.uid;
      console.log("llego uuuu la empresa   ",this.emp.uid);
      
    })

    

  }


  crearCategoriaProducto(){
    console.log(this.imagenCategoriaPro)
    this.categoriaPro.uidEmpresa = this.codigoEmpresa;
    this.categoriaService.guardarCategoriaP(this.categoriaPro);
    this.router.navigate(["/lista-categoria-pr"])
  }

  cargarImgBase(){
    let uuid = UUID.UUID();
    let path= "imagenesCategoriaProducto/"+uuid;
    let varRef = this.storage.ref(path);
    let subiendo=this.storage.upload(path,this.imagenCategoriaPro);
    subiendo.snapshotChanges().pipe(finalize(()=>{
      varRef.getDownloadURL().subscribe((subs)=>{
        this.categoriaPro.img=subs;
        this.crearCategoriaProducto();
      })
    })).subscribe((ano)=>{})
    

  }

  cargaImagen(event){
    console.log(event);
    if(event.target.files && event.target.files[0]){
      let recupera= new FileReader();
      this.imagenCategoriaPro=  event.target.files[0];

    }
  }


}
