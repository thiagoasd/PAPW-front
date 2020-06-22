import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/models';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string = "http://localhost:3333";

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  cadastrar(nome: string, telefone: string, senha: string) {
    let user: User = <User>{ name: nome, phone_number: telefone, password: senha };
    return this.httpClient.post(this.url + "/users", user)
  }

  meuPerfil() {
    return this.httpClient.get(this.url + "/users/me", { headers: this.getHeaders() })
  }

  editarMeuPerfil(nome: string, telefone: string, senha: string) {
    let tmp = { name: nome, phone_number: telefone, password: senha }
    return this.httpClient.put(this.url + "/users/me", tmp, { headers: this.getHeaders() })
  }

  excluirMeuPerfil() {
    return this.httpClient.delete(this.url + "/users/me",{ headers: this.getHeaders() })
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders().append("Authorization", "Bearer " + this.authService.getToken());
  }

}
