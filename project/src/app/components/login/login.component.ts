import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import { heroUser, heroLockClosed, heroArrowLeftEndOnRectangle, heroEyeSlash, heroEye } from '@ng-icons/heroicons/outline';
import {Router} from "@angular/router";
import { BgGifComponent } from '../bg-gif/bg-gif.component';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIconComponent ,BgGifComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [provideIcons({heroUser, heroLockClosed, heroArrowLeftEndOnRectangle,heroEyeSlash ,heroEye })]
})
export class LoginComponent {
  eyeclose = false;
  inputType = 'password';
  formGroup: FormGroup = new FormGroup({
    identifier: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService, private router: Router, private toast: ToastrService) { }

  onSubmit() {
    if (this.formGroup.valid) {
      this.userService.login(this.formGroup.value);
      this.router.navigateByUrl('dashboard');
    } else {
      this.toast
        .error("اشکالی در مقادیر فرم وجو دارد. اطمینان حاصل کنید که حتما نام کاربری یا ایمیل را وارد کرده باشید.");
    }
  }

  changeEyes(){
    this.eyeclose= !this.eyeclose
    if (!this.eyeclose) {
      this.inputType = 'password'
    }
    else {
      this.inputType = 'text'
    }
  }
}
