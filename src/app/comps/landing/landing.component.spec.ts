import { LandingComponent } from './landing.component';
import { TestBed } from '@angular/core/testing';

describe('Landing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [LandingComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(LandingComponent);

    expect(fixture.componentInstance instanceof LandingComponent).toBe(true, 'should create LandingComponent');
  });
});
