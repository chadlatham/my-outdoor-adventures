import * as _ from "lodash"; //tslint:disable-line
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(
    private adventuresService: AdventuresService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.adventures = [];
    this.adventuresSubscription = this.adventuresService.adventuresUpdated$
      .subscribe((adventures: any) => {
        this.adventures = adventures;
      });
  }

  // Lifecycle Hooks
  public ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let userName = params['userName'];
      this.adventuresService.updateAdventures(userName)
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

  // Private methods
}
