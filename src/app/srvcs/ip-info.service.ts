import { Injectable }     from '@angular/core';
import {
  Headers,
  Http,
  RequestOptions,
  Response } from '@angular/http';

@Injectable()
export class IpInfoService {
  private url: string;
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.url = 'freegeoip.net/json/'; // URL to geolocation API
    this.headers = new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  public getInfo(): Promise<any> {
    return this.http.get(this.url, this.options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || body || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // tslint:disable-line log to console instead
    return Promise.reject(errMsg);
  }
}
