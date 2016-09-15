import { SearchCampsComponent } from './search-camps.component';
import { TestBed } from '@angular/core/testing';

describe('SearchCamps', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [SearchCampsComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(SearchCampsComponent);

    expect(fixture.componentInstance instanceof SearchCampsComponent)
      .toBe(true, 'should create SearchCampsComponent');
  });
});
