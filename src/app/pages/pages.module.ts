import {PagesComponent} from './pages.component';
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/Forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { CommonModule } from '@angular/common';
import { PagosComponent } from './pagos/pagos.component';
import { PruebaComponent } from './prueba/prueba.component';




@NgModule({
    declarations: [
   PagesComponent,
   DashboardComponent,
   ServiciosComponent,
   PedidosComponent,
   OrdenesComponent,
   PagosComponent,
   PruebaComponent
    ],
  imports: [
    CommonModule,
    BrowserModule,
      SharedModule,
      FormsModule,
      PAGES_ROUTES,
      HttpClientModule
     ],
    exports: [
      DashboardComponent,
      ServiciosComponent,
      PedidosComponent,
      OrdenesComponent
  ],
    providers: [],
})
export class PagesModule {}
