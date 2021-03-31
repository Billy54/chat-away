import { SentComment } from './sentComment';
import { ReceivedComment } from './receivedComment';
import { commentInt } from './commentInt';

export class CommentFactory {
  private userId: string = '';
  constructor(uid: string) {
    this.userId = uid;
  }

  public newComment(previous: string, data: any): commentInt {
    if (data.sender == this.userId) {
      return new SentComment(data);
    } else {
      return new ReceivedComment(data, previous);
    }
  }
}
