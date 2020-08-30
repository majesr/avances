import { Component, OnInit } from '@angular/core';
import { ServiciosService, Servicio } from 'src/app/services/servicios.service';
import { PedidosService } from '../../services/pedidos.service';
import { Pedidorde } from 'src/app/models/pedidorden';
declare const message: any;



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  providers: [PedidosService],
})
export class PedidosComponent implements OnInit {

  items: Servicio[] = [];
  carrito: Array<Servicio> = [];
 /*  Pedidox: Pedidorde = {
    idpedido_i: 'x',
    codigo_pedido_i: 'manuele',
    cantidad_i: '7',
    fecha_pedido_i: '00:00',
    hora_pedido_i: '12/09/2020',
    activo_i: '1',
    create_at_i: '12/09/2020',
    update_at_i: '12/09/2020',
    usuario_i: '1',
    idestado_pedido_i: '1',
    forma_pago: '1'

  }; */
  constructor(private serviciosservice: ServiciosService,
              public pedidoser: PedidosService) { }
  ngOnInit() {

 //   console.log(this.Pedidox);
  }
/*  hacerpedido() {

    this.pedidoser.PEDIDO(this.Pedidox).subscribe((res) => {
      console.log('Res', res);
    });


  } */
}
