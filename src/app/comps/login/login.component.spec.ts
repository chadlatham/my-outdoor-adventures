import { LoginComponent } from './login.component';
import { TestBed } from '@angular/core/testing';

describe('Login', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [LoginComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(LoginComponent);

    expect(fixture.componentInstance instanceof LoginComponent).toBe(true, 'should create LoginComponent');
  });
});
