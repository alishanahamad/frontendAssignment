import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private httpClient: HttpClient,
              private utilService: UtilService) { }

  url = this.utilService.linkGeneration('userDetail');


  getUserDetails(): Promise<any> {
    return this.httpClient.get<any>(this.url)
      .toPromise()
      .catch(error => Promise.reject(error));
  }

  addUserDetail(userRequestBody) {
    return this.httpClient.post<any>(this.url, userRequestBody)
      .toPromise()
      .catch(error => Promise.reject(error));
  }

  updateUserDetail(userID, updateBody): Promise<any> {
    return this.httpClient.post<any>(`${this.url}/${userID}`, updateBody)
      .toPromise()
      .catch(error => Promise.reject(error));
  }

  deleteUserDetail(userID): Promise<any> {
    return this.httpClient.delete<any>(`${this.url}/${userID}`)
      .toPromise()
      .catch(error => Promise.reject(error));
  }
}
