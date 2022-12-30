import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CabinetService } from "./services/cabinet.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { User } from "shared/user";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { UserService } from "shared/user/services/user.service";

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  repos$ = this.cabinetService.repos$;
  user$ = this.userService.user$;

  constructor(
    private cabinetService: CabinetService,
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
