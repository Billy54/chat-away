export class Details {
  constructor(
    private url: string,
    private names: string[],
    private id: string
  ) {}

  public get avatar() {
    return this.url;
  }

  public get rid() {
    return this.id;
  }

  public get unames() {
    return this.names;
  }
}
