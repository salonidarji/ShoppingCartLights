export class Wishlist {
  constructor(
    public pk_wishlist_id: number,
    public wishlist_value: number,
    public fk_product_id: number,
    public fk_user_email: string
  ) {}
}
