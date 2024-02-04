import { Injectable } from '@angular/core';
import { HeroData } from '../../interfaces/hero-data';

@Injectable({
  providedIn: 'root',
})
export class HeroServiceService {
  private data: { [key: string]: HeroData } = {}; // Initialized as an empty object

  constructor() {}

  // Method to set data
  setData(key: string, value: HeroData): void {
    this.data[key] = value;
  }

  // Method to get data
  getData(key: string): HeroData {
    return this.data[key];
  }
}
