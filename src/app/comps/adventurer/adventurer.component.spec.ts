import { AdventurerComponent } from './adventurer.component';
import { TestBed } from '@angular/core/testing';

describe('Adventurer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AdventurerComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AdventurerComponent);

    expect(fixture.componentInstance instanceof AdventurerComponent).toBe(true, 'should create AdventurerComponent');
  });
});
