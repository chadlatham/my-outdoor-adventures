import { Component, OnInit } from '@angular/core';

// Custom Services
import { AuthService } from '../../srvcs/auth.service';

@Component({
  selector: 'my-search-results',
  styleUrls: ['./search-results.component.css'],
  templateUrl: './search-results.component.html'
})

export class SearchResultsComponent implements OnInit {
  constructor(private authService: AuthService) {

  }

  public ngOnInit() {
    console.log(this.authService.loggedIn); // tslint:disable-line
  }
}
