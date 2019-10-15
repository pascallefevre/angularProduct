import { Injectable } from '@angular/core';
import {Product} from "./domaine/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  p1: Product = new Product('Apple', 'RAMBAULT', 'Synonymes : Rambaut, Raimbaut . Fruit sphéroïdale un peu conique à épiderme jaune lavé et strié de rouge sur une partie. La chair est surtout utilisée pour la cuisson, le cidre, les gelées et se conserve jusqu’en mai. Le secteur de culture était en Pays d’Auge et Pays de Caux.',  2.5);
  p2: Product = new Product('Apple',  'CHAILLEUX', 'Le synonyme principal était Reinette Vermeille de Bretagne. Ce fruit moyen à gros a un bel épiderme rouge marbré de gris et la chair fine se consomme jusqu’en janvier et au-delà, tant pour la table que pour les jus et la cuisson. Cette pomme est confondue à tort avec Reinette d’Armorique qui est moins colorée.', 3.5);
  p3: Product = new Product( 'Apple', 'PIGEONNET BRETON', 'On le trouve en Côtes d’Armor, Finistère, Ille-et-Vilaine, Morbihan,…La silhouette paraît haute mais en fait elle est plus large et bien conique. Le fond de l’épiderme est jaune lavé, sur 1/3 à un demi, de rouge, rose et un peu de violacé. Bonne chair blanc-jaunâtre, fine, sucrée de maturité/conservation septembre/octobre. Ne pas confondre avec Pigeonnet Galeux dont les branches reprennent facilement racines, ni avec les Pigeons et les Pigeonnets de Normandie qui sont fort nombreux.', 2.5);
  p4: Product = new Product( 'Apple', 'PATTE DE LOUP', 'Originaire du Maine-et-Loire on la trouve un peu partout dans les Pays de Loire, la Touraine, etc….Ce fruit plutôt aplati a un épiderme fauve, qui présente, sur quelques exemplaires, des griffures qui font penser à l’intervention d’un loup. La chair est bonne, fine, sucrée-acidulée idéale. On peu la confondre avec Fenouillet Anisé. La conservation se prolonge jusqu’en avril.', 3.0)

  lp = [this.p1, this.p2, this.p3, this.p4];

private products = this.lp
  constructor() { }
    findAll(): Promise<Product[]>{
    return new Promise((resolve => resolve(this.products)));
}

    add(product:Product): Promise<boolean>{
      this.products.push(product);
      return new Promise( r=>r(true));
      }

     rmv(product:Product): Promise<boolean>{
    this.products.splice(this.products.indexOf(product),1);
    return new Promise( r=>r(true));
      }

    getOne(name: string): Promise<Product>{
      return new Promise (resolve =>resolve(this.products.filter( s => s.name===name)[0]));
      }

    /*getProdByName(name: string): Promise<Product>{
        return new Promise((resolve => resolve( )));
}*/

}
