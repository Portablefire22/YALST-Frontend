import { Service } from '@angular/core';

@Service()
export class LocalStorageService {

  constructor() {}

  setItem(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }
  // Get data from local storage
  getItem(key: string): any {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Error reading from local storage', e);
      return null;
    }
  }

  // Remove data from local storage
  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing from local storage', e);
    }
  }

  // Clear all local storage data
  clear(): void {
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Error clearing local storage', e);
    }
  }
}
