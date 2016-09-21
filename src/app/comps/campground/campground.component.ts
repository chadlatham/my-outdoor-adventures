import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// Custom Services
import { FacilitiesService } from '../../srvcs/facilities.service';

@Component({
  selector: 'my-campground',
  styleUrls: ['./campground.component.css'],
  templateUrl: './campground.component.html'
})

export class CampgroundComponent implements OnInit {

  // Private properties
  @Input() private camp: any;

  constructor(
    private facilitiesService: FacilitiesService,
    private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      // The + is like Number.parseInt
      const facilityID = Number.parseInt(params['facilityID']);
      this.facilitiesService.getFacility(facilityID)
        .then((camp: any) => {
          this.camp = camp;
        });
    });
  }

  // Event handlers
  // private goBack(): void {
  //   window.history.back();
  // }
}
