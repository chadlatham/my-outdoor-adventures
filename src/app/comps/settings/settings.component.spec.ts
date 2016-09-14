import { SettingsComponent } from './settings.component';
import { TestBed } from '@angular/core/testing';

describe('Settings', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [SettingsComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(SettingsComponent);

    expect(fixture.componentInstance instanceof SettingsComponent).toBe(true, 'should create SettingsComponent');
  });
});
