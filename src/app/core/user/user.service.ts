import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
// import * as jtw_decode from 'jwt-decode';
import { Auth } from './auth';

@Injectable({ providedIn: 'root' })
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;

    constructor(private tokenService: TokenService) {

        this.tokenService.hasToken() &&
            this.decodeAndNotify();
    }

    setToken(token: Auth) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const auth = this.tokenService.getToken();
        this.userName = auth.user.username
        this.userSubject.next(auth.user);
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserName() {
        return this.userName;
    }
}