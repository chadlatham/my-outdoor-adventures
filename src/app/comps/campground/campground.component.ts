import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.camp = {};
    this.selectedImage = 0;
    this.address = '';
    this.mapUrl = '';
  }

  public ngAfterViewInit(): void {
    window.scrollTo(0, 1);
    window.scrollTo(0, 0);
  }

  public ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      const facilityID = Number.parseInt(params['facilityID']);

      this.facilitiesService.getFacility(facilityID)
        .then((camp: any) => {
          this.camp = camp;
          console.log(this.camp); //tslint:disable-line
          this.updateReferences();
        })
        .catch((err) => {
          Materialize.toast('Invalid FacilityID', 3000, 'rounded');
        });
    });
  }

  // Event handlers
  private onClickGoBack() { //tslint:disable-line
    window.history.back();
  }

  // Private methods
  private getDirections(): string { //tslint:disable-line
    const dir = this.camp.facilityDirections;

    return dir ? `<span>${dir}</span>` : '';
  }

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

  private onClickAdventure(event: any, adventure: any) { //tslint:disable-line
    const target = event.target;

    if (target.nodeName === 'IMG' || target.id === 'materialbox-overlay') {
      return;
    }

    const link = ['/adventurer', adventure.userName];

    this.router.navigate(link);
  }
}
