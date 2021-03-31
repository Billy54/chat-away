import { formatDate } from '@angular/common';

export class Notification {
  public name: string = '';
  public custom: boolean = false;
  public date!: string;
  public url: string = '';
  public receiver: string = '';
  public sender: string = '';
  public text: string = '';

  constructor(data: any) {
    this.date = formatDate(
      new Date(),
      'dd/MM/yyyy hh:mm:ss a',
      'en-US',
      '+0530'
    );
    this.name = data.senderName;
    this.sender = data.sender;
    this.receiver = data.receiver;
    this.url = data.url;
    this.custom = data.custom;
    this.text = data.text;
  }

  getRoom() {
    if (this.custom) {
      return this.receiver;
    } else {
      return this.sender;
    }
  }
}
