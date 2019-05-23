export class Category {
  constructor(
    public pk_category_id: number,
    public category_name: string,
    public fk_parent_id: number
  ) {}
}
