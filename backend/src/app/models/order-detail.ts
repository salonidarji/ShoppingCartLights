export class OrderDetail {
  constructor(
    public pk_detail_id: number,
    public fk_order_id: number,
    public fk_product_id: number,
    public order_qty: number,
    public order_price: string
  ) {}
}
