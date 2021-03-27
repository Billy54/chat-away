export class Room {
  private commentsList: any = Array<Object>();
  private senderId: string = '';
  private roomId: string = '';

  constructor(list: any, id: any, rid: any) {
    this.commentsList = list;
    this.senderId = id;
    this.roomId = rid;
  }

  public get id() {
    return this.roomId;
  }

  public addComment(comment: any) {
    this.commentsList.push(comment);
  }

  public getSender() {
    return this.senderId;
  }

  public getComments() {
    return this.commentsList;
  }
}
