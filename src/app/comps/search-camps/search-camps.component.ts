import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators // tslint:disable-line
} from '@angular/forms';

// Custom Services
import { IpInfoService } from '../../srvcs/ip-info.service';

@Component({
  selector: 'my-search-camps',
  styleUrls: ['./search-camps.component.css'],
  templateUrl: './search-camps.component.html'
})

export class SearchCampsComponent implements OnInit {
  private myForm: FormGroup;
  private city: string;
  private state: string;
  private radius: string;
  private name: string;
  private sortby: string;
  private states: Array<string>;
  private lat: number;
  private lon: number;

  constructor(private ipInfoService: IpInfoService, private fb: FormBuilder) {
    this.myForm = fb.group({
      // city: ['', Validators.required],
      city: [''],
      name: [''],
      radius: [''],
      sortby: [''],
      state: ['']
    });
    this.city = '';
    this.state = '';
    this.radius = '200';
    this.name = '';
    this.sortby = 'name';
    this.states = [
      'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
      'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
      'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
      'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
      'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ];
  }

  public ngOnInit() {
    this.ipInfoService.getInfo()
      .then((info: any) => {
        // If the ipInfoService returns a region in the US
        if (this.states.indexOf(info.region_code) >= 0) {
          this.city = info.city;
          this.state = info.region_code;
          this.lat = info.latitude;
          this.lon = info.longitude;
        }
      })
      .catch((err: any) => {
        console.log(err) // tslint:disable-line
      });
  }

  private onSubmit(form: any): void { // tslint:disable-line
    console.log('you submitted value:', form); // tslint:disable-line
  }
}
