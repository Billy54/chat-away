import { Room } from './Models/room';
import { User } from './Models/user';

//static fields holding the most important data of the app
//so every component can use them independently
export class appState {
  private static users: User[] = [];
  private static rooms: Room[] = [];
  public static index: number = 0;

  public static get() {
    return this.users;
  }

  public static addUser(user: any) {
    this.users.push(new User(user));
  }

  public static addRoom(room: Room) {
    this.rooms.push(room);
  }

  public static getRooms() {
    return this.rooms;
  }

  public static clear() {
    this.users = [];
    this.rooms = [];
    this.index = 0;
  }
}
