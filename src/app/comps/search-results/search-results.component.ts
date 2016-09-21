import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

// Custom Services
import { FacilitiesService } from '../../srvcs/facilities.service';

@Component({
  selector: 'my-search-results',
  styleUrls: ['./search-results.component.css'],
  templateUrl: './search-results.component.html'
})

export class SearchResultsComponent implements OnDestroy {
  private facilitiesSubscription: Subscription;
  private searchResults: any;
  private count: number;
  private camps: Array<any>;

  constructor(
    private facilitiesService: FacilitiesService,
    private router: Router
  ) {
    // Create the default references from the facilities service
    if (this.facilitiesService.facilities.RECDATA) {
      this.updateReferences(this.facilitiesService.facilities);
    }

    this.facilitiesSubscription = facilitiesService.facilitiesUpdated$
      .subscribe((searchResults) => {
        // Update the references based on subscription changes
        if (searchResults.RECDATA) {
          this.updateReferences(searchResults);
          console.log(this.searchResults); //tslint:disable-line
        }
      });
  }

  // Lifecycle Hooks
  public ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.facilitiesSubscription.unsubscribe();
  }

  // Event handlers
  private onClickCamp(camp: any) { //tslint:disable-line
    const link = ['/campground', camp.facilityID];
    this.router.navigate(link);
  }

  // Private methods
  private updateReferences(facilities: any) {
    this.searchResults = facilities;
    this.count = this.searchResults.METADATA.RESULTS.TOTAL_COUNT;
    this.camps = this.searchResults.RECDATA;
  }
}
