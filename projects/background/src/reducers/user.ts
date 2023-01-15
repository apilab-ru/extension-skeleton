import { User } from "shared/user/interface";
import { Reducer } from "./reducer";
import { Store } from "../store";

export class UserReducer extends Reducer<Store> {

  update(user: User): void {
    this.store.user.next(user);
  }

}
