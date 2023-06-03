import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Calification } from '../models/calification';
import { Category } from '../models/category';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public delOrUpd = 1;
  private productos: Producto[] = [];

  private cat: Category[] = [];

  constructor(private cate: CategoryService) { 
    
    this.cat = cate.getCatego();
    this.productos.push({
      sku: 'PRL1001',
      name: 'Polo Ralph Lauren',
      description: 'Playera tipo polo de manga corta jaspeada Hombre',
      price: 1195,
      category: this.cat[1],
      calification: [
        {   
        name: 'Diego Gómez',
        coment: 'La calidad de la tela es muy buena y es fresca',
        calification: 5,
        fecha: new Date()
      },
      {   
        name: 'Alan Barocio',
        coment: 'No había tallas chicas disponibles',
        calification: 3,
        fecha: new Date()
      }
    ],
      stock: 35,
      //photo: 'https://picsum.photos/200/300',
      photo: 'https://www.elpalaciodehierro.com/dw/image/v2/BDKB_PRD/on/demandware.static/-/Sites-palacio-master-catalog/default/dw4f7cf757/images/38372975/GRIS%20MEDIO/large/38372976_x1.jpg?sw=686&sh=785',
      promCal: 4
    }
    );
  }

  public getProductos(): Producto[] {
    return this.productos;    
  }

  public getProductoFiltradoPorCategoria(idCategoriaOk: string): Producto[] {
    return this.productos.filter( prod => {prod.category?.idCategoryOK == idCategoriaOk});
  }

  public deleteProducto(prod: Producto): Producto[] {
    const pos = this.productos.findIndex( 
      (p) =>  p.sku == prod.sku
    );
    this.productos.splice(pos,1);
    return this.productos;
  }

  public uploadProduct(prod: Producto) {
    const pos = this.productos.findIndex( (_prod) => _prod.sku == prod.sku);
    this.productos[pos] = prod;
    this.productos[pos].promCal = this.getPromCal(prod);
  }

  public addProduct(prod:Producto) {
    prod.calification = [];
    this.productos.push(prod);
  }

  public getPromCal( prod: Producto ): number {
    const calif = prod.calification.map(c => c.calification);
    return Math.round(calif.reduce((a,b) => a+b,0)/calif.length);
  }

}
