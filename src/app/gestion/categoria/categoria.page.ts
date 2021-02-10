import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoriaProductoService } from 'src/app/services/categoria-producto.service';
import { UUID } from 'angular2-uuid';
import {​​ finalize }​​ from 'rxjs/operators';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  categoriaPro: Category = new Category();
  imagenCategoriaPro:any;

  constructor(public router: Router, public categoriaService: CategoriaProductoService, public storage: AngularFireStorage) { }

  ngOnInit() {
  }



  crearCategoriaProducto(){
    console.log(this.imagenCategoriaPro)
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
