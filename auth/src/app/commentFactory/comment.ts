import { commentInt } from './commentInt';

export class Comment implements commentInt {
  //declare as public for now
  public text: string = '';
  public url: string = '';
  public name: string = '';
  public isFirst: boolean = true;
  public foreign: boolean = false;
  public shouldBeRendered: boolean = true;

  constructor(data: any) {
    this.text = data.text;
    this.url = data.url;
    this.name = data.senderName;
  }

  consecutive(previous: string, id: string): void {
    if (previous == id) {
      this.isFirst = false;
    }
  }
}
