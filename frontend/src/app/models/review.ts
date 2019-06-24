export class Review {
  constructor(
    public pk_review_id: number,
    public fk_product_id: number,
    public fk_user_id: string,
    public review_detail: string
  ) {}
}
