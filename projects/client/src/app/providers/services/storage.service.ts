import { Inject, Injectable, InjectionToken } from '@angular/core';

export function storageFactory(): Storage {
  if (localStorage) {
    return localStorage;
  }
  return {
    length: 0,
    name: 'fakeStorage',
    clear: () => {
    },
    getItem: () => null,
    key: () => null,
    removeItem: () => {
    },
    setItem: () => {
    },
  };
}

export const STORAGE = new InjectionToken<Storage>('Storage', {
  providedIn: 'root',
  factory: storageFactory
});


@Injectable({providedIn: 'root'})
export class StorageService {

  constructor(@Inject(STORAGE) private storage: Storage) {
  }

  get(key: string): string {
    return this.storage.getItem(key);
  }

  set(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}
