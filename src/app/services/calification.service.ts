import { Injectable } from '@angular/core';
import { Calification } from '../models/calification';

@Injectable({
  providedIn: 'root'
})
export class CalificationService {

  private califications: Calification[] = [];



  constructor() {
    this.califications.push( {
        name: 'Juan Diego Gómez Monteón',
        coment: 'El producto estaba normal.',
        calification: 5,
        fecha: new Date()
      },
      {
        name: 'Alan Ruiz',
        coment: 'Me gustó el producto.',
        calification: 5,
        fecha: new Date()
      },
      {
        name: 'Pérez Soto',
        coment: 'No fue de mi agrado',
        calification: 5,
        fecha: new Date()
      })
  }

  public getCalifications() {
    return this.califications;
  }

}
