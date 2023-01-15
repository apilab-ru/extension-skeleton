import { GithubRepo } from "shared/github";
import { User } from "shared/user/interface";

type Optional<T> = T | undefined;

export const STORE_DATA = {
  user: undefined as Optional<User>,
  repos: undefined as Optional<GithubRepo[]>,
}
