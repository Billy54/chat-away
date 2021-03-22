import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../services/data-share.service';

@Component({
  selector: 'active-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  private readonly publicId = '60539a6801ac562984ae4f93';
  private cId: any;
  public infoName: string = '';
  public info: string = '';
  public url: any;

  constructor(private dataShare: DataShareService) {}

  ngOnInit(): void {
    this.dataShare.status.subscribe((id) => {
      if (id == '' || this.cId == this.publicId) return;
      if (this.info == 'Active now.') {
        this.info = 'Offline.';
      } else {
        this.info = 'Active now.';
      }
    });
    this.dataShare.message.subscribe((message: any = []) => {
      if (message.name != 'default') {
        this.infoName = message.name;
        this.url = message.avatar;
        this.changeStatus(message.status);
      }
    });
  }

  changeStatus(status: boolean) {
    if (status) {
      this.info = 'Active now.';
    } else {
      this.info = 'Offline.';
    }
  }
}
