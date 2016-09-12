import { LandingComponent } from './landing.component';
import { TestBed } from '@angular/core/testing';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';

describe('Landing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingComponent],
      imports: [MdButtonModule, MdCardModule]
    });
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(LandingComponent);

    expect(fixture.componentInstance instanceof LandingComponent).toBe(true, 'should create LandingComponent');
  });
});
