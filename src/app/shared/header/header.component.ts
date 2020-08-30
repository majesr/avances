import { Component, OnInit } from '@angular/core';
import {  Servicio, ServiciosService } from '../../services/servicios.service';
import { PedidosService } from '../../services/pedidos.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  items: Servicio[] = [];


  constructor(private servicioService: ServiciosService,
              public pedidoser: PedidosService) { }

  ngOnInit(): void {

  }
  }


