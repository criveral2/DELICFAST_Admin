import { Product } from './products';
import { Company } from './company';
export class Category {
    uid:String;
    img:String;
    nombre:String;
    descripcion:String;
    companias?:Company[];
    productos?:Product[]
    
}
