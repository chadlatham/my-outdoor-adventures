import * as _ from "lodash"; //tslint:disable-line
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

// Custom Services
import { AdventuresService } from '../../srvcs/adventures.service';
import { AuthService } from '../../srvcs/auth.service';

// Materialize variables
declare const $: any;
declare const Materialize: any;

@Component({
  selector: 'my-adventurer',
  styleUrls: ['./adventurer.component.css'],
  templateUrl: './adventurer.component.html'
})

export class AdventurerComponent implements AfterViewInit, OnDestroy, OnInit {
  private adventuresSubscription: Subscription;
  private adventures: Array<any>;
  private userName: string;

  constructor(
    private adventuresService: AdventuresService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this.adventures = [];
    this.adventuresSubscription = this.adventuresService.adventuresUpdated$
      .subscribe((adventures: any) => {
        this.adventures = adventures;
      });
  }

  // Lifecycle Hooks
  public ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.userName = params['userName'];
      this.adventuresService.updateAdventures(this.userName)
        .catch((err) => {
          console.log(err); //tslint:disable-line
          Materialize.toast(err, 3000, 'rounded');
        });
    });
  }

  public ngAfterViewInit() {
    window.scrollTo(0, 1);
    window.scrollTo(0, 0);
  }

  public ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.adventuresSubscription.unsubscribe();
  }

  // Event Handlers
  onClickAdventure(event: any, adventure: any) { //tslint:disable-line
    const target = event.target;

    if (target.nodeName === 'IMG' || target.id === 'materialbox-overlay') {
      return;
    }

    const link = ['/campground', adventure.ridbFacilityId];
    this.router.navigate(link);
  }

  onClickSearch() { //tslint:disable-line
    const link = ['/search'];
    this.router.navigate(link);
  }

  // Private methods
}
