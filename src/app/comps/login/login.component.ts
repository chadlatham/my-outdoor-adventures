import { AfterViewInit, Component, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Custom Services
import { AuthService } from '../../srvcs/auth.service';

// Materialize variables
declare const $: any;
declare const Materialize: any;

@Component({
  selector: 'my-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})

export class LoginComponent implements AfterViewInit {
  @ViewChildren('inputUserName') private vcUserName: any;
  private myForm: FormGroup;
  private userName: string;
  private password: string;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.myForm = fb.group({
      password: ['', Validators.required],
      userName: ['', Validators.required]
    });
    this.password = '';
    this.userName = '';
  }

  public ngAfterViewInit() {
    window.setTimeout(() => {
      Materialize.updateTextFields();
    }, 100);
    window.scrollTo(0, 1);
    window.scrollTo(0, 0);
    this.vcUserName.first.nativeElement.focus();
  }

  private onCancel(event: any): void { //tslint:disable-line
    event.preventDefault();
    window.history.back();
  }

  private onSubmit(formFields: Object): void { //tslint:disable-line
    this.authService.login(formFields)
      .then(() => {
        const link = ['/adventurer', this.authService.loggedIn.userName];
        this.router.navigate(link);
      })
      .catch((err) => {
        Materialize.toast('Invalid login', 4000, 'rounded');
      });
  }
}
