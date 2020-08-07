import {map} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Pedidos{
  idpedido: string;
  codigopedido: string;
  cantidad: string;
  fechapedido: string;
  horapedido: string;
  activo: string;
  creado: string;
  actualizado: string;
  idusuario: string;
  idestadopedido: string;
  idformapago: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {
  private url = 'http://localhost/rest/index.php/pedidos/obtener_pedidos/65a340e34c76afbeb8a3214abef298d4a3946cd8/1';
  ordenes: any[] = [];
  constructor(private http: HttpClient) { }
  // Obtener pedidos
  getAll() {
    return this.http.get<[Pedidos]>(this.url);
   /* this.http.get(this.url)
      .map(resp => resp.json())
      .subscribe(data => {

        if (data.error) {
          // manejar el error
        } else {

          this.ordenes = data.ordenes;

        }

      }); */

  }


}
