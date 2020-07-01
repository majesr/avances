import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


export interface Servicio{
  nombre_servicio: string;
  costo: string;
  idcategoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private subject: BehaviorSubject<Servicio[]> = new BehaviorSubject([]);
  private itemsCarrito: Servicio[] = [];

  private url = 'https://jgitsolutions.com/daleapp/dale/servicios';
  params: any;


  constructor(private http: HttpClient) { }

  // Obtener servicios
  getAll() {
    return this.http.get<[Servicio]>(this.url);
  }

  /**
   * addCarrito
   */
  addCarrito(servicio: Servicio) {
    this.subject.next([...this.itemsCarrito, servicio]);
  }

}
