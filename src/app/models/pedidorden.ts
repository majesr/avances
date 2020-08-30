// import { Usuario } from './usuario';
export class Pedidorde {

  idpedido_i?: number;
  codigo_pedido_i?: string;
  cantidad_i?: string;
  fecha_pedido_i?: string;
  hora_pedido_i?: string;
  activo_i?: string;
  create_at_i?: string;
  update_at_i?: string;
  orden?: Orde[];
  usuario_i?: string;
  idestado_pedido_i?: string;
  forma_pago?: string;
}

class Orde {
  idorden?: number;
  codigo_orden?: string;
  costo_total?: string;
  pagare?: string;
  vuelto?: string;
  activo?: string;
  create_at?: string;
  update_at?: string;
  tipocomprobante?: string;
  proveedor?: string;
  servicios?: servi[];
}

class servi {
  id_servicio?: number;
  nombre_servicio?: string;
  costo?: number;
  idcategoria?: number;
}
