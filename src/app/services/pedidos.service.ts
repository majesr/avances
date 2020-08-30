
import { Injectable  } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { Servicio } from './servicios.service';
import Swal from 'sweetalert2';

// Usuario service
import { UsuarioService } from './usuario.service';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from '../config/url.servicios';
import { Pedidorde } from '../models/pedidorden';


/* export interface Pedido {
  idpedido_i: string;
  codigo_pedido_i: string;
  cantidad_i: string;
  fecha_pedido_i: string;
  hora_pedido_i: string;
  activo_i: number;
  create_at_i: string;
  update_at_i: string;
  idusuario_i: number;
  idestado_pedido_i: number;
  idforma_pago: number;
}
*/
@Injectable({
providedIn: 'root'
})
export class PedidosService {
 private url = 'https://www.jgitsolutions.com/daleapp/dale/pedido';
  totalcarrito = 0;

  items: Servicio[] = [];
  constructor(private http: HttpClient,
              private us: UsuarioService) {
    this.cargar_storage();
    this.actualizar_total();

  }

  eliminar_item( idx:number) {
    this.items.splice(idx, 1);
    this.guardar_storage();
  }

  realizar_pedido() {
    let data = new HttpParams();

    let codigos: string[] = [];

    for (let item of this.items) {
      codigos.push(item.id_servicio);
    }

    console.log(codigos);


    data = data.append('items', codigos.join(','));

    console.log(codigos.join(','));

    const url = 'http://localhost/rest/index.php/pedidos/realizar_pedido/65a340e34c76afbeb8a3214abef298d4a3946cd8/1/1/1/1/1';
    return this.http.post(url , data)
    .subscribe((resp: any ) => {
      const respuesta = JSON.stringify(resp);
      if (respuesta) {
        this.items = [];
        Swal.fire({
          title: 'Orden Realizada',
          text: respuesta
        });
      }
  });
    }

guardar_pedido(ped: Pedidorde): Observable <Pedidorde>{
  return this.http.post<Pedidorde>(this.url, ped);
}


  // Agregar carrito
agregar_carrito(carrito: any) {
    for (const item of this.items) {
      if (item.id_servicio === carrito.id_servicio) {
        Swal.fire({
          title: 'Servicio ya existe',
          text: carrito.nombre_servicio + ' , ya existe en su carrito.'
        });
        return;
      }
    }

    this.items.push(carrito);
    this.actualizar_total();
    this.guardar_storage();
  }

  private guardar_storage(){
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  cargar_storage() {
    if ( localStorage.getItem('items') ){
      // Existe items en el localstorage
      this.items = JSON.parse( localStorage.getItem('items')  );
    }

  }

  actualizar_total() {
    this.totalcarrito = 0;
    for (const item of this.items) {
      this.totalcarrito += Number(item.costo);

    }
  }


}
