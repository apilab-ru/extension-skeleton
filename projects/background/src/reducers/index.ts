import { UserReducer } from "./user";
import { store$ } from "../store";

export const reducers = {
  user: new UserReducer(store$),
}

export type Reducers = typeof reducers;
