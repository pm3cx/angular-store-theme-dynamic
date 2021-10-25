import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  constructor() {}

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string) {
    try {
        const store = localStorage.getItem(key);
            if (store)
                return JSON.parse(store);
            else return null;
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}