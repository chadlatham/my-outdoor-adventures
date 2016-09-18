import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators //tslint:disable-line
} from '@angular/forms';

@Component({
  selector: 'my-search-camps',
  styleUrls: ['./search-camps.component.css'],
  templateUrl: './search-camps.component.html'
})

export class SearchCampsComponent implements OnInit {
  private myForm: FormGroup;
  private city: AbstractControl;
  private state: AbstractControl;
  private radius: AbstractControl;
  private name: AbstractControl;
  private sortby: AbstractControl;
  private states: Array<string>;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      city: [''],
      // city: ['', Validators.required],
      name: [''],
      radius: ['200'],
      sortby: [''],
      state: ['']
    });

    this.city = this.myForm.controls['city'];
    this.state = this.myForm.controls['state'];
    this.radius = this.myForm.controls['radius'];
    this.name = this.myForm.controls['name'];
    this.sortby = this.myForm.controls['sortby'];
    this.states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
  }

  public ngOnInit() {
    console.log('SearchCampsComponent: ngOnInit') //tslint:disable-line
    
  }

  private logVars(control: any): void { //tslint:disable-line
    console.log(this.city); //tslint:disable-line
  }

  private onSubmit(form: any): void { //tslint:disable-line
    console.log('you submitted value:', form); //tslint:disable-line
  }
}
