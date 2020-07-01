import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Categoria{
  idcategoria: string;
  nombre_categoria: string;
  descripcion: string;
  activo: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private url = 'https://jgitsolutions.com/daleapp/dale/categoria';

  constructor(private http: HttpClient) { }

  // Obtener categorias
  getAll(){
    return this.http.get<[Categoria]>(this.url);
  }
}
