export class Pedido {

  constructor(
    public IDPEDIDO?: string,
    public CODIGO_PEDIDO?: string,
    public CANTIDAD?: string,
    public FECHA_PEDIDO?: string,
    public HORA_PEDIDO?: string,
    public ACTIVO?: string,
    public CREATE_AT?: string,
    public UPDATE_AT?: string,
    public IDUSUARIO?: string,
    public IDESTADO_PEDIDO?: string,
    public IDFORMA_PAGO?: string
  ) { }

}
