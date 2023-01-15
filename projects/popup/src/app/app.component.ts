import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User, UserService } from "shared/user";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { BrowserApiService } from "./services/browser-api.service";

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  user$ = this.userService.user$;

  constructor(
    private userService: UserService,
    private browserApiService: BrowserApiService,
  ) {
  }

  ngOnInit(): void {
    console.log('xxx start');

    this.browserApiService.getActiveTab().then(tab => {
      console.log('xxx tab', tab);

      return this.browserApiService.executeScriptOnTab(tab.id!, this.readDocumentTitle)
    }).then(res => {
       console.log('xxx document title', res);
    }).catch(err => {
      console.error('error', err)
    })
  }

  updateUser(user: User): void {
    this.userService.updateUser(user).pipe(
      untilDestroyed(this)
    ).subscribe(() => {
      console.log('xxx user saved')
    })
  }

  private readDocumentTitle = (): string | null => {
    const title = document.title;
    return title || null;
  }
}
