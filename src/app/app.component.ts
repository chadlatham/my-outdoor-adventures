import '../../public/css/styles.css';

import {
  Component,
  HostListener,
  OnInit,
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/core';
import { Router } from '@angular/router';

// Custom Services
import { AuthService } from './srvcs/auth.service';
import { FacilitiesService } from './srvcs/facilities.service';
import { IpInfoService } from './srvcs/ip-info.service';

declare const $: any;
declare const Materialize: any;

@Component({
  animations: [
    trigger('navAnimation', [
      state('expanded', style({
        height: '210px'
      })),
      state('collapsed',   style({
        height: '74px'
      })),
      transition('expanded <=> collapsed', animate('300ms ease-out'))
    ])
  ],
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit { // tslint:disable-line

  private navState: string;
  private title: string;

  constructor(
    private authService: AuthService,
    private facilitiesService: FacilitiesService,
    private ipInfoService: IpInfoService,
    private router: Router
  ) {
    this.title = 'My Outdoor Adventures';
    this.navState = 'expanded';
  }

  // Lifecycle Hooks
  ngOnInit() { //tslint:disable-line
    // Initialize the ipinfo and facilities data
    this.ipInfoService.updateInfo()
      .then(() => {
        const info = this.ipInfoService.info;

        if (this.ipInfoService.states.indexOf(info.regionCode) < 0) {
          //tslint:disable-next-line
          throw new Error('IP address is located outside United States. Campground data is only relevant to the US.');
        }

        const search = {
          latitude: info.latitude,
          limit: 20,
          longitude: info.longitude,
          radius: 200
        };

        return this.facilitiesService.updateFacilities(search);
      })
      .catch((errMsg) => {
        Materialize.toast(errMsg, 3000, 'rounded');
      });
  }

  // Event Listeners
  @HostListener('window:beforeunload', ['$event'])
  private onBeforeUnload(event: any) { // tslint:disable-line
    window.scrollTo(0, 0);
  }

  // @HostListener('document:keyup', ['$event'])
  // @HostListener('window:resize', ['$event'])
  @HostListener('window:scroll', ['$event'])
  private onScroll(event: any) { // tslint:disable-line
    if (event.currentTarget.scrollY === 0) {
      this.navState = 'expanded';
    } else {
      if (this.navState === 'expanded') {
        $('body').css('overflow', 'hidden');
        window.setTimeout(() => {
          $('body').css('overflow', 'initial');
        }, 300);
      }
      this.navState = 'collapsed';
    }
  }

  private onLogout() { //tslint:disable-line
    this.authService.logout()
      .then(() => {
        const link = ['/search'];
        this.router.navigate(link);
      })
      .catch((err) => {
        Materialize.toast('Failed to logout', 4000, 'rounded');
      });
  }

  // Private Methods
}
