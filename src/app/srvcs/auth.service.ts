import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthService {
  public loggedIn: any;
  private headers: Headers;
  private options: RequestOptions;
  private urlAuth: string;
  private urlUsers: string;

  constructor(private http: Http) {
    this.loggedIn = {};
    this.updateCookies();
    this.urlAuth = 'api/auth';
    this.urlUsers = 'api/users';
    this.headers = new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  public login(body: any): Promise<any> {
    return this.http.post(this.urlAuth, JSON.stringify(body), this.options)
      .toPromise()
      .then(() => {
        this.updateCookies();

        return;
      })
      .catch(this.handleError);
  }

  public logout(): Promise<any> {
    return this.http.delete(this.urlAuth, this.options)
      .toPromise()
      .then(() => {
        this.updateCookies();

        return;
      })
      .catch(this.handleError);
  }

  public updateCookies(): void {
    const loggedIn = Cookie.get('loggedIn');
    if (loggedIn !== null) {
      this.loggedIn = JSON.parse(loggedIn.substring(2));
    } else {
      this.loggedIn = {};
    }
  }

  public createUser(user: any): Promise<any> {
    return this.http.post(this.urlUsers, JSON.stringify(user), this.options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public deleteUser(): Promise<any> {
    return this.http.delete(this.urlUsers, this.options)
      .toPromise()
      .then(() => {
        return;
      })
      .catch(this.handleError);
  }

  public patchUser(user: any): Promise<any> {
    return this.http.patch(this.urlUsers, JSON.stringify(user), this.options)
      .toPromise()
      .then(this.extractData)
      .then((data) => {
        this.loggedIn = data;
        this.loggedIn.userId = data.id;
        delete this.loggedIn.id;

        return;
      })
      .catch(this.handleError);
  }

  private extractData(res: Response) { //tslint:disable-line
    let body = res.json();
    return body.data || body || {};
  }

  private handleError(error: any) {
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
