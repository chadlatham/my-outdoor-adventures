import { TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';

describe('Main', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [MainComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(MainComponent);

    expect(fixture.componentInstance instanceof MainComponent).toBe(true, 'should create MainComponent');
  });
});
