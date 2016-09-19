import { Location } from '@angular/common';
import { AfterViewInit, Component, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Custom Services
import { AuthService } from '../../srvcs/auth.service';

// Materialize variables
declare const $: any;
declare const Materialize: any;

@Component({
  selector: 'my-settings',
  styleUrls: ['./settings.component.css'],
  templateUrl: './settings.component.html'
})

export class SettingsComponent implements AfterViewInit {
  @ViewChildren('inputFirstName') private vcFirstName: any;
  private myForm: FormGroup;
  private userName: string;
  private email: string;
  private firstName: string;
  private lastName: string;
  private password: string;
  private confirmPassword: string;
  private emailRegEx: RegExp;
  private updateInfo: any;
  private update: boolean;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private location: Location
  ) {
    //tslint:disable-next-line
    this.emailRegEx = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
    this.myForm = fb.group({
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      userName: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]]
    });
    this.confirmPassword = '';
    this.email = this.authService.loggedIn.email;
    this.firstName = this.authService.loggedIn.firstName;
    this.lastName = this.authService.loggedIn.lastName;
    this.password = '';
    this.userName = this.authService.loggedIn.userName;
    this.updateInfo = {};
    this.update = false;
  }

  public ngAfterViewInit() {
    window.setTimeout(() => {
      Materialize.updateTextFields();
    }, 100);

    this.vcFirstName.first.nativeElement.focus();
  }

  private onCancel(event: any): void { //tslint:disable-line
    event.preventDefault();
    this.location.back();
  }

  private onKeyupCalcChanges(): void { //tslint:disable-line
    // Clear any existing info
    this.updateInfo = {};
    let toUpdate = false;

    if (this.firstName !== this.authService.loggedIn.firstName) {
      this.updateInfo.firstName = this.firstName;
      toUpdate = true;
    }

    if (this.lastName !== this.authService.loggedIn.lastName) {
      this.updateInfo.lastName = this.lastName;
      toUpdate = true;
    }

    if (this.userName !== this.authService.loggedIn.userName) {
      this.updateInfo.userName = this.userName;
      toUpdate = true;
    }

    if (this.email !== this.authService.loggedIn.email) {
      if (this.email.match(this.emailRegEx) !== null) {
        this.updateInfo.email = this.email;
        toUpdate = true;
      } else {
        toUpdate = false;
      }
    }

    if (this.password !== '') {
      if (this.password.length >= 8 && this.confirmPassword === this.password) {
        this.updateInfo.password = this.password;
        toUpdate = true;
      }
    }

    if (toUpdate) {
      this.update = true;
    } else {
      this.update = false;
    }
  }

  private onSubmit(): void { //tslint:disable-line
    this.authService.patchUser(this.updateInfo)
      .then(() => {
        Materialize.toast('Settings Updated!', 3000, 'rounded');
        this.location.back();
      })
      .catch((errMsg) => {
        Materialize.toast(errMsg, 3000, 'rounded');
      });
  }

  private onKeyupUserName(event: any): void { //tslint:disable-line
    if (event.key.match(/[A-Za-z0-9]+/) === null) {
      this.userName = this.userName.substring(0, this.userName.length - 1);
      const msg = 'User name must alpha-numeric with no spaces';

      Materialize.toast(msg, 3000, 'rounded');
    }
  }

  private onBlurConfirmPassword(): void { //tslint:disable-line
    if (this.password !== this.confirmPassword) {
      Materialize.toast('Passwords do not match!', 3000, 'rounded');
    }
  }

  private onBlurEmail(): void { //tslint:disable-line
    if (this.email.match(this.emailRegEx) === null) {
      Materialize.toast('Must enter a valid email address!', 3000, 'rounded');
    }
  }

  private onKeyUpCapitalize(): void { //tslint:disable-line
    this.firstName = this.capitalize(this.firstName);
    this.lastName = this.capitalize(this.lastName);
  }

  private capitalize(name: string): string {
    if (name === '') {
      return '';
    }

    return `${name[0].toUpperCase()}${name.substring(1)}`;
  }
}
