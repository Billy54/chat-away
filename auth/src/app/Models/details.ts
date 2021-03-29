export class Details {
  public custom: boolean = false;
  constructor(
    private url: string,
    private names: string[],
    private id: string,
    private uids: string[]
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

  public get ids() {
    return this.uids;
  }

  public set uNames(v: string) {
    this.names.push(v);
  }

  public set idS(v: string) {
    this.uids.push(v);
  }
}
