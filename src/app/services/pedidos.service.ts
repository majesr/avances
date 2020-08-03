
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from './servicios.service';
import Swal from 'sweetalert2';

// Usuario service
import { UsuarioService } from './usuario.service';

// paginas del modal
import { LoginComponent } from '../login/login.component';
import { URL_SERVICIOS } from '../config/url.servicios';
import { Pedido } from '../models/pedido.models';
import {Observable} from 'rxjs';

/*
export interface Pedidos{
  IDPEDIDO: string;
  CODIGO_PEDIDO: string;
  CANTIDAD: string;
  fecha_pedido_i: string;
  hora_pedido_i: string;
  create_at_i: string;
  update_at_i: string;
  activo_i: string;
  IDUSUARIO: string;
  IDESTADO_PEDIDO: string;
  IDFORMA_PAGO: string;
}

private ped: Pedidos[] = [
  {
    IDPEDIDO: 'X',
    CODIGO_PEDIDO: 'V1',
    CANTIDAD: '6',
    fecha_pedido_i:'29/07/2020',
    hora_pedido_i: '00:00',
    create_at_i: '29/07/2020',
    update_at_i: '29/07/2020',
    activo_i: '1',
    IDUSUARIO: '1',
    IDESTADO_PEDIDO: '1',
    IDFORMA_PAGO: '1'
  }
];*/
@Injectable({
providedIn: 'root'
})
export class PedidosService {
// private url = 'https://www.jgitsolutions.com/daleapp/dale/pedido';
  totalcarrito = 0;
  items: Servicio[] = [];
  constructor(private http: HttpClient,
              private us: UsuarioService) {
    this.cargar_storage();
    this.actualizar_total();

  }

  eliminar_item( idx: number) {
    this.items.splice(idx, 1);
    this.guardar_storage();
  }
 /* PEDIDO(pedidox: Pedido) {

    const url = `https://www.jgitsolutions.com/daleapp/dale/pedido`;
    console.log(pedidox);
    return this.http.post(url , Pedido)

  } */
  PEDIDO(pedidox: Pedido) {
    const url = `https://www.jgitsolutions.com/daleapp/dale/pedido`;
    return this.http.post(url, Pedido);
  }

/*  realizar_pedido() {
    const data = new URLSearchParams();
    const codigos: number[] = [];
    for (const item of this.items) {
      codigos.push(item.id_servicio);
    }
    console.log(codigos);
    data.append('items', codigos.join(','));

    console.log(codigos.join(','));
    const url = `${URL_SERVICIOS}/pedidos/realizar_pedido/65a340e34c76afbeb8a3214abef298d4a3946cd8/1`;
    return this.http.post(url , data)
    .subscribe((resp: any ) => {
      const respuesta = resp.json();
      if ( respuesta.error ){
        // mostramos error
        Swal.fire({
          title: 'Error en la orden'
        });
      }else{
        // todo bien
       this.items = [];
       Swal.fire({
        title: 'Orden realizada'
      });
      }
  });
    } */
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

  guardar_storage(){
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
