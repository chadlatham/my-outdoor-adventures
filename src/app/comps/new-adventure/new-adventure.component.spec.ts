import { NewAdventureComponent } from './new-adventure.component';
import { TestBed } from '@angular/core/testing';

describe('New Adventure', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [NewAdventureComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(NewAdventureComponent);

    expect(fixture.componentInstance instanceof NewAdventureComponent)
      .toBe(true, 'should create NewAdventureComponent');
  });
});
