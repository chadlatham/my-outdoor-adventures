import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AdventuresService {
  // Public properties
  public adventures: any;

  // Observable streams
  public adventuresUpdated$: Observable<any>;

  // Observable sources
  private adventuresSource: Subject<any>;

  // Private properties
  private options: RequestOptions;
  private url: string;

  constructor(private http: Http) {
    this.url = 'api/adventures';
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      })
    });

    // Instantiate the facilities observable and pass it an empty object
    this.adventures = [];
    this.adventuresSource = new Subject<any>();
    this.adventuresUpdated$ = this.adventuresSource.asObservable();
    this.adventuresSource.next(this.adventures);
  }

  public updateAdventures(userName: string): Promise<any> {

    return this.http.get(`${this.url}/${userName}`, this.options)
      .toPromise()
      .then(this.extractData)
      .then((adventures: any) => {
        this.adventures = adventures;
        this.adventuresSource.next(this.adventures);
      })
      .catch(this.handleError);
  }

  public createAdv(adv: any): Promise<any> {
    return this.http.post(this.url, JSON.stringify(adv), this.options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) { //tslint:disable-line
    let body = res.json();
    return body.data || body || {};
  }

  private handleError(error: any) {
    let errMsg: string;

    if (!error.text || error.text() === '') {
      errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    } else {
      errMsg = error.text();
    }

    return Promise.reject(errMsg);
  }
}
