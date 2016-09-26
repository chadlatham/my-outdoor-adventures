import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// Imported Services
import { FacilitiesService } from '../../srvcs/facilities.service';

// Custom Declarations
declare const $: any;
declare const Materialize: any;

@Component({
  selector: 'my-new-adventure',
  styleUrls: ['./new-adventure.component.css'],
  templateUrl: './new-adventure.component.html'
})

export class NewAdventureComponent implements AfterViewInit, OnInit {
  private camp: any;

  constructor(
    private facilitiesService: FacilitiesService,
    private route: ActivatedRoute
  ) {
    this.camp = {};
  }

  // Lifecycle Hooks
  public ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      const facilityID = Number.parseInt(params['facilityID']);

      this.facilitiesService.getFacility(facilityID)
        .then((camp: any) => {
          this.camp = camp;
        })
        .catch((err) => {
          Materialize.toast('Invalid FacilityID', 3000, 'rounded');
        });
    });
  }

  public ngAfterViewInit(): void {
    window.scrollTo(0, 1);
    window.scrollTo(0, 0);
  }

  // Private methods
  private goBack(): void { //tslint:disable-line
    window.history.back();
  }
}
