import { Injectable } from '@angular/core';
import { Auth } from '../user/auth';

const KEY = 'authToken';

@Injectable({ providedIn: 'root' })
export class TokenService {

    hasToken() {
        return !!this.getToken();
    }

    setToken(token: Auth) {
        const jsonToken = JSON.stringify(token);
        window.localStorage.setItem(KEY, jsonToken);
    }

    getToken() {
        const jsonToken = window.localStorage.getItem(KEY);
        return JSON.parse(jsonToken) as Auth
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }
}