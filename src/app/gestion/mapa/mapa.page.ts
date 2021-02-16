import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { NotificacionService } from '../../services/notificacion.service';
import { MapaService } from '../../services/mapa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mapa } from '../../model/mapa';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  p: any[];
  mapa: Mapa = new Mapa();
  latitud:number;
  longitud:number;
  direcc:string;

 
  icons = {
    client: "https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_location-48.png",
    shop: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Marker-Outside-Chartreuse.png",
    center: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Marker-Inside-Chartreuse.png",
    pointer: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Ball-Azure.png"
  };




 


  mapita:any[];

  constructor(private locationService: LocationService,private ns: NotificacionService, private mapaService: MapaService, public rout:ActivatedRoute, public router: Router) { 

    this.rout.queryParams.subscribe(result=>{
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.mapita=this.router.getCurrentNavigation().extras.queryParams.mapa;        
      }
    })

    
  }
  


  async ngOnInit() {
    console.log("soy el mapa soy el mapa!!!",this.mapita);
    this.latitud= parseFloat(this.mapita[0].latitude);
    this.longitud= parseFloat(this.mapita[0].longitude);
    this.direcc=this.mapita[0].address;
  
  }


 

  getPuntos(){
    this.mapaService.getAddress().subscribe(
      resp => {
        // console.log("Respuesta de Firebase ", resp);
        // this.locationService.getAddressOfLocation(resp);
        
        this.p = resp;
        // for(let i=0; i < resp.length; i++){
        //   this.puntos.latitude = resp[i].latitude;
        //   this.puntos.longitude = resp[i].latitude;
        //   this.puntos.address = resp[i].address;
        //   console.log("object", this.puntos);
        //   this.locationService.getAddressOfLocation(this.puntos);
        // }


      }
    );
  }



}
