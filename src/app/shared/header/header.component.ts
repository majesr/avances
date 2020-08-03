import { Component, OnInit } from '@angular/core';
import {  ServiciosService } from '../../services/servicios.service';
import { PedidosService } from '../../services/pedidos.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {




  constructor(private servicioService: ServiciosService,
              public pedidoser: PedidosService ) { }

  ngOnInit(): void {

  }
  }


