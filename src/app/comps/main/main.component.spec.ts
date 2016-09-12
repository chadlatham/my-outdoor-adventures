import { MainComponent } from './main.component';
import { TestBed } from '@angular/core/testing';

describe('Main', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [MainComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(MainComponent);

    expect(fixture.componentInstance instanceof MainComponent).toBe(true, 'should create MainComponent');
  });
});
