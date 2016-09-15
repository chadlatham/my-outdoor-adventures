import { SearchResultsComponent } from './search-results.component';
import { TestBed } from '@angular/core/testing';

describe('SearchResults', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [SearchResultsComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(SearchResultsComponent);

    expect(fixture.componentInstance instanceof SearchResultsComponent)
      .toBe(true, 'should create SearchResultsComponent');
  });
});
