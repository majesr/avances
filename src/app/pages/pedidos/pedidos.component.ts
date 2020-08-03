import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido.models';
import { ServiciosService, Servicio } from 'src/app/services/servicios.service';
import { PedidosService } from '../../services/pedidos.service';



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  providers: [PedidosService],
})
export class PedidosComponent implements OnInit {
   items: Servicio[] = [];


   carrito: Array<Servicio> = [];
 Pedidox: Pedido = {
      IDPEDIDO: 'X',
      CODIGO_PEDIDO: 'V8',
      CANTIDAD: '6',
      FECHA_PEDIDO: '29/07/2020',
      HORA_PEDIDO: '04:00',
      ACTIVO: '1',
      CREATE_AT: '29/07/2020',
      UPDATE_AT: '29/07/2020',
      IDUSUARIO: '1',
      IDESTADO_PEDIDO: '1',
      IDFORMA_PAGO: '1'
};
constructor(private serviciosservice: ServiciosService,
            public pedidoser: PedidosService) { }
  ngOnInit() {
    this.pedidoser.PEDIDO(this.Pedidox).subscribe((res) => {
      console.log('Res', res);
    });
  }
hacerpedido(){
  this.pedidoser.PEDIDO(this.Pedidox).subscribe((res) => {
    console.log('Res', res);
  });
}
}
