// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  sharedTitle: number = 18;
  sharedSubtitle: number = 15;
}