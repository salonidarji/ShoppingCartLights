export class ProductImage {
  constructor(
    public pk_image_id: number,
    public image_url: string,
    public fk_product_id: number
  ) {}
}
