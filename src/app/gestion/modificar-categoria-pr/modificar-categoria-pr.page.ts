import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { CategoriaProductoService } from 'src/app/services/categoria-producto.service';
import { UUID } from 'angular2-uuid';
import {​​ finalize }​​ from 'rxjs/operators';
@Component({
  selector: 'app-modificar-categoria-pr',
  templateUrl: './modificar-categoria-pr.page.html',
  styleUrls: ['./modificar-categoria-pr.page.scss'],
})
export class ModificarCategoriaPrPage implements OnInit {
  uidC:string;
  
  categoriaPro: Category;
  imagenCategoriaPro:any;

  

  constructor(public router:Router,public categoriaServicio:CategoriaProductoService,private rout:ActivatedRoute,public storage: AngularFireStorage) {
     this.rout.queryParams.subscribe(result=>{
       if(this.router.getCurrentNavigation().extras.queryParams){
         this.uidC=this.router.getCurrentNavigation().extras.queryParams.uidCategoria;
         console.log(this.uidC);
       }
     })

   }

  ngOnInit() {
    this.recuperar();
    
 
  }

  async recuperar(){;
    await this.categoriaServicio.findCategoriaPorID(this.uidC).subscribe((resp:any)=>{
      this.categoriaPro=resp[0];
      console.log(this.categoriaPro)


    })

 }

 
 crearCategoriaProducto(){
  console.log(this.imagenCategoriaPro)
  this.categoriaServicio.guardarCategoriaP(this.categoriaPro);
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
