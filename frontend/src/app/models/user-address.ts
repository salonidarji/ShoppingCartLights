export class UserAddress {
  constructor(
    public pk_address_id: number,
    public address_name: string,
    public address_mobile: string,
    public address_line_1: string,
    public address_line_2: string,
    public address_landmark: string,
    public address_pincode: string,
    public address_city: string,
    public fk_user_id: number,
    public is_default: number
  ) {}
}
