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
  private myForm: FormGroup = this.fb.group({
    // city: ['', Validators.required],
    city: [''],
    name: [''],
    radius: [''],
    sortby: [''],
    state: ['']
  });
  private city: string = '';
  private state: string = '';
  private radius: string = '200';
  private name: string = '';
  private sortby: string = 'name';
  private states: Array<string> = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT',
    'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
    'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM',
    'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX',
    'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
  private lat: number;
  private lon: number;

  constructor(private ipInfoService: IpInfoService, private fb: FormBuilder) {}

  public ngOnInit() {
    this.ipInfoService.getInfo()
      .then((info: any) => {
        // If the upInfo returns a region in the US
        if (this.states.indexOf(info.region) >= 0) {
          this.city = info.city;
          this.state = info.region;
          this.lat = info.lat;
          this.lon = info.lon;
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
