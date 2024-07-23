import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLanguageService {

  constructor() { }
  listOfItems = [
    { id: 1, name: 'English' },
    { id: 2, name: 'العربيه' },
    { id: 3, name: 'Deutsch' },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' }
  ];
}
