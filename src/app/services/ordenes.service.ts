import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Usuario service
import { UsuarioService } from './usuario.service';
import { Observable } from 'rxjs';
import { Pedidorde } from '../models/pedidorden';
import { Ordenes } from '../models/orden';

/* export interface Pedidos{
  id: string;
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
} */

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {
 // pedidos: Pedidos[] = [];
  // private url = 'https://www.jgitsolutions.com/daleapp/dale/pedidoordenbyidd?id=2';
   private url = 'https://jgitsolutions.com//daleapp/dale/pedidobyid?id=3';

  // http://localhost/rest/index.php/pedidos/obtener_pedidos/65a340e34c76afbeb8a3214abef298d4a3946cd8/1


  constructor(private http: HttpClient,
              private us: UsuarioService) { }

 /* orden() {
    const url = 'https://jgitsolutions.com//daleapp/dale/pedidobyid?id=3';

    return this.http.get<[Pedidos]>(url);
  } */
  cargar_orden(){
    return this.http.get<[Ordenes]>(this.url);
  }

}
