import { Injectable } from '@angular/core';
import { BackgroundService } from "background";
import { Observable } from "rxjs";
import { GithubRepo } from "shared/github";
import { User } from "shared/user";

@Injectable({
  providedIn: 'root'
})
export class CabinetService {
  repos$: Observable<GithubRepo[] | undefined>

  constructor(
    private backgroundService: BackgroundService,
  ) {
    this.backgroundService.fetch('boredApi', 'fetchBored')([1, 1]).subscribe(data => {
      console.log('xxx data', data);
    })

    this.repos$ = this.backgroundService.select('repos');
  }

  updateUser(user: User): Observable<void> {
    return this.backgroundService.reduce('user', 'update')(user);
  }
}
