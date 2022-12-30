import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User, UserService } from "shared/user";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  user$ = this.userService.user$;

  constructor(
    private userService: UserService,
  ) {
  }

  updateUser(user: User): void {
    this.userService.updateUser(user).pipe(
      untilDestroyed(this)
    ).subscribe(() => {
      console.log('xxx user saved')
    })
  }
}
