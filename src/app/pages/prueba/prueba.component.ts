import { Component, OnInit } from '@angular/core';
import { Pedidorde } from 'src/app/models/pedidorden';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  model: Pedidorde = {
    idpedido_i: 0,
    codigo_pedido_i: '',
    cantidad_i: '',
    fecha_pedido_i: '',
    hora_pedido_i: '12/09/2020',
    activo_i: '1',
    create_at_i: '12/09/2020',
    update_at_i: '12/09/2020',
    orden: [{
      idorden: 0,
      codigo_orden: '',
      costo_total: '',
      pagare: '',
      vuelto: '',
      activo: '1',
      create_at: '',
      update_at: '',
      tipocomprobante: '1',
      proveedor: '1',
      servicios: [{
        id_servicio: 0,
        nombre_servicio: '',
        costo: 0,
        idcategoria: 0

      }],
    }],
    usuario_i: '1',
    idestado_pedido_i: '1',
    forma_pago: '2'
  };
  constructor( private pedidoser: PedidosService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.model);
//    this.pedidoser.guardar_pedido(this.model)
 //     .subscribe((response: Pedidorde) => console.log(response));
}
}
