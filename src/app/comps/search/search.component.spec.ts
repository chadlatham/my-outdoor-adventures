import { SearchComponent } from './search.component';
import { TestBed } from '@angular/core/testing';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';

describe('Search', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [MdButtonModule, MdCardModule]
    });
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(SearchComponent);

    expect(fixture.componentInstance instanceof SearchComponent).toBe(true, 'should create SearchComponent');
  });
});
