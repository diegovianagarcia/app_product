import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { Auth } from '../user/auth';
import { environment } from "../../../environments/environment";


const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  authenticate(userName: string, password: string) {

    return this.http
      .post<Auth>(
        API_URL + '/auth/local',
        { identifier: userName, password: password },
        { observe: 'response', responseType: 'json' }
      )
      .pipe(tap(res => {
        const authToken = res.body
        this.userService.setToken(res.body);
        // console.log(`User ${userName} authenticated with token ${authToken}`);
        console.log(res.body.user)
      }));
  }
}