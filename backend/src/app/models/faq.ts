export class Faq {
  constructor(
    public pk_faq_id: number,
    public faq_question: string,
    public faq_answer: string,
    public fk_user_id: string
  ) {}
}
