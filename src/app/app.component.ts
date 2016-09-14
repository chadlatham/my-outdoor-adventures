import '../../public/css/styles.css';
import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewChecked { // tslint:disable-line

  // tslint:disable-next-line:no-unused-variable
  private title = 'My Outdoor Adventures';

  // Lifecycle hooks
  ngAfterViewChecked() {
    console.log('AppComponent AfterViewChecked'); // tslint:disable-line
    // Materialize.toast('test', 3000); // tslint:disable-line
  }

}
