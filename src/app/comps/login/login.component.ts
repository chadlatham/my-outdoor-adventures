import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'my-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})

export class LoginComponent implements AfterViewInit { // tslint:disable-line
  ngAfterViewInit() {
    console.log('LoginComponent: AfterViewInit'); // tslint:disable-line
    // Materialize.toast('test', 3000); // tslint:disable-line
  }
}
