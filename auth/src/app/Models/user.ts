export class User {
  public status: boolean = true;
  public details: any;
  public isVisible: boolean = true;
  public active = false;
  public tik: boolean = false;

  constructor(userData: any) {
    this.details = userData;
    if (userData.alive == true || userData.alive == false) {
      this.status = userData.alive;
    }
  }
}
