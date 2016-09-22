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
  selector: 'my-register',
  styleUrls: ['./register.component.css'],
  templateUrl: './register.component.html'
})

export class RegisterComponent implements AfterViewInit {
  @ViewChildren('inputFirstName') private vcFirstName: any;
  private myForm: FormGroup;
  private userName: string;
  private email: string;
  private firstName: string;
  private lastName: string;
  private password: string;
  private confirmPassword: string;
  private emailRegEx: RegExp;

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
      userName: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]+')]]
    });
    this.confirmPassword = '';
    this.email = '';
    this.firstName = '';
    this.lastName = '';
    this.password = '';
    this.userName = '';
  }

  public ngAfterViewInit() {
    window.setTimeout(() => {
      Materialize.updateTextFields();
    }, 100);
    window.scrollTo(0, 1);
    window.scrollTo(0, 0);
    this.vcFirstName.first.nativeElement.focus();
  }

  private onCancel(event: any): void { //tslint:disable-line
    event.preventDefault();
    this.location.back();
    // window.history.back();
  }

  private onSubmit(formFields: Object): void { //tslint:disable-line
    if (this.email.match(this.emailRegEx) === null) {
      return Materialize.toast('Invalid email address!', 3000, 'rounded');
    }

    if (this.password !== this.confirmPassword) {
      return Materialize.toast('Passwords do not match!', 3000, 'rounded');
    }

    const user = {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      userName: this.userName
    };

    this.authService.createUser(user)
      .then((newUser) => {
        return this.authService.login({
          password: this.password,
          userName: this.userName
        });
      })
      .then(() => {
        const link = ['/adventurer', this.authService.loggedIn.userName];
        this.router.navigate(link);
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
