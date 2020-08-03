import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export interface Servicio{
  id_servicio: number;
  nombre_servicio: string;
  costo: number;
  idcategoria: string;
 }

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private url = 'https://jgitsolutions.com/daleapp/dale/servicios';

  constructor(private http: HttpClient) {
  }
  // Obtener servicios
  getAll() {
    return this.http.get<[Servicio]>(this.url);
  }

    }


