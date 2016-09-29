import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'my-adventurer',
  styleUrls: ['./adventurer.component.css'],
  templateUrl: './adventurer.component.html'
})

export class AdventurerComponent implements AfterViewInit {

  // Lifecycle Hooks
  public ngAfterViewInit() {
    window.scrollTo(0, 1);
    window.scrollTo(0, 0);
  }
}
