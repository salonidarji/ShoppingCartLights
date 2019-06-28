export class OrderDetail {
  constructor(
    public pk_detail_id: number,
    public fk_order_id: number,
    public fk_product_id: number,
    public detail_qty: number,
    public detail_price: string
  ) {}
}

export class OrderDetailHistory {
  constructor(
    public pk_detail_id: number,
    public fk_order_id: number,
    public fk_product_id: number,
    public detail_qty: number,
    public detail_price: string,
    public product_name: string,
    public product_sale_price: string
  ) {}
}
