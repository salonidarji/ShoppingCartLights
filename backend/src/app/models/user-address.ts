export class UserAddress {
  constructor(
    public pk_address_id: number,
    public order_name: string,
    public order_mobile: string,
    public address_line_1: string,
    public address_line_2: string,
    public address_landmark: string,
    public address_pincode: string,
    public address_city: string,
    public fk_user_id: number,
    public is_default: number
  ) {}
}
