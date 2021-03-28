import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../commentFactory/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() data: Comment | any;

  constructor() {}
  ngOnInit() {}
}
