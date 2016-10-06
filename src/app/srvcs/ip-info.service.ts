import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class IpInfoService {
  // Public properties
  public info: any;
  public states: Array<string>;

  // Observable streams
  public infoUpdated$: Observable<any>;

  // Observable sources
  private infoSource: Subject<any>;

  // Private properties
  private url: string;

  constructor(private http: Http) {
    this.url = 'https://freegeoip.net/json/'; // URL to geolocation API
    this.states = [
      'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
      'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
      'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
      'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
      'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ];
    this.info = {};

    // Instantiate the info observable and pass it an empty object
    this.infoSource = new Subject<any>();
    this.infoUpdated$ = this.infoSource.asObservable();
    this.infoSource.next(this.info);
  }

  public updateInfo(): Promise<any> {
    return this.http.get(this.url)
      .toPromise()
      .then(this.extractData)
      .then((info) => {
        // Update both property and observable stream
        this.info = this.camelizeKeys(info);
        this.infoSource.next(this.info);

        return;
      })
      .catch(this.handleError);
  }

  private camelizeKeys(obj: any): any {
    const newObj = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        let newKey = key.replace(/(?:^|[-_])(\w)/g, (_: any, c: any) => {
          return c ? c.toUpperCase() : '';
        });

        newKey = newKey[0].toLowerCase() + newKey.substring(1);
        newObj[newKey] = obj[key];
      }
    }

    return newObj;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Promise.reject(errMsg);
  }
}
