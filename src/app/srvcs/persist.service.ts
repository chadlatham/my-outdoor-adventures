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
  public searchLimit: number;
  public searchOffset: number;
  public searchOffsetClicked: boolean;
  public searchInProgress: boolean;
  public searchChanged: boolean;
  public navState: string;

  constructor() {
    this.searchCity = '';
    this.searchState = '';
    this.searchRadius = '100';
    this.searchName = '';
    this.searchSortby = 'name';
    this.searchScrollHeight = 0;
    this.searchLimit = 50;
    this.searchOffset = 0;
    this.searchOffsetClicked = false;
    this.searchInProgress = false;
    this.searchChanged = false;
    this.navState = 'expanded';
  }
}
