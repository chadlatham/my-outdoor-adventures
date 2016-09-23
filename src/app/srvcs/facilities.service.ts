import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FacilitiesService {
  // Public properties
  public facilities: any;

  // Observable streams
  public facilitiesUpdated$: Observable<any>;

  // Observable sources
  private facilitiesSource: Subject<any>;

  // Private properties
  private headers: Headers;
  private options: RequestOptions;
  private urlFacilities: string;
  private urlGeoCode: string;

  constructor(private http: Http) {
    this.urlFacilities = 'api/facilities';
    this.urlGeoCode = 'api/geocode';
    this.headers = new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
    this.facilities = {};

    // Instantiate the facilities observable and pass it an empty object
    this.facilitiesSource = new Subject<any>();
    this.facilitiesUpdated$ = this.facilitiesSource.asObservable();
    this.facilitiesSource.next(this.facilities);
  }

  public getGeoCode(city: string, state: string): Promise<any> {
    const cityText = (city !== '' ? `city=${city.trim()}` : '');
    const stateText = (state !== '' ? `state=${state.trim()}` : '');
    const joinText = (cityText !== '' && stateText !== '' ? '&' : '');
    const query = `?${cityText}${joinText}${stateText}`;

    return this.http.get(`${this.urlGeoCode}${query}`, this.options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  // search is an object: { latitude, longitude, radius, query, limit, offset }
  public updateFacilities(search: any): Promise<any> {
    let query: string = '';

    for (const key in search) {
      if (search.hasOwnProperty(key)) {
        query += `${key}=${search[key]}&`;
      }
    }

    query = query.substring(0, query.length - 1);
    return this.http.get(`${this.urlFacilities}?${query}`, this.options)
      .toPromise()
      .then(this.extractData)
      .then((retFacilities) => {
        this.facilities = retFacilities;
        this.facilitiesSource.next(this.facilities);
        console.log(this.facilities);
      })
      .catch(this.handleError);
  }

  public getFacility(facilityID: number): Promise<any> {
    if (this.facilities.RECDATA) {
      let foundCamp: any;

      for (const facility of this.facilities.RECDATA) {
        if (facility.facilityID === facilityID) {
          foundCamp = facility;
        }
      }

      if (foundCamp) {
        return new Promise((resolve, reject) => {
          resolve(foundCamp);
        });
      }
    }

    return this.http.get(`${this.urlFacilities}/${facilityID}`, this.options)
      .toPromise()
      .then(this.extractData)
      .then((retFacility) => {
        if (this.facilities.RECDATA) {
          const newFacilities: any = Object.assign({}, this.facilities);

          newFacilities.RECDATA.push(retFacility);
          this.facilities = newFacilities;
          this.facilitiesSource.next(this.facilities);
        }

        return retFacility;
      })
      .catch(this.handleError);
  }

  public clearFacilities() {
    this.facilities = {};
    this.facilitiesSource.next(this.facilities);
  }

  private extractData(res: Response) { //tslint:disable-line
    let body = res.json();
    return body.data || body || {};
  }

  private handleError(error: any) { //tslint:disable-line
    let errMsg: string;

    if (error.text() === '') {
      errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    } else {
      errMsg = error.text();
    }

    return Promise.reject(errMsg);
  }
}
