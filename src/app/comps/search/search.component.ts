import { AfterViewInit, Component, DoCheck } from '@angular/core';

// Custom Services
import { PersistService } from '../../srvcs/persist.service';

@Component({
  selector: 'my-search',
  styleUrls: ['./search.component.css'],
  templateUrl: './search.component.html'
})

export class SearchComponent implements AfterViewInit, DoCheck {
  private lastScrollHeight: number;

  constructor(private persistService: PersistService) {
    this.lastScrollHeight = this.persistService.searchScrollHeight;
  }

  // Lifecycle Hooks
  public ngAfterViewInit() {
    window.scrollTo(0, this.lastScrollHeight);
  }

  public ngDoCheck() {
    this.persistService.searchScrollHeight = window.scrollY;
  }
}
