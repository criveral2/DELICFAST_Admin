import { Product } from './products';
import { Company } from './company';
export class Category {
    uid:string;
    img:string;
    nombre:string;
    descripcion:string;
    productos?:Product[];
    
}
