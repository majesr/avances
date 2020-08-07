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

constructor(private serviciosservice: ServiciosService,
            public pedidoser: PedidosService) { }
  ngOnInit() {

  }

}
