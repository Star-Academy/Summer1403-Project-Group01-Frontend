import { Component } from '@angular/core';
import User from "../../../interfaces/user";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {UserService} from "../../../services/user/user.service";
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import { heroMagnifyingGlassSolid, heroUserCircleSolid, heroCircleStackSolid } from '@ng-icons/heroicons/solid';
import { ProfileShowComponent } from "../profile-show/profile-show.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink,
    RouterLinkActive,
    NgIconComponent, ProfileShowComponent, EditProfileComponent, ChangePasswordComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  providers: [provideIcons({heroUserCircleSolid, heroMagnifyingGlassSolid, heroCircleStackSolid})]
})
export class ProfileComponent {
  user!: User | undefined;
  selectedTab = 'profile';
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  handleLogout() {
    this.userService.logout();
  }
}
