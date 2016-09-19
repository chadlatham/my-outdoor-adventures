import '../../public/css/styles.css';

import {
  Component,
  HostListener,
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/core';

// Router options for auth routes
import { Router } from '@angular/router';

// Custom Services
import { AuthService } from './srvcs/auth.service';

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

export class AppComponent { // tslint:disable-line

  private navState: string;
  private title: string;

  constructor(private authService: AuthService, private router: Router) {
    this.title = 'My Outdoor Adventures';
    this.navState = 'expanded';
  }

  // Lifecycle Hooks

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
