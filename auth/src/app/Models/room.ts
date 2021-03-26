export class Room {
  private commentsList: any = Array<Object>();
  private senderId: string = '';
  private lastComment: string = '';
  private custom = false;

  constructor(list: any, id: any) {
    this.commentsList = list;
    this.senderId = id;
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
