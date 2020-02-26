import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  linkGeneration(url) {
    return `http://localhost:8080/${url}`;
  }

}
