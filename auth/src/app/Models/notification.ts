export class Notification {
  public name: string = '';
  public id: string = '';
  public date!: string;
  public url: string = '';
  public receiver: string = '';
  public sender: string = '';
  private readonly publicId = '60539a6801ac562984ae4f93';

  getRoom() {
    if (this.receiver == this.publicId) {
      return this.receiver;
    } else {
      return this.sender;
    }
  }
}
