import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// Custom Services
import { FacilitiesService } from '../../srvcs/facilities.service';

declare const $: any;
declare const Materialize: any;

@Component({
  selector: 'my-campground',
  styleUrls: ['./campground.component.css'],
  templateUrl: './campground.component.html'
})

export class CampgroundComponent implements AfterViewInit, OnInit {

  // Private properties
  // @Input() private camp: any;
  private camp: any;
  private selectedImage: number;
  private address: string;
  private mapUrl: string;

  constructor(
    private facilitiesService: FacilitiesService,
    private route: ActivatedRoute
  ) {
    this.camp = {};
    this.selectedImage = 0;
    this.address = '';
    this.mapUrl = '';
  }

  public ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

  public ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      const facilityID = Number.parseInt(params['facilityID']);

      this.facilitiesService.getFacility(facilityID)
        .then((camp: any) => {
          this.camp = camp;
          this.updateReferences();
        })
        .catch((err) => {
          Materialize.toast('Invalid FacilityID', 3000, 'rounded');
        });
    });
  }

  // Private methods
  private updateReferences() {
    if (!this.camp.FACILITYADDRESS.length) {
      this.address = '';

      return;
    }

    this.address = this.calcAddress();
    this.mapUrl = `https://maps.google.com/maps?q=${this.camp.facilityLatitude},${this.camp.facilityLongitude}&ll=${this.camp.facilityLatitude},${this.camp.facilityLongitude}&z=11`; //tslint:disable-line
  }

  private calcAddress(): string {
    const address = this.camp.FACILITYADDRESS[0];
    let newAddress = '';

    newAddress = address.facilityStreetAddress1;
    if (newAddress) {
      newAddress += address.facilityStreetAddress2 ?
        `, ${address.facilityStreetAddress2}` : '';
    } else {
      newAddress += address.facilityStreetAddress2;
    }

    if (newAddress) {
      newAddress += address.facilityStreetAddress3 ?
        `, ${address.facilityStreetAddress3}` : '';
    } else {
      newAddress += address.facilityStreetAddress3;
    }

    if (newAddress) {
      newAddress += address.city ? `, ${address.city}` : '';
    } else {
      newAddress += address.city;
    }

    if (newAddress) {
      if (address.city) {
        if (address.addressStateCode) {
          newAddress += ` ${address.addressStateCode}`;
        } else {
          newAddress += `, ${address.addressStateCode}`;
        }
      } else {
        newAddress += `, ${address.addressStateCode}`;
      }
    } else {
      newAddress += address.addressStateCode;
    }

    if (newAddress) {
      newAddress += address.postalCode ? `, ${address.postalCode}` : '';
    } else {
      newAddress += address.postalCode;
    }

    return newAddress;
  }
}
