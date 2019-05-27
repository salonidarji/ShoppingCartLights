export class Cart {
  constructor(
    public pk_cart_id: number,
    public fk_user_email_id: number,
    public fk_product_id: number,
    public product_qty: number
  ) {}
}
