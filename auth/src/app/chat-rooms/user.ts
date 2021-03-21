export class User {
  public lastComment: string = 'Click to start chatting.';
  public status: boolean = true;
  public details: any;
  public isVisible: boolean = true;
  public active = false;
  public url: string = '';

  constructor(userData: any) {
    this.details = userData;
    this.url = userData.avatar;
    if (userData.id == '60539a6801ac562984ae4f93') {
      this.status == true;
    } else {
      this.status = userData.alive;
    }
  }
}
