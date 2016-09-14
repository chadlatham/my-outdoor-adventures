import { CampgroundComponent } from './campground.component';
import { TestBed } from '@angular/core/testing';

describe('Campground', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [CampgroundComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(CampgroundComponent);

    expect(fixture.componentInstance instanceof CampgroundComponent).toBe(true, 'should create CampgroundComponent');
  });
});
