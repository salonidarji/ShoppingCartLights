export class ProductFeature {
  constructor(
    public pk_product_feature_id: number,
    public fk_feature_id: number,
    public fk_product_id: number,
    public feature_value: string
  ) {}
}
