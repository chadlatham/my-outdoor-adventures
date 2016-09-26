import * as _ from "lodash";
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

// Custom Services
import { AuthService } from '../../srvcs/auth.service';
import { FacilitiesService } from '../../srvcs/facilities.service';
import { PersistService } from '../../srvcs/persist.service';

// declare const _: any;

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
    private authService: AuthService,
    private facilitiesService: FacilitiesService,
    private persistService: PersistService,
    private router: Router
  ) {
    // Create the default references from the facilities service
    if (this.facilitiesService.facilities.RECDATA) {
      this.updateReferences(this.facilitiesService.facilities);
    }

    this.facilitiesSubscription = facilitiesService.facilitiesUpdated$
      .subscribe((searchResults) => {
        // Update the references based on subscription changes
        this.updateReferences(searchResults);
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

  private onClickCreate(camp: any) { //tslint:disable-line
    const link = ['/adventure', camp.facilityID];
    this.router.navigate(link);
  }

  // Private methods
  private updateReferences(facilities: any) {
    this.searchResults = facilities;
    if (this.searchResults.METADATA) {
      this.count = this.searchResults.METADATA.RESULTS.TOTAL_COUNT;
      // This is a temporary solution to sort camps by name only at time of req.
      this.processResults();

      return;
    }

    this.camps = [];
    this.count = 0;
  }

  // Temp solution. Needs observable subscription to change in button status.
  private processResults() {
    if (this.persistService.searchSortby === 'name') {
      this.camps = _.sortBy(this.searchResults.RECDATA, (camp: any) => {
        return camp.facilityName;
      });
    }
  }
}
