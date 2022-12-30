import { makeStore } from "./helpers";
import { STORE_DATA } from "./const";
import { filter, of, shareReplay, switchMap } from "rxjs";
import { githubApi } from "shared/github";

export type Store = typeof STORE_DATA;

export const store$ = makeStore(STORE_DATA);

store$.reload('repos', store$.select('user').pipe(
  filter(user => !!user),
  switchMap(user => user?.git ? githubApi.fetchRepos(user!.git) : of([])),
  shareReplay({ refCount: false, bufferSize: 1 }),
));
