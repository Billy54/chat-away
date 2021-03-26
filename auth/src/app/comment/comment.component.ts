import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() data: any;
  @Input() previousId: any;
  public foreign: boolean = false;
  public isFirst: boolean = true;
  public shouldBeRendered: boolean = true;
  private uid = this.auth.getUserInfo().id;

  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    if (this.data.sender == 'default') {
      this.shouldBeRendered = false;
    } else if (this.data.sender != this.uid) {
      this.foreign = true;
      this.isConsecutive();
    }
  }

  isConsecutive() {
    if (this.data.sender == this.previousId) {
      this.isFirst = false;
    }
  }
}
