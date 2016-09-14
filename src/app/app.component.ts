import '../../public/css/styles.css';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit { // tslint:disable-line

  // tslint:disable-next-line:no-unused-variable
  private title = 'NG2 Routing';

  // Lifecycle hooks
  ngOnInit() {
    console.log('AppComponent init'); // tslint:disable-line
    // Materialize.toast('test', 3000);
  }

}
