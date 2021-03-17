import { Component, Input, OnInit } from '@angular/core';
import { CommentFactoryService } from '../services/comment-factory.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  constructor(comentFactory: CommentFactoryService) {}

  @Input() data: any;
  @Input() foreign: boolean = false;
  @Input() isFirst: boolean = true;
  shouldBeRendered: boolean = true;

  ngOnInit(): void {
    if (
      this.data.text == '' ||
      this.data.senderName == '' ||
      this.data.senderName == 'default' ||
      this.data.sender == 'default'
    ) {
      this.shouldBeRendered = false;
    }
  }
}
