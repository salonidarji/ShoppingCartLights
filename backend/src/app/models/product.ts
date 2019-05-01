export class Product {
  constructor(
    public pk_product_id: number,
    public product_name: string,
    public product_desc: string,
    public product_price: string,
    public product_sale_price: string,
    public fk_category_id: number
  ) {}
}
