export class User {
  constructor(
    public pk_user_id: number,
    public user_name: string,
    public user_email: string,
    public user_mobile: string,
    public user_password: string
  ) {}
}
