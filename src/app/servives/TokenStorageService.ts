import { Injectable } from '@angular/core';

const TOKEN_KEY = 'CURRENT_TOKEN';
const USER_KEY = 'CURRENT_USER';
const SESSIONID_KEY = 'CURRENT_SESSIONID';

@Injectable({ providedIn: 'root' })
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  saveSessionId(sesstionID: string) {
    window.sessionStorage.removeItem(SESSIONID_KEY);
    window.sessionStorage.setItem(SESSIONID_KEY, sesstionID);
  }

  getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}