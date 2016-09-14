import { NotFoundComponent } from './not-found.component';
import { TestBed } from '@angular/core/testing';

describe('Not Found', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [NotFoundComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(NotFoundComponent);

    expect(fixture.componentInstance instanceof NotFoundComponent).toBe(true, 'should create NotFoundComponent');
  });
});
