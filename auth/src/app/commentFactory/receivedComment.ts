import { Comment } from './comment';

export class ReceivedComment extends Comment {
  constructor(data: any, previousId: string) {
    super(data);
    this.foreign = true;
    this.consecutive(previousId, data.sender);
  }
}
