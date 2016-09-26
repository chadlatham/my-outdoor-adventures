import {
  AfterViewInit,
  Component,
  OnDestroy,
  ViewChildren
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

// Custom Services
import { FacilitiesService } from '../../srvcs/facilities.service';
import { IpInfoService } from '../../srvcs/ip-info.service';
import { PersistService } from '../../srvcs/persist.service';

// Materialize variables
declare const $: any;
declare const Materialize: any;

@Component({
  selector: 'my-search-camps',
  styleUrls: ['./search-camps.component.css'],
  templateUrl: './search-camps.component.html'
})

export class SearchCampsComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('inputCity') private vcCity: any;
  private myForm: FormGroup;
  private city: string;
  private state: string;
  private radius: string;
  private name: string;
  private sortby: string;
  private infoSubscription: Subscription;

  constructor(
    private facilitiesService: FacilitiesService,
    private fb: FormBuilder,
    private ipInfoService: IpInfoService,
    private persistService: PersistService
  ) {
    this.myForm = fb.group({
      city: [''],
      name: [''],
      radius: [''],
      sortby: [{ disabled: true, value: '' }],
      state: ['']
    });
    this.retrievePersistedData();

    this.infoSubscription = ipInfoService.infoUpdated$.subscribe((info) => {
      if (info.city) {
        this.city = info.city;
        this.state = info.regionCode;
        this.persistData();
      }
    });
  }

  // Lifecycle Hooks
  public ngAfterViewInit() {
    window.setTimeout(() => {
      Materialize.updateTextFields();
    }, 100);

    this.vcCity.first.nativeElement.focus();
    $('#state, #radius').on('change', 'select', this.persistForm.bind(this));
  }

  public ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.infoSubscription.unsubscribe();
  }

  // Event Handlers
  private onSubmit(): void { // tslint:disable-line
    this.persistService.searchInProgress = true;
    this.persistService.searchChanged = false;
    if (!this.persistService.searchOffsetClicked) {
      this.persistService.searchOffset = 0;
    }

    this.facilitiesService.clearFacilities();
    window.scrollTo(0, 0);
    const search: any = {};

    this.facilitiesService.getGeoCode(this.city, this.state)
      .then((results) => {
        if (results.partialMatch) {
          Materialize.toast(`No exact match using:
            ${results.formattedAddress}`, 3000, 'rounded');
        }

        // Build search object
        // { latitude, longitude, radius, query, limit, offset }
        search.latitude = results.geometry.location.lat;
        search.longitude = results.geometry.location.lng;
        search.radius = Number.parseInt(this.radius);
        if (this.name !== '') {
          search.query = this.name;
        }
        search.limit = this.persistService.searchLimit;
        search.offset = this.persistService.searchOffset;

        return this.facilitiesService.updateFacilities(search);
      })
      .then(() => {
        this.persistService.searchInProgress = false;
        this.persistService.searchOffsetClicked = false;
      })
      .catch((errMsg) => {
        Materialize.toast(errMsg, 3000, 'rounded');
        this.persistService.searchInProgress = false;
        this.persistService.searchOffsetClicked = false;
      });
  }

  private onClickOffset(offset: number) { //tslint:disable-line
    this.persistService.searchOffsetClicked = true;
    this.persistService.searchOffset += offset;
  }

  private persistForm() { //tslint:disable-line
    this.persistService.searchChanged = true;
    this.persistData();
  }

  private capitalize() { //tslint:disable-line
    this.city = this.toTitleCase(this.city);
    this.name = this.toTitleCase(this.name);
  }

  private toTitleCase(str: string) {
    if (str === '') {
      return '';
    }

    return str.replace(/\w\S*/g, (txt: string) => {
      return `${txt[0].toUpperCase()}${txt.substr(1).toLowerCase()}`;
    });
  }

  private persistData() {
    this.persistService.searchCity = this.city;
    this.persistService.searchState = this.state;
    this.persistService.searchRadius = this.radius;
    this.persistService.searchName = this.name;
    this.persistService.searchSortby = this.sortby;
    this.persistService.searchOffset = 0;
  }

  private retrievePersistedData() {
    this.city = this.persistService.searchCity;
    this.state = this.persistService.searchState;
    this.radius = this.persistService.searchRadius;
    this.name = this.persistService.searchName;
    this.sortby = this.persistService.searchSortby;
  }
}
