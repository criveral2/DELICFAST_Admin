import { Time } from '@angular/common';
import { Category } from './category';
export class Company {
    uid:string;
    img:string;
    nombre:string;
    direccion:string;
    ruc:string;
    telefono:string;
    correo:string;
    horario_apertura:Time;
    horario_cierre:Time;
    descripcion:string;
    categorias?:Category[];


}
