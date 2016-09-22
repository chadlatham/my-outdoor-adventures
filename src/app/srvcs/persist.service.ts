import { Injectable } from '@angular/core';

@Injectable()
export class PersistService {
  // Public properties
  public searchCity: string;
  public searchState: string;
  public searchRadius: string;
  public searchName: string;
  public searchSortby: string;
  public searchScrollHeight: number;

  constructor() {
    this.searchCity = '';
    this.searchState = '';
    this.searchRadius = '200';
    this.searchName = '';
    this.searchSortby = 'name';
    this.searchScrollHeight = 0;
  }
}
