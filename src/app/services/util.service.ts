import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public addUserDetail = new BehaviorSubject<any>(null);

  linkGeneration(url) {
    return `http://localhost:8080/${url}`;
  }

  GetUserDetails(): Observable<any> {
    return this.addUserDetail.asObservable();
  }

}
