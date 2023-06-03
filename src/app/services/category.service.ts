import { Injectable } from '@angular/core';
import { Category } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private cat: Category[] = [];

  constructor() {
    this.cat.push(  
    {idCategoryOK:'1', idCategoryBK:'Ropa'},
    {idCategoryOK:'2', idCategoryBK:'Zapatos'},
    {idCategoryOK:'3', idCategoryBK:'Línea Blanca'},
    {idCategoryOK:'4', idCategoryBK:'Muebles'},
    {idCategoryOK:'5', idCategoryBK:'Electrónica'},
    {idCategoryOK:'6', idCategoryBK:'Perfumería'},
    {idCategoryOK:'7', idCategoryBK:'Música'},
    {idCategoryOK:'8', idCategoryBK:'Motocicletas'},
    {idCategoryOK:'9', idCategoryBK:'Dulcería'});
  }

  public getCatego(): Category[] {
    return this.cat;
  }
}
