export class Order {
  constructor(
    public pk_order_id: number,
    public order_date: string,
    public fk_user_id: number,
    public address_name: string,
    public address_mobile: string,
    public address_line_1: string,
    public address_line_2: string,
    public address_landmark: string,
    public address_pincode: string,
    public address_city: string
  ) {}
}
