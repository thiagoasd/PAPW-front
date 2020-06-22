import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/models';
import { Router, CanActivate } from '@angular/router';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  url: string = "http://localhost:3333/sessions";

  constructor(private httpClient: HttpClient, private router: Router) { }

  logar(telefone: string, senha: string) {
    let user: User = <User>{ phone_number: telefone, password: senha };
    return this.httpClient.post(this.url, user)
  }

  public autenticado(): boolean {
    const token = localStorage.getItem('token');
    return !!(token);
  }

  canActivate(): boolean {
    if (!this.autenticado()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders().append("Authorization", "Bearer " + this.getToken());
  }

}
