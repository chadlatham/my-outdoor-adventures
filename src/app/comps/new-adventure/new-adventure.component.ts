import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

// Imported Services
import { AdventuresService } from '../../srvcs/adventures.service';
import { FacilitiesService } from '../../srvcs/facilities.service';
import { ImageService } from '../../srvcs/image.service';

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
  private myForm: FormGroup;
  private dateFirstOptions: any;
  private dateLastOptions: any;
  private dateFirst: Date; //tslint:disable-line
  private dateLast: Date; //tslint:disable-line
  private imageSelected: boolean;
  private description: string;
  private recommend: string;
  private descCtrl: AbstractControl;
  private image: File;
  private imgCtrl: AbstractControl;
  private submitProgress: boolean;

  constructor(
    private adventuresService: AdventuresService,
    private facilitiesService: FacilitiesService,
    private fb: FormBuilder,
    private imageService: ImageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.myForm = fb.group({
      description: [''],
      image: [''],
      recommend: ['']
    });
    this.description = '';
    this.recommend = '';
    this.descCtrl = this.myForm.controls['description'];
    this.imgCtrl = this.myForm.controls['image'];
    this.dateFirstOptions = {
      dateFormat: 'mm/dd/yyyy',
      disableUntil: {
        day: 31,
        month: 8,
        year: 2016
      },
      selectionTxtFontSize: '16px',
      showDateFormatPlaceholder: true,
      sunHighlight: false,
      todayBtnTxt: 'Today'
    };
    this.dateLastOptions = {
      dateFormat: 'mm/dd/yyyy',
      disableUntil: {
        day: 31,
        month: 8,
        year: 2016
      },
      selectionTxtFontSize: '16px',
      showDateFormatPlaceholder: true,
      sunHighlight: false,
      todayBtnTxt: 'Today'
    };
    this.imageSelected = false;
    this.submitProgress = false;
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

  // Event Handlers
  private onSubmit(values: any): void { //tslint:disable-line
    event.preventDefault();
    this.submitProgress = true;
    this.imageService.uploadImage(this.image)
      .then((cloudRes: any) => {
        const adv = {
          facilityName: this.camp.facilityName,
          imgPublicId: cloudRes.public_id,
          recommend: this.recommend === 'Yes',
          reviewText: this.description,
          ridbFacilityId: this.camp.facilityID,
          tripFromDate: this.dateFirst,
          tripToDate: this.dateLast
        };

        return this.adventuresService.createAdv(adv);
      })
      .then((newAdv: any) => {
        this.submitProgress = false;
        Materialize.toast('Adventure Created!', 3000, 'rounded');
        const link = ['/adventurer', newAdv.userName];

        this.router.navigate(link);
      })
      .catch((err: any) => {
        this.submitProgress = false;
        Materialize.toast(err, 3000, 'rounded');
      });
  }

  private onCancel(event: any): void { //tslint:disable-line
    event.preventDefault();
    window.history.back();
  }

  private onDateChangedFirst(event: any) { //tslint:disable-line
    if (event.date.day) {
      const dt = event.date;
      const date = new Date(dt.year, dt.month - 1, dt.day);
      const newDate = new Date(date.setDate(date.getDate() - 1));
      const disableUntil = {
        day: newDate.getDate(),
        month: newDate.getMonth() + 1,
        year: newDate.getFullYear()
      };

      this.dateLastOptions.disableUntil = disableUntil;
    }
    this.updateDate('dateFirst', event.date);
  }

  private onDateChangedLast(event: any) { //tslint:disable-line
    this.updateDate('dateLast', event.date);
    if (this.dateLast < this.dateFirst) {
      this.dateLast = undefined;
      Materialize.toast('Last date must be on or after first date', 3000, 'rounded');
    }
  }

  private onChangeImg(event: any) { //tslint:disable-line
    const fl = event.target.files;

    if (fl.length) {
      this.imageSelected = true;
      this.image = fl[0];
    } else {
      this.imageSelected = false;
      delete this.image;
    }
  }

  // Private Methods
  private updateDate(ref: string, dt: any) {
    this[ref] = dt.day ? new Date(dt.year, dt.month - 1, dt.day) : undefined;
  }

  private disableSubmit(): boolean { //tslint:disable-line
    let submit = true;

    // Check the date fields
    submit = submit && !!this.dateFirst && !!this.dateLast;

    // Check the uploaded image
    submit = submit && this.imageSelected;

    // Check the validity of the description
    submit = submit && this.descCtrl.valid && this.descCtrl.dirty;

    // Check the presence of a recommendation
    submit = submit && this.recommend !== '';

    return !submit;
  }
}
